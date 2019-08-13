AFRAME.registerComponent('cylinder-listener',{
  init: function() {
    var button = document.querySelector("#cylButton");
    button.addEventListener('click', function(evt){
      console.log("clicked!");
      let cyl_vis = document.querySelector("#outerCylinder").getAttribute("visible");
      let cone_vis = document.querySelector("#outerCone").getAttribute("visible");
      let plane_vis = document.querySelector("#outerPlane").getAttribute("visible");
      
      document.querySelector("#outerCylinder").setAttribute("visible",true);
      document.querySelector("#outerCone").setAttribute("visible",false);
      document.querySelector("#outerPlane").setAttribute("visible",false);
    });
  }
});

AFRAME.registerComponent('cone-listener',{
  init: function() {
    var button = document.querySelector("#coneButton");
    button.addEventListener('click', function(evt){
      console.log("clicked!");
      let cyl_vis = document.querySelector("#outerCylinder").getAttribute("visible");
      let cone_vis = document.querySelector("#outerCone").getAttribute("visible");
      let plane_vis = document.querySelector("#outerPlane").getAttribute("visible");
      
      document.querySelector("#outerCylinder").setAttribute("visible",false);
      document.querySelector("#outerCone").setAttribute("visible",true);
      document.querySelector("#outerPlane").setAttribute("visible",false);
    });
  }
});

AFRAME.registerComponent('plane-listener',{
  init: function() {
    var button = document.querySelector("#planeButton");
    button.addEventListener('click', function(evt){
      console.log("clicked!");
      let cyl_vis = document.querySelector("#outerCylinder").getAttribute("visible");
      let cone_vis = document.querySelector("#outerCone").getAttribute("visible");
      let plane_vis = document.querySelector("#outerPlane").getAttribute("visible");
      
      document.querySelector("#outerCylinder").setAttribute("visible",false);
      document.querySelector("#outerCone").setAttribute("visible",false);
      document.querySelector("#outerPlane").setAttribute("visible",true);
    });
  }
});
