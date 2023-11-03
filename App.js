// Printing hello world in react 
const heading = React.createElement('h1', { id: "heading" }, "Hello World from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

/*
Lets create this type of structure
<div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div>

parent-> ReactElement(object) ==> HTML (browser understand)
*/

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",{id:"child"},React.createElement("h1",{},"h1 tag"))

)
console.log(parent);
root.render(parent);


//what if child has more siblings like h1 and h2 tags 
// then just we need to give an array in place of third parameter

const parent2 = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"h1 tag"),React.createElement("h2",{},"h2 tag")]
    )

)
root.render(parent2);

// this gonna be messy structure so for overcome this we need to use JSX that gonna make our life easier.
