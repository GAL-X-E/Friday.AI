 SpeechRecognition = window.webkitSpeechRecognition;
 recognition = new SpeechRecognition();

 function start(){
     document.getElementById("textbox").innerHTML = null;
     recognition.start();
 }
 recognition.onresult = function(event){
     console.log(event);
     content = event.results[0][0].transcript;
     document.getElementById("textbox").innerHTML = content;
     console.log(content);
     if(content == "take my selfie"){
         console.log("taking selfie");
         speak();
     }
 }

 function speak(){
     synth = window.speechSynthesis;
     speak_data = "taking your selfie in 5 seconds";
     utterThis = new SpeechSynthesisUtterance(speak_data);
     synth.speak(utterThis);
     Webcam.attach(camera);

     setTimeout(function(){
         take_snapshot();
         save();
     },5000);
 }

 camera = document.getElementById("camera");
 Webcam.set({
     width:360,
     height:300,
     image_format:'png',
     png_quality:90
 });

 function take_snapshot(){
     Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
     });
 }

function save(){
    link = document.getElementById("link");
    img = document.getElementById("selfie_image").src;
    link.href = img;
    link.click();
}