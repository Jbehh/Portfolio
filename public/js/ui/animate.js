import { $$, inView } from "./dom.js";

export function initAnimations() {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Typewriter
  const typeTarget = document.getElementById("typeTarget");
  if (typeTarget) {
    const words = [
      "building fast, accessible web apps",
      "writing clean, maintainable code",
      "crafting delightful UX",
    ];
    let idx = 0;
    const loop = () =>
      type(words[idx++ % words.length], () =>
        setTimeout(() => {
          if (!reduceMotion) erase(loop);
          else loop();
        }, 900)
      );
    const type = (full, done) => {
      if (reduceMotion) {
        typeTarget.textContent = full;
        return done();
      }
      let i = 0;
      const step = () => {
        typeTarget.textContent = full.slice(0, i++);
        if (i <= full.length) requestAnimationFrame(step);
        else done();
      };
      step();
    };
    const erase = (done) => setTimeout(done, 250);
    loop();
  }

  // Count-up + progress + reveal
  const counters = $$("[data-counter]");
  const bars = $$("[data-progress]");
  const revealers = $$("[data-reveal]");

  const animateNumber = (el, target, duration = 1200) => {
    if (reduceMotion) {
      el.textContent = target;
      return;
    }
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const animateWidth = (el, targetPercent, duration = 1000) => {
    if (reduceMotion) {
      el.style.width = targetPercent + "%";
      return;
    }
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.style.width = targetPercent * eased + "%";
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const reveal = (el, duration = 500) => {
    if (el.__revealed) return;
    if (reduceMotion) {
      el.style.opacity = 1;
      el.style.transform = "none";
      el.__revealed = true;
      return;
    }
    el.__revealed = true;
    const start = performance.now();
    const fromY = 16;
    const tick = (t) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.style.opacity = String(eased);
      el.style.transform = `translateY(${(1 - eased) * fromY}px)`;
      if (p < 1) requestAnimationFrame(tick);
    };
    el.style.opacity = "0";
    el.style.transform = `translateY(${fromY}px)`;
    requestAnimationFrame(tick);
  };

  const onScroll = () => {
    counters.forEach((el) => {
      if (!el.__done && inView(el)) {
        el.__done = true;
        animateNumber(el, Number(el.dataset.counter) || 0);
      }
    });
    bars.forEach((el) => {
      if (!el.__done && inView(el)) {
        el.__done = true;
        animateWidth(el, Number(el.dataset.progress) || 0);
      }
    });
    revealers.forEach((el) => {
      if (!el.__done && inView(el)) {
        el.__done = true;
        reveal(el);
      }
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("load", onScroll);
  onScroll();
}
