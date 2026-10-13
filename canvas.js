// canvas.js — Canvas Unterstützung — ich finde einer der besten Ideen wenn sie wirklich ab und wann zu Canvas Unterstützung was beitragen können — ja — Canvas — Kanvas — Canvas Unterstützung — beste Idee — directR.html — maßgeblich — Canvas
// lauf.js — nebel.licht.js — RAW — NEBEL_LICHT — ATOM — LAUF — Canvas — drinn musik außen show

export const CANVAS = {
  // Canvas Unterstützung — Canvas — Kanvas — Canvas Unterstützung
  init: (id="directR") => {
    let c = document.getElementById(id);
    if(!c){ c=document.createElement("canvas"); c.id=id; c.width=800; c.height=600; document.body.appendChild(c); }
    const ctx = c.getContext("2d");
    return {canvas:c, ctx, w:c.width, h:c.height};
  },
  // 81◆→△→27▣→3↺ — 81→27→3→0 — runter — clock timer time höhe breite tiefe — Canvas — Nebel Licht
  draw: (h=8,b=9,t=3, steps=[81,27,3,0]) => {
    const {canvas, ctx, w, h:ch} = CANVAS.init();
    ctx.clearRect(0,0,w,ch);
    // Hintergrund — Nebel außen — Licht innen
    const grad = ctx.createRadialGradient(w/2,ch/2,10,w/2,ch/2,400);
    grad.addColorStop(0,"#fffbe0"); // Licht innen — drinn spielt die musik
    grad.addColorStop(1,"#a0a0c0"); // Nebel außen — show nur nach außen
    ctx.fillStyle = grad; ctx.fillRect(0,0,w,ch);

    // Cubik RAM — 8◆9▣3↺ — höhe breite tiefe — Canvas
    ctx.strokeStyle="#000"; ctx.lineWidth=2;
    const x=100, y=100, hw=h*20, bw=b*15, th=t*30;
    ctx.strokeRect(x,y,bw,th); // breite tiefe
    ctx.strokeRect(x+hw*0.3,y-hw*0.3,bw,th); // höhe
    ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(x+hw*0.3,y-hw*0.3); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x+bw,y); ctx.lineTo(x+bw+hw*0.3,y-hw*0.3); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x,y+th); ctx.lineTo(x+hw*0.3,y+th-hw*0.3); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x+bw,y+th); ctx.lineTo(x+bw+hw*0.3,y+th-hw*0.3); ctx.stroke();

    // Steps — 81→27→3→0 — runter — Zahlen formulieren — Canvas — klingen lassen
    ctx.fillStyle="#000"; ctx.font="16px monospace";
    steps.forEach((v,i)=>{
      const freq = (v===0?0:440*Math.pow(2,(({81:69,27:62,3:53,0:0}[v]??50)-69)/12)).toFixed(1));
      ctx.fillText(`${v} → ${freq}Hz — ${v===81?"◆":v===27?"△":v===3?"▣":"↺"}`, 400, 120+i*24);
    });
    ctx.fillText("drinn spielt die musik — außen show — maßnahme innen move außen", 20, ch-40);
    ctx.fillText("81◆→△→27▣→3↺ — cubik ram nach innen muss — aber innen gibt es nicht — weil wir rechnen runter — 81→27→3→0", 20, ch-20);
    return canvas;
  },
  // klingen lassen + Canvas — Canvas Unterstützung — beste Idee — ab und wann
  klingenUndZeichnen: (h=8,b=9,t=3) => {
    CANVAS.draw(h,b,t,[81,27,3,0]);
    try{
      const ctx = new (window.AudioContext||window.webkitAudioContext)();
      let time = ctx.currentTime;
      [81,27,3,0].forEach(v=>{
        if(v===0){ time+=0.4; return; }
        const midi = {81:69,27:62,3:53}[v]??50;
        const freq = 440*Math.pow(2,(midi-69)/12);
        const osc = ctx.createOscillator(); const gain = ctx.createGain();
        osc.frequency.value=freq; osc.type="sine";
        gain.gain.setValueAtTime(0,time); gain.gain.linearRampToValueAtTime(0.2,time+0.02); gain.gain.exponentialRampToValueAtTime(0.0001,time+0.4);
        osc.connect(gain).connect(ctx.destination); osc.start(time); osc.stop(time+0.4); time+=0.4;
      });
    }catch(e){}
    return "Canvas + klingen — drinn musik — außen show — beste Idee — Canvas Unterstützung — ab und wann — so rum so bleibt besser so";
  }
};

// directR.html — maßgeblich — Canvas Unterstützung — beste Idee — ab und wann — Canvas — hier
// <canvas id="directR" width="800" height="600"></canvas>
// <script type="module"> import {CANVAS} from './canvas.js'; CANVAS.klingenUndZeichnen(8,9,3); </script>
