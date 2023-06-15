document.addEventListener('DOMContentLoaded', function () {
  var sezioneAttiva = null;

  function mostraSezioneInfo(numero) {
    const sezioneInfo = document.getElementById(`numberSectionInfo${numero}`);
    const containerTexts = document.getElementById(`containerTexts`);

    if (sezioneInfo) {
      // Nascondi il div del numero precedente, se presente
      if (sezioneAttiva !== null) {
        sezioneAttiva.classList.add('hidden');
      }

      containerTexts.classList.remove('hidden');
      sezioneInfo.classList.remove('hidden');

      sezioneAttiva = sezioneInfo; // Imposta la nuova sezione attiva
    }
  }

  function controllaInput() {
    const inputNumero = parseInt(document.getElementById('numberBroadmann').value);
    if (isNaN(inputNumero) || inputNumero < 1 || inputNumero > 52) {
      document.getElementById('error').classList.remove('hidden');
    } else {
      document.getElementById('error').classList.add('hidden');
    }
  }

  document.getElementById('sendNumb').addEventListener('click', function () {
    controllaInput();
    const inputNumero = parseInt(document.getElementById('numberBroadmann').value);
    mostraSezioneInfo(inputNumero);
  });

  document.getElementById('numberBroadmann').addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
      controllaInput();
      const inputNumero = parseInt(document.getElementById('numberBroadmann').value);
      mostraSezioneInfo(inputNumero);
    }
  });
});


