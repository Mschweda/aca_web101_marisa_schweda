
 var gameMarker = "o"
function changeMarkerToX(){
    gameMarker = "X";
   console.log("The x button was clicked!") 
}


function changeMarkerToO(){
     gameMarker = "O"
    console.log("The o button was clicked!") 
}

function placeMark(theId){
    console.log(theId)
    var square= document.getElementById(theId);
    console.log("square", square)
    square.innerHTML = gameMarker;

}
