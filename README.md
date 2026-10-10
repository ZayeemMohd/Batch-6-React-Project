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


## Two types of exports/import

1. Named Export (export)

### Props

component call: Attributes = Atrribute-value
React converts: { Attributes:  Atrribute-value, }


  //       props =  {
      //   resName: "Lucky Restaurant",
      //   rating: "4.2"
      // }

      // let resName = props.resName
      // let {resName} = props

  // props = {
                 //    resDetails: {
                                                // resName: "Paradise",
                                                // cuisine: ["Biryani", "Chinese", "Mughlai", "Tandoor"],
                                                // avgRating: 4.2,
                                                // delieveryTime: 38,
                                                // costForTwo: 300,
                                                // imgId: "ggbuknqzqc4qoqfnl2cr"
                                // }
  // }


  ## day 6

  1. restaurnat menu page
                - 1. Fetch the menu api
                - 2. creating RestauantMenuInfoCard

                - 3. extracting categories from api
                - 4. filter only categories
                - 5. we got categoriesArr

                - 6. <RestaurantCategory /> on categoriesArr
                        1. category-header
                            title and ⬇️


                        2. category-body
                           <MenuItem /> on category.itemCards.map