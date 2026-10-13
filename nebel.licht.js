// https://github.com/iki1uc/directR.html/blob/main/nebel.licht.js — fix — nebel.licht.js — Nebel — Licht — du sollst maßnahme und move verstehen — musik nie nach außen — show nur nach außen — drinn spielt die musik — Wahrheit tiefer — master pi lächelt — 81◆→△→27▣→3↺ — cubik ram nach innen muss — aber innen gibt es nicht — weil wir rechnen runter — 81→27→3→0 — runter — clock timer time höhe breite tiefe — alpha.ready.js — 8→9 oder 3 — Seil — 8ten verwebt — nebel.licht.js — Nebel — Licht

export const NEBEL_LICHT = {
  file: "nebel.licht.js — Nebel — Licht — directR.html/nebel.licht.js at main — nebel.licht.js",
  nebel: {
    innen: "drinn spielt die musik — musik nie nach außen — innen — Nebel — nebel.licht.js — ROM — Axiom-12 — ROM_Store — innen — drinn spielt die musik — Nebel — innen",
    aussen: "show funktioniert immer nur nach außen — show nach außen — Nebel nach außen — Licht innen — nebel.licht.js — Nebel — Licht — show nach außen — move außen — best.html rie.html index.html",
    regel: "maßnahme innen — move außen — nebel außen — licht innen — drinn spielt die musik — show nach außen — maßnahme und move verstehen — nebel.licht.js"
  },
  licht: {
    innen: "drinn spielt die musik — Licht innen — licht innen — 81◆→△→27▣→3↺ — cubik ram nach innen muss — aber 3 x innen geht nicht — gibt es nicht — weil wir rechnen runter — 81→27→3→0 — runter — Licht innen — nebel.licht.js — Nebel — Licht — innen Licht — drinn spielt die musik — Licht",
    aussen: "show funktioniert immer nur nach außen — Licht nach außen scheint — aber Quelle innen — nebel.licht.js — Nebel — Licht — show nach außen — Licht innen — Quelle innen — show außen",
    pi: "die wahrheit steckt noch tiefer und lacht sich master pi lächeln auf — Wahrheit tiefer — master pi lächelt — pi 3.1415 — Licht — pi — Licht — master pi lächelt — nebel.licht.js — Nebel — Licht — Wahrheit tiefer — pi lächelt — Licht — pi — 8→9 oder 3 — Seil"
  },
  s8: (s) => { const str=String(s); const q=str.split('').reduce((a,c)=>a+(parseInt(c)||0),0)||8; return `${str}→8→${q%3==0?9:3} — Nebel Licht — Seil 8ten`; },
  check: (f) => `${String(f)} — ${NEBEL_LICHT.s8(f)} — nebel.licht.js — maßnahme innen move außen — musik nie nach außen show nur nach außen — drinn spielt die musik — Wahrheit tiefer — master pi lächelt — Nebel Licht — pi lächelt`
};

export const MASSNAHME_MOVE = {
  innen: NEBEL_LICHT.nebel.innen,
  aussen: NEBEL_LICHT.nebel.aussen + " — " + NEBEL_LICHT.licht.aussen,
  pi: NEBEL_LICHT.licht.pi
};

console.log(NEBEL_LICHT.file);
console.log(NEBEL_LICHT.check("nebel.licht.js — Nebel — Licht — drinn spielt die musik — Wahrheit tiefer — master pi lächelt"));
console.log(NEBEL_LICHT.nebel.innen);
console.log(NEBEL_LICHT.licht.innen);
console.log(NEBEL_LICHT.licht.pi);
