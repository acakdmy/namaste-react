Topics
* 	JSX
*	React.createElement vs JSX
*   Benefits of JSX
*	Behind the Scenes of JSX
*	Bable & parcel role in JSX
*	Components
*	Functional components
*	Composing components




# What is JSX ?

* Ans:- const element = <h1>Hello, world!</h1>;
* JSX is looks like HTML syntax which is developed by META developers| JSX produces React “elements”
* It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.
## Why JSX?:- 
* React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.
## Embedding Expressions in JSX
* we declare a variable called name and then use it inside JSX by wrapping it in curly braces:
example:- const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

* You can put any valid JavaScript expression inside the curly braces in JSX. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.
Example:- 
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

## Specifying Attributes with JSX
* const element = <a href="https://www.reactjs.org"> link </a>;
* const element = <img src={user.avatarUrl}></img>;
* JSX tags may contain children:

const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

# 	Superpowers of JSX

# Role of type attributes in script tag? What options can I use there?

# {TitleComponent} vs {<TitleCompnents/>} vs {<TitleComponent></TitleComponents>} in JSX


## Reference

*   Babel: - https://babeljs.io/
*	Attribute Type: - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type
*	JS Modules: - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
*	Babel Playground: - https://babeljs.io/repl#
*	React without JSX: - https://reactjs.org/docs/react-without-jsx.html


