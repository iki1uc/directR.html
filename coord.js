export function rowColToAxis(row, col, spacing = 26, cols = 9, rows = 9) {
  return {
    x: (col - (cols - 1) / 2) * spacing,
    z: (row - (rows - 1) / 2) * spacing,
  };
}
