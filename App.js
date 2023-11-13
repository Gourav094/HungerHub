import React from "react";
import ReactDOM from "react-dom"


// React Element
const heading = (
    <h1 className="heading">
        Namaste React using JSX
    </h1>
)



//React function component --> use function and camel case
const HeadingComponent = () => {
    return <h1>functional component</h1>;
}


const HeadingComp = () => (
    <h1>Shorter way</h1>
)

//we can write any javscript code using curlie braces
const ele = <span>React Element</span>


//lets show some example --( component composition) 
const Title = () => (
    <h1 className="heading">
        Namaste React using JSX
    </h1>
)

const HeadingComponent2 = () => (
    <div>
        <Title/>
        <Title></Title>
        {Title()}
        {ele} 
        <h1>Functional component shorter way</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponent2/>);

// lets now compose Reacts elements into functions 

const Head = (
    <h1>React element Heading</h1>
)

const ReactComponent = () => (
    <div>
        {Head}
        <h1>Element into component</h1>
    </div>
)

// root.render(<ReactComponent/>)