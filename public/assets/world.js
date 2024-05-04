const socket = io();

function chance(prob) { return !!prob && Math.random() <= prob; }

function randInt(min, max) {  return Math.floor(Math.random() * (max - min + 1) + min) }

function pick(arr) { return arr[(Math.random() * arr.length) | 0]; }



function write(text) {
  let SPEED = 80;
  var i = 0;
  var $caption = $('#caption');
  var $spans = $caption.children('span');
  var interval;

  // Clear any existing typewriter interval
  $caption.empty();
  clearInterval(interval);

  interval = setInterval(function() {
    if (i < text.length) {
      if ($spans.eq(i).length) {
        $spans.eq(i).text(text.charAt(i));
      } else {
        $caption.append('<span>' + text.charAt(i) + '</span>');
      }
      i++;
    } else {
      clearInterval(interval);
    }
  }, SPEED);
}




// START

$(document).ready(function(){
//
//  setTimeout(function(){ 
//  function appendActionLink(actionName, fxName) {
//      var actionData = I[ME.identity][actionName]?.split('|');
//      var fxData = I[ME.identity][fxName]?.split(',');
//
//      if (actionData && fxData) {
//          var actionLink = $('<a>')
//              .attr('action', fxData[0])
//              .attr('intensity', fxData[1])
//              .attr('title', actionData[1])
//              .text(actionData[0]);
//
//          $("#actions").append(actionLink);
//      }
//  }
//
//  appendActionLink('act1', 'fx1');
//  appendActionLink('act2', 'fx2');
//  }, 1000);
      
});


// AUDIO

//var clicked = false;
//
//$(document).click(function() {
//  if (!clicked) {
//    $("audio")[0].play();
//    clicked = true;
//  }
//});


      
