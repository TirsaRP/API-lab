This D3 example is based on "Automatic Text Sizing" which can be found at: https://bl.ocks.org/mbostock/1846692

-------------------------------------------------------------------------------------------------------------------------------------

You can download the latest version (5.9.0) of D3 at https://d3js.org/#introduction OR link directly to the latest release by copying this snippet:

<script src="https://d3js.org/d3.v5.min.js"></script>

For the minified version:

<script src="https://d3js.org/d3.v5.min.js"></script>

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

For more detailed information and examples about the methods used in this D3 example, please visit:

  (d3)    https://d3js.org/
  (d3)    https://github.com/d3/d3/wiki
  (d3.layout.pack AND pack.sort(null))   https://d3-wiki.readthedocs.io/zh_CN/master/Pack-Layout/
  (bubble chart)    https://en.wikipedia.org/wiki/Bubble_chart
  (svg g element)   http://tutorials.jenkov.com/svg/g-element.html
  (select, select all, append)    https://d3indepth.com/selections/
  (transform attribute)   https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform
  (svg circle)    https://www.dashingd3js.com/svg-basic-shapes-and-d3js
  (radius attribute AND mouse events) https://website.education.wisc.edu/~swu28/d3t/concept.html
  (google fonts)   https://fonts.google.com/?category=Handwriting,Monospace&selection.family=Pacifico
  (dy)    https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dy