![meme-do-pikachu-surpreso-og](https://user-images.githubusercontent.com/45304605/83747584-37ee5600-a637-11ea-83b6-5a2e08308727.jpg)

## API pokémon

### Dotenv

Utilizamos para substituir dados sensíveis em uma API, exemplo a `key` de um usuário, inserimos ela no arquivo `.env` e ela é substituida pela váriavel ambiente.

Criando uma variável ambiente: <br>

1. Crie um arquivo `.env` na raiz do projeto

2. Insira a variável ambiente dentro do arquivo `.env` seguindo esse modelo: <br>
ex: `NODE_KEY=1234` <br>

3. Substitua no código as informações sensíveis pela variável de ambiente:

```
{
  key: process.env.NODE_KEY
}
```

O que ele faz?

Substitui no local que chamado `process.env.NODE_KEY` pelo valor da variável que está no arquivo `.env`

*OBS*: colocar o arquivo `.env` dentro do `.gitignore` antes de subir o projeto, por questões de segurança, já que você não quer expor dados sensíveis.

NODE_ENV: geralmente é usado para definir se a variável ambiente seguirá para production ou development


chamar a variavel antes, no inicio de todo arquivo, pra nao correr o risco de aparecer para o usuario e expor dados importantes (pra ser carregado antes)

#### Iniciando
```
require('dotenv/config')

console.log(process.env.NODE_KEY)
```

### Makefile

Criar um arquivo com o nome `Makefile`. </br>
Deve ser colocado o tab e não espaços para que a execução ocorra corretamente. </br>
Exemplo:
```
start:
    npm start
```

### Docker

`FROM`: colocamos o nome da linguagem e a versão que queremos utilizar dela.

`WORKDIR`:

`COPY`:

`RUN`:

`COPY . . `:

`EXPOSE`:

`CMD`:

#### Docker Compose


### Lembretes

* Rodar migrations antes de subir o servidor incluir no `make` antes do npm start