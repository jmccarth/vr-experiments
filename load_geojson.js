AFRAME.registerComponent('initialize',{
  init: function() {
    let request = new XMLHttpRequest();
    request.open('GET','assets/campus.geojson',true);
    request.onload = function () {
      var sceneEl = document.querySelector('a-scene');
      let response = JSON.parse(this.response);
      features = response.features;
      for (var i = 0; i < 5; i++){
        geometry = features[i].geometry;
        for (var j = 0; j < 2; j++){
          var newEl = document.createElement('a-entity');
          var x1 = geometry.coordinates[j][0];
          var y1 = geometry.coordinates[j][1];
          var z1 = 0;
          var x2 = geometry.coordinates[j+1][0];
          var y2 = geometry.coordinates[j+1][1];
          var z2 = 0;
          // var line_def = `lineWidth:1; path: 0 0 0, ${x2} ${y2} ${z2}; color: #EE2289`;
          var line_def = `path: ${x1} ${y1} ${z1}, ${x2} ${y2} ${z2};`;
          // var line_def = "lineWidth:10; path: 0 0 0, -80.5 43.5 0; color: #EE2289";
          newEl.setAttribute('meshline',line_def);
          sceneEl.appendChild(newEl);
          // newEl.setAttribute('meshline','lineWidth',10);
          // newEl.setAttribute('meshline','path',`${x1} ${y1} ${z1}, ${x2} ${y2} ${z2}`);
          // newEl.setAttribute('meshline','color','#EE2254');
        }
      }
    }
    request.send();
  }
});
