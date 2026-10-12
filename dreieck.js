// ================================================================
// modules/dreieck/dreieck.js (Gruppe 5: Dreieck-Screen / Körper-
// Geometrie / 3-Spiegel-120° -> 9-golden kompatibel)
// CSS + NC, Reporter zählt, Agent verbindet, Rahmen hält
// ================================================================
import { SCREEN_BASE_ANGLES } from './NC_figur.js'; // [0, 120, 240]
export { SCREEN_BASE_ANGLES };

const PHI = 1.6180339887;

export function screenTransform({ baseAngle, extraRotY = 0, rotX = 0, radius = 150 }) {
  const totalAngle = baseAngle + extraRotY;
  return `rotateY(${totalAngle}deg) translateZ(${radius}px) rotateX(${rotX}deg)`;
}

export function screenNC({ baseAngle, extraRotY = 0, rotX = 0, radius = 150, feed = 1200, id = 0, locked = false }) {
  const totalAngle = baseAngle + extraRotY;
  return [
    `; --- SCREEN ${id} : BASE ${baseAngle}° + ${extraRotY}° = ${totalAngle}° ---`,
    `G90 G54 ; absolut, Nullpunkt Körper-Mitte [hier]`,
    `G0 A${totalAngle.toFixed(3)} B${rotX.toFixed(3)} ; A=total, B=rotX`,
    `G1 Z${radius.toFixed(3)} F${feed} ; radius = translateZ`,
    `; SCREEN ${id} LOCKED=${locked} ; ghost nur Referenz`,
    locked? `M01 ; optional stop wenn locked` : `; M00 deaktiviert für 81/729 Dauerlauf`,
  ].join('\n');
}

export function createScreenStates(radius = 150) {
  const states = {};
  SCREEN_BASE_ANGLES.forEach((base, i) => {
    states[i] = {
      base,
      rotY: 0,
      rotX: 0,
      radius,
      locked: false,
      css: screenTransform({ baseAngle: base, radius }),
      nc: screenNC({ baseAngle: base, radius, id: i, locked: false })
    };
  });
  return states;
}

// NEU: golden 9 Erweiterung — 5/3/1 nach phi
export function createGolden9States(radius = 150) {
  const goldenOffsets = [0, 360/PHI/9*5, 360/PHI/9*8]; // 5 / 3 / 1 Verteilung
  return SCREEN_BASE_ANGLES.flatMap((base, i) =>
    goldenOffsets.map((gOff, j) => {
      const id = i*3 + j; // 0..8 = 9 Slots
      return {
        id,
        base,
        extraRotY: gOff,
        css: screenTransform({ baseAngle: base, extraRotY: gOff, radius }),
        nc: screenNC({ baseAngle: base, extraRotY: gOff, radius, id })
      };
    })
  );
}

export function createNCProgram({ radius = 150, extraRotY = 0, rotX = 0 } = {}) {
  return SCREEN_BASE_ANGLES.map((base, i) =>
    screenNC({ baseAngle: base, extraRotY, rotX, radius, id: i })
  ).join('\n\n');
}
