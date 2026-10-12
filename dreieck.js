// ================================================================
// modules/dreieck/dreieck.js (Gruppe 5: Dreieck-Screen / Körper-
// Geometrie / 3-Spiegel-120°)
// Liefert CSS-Transform + reale NC-Commands für ein Screen
// Basiswinkel 0/120/240 plus Zusatzrotation/Radius
// Deutender Nutzen: Screen = Werkstück / Körper im Raum
// ================================================================
import { SCREEN_BASE_ANGLES } from './NC_figur.js';
export { SCREEN_BASE_ANGLES };

export function screenTransform({ baseAngle, extraRotY = 0, rotX = 0, radius = 150 }) {
  const totalAngle = baseAngle + extraRotY;
  return `rotateY(${totalAngle}deg) translateZ(${radius}px) rotateX(${rotX}deg)`;
}

// NEU: reale NC-Commands — umdeutender
export function screenNC({ baseAngle, extraRotY = 0, rotX = 0, radius = 150, feed = 1200, id = 0 }) {
  const totalAngle = baseAngle + extraRotY;
  // A = Drehachse Tisch (0/120/240 + extra), B = Kippachse, R = Radius = Z-Zustellung
  return [
    `; --- SCREEN ${id} : BASE ${baseAngle}° + ${extraRotY}° = ${totalAngle}° ---`,
    `G90 G54 ; absolut, Nullpunkt Körper-Mitte`,
    `G0 A${totalAngle.toFixed(3)} B${rotX.toFixed(3)} ; drehen: A=totalAngle, B=rotX`,
    `G1 Z${radius.toFixed(3)} F${feed} ; radius = translateZ -> Zustellung`,
    `; SCREEN ${id} LOCKED=${false} ; Position erreicht`,
    `M00 ; *Klick und ZaM* - check`,
  ].join('\n');
}

export function createScreenStates(radius = 150) {
  const states = {};
  SCREEN_BASE_ANGLES.forEach((base, i) => {
    states[i] = { base, rotY: 0, rotX: 0, radius, locked: false, css: '', nc: '' };
    states[i].css = screenTransform({ baseAngle: base, radius });
    states[i].nc = screenNC({ baseAngle: base, radius, id: i });
  });
  return states;
}

// Helper: alle 3 Screens als komplettes NC-Programm
export function createNCProgram({ radius = 150, extraRotY = 0, rotX = 0 } = {}) {
  return SCREEN_BASE_ANGLES.map((base, i) =>
    screenNC({ baseAngle: base, extraRotY, rotX, radius, id: i })
  ).join('\n\n');
}
