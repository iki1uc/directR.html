// djinn.js — closed eye closed brain — 1 sec containment

function djinn(sec=1){
  // closed eye closed brain
  eye = "closed" // kein Sehen — canvas.js aus
  brain = "closed" // kein Denken — lauf.js pause

  // raus holen
  let d = ram.lauf.ready.pop() // 81 ◆ △ 39 Slot — djinn Slot
  // zeigen — 1 sec
  canvas.js.show(d) // Apfel Nar — Fabel — als ob

  // wieder rein bevor Wahrnehmung kommt
  setTimeout(()=>{
    ram.lauf.ready.push(d) // zurück in Cache — ghost reference only
    eye = "closed"
    brain = "closed"
    // Wahrnehmung kam nicht — djinn hat nicht gesehen dass er gezeigt wurde
    // = eichierbar — upd upg rev evo rev — nur einer scaliert
  }, sec*1000) // sec = 1 — deine sec
}
