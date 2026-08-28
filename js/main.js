/* ==========================================================================
   main.js — SHARED SITE BEHAVIOR
   ==========================================================================
   Runs on every page: language state, theme state, header/nav rendering,
   mobile menu, reduced-motion, and footer. Page-specific rendering (rules,
   plugins, mods) lives in their own js/*.js files and reacts to the
   "languagechange" event this file dispatches.
   ========================================================================== */

/* -------------------------------------------------------------------------
   Language state
   ------------------------------------------------------------------------- */
const LANG_KEY = "server-portal:lang";
const THEME_KEY = "server-portal:theme";

function getLang(){
  return localStorage.getItem(LANG_KEY) || "en";
}

function setLang(lang){
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  applyTranslations();
  renderHeaderFooter();
  document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
}

/* -------------------------------------------------------------------------
   Theme state
   ------------------------------------------------------------------------- */
function getTheme(){
  const stored = localStorage.getItem(THEME_KEY);
  if (stored) return stored;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function setTheme(theme){
  localStorage.setItem(THEME_KEY, theme);
  document.documentElement.setAttribute("data-theme", theme);
}

/* -------------------------------------------------------------------------
   Icons (inline SVG strings — no icon font/dependency)
   ------------------------------------------------------------------------- */
const ICONS = {
  sun: `<svg class="theme-icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`,
  moon: `<svg class="theme-icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  rules: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v5h5M8 12h8M8 16h8M8 8h3"/></svg>`,
  plug: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3v4M15 3v4M6 7h12l-1 6a5 5 0 0 1-5 4h0a5 5 0 0 1-5-4L6 7Z"/><path d="M10 21v-6M14 21v-6"/></svg>`,
  cube: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 3 8v8l9 5 9-5V8l-9-5Z"/><path d="M3 8l9 5 9-5M12 13v8"/></svg>`
};

/* -------------------------------------------------------------------------
   Header, mobile nav & footer rendering
   ------------------------------------------------------------------------- */
const NAV_ITEMS = [
  { href: "index.html", key: "nav.home", page: "home" },
  { href: "rules.html", key: "nav.rules", page: "rules" },
  { href: "plugins.html", key: "nav.plugins", page: "plugins" },
  { href: "mods.html", key: "nav.mods", page: "mods" }
];

function currentPage(){
  return document.body.getAttribute("data-page") || "home";
}

function renderHeaderFooter(){
  const lang = getLang();
  const page = currentPage();
  const serverName = SITE_CONFIG.serverName[lang] || SITE_CONFIG.serverName.en;

  // Desktop / shared nav links
  document.querySelectorAll(".js-nav-links").forEach(list => {
    list.innerHTML = NAV_ITEMS.map(item => `
      <a href="${item.href}" ${item.page === page ? 'aria-current="page"' : ""}>${t(item.key)}</a>
    `).join("");
  });

  document.querySelectorAll(".js-brand-name").forEach(el => { el.textContent = serverName; });
  document.querySelectorAll(".js-footer-name").forEach(el => { el.textContent = serverName; });
  document.title = `${serverName} — ${t(navTitleKey(page))}`;
}

function navTitleKey(page){
  const map = { home: "nav.home", rules: "nav.rules", plugins: "nav.plugins", mods: "nav.mods" };
  return map[page] || "nav.home";
}

function initMobileNav(){
  const toggle = document.querySelector(".js-nav-toggle");
  const panel = document.querySelector(".js-mobile-nav");
  if (!toggle || !panel) return;

  toggle.innerHTML = ICONS.menu;

  toggle.addEventListener("click", () => {
    const open = panel.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.innerHTML = open ? ICONS.close : ICONS.menu;
    toggle.setAttribute("data-i18n-aria-label", open ? "nav.closeMenu" : "nav.openMenu");
    applyTranslations();
    document.body.style.overflow = open ? "hidden" : "";
  });

  panel.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      panel.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.innerHTML = ICONS.menu;
      document.body.style.overflow = "";
    });
  });
}

function initThemeToggle(){
  document.querySelectorAll(".js-theme-toggle").forEach(btn => {
    btn.innerHTML = ICONS.sun + ICONS.moon;
    btn.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(next);
    });
  });
}

function initLangToggle(){
  document.querySelectorAll(".js-lang-toggle").forEach(btn => {
    const update = () => { btn.textContent = getLang() === "en" ? "فا" : "EN"; };
    update();
    btn.addEventListener("click", () => {
      setLang(getLang() === "en" ? "fa" : "en");
      update();
    });
  });
}

function initReducedMotionRespect(){
  // prefers-reduced-motion is handled in CSS directly; this just keeps
  // things consistent if a user later flips their OS setting mid-session.
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  const apply = () => document.documentElement.classList.toggle("reduce-motion", mql.matches);
  apply();
  mql.addEventListener?.("change", apply);
}

/* -------------------------------------------------------------------------
   Boot
   ------------------------------------------------------------------------- */
function initSiteChrome(){
  document.documentElement.setAttribute("data-theme", getTheme());
  document.documentElement.lang = getLang();
  document.documentElement.dir = getLang() === "fa" ? "rtl" : "ltr";

  // fill in brand logo src from config
  document.querySelectorAll(".js-logo").forEach(img => { img.src = SITE_CONFIG.logo; });

  initMobileNav();
  initThemeToggle();
  initLangToggle();
  initReducedMotionRespect();

  applyTranslations();
  renderHeaderFooter();
}

document.addEventListener("DOMContentLoaded", initSiteChrome);
