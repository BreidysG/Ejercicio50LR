document.getElementById('startButton').addEventListener('click', function() {
    startTimer();
    startExercise();
});

let visualInterval;
let timerInterval;
let currentLineIndex = 0;

function startExercise() {
    // Ocultar instrucciones y botones
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('containerInputButton').style.display = 'none';
    document.getElementById("settings").style.display = "none";
    document.getElementById("p1").classList.add("hidden");
    document.getElementById("p2").classList.add("hidden");
    document.getElementById("p3").classList.add("hidden");
    
    // Mostrar el reloj
    document.getElementById('triangleContainer').classList.remove('hidden');
    
    var velocidadRecorrido = parseInt(document.getElementById('speedInput').value);
    // Iniciar el recorrido visual
    startVisualRecorrido(velocidadRecorrido);
}

function startVisualRecorrido(velocidadRecorrido) {
    const lines = document.querySelectorAll('.line');
    clearInterval(visualInterval);

    // Resaltar la primera línea
    lines[currentLineIndex].classList.add('active-line');

    visualInterval = setInterval(function() {
        // Eliminar la clase de la línea anterior
        lines[currentLineIndex].classList.remove('active-line');

        currentLineIndex++;

        if (currentLineIndex >= lines.length) {
            currentLineIndex = 0; // Reiniciar si se llega al final
        }

        // Resaltar la línea actual
        lines[currentLineIndex].classList.add('active-line');
    }, velocidadRecorrido); // Cambiar el valor según la velocidad deseada
}

function startTimer() {
    var timerElement = document.getElementById('timer');
    var totalTime = 120; // 2 minutos en segundos
    var minutes, seconds;
    
    timerInterval = setInterval(function() {
        minutes = Math.floor(totalTime / 60);
        seconds = totalTime % 60;
        timerElement.innerHTML = 'Tiempo restante: ' + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

        if (totalTime <= 0) {
            clearInterval(timerInterval);
            clearInterval(visualInterval);
            alert('¡El ejercicio ha terminado!');
            return;
        }
        totalTime--;
    }, 1000);
}
