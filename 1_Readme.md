<<<<<<<<< Temporary merge branch 1
## -> What is Emmet?

Emmet is a free add-on for your text editor that allows you to type shortcuts that are then expanded into full pieces of code. By using Emmet, email designers type less, saving both keystrokes and time when building a campaign. Also, relying on Emmet’s autocompletion means fewer typos and missing tags, leading to more robust emails.

##  ->  Difference between a Library and Framework?

==> Framework
1. It comprises of lot of APIs , compilers , support programs , libraries etc.
2. It is difficult to replace frameworks.
3. A framework development requires a lot of code that decrease performance and increase the load time.
4. Including framework smoothly into an existing project is impossible.
5. Its example are AngularJS , Spring , NodeJS , etc.

Example:-

 $(document.ready(){     // this call will be done by the jquery 
// framework when document will be ready.
    
    function() {
        /* your code */    // our implementation inside the framework's function
    }
});

==> Library
1. It is a collection of helper modules , classes , objects , functions , pre-written code , etc.
2. A library is easy to be replaced with another library.
3. Building a library requires less code , so there is better performance and fast load time.
4. Libraries can be integrated easily into existing projects to add some specific functionality.
5. Its example are JQuery , React JS , etc. 

Example:- 
str = "Geeks.ForGeeks"
var pos = str.lastIndexOf("."); // simply calling function of string library


## -> What is CDN? Why do we use it?

A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content.

A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos. The popularity of CDN services continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.

A properly configured CDN may also help protect websites against some common malicious attacks, such as Distributed Denial of Service (DDOS) attacks.

* What are the benefits of using a CDN?
Although the benefits of using a CDN vary depending on the size and needs of an Internet property, the primary benefits for most users can be broken down into 4 different components:

Improving website load times - By distributing content closer to website visitors by using a nearby CDN server (among other optimizations), visitors experience faster page loading times. As visitors are more inclined to click away from a slow-loading site, a CDN can reduce bounce rates and increase the amount of time that people spend on the site. In other words, a faster a website means more visitors will stay and stick around longer.
Reducing bandwidth costs - Bandwidth consumption costs for website hosting is a primary expense for websites. Through caching and other optimizations, CDNs are able to reduce the amount of data an origin server must provide, thus reducing hosting costs for website owners.
Increasing content availability and redundancy - Large amounts of traffic or hardware failures can interrupt normal website function. Thanks to their distributed nature, a CDN can handle more traffic and withstand hardware failure better than many origin servers.
Improving website security - A CDN may improve security by providing DDoS mitigation, improvements to security certificates, and other optimizations.

* How does a CDN work?
At its core, a CDN is a network of servers linked together with the goal of delivering content as quickly, cheaply, reliably, and securely as possible. In order to improve speed and connectivity, a CDN will place servers at the exchange points between different networks.

These Internet exchange points (IXPs) are the primary locations where different Internet providers connect in order to provide each other access to traffic originating on their different networks. By having a connection to these high speed and highly interconnected locations, a CDN provider is able to reduce costs and transit times in high speed data delivery.
=========
## Importent Links for reference 
* Pracel:- https://parceljs.org/
* Browserlist for dev:- https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z
* Create your own create-react-app:- https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658

* Parcel Production :- https://parceljs.org/features/production/



#  What is `NPM`?

* This is for reference :- https://docs.npmjs.com/

npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

npm consists of three distinct components:

the website
the Command Line Interface (CLI)
the registry
Use the website to discover packages, set up profiles, and manage other aspects of your npm experience. For example, you can set up organizations to manage access to public or private packages.

The CLI runs from a terminal, and is how most developers interact with npm.

The registry is a large public database of JavaScript software and the meta-information surrounding it.

* Use npm to . . .
1) Adapt packages of code for your apps, or incorporate packages as they are.
2)Download standalone tools you can use right away.
3)Run packages without downloading using npx.
4)Share code with any npm user, anywhere.
5)Restrict code to specific developers.
6)Create organizations to coordinate package maintenance, coding, and developers.
7)Form virtual teams by using organizations.
8)Manage multiple versions of code and code dependencies.
9)Update applications easily when underlying code is updated.
10)Discover multiple ways to solve the same puzzle.
11)Find other developers who are working on similar problems and projects.

# What is `Parcel/Webpack`? Why do we need it?

A module bundler is a tool that takes pieces of JavaScript and their dependencies and bundles them into a single file, usually for use in the browser. You may have used tools such as Browserify, Webpack, Rollup or one of many others.

* Parcel is a web application bundler, differentiated by its developer experience. It offers blazing fast performance utilizing multicore processing, and requires zero configuration.

// yarn global add parcel-bundler

* Many front-end developers have become frustrated with some of the complexities involved with building web apps today. It’s pretty standard practice to include some kind of build or bundling tool in a front-end workflow, thus many developers have looked into using a front-end tool like webpack/Rollup/Parcel.
>>>>>>>>> Temporary merge branch 2
