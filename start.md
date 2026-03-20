# Aemotech - Super Mocambique

O Super Mocambique e um app/site que conecta turistas a empreendedores e residentes locais, promovendo experiencias autenticas, espontaneas e acessiveis.

## Objetivo do projeto

Transformar bairros simples e menos conhecidos de Mocambique em pontos turisticos autenticos, gerando rendimento direto para as comunidades.

## Como rodar o projeto do zero (sem nada instalado)

Este projeto usa **Expo + React Native Web**. Voce pode rodar no navegador (site) e tambem no celular.

### 1. Instalar ferramentas

No Windows, instale:

1. **Node.js LTS (22.x ou 20.x)**
	- Baixe em: https://nodejs.org/
	- Durante a instalacao, mantenha as opcoes padrao.

2. **Git** (opcional, mas recomendado)
	- Baixe em: https://git-scm.com/downloads

3. **VS Code** (opcional, recomendado)
	- Baixe em: https://code.visualstudio.com/

Para testar no celular, instale tambem o app **Expo Go**:

4. **Expo Go**
	- Android: Play Store
	- iOS: App Store

### 2. Baixar o projeto

Se estiver com Git:

```bash
git clone <URL_DO_REPOSITORIO>
cd Aemotech/SuperMocambique
```

Se nao estiver com Git:

1. Baixe o ZIP do projeto.
2. Extraia o ZIP.
3. Abra a pasta `Aemotech/SuperMocambique` no terminal.

### 3. Instalar dependencias

Dentro da pasta `SuperMocambique`, rode:

```bash
npm install
```

### 4. Rodar como site (web)

Ainda dentro de `SuperMocambique`, rode:

```bash
npm run web
```

Depois abra no navegador o endereco mostrado no terminal (normalmente `http://localhost:8081`).

### 5. Rodar no celular (opcional)

Na mesma pasta, rode:

```bash
npm start
```

Depois:

1. Abra o **Expo Go** no celular.
2. Escaneie o QR Code exibido no terminal.

## Scripts disponiveis

Na pasta `SuperMocambique`:

- `npm start` -> inicia o Expo
- `npm run web` -> abre no navegador
- `npm run android` -> abre no Android (emulador/dispositivo)
- `npm run ios` -> abre no iOS (somente macOS)

## Solucao de problemas rapida

### Porta ocupada

Se a porta estiver ocupada, finalize o processo antigo ou rode novamente e escolha outra porta quando o Expo perguntar.

### Erro apos atualizar dependencias

Apague `node_modules` e `package-lock.json`, depois rode:

```bash
npm install
```

### Node muito antigo

Confirme a versao:

```bash
node -v
```

Se for muito antiga, atualize para Node.js LTS.

## Resumo rapido

Dentro da pasta `SuperMocambique`:

```bash
npm install
npm run web
```


