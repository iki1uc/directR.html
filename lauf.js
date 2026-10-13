// lauf.js — FIX — rent jetzt — spooky der rent gar nciht — fix — raw en rum richtig rum — so rum so bleibt besser so
// nebel.licht.js — Nebel Licht — maßnahme innen move außen — drinn musik außen show

export const RAW = {
  innen: "drinn spielt die musik — musik nie nach außen — innen — ROM Axiom-12 — Licht innen",
  aussen: "show nur nach außen — show funktioniert immer nur nach außen — außen — directR.html — Nebel außen",
  tiefer: "Wahrheit tiefer — master pi lächelt — pi 3.1415 — 8→9 oder 3 Seil",
  regel: "maßnahme innen — move außen — innen musik — außen show — so rum so bleibt besser so",
  meta: "meta = 7sinn — Schatten — Hitchcock — Kill Bill ohne Kill — Show ohne Kill"
};

export const NEBEL_LICHT = {
  nebel: RAW.aussen,
  licht: RAW.innen,
  pi: RAW.tiefer,
  s8: (v) => {
    const s = String(v);
    const q = s.split('').reduce((a,c) => a + (parseInt(c)||0), 0) || 8;
    return `${s}→8→${q%3===0?9:3}`;
  },
  check: (f) => `${f} — ${NEBEL_LICHT.s8(f)} — ${RAW.regel} — ${RAW.meta}`
};

export const ATOM = {
  runter: (v=81) => v===81?27: v===27?3: v===3?0: Math.floor(v/3),
  steps: [81,27,3,0],
  regel: "81→27→3→0 — runter — nicht 3 x innen — innen gibt es nicht — weil wir rechnen runter"
};

// Algorithmus natürlich klingen lassen oder zahlen formulieren
export const LAUF = {
  klingen: {
    map: (v) => ({81:69, 27:62, 3:53, 0:0}[v]?? 50+(v%12)),
    freq: (midi) => midi===0?0: 440 * Math.pow(2,(midi-69)/12),
    spielen: (steps=[81,27,3,0]) => steps.map(v=>{
      const midi = LAUF.klingen.map(v);
      return {v, midi, freq: LAUF.klingen.freq(midi), text: `${v}→${midi}→${LAUF.klingen.freq(midi).toFixed(1)}Hz — drinn musik`};
    }),
    audio: (steps=[81,27,3,0], dur=0.4) => {
      const ctx = new (window.AudioContext||window.webkitAudioContext)();
      let t = ctx.currentTime;
      steps.forEach(v=>{
        if(v===0){ t+=dur; return; }
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.value = LAUF.klingen.freq(LAUF.klingen.map(v));
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.22, t+0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, t+dur);
        osc.connect(gain).connect(ctx.destination);
        osc.start(t); osc.stop(t+dur);
        t+=dur;
      });
      return `klingt — ${steps.join('→')} — drinn spielt die musik`;
    }
  },
  zahlen: {
    formel: "81=3^4 → 27=3^3 → 3=3^1 → 0 Ende — 81◆→△→27▣→3↺ — cubik ram",
    runter: (v=81) => { const a=[]; let c=v; while(c>0){ a.push(c); c=ATOM.runter(c);} return a; },
    raum: (h=8,b=9,t=3) => ({h,b,t, vol:h*b*t, txt:`${h}◆${b}▣${t}↺ vol ${h*b*t}`})
  },
  lauf: (h=8,b=9,t=3) => ({
    steps: LAUF.zahlen.runter(81),
    klingen: LAUF.klingen.spielen([81,27,3,0]),
    raum: LAUF.zahlen.raum(h,b,t),
    txt: `${h}→${b}→${t} — lauf.js — 81→27→3→0 — so rum so bleibt besser so`
  })
};

console.log(RAW.innen);
console.log(RAW.aussen);
console.log(NEBEL_LICHT.check("nebel.licht.js — so rum — so bleibt — besser so"));
console.log(LAUF.lauf(8,9,3));
console.log(LAUF.klingen.spielen([81,27,3,0]));

// im Browser: LAUF.klingen.audio([81,27,3,0]) aufrufen — dann klingt er — drinn spielt die musik
