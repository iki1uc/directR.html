setBreite(breite) - Breite frei wählbar - X = frei - Y,Z = 9 - z.B. breite 81 = 9*9 - 81 wurzeln zu 9 - Regel 9
setHoehe(hoehe) - Höhe frei wählbar - Y = frei - X,Z = 9 - z.B. hoehe 81
setTiefe(tiefe) - Tiefe frei wählbar - Z = frei
setAlle(breite,hoehe,tiefe) - alle frei wählbar - 6e 6d - 6 Augen 6 Dimensionen aber nur ein Auge schaut - 6 in 9 Raum - Zauber 6 bei Regel 9 - z.B. 6,6,9 = 6e 6d aber Raum immer 9

const osBreite = new VEC_OS({ breite: 81, freiWaehlbar: "breite" }); // Breite 81 - 9 kann ich wurzeln
const osHoehe = new VEC_OS({ hoehe: 81, freiWaehlbar: "hoehe" }); // Höhe 81 - frei wählbar Höhe
const osAlle = new VEC_OS({ breite: 6, hoehe: 6, tiefe: 9, freiWaehlbar: "alle" }); // 6e 6d aber Raum immer 9 - Zauber 6 bei Regel 9
