// JavaScript to show HTML elment to the browser


/*const heading = document.createElement("h1");
heading.innerHTML = "Namaste everyone from Javascript";
const root = document.getElementById("root");
root.appendChild(heading);
*/

const heading = React.createElement("h1",{
  id:"title",
},"Heading 1");
const heading2 = React.createElement("h2",{
  id:"title",
},"Heading 2");

const container = React.createElement("div",{
  id:"container",
  
},[heading,heading2]
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react element inside root
root.render(container)
