nosex = 0
nosey = 0 

function preload(){
    mustach = loadImage('https://i.postimg.cc/fT3ftJ99/tawdawdaw.png')
}

function setup(){
canvas = createCanvas(500,500)
canvas.center()
video = createCapture(VIDEO)
video.size(500,500)
video.hide()
poseNet = ml5.poseNet(video , modelLoaded)
poseNet.on('pose',gotPoses)
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        console.log("nose x =" + results[0].pose.nose.x)
        console.log("nose y =" + results[0].pose.nose.y)
        nosex = results[0].pose.nose.x
        nosey = results[0].pose.nose.y
        early = results[0].pose.leftEar.y
        earlx = results[0].pose.leftEar.x
        earry = results[0].pose.rightEar.y
        earrx = results[0].pose.rightEar.x
    }
}

function modelLoaded(){
    console.log("[Initialized]Model")
}

function draw(){
    image(video,0,0,500,500)
    fill(255,0,0)
    stroke(255,0,0) 
    circle(nosex,nosey,20)
    
    image(mustach,nosex,nosey,50,50)
   
}

function take_snapshot(){
    save('thanos.png') 
}