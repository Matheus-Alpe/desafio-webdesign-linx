
# Desafio Web Design Linx


- [About](#about)
- [Layout](#layouts)
    - Desktop
    - Mobile

- [Requirements](#requirements)
- [Install](#install)
- [Running the project](#running-the-project)

---
## About
This repository was made in order to post my the test of the Web Design challenge from [Linx](https://www.linx.com.br/). 
Project has a live preview on heroku, check it out! <strong>[Desafio Web Design Linx](https://desafio-webdesign-linx.herokuapp.com/)</strong>.

---
## Layouts
#### - Desktop Layout
![screenshot](./readme-file/desktop.gif)

<br/>
<br/>

#### - Mobile Layout
![screenshot](./readme-file/mobile.gif)

---
## Requirements

    - NodeJS
    - Yarn

#### - Development Dependencies:

    - browser-sync  ->  hot reload on saving files;
    - node-sass     ->  compile .scss to .css file;
    - npm-run-all   ->  run package scripts in parallel;

#### - Dependencies:

    - express       ->  server to deploy on heroku;

---
## Install

    $ git clone https://github.com/Matheus-Alpe/desafio-webdesign-linx.git
    $ cd desafio-webdesign-linx
    
#### Install project dependecies

    $ yarn install


---
## Running the project 

#### - Development Env

    $ yarn run dev

    Open '/dist/index.html' and be happy! 😌

#### - Production Env

    $ yarn start

