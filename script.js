const slides = [...document.querySelectorAll('.slide')];
const deck = document.getElementById('deck');
const currentLabel = document.getElementById('currentSlide');
const progressBar = document.getElementById('progressBar');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const chapterNav = document.getElementById('chapterNav');
const menuToggle = document.getElementById('menuToggle');
let current = 0;
let wheelLocked = false;

document.getElementById('totalSlides').textContent = String(slides.length).padStart(2, '0');

function showSlide(index) {
  current = Math.max(0, Math.min(slides.length - 1, index));
  slides.forEach((slide, i) => {
    const active = i === current;
    slide.classList.toggle('active', active);
    slide.setAttribute('aria-hidden', String(!active));
    if (active) slide.scrollTop = 0;
  });
  currentLabel.textContent = String(current + 1).padStart(2, '0');
  progressBar.style.width = `${((current + 1) / slides.length) * 100}%`;
  prevButton.disabled = current === 0;
  nextButton.disabled = current === slides.length - 1;
  history.replaceState(null, '', `#${slides[current].id}`);
  document.title = `${slides[current].dataset.title} — Codex Deep Dive`;
  if (current === 1) animateCounters();
  closeMenu();
}

function closeMenu(){chapterNav.classList.remove('open');menuToggle.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}
function move(direction){showSlide(current + direction)}
prevButton.addEventListener('click', () => move(-1));
nextButton.addEventListener('click', () => move(1));
document.querySelectorAll('[data-next]').forEach(b => b.addEventListener('click', () => move(1)));
document.querySelectorAll('[data-target-slide]').forEach(b => b.addEventListener('click', () => showSlide(+b.dataset.targetSlide)));
document.querySelectorAll('.chapter-nav [data-target]').forEach(b => b.addEventListener('click', () => showSlide(+b.dataset.target)));

menuToggle.addEventListener('click', () => {
  const open = chapterNav.classList.toggle('open');
  menuToggle.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.addEventListener('keydown', e => {
  if (['INPUT', 'BUTTON'].includes(document.activeElement.tagName) && e.key === ' ') return;
  if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(e.key)){e.preventDefault();move(1)}
  if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)){e.preventDefault();move(-1)}
  if (e.key === 'Home') showSlide(0);
  if (e.key === 'End') showSlide(slides.length - 1);
  if (e.key === 'Escape') closeMenu();
});

deck.addEventListener('wheel', e => {
  const activeSlide = slides[current];
  const atTop = activeSlide.scrollTop <= 0;
  const atBottom = activeSlide.scrollTop + activeSlide.clientHeight >= activeSlide.scrollHeight - 2;
  if (wheelLocked || (e.deltaY < 0 && !atTop) || (e.deltaY > 0 && !atBottom)) return;
  wheelLocked = true;
  move(e.deltaY > 0 ? 1 : -1);
  setTimeout(() => wheelLocked = false, 700);
}, {passive:true});

let touchStart = 0;
deck.addEventListener('touchstart', e => touchStart = e.changedTouches[0].clientY, {passive:true});
deck.addEventListener('touchend', e => {const d=touchStart-e.changedTouches[0].clientY;if(Math.abs(d)>60)move(d>0?1:-1)}, {passive:true});

const interfaceData = {
  cli:{kicker:'TERMINAL-NATIV',title:'CLI',text:'Open Source und direkt im Entwicklungsfluss. Codex liest Dateien, führt Befehle aus und arbeitet mit dem lokalen Repository.',items:['Ideal für Terminal-Workflows','Installation via npm oder Homebrew','Transparenter Agent-Loop'],visual:['$ codex','› Was möchtest du bauen?']},
  desktop:{kicker:'KOMMANDOZENTRALE',title:'Desktop',text:'Mehrere Agenten, Threads und Worktrees werden in einer visuellen Oberfläche pro Projekt koordiniert.',items:['Parallele Agenten im Blick','Isolierte Worktrees','Projektbezogene Threads'],visual:['4 AGENTS ACTIVE','✓ 3 tasks ready for review']},
  ide:{kicker:'IM EDITOR',title:'IDE',text:'Codex sitzt dort, wo Code entsteht – in VS Code, Cursor, Windsurf oder JetBrains – mit dem gleichen Agent-Kern.',items:['Direkter Dateikontext','Review im gewohnten Editor','Kurze Wege zwischen Idee und Diff'],visual:['src / app.ts','+ feature implemented']},
  cloud:{kicker:'ISOLIERT & PARALLEL',title:'Cloud',text:'Aufgaben laufen in Sandbox-Containern im Hintergrund. Das eignet sich besonders für viele unabhängige Tasks.',items:['Hintergrundausführung','Sandbox-Umgebung','Ideal für Task-Batches'],visual:['CLOUD TASK #184','● running in sandbox']}
};
document.querySelectorAll('[data-interface]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-interface]').forEach(b => {b.classList.toggle('active',b===button);b.setAttribute('aria-selected',String(b===button))});
  const d=interfaceData[button.dataset.interface];
  document.getElementById('interfacePanel').innerHTML=`<div><p class="panel-kicker">${d.kicker}</p><h3>${d.title}</h3><p>${d.text}</p><ul>${d.items.map(x=>`<li>${x}</li>`).join('')}</ul></div><div class="mini-window"><div>${d.visual[0]}</div><p>${d.visual[1]}</p><span class="cursor"></span></div>`;
}));

function animateCounters(){document.querySelectorAll('[data-count]').forEach(el=>{if(el.dataset.done)return;el.dataset.done='1';const target=+el.dataset.count,start=performance.now(),duration=900;function frame(t){const p=Math.min((t-start)/duration,1),v=target*(1-Math.pow(1-p,3));el.textContent=target>=1000?Math.round(v).toLocaleString('de-DE'):target%1? v.toFixed(1).replace('.',','):Math.round(v);if(p<1)requestAnimationFrame(frame)}requestAnimationFrame(frame)})}

const seats=document.getElementById('seats'),seatOutput=document.getElementById('seatOutput'),estimate=document.getElementById('estimate');
let planPrice=20;
function calculate(){const count=+seats.value;seatOutput.value=`${count} ${count===1?'Person':'Personen'}`;estimate.textContent=`${(count*planPrice).toLocaleString('de-DE')} $`}
seats.addEventListener('input',calculate);
document.querySelectorAll('[data-plan]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-plan]').forEach(x=>x.classList.toggle('active',x===b));planPrice=+b.dataset.price;calculate()}));

document.querySelectorAll('#quiz button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('#quiz button').forEach(b=>b.classList.remove('correct','wrong'));const correct=button.dataset.correct==='true';button.classList.add(correct?'correct':'wrong');document.querySelector('#quiz output').value=correct?'Genau: Der Mensch setzt Leitplanken und verantwortet den Review.':'Fast – die zentrale Rolle ist Kontext geben und Ergebnisse prüfen.'}));

document.getElementById('themeToggle').addEventListener('click',()=>{const dark=document.documentElement.dataset.theme==='dark';document.documentElement.dataset.theme=dark?'light':'dark';localStorage.setItem('codex-theme',dark?'light':'dark')});
document.documentElement.dataset.theme=localStorage.getItem('codex-theme')||'light';
const hashIndex=slides.findIndex(s=>`#${s.id}`===location.hash);
showSlide(hashIndex>=0?hashIndex:0);
