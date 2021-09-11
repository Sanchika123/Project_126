peter_pan_song="";
harry_potter_song="";

function preload(){
    peter_pan_song=loadSound('music.mp3');
    harry_potter_song=loadSound('music2.mp3');
}

function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
    video= createCapture(VIDEO);   
    video.hide();     
}

function draw(){     
image(video, 0, 0, 600, 500); 
} 