# How to setup a new React Project using parcel

- create a folder and create index.html, style.css, script.js
- link script.js and style.css to index.html
- create a div with id="root" for react
- npm init
- npm i react react-dom
- npm i -D parcel

- package.json >
  remove "main"
  change "type" to "module"
  add type="module" attr to src tag

- in main.js import React and ReactDOM
- ReactDOM setup
- create RootLayout comp
- render RootLayout in root.render()
- serve using parcel
- npx parcel index.html
- add scripts

## high level design

### Header

    - Logo
    - search-bar
    - nav-links
        - Home
        - About-us
        - Contact-us
        - Cart

### Main Section

    - Container
        - Restaurant-Card
                - Img
                - Title
                - Location
                - price, rating

        - Restaurant-Card
                - Img
                - Title
                - Location
                - price, rating

        - Restaurant-Card
                - Img
                - Title
                - Location
                - price, rating

### Footer
- Address
- contact
- External links
- Copyright