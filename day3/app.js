import React from "react";
import ReactDOM from "react-dom/client"

//react me jab ham code likhte hai , react usko js object me convert karta hai and the html element me

//                     (React)                     (render)
//react.createelement() => react element (JS object) => HTMl element


//JSX code hai,JSX code html jaise dikhta hai
const newElement = <h1>hellow coder army</h1>

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(newElement);

//       (babel)        (react)                     (render)
//JSX code => React code => react element(JS object) => HTML element