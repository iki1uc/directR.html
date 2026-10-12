// ================================================================
//  axiom.map.js — Gruppe 7: Module-Karte — bereinigt — keine Störung
//  Reine Datentabelle: welches Nav-Ziel gehört zu welchem Label/
//  welcher Beschreibung. Der Router (stage/router.js) liest das,
//  um Status-Texte und (falls vorhanden) Zieldateien anzuzeigen.
//  STATION v81 / BEST-SCORE-SYSTEM / ram.sys — 3er bis 9er
// ================================================================

export const MODULES = {
  // BRAIN — Axiome — ghost reference only — kein Raum, nur errechnet — file null = ok
  root:   { label: 'ROOT',   file: null,           desc: 'BRAIN-Startzustand' },
  core:   { label: 'CORE',   file: null,           desc: 'Kernel · Axiom · Vec · NC-Suite' },
  hdf:    { label: 'HDF',    file: null,           desc: 'ROM-Speicher d/e/i/n/o/r/s/u/w' },

  // STAGE — eine Ebene über BRAIN — MAINBOARD — 9.ORT — 81◆ — BOERSE DOM EOS EVO MARKT RESPO TOOL48 — alle GROSS — case einheitlich — keine Störung
  boerse: { label: 'BOERSE', file: '../BOERSE/index.html', desc: 'Börsen-Daten-Stage' },
  dom:    { label: 'DOM',    file: '../DOM/index.html',    desc: 'Dom-Struktur / NC-Raum' },
  eos:    { label: 'EOS',    file: '../EOS/index.html',    desc: 'EOS-Modul' },
  evo:    { label: 'EVO',    file: '../EVO/index.html',    desc: 'Evolution / Axiom-Map' },
  markt:  { label: 'MARKT',  file: '../MARKT/index.html',  desc: 'Marktsystem' },
  respo:  { label: 'RESPO',  file: '../RESPO/index.html',  desc: '9×9-Respo-Mesh, 81 Slots — BEST?MATRIX — ram.sys 81◆' }, // respo → RESPO — GROSS — einheitlich — 81 Slots
  tool48: { label: 'TOOL48', file: '../TOOL48/index.html', desc: 'Werkzeug 48 — BEST?AXIS — 6 Arme Würfel' }, // tool48 → TOOL48 — GROSS

  // AXIS — Achsen — BREITE TIEFE HOCH — X Z Y — file null = Axiom — ghost — ok
  breite: { label: 'BREITE', file: null,           desc: 'Achse Breite (X) — BEST?AXIS' },
  tiefe:  { label: 'TIEFE',  file: null,           desc: 'Achse Tiefe (Z) — BEST?LAGE' },
  hoch:   { label: 'HOCH',   file: null,           desc: 'Achse Höhe (Y) — BEST?TMP' },
};
