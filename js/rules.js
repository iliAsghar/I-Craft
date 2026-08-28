/* ==========================================================================
   rules.js — RULES PAGE LOGIC
   ==========================================================================
   Generates the table of contents, accordion sections, rule lists, and
   search results entirely from the `rules` array in data.js. Nothing here
   should ever need editing just to add/remove/reorder a rule — change
   data.js instead.
   ========================================================================== */

(function(){
  const sectionsEl = document.querySelector(".js-rule-sections");
  const tocEl = document.querySelector(".js-toc-list");
  const tocMobileEl = document.querySelector(".js-toc-list-mobile");
  const searchInput = document.querySelector(".js-rules-search-input");
  const searchClear = document.querySelector(".js-rules-search-clear");
  const emptyStateEl = document.querySelector(".js-search-empty");
  const tocMobileToggle = document.querySelector(".js-toc-mobile-toggle");
  const tocMobilePanel = document.querySelector(".js-toc-mobile-panel");

  if (!sectionsEl) return; // not on the rules page

  /* ---------------------------------------------------------------------
     Rendering helpers
     --------------------------------------------------------------------- */

  // Turn a rule's `text` or `parts` field into safe HTML with <strong> emphasis.
  function renderRichText(rule, lang){
    if (rule.parts && rule.parts[lang]){
      return rule.parts[lang].map(part => {
        const safe = escapeHtml(part.text);
        return part.emphasis ? `<strong>${safe}</strong>` : safe;
      }).join("");
    }
    if (rule.text && rule.text[lang]){
      return escapeHtml(rule.text[lang]);
    }
    return "";
  }

  // Plain-text version (for clipboard copy) — no HTML.
  function plainText(rule, lang){
    if (rule.parts && rule.parts[lang]){
      return rule.parts[lang].map(p => p.text).join("");
    }
    return (rule.text && rule.text[lang]) || "";
  }

  function escapeHtml(str){
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderSection(category, lang){
    const catTitle = category.title[lang] || category.title.en;
    const catDesc = category.description[lang] || category.description.en;

    const ruleItems = category.rules.map(rule => {
      const title = rule.title ? (rule.title[lang] || rule.title.en) : "";
      const body = renderRichText(rule, lang);
      const searchBlob = buildSearchBlob(category, rule);
      return `
        <li class="rule-item" data-rule-id="${rule.id}" data-search="${searchBlob}">
          <span class="chip chip-sm" aria-hidden="true">${rule.number}</span>
          <div class="rule-item-body">
            <span class="rule-item-text">${body}</span>
          </div>
          <div class="rule-item-actions">
            <button type="button" class="copy-btn js-copy-btn" data-rule-id="${rule.id}" data-i18n-copy-label="rules.copy">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/></svg>
              <span class="copy-btn-label">${t("rules.copy")}</span>
            </button>
          </div>
        </li>`;
    }).join("");

    const catSearchBlob = buildSearchBlob(category, null);

    return `
      <article class="rule-section" id="section-${category.id}" data-cat-id="${category.id}" data-search="${catSearchBlob}">
        <h2>
          <button type="button" class="rule-section-toggle js-section-toggle" aria-expanded="false" aria-controls="panel-${category.id}">
            <span class="chip" aria-hidden="true">${category.number}</span>
            <span class="heading-block">
              <span class="section-title">${escapeHtml(catTitle)}</span>
            </span>
            <span class="chevron" aria-hidden="true">${ICONS.arrow}</span>
          </button>
        </h2>
        <div class="rule-section-panel js-section-panel" id="panel-${category.id}">
          <div class="rule-section-panel-inner">
            <div class="rule-section-body">
              <p class="rule-description">${escapeHtml(catDesc)}</p>
              <ul class="rule-list">${ruleItems}</ul>
            </div>
          </div>
        </div>
      </article>`;
  }

  // Lowercased blob of both languages, for search that works regardless of
  // the currently displayed language.
  function buildSearchBlob(category, rule){
    const bits = [];
    if (rule){
      bits.push(rule.number);
      if (rule.title){ bits.push(rule.title.en, rule.title.fa); }
      bits.push(plainText(rule, "en"), plainText(rule, "fa"));
    } else {
      bits.push(category.number, category.title.en, category.title.fa, category.description.en, category.description.fa);
    }
    return escapeHtml(bits.filter(Boolean).join(" ").toLowerCase());
  }

  function renderToc(lang){
    const items = rules.map(cat => `
      <a href="#section-${cat.id}" data-cat-id="${cat.id}">
        <span class="toc-num" aria-hidden="true">${cat.number}</span>
        <span>${escapeHtml(cat.title[lang] || cat.title.en)}</span>
      </a>`).join("");
    if (tocEl) tocEl.innerHTML = items;
    if (tocMobileEl) tocMobileEl.innerHTML = items;
  }

  function renderAll(){
    const lang = getLang();
    sectionsEl.innerHTML = rules.map(cat => renderSection(cat, lang)).join("");
    renderToc(lang);
    bindSectionToggles();
    bindCopyButtons();
    bindTocLinks();
    initScrollSpy();
    // re-apply any active search filter after re-render (e.g. language switch)
    if (searchInput && searchInput.value.trim()){
      runSearch(searchInput.value);
    }
  }

  /* ---------------------------------------------------------------------
     Accordions
     --------------------------------------------------------------------- */
  function bindSectionToggles(){
    sectionsEl.querySelectorAll(".js-section-toggle").forEach(btn => {
      btn.addEventListener("click", () => toggleSection(btn));
    });
  }

  function toggleSection(btn, forceOpen){
    const panel = document.getElementById(btn.getAttribute("aria-controls"));
    const willOpen = forceOpen !== undefined ? forceOpen : btn.getAttribute("aria-expanded") !== "true";
    btn.setAttribute("aria-expanded", String(willOpen));
    panel.classList.toggle("open", willOpen);
  }

  /* ---------------------------------------------------------------------
     Copy to clipboard
     --------------------------------------------------------------------- */
  function bindCopyButtons(){
    sectionsEl.querySelectorAll(".js-copy-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const ruleId = btn.getAttribute("data-rule-id");
        const lang = getLang();
        const rule = findRuleById(ruleId);
        if (!rule) return;
        const title = rule.title ? (rule.title[lang] || rule.title.en) : "";
        const body = plainText(rule, lang);
        const clip = title ? `${rule.number} — ${title}\n\n${body}` : `${rule.number}\n\n${body}`;

        const finish = () => {
          const label = btn.querySelector(".copy-btn-label");
          const original = t("rules.copy");
          btn.classList.add("copied");
          if (label) label.textContent = t("rules.copied");
          setTimeout(() => {
            btn.classList.remove("copied");
            if (label) label.textContent = t("rules.copy");
          }, 1600);
        };

        if (navigator.clipboard && navigator.clipboard.writeText){
          navigator.clipboard.writeText(clip).then(finish).catch(finish);
        } else {
          // fallback for older browsers
          const ta = document.createElement("textarea");
          ta.value = clip;
          ta.style.position = "fixed";
          ta.style.opacity = "0";
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand("copy"); } catch(err) { /* no-op */ }
          document.body.removeChild(ta);
          finish();
        }
      });
    });
  }

  function findRuleById(id){
    for (const cat of rules){
      const found = cat.rules.find(r => r.id === id);
      if (found) return found;
    }
    return null;
  }

  /* ---------------------------------------------------------------------
     Table of contents: link clicks + scroll-spy
     --------------------------------------------------------------------- */
  function bindTocLinks(){
    document.querySelectorAll(".js-toc-list a, .js-toc-list-mobile a").forEach(a => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const catId = a.getAttribute("data-cat-id");
        const section = document.getElementById(`section-${catId}`);
        if (!section) return;
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#section-${catId}`);
        if (tocMobilePanel && tocMobilePanel.classList.contains("open")){
          closeMobileToc();
        }
      });
    });
  }

  function setActiveToc(catId){
    document.querySelectorAll(".js-toc-list a, .js-toc-list-mobile a").forEach(a => {
      a.classList.toggle("active", a.getAttribute("data-cat-id") === catId);
    });
  }

  let scrollSpyObserver = null;
  function initScrollSpy(){
    if (scrollSpyObserver) scrollSpyObserver.disconnect();
    scrollSpyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          setActiveToc(entry.target.getAttribute("data-cat-id"));
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px", threshold: 0 });

    // Observe fresh section elements each render.
    sectionsEl.querySelectorAll(".rule-section").forEach(sec => scrollSpyObserver.observe(sec));
  }

  /* ---------------------------------------------------------------------
     Mobile TOC panel
     --------------------------------------------------------------------- */
  function closeMobileToc(){
    if (!tocMobilePanel || !tocMobileToggle) return;
    tocMobilePanel.classList.remove("open");
    tocMobilePanel.style.maxHeight = "0px";
    tocMobileToggle.setAttribute("aria-expanded", "false");
  }

  function initMobileToc(){
    if (!tocMobileToggle || !tocMobilePanel) return;
    tocMobileToggle.addEventListener("click", () => {
      const open = !tocMobilePanel.classList.contains("open");
      tocMobilePanel.classList.toggle("open", open);
      tocMobileToggle.setAttribute("aria-expanded", String(open));
      tocMobilePanel.style.maxHeight = open ? tocMobilePanel.scrollHeight + "px" : "0px";
    });
  }

  /* ---------------------------------------------------------------------
     Search
     --------------------------------------------------------------------- */
  function runSearch(query){
    const q = query.trim().toLowerCase();
    const sectionsWrap = sectionsEl;

    if (searchClear) searchClear.classList.toggle("show", q.length > 0);

    if (!q){
      sectionsWrap.classList.remove("searching");
      sectionsWrap.querySelectorAll(".rule-section").forEach(sec => sec.classList.remove("search-visible", "match-flash"));
      sectionsWrap.querySelectorAll(".rule-item").forEach(item => item.classList.remove("search-hit"));
      if (emptyStateEl) emptyStateEl.classList.remove("show");
      return;
    }

    sectionsWrap.classList.add("searching");
    let anyMatch = false;

    sectionsWrap.querySelectorAll(".rule-section").forEach(sec => {
      const catMatches = (sec.getAttribute("data-search") || "").includes(q);
      let sectionHasHit = catMatches;

      sec.querySelectorAll(".rule-item").forEach(item => {
        const itemMatches = (item.getAttribute("data-search") || "").includes(q);
        item.classList.toggle("search-hit", itemMatches);
        if (itemMatches) sectionHasHit = true;
      });

      sec.classList.toggle("search-visible", sectionHasHit);
      sec.classList.toggle("match-flash", sectionHasHit);

      if (sectionHasHit){
        anyMatch = true;
        const toggleBtn = sec.querySelector(".js-section-toggle");
        if (toggleBtn) toggleSection(toggleBtn, true);
      }
    });

    if (emptyStateEl) emptyStateEl.classList.toggle("show", !anyMatch);
  }

  function initSearch(){
    if (!searchInput) return;
    searchInput.addEventListener("input", () => runSearch(searchInput.value));
    if (searchClear){
      searchClear.addEventListener("click", () => {
        searchInput.value = "";
        runSearch("");
        searchInput.focus();
      });
    }
  }

  /* ---------------------------------------------------------------------
     Boot
     --------------------------------------------------------------------- */
  function boot(){
    renderAll();
    initMobileToc();
    initSearch();

    // Open + scroll to a section if the page was loaded with a hash.
    if (location.hash){
      const catId = location.hash.replace("#section-", "");
      const btn = document.querySelector(`.js-section-toggle[aria-controls="panel-${catId}"]`);
      if (btn){
        toggleSection(btn, true);
        setTimeout(() => document.getElementById(location.hash.slice(1))?.scrollIntoView({ block: "start" }), 50);
      }
    }
  }

  document.addEventListener("DOMContentLoaded", boot);
  document.addEventListener("languagechange", renderAll);
})();
