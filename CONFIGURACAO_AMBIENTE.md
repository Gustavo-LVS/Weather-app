# Configuração de Variáveis de Ambiente

## 🔐 Segurança das API Keys

Este projeto agora utiliza variáveis de ambiente para proteger informações sensíveis como API keys.

## 📝 Como Configurar

### 1. Arquivos de Environment

Os arquivos de configuração estão localizados em `src/environments/`:

- **environment.ts** - Ambiente de desenvolvimento (NÃO commitar)
- **environment.prod.ts** - Ambiente de produção (NÃO commitar)
- **environment.example.ts** - Arquivo de exemplo (pode commitar)

### 2. Configuração Inicial

Se você clonou este repositório, siga estes passos:

1. Copie o arquivo de exemplo:
   ```bash
   cp src/environments/environment.example.ts src/environments/environment.ts
   ```

2. Edite o arquivo `src/environments/environment.ts` e adicione sua API key do OpenWeatherMap:
   ```typescript
   export const environment = {
     production: false,
     weatherApiKey: 'SUA_API_KEY_AQUI',
     weatherApiUrl: 'https://api.openweathermap.org/data/2.5/weather'
   };
   ```

3. Faça o mesmo para produção (se necessário):
   ```bash
   cp src/environments/environment.example.ts src/environments/environment.prod.ts
   ```

### 3. Obtendo uma API Key

1. Acesse [OpenWeatherMap](https://openweathermap.org/api)
2. Crie uma conta gratuita
3. Gere uma API key no seu dashboard
4. Cole a key no arquivo `environment.ts`

## ⚠️ IMPORTANTE

- **NUNCA** commite os arquivos `environment.ts` ou `environment.prod.ts`
- Estes arquivos já estão no `.gitignore`
- Use o arquivo `environment.example.ts` como referência
- Mantenha suas keys em segredo

## 🚀 Uso

O serviço `WeatherService` agora importa automaticamente as configurações:

```typescript
import { environment } from '../../../../environments/environment';

// As keys são carregadas automaticamente
private readonly apiKey = environment.weatherApiKey;
private readonly apiUrl = environment.weatherApiUrl;
```

## 🔄 Build de Produção

Ao executar `ng build --configuration production`, o Angular automaticamente substitui o arquivo `environment.ts` pelo `environment.prod.ts`.

## 📦 Checklist para Deploy

- [ ] Criar arquivo `environment.prod.ts` com as keys de produção
- [ ] Verificar se `.gitignore` está configurado corretamente
- [ ] Nunca expor as keys em logs ou console
- [ ] Usar variáveis de ambiente do servidor/host quando possível

