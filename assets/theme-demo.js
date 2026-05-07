// DesignKit live theme switcher.
// Curated slice of the catalog - leads with the dramatic ones (different bg + surface + text,
// not just accent swaps). Hex values mirror Sources/DesignKit/Theme/PresetTheme.swift.

const PRESETS = {
  vapor: {
    name: "Vapor", category: "Loud", preferred: "dark",
    light: { bg: "#FDF2FF", surface: "#FFFFFF", accent: "#A21CAF", text: "#4A044E" },
    dark:  { bg: "#1A0224", surface: "#2D0A3A", accent: "#E879F9", text: "#FAE8FF" }
  },
  solar: {
    name: "Solar", category: "Bright", preferred: "light",
    light: { bg: "#FFFBEB", surface: "#FFFFFF", accent: "#EA580C", text: "#431407" },
    dark:  { bg: "#1C1208", surface: "#2A1B0C", accent: "#FB923C", text: "#FFEDD5" }
  },
  gruvbox: {
    name: "Gruvbox", category: "Moody", preferred: "dark",
    light: { bg: "#FBF1C7", surface: "#F2E5BC", accent: "#D65D0E", text: "#3C3836" },
    dark:  { bg: "#282828", surface: "#32302F", accent: "#FE8019", text: "#EBDBB2" }
  },
  sakura: {
    name: "Sakura", category: "Sweet", preferred: "light",
    light: { bg: "#FFF5F7", surface: "#FFFAFB", accent: "#D6587E", text: "#4A1023" },
    dark:  { bg: "#1C1015", surface: "#271620", accent: "#F9A8B8", text: "#FFE6EC" }
  },
  dracula: {
    name: "Dracula", category: "Moody", preferred: "dark",
    light: { bg: "#F5F3FB", surface: "#FFFFFF", accent: "#6B3FA0", text: "#282A36" },
    dark:  { bg: "#282A36", surface: "#343746", accent: "#BD93F9", text: "#F8F8F2" }
  },
  nord: {
    name: "Nord", category: "Moody", preferred: "dark",
    light: { bg: "#ECEFF4", surface: "#E5E9F0", accent: "#5E81AC", text: "#2E3440" },
    dark:  { bg: "#2E3440", surface: "#3B4252", accent: "#88C0D0", text: "#ECEFF4" }
  },
  cream: {
    name: "Cream", category: "Soft", preferred: "light",
    light: { bg: "#F4ECD8", surface: "#FAF3E0", accent: "#8C5A2B", text: "#2B1D0E" },
    dark:  { bg: "#1E1A14", surface: "#2A241B", accent: "#D9A771", text: "#F4ECD8" }
  },
  forest: {
    name: "Forest", category: "Classic", preferred: "light",
    light: { bg: "#F8FAFC", surface: "#FFFFFF", accent: "#0F766E", text: "#0F172A" },
    dark:  { bg: "#090909", surface: "#131313", accent: "#14B8A6", text: "#F9FAFB" }
  }
};

const state = { preset: "vapor", mode: "light" };

function applyTheme() {
  const preset = PRESETS[state.preset];
  const tokens = preset[state.mode];
  const demo = document.querySelector(".dk-demo");
  if (!demo) return;
  demo.style.setProperty("--dk-bg", tokens.bg);
  demo.style.setProperty("--dk-surface", tokens.surface);
  demo.style.setProperty("--dk-accent", tokens.accent);
  demo.style.setProperty("--dk-text", tokens.text);
  demo.style.setProperty(
    "--dk-rule",
    state.mode === "dark" ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.08)"
  );
  document.querySelectorAll(".dk-swatch").forEach((b) => {
    b.setAttribute("aria-pressed", b.dataset.preset === state.preset ? "true" : "false");
  });
  document.querySelectorAll(".dk-mode button").forEach((b) => {
    b.setAttribute("aria-pressed", b.dataset.mode === state.mode ? "true" : "false");
  });
  const setToken = (id, hex) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.querySelector(".dk-token-hex").textContent = hex.toUpperCase();
    el.querySelector(".dk-token-chip").style.background = hex;
  };
  setToken("token-bg", tokens.bg);
  setToken("token-surface", tokens.surface);
  setToken("token-accent", tokens.accent);
  setToken("token-text", tokens.text);
  const meta = document.getElementById("dk-current");
  if (meta) {
    meta.textContent = `${preset.name} · ${preset.category} · ${state.mode === "dark" ? "Dark" : "Light"}`;
  }
}

function buildSwatches() {
  const host = document.querySelector(".dk-swatches");
  if (!host) return;
  Object.entries(PRESETS).forEach(([id, p]) => {
    const btn = document.createElement("button");
    btn.className = "dk-swatch";
    btn.type = "button";
    btn.dataset.preset = id;
    btn.setAttribute("aria-pressed", "false");
    const dot = document.createElement("span");
    dot.className = "dk-swatch-dot";
    dot.style.background = p.light.accent;
    btn.appendChild(dot);
    const label = document.createElement("span");
    label.textContent = p.name;
    btn.appendChild(label);
    btn.addEventListener("click", () => {
      state.preset = id;
      applyTheme();
    });
    host.appendChild(btn);
  });
}

function wireMode() {
  document.querySelectorAll(".dk-mode button").forEach((b) => {
    b.addEventListener("click", () => {
      state.mode = b.dataset.mode;
      applyTheme();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildSwatches();
  wireMode();
  applyTheme();
});
