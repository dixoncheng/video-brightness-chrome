'use strict';

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {    
    if(request.action == 'brightness') {
      document.getElementsByTagName('html')[0].setAttribute('data-video-brightness', request.brightness);
      
      var str = 'brightness(' + request.brightness + ')';
      // document.getElementsByTagName('body')[0].style['-webkit-filter'] = str;
      
      var netflix = document.getElementById('netflix-player');
      if(netflix) {
        netflix.style['-webkit-filter'] = str;
      } else {
        var videos = document.getElementsByTagName('video');
        if(videos) {
          for(var i = 0; i < videos.length; i++) {
            videos[i].style['-webkit-filter'] = str;    
          }
        }
        var objects = document.getElementsByTagName('object');
        if(objects) {
          for(var i = 0; i < objects.length; i++) {
            objects[i].style['-webkit-filter'] = str;    
          }
        }
      }
    }
    if(request.action == 'getBrightness') {
      sendResponse(document.getElementsByTagName('html')[0].getAttribute('data-video-brightness'));
    }
  }
);