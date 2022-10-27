// expose.js

window.addEventListener('DOMContentLoaded', init);

function init()
{
  const jsConfetti = new JSConfetti();
  const selectHorn = document.getElementById('horn-select');
  const changeHornImage = document.getElementsByTagName("img")[0];
  const selectSound = document.querySelector(".hidden");
  const setVolumeControls = document.getElementById('volume');
  const setVolumePicture = document.getElementById('volume-controls').getElementsByTagName("img")[0];

  const playSoundButton = document.querySelector('button');

  selectHorn.addEventListener('change', (event) => 
  {
    changeHornImage.src = 'assets/images/' + event.target.value + '.svg';
    selectSound.src = 'assets/audio/' + event.target.value + '.mp3';
    console.log(selectHorn);
  });

  playSoundButton.addEventListener('click', (event) => 
  {
    selectSound.volume = setVolumeControls.value / 100;
    selectSound.play();
    if(changeHornImage.src == 'http://127.0.0.1:5500/assets/images/party-horn.svg')
    {
      jsConfetti.addConfetti();
    }
 
  });

  setVolumeControls.addEventListener('change', (event) => 
  {
    setVolumeControls.value = event.target.value;
    console.log(setVolumeControls.value);
    if (setVolumeControls.value == 0)
    {
      setVolumePicture.src = 'assets/icons/volume-level-0.svg';
    }
    else if (setVolumeControls.value < 33)
    {
      setVolumePicture.src = 'assets/icons/volume-level-1.svg';
    }
    else if (setVolumeControls.value < 67)
    {
      setVolumePicture.src = 'assets/icons/volume-level-2.svg';
    }
    else
    {
      setVolumePicture.src = 'assets/icons/volume-level-3.svg';
    }
  });
  
}