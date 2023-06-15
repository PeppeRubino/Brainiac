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

//Manipolable info window
interact('#broadmannTexts')
  .draggable({
    onmove: function (event) {
      var target = event.target;
      var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
      var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

      target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    }
  })
  .resizable({
    edges: { left: true, right: true, bottom: true, top: true }
  })
  .on('resizemove', function (event) {
    var target = event.target;
    var x = (parseFloat(target.getAttribute('data-x')) || 0);
    var y = (parseFloat(target.getAttribute('data-y')) || 0);

    target.style.width = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';

    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.transform = 'translate(' + x + 'px,' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  });

//commento