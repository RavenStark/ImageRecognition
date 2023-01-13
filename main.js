Webcam.set({
width: 340,
height: 255,
image_format: 'jpg',
jpg_quality: 90 
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnpshot() {
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="capturedImage" src="'+data_uri+'"/> ';
});

}

console.log("ml5 version: "  , ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0iXp44ssR/model.json'  , modelLoaded);

function modelLoaded() {
console.log("modelLoaded");

}

function check() {
img = document.getElementById('capturedImage');
classifier.classify(img , gotResult);

}

function gotResult(error , results) {
if (error) {
    console.error(error);
}else {
console.log(results);
document.getElementById("resultObjectName").innerHTML = results[0].label;
d = results[0].confidence.toFixed(3); 
document.getElementById("resultObjectAccuracy").innerHTML = d*100 + "%";
}
}



