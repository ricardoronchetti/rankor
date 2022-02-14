<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="https://i.imgur.com/O26rFw6.png" alt="Logo" width="80" height="80">
  <h3 align="center">Rankor: The Gamer's Ranking Social Network</h3>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#authors">Authors</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Rankor: The Gamer's Ranking Social Network is our second project develop in Ironhack Madrid. It's a social network oriented to gamers.

The user can search for an specific game and interact with another player that have the same taste in videogames.

The ranking system wants to promote the player interaction after a successful play session.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Bootstrap](https://getbootstrap.com)
* [Express](https://expressjs.com)
* [MongoDB](https://www.mongodb.com)
* [Mongoose](https://mongoosejs.com)
* [Node.js](https://nodejs.org)
* [Rawg](https://rawg.io)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ENDPOINTS -->
## Endpoints Summary
AUTH ROUTES:

| Method   | #GET    | #POST   | #GET   | #POST  | #GET    |
| -------- | ------- | ------- | ------ | ------ | ------- |
| Endpoint | /signup | /signup | /login | /login | /logout |
| Action   | Sign up | Sign up | Log in | Log in | Log out |

USER ROUTES:

| Method   | #GET           | #GET        | #GET      | #POST     | #GET        |
| -------- | -------------- | ----------- | ----------| --------- | ----------- |
| Endpoint | /              | /:id        | /:id/edit | /:id/edit | /:id/delete |
| Action   | Show all users | User detail | Edit user | Edit user | Delete user |

GAMES ROUTES:

| Method   | #GET           | #GET        | #POST                 |
| -------- | -------------- | ----------- | --------------------- |
| Endpoint | /              | /:id        | /:id                  |
| Action   | Show all games | Game detail | Register game in user |

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

* Packages
  ```sh
  npm install bcryptjs express-session connect-mongo
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [Rawg](http://rawg.io)
2. Clone the repo
   ```sh
   git clone https://github.com/ricardoronchetti/rankor.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
5. Run the project
   ```js
   npm run dev
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Guillermo Perez - [LinkedIn](https://linkedin.com/in/guillermo-perez-fuentes)
Ricardo Ronchetti - [LinkedIn](https://linkedin.com/in/ricardoronchetti)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Coming Soon!

<p align="right">(<a href="#top">back to top</a>)</p>