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
  else if (e.keyCode == 82){ //r
    globe.object3D.rotation.x = 0;
    globe.object3D.rotation.y = 0;
    globe.object3D.rotation.z = 0;
  }
  else if (e.keyCode == 67){ //c
    this.document.querySelector("#camera").object3D.position.set(0, 3.5, 10)
  }
  else if (e.keyCode == 49){ //1
    let cyl_vis = document.querySelector("#outerCylinder").getAttribute("visible");
    let cone_vis = document.querySelector("#outerCone").getAttribute("visible");
    let plane_vis = document.querySelector("#outerPlane").getAttribute("visible");
    
    document.querySelector("#outerCylinder").setAttribute("visible",false);
    document.querySelector("#outerCone").setAttribute("visible",false);
    document.querySelector("#outerPlane").setAttribute("visible",true);
  }
  else if (e.keyCode == 50){ //2
    let cyl_vis = document.querySelector("#outerCylinder").getAttribute("visible");
    let cone_vis = document.querySelector("#outerCone").getAttribute("visible");
    let plane_vis = document.querySelector("#outerPlane").getAttribute("visible");
    
    document.querySelector("#outerCylinder").setAttribute("visible",false);
    document.querySelector("#outerCone").setAttribute("visible",true);
    document.querySelector("#outerPlane").setAttribute("visible",false);
  }
  else if (e.keyCode == 51){ //3
    let cyl_vis = document.querySelector("#outerCylinder").getAttribute("visible");
    let cone_vis = document.querySelector("#outerCone").getAttribute("visible");
    let plane_vis = document.querySelector("#outerPlane").getAttribute("visible");
    
    document.querySelector("#outerCylinder").setAttribute("visible",true);
    document.querySelector("#outerCone").setAttribute("visible",false);
    document.querySelector("#outerPlane").setAttribute("visible",false);
  }
  else if (e.keyCode == 72){ //h
    let help_vis = document.querySelector("#help").getAttribute("visible");
    document.querySelector("#help").setAttribute("visible",!help_vis);
  }


});