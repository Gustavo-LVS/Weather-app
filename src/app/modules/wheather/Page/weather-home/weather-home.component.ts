import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherData } from '../../../../models/interfaces/WeatherData';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faDroplet, faWind, faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './weather-home.component.html',
  styleUrl: './weather-home.component.css'
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  private readonly weatherDataSubject$ = new BehaviorSubject<WeatherData | null>(null);
  
  initialCity = '';
  weatherData$ = this.weatherDataSubject$.asObservable();
  searchIcon = faMagnifyingGlass;
  dropletIcon = faDroplet;
  windIcon = faWind;
  tempIcon = faTemperatureHalf;

  constructor(private readonly weatherService: WeatherService) { }
  
  ngOnInit(): void {
    this.getWeatherData('Campo Grande');
  }

  getWeatherData(city: string): void {  
    this.weatherService.getWeatherByCity(city)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response) => {
        console.log('Resposta recebida:', response);
        this.weatherDataSubject$.next(response);
        console.log('weatherData atualizado:', response);
      },
      error: (error) => {
        console.error(error); 
      }
    });
  }

  onSubmit(event?: Event): void {
    const cityToSearch = this.initialCity.trim();
    if (cityToSearch) {
      console.log('ANTES - weatherData:', this.weatherDataSubject$.value);
      console.log('Cidade buscada:', cityToSearch);
      this.getWeatherData(cityToSearch);
    }
  }

  getBackgroundImage(): string {
    const weatherData = this.weatherDataSubject$.value;
    if (!weatherData) return 'assets/primavera.jpg';
    
    const temp = weatherData.main.temp;
    if (temp < 10) return 'assets/frio.jpg';
    if (temp < 20) return 'assets/outono.jpg';
    if (temp < 25) return 'assets/primavera.jpg';
    return 'assets/verao.jpg';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}