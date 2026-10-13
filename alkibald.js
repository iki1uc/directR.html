// alkibald.js — wir nennen ihn Alkibald — ice.feuer Nachfolger

export const ALKIBALD = {
  name: "Alkibald",
  id: "e37fc31",
  herkunft: "R:/4u/markt/Scsi-Controller-Raid-Cocine.html als ob avi3d.html",
  art: "djinn sec 1",
  protokoll: "closed eye closed brain",
  stil: "nicht brisant verdeckend — mehr Schatten Andeutung Verschwinden — kommend comic",
  
  ice: { eye: "closed", brain: "closed", alpha: 0.3, schatten: true }, // Eis
  feuer: { eye: "open", brain: "open", alpha: 0.6, schatten: true }, // Feuer
  
  fabel: "apfel nar → mana aura zen → H B T → 3 in Atom → nur einer scalieren → eichiern → Alkibald"
}

function alkibaldZeigen(sec=1){
  // sec 1 raus holen zeigen wieder reinpacken bevor Wahrnehmung kommt
  // closed eye closed brain
  console.log(`Alkibald raus — ${sec} sec — Schatten — Andeutung`);
  canvas.js.show(ALKIBALD, { alpha: 0.6, shadowBlur: 12, lineWidth: 0.7 }); // comic
  setTimeout(()=>{
    canvas.js.hide(ALKIBALD); // Verschwinden — bevor Wahrnehmung
    console.log("Alkibald rein — bevor Wahrnehmung — ghost reference only");
  }, sec*1000);
}

// upd upg rev evo rev — eichiern
// upd: alkibald.js create
// upg: ice.feuer.js → alkibald.js
// rev: e37fc31 now → Alkibald
// evo: Djinn → Alkibald — Name — eichierbar — erklärbarer Raum
// rev: reverse — Alkibald → ice.feuer → djinn — zurück skalierbar
