

$(function() {
    let $list = $('ul');
    let $newItemForm = $('#newItemForm');

    $newItemForm.on('submit', function(e) {
      e.preventDefault();
      let text = $('input[type="text"]').val();
      $list.append(`<li>${text}</li>`);
      $('input[type="text"]').val('');
    });
  
    $list.on('click', 'li', function() {
      let $this = $(this);
      $this.remove();
    });
});

var myLocation = document.getElementById("my-location")

function getLocation() {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(displayPosition)
  } else {
   myLocation.innerHTML = "Not available"
  }
}

function displayPosition(position) {
  myLocation.innerHTML = "Longitude: " + position.coords.longitude + " Latitude: " + position.coords.latitude
}
function renderTime(){
  var mydate = new Date();
  var year = mydate.getYear();
    if(year < 1000){
        year +=1900;
     } 
  var day = mydate.getDay();
  var month = mydate.getMonth();
  var daym = mydate.getDate ();
  var dayarray = new Array ("Sunday",   "Monday", "Tuesday", "Wednesday",     "Thursday", "Friday", "Saturday");
  var montharray= new Array("January",    "February", "March", "April",         "May", "June", "July", "August", "September", "October", "November",       "December");
  
  // date end
  //Time
  var currentTime = new Date();
  var h = currentTime.getHours();
  var m = currentTime.getMinutes();
  var s = currentTime.getSeconds();
  if(h == 24){
    h = 0;
} else if(h > 12){
    h = h - 0;
}

if(m < 10){
  m = "0" + m;
}

if(s < 10){
  s = "0" + s;
}
    var myClock = document.getElementById("clockDisplay");
    myClock.textContext = "" + dayarray[day]+ "  " +montharray[month]+ " "  +daym+ " "+year+ " | " +h+ ":" +m+ ":" +s;
    myClock.innerText =  "" + dayarray[day]+ "  " +montharray[month]+ " "  +daym+ ", " +year+ "  " +h+ ":" +m+ ":" +s;
  
      setTimeout('renderTime()', 1000)
}
window.addEventListener('mousemove', nutterbutter);
var _el = document.getElementById('ship');
_el.addEventListener('dblclick', function(){
	window.addEventListener('mousemove', nutterbutter);
	_el.addEventListener('dblclick', removeNutter);
});

function removeNutter(){
	window.removeEventListener('mousemove', nutterbutter);
	_el.removeEventListener('dblclick', removeNutter);
}
function nutterbutter(){
	_el.style.top = event.clientY + "px";
	_el.style.left = event.clientX + "px";
}

                        
  
