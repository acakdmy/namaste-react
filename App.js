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
## 



* What is Transitive Dependencies:- Dependencies have other dependencies is known as transitive dependencies


*/

const heading = React.createElement("h1",{
  id:"title",
},"I have updated the heading 1");
const heading2 = React.createElement("h2",{
  id:"title",
},"I have updated the heading 2, We are here to become hero in the react");

const container = React.createElement("div",{
  id:"container",
  
},[heading,heading2]
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react element inside root
root.render(container)

