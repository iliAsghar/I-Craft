/* ==========================================================================
   mods.js — RECOMMENDED MODS PAGE LOGIC
   ==========================================================================
   Renders cards from the `mods` array in data.js. Add, remove, or edit
   entries there — this file only turns that data into markup.
   ========================================================================== */

(function(){
  const gridEl = document.querySelector(".js-mods-grid");
  if (!gridEl) return; // not on the mods page

  function escapeHtml(str){
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function sideLabel(side){
    if (side === "server") return t("mods.side.server");
    if (side === "both") return t("mods.side.both");
    return t("mods.side.client");
  }

  function renderCard(entry, lang){
    const desc = entry.description[lang] || entry.description.en;
    const initials = entry.name.slice(0, 2).toUpperCase();

    return `
      <article class="entry-card">
        <div class="entry-top">
          <span class="entry-icon" aria-hidden="true">
            ${entry.icon ? `<img src="${entry.icon}" alt="">` : initials}
          </span>
          <div class="entry-titles">
            <h3>${escapeHtml(entry.name)}</h3>
            <div class="entry-meta">
              <span class="tag">${sideLabel(entry.side)}</span>
            </div>
          </div>
        </div>
        <p class="entry-desc">${escapeHtml(desc)}</p>
        <div class="entry-foot">
          <span class="entry-version">${entry.version ? escapeHtml(entry.version) : ""}</span>
          ${entry.link ? `<a class="entry-link" href="${entry.link}" target="_blank" rel="noopener">
            ${t("mods.visit")} ${ICONS.arrow}
          </a>` : ""}
        </div>
      </article>`;
  }

  function renderAll(){
    const lang = getLang();
    gridEl.innerHTML = mods.map(entry => renderCard(entry, lang)).join("");
  }

  document.addEventListener("DOMContentLoaded", renderAll);
  document.addEventListener("languagechange", renderAll);
})();
