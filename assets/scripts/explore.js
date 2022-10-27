// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() 
{
  const voiceSelect = document.querySelector('select');
  const changePicture = document.getElementById('explore').getElementsByTagName('img')[0];
  console.log(changePicture.src);

  let voices = [];

  function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();
  
    for (const voice of voices) {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
  
      if (voice.default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    }
  } 

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const pressToTalkButton = document.getElementsByTagName('button')[0];
  console.log(pressToTalkButton);
  pressToTalkButton.addEventListener('click', (event) => 
  {
    let textToSpeech = document.getElementById('text-to-speak').value;
    let utterance = new SpeechSynthesisUtterance(textToSpeech);
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (const voice of voices) 
    {
      if (voice.name === selectedVoice) {
        utterance.voice = voice;
      }
    }
    speechSynthesis.speak(utterance);
    changePicture.src = 'assets/images/smiling-open.png';
    utterance.onend = (event) => {
      changePicture.src = 'assets/images/smiling.png';
    }
  });
  
}