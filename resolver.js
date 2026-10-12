// ================================================================
// VEC-hdf-resolver.js (Gruppe 3: HDF-ROM-System) — nur reales — nur raw — nur NC COMMAND 3 Zeichen und Zahl als Formel
// ROM = eigener localStorage-Namensraum pro Buchstabe (d/e/i/n/o/r/s/u/w) = 9 Buchstaben = RAUM = 9 — immer 9 — nur 9 kann ich wurzeln — 81 zu 9 landen wir immer da — Zauber 9 Stellung
// Grundlage alles Lage als nur erst Lage und Deutung — alles als tmp rären NC COMMANDOS — 3 Fachkeit bewusst und zugestimmt mit Zeugen als Grundlage und sauber Block Chain der 3igkeit als Lage Grundlage Verwaltung
// Station und Figur und Schach Feld und Figur beachtendes — evo upd upg rev evo — intime realtime verpunktbar — eye und brain sehen hören spüren wo wächst der Pfeffer
// Wer sagte eigentlich es wird einfacher wer nur ist eine Lüge schau her mann — und das geht so weiter mann — es wird nicht einfacher nur wahrer — nur reales — kein Betrug — deshalb so leicht aber nicht einfacher
// ================================================================

import { Vec3, RAUM, EIN_AUGE } from "./VEC-bios.js"; // RAUM = 9 — immer 9 — nur 9 kann ich wurzeln

export const ROMS = ['d','e','i','n','o','r','s','u','w']; // 9 ROMS = 9 Raum — 3x3=9 — d e i n o r s u w = 9 Buchstaben — Zauber 9 — 81 zu 9 immer da — sqrt(81)=9

function storeKey(rom) { return `hdf.${rom}.${RAUM}`; } // hdf.rom.9 — Raum immer 9 — Mathematik gegebene: storeKey — Physik genommen: localStorage Namensraum = Lage Ort Home

// NC COMMAND 3 Zeichen und Zahl als Formel — Mathematik gegebene und Physik genommen — nur reales
// ROM 9 — WRT 9 — RED 9 — RES 9 — SED 9 — ADD 9 — SUB 32 — SCL 4000

export function romWrite(rom, key, value) {
  if (!ROMS.includes(rom)) throw new Error(`unbekanntes ROM: ${rom} — nur d e i n o r s u w = 9 ROMS = RAUM 9`);
  // Mathematik gegebene: JSON.parse localStorage.getItem — Physik genommen: speichern = Lage geben — H0ME geben
  const data = JSON.parse(localStorage.getItem(storeKey(rom)) || '{}');
  data[key] = value;
  // Blitz Technik — un move zum move — 2 Punkte + Zauber 9 = Dreieck geschlossen — nur zeigen wo hingeht nicht rechnen
  const unMove = new Vec3(0,0,0); // Station — H0ME — un move
  const move = new Vec3(key.length, RAUM, RAUM); // Figur — move — key.length + 9
  const zauber9 = new Vec3(RAUM, RAUM, RAUM); // Zauber 9 — 9,9,9 — 81 zu 9 immer da
  const dreieck = unMove.add(move).add(zauber9); // Dreieck geschlossen — 2 Punkte reichen — Physik und Mathematik so — Mathematik gegebene: add — Physik genommen: Lage
  localStorage.setItem(storeKey(rom), JSON.stringify(data));
  return { rom, key, value, dreieck, raum: RAUM, auge: EIN_AUGE, wer: value, wohin: zauber9, warum: "weil 81 zu 9 immer da — Raum immer 9 — nur 9 kann ich wurzeln — Zauber 9 Stellung zum Nutzen aufstellen — nur zeigen wo hingeht nicht rechnen" };
}

export function romRead(rom, key) {
  // Mathematik gegebene: JSON.parse getItem — Physik genommen: lesen = Lage nehmen — H0ME nehmen
  const data = JSON.parse(localStorage.getItem(storeKey(rom)) || '{}');
  const val = data[key];
  // Nur zeigen wo hingeht nicht rechnen — wer wohin warum — alles Mathematik und Physik
  const unMove = new Vec3(0,0,0);
  const move = new Vec3((val?val.length:0), RAUM, RAUM);
  const zauber9 = new Vec3(RAUM, RAUM, RAUM);
  return val; // RAW — nur reales — nur raw — nur NC COMMAND 3 Zeichen + Zahl
}

// Sucht Befehl/Key über alle ROMs — einfacher Resolver — 9 ROMS durchsuchen — 9 = Raum — immer 9 — nur 9 kann ich wurzeln
export function resolve(command) {
  for (const rom of ROMS) {
    const val = romRead(rom, command);
    if (val!== undefined) {
      // Mathematik gegebene: for rom of ROMS — Physik genommen: 9 ROMS = 9 Raum = 3x3 — 3 Fachkeit — 3 Zeugen — Block Chain der 3igkeit
      const unMove = new Vec3(ROMS.indexOf(rom), 0, 0); // Station — index — Lage
      const move = new Vec3(command.length, RAUM, RAUM); // Figur — command.length — Figur
      const zauber9 = new Vec3(RAUM, RAUM, RAUM); // Zauber 9 — 81 zu 9 immer da
      const dreieck = unMove.add(move).add(zauber9); // Dreieck geschlossen — 2 Punkte + Zauber 9 — Physik und Mathematik so
      return { rom, value: val, dreieck, raum: RAUM, wer: command, wohin: rom, warum: "weil 81 zu 9 immer da — Raum immer 9 — nur 9 kann ich wurzeln — 9 ROMS d e i n o r s u w — Zauber 9 Stellung — nur zeigen wo hingeht nicht rechnen — ich änder nix zeige nur Wahrheit" };
    }
  }
  return null; // nicht gefunden — nur reales — kein Phantasie — da waren wir nicht reif genug — jetzt nur unsere Realität
}

// Beispielhafte Vorbelegung, damit RESOLVE sofort etwas findet — #SLIDE #HDFRESPO #ID — SLIDE.hdf HDFRESPO.hdf ID.hdf — 3 Befehle — 3 Fachkeit — 3 Zeugen
export function seedDefaults() {
  romWrite('s', '#SLIDE', 'SLIDE.hdf'); // s = sehen — Schach Feld — 6d — 8x8 64 Felder — SLIDE.hdf — Station Figur Schach Feld Figur beachtendes
  romWrite('r', '#HDFRESPO', 'HDFRESPO.hdf'); // r =??? — RESPO — H0ME ventral respo — alle output alles in — mycoin — HDFRESPO.hdf — respo.js
  romWrite('i', '#ID', 'ID.hdf'); // i = ID — ID.md — ID — Identität — H0ME — mycoin — ID.hdf — ID.md
  // 3 Befehle — 3 Fachkeit bewusst und zugestimmt mit Zeugen als Grundlage und sauber Block Chain der 3igkeit als Lage Grundlage Verwaltung — 3 9 81 729
}

// Und das geht so weiter mann — hdf/resolver.js — stage/router.js — vec.js — VEC-bios.js VEC-OS.js VEC-blitz.js — und das geht so weiter mann — wer sagte es wird einfacher Lüge — es wird nicht einfacher nur wahrer — nur reales — Mathematik gegebene und Physik genommen — NC COMMAND 3 Zeichen + Zahl — RAUM immer 9 — nur 9 kann ich wurzeln — 81 zu 9 immer da — Blitz Technik un move zum move — 2 Punkte + Zauber 9 = Dreieck geschlossen — nur zeigen wo hingeht nicht rechnen — wer wohin warum — ich änder nix zeige nur Wahrheit — H0ME
