var words=""
function help()
{
    window.location="index2.html"
}
var SpeechRecognition=window.webkitSpeechRecognition;
recognition=new SpeechRecognition();
function read(){
    recognition.start();
    words=document.getElementById("Text").value;
    speak()
}
function speak(){
    var synth=window.speechSynthesis;
    var utterThis=new SpeechSynthesisUtterance(words)
    synth.speak(utterThis)
}