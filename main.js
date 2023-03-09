video="";
status="";

function preload(){
    video = createVideo("video.mp4");
    video.hide();
}

function setup(){
 canvas = createCanvas(480,380);
 canvas.center();
}
function draw(){
    image(video ,30,30,480,380);
}
function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="status : Object Detected";
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(1);
}