
export class App {
    opwApiKey = '3fe857ce3e9c56a1d1ac96c0e69e975a';
    constructor() {
        this.getCityInfo('zakopane');
    }

    async getCityInfo(city: string) {
        const weather = await this.getWeather('zakopane');
        this.saveData(weather);
    }

    async getWeather(city: string): Promise<any>{

        const openWeatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=${city name}&appid=${this.opwApiKey}';
        const weatherResponse = await fetch(openWeatherUrl); 
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        return weatherData;
    }

    saveData(data: any) {
        localStorage.setItem('weatherData', JSON.stringify(data));
    }

    getData() {
        const data = localStorage.getItem('weatherData');
        if(data){
            return JSON.parse(data);
        } else {
            return{};
        }
    }
}