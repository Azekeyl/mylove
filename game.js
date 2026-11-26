const flowers = ['🌸','🌷','🌹','🌺','🌻','💮','🌼','💐'];
let opened = false;

function createFlower() {
  const f = document.createElement('div');
  f.className = 'flower';
  f.innerText = flowers[Math.floor(Math.random()*flowers.length)];
  f.style.left = Math.random()*window.innerWidth + 'px';
  f.style.fontSize = (22 + Math.random()*28) + 'px';
  f.style.animationDuration = (2.5 + Math.random()*3) + 's';
  document.body.appendChild(f);
  setTimeout(()=> f.remove(), 6000);
}

function openEnvelope() {
  if (opened) return;
  opened = true;
  document.getElementById('envelope').classList.add('open');
  document.getElementById('msg').innerText = 'ayiiieee, para sayo yan ❤️';

  // sabog ng flowers pag bukas
  for(let i=0;i<60;i++){
    setTimeout(()=> createFlower(), i*60);
  }
}