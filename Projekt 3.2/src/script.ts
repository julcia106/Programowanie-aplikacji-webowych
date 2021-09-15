const API_KEY = `f15b0bd90f5940c496c160503212208`;
const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

class WeatherApp{

    public cities: City[] = [];
    
    constructor(public element:any){

        this.element = element;
        const citiesJson = localStorage.getItem('cities');
        let cities: City[] = [];

        //retrieve data from local storage
        if(citiesJson) this.cities = JSON.parse(citiesJson);
        this.cities = this.cities.map(c => new City(c.name, this));
        this.render();
    }

    public addCity(c: any): void{
        this.cities.push(c);
        this.render();
        this.saveIntoStorage();
    }

    public removeCity(c: any): void{

        this.cities = this.cities.filter(city => city.name !== c.name); //pierwsze city to parametr funkcji => return
        //The filter() method filters an array according to provided criteria, returning a new array containing the filtered items.
        this.render();
        this.saveIntoStorage();
    }

    public render(): void{
        this.element.innerHTML = '';
        this.cities.forEach(city => city.render(this.element))
    }

    saveIntoStorage(){
        localStorage.setItem('cities', JSON.stringify(this.cities))
    }
}

class City{

    constructor(public name: any, public app: any){ //sprawdz czy any
        this.name = name;
        this.app = app;
    }

    public async getWeather(){ // sprawdź typ!!
        const res = await fetch(`${API_URL}&q=${this.name}`)
        .then((response:any) => response.json())
        return res.current.temp_c;
    }

    public async getPressure(){
        const res = await fetch(`${API_URL}&q=${this.name}`)
        .then((response:any) => response.json()) // i tutaj tak samo! typ

        return res.current.pressure_mb;
    }

    public async getHumidity(){
        const res = await fetch(`${API_URL}&q=${this.name}`)
        .then((response:any) => response.json())

        return res.current.humidity;
    }

    public async getCondition(){
        const res = await fetch(`${API_URL}&q=${this.name}`)
        .then((response:any) => response.json())

        return res.current.condition.icon;
    }

    public async render(ctr){
        const temp = await this.getWeather();
        const pressure = await this.getPressure();
        const humidity = await this.getHumidity();
        const icon = await this.getCondition();

        const cityEl = document.createElement('div');
        cityEl.className = 'city-el d-flex flex-column align-items-center'
        cityEl.innerHTML = `
            <span class = "city-temp">${temp}℃</span>
            <span class = "city-name">${this.name}</span>
            <span class = "city-other">${pressure} mbar</span>
            <span class = "city-other">${humidity}%</span>
            <span><img src=${icon}></span>
            
            <span class = "city-close"><i class="fas fa-times"></i></span>
        `
        ctr.appendChild(cityEl);
        const close = cityEl.querySelector('.city-close');
        close.addEventListener('click',() => this.app.removeCity(this)) 
    }

    toJSON(){
        return {name: this.name};
    }
}

// Pierwsze wyszukiwanie

const modal = document.querySelector('#addCityModal');
const bootstrapModal = new bootstrap.Modal(modal, {
    keyboard: false
})

const input = document.querySelector('#cityName');
const saveBtn = document.querySelector('#saveCity');
saveBtn.addEventListener('click', () => {
    addCity();
})

input.addEventListener('keypress', (ev:any) =>{
    if(ev.key === 'Enter'){
        addCity();
    }
})

modal.addEventListener('show.bs.modal', () => {
    input.focus();
})

function addCity(): void{
    const city = new City(input.value, app);
    app.addCity(city);
    bootstrapModal.hide();
    input.value = '';
}

const app = new WeatherApp(document.querySelector('.weather-locations'));