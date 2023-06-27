const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Define o tempo inicial (em segundos)
let totalSeconds = 0;

// Atualiza a exibição do contador
function updateCounter() {
  // Calcula as horas, minutos e segundos
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // Atualiza os elementos HTML com os valores atualizados
  hoursElement.textContent = String(hours).padStart(2, '0');
  minutesElement.textContent = String(minutes).padStart(2, '0');
  secondsElement.textContent = String(seconds).padStart(2, '0');

  // Incrementa o contador de segundos
  totalSeconds++;
}

// Chama a função updateCounter() a cada segundo
setInterval(updateCounter, 1000);