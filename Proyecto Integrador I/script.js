const canvas = document.getElementById('grid-bg');
const ctx = canvas.getContext('2d');
let w, h, t = 0;
function resize(){
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resize(); window.addEventListener('resize', resize);

function draw(){
  ctx.clearRect(0,0,w,h);
  ctx.strokeStyle = 'rgba(160, 200, 230, 0.08)';
  ctx.lineWidth = 1;
  const grid = 48;
  const offset = (Math.sin(t/6000)*grid);
  for(let x = ((offset%grid)+grid)%grid; x < w; x += grid){
    ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,h); ctx.stroke();
  }
  for(let y = ((offset%grid)+grid)%grid; y < h; y += grid){
    ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(w,y); ctx.stroke();
  }
  t += 16;
  requestAnimationFrame(draw);
}
draw();

// Efecto tilt en la tarjeta
const card = document.querySelector('.showcase');
if(card){
  card.addEventListener('mousemove', (e)=>{
    const r = card.getBoundingClientRect();
    const cx = e.clientX - r.left, cy = e.clientY - r.top;
    const rx = ((cy / r.height) - .5) * -8;
    const ry = ((cx / r.width) - .5) * 10;
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  card.addEventListener('mouseleave', ()=>{
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
  });
}

// Botón de simulación (fake)
document.getElementById('btnDemo')?.addEventListener('click', ()=>{
  const btn = document.getElementById('btnDemo');
  btn.disabled = true;
  btn.textContent = 'Aislando...';
  setTimeout(()=>{ btn.textContent='Observando comportamiento...'; }, 1000);
  setTimeout(()=>{ btn.textContent='Clasificación (IA)...'; }, 2200);
  setTimeout(()=>{ btn.textContent='Resultado: archivo sospechoso'; btn.style.background='linear-gradient(90deg,#f43f5e,#fb923c)'; }, 3600);
  setTimeout(()=>{ btn.disabled = false; btn.textContent='Ejecutar Simulación'; btn.style.background='linear-gradient(90deg,#60a5fa,#22d3ee)'; }, 6800);
});

  window.addEventListener('scroll', () => {
    const section = document.querySelector('.pyramid-container');
    const rect = section.getBoundingClientRect();
    const triggerHeight = window.innerHeight * 0.85;

    if (rect.top < triggerHeight) {
      section.classList.add('visible');
    }
  });