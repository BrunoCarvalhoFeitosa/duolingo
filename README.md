<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/BrunoCarvalhoFeitosa/duolingo">
    <img src="/public/images/image-duolingo-avatar.png" alt="Logo" width="120" weight="120" />
  </a>

  <p align="center">
    Aplicação feita em Next.js, Typescript, Drizzle ORM, Clerk, PostgreSQL, Neon, Stripe, ShadcnUi e TailwindCSS. Foi criada uma landing page de apresentação que possui tradução através da biblioteca i18next, onde ao clicar na bandeira do país, o texto é instantâneamente traduzido, a página é totalmente resposniva e possui design moderno e fluído. Através da biblioteca Clerk foram criadas as páginas e os componentes customizados de cadastro e login, tendo inclusive integração com conta da Microsoft e Google. Caso o usuário não tenha login, a rota do game criado é protegida, ou seja, caso o usuário não esteja autenticado, ele é redirecionado à home page barrando o seu acesso. Caso o usuário esteja autenticado, ele possuirá acesso a principal funcionalidade criada, que é o jogo em si, onde existem diversas tarefas no idioma inglês, espanhol, francês e italiano. A cada resposta correta o usuário soma 10 pontos, estes pontos podem ser utilizados para comprar mais vidas, caso o estudante as perca ao responder as lições de maneira incorreta. No total são 5 vidas, com 10 pontos o estudante consegue as recuperar e caso o estudante possua interesse em adiquirir vidas infinitas, também é possível. Para as vidas infinitas foi criada uma integração com o Stripe e com 20 reais é possível compra-las sem se preocupar em errar as tarefas. 
  </p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#feito-com">Feito com</a></li>
        <li><a href="#hospedagem">Hospedagem</a></li>
      </ul>
    </li>
    <li>
      <a href="#iniciando-o-projeto">Iniciando o projeto</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#license">Licenças</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Sobre o projeto

### Homepage
A homepage é totalmente responsiva, se adapta a qualquer tamanho de tela, possui tradução dinâmica dos textos, possui diversas animações que são condizentes à proposta desta aplicação;

https://github.com/BrunoCarvalhoFeitosa/duolingo/assets/46093815/c9301f12-705d-4f1e-becd-205e4a64c664

### Login
Página de cadastro e login feitas com Clerk, hoje foi lançada uma feature BETA que possibilita a customização completa do fluxo de cadastro e login tendo tudo integrado de maneira fácil e rápida, antes não havia esta possibilidade, havia marca d'água nos componentes e não havia a possibilidade de mudar a linguagem, por exemplo, que era inglesa por padrão. 

https://github.com/BrunoCarvalhoFeitosa/duolingo/assets/46093815/a233004f-132a-440d-8dbd-d38b0e4e64ea

### Game
O game possui design semelhante à aplicação original, possui integração de sons, ou seja ao clicar sobre o card respostas a frase é falada, ao acertar ou errar uma tarefa um som de notificação é ativado, bem como quando a tarefa é completada com sucesso.

https://github.com/BrunoCarvalhoFeitosa/duolingo/assets/46093815/34336202-ca13-4b33-8fc6-994504a18df3

### Loja
Ao perder vidas ao longo do game, é possível recuperá-las com pontos já ganhos ao acertar as tarefas ou recupera-las com dinheiro monetário, foi criada uma integração com o Stripe, onde para ter vidas infinitas no game são necessários 20 reais.

https://github.com/BrunoCarvalhoFeitosa/duolingo/assets/46093815/c1dbb669-a954-47db-a5b1-7c96072bdb71

### Feito com

* [Next.js](https://nextjs.org)
* [Typescript](https://www.typescriptlang.org)
* [Drizzle ORM](https://orm.drizzle.team)
* [PostgreSQL](https://www.postgresql.org)
* [Neon](https://neon.tech)
* [Clerk](https://clerk.com)
* [TailwindCSS](https://tailwindcss.com)
* [Vercel](https://vercel.com)

### Hospedagem

A aplicação está em produção neste link: (https://bruno-carvalho-feitosa-duolingo.vercel.app).

<!-- GETTING STARTED -->
## Iniciando o projeto

Primeiramente será necessário clonar este projeto em (https://github.com/BrunoCarvalhoFeitosa/duolingo.git), após o download será necessário abrir este projeto no seu editor e no terminal digitar npm install ou yarn, posteriormente é só rodar em seu terminal o comando npm run dev ou yarn dev, após isso, a página será aberta em seu navegador. Lembrando que são necessárias algumas variáveis ambiente para que de fato a aplicação funcione sem erros.

### Pré-requisitos

* npm
  ```sh
  npm install npm@latest -g
  ```

### Instalação

1. Clone o repositório
   ```sh
   git clone https://github.com/BrunoCarvalhoFeitosa/duolingo.git
   ```
2. Instale os pacotes do NPM
   ```sh
   npm install ou yarn
   ```
   
3. Inicie o projeto
   ```sh
   npm run dev ou yarn dev
   ```   

<!-- LICENSE -->
## License

Distribuído sob a licença MIT.

<!-- CONTACT -->
## Contato

Bruno Carvalho Feitosa - [GitHub](https://github.com/BrunoCarvalhoFeitosa) - [LinkedIn](https://www.linkedin.com/in/bruno-carvalho-feitosa/)
