// paralilisierter möglichen rahmen — kann mann
export function parallelRahmen(row, col, cores = 6) {
  const {x,z} = rowColToAxis(row, col, 26, 9, 9) // 81 Felder
  const core = (row * 9 + col) % cores // 81 Felder auf 6 Kerne verteilen
  return { x, z, core, masse: 1.0 } // Masse ist Masse, Kern trägt
}
// 81 Felder / 6 Kerne = 13.5 Felder pro Kern — jeder trägt
// Kosequence: Core 0: Felder 0,6,12... Core 5: Felder 5,11,17...
