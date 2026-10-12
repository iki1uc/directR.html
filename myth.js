// GATE.js — virtuell nutzbarer Übergang
// kein Raum, nur errechnet, Cache zu Cache Brücke

export const GATE = {
  // Trans Warb Start / Ankunft Plattform — virtuell, errechnet
  platforms: {
    start: { type: "virtual", space: false, calc: true, cache: "CACHE_A" },
    arrival: { type: "virtual", space: false, calc: true, cache: "CACHE_B" }
  },

  // Brücke Cache -> Cache
  bridge(from = "CACHE_A", to = "CACHE_B") {
    // kein G1 Z in echten Raum, nur Ghost Referenz
    const ghost = { from, to, holds: "reference only", content: null };
    const gate = {
      state: this.torStatus(from, to), // rot/grün/gelb
      virtual: true,
      space: false,
      transition: `G0 A${from} B${to} // nur errechnet, kein Reib`,
      cacheBridge: ghost,
      usable: true // virtuell nutzbar als Start oder Ankunft
    };
    return gate;
  },

  torStatus(a, b) {
    // rot = block, grün = offen, gelb = CACHE
    if (a === b) return { color: "yellow", code: "CACHE", note: "ghost hält nur Referenz" };
    return { color: "green", code: "FLOW", note: "virtuell nutzbar" };
  },

  // Trans Warp
  transWarb(platform = "start") {
    const p = this.platforms[platform];
    return {
     ...p,
      gate: this.bridge(p.cache, platform === "start"? "CACHE_B" : "CACHE_A"),
      note: "Plattform virtuell, kein tatsächlicher Raum, nur errechnet — als Brücke nutzbar"
    };
  }
};

// Nutzung:
// GATE.transWarb("start") -> Start Plattform virtuell, Cache_A -> Cache_B Brücke grün, nutzbar
// GATE.transWarb("arrival") -> Ankunft Plattform virtuell
// GATE.bridge("CACHE_A","CACHE_A") -> gelb, ghost only
