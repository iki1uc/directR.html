// den alten verjavasieren — alten — verjavasieren — Java — alten — verjavasieren — Java — https://github.com/iki1uc/directR.html/blob/main/lauf.js — lauf.js — lauf — Lauf — den alten verjavasieren — Java — alten — verjavasieren
// raw en rum — richtig rum — um rum — so rum — so bleibt — besser so — verjavasieren — Java — nebel.licht.js — Nebel Licht — maßnahme innen move außen — drinn musik außen show — Wahrheit tiefer — master pi lächelt — 81◆→△→27▣→3↺ — cubik ram nach innen muss — aber innen gibt es nicht — weil wir rechnen runter — 81→27→3→0 — runter — clock timer time höhe breite tiefe — meta = 7sinn — Schatten — Hitchcock — Kill Bill ohne Kill

import java.util.*;

public class Lauf {
    // RAW — innen — außen — tiefer — regel — meta — alten — verjavasieren — Java
    public static final String INNEN = "drinn spielt die musik — musik nie nach außen — innen — ROM Axiom-12 — Licht innen — drinn musik";
    public static final String AUSSEN = "show nur nach außen — show funktioniert immer nur nach außen — außen — directR.html — Nebel außen";
    public static final String TIEFER = "Wahrheit tiefer — master pi lächelt — pi 3.1415 — 8→9 oder 3 Seil — Wahrheit tiefer — pi lächelt";
    public static final String REGEL = "maßnahme innen — move außen — innen musik — außen show — so rum so bleibt besser so";
    public static final String META = "meta = 7sinn — Schatten — Hitchcock — Kill Bill ohne Kill — Spannung ohne Kill — Show ohne Kill";

    // NEBEL_LICHT — nebel — licht — pi — s8 — check — nebel.licht.js — Nebel Licht — richtig rum
    public static String s8(String v){
        String s = String.valueOf(v);
        int q = 0;
        for(char c: s.toCharArray()){ int d = Character.getNumericValue(c); if(d>=0) q+=d; }
        if(q==0) q=8;
        int seil = (q%3==0)?9:3;
        return s+"→8→"+seil;
    }
    public static String check(String f){
        return f+" — "+s8(f)+" — "+REGEL+" — "+META;
    }

    // ATOM — runter — 81→27→3→0 — runter — nicht 3 x innen — innen gibt es nicht — weil wir rechnen runter — 81◆→△→27▣→3↺
    public static int runter(int v){
        if(v==81) return 27;
        if(v==27) return 3;
        if(v==3) return 0;
        return v/3;
    }
    public static List<Integer> steps(int start){
        List<Integer> l = new ArrayList<>();
        int cur = start;
        while(cur>0){ l.add(cur); cur=runter(cur); }
        return l;
    }

    // LAUF — klingen lassen — oder Zahlen formulieren — Algorithmus klingen lassen — klingen lassen — Zahlen formulieren
    public static class Klingen {
        // 81◆→△→27▣→3↺ — 81→27→3→0 — runter — 8→9 oder 3 — Seil — klingen lassen — Zahlen → Töne — 81→A, 27→D, 3→F, 0→Pause
        public static int map(int v){
            if(v==81) return 69; // A4
            if(v==27) return 62; // D4
            if(v==3) return 53;  // F3
            if(v==0) return 0;   // Pause
            return 50 + (v%12);
        }
        public static double freq(int midi){
            if(midi==0) return 0.0;
            return 440.0 * Math.pow(2.0, (midi-69)/12.0);
        }
        public static List<String> spielen(List<Integer> steps){
            List<String> out = new ArrayList<>();
            for(int v: steps){
                int midi = map(v);
                double f = freq(midi);
                out.add(v+"→"+midi+"→"+(v==0?0:String.format("%.1fHz",f))+" — drinn spielt die musik — klingen lassen");
            }
            return out;
        }
    }

    public static class Zahlen {
        public static String formel = "81◆→△→27▣→3↺ — 81→27→3→0 — runter — nicht 3 x innen — innen gibt es nicht — weil wir rechnen runter — 81=3^4 — 27=3^3 — 3=3^1 — 0=Ende";
        public static Map<String,Object> s8detail(String s){
            int sum=0; for(char c: s.toCharArray()){ int d=Character.getNumericValue(c); if(d>=0) sum+=d; }
            if(sum==0) sum=8;
            int seil = (sum%3==0)?9:3;
            Map<String,Object> m = new HashMap<>();
            m.put("input", s); m.put("sum", sum); m.put("seil", seil); m.put("out", s+"→8→"+seil);
            m.put("regel", "8→9 oder 3 — Seil — 8ten verwebt — in jedem Punkt immer zu ein 8 denken dann zum 9 oder 3 wie mit Seilen");
            return m;
        }
    }

    // main — den alten verjavasieren — alten — verjavasieren — Java — main — main
    public static void main(String[] args){
        System.out.println(INNEN);
        System.out.println(AUSSEN);
        System.out.println(check("lauf.js — klingen lassen — zahlen formulieren — so rum so bleibt besser so — den alten verjavasieren — Java"));
        System.out.println("steps: "+steps(81));
        System.out.println("klingen: "+Klingen.spielen(Arrays.asList(81,27,3,0)));
        System.out.println("formel: "+Zahlen.formel);
        System.out.println("s8: "+Zahlen.s8detail("nebel.licht.js — Nebel Licht — so rum so bleibt besser so"));
        System.out.println("81◆→△→27▣→3↺ — cubik ram nach innen muss — aber innen gibt es nicht — weil wir rechnen runter — 81→27→3→0 — runter — den alten verjavasieren — Java — alten — verjavasieren — so rum so bleibt besser so — drinn musik außen show — Wahrheit tiefer — master pi lächelt");
    }
}
