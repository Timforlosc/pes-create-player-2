import dictNames from './data/dict_names.json';
const used={};

export default function generate(nat){
  const pool=dictNames[nat]||[];
  if(!used[nat]) used[nat]=new Set();
  if(!pool.length) return 'JOUEUR_FAKE';
  let n; do{ n=pool[Math.random()*pool.length|0].toUpperCase() }while(used[nat].has(n));
  used[nat].add(n);
  return n;
}
