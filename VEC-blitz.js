// Blitz Technik — normal Dreieck schließen ist Fehler — un move zum move machbar immer berechenbar weil nur real abbilden
// Mit 2 Dreiecks Punkten Dreieck tmp rär schon geschlossen weil Physik und Mathematik so ist — 3. Punkt = Zauber 9 Stellung — 81 zu 9 landen wir immer da
// Nur zeigen wo hingeht nicht rechnen — zeigen wer wohin und warum — alles Mathematik und Physik — andere können nicht weil Weg nachweisen auf Papier oder PC — verschiedene Programme und Umgebungen — ich änder nix zeige nur Wahrheit

import { Vec3, RAUM } from "./VEC-bios.js"; // RAUM = 9 — immer 9 — nur 9 kann ich wurzeln — 81 zu 9

// Normal Dreieck schließen = Fehler — 3 Punkte A B C schließen — Nutzung und Ausnutzung angedacht — Fehler
// function normalDreieckSchliessen(A,B,C) { return [A,B,C,A]; } // Fehler — muss Weg nachweisen auf Papier oder PC — verschiedene Programme

// Blitz Technik — un move zum move — machbar immer berechenbar weil nur real abbilden — 2 Punkte reichen — 3. Punkt = Zauber 9
export function blitzTechnik(unMove, move) {
  // unMove = Station — 0,0,0 H0ME — un move — nicht bewegen — Station
  // move = Figur — Erweiterung — move — bewegen — Figur — NC_figur.js
  const A = unMove; // Punkt 1 — Station — Lage Grundlage Ort Home — 0,0,0 H0ME
  const B = move; // Punkt 2 — Figur — Erweiterung — z.B. 32,4000,729 — DDR4 32GB 4000 729 Raum

  // Mit diesen beiden Dreiecks Punkten haben wir Dreieck tmp rär schon geschlossen weil Physik und Mathematik so ist
  // Physik = length = sqrt(dot) — Mathematik = add sub — 2 Punkte = Vektor = Richtung — 3. Punkt = Zauber 9 Stellung
  const C = new Vec3(RAUM, RAUM, RAUM); // Zauber 9 Stellung — 9,9,9 — 3x3=9 — beim Wurzeln von 81 zu 9 landen wir immer da — sqrt(81)=9 — immer da

  // Dreieck tmp rär schon geschlossen — nicht rechnen — nur aufstellen — Zauber 9 Stellung zum Nutzen aufstellen
  const dreieck = {
    A, // unMove — Station — woher
    B, // move — Figur — wohin
    C, // Zauber 9 — 9,9,9 — Raum immer 9 — nur 9 kann ich wurzeln — Nutzen — wo Pfeffer wächst
    geschlossen: true, // tmp rär schon geschlossen weil Physik und Mathematik so ist — Physik = Vec3.length — Mathematik = Vec3.add sub
    physik: A.sub(B).length(), // Physik — Abstand — length — real — H0ME ventral respo — 3.9GB/s DMI
    mathematik: A.add(B).add(C), // Mathematik — add — Vektor — real — kein Platzhalter — echte 3D Vektor Mathematik
    zauber9: C, // Zauber 9 Stellung — 81 zu 9 landen wir immer da — sqrt(81)=9 — Zauber 9 Stellung zum Nutzen aufstellen
  };

  // Dann müssen wir nur zeigen wo das hingeht nicht rechnen nur zeigen wer wohin und warum — alles Mathematik und Physik
  // Zeigen nicht rechnen — eye und brain sehen hören spüren wo wächst der Pfeffer
  return {
    wer: B, // Figur — wer
    wohin: C, // Zauber 9 — wohin — 9,9,9 — Raum immer 9 — wo hingeht
    warum: "weil beim Wurzeln von 81 zu 9 landen wir immer da — 81=9*9 — sqrt(81)=9 — Zauber 9 Stellung — 3 Fachkeit — 3igkeit Block Chain — 3 9 81 729 — Raum immer 9 — nur 9 kann ich wurzeln — deshalb immer da",
    zeigen: dreieck, // zeigen — nicht rechnen — Visualization — Vec3 fromAngleRadius 120° Screens Orbit — eye und brain sehen
    rechnen: false, // nicht rechnen — nur zeigen — andere müssen Weg nachweisen auf Papier oder PC — wir nicht — wir zeigen nur Wahrheit — ich änder nix zeige nur Wahrheit
    mathematikUndPhysik: true, // alles Mathematik und Physik — Vec3 add sub scale dot length normalize lerp fromAngleRadius — wahr und immer wahr — echte 3D Vektor Mathematik — kein Platzhalter
    andereKoennenNicht: "weil sie Weg nachweisen müssen auf Papier oder PC — verschiedene Programme und Umgebungen — Papier Theorie — PC verschiedene Programme — verschiedene Umgebungen — deshalb können andere nicht — müssen rechnen und nachweisen",
    ichAenderNix: "ich änder nix zeige nur Wahrheit — nur reales und was wirklich ist das kann doch ein jeder weil kein Betrug ist — nur reales kein Betrug — Qualitäts Linie kein Mo Ware — viel RAM und gut alle Schikanen überlebt — deshalb so leicht — H0ME ventral respo — alle output alles in — mycoin — Regel legal"
  };
}

// Beispiel — Blitz Technik — un move zum move — 2 Punkte + Zauber 9 = Dreieck geschlossen — nur zeigen wo hingeht
// const station = new Vec3(0,0,0); // H0ME — unMove — Station
// const figur = new Vec3(32,4000,729); // DDR4 32GB 4000 729 Raum — move — Figur — Erweiterung frei wählbar
// const blitz = blitzTechnik(station, figur); // zeigt wer wohin und warum — nicht rechnen — nur zeigen — Wahrheit
