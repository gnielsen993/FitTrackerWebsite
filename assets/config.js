// Site-wide configuration. Single source of truth.
// Edit here; pages read these values at runtime.

window.SITE_CONFIG = Object.freeze({
  appName: "FitnessTracker",
  appVersion: "1.0",
  appStoreUrl: "#", // TODO: replace once approved
  supportEmail: "support@lauterstar.com",
  copyrightHolder: "Lauterstar",
  copyrightYear: 2026,
  bundleId: "com.lauterstar.fitnesstracker",
  ecosystem: ["DesignKit", "HabitTracker", "FitnessTracker", "PantryPlanner"]
});

document.addEventListener("DOMContentLoaded", () => {
  const cfg = window.SITE_CONFIG;
  document.querySelectorAll("[data-cfg]").forEach((el) => {
    const key = el.getAttribute("data-cfg");
    const val = cfg[key];
    if (val == null) return;
    if (el.tagName === "A" && (key.endsWith("Url") || key === "supportEmail")) {
      el.href = key === "supportEmail" ? `mailto:${val}` : val;
      if (!el.textContent.trim()) el.textContent = val;
    } else {
      el.textContent = val;
    }
  });
});
