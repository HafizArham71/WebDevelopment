// Select elements
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');

// Function to start speech recognition
const startSpeechRecognition = () => {
  // Check if SpeechRecognition is supported
  if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
    alert('Speech Recognition API not supported in this browser.');
    return false;
  }


  // Request permission to access microphone
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      // Initialize SpeechRecognition
      window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new webkitSpeechRecognition();
      recognition.interimResults = true;

      // Add event listener for result event
      recognition.addEventListener('result', handleResult);

      // Start speech recognition
      recognition.start();
    })
    .catch(error => {
      console.error('Error accessing microphone:', error);
    });
};

// Function to handle result event
const handleResult = (event) => {
  const transcript = Array.from(event.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join('');

  textarea.value = transcript;
};

// Add event listener for button click
button.addEventListener('click', startSpeechRecognition);
textarea.addEventListener('click'  , recognition.stop())