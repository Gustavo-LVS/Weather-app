import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly apiKey = environment.weatherApiKey;
  private readonly apiUrl = environment.weatherApiUrl;

  constructor(private readonly http: HttpClient) { }

  getWeatherByCity(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric&lang=pt_br`);
  }
}
