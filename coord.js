// directR.html / coord.js
// 81 Nutzraum 9x9 + 6 Arme gestuft, kein Reib in Mitte [hier]

export function rowColToAxis(row, col, spacing = 26, cols = 9, rows = 9) {
  return {
    x: (col - (cols - 1) / 2) * spacing,
    z: (row - (rows - 1) / 2) * spacing,
  };
}

// gestufter Radius - Notwendigkeit = 150 Träger nach 3.eck
export function armRadius(arm, Notwendigkeit = 5) {
  // arm 0..5, 5 = Notwendigkeit
  return arm === Notwendigkeit? 150 : 95 + (arm * 5);
  // 95,100,105,110,115,150 - kein Reib in Mitte
}

export function armTransform({ arm, baseAngle, extraRotY = 0, rotX = 0 }) {
  const radius = armRadius(arm);
  const totalAngle = baseAngle + extraRotY;
  return {
    css: `rotateY(${totalAngle}deg) translateZ(${radius}px) rotateX(${rotX}deg)`,
    radius,
    totalAngle
  };
}

// 81 Slots -> Axis für 729 berechenbar
export function create81Axis(spacing = 26) {
  const slots = [];
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const { x, z } = rowColToAxis(row, col, spacing);
      const id = row * 9 + col; // 0..80, Mitte 40/41 je nach 0-index
      slots.push({ id, row, col, x, z, y: 0 });
    }
  }
  return slots;
}

// Test: kannst du so
// import { rowColToAxis, armRadius } from './coord.js'
// rowColToAxis(4,4) -> {x:0, z:0} Mitte [hier]
// armRadius(5) -> 150 Notwendigkeit
// armRadius(0) -> 95 kleinster
