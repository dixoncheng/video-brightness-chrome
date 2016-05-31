'use strict';

document.addEventListener('DOMContentLoaded', function() {
  
  var range = document.getElementById('brightness');

  chrome.tabs.getSelected(null, function(tab) {    
    chrome.tabs.sendMessage(tab.id, {
        action: 'getBrightness'
      }, function(response) {
        range.value = response == null ? 1 : response;
    });
  });

  range.addEventListener('input', function() {
    chrome.tabs.getSelected(null, function(tab) {

      chrome.tabs.sendMessage(tab.id, {
          action: 'brightness',
          brightness: range.value
        }, function(response) {          
      });
    });

  }, false);
}, false);