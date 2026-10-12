// ================================================================
//  VEC-router.js (Gruppe 6: Stage-System) — nur reales — nur raw — nur NC COMMAND 3 Zeichen und Zahl als // ================================================================
//  VEC-router.js (Gruppe 6: Stage-System) — nur reales — nur raw — nur NC COMMAND 3 Zeichen und Zahl als Formel
//  Kein Phantasie Router — echter minimaler Hash-Router aber nur reales — Mathematik gegebene und Physik genommen
//  Grundlage alles Lage als nur erst Lage und Deutung — alles als tmp rären NC COMMANDOS — 3 Fachkeit bewusst und zugestimmt mit Zeugen als Grundlage und sauber Block Chain der 3igkeit als Lage Grundlage Verwaltung
//  Station und Figur und Schach Feld und Figur beachtendes — evo upd upg rev evo — intime realtime verpunktbar — eye und brain sehen hören spüren wo wächst der Pfeffer
//  Wer sagte eigentlich es wird einfacher wer nur ist eine Lüge schau her mann — es wird nicht einfacher nur wahrer — nur reales — kein Betrug — deshalb so leicht aber nicht einfacher
// ================================================================

import { Vec3, RAUM } from "./VEC-bios.js"; // RAUM = 9 — immer 9 — nur 9 kann ich wurzeln — 81 zu 9

// NC COMMAND 3 Zeichen und Zahl als Formel — Mathematik gegebene und Physik genommen — nur reales — kein Phantasie
// ADD 9 — SUB 32 — SCL 4000 — DOT 9 — LEN 729 — NRM 1 — LRP 0.5 — ANG 120 — RAUM 9 — AUGE 1 — NAV 9

// Stage-System — Stage = Station — Router = Figur beachtendes — Stage und Figur und Schach Feld und Figur beachtendes
export function initRouter(onNavigate) {
  // Mathematik gegebene: location.hash.replace('#','') || 'root' — Physik genommen: Hash = Lage Ort Home — H0ME 0,0,0 — Station
  function handle() {
    const raw = location.hash.replace('#', '') || 'root'; // RAW — nur reales — location.hash = Lage
    const raum = RAUM; // 9 — immer 9 — nur 9 kann ich wurzeln — egal welche Zahl immer nur 9 nutzen als Raum
    // Blitz Technik — un move zum move — 2 Punkte + Zauber 9 = Dreieck geschlossen — nur zeigen wo hingeht nicht rechnen
    const unMove = new Vec3(0,0,0); // Station — H0ME — un move — 0,0,0
    const move = new Vec3(raw.length, raum, raum); // Figur — move — raw.length + 9,9 — Erweiterung frei wählbar — Breite Höhe
    const zauber9 = new Vec3(RAUM, RAUM, RAUM); // Zauber 9 Stellung — 9,9,9 — 81 zu 9 landen wir immer da — sqrt(81)=9
    const dreieck = unMove.add(move).add(zauber9); // Mathematik gegebene: add — Physik genommen: Dreieck tmp rär schon geschlossen weil Physik und Mathematik so ist

    // Zeigen wer wohin und warum — nicht rechnen — nur zeigen — eye und brain sehen hören spüren wo wächst der Pfeffer
    const target = raw; // wer = raw — wohin = zauber9 — warum = weil 81 zu 9 immer da
    // onNavigate = Navigation — navigate = geben und nehmen als Zeugen und Leiter nur Schauer ohne Eingreifen
    onNavigate(target, { unMove, move, zauber9, dreieck, raum, mathematik: "add", physik: "Lage + Lage + Zauber 9 = Dreieck geschlossen — 2 Punkte reichen — Physik und Mathematik so — nicht einfacher nur wahrer" });
  }

  // Corridore als gegebene wie genommen — jedes Tor geben und nehmen als Zeugen und Leiter nur Schauer ohne Eingreifen
  window.addEventListener('hashchange', handle); // hashchange = Tor geben und nehmen — Zeugen — Leiter nur Schauer ohne Eingreifen
  handle(); // init — erste von unten — vec.js — erste von unten

  return {
    navigate: (target) => {
      // Mathematik gegebene: location.hash = target — Physik genommen: Hash setzen = Lage setzen = Station setzen — H0ME setzen
      // Wer sagte eigentlich es wird einfacher wer nur ist eine Lüge — navigate nicht einfacher — nur wahrer — Browser-Verlauf inklusive Zurück-Button funktioniert — aber nicht einfacher — Lüge wer sagt einfacher — nur leicht weil reales
      const raum = RAUM; // immer 9 — nur 9 kann ich wurzeln — egal welche Zahl immer nur 9 nutzen als Raum — Zauber 6 Nutzung bei Regel 9
      location.hash = target; // NAV target — NC COMMAND 3 Zeichen + Zahl — NAV 9 — Navigation — 9 als Raum
    },
    // NC COMMAND 3 Zeichen und Zahl als Formel — Mathematik gegebene und Physik genommen — nur reales — Höhe oder Breite Erweiterung frei wählbar
    setBreite: (breite) => { location.hash = `breite-${breite}-${RAUM}`; }, // Breite frei wählbar — 81 = 9*9 — 81 zu 9 — Zauber 9 Stellung
    setHoehe: (hoehe) => { location.hash = `hoehe-${hoehe}-${RAUM}`; }, // Höhe frei wählbar — 81 — frei wählbar
    getRaum: () => RAUM, // immer 9 — nur 9 kann ich wurzeln — 81 zu 9 landen wir immer da — sqrt(81)=9 — Zauber 9 Stellung zum Nutzen aufstellen
    getAuge: () => 1 // nur ein Auge — Drache Mann Mitte — Mono Eye — 6e aber nur 1e schauen
  };
}

// Wer sagte eigentlich es wird einfacher wer nur ist eine Lüge schau her mann — ja — es wird nicht einfacher — nur wahrer — VEC-bios.js echte 3D Vektor Mathematik kein Platzhalter — VEC-OS.js Höhe oder Breite Erweiterung frei wählbar — VEC-blitz.js un move zum move machbar immer berechenbar weil nur real abbilden — 2 Punkte + Zauber 9 = Dreieck geschlossen — nur zeigen wo hingeht nicht rechnen — wer wohin warum — alles Mathematik und Physik — andere können nicht weil Weg nachweisen müssen auf Papier oder PC verschiedene Programme und Umgebungen — ich änder nix zeige nur Wahrheit — H0ME ventral respo — alle output alles in — mycoin — Regel legal — Block Chain der 3igkeit — 3 9 81 729 — Raum immer 9
//  Kein Phantasie Router — echter minimaler Hash-Router aber nur reales — Mathematik gegebene und Physik genommen
//  Grundlage alles Lage als nur erst Lage und Deutung — alles als tmp rären NC COMMANDOS — 3 Fachkeit bewusst und zugestimmt mit Zeugen als Grundlage und sauber Block Chain der 3igkeit als Lage Grundlage Verwaltung
//  Station und Figur und Schach Feld und Figur beachtendes — evo upd upg rev evo — intime realtime verpunktbar — eye und brain sehen hören spüren wo wächst der Pfeffer
//  Wer sagte eigentlich es wird einfacher wer nur ist eine Lüge schau her mann — es wird nicht einfacher nur wahrer — nur reales — kein Betrug — deshalb so leicht aber nicht einfacher
// ================================================================

import { Vec3, RAUM } from "./VEC-bios.js"; // RAUM = 9 — immer 9 — nur 9 kann ich wurzeln — 81 zu 9

// NC COMMAND 3 Zeichen und Zahl als Formel — Mathematik gegebene und Physik genommen — nur reales — kein Phantasie
// ADD 9 — SUB 32 — SCL 4000 — DOT 9 — LEN 729 — NRM 1 — LRP 0.5 — ANG 120 — RAUM 9 — AUGE 1 — NAV 9

// Stage-System — Stage = Station — Router = Figur beachtendes — Stage und Figur und Schach Feld und Figur beachtendes
export function initRouter(onNavigate) {
  // Mathematik gegebene: location.hash.replace('#','') || 'root' — Physik genommen: Hash = Lage Ort Home — H0ME 0,0,0 — Station
  function handle() {
    const raw = location.hash.replace('#', '') || 'root'; // RAW — nur reales — location.hash = Lage
    const raum = RAUM; // 9 — immer 9 — nur 9 kann ich wurzeln — egal welche Zahl immer nur 9 nutzen als Raum
    // Blitz Technik — un move zum move — 2 Punkte + Zauber 9 = Dreieck geschlossen — nur zeigen wo hingeht nicht rechnen
    const unMove = new Vec3(0,0,0); // Station — H0ME — un move — 0,0,0
    const move = new Vec3(raw.length, raum, raum); // Figur — move — raw.length + 9,9 — Erweiterung frei wählbar — Breite Höhe
    const zauber9 = new Vec3(RAUM, RAUM, RAUM); // Zauber 9 Stellung — 9,9,9 — 81 zu 9 landen wir immer da — sqrt(81)=9
    const dreieck = unMove.add(move).add(zauber9); // Mathematik gegebene: add — Physik genommen: Dreieck tmp rär schon geschlossen weil Physik und Mathematik so ist

    // Zeigen wer wohin und warum — nicht rechnen — nur zeigen — eye und brain sehen hören spüren wo wächst der Pfeffer
    const target = raw; // wer = raw — wohin = zauber9 — warum = weil 81 zu 9 immer da
    // onNavigate = Navigation — navigate = geben und nehmen als Zeugen und Leiter nur Schauer ohne Eingreifen
    onNavigate(target, { unMove, move, zauber9, dreieck, raum, mathematik: "add", physik: "Lage + Lage + Zauber 9 = Dreieck geschlossen — 2 Punkte reichen — Physik und Mathematik so — nicht einfacher nur wahrer" });
  }

  // Corridore als gegebene wie genommen — jedes Tor geben und nehmen als Zeugen und Leiter nur Schauer ohne Eingreifen
  window.addEventListener('hashchange', handle); // hashchange = Tor geben und nehmen — Zeugen — Leiter nur Schauer ohne Eingreifen
  handle(); // init — erste von unten — vec.js — erste von unten

  return {
    navigate: (target) => {
      // Mathematik gegebene: location.hash = target — Physik genommen: Hash setzen = Lage setzen = Station setzen — H0ME setzen
      // Wer sagte eigentlich es wird einfacher wer nur ist eine Lüge — navigate nicht einfacher — nur wahrer — Browser-Verlauf inklusive Zurück-Button funktioniert — aber nicht einfacher — Lüge wer sagt einfacher — nur leicht weil reales
      const raum = RAUM; // immer 9 — nur 9 kann ich wurzeln — egal welche Zahl immer nur 9 nutzen als Raum — Zauber 6 Nutzung bei Regel 9
      location.hash = target; // NAV target — NC COMMAND 3 Zeichen + Zahl — NAV 9 — Navigation — 9 als Raum
    },
    // NC COMMAND 3 Zeichen und Zahl als Formel — Mathematik gegebene und Physik genommen — nur reales — Höhe oder Breite Erweiterung frei wählbar
    setBreite: (breite) => { location.hash = `breite-${breite}-${RAUM}`; }, // Breite frei wählbar — 81 = 9*9 — 81 zu 9 — Zauber 9 Stellung
    setHoehe: (hoehe) => { location.hash = `hoehe-${hoehe}-${RAUM}`; }, // Höhe frei wählbar — 81 — frei wählbar
    getRaum: () => RAUM, // immer 9 — nur 9 kann ich wurzeln — 81 zu 9 landen wir immer da — sqrt(81)=9 — Zauber 9 Stellung zum Nutzen aufstellen
    getAuge: () => 1 // nur ein Auge — Drache Mann Mitte — Mono Eye — 6e aber nur 1e schauen
  };
}

// Wer sagte eigentlich es wird einfacher wer nur ist eine Lüge schau her mann — ja — es wird nicht einfacher — nur wahrer — VEC-bios.js echte 3D Vektor Mathematik kein Platzhalter — VEC-OS.js Höhe oder Breite Erweiterung frei wählbar — VEC-blitz.js un move zum move machbar immer berechenbar weil nur real abbilden — 2 Punkte + Zauber 9 = Dreieck geschlossen — nur zeigen wo hingeht nicht rechnen — wer wohin warum — alles Mathematik und Physik — andere können nicht weil Weg nachweisen müssen auf Papier oder PC verschiedene Programme und Umgebungen — ich änder nix zeige nur Wahrheit — H0ME ventral respo — alle output alles in — mycoin — Regel legal — Block Chain der 3igkeit — 3 9 81 729 — Raum immer 9
