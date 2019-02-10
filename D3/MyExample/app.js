/*
var paragraphs = document.getElementsByTagName("p");
for (var i = 0; i < paragraphs.length; i++) {
  var paragraph = paragraphs.item(i);
  paragraph.style.setProperty("color", "white", null);
}
*/

d3.selectAll("p").style("color", "blue");

//d3.select("body").style("background-color", "grey");

d3.select("body").transition()
    .style("background-color", "grey");

d3.select("h2").style("color", "#f142f4").brighter(.5);

d3.selectAll("circle").transition()
    .duration(750)
    .delay(function(d, i) { return i * 10; })
    .attr("r", function(d) { return Math.sqrt(d * scale); });