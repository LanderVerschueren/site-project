/*if (!navigator.getUserMedia) {
 navigator.getUserMedia = navigator.getUserMedia
 || navigator.webkitGetUserMedia
 || navigator.mozGetUserMedia
 || navigator.msGetUserMedia;
 }

 if (navigator.getUserMedia) {
 navigator.getUserMedia({audio: true}, function (e) {
 // what goes here?
 }, function (e) {
 alert('Error capturing audio.');
 });
 } else {
 alert('getUserMedia not supported in this browser.');
 }*/
var globalAvarage;
var int = 0;
$( document ).ready(function() {
    console.log('loaded first');
    if (!navigator.getUserMedia) {
        navigator.getUserMedia = navigator.getUserMedia
            || navigator.webkitGetUserMedia
            || navigator.mozGetUserMedia
            || navigator.msGetUserMedia;
    }

    navigator.getUserMedia({audio: true, video: true}, function (stream) {

            console.log('loaded sec');
            window.AudioContext = window.AudioContext ||
                window.webkitAudioContext;

            var audioContext = new AudioContext();

            /*audioContext = new webkitAudioContext();*/
            analyser = audioContext.createAnalyser();
            microphone = audioContext.createMediaStreamSource(stream);
            var javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

            analyser.smoothingTimeConstant = 0.3;
            analyser.fftSize = 1024;

            microphone.connect(analyser);
            analyser.connect(javascriptNode);
            javascriptNode.connect(audioContext.destination);
            javascriptNode.onaudioprocess = function () {
                console.log('loaded last');
                var array = new Uint8Array(analyser.frequencyBinCount);
                analyser.getByteFrequencyData(array);

                var values = 0;

                var length = array.length;
                for (var i = 0; i < length; i++) {
                    values += array[i];
                }

                var average = values / length;


                globalAvarage = average;

            }

        }
        , errorCallback);

    function errorCallback() {
        alert('something went wrong');
    }


});

function getAverageMic(){

}
