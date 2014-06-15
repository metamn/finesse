jsPlumb.ready(function() {
  jsPlumb.setContainer($("body"));
  
  jsPlumb.connect({
    source: "beauty-1",
    target: "beauty-3",
    anchors: ["BottomCenter", "Continuous"],
    paintStyle: { strokeStyle:"red", lineWidth:1 },
    endpoint: "Blank"
  });
});
