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
     if(content == "Friday open Google"){
         console.log("open Google");
         window.open("//www.google.com/");
         google();
         start();
     }

     if(content == "Friday open YouTube"){
        console.log("open youtube");
        window.open("//www.youtube.com/");
        youtube();
        start();
    }

    if(content == "Friday open Facebook"){
        console.log("open Facebook");
        window.open("//www.facebook.com/");
        Facebook();
        start();
    }

    if(content == "Friday open Twitter"){
        console.log("open Twitter");
        window.open("//twitter.com/?lang=en");
        Twitter();
        start();
    }

    if(content == "hi Friday"){
        console.log("hi");
        Hi();
        start();
    }
 }

 function google(){
     synth = window.speechSynthesis;
     speak_data = "Opening Google sir";
     utterThis = new SpeechSynthesisUtterance(speak_data);
     synth.speak(utterThis);
     start();
 }

 function youtube(){
    synth = window.speechSynthesis;
    speak_data = "Opening Youtube sir";
    utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    start();
}

function Facebook(){
    synth = window.speechSynthesis;
    speak_data = "Opening facebook sir";
    utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    start();
}

function Twitter(){
    synth = window.speechSynthesis;
    speak_data = "Opening Twitter sir";
    utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    start();
}

function Hi(){
    synth = window.speechSynthesis;
    speak_data = "Hi  I  am  Friday  I  can  make  your  life  easy.";
    utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}