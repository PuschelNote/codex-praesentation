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
  cli:{kicker:'TERMINAL-NATIV',title:'CLI',text:'Die in Rust entwickelte Open-Source-CLI arbeitet direkt mit Dateien, Befehlen und dem lokalen Repository.',items:['Installation via npm oder Homebrew','Über 400 Contributors seit April 2025','Transparenter Agent-Loop'],visual:['$ codex','› Was möchtest du bauen?']},
  desktop:{kicker:'KOMMANDOZENTRALE',title:'Desktop',text:'Die App für macOS und Windows koordiniert mehrere Agenten, Threads und Worktrees in einer visuellen Oberfläche.',items:['Parallele Agenten im Blick','Isolierte Worktrees','Threads pro Projekt'],visual:['4 AGENTS ACTIVE','✓ 3 tasks ready for review']},
  ide:{kicker:'IM EDITOR',title:'IDE',text:'Codex sitzt dort, wo Code entsteht – in VS Code, Cursor, Windsurf oder JetBrains – mit dem gleichen Agent-Kern.',items:['Direkter Dateikontext','Review im gewohnten Editor','Kurze Wege zwischen Idee und Diff'],visual:['src / app.ts','+ feature implemented']},
  cloud:{kicker:'CLOUD IN CHATGPT',title:'Cloud',text:'Aufgaben laufen isoliert in Sandbox-Containern im Hintergrund. Das eignet sich besonders für viele parallele Tasks.',items:['Hintergrundausführung','Isolierte Sandbox','Ideal für Task-Batches'],visual:['CLOUD TASK #184','● running in sandbox']}
};
document.querySelectorAll('[data-interface]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-interface]').forEach(b => {b.classList.toggle('active',b===button);b.setAttribute('aria-selected',String(b===button))});
  const d=interfaceData[button.dataset.interface];
  document.getElementById('interfacePanel').innerHTML=`<div><p class="panel-kicker">${d.kicker}</p><h3>${d.title}</h3><p>${d.text}</p><ul>${d.items.map(x=>`<li>${x}</li>`).join('')}</ul></div><div class="mini-window"><div>${d.visual[0]}</div><p>${d.visual[1]}</p><span class="cursor"></span></div>`;
}));

const chainData={
  inbound:{kicker:'PRIMÄRE AKTIVITÄT',title:'Eingangslogistik',text:'Trainingsdaten, lizenzierte Datensätze, Nutzer-Feedback und Rechenkapazität bilden den Input.',items:['Code-Repositories & Datenlizenzen','Nvidia-GPUs','Azure-Cloud über Microsoft']},
  operations:{kicker:'PRIMÄRE AKTIVITÄT',title:'Operationen',text:'Hier werden die GPT-5.x-Codex-Modelle trainiert und der agentische Arbeitsablauf entwickelt.',items:['Training, Fine-Tuning & RLHF','Tool-Calling & Multi-Agent-Orchestrierung','Sandbox- und Approval-Architektur']},
  distribution:{kicker:'PRIMÄRE AKTIVITÄT',title:'Ausgangslogistik',text:'Die Distribution ist vollständig digital und benötigt keinen physischen Vertrieb.',items:['CLI über npm & Homebrew','Desktop- und IDE-Updates','Cloud-Bereitstellung in ChatGPT']},
  sales:{kicker:'PRIMÄRE AKTIVITÄT',title:'Marketing & Vertrieb',text:'Bundling und ein niedriger Einstiegspreis führen Nutzer vom Testzugang in höherwertige Pläne.',items:['Freemium-Funnel','Open-Source-Community','Enterprise-Systemintegratoren']},
  service:{kicker:'PRIMÄRE AKTIVITÄT',title:'Kundendienst',text:'Support und transparente Sicherheitskommunikation bestimmen das Vertrauen nach dem Kauf.',items:['Status-Page & Changelog','Security-Advisories & Bugcrowd','GitHub-Issues & Enterprise-Support']},
  support:{kicker:'UNTERSTÜTZENDE AKTIVITÄTEN',title:'Infrastruktur hinter Codex',text:'Governance, Talente, Forschung und Beschaffung ermöglichen alle primären Aktivitäten.',items:['Compliance, Recht & Microsoft-Partnerschaft','KI-Forschung & Security-Engineering','Compute, Datenlizenzen & MCP-Ökosystem']}
};
document.querySelectorAll('[data-chain]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-chain]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-selected',String(b===button))});
  const d=chainData[button.dataset.chain];
  document.getElementById('chainPanel').innerHTML=`<div><span class="panel-kicker">${d.kicker}</span><h3>${d.title}</h3><p>${d.text}</p></div><ul>${d.items.map(x=>`<li>${x}</li>`).join('')}</ul>`;
}));

function animateCounters(){document.querySelectorAll('[data-count]').forEach(el=>{if(el.dataset.done)return;el.dataset.done='1';const target=+el.dataset.count,start=performance.now(),duration=900;function frame(t){const p=Math.min((t-start)/duration,1),v=target*(1-Math.pow(1-p,3));el.textContent=target>=1000?Math.round(v).toLocaleString('de-DE'):target%1? v.toFixed(1).replace('.',','):Math.round(v);if(p<1)requestAnimationFrame(frame)}requestAnimationFrame(frame)})}

const seats=document.getElementById('seats'),seatOutput=document.getElementById('seatOutput'),estimate=document.getElementById('estimate'),estimateNote=document.getElementById('estimateNote');
let selectedPlan=document.querySelector('[data-plan].active');
function calculate(){
  const count=+seats.value;
  seatOutput.value=`${count} ${count===1?'Person':'Personen'}`;
  if(selectedPlan.dataset.custom==='true'){
    estimate.textContent='Individuell';
    estimateNote.textContent='*Flexible Credits und Konditionen nach Vereinbarung.';
    return;
  }
  const min=count*(+selectedPlan.dataset.priceMin);
  const max=selectedPlan.dataset.priceMax?count*(+selectedPlan.dataset.priceMax):null;
  const prefix=selectedPlan.dataset.prefix||'';
  estimate.textContent=max?`${min.toLocaleString('de-DE')}–${max.toLocaleString('de-DE')} $`:`${prefix}${min.toLocaleString('de-DE')} $`;
  estimateNote.textContent='*Ohne zusätzliche nutzungsbasierte Credits.';
}
seats.addEventListener('input',calculate);
document.querySelectorAll('[data-plan]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-plan]').forEach(x=>x.classList.toggle('active',x===b));selectedPlan=b;calculate()}));

const quizCards=[...document.querySelectorAll('#finalQuiz article')];
function updateQuizScore(){
  const correct=quizCards.filter(card=>card.dataset.result==='correct').length;
  document.getElementById('quizScore').textContent=`${correct} / ${quizCards.length}`;
}
quizCards.forEach(card=>card.querySelectorAll('[data-choice]').forEach(button=>button.addEventListener('click',()=>{
  if(card.dataset.result)return;
  const correct=button.dataset.choice===card.dataset.answer;
  card.dataset.result=correct?'correct':'wrong';
  button.classList.add(correct?'correct':'wrong');
  card.querySelectorAll('button').forEach(b=>b.disabled=true);
  card.querySelector('output').classList.add('visible');
  updateQuizScore();
})));
document.getElementById('quizReset').addEventListener('click',()=>{
  quizCards.forEach(card=>{delete card.dataset.result;card.querySelectorAll('button').forEach(b=>{b.disabled=false;b.classList.remove('correct','wrong')});card.querySelector('output').classList.remove('visible')});
  updateQuizScore();
});

document.getElementById('themeToggle').addEventListener('click',()=>{const dark=document.documentElement.dataset.theme==='dark';document.documentElement.dataset.theme=dark?'light':'dark';localStorage.setItem('codex-theme',dark?'light':'dark')});
document.documentElement.dataset.theme=localStorage.getItem('codex-theme')||'light';
const hashIndex=slides.findIndex(s=>`#${s.id}`===location.hash);
showSlide(hashIndex>=0?hashIndex:0);
