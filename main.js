peter_pan_song="";
harry_potter_song="";
leftWristX= 0;
leftWristY= 0;
rightWristX= 0;
rightWristY= 0;
leftWrist_status= 0;
score_leftWristY= 0;

function preload(){
    peter_pan_song=loadSound('music.mp3');
    harry_potter_song=loadSound('music2.mp3');
}

function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
    video= createCapture(VIDEO);   
    video.hide();     
    posenet=ml5.poseNet(video,modelLoaded);     
    posenet.on('pose', gotPoses); 
}

function modelLoaded(){     
console.log('Model Loaded!');
}

function gotPoses(results){     
    if(results.length > 0){         
    console.log(results);    
    leftWristX= results[0].pose.leftWrist.x;     
    leftWristY= results[0].pose.leftWrist.y;     
    console.log('leftWristX = '+leftWristX+' leftWristY = '+leftWristY);  
    rightWristX= results[0].pose.rightWrist.x;     
    rightWristY= results[0].pose.rightWrist.y;     
    console.log('rightWristX = '+rightWristX+' rightWristY = '+rightWristY);
} 
}  
   

function draw(){     
image(video, 0, 0, 600, 500); 
leftWrist_status= peter_pan_song.isPlaying();
fill("#ff0000");
stroke('#ff0000');
if(score_leftWristY > 0.2){
    circle(leftWristX, leftWristY, 20);
    harry_potter_song.stop();
    if(leftWrist_status==false){
        peter_pan_song.play();
        document.getElementById('songName_button').innerHTML='Peter pan song is being played.'
    }
}

} 