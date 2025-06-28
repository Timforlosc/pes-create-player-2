/* ========== CONSTANTES ========== */
import { CSV_HEADER, COUNTRIES, POSITIONS, MOD } from './config.js';
import names from './dict_names.json'             // le gros JSON
import exportSeparated from './exportSeparated.js'

/* ========== INTERFACE INIT ========== */
const boxCountries = document.getElementById('countryBox');
const boxPos       = document.getElementById('posBox');
const out          = document.getElementById('out');
const zipBtn       = document.getElementById('zip');

/* boutons générer / zip */
document.getElementById('gen').onclick = runGenerator;
zipBtn.onclick                          = () => exportSeparated(players);

/* construit les cases nationalités */
Object.entries(COUNTRIES).forEach(([code,lib])=>{
  const div=document.createElement('div');
  div.className='country'; div.textContent=lib; div.dataset.code=code;
  div.onclick = () => div.classList.toggle('sel');
  boxCountries.appendChild(div)
})
/* cases postes */
POSITIONS.forEach(p=>{
  const wrap=document.createElement('div');
  wrap.innerHTML=`<label>${p.code} <input type="number" id="pos_${p.code}" value="0" min="0" max="99"></label>`;
  boxPos.appendChild(wrap);
})

/* ========== GÉNÉRATION ========== */
let players=[];
function runGenerator(){
  const min = +document.getElementById('min').value;
  const max = +document.getElementById('max').value;
  const count= +document.getElementById('count').value;

  /* pays sélectionnés */
  const sel=[...document.querySelectorAll('.country.sel')].map(d=>d.dataset.code);
  if(!sel.length){alert('Choisir au moins une nationalité');return}

  /* répartition postes */
  const posCounts = {};
  let total=0;
  POSITIONS.forEach(p=>{
    const n= +document.getElementById(`pos_${p.code}`).value||0;
    posCounts[p.code]=n; total+=n;
  });
  if(total!==count){alert('La somme des postes doit faire '+count);return}

  /* génération */
  players=[];
  let id=2147483650;
  POSITIONS.forEach(p=>{
    Array.from({length:posCounts[p.code]}).forEach(()=>{
      const natCode= sel[Math.floor(Math.random()*sel.length)];
      const nat=COUNTRIES[natCode];
      const name=getUniqueName(nat);
      const overall = rand(min,max);
      const csvLine = buildCSV(id,name,natCode,p.code,overall);
      players.push({Id:id,Name:name,csvLine});
      id++;
    })
  })
  /* aperçu + bouton ZIP actif */
  out.textContent = players.map(p=>`${p.Id}  ${p.Name}`).join('\n');
  zipBtn.disabled=false;
}

/* ======= NOMS (anti-doublon) ======= */
const issued={};
function getUniqueName(nat){
  const pool=names[nat]||[];
  if(!issued[nat]) issued[nat]=new Set();
  let cand;
  do{ cand=pool[Math.floor(Math.random()*pool.length)].toUpperCase() }
  while(issued[nat].has(cand));
  issued[nat].add(cand);
  return cand;
}

/* ======= CSV builder (simplifié) ======= */
function buildCSV(id,name,country,pos,ov){
  /* seules 2 colonnes vraiment utiles → Id & Name + Country + POS + Overall */
  const base = Array(281).fill('');
  base[0]=id; base[1]=name; base[6]=country; base[13]=pos;
  base[27]=ov; /* OffensiveAwareness = Overall (exemple cohérent) */
  return base.join(';');
}

/* utilitaires */
const rand=(a,b)=> Math.floor(Math.random()*(b-a+1))+a;
