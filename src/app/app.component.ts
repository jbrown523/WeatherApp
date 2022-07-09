import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent implements OnInit {

  // Inject service into constructor, so we can call it directly
  constructor(private weatherService: WeatherService) { 
  }

  ngOnInit(): void {
    this.weatherService.getWeatherData('Shreveport')
      .subscribe({
        next: (res) => { 
          console.log(JSON.stringify(res));
        }
    })
  }
}
