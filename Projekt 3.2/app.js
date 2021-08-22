const API_KEY = `f15b0bd90f5940c496c160503212208`;
const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

class App {

    constructor(el){
        this.el = el;
        const citiesJson = localStorage.getItem('cities');
        let cities = [];

        if(citiesJson){
            cities = JSON.parse(citiesJson);
        }
        this.cities = this.cities.map(c => new City(c.name, this));
        this.render();
    }

    addCity(c){
        this.cities.push(c);
        this.render();
        this.saveIntoStorage();
    }

    removeCity(c){
        // Way 1
        const index = this.cities.findIndex(city => city.name === c.name);
        this.cities.splice(index,1);

        // Way 2
        //this.cities = this.cities.filter(city => city.name !== c.name);

        this.render();
    }

    render(){
        this.el.innerHTML = '';
        this.cities.forEach(city => city.render(this.el))
    }

    saveIntoStorage(){
        localStorage.setItem('cities', JSON.stringify(this.cities))
    }
}

class City{
    constructor(name, app){
        this.name = name;
        this.app = app;
    }

    async getWeather(){
        const res = await fetch(`${API_URL}&q=${this.name}`)
        .then(response => response.json())
        // jak chcesz wyciagnac inne wartosci to 18 min

        return res.current.temp_c;

    }

    async render(ctr){
        const temp = await this.getWeather();
        const cityEl = document.createElement('div');
        cityEl.className = 'city-el d-flex flex-column align-items-center'
        cityEl.innerHTML = `
            <span class = "city-temp>${temp}℃</span>
            <span class = "city-name>${this.name}</span>
            <span class = "city-close"><i class="fas fa-times"></i></span>
        `
        ctr.appendChild(cityEl);
        const close = cityEl.querySelector('city-close');
        close.addEventListener('click', this.app.removeCity(this)) 
    }

    toJSON(){
        return {name: this.name};
    }
}

const app = new App(document.querySelector('.weather-locations'));

const modal = document.querySelector('#addCityModal');
const bootstrapModal = new bootstrap.Modal(modal, {
    keyboard: false
})

const input = document.querySelector('#cityName');
const saveBtn = document.querySelector('#saveCity');
saveBtn.addEventListener('click', () => {
    addCity();
})

input.addEventListener('keypress', (ev) =>{
    if(ev.key === 'Enter'){
        addCity();
    }
})

modal.addEventListener('show.bs.modal', () => {
    input.focus();

})

function addCity(){
    const city = new City(input.value, app);
    app.addCity(city);
    bootstrapModal.hide();
    input.value = '';
}