import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weatherModel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent implements OnInit {

  // Inject service into constructor, so we can call it directly
  constructor(private weatherService: WeatherService) { 

  }

  // :Of type 
  // ? Can be undefined to start
  weatherData?: WeatherData
  cityName: string = 'Shreveport';

  ngOnInit(): void {
    this.weatherService.getWeatherData('Shreveport')
      .subscribe({
        next: (res) => { 
          this.weatherData = res; // Assign weather data to response, so we can call in our app
          console.log(res);
        }
    })
  }
}
