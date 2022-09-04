function tocasom (SeletorAudio) {
    const elemento = document.querySelector(SeletorAudio);

    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        alert('Elemento não encontrado ou seletor inválido');
    }
}

const listadeteclas = document.querySelectorAll('.tecla');

let contador = 0;

for (let contador = 0; contador < listadeteclas.length; contador++) {

    const tecla = listadeteclas[contador];
    const instrumento = tecla.classList[1];
    const idaudio = `#som_${instrumento}`;

    //console.log(idaudio);

    tecla.onclick = function(){
        tocasom(idaudio);
    }
    //console.log(contador);

    tecla.onkeydown = function(evento){

        if(evento.code=='Space' || evento.code=='Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
