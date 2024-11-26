//Close and Open Sidebar functions//
function openSidebar() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeSidebar() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("main").style.marginLeft = "0";
}

const tanques = document.getElementById('tanques');

let isDragging = false;
let startX;
let scrollLeft;

tanques.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - tanques.offsetLeft;
  scrollLeft = tanques.scrollLeft;
  tanques.style.cursor = 'grabbing'; // Muda o cursor para o ícone de "pegando"
});

tanques.addEventListener('mouseleave', () => {
  isDragging = false;
  tanques.style.cursor = 'grab'; // Volta para o cursor de arrastar
});

tanques.addEventListener('mouseup', () => {
  isDragging = false;
  tanques.style.cursor = 'grab'; // Volta para o cursor de arrastar
});

tanques.addEventListener('mousemove', (e) => {
  if (!isDragging) return; // Se não está arrastando, sai da função

  e.preventDefault();
  const moveX = e.pageX - tanques.offsetLeft;
  const distance = (moveX - startX) * 1; // Ajuste de velocidade de arrasto
  tanques.scrollLeft = scrollLeft - distance;

  
});