// in den atom von atom wir gehen 3 x nach inen geht nicht gibt es nicht weil wir rehnen runter — ja — in den atom von atom wir gehen 3 x nach innen geht nicht gibt es nicht weil wir rechnen runter — ja — wir rechnen runter — 81◆→△→27▣→3↺ — cubik ram nach innen muss — aber 3 x nach innen geht nicht — gibt es nicht — weil wir rechnen runter — 81 → 27 → 3 → 0 — runter — nicht 3 x innen — innen gibt es nicht — weil wir rechnen runter — clock timer time höhe breite tiefe — NC_space.js — NC_time.js — VEC-OS.js — coord.js — dreieck.js — directR.html — directR.js — maßgeblich — bei d3d sind wir evoliert — ROM weiß jetzt — fix.sync — fix.sync — wir rechnen runter — nicht innen — innen gibt es nicht — weil wir rechnen runter

export const ATOM_RUNNER = {
  // in den atom von atom wir gehen 3 x nach innen geht nicht gibt es nicht weil wir rechnen runter — wir rechnen runter — 81◆→△→27▣→3↺
  status: "in den atom von atom wir gehen 3 x nach innen geht nicht gibt es nicht weil wir rechnen runter — 81◆→△→27▣→3↺ — cubik ram nach innen muss — aber 3 x nach innen geht nicht — gibt es nicht — weil wir rechnen runter — 81→27→3→0 — runter — nicht innen",
  runter: (start=81) => {
    // wir rechnen runter — nicht rauf — nicht 3 x innen — innen gibt es nicht — weil wir rechnen runter
    // 81◆ → 27▣ → 3↺ → 0 — runter — 81 → 27 → 3 → 0 — runter — nicht 3 x innen
    const steps = [];
    let v = start;
    while(v>0){
      steps.push(v);
      if(v===81) v=27;
      else if(v===27) v=3;
      else if(v===3) v=0;
      else v = Math.floor(v/3);
    }
    return { start, steps, end: 0, regel: "wir rechnen runter — 81→27→3→0 — nicht 3 x innen — innen gibt es nicht — weil wir rechnen runter — 81◆→△→27▣→3↺ — cubik ram nach innen muss — aber innen gibt es nicht" };
  },
  atom: (atom) => {
    // in den atom von atom wir gehen 3 x nach innen geht nicht gibt es nicht weil wir rechnen runter — atom von atom — 3 x nach innen geht nicht
    const s = String(atom);
    return `${s} — atom — atom von atom — 3 x nach innen geht nicht — gibt es nicht — weil wir rechnen runter — ${ATOM_RUNNER.runter(81).steps.join('→')} — runter — nicht innen — ${s} — atom — wir rechnen runter — 81◆→△→27▣→3↺`;
  },
  cube: {
    // 81◆→△→27▣→3↺ — cubik ram nach innen muss — aber innen gibt es nicht — weil wir rechnen runter — clock timer time höhe breite tiefe — höhe breite tiefe
    innen: "81◆→△→27▣→3↺ — cubik ram nach innen muss — aber 3 x nach innen geht nicht — gibt es nicht — weil wir rechnen runter — innen gibt es nicht — weil wir rechnen runter — 81→27→3→0 — runter",
    aussen: "81◆→△→27▣→3↺ — cubik ram nach innen muss — bleibt — room.js bleibt — 81◆→△→27▣→3↺ — cubik ram nach innen muss — bleibt — room.js der bleibt so — bleibt",
    check: (h,b,t) => ({ h,b,t, innen: "3 x nach innen geht nicht — gibt es nicht — weil wir rechnen runter", aussen: `81→27→3→0 — runter — h:${h} b:${b} t:${t} — clock timer time höhe breite tiefe — 81◆→△→27▣→3↺` })
  },
  check: (f) => `${String(f)} — in den atom von atom wir gehen 3 x nach innen geht nicht gibt es nicht weil wir rechnen runter — wir rechnen runter — 81→27→3→0 — runter — nicht innen — innen gibt es nicht — 81◆→△→27▣→3↺ — cubik ram nach innen muss — aber innen gibt es nicht — ${String(f)} — atom — runter — clock timer time höhe breite tiefe`
};

console.log(ATOM_RUNNER.status);
console.log(ATOM_RUNNER.runter(81));
console.log(ATOM_RUNNER.atom("atom von atom — 3 x nach innen geht nicht — gibt es nicht — weil wir rechnen runter"));
console.log(ATOM_RUNNER.cube.check(8,9,3));
console.log(ATOM_RUNNER.check("in den atom von atom wir gehen 3 x nach innen geht nicht gibt es nicht weil wir rechnen runter — wir rechnen runter"));
