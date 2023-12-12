const speech = require('@google-cloud/speech');
const { micInputStream } = require('./mic')

const client = new speech.SpeechClient();

const config = {
  encoding: 'LINEAR16',
  sampleRateHertz: 16000,
  languageCode: 'en-US',
}

const request = {
  config: config,
  audioContent: micInputStream,
 };
 
 client
 .streamingRecognize(request)
 .on('error', console.error)
 .on('data', data => {
   const transcription = data.results
     .map(result => result.alternatives[0].transcript)
     .join('\n');
   console.log(`Transcription: ${transcription}`);
 });
