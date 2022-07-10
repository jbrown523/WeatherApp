import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weatherModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  // Get weather data**
  // : <returnType>
  getWeatherData(cityName: string): Observable<WeatherData> {
    // API call to get weather data
    // js fetch
    // Map the weather data to model here <weatherData>
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      // MUST HAVE to communicate with the API server
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      // Adding parameters to format/customize the URL parameters of the API to get the data we want
      params: new HttpParams()
        .set('q', cityName) // Got from the URL of the API, only required param
        .set('units', 'metric') // Got from the URL of the API
        .set('mode', 'json') // Got from the URL of the API
      
    })
  }    
}
