//https://github.com/sunng87/heatcanvas
//http://sunng87.github.io/heatcanvas/
//
//var socket = io.connect('http://localhost:3000');
//socket.emit('event', { message: 'Hey, I have an important message!' });


// from http://bl.ocks.org/mbostock/4349187
// Sample from a normal distribution with mean 0, stddev 1.

//The charts are from stylesheets/js/charts-custom.js

var d3 = Plotly.d3;
var img_jpg= d3.select('#jpg-export');
var img_jpg2= d3.select('#jpg-export2');
var img_jpg3= d3.select('#jpg-export3');
var x = [];
var y = [];

    var pitchArray = fastball_data;
    console.log(pitchArray[0].xCoordinate);

    
for(i = 0; i < pitchArray.length; i++)
        {
            tempX = pitchArray[i].xCoordinate;
            tempY = pitchArray[i].yCoordinate;
            x.push(tempX);
            y.push(tempY);
        }

$(".glossary-header").click(function(e){
     // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    //var btn = document.getElementById("myBtn");
    
        // Get the button that opens the modal
    //var submit = document.getElementById("sub");

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
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    modal.style.display = "block";
});



window.onload = function() {

fastballHeatmap();
//END OF FIRST ONE
curveballHeatmap();
changeupHeatmap();


    
//End of on load function    
};





function fastballHeatmap(){
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
    ncontours: 40,
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
  width: 500,
  height: 500,
  margin: {t: 50},
  hovermode: 'closest',
  bargap: 0,
  xaxis: {
    //domain: [0, 0.85],
    //showgrid: false,
      showgrid:true,
    autorange: false,
      //range:[200,500],
      range:[0,700],
    //https://codepen.io/plotly/pen/KpLVzv
    //hide axis
    showgrid: false,
    zeroline: false,
    showline: false,
    autotick: true,
    ticks: '',
    showticklabels: false,
    zeroline: false
  },
  yaxis: {
    //domain: [0, 0.85],
    //showgrid: false,
      showgrid:true,
      autorange: false,
      //range:[600,200],
      range:[700,0],
      //hide axis
    showgrid: false,
    zeroline: false,
    showline: false,
    autotick: true,
    ticks: '',
    showticklabels: false,
    zeroline: false
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

Plotly.newPlot('myDiv', data, layout)

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
      //Plotly.toImage(gd,{height:600,width:550})
         //Plotly.toImage(gd,{height:450,width:412})
         Plotly.toImage(gd,{height:500,width:480})
         .then(
             function(url)
         {
             img_jpg.attr("src", url);
         }
         )
    });
}

function curveballHeatmap(){
    var x2 = [];
var y2 = [];

    curveArray = curveball_data;
    console.log(curveArray[0].xCoordinate);

    
for(i = 0; i < curveArray.length; i++)
        {
            tempX = curveArray[i].xCoordinate;
            tempY = curveArray[i].yCoordinate;
            x2.push(tempX);
            y2.push(tempY);
        }






var trace1 = {
  x: x2,
  y: y2,
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
  x: x2,
  y: y2,
  name: 'density',
  //ncontours: 20,
    ncontours: 40,
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
  width: 500,
  height: 500,
  margin: {t: 50},
  hovermode: 'closest',
  bargap: 0,
  xaxis: {
    //domain: [0, 0.85],
    //showgrid: false,
      showgrid:true,
    autorange: false,
      range:[0,700],
    //https://codepen.io/plotly/pen/KpLVzv
    //hide axis
    showgrid: false,
    zeroline: false,
    showline: false,
    autotick: true,
    ticks: '',
    showticklabels: false,
    zeroline: false
  },
  yaxis: {
    //domain: [0, 0.85],
    //showgrid: false,
      showgrid:true,
      autorange: false,
      range:[700,0],
      //hide axis
    showgrid: false,
    zeroline: false,
    showline: false,
    autotick: true,
    ticks: '',
    showticklabels: false,
    zeroline: false
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

Plotly.newPlot('myDiv2', data, layout)

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

    Plotly.newPlot('myDiv2', data, layout)

.then(
    function(gd)
     {
      //Plotly.toImage(gd,{height:600,width:550})
         Plotly.toImage(gd,{height:500,width:480})
         .then(
             function(url)
         {
             img_jpg2.attr("src", url);
         }
         )
    });
}

function changeupHeatmap(){
    var x3 = [];
var y3 = [];

    changeArray = changeup_data;
    console.log(curveArray[0].xCoordinate);

    
for(i = 0; i < changeArray.length; i++)
        {
            tempX = changeArray[i].xCoordinate;
            tempY = changeArray[i].yCoordinate;
            x3.push(tempX);
            y3.push(tempY);
        }






var trace1 = {
  x: x3,
  y: y3,
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
  x: x3,
  y: y3,
  name: 'density',
  //ncontours: 20,
    ncontours: 40,
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
  width: 500,
  height: 500,
  margin: {t: 50},
  hovermode: 'closest',
  bargap: 0,
  xaxis: {
    //domain: [0, 0.85],
    //showgrid: false,
      showgrid:true,
    autorange: false,
      range:[0,700],
    //https://codepen.io/plotly/pen/KpLVzv
    //hide axis
    showgrid: false,
    zeroline: false,
    showline: false,
    autotick: true,
    ticks: '',
    showticklabels: false,
    zeroline: false
  },
  yaxis: {
    //domain: [0, 0.85],
    //showgrid: false,
      showgrid:true,
      autorange: false,
      range:[700,0],
      //hide axis
    showgrid: false,
    zeroline: false,
    showline: false,
    autotick: true,
    ticks: '',
    showticklabels: false,
    zeroline: false
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

Plotly.newPlot('myDiv3', data, layout)

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

    Plotly.newPlot('myDiv3', data, layout)

.then(
    function(gd)
     {
         console.log("Showing");
      //Plotly.toImage(gd,{height:600,width:550})
         Plotly.toImage(gd,{height:500,width:480})
         .then(
             function(url)
         {
             img_jpg3.attr("src", url);
         }
         )
    });
}