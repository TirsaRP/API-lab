/*
I got the foundation of code from: https://bl.ocks.org/mbostock/1846692
*/
 
  var bleed = 0,
      width = window.innerWidth,
      height = window.innerHeight;
  
      var color = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]; 
     

  var pack = d3.layout.pack()                   //Creates a new pack layout with the default settings
    .sort(null)                                 //A null comparator disables sorting and uses tree traversal order. 
    .size([width, height + bleed * 2])
    .padding(2);

  var background= d3.select("body").transition()
  .style("background-color", "#eff1f2");

  var svg = d3.select("body").append("svg")     //appends an svg element to the body 
    .attr("width", width)                       //sets width
    .attr("height", height)                     //sets height
    .append("g")                                //appends a g element to the svg element
    .attr("transform","translate(0," + -bleed + ")");     //transforms element by translating it by (0,-bleed)
   
  d3.json("students.json", function (error, json) {
    if (error) throw error;                     //handles errors

    var node = svg.selectAll(".node")
      .data(pack.nodes(flatten(json))
        .filter(function (d) { return !d.children; }))
      .enter().append("g")          //appends a g element to this selection. Used for grouping svg shapes together which is helpful to transform all of them at once 
      .attr("class", "node")        //adds a class attribute of "node"
      .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; }); //translates (moves the items by x and y)

    node.append("circle")
      .attr("r", function (d) { return d.r; })  //set the attribute we want to change ("r") and pass the new value through an anonymous function.
      .attr("fill-opacity", 0.5)      //changes opacity of the fill 0.0- 1.0 
      .style("stroke", "#1d5066")     // adds a stroke around the circles (an outline)
      .style("fill", "#41bef4")       // fills the circles with the indicated color 
    
      .on("mouseover", function(){d3.select(this).style("fill", function()
      {return color[Math.floor(Math.random()*color.length)];})            //generates random colors from the array above
    //.on("mouseover", function(){d3.select(this).style("fill", "#930bef")
        .style("fill-opacity", 0.9)
        .style("stroke-width", 5)
        .style("stroke", "#78007a");})         //event listener: changes color to purple when mouse hovers over
     
        .on("mouseout", function(){d3.select(this)
          .style("fill", function()
          {return color[Math.floor(Math.random()*color.length)];})        //generates random colors 
     //.on("mouseout", function(){d3.select(this).style("fill", "#eb0aef")
        .style("fill-opacity", 0.7)
        .style("stroke-width", 2)
        .style("stroke", "#b51db7");});            //event listener: changes color to pink after mouse out

    node.append("text")                           //appends text to the node
      .text(function (d) { return d.name; })      //the text that appears will be the data.name from the json file
      .style("font-family", "Fjalla One")         //styles the font taken from google fonts
      .style("fill", "black")
      .style("font-size", function (d) { return Math.min(2 * d.r, (2 * d.r - 4) / this.getComputedTextLength() * 24) + "px"; })   //sets font size
      .attr("dy", ".5em");                         //shifts the text along the y-axis 
      
  });

  // Returns a flattened hierarchy containing all leaf nodes under the root. Good for bubble charts (displays 3 dimensions of data, x,y, and size)
  //Runs the pack layout, returning the array of nodes associated with the specified root node. In this case the children which is an array of child nodes
  
  function flatten(root) {
    var nodes = [];

    function recurse(node) {
      if (node.children) node.children.forEach(recurse);
      else nodes.push({ name: node.name, value: node.size });
    }

    recurse(root);
    return { children: nodes };
  }

  

  /*
  Extended on example with information gathered from these following websites: 

  (d3)    https://d3js.org/
  (d3)    https://github.com/d3/d3/wiki
  (d3.layout.pack AND pack.sort(null))   https://d3-wiki.readthedocs.io/zh_CN/master/Pack-Layout/
  (bubble chart)    https://en.wikipedia.org/wiki/Bubble_chart
  (svg g element)   http://tutorials.jenkov.com/svg/g-element.html
  (select, select all, append)    https://d3indepth.com/selections/
  (transform attribute)   https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform
  (svg circle)    https://www.dashingd3js.com/svg-basic-shapes-and-d3js
  (radius attribute AND mouse events) https://website.education.wisc.edu/~swu28/d3t/concept.html
  (google fonts)   https://fonts.google.com/?category=Handwriting,Monospace&selection.family=Sonsie+One
  (dy)    https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dy
  */