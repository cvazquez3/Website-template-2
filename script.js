// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Cute helmet boop
const boopBtn = document.getElementById("boopBtn");
const boopMsg = document.getElementById("boopMsg");

const boops = [
  "Boop received. Zarn giggled in Martian.",
  "Helmet integrity: ✅ 100%. Cuteness: ✅ MAX.",
  "Mission Control confirms: you are officially a friend.",
  "A tiny 'blorp!' echoes across the crater.",
  "Zarn waved back. (Probably.)"
];

boopBtn?.addEventListener("click", () => {
  const msg = boops[Math.floor(Math.random() * boops.length)];
  boopMsg.textContent = msg;

  // tiny confetti-ish effect without libraries
  boopBtn.animate(
    [{ transform: "translateY(0)" }, { transform: "translateY(-2px)" }, { transform: "translateY(0)" }],
    { duration: 240, iterations: 1 }
  );
});

// Random facts
const facts = [
  { e: "🪐", t: "Did you know?", m: "On Mars, Zarn’s hops are basically slow-motion superhero jumps." },
  { e: "🍼", t: "Snack report:", m: "Space mush purée is the top-rated treat in the whole colony." },
  { e: "🌬️", t: "Tiny science:", m: "Mars air is thin, so burps travel with extra dignity." },
  { e: "🪨", t: "Collector alert:", m: "Zarn has a growing moon-rock stash (and guards it fiercely)." },
  { e: "🚀", t: "Zoomies:", m: "Rover toy speed is capped by interplanetary cuteness regulations." },
  { e: "✨", t: "Glow time:", m: "Bedtime stories are read under a nebula night-light." }
];

const factBtn = document.getElementById("factBtn");
const factEmoji = document.getElementById("factEmoji");
const factTitle = document.getElementById("factTitle");
const factText = document.getElementById("factText");

function setFact() {
  const f = facts[Math.floor(Math.random() * facts.length)];
  factEmoji.textContent = f.e;
  factTitle.textContent = f.t;
  factText.textContent = f.m;
}
factBtn?.addEventListener("click", setFact);

// Demo form (no backend)
const form = document.getElementById("signalForm");
const formMsg = document.getElementById("formMsg");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  formMsg.textContent = "Signal sent! (Demo) — Hook this to Formspree to receive emails.";
  form.reset();
});

// Optional: show a "Sol" that increments daily from an arbitrary anchor
const solEl = document.getElementById("sol");
if (solEl) {
  const anchor = new Date("2026-01-01T00:00:00Z").getTime();
  const days = Math.floor((Date.now() - anchor) / (1000 * 60 * 60 * 24));
  solEl.textContent = String(2158 + days);
}
