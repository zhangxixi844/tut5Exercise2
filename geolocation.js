let x=document.getElementById("geolocation");

function getGeolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showGeolocation);
    }else{
        x.innerHTML="Geolocation is not supported by this browser.";
    }
}

function showGeolocation(position){
    x.innerHTML="Latitude: "+position.coords.latitude+
    "<br>Longitude: "+position.coords.longitude;
}

function locationError(error) {
    switch(error.code) {
    case error.PERMISSION_DENIED:
     x.innerHTML = "Location Request: User has disabled Geolocation."
    break;
    case error.POSITION_UNAVAILABLE:
     x.innerHTML = "Location Request: info not available"
    break;
    case error.TIMEOUT:
     x.innerHTML = "Location request: timed out."
    break;
    case error.UNKNOWN_ERROR:
     x.innerHTML = "Location Request: unknown error"
    break;
     }
}