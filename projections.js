AFRAME.registerComponent('cursor-listener',{
  init: function() {
    var button = document.querySelector("#toggleShape");
    button.addEventListener('click', function(evt){
      console.log("clicked!");
      let cyl_vis = document.querySelector("#outerCylinder").getAttribute("visible");
      let cone_vis = document.querySelector("#outerCone").getAttribute("visible");
      
      document.querySelector("#outerCylinder").setAttribute("visible",!cyl_vis);
      document.querySelector("#outerCone").setAttribute("visible",!cone_vis);
    });
  }
});

AFRAME.registerComponent('sphere-listener',{
  init: function() {
    var button = document.querySelector("#toggleGlobe");
    button.addEventListener('click', function(evt){
      document.querySelectorAll("a-torus").forEach(e => {
        let op = e.getAttribute("material")["opacity"];
        if (op == 0){
          e.setAttribute("material","opacity","1");
        }
        else{
          e.setAttribute("material","opacity","0");
        }
      });
    });
  }
});