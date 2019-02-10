This D3 example is based on "Bounded Force Layout" which can be found at: https://bl.ocks.org/mbostock/1129492

Description: "A flexible force-directed graph layout implementation using position Verlet integration to allow simple constraints. For more on physical simulations, see Thomas Jakobsen. This implementation uses a quadtree to accelerate charge interaction using the Barnes–Hut approximation. In addition to the repulsive charge force, a pseudo-gravity force keeps nodes centered in the visible area and avoids expulsion of disconnected subgraphs, while links are fixed-distance geometric constraints. Additional custom forces and constraints may be applied on the "tick" event, simply by updating the x and y attributes of nodes." https://d3-wiki.readthedocs.io/zh_CN/master/Force-Layout/ 

-------------------------------------------------------------------------------------------------------------------------------------


You can download the latest version (5.9.0) of D3 at https://d3js.org/#introduction OR link directly to the latest release by copying this snippet:

<script src="https://d3js.org/d3.v5.min.js"></script>

For the minified version:

<script src="https://d3js.org/d3.v5.min.js"></script>

-------------------------------------------------------------------------------------------------------------------------------------


Sets gravitational strength. If not stated, 0.1 is default. Does NOT correspond to physical gravity (positive charge parameter). But instead, gravity is implemented as a weak geometric constraint similar to a virtual spring connecting each node to the center of the layout's size. 
    -force.gravity(gravity)
Sets charge strength. If not stated, default is -30. Constant, unless a function is passed in. A negative value results in node repulsion, while a positive value results in node attraction. 
    -force.charge(charge)
Sets max distance over which charge forces are applied. If not stated, default is max, infinity. Stating distance improves performance 
    -force.chargeDistance(distance)
Sets Barnes-Hut approximation criterion. If not stated, default is 0.8. Every node affects every other node. Used to avoid quadratic performance slowdown for large graphs. 
    -force.theta(theta)
Sets the target distance between linked nodes to the stated value. If not stated, default is 20. Distance is a constant but can also be a function to be varied.
    -force.linkDistance(distance)
 Sets the layout size to a 2 element array (x,y) If not stated, default is (1,1)   
    -force.size(width, height)
Sets the strength (rigidity) of the links. If not stated, default is 1. It is constant unless the use of a function to provide variety. 
    -force.linkStrength(strength)
Sets the friction coefficient to the stated value. If not stated, the default is 0.9. 1 is frictionless and 0 would stop particles. The lower the number, the slower the movement. 
    -force.friction(friction)
Sets layout's associated nodes to the stated array. If not stated, set to an empty array. Has these attributes: index, x, y, px, py, fixed, weight.
    -force.nodes(nodes)
Sets layout's associated links to the stated array. If not stated, default is an empty array. Has these attributes: source, target
    -force.links(links)
Event listener. Start, tick, end are currently supported.
    -force.on(type, listener)
Starts the simulation, must be called when the layout is first created,AFTER assigning the nodes and links.
    -force.start()
Runs the simulation one step. This method can be used with start and stop. 
    -force.tick()

-------------------------------------------------------------------------------------------------------------------------------------


For more detailed information and examples about the methods used in this D3 example, please visit:

(force layout AND links)    https://d3indepth.com/force-layout/
(force layout)  https://d3-wiki.readthedocs.io/zh_CN/master/Force-Layout/
(tick) https://bl.ocks.org/puzzler10/2ce53e7592ef80e164821f26d426f723
(categorical colors)  https://stackoverflow.com/questions/32422325/d3-scale-category20-is-too-smart-for-me
(categorical colors)    http://bl.ocks.org/aaizemberg/78bd3dade9593896a59d