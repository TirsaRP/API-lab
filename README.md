# API-lab
programming 2 

What is D3:
"D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS. D3’s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation." (https://d3js.org/)

"D3 allows you to bind arbitrary data to a Document Object Model (DOM), and then apply data-driven transformations to the document." (https://d3js.org/)

"Unlike Processing or Protovis, D3’s vocabulary of graphical marks comes directly from web standards: HTML, SVG, and CSS." (https://d3js.org/)
You can easily incorporate styling, tags, and svg because the browser treats the nodes in D3 exactly the same as the nodes in your DOM. This also makes debugging easier. 

-------------------------------------------------------------------------------------------------------------------------------------

Installation:
You can download the latest version (5.9.0) of D3 at https://d3js.org/#introduction OR link directly to the latest release by copying this snippet:

<script src="https://d3js.org/d3.v5.min.js"></script>

For the minified version:

<script src="https://d3js.org/d3.v5.min.js"></script>

You can also use the standalone D3 microlibraries. For example, d3-selection:

<script src="https://d3js.org/d3-selection.v1.js"></script>

D3 is written using ES2015 modules. Create a custom bundle using Rollup, Webpack, or your preferred bundler. To import D3 into an ES2015 application, either import specific symbols from specific D3 modules:

import {scaleLinear} from "d3-scale";

Or import everything into a namespace (here, d3):

import * as d3 from "d3";

In Node:

var d3 = require("d3");

You can also require individual modules and combine them into a d3 object using Object.assign:

var d3 = Object.assign({}, require("d3-format"), require("d3-geo"), require("d3-geo-projection"));

-------------------------------------------------------------------------------------------------------------------------------------

Selections:
D3 allows for faster DOM manipulation through the use of selections. But before you can manipulate nodes, you need to select them by using:
    - d3.select(element)
    - d3.selectAll(element)


Data Binding, Enter, Appending:
D3 does not store data in variables, but within the DOM selectors (https://website.education.wisc.edu/~swu28/d3t/concept.html). Then after the data is selected, new elements can be appended to the selected DOM element. .enter() must come after a .data() method is called and uses the current selection as the parent node for the elements added with .append()
    - selection.data(dataSource)
    - .data(dataSource)
    - .enter()
    - .append(element) 


Attributes and Styles:
D3 allows for changing attributes such as attributes used when initially defining the element, and styles in the same way you would change the appearance of an element in CSS.
    - .attr("string of attribute", value)
    - .style("string of CSS style", value)


Mouse Events: D3 uses the syntax selection.on(type[,listener]) to add or remove event listeners for interact(https://website.education.wisc.edu/~swu28/d3t/concept.html). Types: mousedown, mouseup, click, dblclick, mouseover, mouseout, mouseenter, mouseleave (https://www.stator-afm.com/tutorial/d3-js-mouse-events/)

example of using mouse events to change the styling of the stroke color when the mouse is over or off of an element
    - .on("mouseover", function(){d3.select(this).style("stroke", "black");})
    - .on("mouseout", function(){d3.select(this).style("stroke", "white");});

-------------------------------------------------------------------------------------------------------------------------------------

