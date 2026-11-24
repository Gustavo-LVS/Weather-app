# Weather App

Clima atual por cidade, com a temperatura, a sensação térmica e as condições do tempo. O fundo da tela muda de acordo com a temperatura.

## Stack

Angular 20 com renderização no servidor (SSR), Tailwind CSS, Font Awesome e a API do [OpenWeatherMap](https://openweathermap.org/api).

## Como rodar

1. Crie uma chave gratuita no OpenWeatherMap.
2. Copie o arquivo de exemplo e coloque a chave nele:

   ```bash
   cp src/environments/environment.example.ts src/environments/environment.ts
   ```

   O `environment.ts` está no `.gitignore` e não vai para o repositório. Mais detalhes em [CONFIGURACAO_AMBIENTE.md](CONFIGURACAO_AMBIENTE.md).

3. Rode:

   ```bash
   npm install
   npm start
   ```

Abra `http://localhost:4200`.
