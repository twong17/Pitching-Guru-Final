// Sets up canvas and context to draw on
var myCanvas = document.getElementById("myCanvas");
var rect = myCanvas.getBoundingClientRect();
var ctx = myCanvas.getContext("2d");
var player = null;
var count = 1;
var points = [];
// Event will be a click event which can be retrieved as first parameter in the addEventListener(function(event){}); or in jQuery with $("selector").click(function(event){});
function getPosition(event){
     var xCoor = event.clientX - rect.left; // x == the location of the click in the document - the location (relative to the left) of the canvas in the document
     var yCoor = event.clientY - rect.top; // y == the location of the click in the document - the location (relative to the top) of the canvas in the document
     var temp = [xCoor,yCoor];
     points.push(temp);
     // This method will handle the coordinates and will draw them in the canvas.
     drawCoordinates(xCoor,yCoor);
     count = count+1;
}

function myFunction() {
  var s = document.getElementById("Test");
    s.innerText = points; 
}
            
function drawCoordinates(x,y){
    var pointSize = 10; // Change according to the size of the point.
    ctx.fillStyle = "#ff2626"; // Red color
    ctx.beginPath(); //Start path
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
    ctx.font = "bold 15px Arial";
    ctx.fill(); // Close the path and fill.
    ctx.fillStyle = "black";
    ctx.fillText(count, x-4, y+4);
    console.log("Drawing a point");
}
        
$("#myCanvas").click(function(e){
     getPosition(e); 
});

//update function
function update()
{
  ctx.beginPath();
  ctx.rect(200, 200, 300, 400);
  ctx.lineWidth = "2";
  ctx.strokeStyle = "black";
  ctx.stroke();   
  
}
setInterval(update, 10);

//window.onload = function() {
//        var heatmap = h337.create({
//          container: document.getElementById('heatmapContainer'),
//          opacity:1,
//          gradient: {
//            '0': 'yellow',
//            '1': 'red'
//          }
//        });
//        window.h = heatmap;
//
//        var d = [
//                { x: 200, y: 150, value: 1, radius: 50 },
//                { x: 210, y: 160, value: 1, radius: 50 },
//                { x: 220, y: 170, value: 1, radius: 50 },
//                { x: 400, y: 150, value: 1, radius: 20 },
//                { x: 600, y: 150, value: 1, radius: 10 },
//                { x: 800, y: 150, value: 1, radius: 50 }];
//            h.setData({
//                min: 1,
//                max: 6,
//                data: d
//            });
//};

function createMap() {
        var d = [];
        for(i = 0; i < points.length; i++)
        {
            tempX = points[i][0];
            tempY = points[i][1];
            temp = { x: tempX, y: tempY, value: 5, radius: 30 };
            d.push(temp);
        }
        var heatmap = h337.create({
          container: document.getElementById('heatmapContainer'),
          useLocalExtrema: true,
          maxOpacity:.9,
          minOpacity: 0,
          blur: .5,
          gradient: {
            '0.0': 'rgb(121,150,200)',
            '0.25': 'rgb(188,202,228)',
            '0.3': 'rgb(255,255,255)',
            '0.4': 'rgb(242,181,184)',
            '0.45': 'rgb(229,107,112)',
            '0.6': 'rgb(216,33,41)'
          }
        });
        window.h = heatmap;

        //var d = points
            h.setData({
                min: 1,
                max: count-1,
                data: d
            });
};
