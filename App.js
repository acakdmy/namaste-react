import React from "react";
import ReactDOM from "react-dom/client";


/*
/- Pracel is a bundler which can do many things 

## HMR==>Hot Module Replacement
## File Watcher Algorithm--C++
## BUNDLING
## MINIFY
## Cleaning our Code
## Dev and Production Build 
## Super Fast build algorithm
## Image optimization
## Caching while development
## Compression
## Compatible for older version of browser
## HTTPS on dev
## Parcel manage the port number
## Consistent Hashing Algorithm
## Parcel have Zero configuration
##  Tree Shaking - Removing unwanted
## 



* What is Transitive Dependencies:- Dependencies have other dependencies is known as transitive dependencies


*/


// React.createElement==>Object==>HTML(DOM)

/*
const heading = React.createElement("h1",{
  id:"title",
},"I have updated the heading 1");



const heading2 = React.createElement("h2",{
  id:"title",
},"I have updated the heading 2, We are here to become hero in the react");
console.log(heading)

const container = React.createElement("div",{
  id:"container",
  
},[heading,heading2]
);
*/

// JSX ??

const Title =()=> (
<h1 key = "2013">Namaste react</h1>
);


// Raeact Components
// Functional component -> New way of writing code
    // - Name should start with Capital letter 
// Class based component-> old way of writing code

const HeaderComponent = ()=>{
  return(
    <div>
    <Title/>
  {/* {heading3} -> if i want to write my reactElement / JSX inside my functional componet write like this  */}
    <h1> This is a functinal component, it is just a javascript function  </h1>
  <h2> THis is heading 2</h2>
  </div>

  ) 
};




const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react element inside root
root.render(<HeaderComponent/>) // if i write React element render like this 


/*root.render(<HeaderComponent/>)// If I write functional component render like this */
//root.render(HeaderComponent()) --> we can write like this as well

