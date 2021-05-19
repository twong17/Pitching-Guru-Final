//https://github.com/sunng87/heatcanvas
//http://sunng87.github.io/heatcanvas/
//
//var socket = io.connect('http://localhost:3000');
//socket.emit('event', { message: 'Hey, I have an important message!' });

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
//     drawCoordinates(xCoor,yCoor);
     count = count+1;
}

function myFunction() {
  var s = document.getElementById("Test");
    s.innerText = points; 
}

function undo(){
    //TO GET A SPECIFIC ELEMENT
//    var list = document.getElementById("feedelements").getElementsByTagName("li");
//    console.log(list[1]);
    console.log("Working");
    var lis = document.getElementById('feedelements');
    lis.removeChild(lis.lastElementChild)
    //ulElem.removeChild(ulElem.childNodes[i])
    points.pop();
}

function addElements() {
    var date = Date();
    var year = new Date().getFullYear();
    var month = new Date().getMonth()
    date = date.substring(0,24);
    console.log(date);
    console.log(year);
    console.log(month);
    
    var type = document.getElementById("pitchtype");
    typeValue = type.value;
    var velo = document.getElementById("velo");
    veloValue = velo.value;
    points[points.length-1].push(typeValue);
    points[points.length-1].push(veloValue);
    points[points.length-1].push(date);
    points[points.length-1].push(year);
    points[points.length-1].push(month);
    
    var Text = document.getElementById("pitchtype").value;
    var Velo = document.getElementById("velo").value + " mph";
    var element = document.getElementById("feedelements");
  var new_entry=
  "<li class='clearfix'>"+
    "<div class='feed d-flex justify-content-between'>"+
        "<div class='feed-body d-flex justify-content-between'='><a class='feed-profile' href='#'><img class='img-fluid rounded-circle' src='/images/baseball.gif' alt='person' /></a>"+
            "<div class='content'><strong>" + Text + "</strong><small>"+ Velo +" </small>"+
                "<div class='full-date'><small>"+ date +"</small></div>"+
            "</div>"+
        "</div>"+
        "<div class='date'><small></small></div>"+
    "</div>"+
"</li>";
    
  console.log(new_entry);
  element.insertAdjacentHTML("beforeend",new_entry);
    
     var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
            
function drawCoordinates(x,y,counter){
    var pointSize = 10; // Change according to the size of the point.
    ctx.fillStyle = "#ff2626"; // Red color
    ctx.beginPath(); //Start path
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
    console.log("X is: " +x);
    console.log("Y is: " +y);
    ctx.font = "bold 15px Arial";
    ctx.fill(); // Close the path and fill.
    ctx.fillStyle = "black";
    ctx.fillText(counter, x-4, y+4);
    //console.log("Drawing a point");
}
  
//function add() {
//  //LOOK AT https://jsfiddle.net/r70wqav7/
//  var el = document.getElementById("feedelements");
//  var node = document.createElement("li");
//  var link = document.createElement("a");
//  link.innerText = "Link Text"
//  link.setAttribute('href', 'http://www.google.it');
//  node.className="clearfix";
//  node.appendChild(link);
//  el.appendChild(node);
//}


var counter = 1;
function add() {
    var currentdate = new Date(); 
    var Text = document.getElementById("pitchtype");
    var Velo = document.getElementById("velo");
    var element = document.getElementById("feedelements");
  var new_entry=
  "<li class='clearfix'>"+
    "<div class='feed d-flex justify-content-between'>"+
        "<div class='feed-body d-flex justify-content-between'='><a class='feed-profile' href='#'><img class='img-fluid rounded-circle' src='/images/baseball.gif' alt='person' /></a>"+
            "<div class='content'><strong>" + Text + "</strong><small>"+ Velo +" </small>"+
                "<div class='full-date'><small>Today 5:60 pm - 12.06.2014</small></div>"+
            "</div>"+
        "</div>"+
        "<div class='date'><small></small></div>"+
    "</div>"+
"</li>";
    
//    var new_entry = "<div class='block'>"
//  								+"Entry "+counter+"<br><input type='text' name='myInputs'><br>"
//                  +"<div class='buttons'>"
//                  +"<input class='add_sub_button' type='button' value='add nested'>"
//                  +"<input class='add_button' type='button' value='Add another text input' >"
//                  +"</div>"
//                  +"</div><br />"
//                  +"</div>";
  console.log(new_entry);
  element.insertAdjacentHTML("beforeend",new_entry);
}

$("#myCanvas").click(function(e){
     getPosition(e); 
     // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
        // Get the button that opens the modal
    var submit = document.getElementById("sub");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

//    // When the user clicks the button, open the modal 
//    btn.onclick = function() {
//      modal.style.display = "block";
//    }
//
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
//    submit.onclick = function() {
//      modal.style.display = "none";
//    }
//
//    // When the user clicks anywhere outside of the modal, close it
//    window.onclick = function(event) {
//      if (event.target == modal) {
//        modal.style.display = "none";
//      }
//    }
    modal.style.display = "block";
});

//update function
function update()
{
  ctx.clearRect(0,0, myCanvas.width, myCanvas.height);
    
  ctx.beginPath();
  ctx.rect(200, 200, 300, 400);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.stroke();
    
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'rgb(232,232,232,0.9)';
  ctx.moveTo(175, 0);
  ctx.lineTo(175, 800);
  ctx.moveTo(350, 0);
  ctx.lineTo(350, 800);
  ctx.moveTo(525, 0);
  ctx.lineTo(525, 800);
    
  ctx.moveTo(0,175);
  ctx.lineTo(800, 175);
  ctx.moveTo(0, 350);
  ctx.lineTo(800, 350);
  ctx.moveTo(0, 525);
  ctx.lineTo(800, 525);
  ctx.stroke();
  for(i=0; i < points.length; i++)
  {
      drawCoordinates(points[i][0],points[i][1],i+1);
  }
    //console.log(points[0]);
  //DELETED FOR TESTING
  var myJsonString = JSON.stringify(points);
  //console.log(myJsonString);
  var s = document.getElementById("Test2");
  s.value = myJsonString;
  s.innerText = myJsonString; 
}
setInterval(update, 10);











// from http://bl.ocks.org/mbostock/4349187
// Sample from a normal distribution with mean 0, stddev 1.

var d3 = Plotly.d3;
var img_jpg= d3.select('#jpg-export');
var x = [];
var y = [];

function createMap() {


    
for(i = 0; i < points.length; i++)
        {
            tempX = points[i][0];
            tempY = points[i][1];
            x.push(tempX);
            y.push(tempY);
        }

var trace1 = {
  x: x,
  y: y,
  mode: 'markers',
  name: 'points',
  marker: {
    color: 'rgb(102,0,0)',
    size: 20,
    opacity: 0.4
  },
  type: 'scatter'
};
var trace2 = {
  x: x,
  y: y,
  name: 'density',
  //ncontours: 20,
    ncontours: 20,
    contours: {
        //coloring:'fill',
        showlines:false,
  },
    smoothing:.1,
//    colorscale:[[0, 'rgb(216,33,41)'], [0.1, 'rgb(229,107,112)'], [0.2,'rgb(242,181,184)'],[.4,'rgb(255,255,255)'],[.5,'rgb(188,202,228)'],[.6, 'rgb(121,150,200)'],[1,'rgb(255,255,255)']],
    colorscale:[[0, 'rgb(216,33,41)'],[.2,'rgb(255,255,255)'],[.5, 'rgb(121,150,200)'],[1,'rgb(255,255,255)']],
  reversescale: true,
  showscale: false,
  type: 'histogram2dcontour'
};
//var trace3 = {
//  x: x,
//  name: 'x density',
//  marker: {color: 'rgb(102,0,0)'},
//  yaxis: 'y2',
//  type: 'histogram'
//};
//var trace4 = {
//  y: y,
//  name: 'y density',
//  marker: {color: 'rgb(102,0,0)'},
//  xaxis: 'x2',
//  type: 'histogram'
//};
//var data = [trace1, trace2];
var data = [trace2];
var layout = {
  showlegend: false,
  autosize: false,
  width: 550,
  height: 600,
  margin: {t: 50},
  hovermode: 'closest',
  bargap: 0,
  xaxis: {
    //domain: [0, 0.85],
    //showgrid: false,
      showgrid:true,
    autorange: false,
      range:[200,500],
    //https://codepen.io/plotly/pen/KpLVzv
    //hide axis
//    showgrid: false,
//    zeroline: false,
//    showline: false,
//    autotick: true,
//    ticks: '',
//    showticklabels: false,
//    zeroline: false
      
  },
  yaxis: {
    //domain: [0, 0.85],
    //showgrid: false,
      showgrid:true,
      autorange: false,
      range:[600,200],
      //hide axis
//    showgrid: false,
//    zeroline: false,
//    showline: false,
//    autotick: true,
//    ticks: '',
//    showticklabels: false,
//    zeroline: false
  },
  xaxis2: {
    //domain: [0.85, 1],
      range:[0,10],
    showgrid: false,
    zeroline: false
  },
  yaxis2: {
    //domain: [0.85, 1],
      range:[0,10],
    showgrid: false,
    zeroline: false
  }
};

//Plotly.newPlot('myDiv', data, layout)

//.then(
//    function(gd)
//     {
//      Plotly.toImage(gd,{height:600,width:550})
//         .then(
//             function(url)
//         {
//             img_jpg.attr("src", url);
//         }
//         )
//    });

    Plotly.newPlot('myDiv', data, layout)

.then(
    function(gd)
     {
      Plotly.toImage(gd,{height:600,width:550})
         //Plotly.toImage(gd,{height:300,width:275})
         .then(
             function(url)
         {
             img_jpg.attr("src", url);
         }
         )
    });
};