// Tweaks panel — palette + typography pairing
const PALETTES = {
  forest: {
    label: "Forest & Slate",
    swatches: ["#1e2c22", "#56684f", "#4d6373", "#f3ede1"],
    vars: {
      "--cream": "#f3ede1",
      "--cream-soft": "#f7f2e6",
      "--soft-white": "#fbf8f1",
      "--forest": "#1e2c22",
      "--forest-deep": "#131e17",
      "--moss": "#56684f",
      "--moss-deep": "#41513c",
      "--slate": "#4d6373",
      "--rust": "#8a4f3c",
      "--rule": "#c9c1b1",
      "--rule-soft": "#ddd5c4"
    }
  },
  river: {
    label: "River & Pine",
    swatches: ["#1c2a30", "#3f5d6b", "#4f6b58", "#eef0e9"],
    vars: {
      "--cream": "#eef0e9",
      "--cream-soft": "#f3f4ec",
      "--soft-white": "#f7f8f1",
      "--forest": "#1c2a30",
      "--forest-deep": "#121c21",
      "--moss": "#3f5d6b",
      "--moss-deep": "#2e4854",
      "--slate": "#4f6b58",
      "--rust": "#7a604a",
      "--rule": "#c4ccc2",
      "--rule-soft": "#d8ded6"
    }
  },
  meadow: {
    label: "Meadow & Stone",
    swatches: ["#243528", "#5d7a52", "#5b7081", "#f1ece0"],
    vars: {
      "--cream": "#f1ece0",
      "--cream-soft": "#f6f1e5",
      "--soft-white": "#fbf6ea",
      "--forest": "#243528",
      "--forest-deep": "#162018",
      "--moss": "#5d7a52",
      "--moss-deep": "#46603e",
      "--slate": "#5b7081",
      "--rust": "#8a5a44",
      "--rule": "#cbc2ad",
      "--rule-soft": "#ded4be"
    }
  },
  dusk: {
    label: "Dusk Water",
    swatches: ["#1a2832", "#3a5566", "#566c5e", "#ece8db"],
    vars: {
      "--cream": "#ece8db",
      "--cream-soft": "#f1ede0",
      "--soft-white": "#f6f3e8",
      "--forest": "#1a2832",
      "--forest-deep": "#101a22",
      "--moss": "#3a5566",
      "--moss-deep": "#2a4150",
      "--slate": "#566c5e",
      "--rust": "#7e5a48",
      "--rule": "#bfb8a6",
      "--rule-soft": "#d3ccba"
    }
  }
};

const TYPE_PAIRS = {
  fraunces_dm: {
    label: "Fraunces · DM Sans",
    display: "'Fraunces', Georgia, serif",
    body: "'DM Sans', system-ui, sans-serif"
  },
  cormorant_inter: {
    label: "Cormorant · Inter",
    display: "'Cormorant Garamond', Georgia, serif",
    body: "'Inter', system-ui, sans-serif"
  },
  worksans_dm: {
    label: "Work Sans · DM Sans",
    display: "'Work Sans', system-ui, sans-serif",
    body: "'DM Sans', system-ui, sans-serif"
  },
  inter_inter: {
    label: "Inter · Inter",
    display: "'Inter', system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif"
  }
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "forest",
  "typePair": "fraunces_dm"
}/*EDITMODE-END*/;

function applyTweaks({ palette, typePair }) {
  const root = document.documentElement;
  const p = PALETTES[palette] || PALETTES.forest;
  Object.entries(p.vars).forEach(([k, v]) => root.style.setProperty(k, v));
  const t = TYPE_PAIRS[typePair] || TYPE_PAIRS.fraunces_dm;
  root.style.setProperty("--display", t.display);
  root.style.setProperty("--body", t.body);
}

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => { applyTweaks(tweaks); }, [tweaks.palette, tweaks.typePair]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Palette">
        <div style={{ display: "grid", gap: 8 }}>
          {Object.entries(PALETTES).map(([key, p]) => (
            <button
              key={key}
              onClick={() => setTweak("palette", key)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 10px",
                background: tweaks.palette === key ? "rgba(0,0,0,0.06)" : "transparent",
                border: tweaks.palette === key ? "1px solid rgba(0,0,0,0.18)" : "1px solid rgba(0,0,0,0.08)",
                borderRadius: 6,
                cursor: "pointer",
                font: "inherit",
                textAlign: "left",
                width: "100%"
              }}
            >
              <span style={{ display: "flex", borderRadius: 3, overflow: "hidden", border: "1px solid rgba(0,0,0,0.1)" }}>
                {p.swatches.map((c, i) => (
                  <span key={i} style={{ width: 16, height: 22, background: c, display: "block" }} />
                ))}
              </span>
              <span style={{ fontSize: 13 }}>{p.label}</span>
            </button>
          ))}
        </div>
      </TweakSection>

      <TweakSection title="Typography">
        <TweakRadio
          value={tweaks.typePair}
          onChange={(v) => setTweak("typePair", v)}
          options={Object.entries(TYPE_PAIRS).map(([k, v]) => ({ value: k, label: v.label }))}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.createRoot(root).render(<App />);

// Apply on initial load even before panel is opened
applyTweaks(TWEAK_DEFAULTS);
