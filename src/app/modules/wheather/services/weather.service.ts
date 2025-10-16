import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly apiKey = '56a4b753a9c7fa4f83378204e0f3352f';
  private readonly apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private readonly http: HttpClient) { }

  getWeatherByCity(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric&lang=pt_br`);
  }
}
