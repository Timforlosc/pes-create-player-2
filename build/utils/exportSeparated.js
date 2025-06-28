import JSZip      from 'jszip';
import { saveAs } from 'file-saver';
import { CSV_HEADER } from './config.js';

export default async function exportSeparated(list){
  const zip=new JSZip();
  list.forEach(p=>{
    const file=p.Id+'_'+p.Name.replace(/ /g,'_')+'.csv';
    zip.file(file, CSV_HEADER+'\n'+p.csvLine);
  });
  const blob=await zip.generateAsync({type:'blob'});
  saveAs(blob,'players_pes.zip');
}
