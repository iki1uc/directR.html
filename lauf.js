// ne das musst du jetzt ver raw en rum richtig rum um rum aber so rum so das es so ist aber so bleibt aber besser so wird so
// raw en rum — richtig rum — um rum — so rum — so ist — so bleibt — besser so wird so
// nebel.licht.js — richtig rum — um rum — so rum — so bleibt — besser so

export const RAW = {
  innen: "drinn spielt die musik — musik nie nach außen — innen — ROM — Axiom-12 — ROM_Store — innen — Nebel Licht — Licht innen — drinn musik",
  aussen: "show nur nach außen — show funktioniert immer nur nach außen — außen — index.html — directR.html — show — Nebel außen — Licht innen — show außen",
  tiefer: "Wahrheit tiefer — master pi lächelt — pi 3.1415 — 8→9 oder 3 Seil — Wahrheit tiefer — pi lächelt",
  regel: "maßnahme innen — move außen — innen musik — außen show — drinn musik — außen show — so rum — so bleibt — besser so",
  meta: "meta = 7sinn — Schatten — Hitchcock — Kill Bill ohne Kill — Spannung ohne Kill — Show ohne Kill — 7 Sinne — Schatten"
};

export const NEBEL_LICHT = {
  nebel: RAW.aussen, // außen — Nebel außen
  licht: RAW.innen,  // innen — Licht innen
  pi: RAW.tiefer,
  s8: (v) => { const s=String(v); const q=s.split('').reduce((a,c)=>a+(parseInt(c)||0),0)||8; return `${s}→8→${q%3==0?9:3}`; },
  check: (f) => `${f} — ${NEBEL_LICHT.s8(f)} — ${RAW.regel} — ${RAW.meta}`
};

export const MASSNAHME_MOVE = { innen: RAW.innen, aussen: RAW.aussen, pi: RAW.tiefer, regel: RAW.regel };
export const META_7SINN = { meta: RAW.meta, schatten: "Schatten — Hitchcock — Spannung", kill_ohne_kill: "Kill Bill ohne Kill — Show ohne Kill" };
export const ATOM = { runter: (v=81) => v===81?27: v===27?3: v===3?0: Math.floor(v/3), steps: [81,27,3,0], regel:"81→27→3→0 — runter — nicht 3 x innen — innen gibt es nicht — weil wir rechnen runter" };

console.log(RAW.innen);
console.log(RAW.aussen);
console.log(RAW.tiefer);
console.log(NEBEL_LICHT.check("nebel.licht.js — so rum — so bleibt — besser so"));
