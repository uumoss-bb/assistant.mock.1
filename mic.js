const mic = require('mic');
const fs = require('fs');

const micInstance = mic({
    rate: '16000',
    channels: '1',
    debug: false,
    exitOnSilence: 6
});
const micInputStream = micInstance.getAudioStream();
const outputFileStream = fs.WriteStream('voice/output.raw');

micInputStream.pipe(outputFileStream);
 
micInputStream.on('data', function(data) {
});
 
micInputStream.on('error', function(err) {
    cosole.log("Error in Input Stream: " + err);
});
 
micInputStream.on('startComplete', function() {
    console.log("Hello Brodie");
});
    
micInputStream.on('stopComplete', function() {
    console.log("Shutting Down");
});
 
micInputStream.on('silence', function() {
    console.log(" ------------------------------------------------------ silence")
    // transcribe.send()
});
 
module.exports = {
    startListening: micInstance.start,
    micInputStream
}
