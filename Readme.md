# Namaste React



# Parcel
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


**Lets Build a food ordering app**

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

## Props
Like a normal javascript function,it passed to components
*we can pass any number of props to components*


## Config Driven UI
Controlling UI with data that comes from Backend
i.e it handles the UI whenever deletion or updation done in data

## *Optional Chaining*
Used to access Object
> e.g-> const {name,id,time} = resList?.data;

## *Two types of Export/Import*
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

## use state 
*It maintain state of component* (gives state variable that gonna store it somewhere)
> e.g-> 
const [List,setList] = useState(default_value)

This is like a array that store the data in List variable 
setList : use to modify the List variable (re-rendered)

## How React works ??
React uses Reconciliation algorithm(React Fibre)
- *It updates when something change in UI but how?*

It uses **Virtual DOM**

Virtual DOM is the representation of actual DOM means a **Big Object**  like body 

Actual DOM is the actual code that written using Tags

#### Diff algorithm
- It finds out the difference between two virtual DOM (means previous DOM and updates DOM)
- after calculating diff, it actually update the DOM on every render cycle 

To go in detail of react fibre [https://github.com/acdlite/react-fiber-architecture]