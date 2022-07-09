import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  // Get weather data**
  getWeatherData(cityName: string) {
    // API call to get weather data
    // js fetch
    this.http.get(environment.weatherAPIURL, {
      // MUST HAVE to communicate with the API server
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostName, environment.XRapidAPIHostValue)
        .set(environment.XRapidAPIKeyName, environment.XRapidAPIKeyValue),
      // Adding parameters to format/customize the URL parameters of the API to get the data we want
      params: new HttpParams()
        .set('q', cityName) // Got from the URL of the API
        .set('units', 'metric') // Got from the URL of the API
        .set('mode', 'json') // Got from the URL of the API
      
    })
  }    
}
