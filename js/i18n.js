/* ==========================================================================
   i18n.js — UI STRING TRANSLATIONS
   ==========================================================================
   Every piece of interface chrome (nav, buttons, headings, search, empty
   states, copy feedback, footer) lives here in both languages.

   Rule/plugin/mod CONTENT lives in data.js, not here — this file is only
   for interface strings that are the same on every page.

   To add a new UI string:
     1. Add the key under both `en` and `fa`.
     2. Reference it from JS with `t("yourKey")`.
     3. If it lives directly in HTML, add `data-i18n="yourKey"` to the
        element instead and applyTranslations() will fill it in.
   ========================================================================== */

const STRINGS = {
  en: {
    "a11y.skip": "Skip to content",
    "site.name": "I Craft",
    "nav.home": "Home",
    "nav.rules": "Rules",
    "nav.plugins": "Plugins & Datapacks",
    "nav.mods": "Recommended Mods",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",
    "action.toggleTheme": "Toggle color theme",
    "action.toggleLang": "تغییر زبان به فارسی",

    "home.eyebrow": "Welcome",
    "home.title.a": "The world",
    "home.title.b": "You build.",
    "home.lede": "This is the community portal for our server. Read the rules before you play, explore the plugins and datapacks we use, and discover a few recommended mods to make your experience even better.",
    "home.cta.rules": "Read the rules",
    "home.cta.plugins": "See what's running",

    "home.section.eyebrow": "What are you looking for?",
    "home.section.title": "Everything you need before playing",
    "home.section.lede": "browse the sections below to learn more about the server and make your experience smoother",

    "home.card.rules.title": "Rules",
    "home.card.rules.desc": "The full rulebook — players, builds, economy, farms and more — searchable and organized by category.",
    "home.card.rules.cta": "View the rules",

    "home.card.plugins.title": "Plugins & Datapacks",
    "home.card.plugins.desc": "gameplay plugins, datapacks, and other tools installed on the server that can change your gameplay.",
    "home.card.plugins.cta": "Browse plugins",

    "home.card.mods.title": "Recommended Mods",
    "home.card.mods.desc": "Client-side mods that make building, exploring and playing on this server smoother and better-looking.",
    "home.card.mods.cta": "Browse mods",

    "rules.title": "Rules",
    "rules.why": "Rules aren't here to boss anyone around — they exist so builds survive, the economy stays fair, contraptions don't lag the world out, and everyone gets an experience they enjoy.",
    "rules.lede": "Read through by category, or search for a specific rule below.",
    "rules.search.placeholder": "Search rules…",
    "rules.search.clear": "Clear search",
    "rules.toc.title": "Table of contents",
    "rules.toc.mobileLabel": "Table of contents",
    "rules.empty.title": "No rules match your search",
    "rules.empty.body": "Try a different word, or check the spelling — search looks across both languages at once.",
    "rules.copy": "Copy",
    "rules.copied": "Copied!",
    "rules.matchedIn": "Matched your search",

    "plugins.title": "Plugins & Datapacks",
    "plugins.lede": "The tools running behind the scenes — gameplay plugins and datapacks that shape how the server plays.",
    "plugins.visit": "View",
    "plugins.type.plugin": "Plugin",
    "plugins.type.datapack": "Datapack",

    "mods.title": "Recommended Mods",
    "mods.lede": "Optional client-side mods recommended for a smoother, better-looking experience on the server.",
    "mods.visit": "View",
    "mods.side.client": "Client",
    // "mods.side.server": "Server",
    // "mods.side.both": "Client + Server",

    "footer.note": "Community server portal — not affiliated with Mojang or Microsoft.",
    "footer.backToTop": "Back to top"
  },

  fa: {
    "a11y.skip": "رفتن به محتوای اصلی",
    "site.name": "آی‌کرفت",
    "nav.home": "خانه",
    "nav.rules": "قوانین",
    "nav.plugins": "پلاگین‌ها و دیتاپک‌ها",
    "nav.mods": "ماد‌های پیشنهادی",
    "nav.openMenu": "باز کردن منو",
    "nav.closeMenu": "بستن منو",
    "action.toggleTheme": "تغییر تم رنگی",
    "action.toggleLang": "Switch language to English",

    "home.eyebrow": "خوش آمدید",
    "home.title.a": "دنیایی که",
    "home.title.b": "تو میسازی.",
    "home.lede": "این پورتال کلی سرور ماست — قوانین رو بخونید، پلاگین‌ها و دیتاپک‌های سرور رو ببینید و با مادهایی که تجربه گیم‌پلی رو بهتر میکنند آشنا بشید.",
    "home.cta.rules": "خواندن قوانین",
    "home.cta.plugins": "دیدن امکانات سرور",

    "home.section.eyebrow": "دنبال چی میگردی؟",
    "home.section.title": "هر آنچه پیش از شروع باید بدانید",
    "home.section.lede": "بخش‌های زیر رو مرور کنید تا بیشتر با سرور آشنا شوید و تجربه بهتری داشته باشید",

    "home.card.rules.title": "قوانین",
    "home.card.rules.desc": "کتابچه‌ی کامل قوانین — بازیکنان، بیلدها، شاپ‌ها، فارم‌ها و... — قابل جست‌وجو و دسته‌بندی‌شده.",
    "home.card.rules.cta": "مشاهده‌ی قوانین",

    "home.card.plugins.title": "پلاگین‌ها و دیتاپک‌ها",
    "home.card.plugins.desc": "پلاگین‌های گیم‌پلی، دیتاپک‌ها و ابزارهای دیگری که روی سرور نصب هستند و میتونن گیم‌پلی‌تون رو عوض کنن.",
    "home.card.plugins.cta": "مشاهده‌ی پلاگین‌ها",

    "home.card.mods.title": "ماد‌های پیشنهادی",
    "home.card.mods.desc": "ماد‌های سمت کلاینت که بیلد، گردش و بازی در این سرور رو روون‌تر و زیباتر می‌کنن.",
    "home.card.mods.cta": "مشاهده‌ی ماد‌ها",

    "rules.title": "قوانین",
    "rules.why": "قوانین اینجا نیستن که کسی رو کنترل کنن — صرفا وجود دارن تا بیلدها سالم بمونن، اقتصاد منصفانه بمونه، سیستم‌ها باعث لگ سرور نشن و همه تجربه‌ای لذت‌بخش از گیم‌پلی داشته باشن.",
    "rules.lede": "قوانین را بر اساس دسته‌بندی بخوانید یا یک قانون خاص را جست‌وجو کنید.",
    "rules.search.placeholder": "جست‌وجوی قوانین…",
    "rules.search.clear": "پاک‌کردن جست‌وجو",
    "rules.toc.title": "فهرست مطالب",
    "rules.toc.mobileLabel": "فهرست مطالب",
    "rules.empty.title": "قانونی مطابق جست‌وجوی شما یافت نشد",
    "rules.empty.body": "واژه‌ی دیگری را امتحان کنید یا املا را بررسی کنید — جست‌وجو در هر دو زبان هم‌زمان انجام می‌شود.",
    "rules.copy": "کپی",
    "rules.copied": "کپی شد!",
    "rules.matchedIn": "مطابق با جست‌وجوی شما",

    "plugins.title": "پلاگین‌ها و دیتاپک‌ها",
    "plugins.lede": "ابزارهایی که پشت‌صحنه اجرا می‌شن — پلاگین‌های گیم‌پلی و دیتاپک‌هایی که نحوه‌ی بازی توی سرور رو شکل می‌دن.",
    "plugins.visit": "مشاهده",
    "plugins.type.plugin": "پلاگین",
    "plugins.type.datapack": "دیتاپک",

    "mods.title": "ماد‌های پیشنهادی",
    "mods.lede": "ماد‌های اختیاری سمت کلاینت که برای تجربه‌ای روون‌تر و زیباتر در سرور پیشنهاد می‌شن.",
    "mods.visit": "مشاهده",
    "mods.side.client": "کلاینت",
    // "mods.side.server": "سرور",
    // "mods.side.both": "کلاینت + سرور",

    "footer.note": "پورتال جامعه‌ی سرور — وابسته به Mojang یا مایکروسافت نیست.",
    "footer.backToTop": "بازگشت به بالا"
  }
};

/** Get the translated string for `key` in the current language (falls back to English). */
function t(key){
  const lang = getLang();
  return (STRINGS[lang] && STRINGS[lang][key]) || STRINGS.en[key] || key;
}

/** Fill in every element with a data-i18n attribute using the current language. */
function applyTranslations(root = document){
  root.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
  root.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", t(key));
  });
  root.querySelectorAll("[data-i18n-aria-label]").forEach(el => {
    const key = el.getAttribute("data-i18n-aria-label");
    el.setAttribute("aria-label", t(key));
  });
}
