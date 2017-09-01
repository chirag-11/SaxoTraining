(function (){
var name=document.getElementById('name');
var age =document.getElementById('age');
var submit=document.getElementById('submit');
var location=document.getElementById('location');
var location=document.getElementById('worker');
var location=document.getElementById('result');


function handlesubmit()
{localStorage.setItem("name",name.value);
localStorage.setItem("age",age.value);
var info= window.localStorage.getItem("name");
console.log(info);
handleworker();
this.preventDefault();
}


function handlelocation(){
        if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
       window.alert( "Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    alert("Latitude: " + position.coords.latitude + "     "+
           "Longitude: " + position.coords.longitude); 

}

function handleworker(){
    debugger;
    var myWorker = new Worker("worker.js");
    myWorker.postMessage([age.value]);
    myWorker.onmessage = function(e) {
		result.textContent = e.data;
		console.log('Message received from worker');
        console.log(e.data);
	};
    return true;
}

function init()
{
    submit.addEventListener('click',handlesubmit);
    location.addEventListener('click',handlelocation);

}

init();
})()