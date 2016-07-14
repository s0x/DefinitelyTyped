/// <reference path="index.d.ts"/>

// Media and Media Capture
//----------------------------------------------------------------------

var media = new Media('',
    () => { console.log('Media opened'); },
    (err: MediaError) => { alert('Error: ' + err.code); });
media.play();
media.setVolume(10);

console.log('Supported audio modes are: ' + JSON.stringify(navigator.device.capture.supportedAudioModes));

