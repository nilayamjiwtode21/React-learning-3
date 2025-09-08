import React from "react";
import ReactDOM from "react-dom/client"

//react me jab ham code likhte hai , react usko js object me convert karta hai and the html element me

//                     (React)                     (render)
//react.createelement() => react element (JS object) => HTMl element


//JSX code hai,JSX code html jaise dikhta hai

//JSX: isme hai js ke expresions bhi use kar sakte hai, bass unko {} me dalna padta hai, "{}" isse JSX ko samjhme ata hai ki ye javascript use kar raha hai
//ex

const name = "Nilayam"
const obj = {
    age: 21,
    salary: 210000
}

//React Element
const newElement = (
    //div ke jagah ham <></> bhi use kar sakte hai
    <div> 
      <h1 id="first" className="first">hello coder army {name}</h1>
      <h2>kaise hai sab {obj.age}</h2>
    </div>
)


//React Component 2 type
//class based: outdated
//function based: react ke andar function

//ex

function greet(){
    return <h1>kaise hai app log</h1>
}

const meet = () =>{
    return <h2>sab badiya hai</h2>
}

const newElement2 = greet();
const newElement3 = meet();

//mujhe greet and meet dono ak hi isme chahiye
const newElement4 = <>{greet()} {meet()}</>

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(newElement4);

//       (babel)        (react)                     (render)
//JSX code => React code => react element(JS object) => HTML element