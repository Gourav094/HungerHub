# Namaste React



## Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching algorithm - written in c++
- caching - Faster Building
- Image Optimisation
- Minification
- Bundle
- Compress
- Consistent Hashing
- Code splitting
- Differential Bundling - Support older version of browser
- Diagnostic
- Error Handling
- Https
- Tree shaking - remove unused code
- Different build and production bundle


**TO Build our app using parcel**

*npm parcel index.html*

*npm parcel build index.html*


## Lets Build a food ordering app

We have divided the web app into 3 parts

- Header

    -  Logo
    -  Nav Items (Home, About, Cart)
- Body

    - Search
    - Restaurant Container
    - Restaurant Card
        - Image
        - Name of restaurant, star rating, cuisine, delivery time
- Footer

    - Copyright
    - Links
    - Address
    - Contact

### Props
Like a normal javascript function,it passed to components
*we can pass any number of props to components*


### Config Driven UI
Controlling UI with data that comes from Backend
i.e it handles the UI whenever deletion or updation done in data

### *Optional Chaining*
Used to access Object
> e.g-> const {name,id,time} = resList?.data;

### *Two types of Export/Import*
- Default Export/Import

export Default Component
import Component from path


- Named Export/Import (use when need to export multiple things)
export Component
import {Component} from path


## React Hooks
Normal js function (utilitu function)
- useState() - Superpowerful React variables [Import as Named import ]
- useEffect()- 

### use state 
*It maintain state of component* (gives state variable that gonna store it somewhere)
> e.g-> 
const [List,setList] = useState(default_value)

This is like a array that store the data in List variable 
setList : use to modify the List variable (re-rendered)

UseState is used to update UI after changing variables

## How React works ??
**Reconciliation algorithm(React Fibre)**

React uses **Virtual DOM**

#### Diff algorithm
- It finds out the difference between two virtual DOM (means previous DOM and updates DOM)
- after calculating diff, it actually update the DOM on every render cycle 

To go in detail of react fibre [https://github.com/acdlite/react-fiber-architecture]


### Shimmer UI 
The UI that show until data fetches from API ==> Used for better user experience

### Conditional rendoring 
when rendoring is based on only when some condition is true

### Fetching Data from API
> one way -> 
 Load -> api -> render

> second way
Load -> render -> api -> render

second way is better because quickly reloading 

### UseEffect
Another hook which is used to call the function after rendering component.
(To use second way of fetching data)

syntax: 
useEffect( () => {} , [] )
- first one is call back function that called after rendering component
- second is dependency arrray


Note: We cant fetch data directly due to **CORS** so use a way to handle it 

### Routing
- Routing to multiple web pages like contact, about,home

install:
npm i react-router-dom

To route we used:
- createBrowserRouter -> create app router and pass config.
- RouteBrowser -> provide routing configuration to app

> UseRouteError -> another hook used for getting more information about error

> Children Routes:
When we route to our page, we need to stick our header so that we can come to home page -> for that we use children route

> To link diff pages to text we should use *'Link'* tag instead of *'a'* tag


### Two types of routing
- client side routing 
- server side routing


### Redux Toolkit
- install @reduxjs/toolkit and react-redux
- Build our store
- connect store to our app
- Slice(cart)
- dispatch an action
- Selector