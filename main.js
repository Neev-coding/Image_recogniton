Webcam.set({
 height:300,
 width:350,
 image_format:"png",
png_quality:90
});
camera=document.getElementById("webcam");
Webcam.attach('#webcam');
function Take_Snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='my_object'src='"+ data_uri +"'/>";

    });

}
console.log('ml5.version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HkMQBOSBq/model.json',modelLoaded);
function modelLoaded(){
    console.log('modelLoaded');
}
function Check(){
    img=document.getElementById("my_object");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
 }
 else{
console.log(results);
document.getElementById("result_object_name").innerHTML=results[0].label;
document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
 }
}


