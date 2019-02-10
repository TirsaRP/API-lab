/*
I got the foundation of code from: https://bl.ocks.org/mbostock/1129492
*/


var width = window.innerWidth,
    height = window.innerHeight,
    radius = 12;

var fill = d3.scale.category20(); //sets color palette 

var force = d3.layout.force()
    .gravity(0.1)               //sets gravitational strength
    .charge(-250)               //sets charge. high negative number = high repulsion
    .chargeDistance(10)         //max distance max charge forces are applied 
    .theta(0.2)                 //sets Barnes-Hut approximation criterion
    .linkDistance(100)          //sets the distance between linked nodes
    .size([width, height])      //sets layout size to a 2 element array (x,y)
    .linkStrength(0.2)          //sets rigidity of links 
    .friction(1);               //approximates velocity decay at each tick of the simulation (fast)

var svg = d3.select("body").append("svg")   //appends a svg element to the body
    .attr("width", width)       //sets width
    .attr("height", height);    //sets height 

d3.json("graph.json", function (error, graph) {
    if (error) throw error;     //handles error

    var link = svg.selectAll("line")
        .data(graph.links)              //lines come from "links" in json file 
        .enter().append("line");        //appends each line

    var node = svg.selectAll("circle")  //circles for the links 
        .data(graph.nodes)              //taking data from json file graph.nodes
        .enter().append("circle")       //appends circles
        .attr("r", radius - .75)        //sets radius
        .style("fill", function (d) { return fill(d.group); }) //fill according to d.group values from json file 
        .style("stroke", function (d) { return d3.rgb(fill(d.group)).darker(); }) //border around the circle, darker version of the fill
        .call(force.drag);              //reacts to mouse movement

    force
        .nodes(graph.nodes) //node array taken from graph.nodes 
        .links(graph.links) //sets links to this array graph.links 
        .on("tick", tick)   //event listener on tick 
        .start();           //starts the simulation

    function tick() {       //runs the layout simulation one step 
        //updates circle positions 
        node.attr("cx", function (d) { return d.x = Math.max(radius, Math.min(width - radius, d.x)); })
            .attr("cy", function (d) { return d.y = Math.max(radius, Math.min(height - radius, d.y)); });

        //updates link positions 
        link.attr("x1", function (d) { return d.source.x; })
            .attr("y1", function (d) { return d.source.y; })
            .attr("x2", function (d) { return d.target.x; })
            .attr("y2", function (d) { return d.target.y; });
    }
});


/*
Extended on example with information gathered from these following websites: 

(force layout AND links)    https://d3indepth.com/force-layout/
(force layout)  https://d3-wiki.readthedocs.io/zh_CN/master/Force-Layout/
(tick) https://bl.ocks.org/puzzler10/2ce53e7592ef80e164821f26d426f723
(categorical colors)  https://stackoverflow.com/questions/32422325/d3-scale-category20-is-too-smart-for-me
(categorical colors)    http://bl.ocks.org/aaizemberg/78bd3dade9593896a59d
*/