export const $ = (sel, ctx = document) => ctx.querySelector(sel);
export const $$ = (sel, ctx = document) =>
  Array.from(ctx.querySelectorAll(sel));
export const inView = (el, threshold = 0.9) => {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * threshold && rect.bottom > 0;
};
