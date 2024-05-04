
// change a sound


function updateAudio(){
  
  let valplaybackRate = $("audio")[0].playbackRate;
  let valVolume = $("audio")[0].volume;
  let valPlaying = !$("audio")[0].paused;
  
  console.log(valplaybackRate, valVolume, valPlaying);
  
  socket.emit('updateAudio', {
    playbackRate: valplaybackRate,
    volume: valVolume,
    playing: valPlaying
  });
}

function updateVisuals(){
  
  let styles = $('#object').css([
    'filter',
    'transform',
   ]);

  socket.emit('updateVisuals', JSON.stringify(styles));
  
}

$(document).on("input", "#volume", function(){
  let volume = $(this).val();
  $("audio")[0].volume = volume;
  $("[volume]").html(volume);
  updateAudio();
  
});

$(document).on("click", "[action]", function(){

  console.log("Performing an action...")
  let action = $(this).attr("action");
  let intensity = $(this).attr("value");
  
//  interact(action, intensity);
  
  if(Actions && Actions[action]){
    Actions[action](intensity);
  }

  // update details accordingly
  
  updateAudio();
  updateVisuals();
  
  socket.emit('sendData', {
    action: action, intensity: intensity
  });
  
});



socket.on('receiveData', (data) => {
  console.log('Received data:', data);
  
  
  console.log(`You are a ${Identity} responding to ${data.action}.`)
  
  if(Reactions && Reactions[data.action]){
    Reactions[data.action](data.intensity);
    
    updateAudio();
    updateVisuals();
  }

});



$(document).ready(function(){

  // change default volume

  let audioSource = $('audio').find('source').attr('src');

  let imageSource = $('#object img').attr('src').replace('images/', '');
  
  let positionLeft = randInt(LeftMin, LeftMax);
  let positionTop = randInt(TopMin, TopMax);

  let volDefault = $("#volume").val();
   $("audio")[0].volume = volDefault;
  $("[volume]").html(volDefault);
  
  socket.emit('identity', {
    identity: Identity,
    audio: audioSource,
    image: imageSource,
    position: {
      left: positionLeft,
      top: positionTop,
    },
    audioState: {
        playing: false,
        playbackRate: 1,
        volume: volDefault
    }
  });
  
});



// Additional keypresses to make performance more fun