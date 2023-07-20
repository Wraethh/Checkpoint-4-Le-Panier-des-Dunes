# Le Panier des Dunes 🥕

Welcome to "Le Panier des Dunes", the last project I had to do for my 5-months training as a web developer, but also the first fullstack project I've gotten to do all by myself, and within only 2 days' time !

## 📝 Description

"Le Panier des Dunes" is a responsive website I made to help my parents get some online visbility for their professional activity as farmers.
This can help them showcase their vegetables and give people a way to get in touch with them through this website, would they want to place an order or simply get some information.

## 💻 Development

Let's get technical.
I started development with [this tempalte](https://github.com/WildCodeSchool/js-template-fullstack)

### 📚 Stack

- This project was made using **React** and **CSS modules**.
- For the backend, I used **Express** as a framework for **Node.js**.
- I handled data through a database created with **MySQL**.
- I used **Excalidraw** to create a draft for my website and the CDM for my database. (Would have used **Figma** if I had more time though).
- I chose to apply **Agile** methodology, more precisely **Scrum**, and so I wrote some user stories that I organized via **Trello**.
- Finally, I managed to stay organized by versionning my work with **Git** and **GitHub**.

### 📦 Packages

Frontend-wise, this is what I used :

- _axios_ : to make HTTP requests
- _formik_ : to handle the contact form logic
- _yup_ : to handle form validation
- _emailjs_ : to send mails with contact form informations
- _leaflet_ & _react-leaflet_ : to provide an interactive map
- _react-toastify_ : for toast display
- _react-router-dom_ : to handle navigation
- _prop-types_ : to verify props

Concerning the backend side, I used :

- _argon2_ : to hash passwords and verify them
- _cookie-parser_ : to manage data passed to cookies
- _cors_ : to handle CORS logic
- _dotenv_ : to handle environment variables
- _jsonwebtoken_ : to create authentication tokens
- _mysql2_ : for SQL requests
- _yup_ : for backend data validation

## ⚙️ Setup & Use

### 🪟 Windows users

Be sure to run these commands in a git terminal to avoid [issues with newline formats](https://en.wikipedia.org/wiki/Newline#Issues_with_different_newline_formats):

```
git config --global core.eol lf
git config --global core.autocrlf false
```

### 🚀 Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- If you are using `yarn` or `pnpm`, adapt the `config/cli` in `package.json`
- Run command `npm install`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_

### ⌨️ Available Commands

- `migrate` : Run the database migration script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

## ❓ FAQ

### 🛠️ Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated

### 🌐 Deployment

For deployment, you have to go to `secrets` → app `actions` on the github repo to insert via `New repository secret` :

- CAPROVER_BACK_APPNAME : name app on caprover
- CAPROVER_FRONT_APPNAME : name app on caprover
- CAPROVER_PASSWORD : password caprover
- CAPROVER_SERVER : link of domain

## 🤔 What's Next ?

- I'd like to add a _Gallery_ section where people could see how and where the vegetables are produced.
- A proper way to place orders could be a great thing to have also.
- Following the last idea, setting up an online payment feature would be a nice addition.

## 🖼️ Screenshots

To wrap things up, I'll let you enjoy some screenshots of the project.

![Home page in its desktop version](/frontend/src/assets/_ressources_/screenshots/desktop-home.png)
![Vegetables page in its desktop version](/frontend/src/assets/_ressources_/screenshots/desktop-vege.png)
![Contact page in its desktop version](/frontend/src/assets/_ressources_/screenshots/desktop-contact.png)
![Vegetables page in its mobile version](/frontend/src/assets/_ressources_/screenshots/mobile-vege.png) ![Admin page in its mobile version](/frontend/src/assets/_ressources_/screenshots/mobile-admin.png) ![Home page in its mobile version](/frontend/src/assets/_ressources_/screenshots/mobile-home.png)
