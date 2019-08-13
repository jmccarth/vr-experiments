// Rotate globe with keyboard events
window.addEventListener("keydown", function(e) {
  let globe = this.document.querySelector("#globeModel");
  let rotation_factor = 0.1;
  if (e.keyCode === 74) { //j
    globe.object3D.rotation.x += rotation_factor;
  }
  else if (e.keyCode == 75) { //k
    globe.object3D.rotation.y += rotation_factor;
  }
  else if (e.keyCode == 76) { //l
    globe.object3D.rotation.z += rotation_factor;
  }
  else if (e.keyCode === 73) { //j
    globe.object3D.rotation.x -= rotation_factor;
  }
  else if (e.keyCode == 79) { //k
    globe.object3D.rotation.y -= rotation_factor;
  }
  else if (e.keyCode == 80) { //l
    globe.object3D.rotation.z -= rotation_factor;
  }
  else if (e.keyCode == 82){
    globe.object3D.rotation.x = 0;
    globe.object3D.rotation.y = 0;
    globe.object3D.rotation.z = 0;
  }
  else if (e.keyCode == 67){
    this.document.querySelector("#camera").object3D.position.set(0, 3.5, 10)
  }


});

// Click on the cylinder to create a cylindrical projection
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

// Click on the cone to create a conic projection
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

// Click on the plane to create a flat projection
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
