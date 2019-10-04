# Finance App

Aplicação feita em Vue.js para consumir a API financeira [HG Finance](https://hgbrasil.com/status/finance/)

## Configuração e instalação do projeto
```
yarn install
```

### Executa projeto em ambiente de desenvolvimento
```
yarn run serve
```

### Gera _build_ do projeto para ambiente de produção
```
yarn run build
```

### Executa _lints_ do projeto
```
yarn run lint
```

## Instruções de uso

1. Depois de executar o comando `yarn install` e `yarn run serve` acesse o endereço `http://localhost:8080/`.

2. Para ter acesso aos dados é necessário criar uma conta na aplicação. Essa conta é criada em `localStorage` para apenas simular ações como _login_, cadastro e tempo de sessão (o tempo de sessão é de 5 minutos depois disso o usuário será redirecionado para tela de _login_).

3. Após fazer o cadastro o usuário é direcionado para tela de _login_ onde o mesmo pode colocar suas credenciais para entrar no sistema.

4. Na tela inicial o sistema exibe os principais dados da API para o usuário (moedas, mercados financeiros e bitcoin)

5. Na barra de navegação é exibido o nome do usuário e existe um _link_ para o perfil do usuário, no momento está apenas para simular navegação de telas logadas e verificar sessão.