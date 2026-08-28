/* ==========================================================================
   data.js — CONTENT DATA (single source of truth)
   ==========================================================================
   This is the ONLY place rule, plugin and mod content lives. The rest of
   the site (accordions, table of contents, search, plugin/mod cards) is
   generated FROM this file — never edit rules.html directly.

   ┌────────────────────────────────────────────────────────────────────┐
   │  QUICK GUIDE                                                        │
   ├────────────────────────────────────────────────────────────────────┤
   │  Add a rule CATEGORY     → add an object to the `rules` array       │
   │  Remove a category       → delete its object from `rules`          │
   │  Edit a category intro   → edit that category's `description`      │
   │  Add a RULE to a category→ push a new object into that category's  │
   │                             `rules` array                          │
   │  Reorder categories/rules→ just reorder the array items — numbers  │
   │                             (`number`) are stored explicitly so     │
   │                             you control them, they are NOT auto-   │
   │                             generated from array position          │
   │  Edit English text       → edit the `.en` value of any field       │
   │  Edit Farsi text         → edit the `.fa` value of any field       │
   │  Add an icon later       → set `icon: "hammer"` (a keyword) or     │
   │                             `icon: "assets/icons/hammer.svg"` (a   │
   │                             file path) — both are optional and     │
   │                             safe to leave out entirely             │
   │  Emphasize part of text  → use `parts` instead of `text` (see the  │
   │                             "RICH TEXT" note below the example)    │
   └────────────────────────────────────────────────────────────────────┘

   NOTE: The example content below (Players, Builds, Farms & Automation)
   is PLACEHOLDER / DEMO data showing the structure this site expects —
   it is not your real ruleset. Replace it with your actual rules.
   Never machine-translate rules between `en` and `fa`: always write the
   real Farsi wording yourself (or have it supplied), the same as English.
   ========================================================================== */

/* -------------------------------------------------------------------------
   RICH TEXT
   A rule's body can be either:
     text:  { en: "...", fa: "..." }                 — plain text, simplest
   or
     parts: { en: [ {text, emphasis?}, ... ], fa: [...] }  — mixed emphasis
   Use `parts` only where you actually need <strong> emphasis inside the
   sentence; plain `text` is preferred everywhere else.
   ------------------------------------------------------------------------- */



  // {
  //   id: "",
  //   number: "1",
  //   icon: null,
  //   title: {
  //     en: "",
  //     fa: ""
  //   },
  //   description: {
  //     en: "",
  //     fa: ""
  //   },
  //   rules: [
  //     {
  //       id: "players-respect",
  //       number: "1.1",
  //       title: { en: "", fa: "" },
  //       text: {
  //         en: "",
  //         fa: ""
  //       }
  //     }
  //   ]
  // }




const rules = [
  {
    id: "A",
    number: "A",
    icon: null,
    title: {
      en: "Players",
      fa: "پلیرها"
    },
    description: {
      en: "Interactions between players should be civil, chill, and respectful. Any conflict should be brought to admins for investigation, and any accidental misbehavior should be explained and apologized for.",
      fa: "تعامل بین بازیکن‌ها باید محترمانه، آروم و بدون درگیری باشه. هر نوع تعارضی باید به ادمین‌ها گزارش داده بشه تا بررسی بشه، و هر بدرفتاری تصادفی هم باید توضیح داده و بابتش عذرخواهی بشه."
    },
    rules: [
      {
        id: "players-respect",
        number: "A-1",
        text: {
          en: "Respect every player, their time, and their efforts. try to not question their efforts with your activities.",
          fa: "به همه‌ی بازیکن‌ها، وقتشون و زحماتشون احترام بذارید. سعی کنید فعالیت‌هاتون زحماتشون رو زیر سوال نبره."
        }
      },
      {
        id: "players-general",
        number: "A-2",
        text: {
          en: "Do not grief, kill, or steal from another player without their consent.",
          fa: "بدون رضایت طرف مقابل، بیلدهاش رو گریف نکنید، نکشیدش و ازش دزدی نکنید."
        }
      },
      {
        id: "players-pvp",
        number: "A-3",
        text: {
          en: "PvP is allowed, but it must not be one-sided — both parties need to consent.",
          fa: "PvP آزاده، ولی نباید یک‌طرفه باشه — هر دو طرف باید راضی باشن."
        }
      },
      {
        id: "players-pranks",
        number: "A-4",
        text: {
          en: "Pranks are allowed, as long as they don't harm a player (or their builds) in a major way. If a prank involves messing with someone's builds or farms, the person being pranked can ask for cleanup.",
          fa: "شوخی (prank) مجازه، تا وقتی که به بازیکن (یا بیلدش) آسیب جدی نزنه. اگه شوخی باعث بهم‌ریختن بیلد یا farm کسی بشه، اون شخص می‌تونه درخواست تمیزکاری (cleanup) بده."
        }
      }
    ]
  },

  {
    id: "B",
    number: "B",
    icon: null,
    title: {
      en: "Lands and Builds",
      fa: "زمین‌ها و بیلدها"
    },
    description: {
      en: "A core part of this server is creating a world where everyone feels comfortable and can add their own touch. This section covers where and what you build.",
      fa: "یکی از بخش‌های مهم این سرور اینه که دنیایی بسازیم که همه توش احساس راحتی کنن و بتونن سبک خودشون رو بهش اضافه کنن. این بخش درباره‌ی اینه که کجا و چی بسازید."
    },
    rules: [
      {
        id: "builds-claim",
        number: "B-1",
        text: {
          en: "We don't currently use claim plugins. If you want to pre-claim land, mark it clearly with signs or a defined border.",
          fa: " ما فعلاً از پلاگین claim استفاده نمی‌کنیم. اگه می‌خواید یه زمین رو از قبل claim کنید، باید با sign یا یه مرز مشخص نشونش بدید."
        }
      },
      {
        id: "builds-closeness",
        number: "B-2",
        text: {
          en: "If you're building near other players — especially a large build — respect their claimed area and coordinate with them if they haven't marked a clear border.",
          fa: "اگه نزدیک بازیکن‌های دیگه می‌سازید — مخصوصاً یه بیلد بزرگ — باید به محدوده‌ی اون‌ها احترام بذارید و اگه مرز مشخصی ندارن، باهاشون هماهنگ کنید."
        }
      },
      {
        id: "builds-modifying",
        number: "B-3",
        text: {
          en: "Modifying or removing structures other players made requires their knowledge and consent, or direct permission from an admin.",
          fa: "تغییر دادن یا خراب کردن بیلد و سازه‌ای که دیگران ساختن، فقط با اطلاع و رضایت خودشون، یا با اجازه‌ی مستقیم ادمین‌ها مجازه."
        }
      },
      {
        id: "builds-purpose",
        number: "B-4",
        text: {
          en: "Builds should have a purpose, to keep the server feeling alive rather than abandoned. If a build is left unfinished for a long time, its owner is responsible for completing it (or removing it) so it fits the world.",
          fa: "بهتره هر بیلدی یه هدف داشته باشه، تا سرور رهاشده به نظر نرسه. اگه یه بیلد نیمه‌کاره برای مدت طولانی ول بشه، مسئولیت تکمیل کردنش (یا برداشتنش) با صاحبشه."
        }
      },
      {
        id: "builds-spawn",
        number: "B-5",
        text: {
          en: "The spawn area covers 250 blocks in every direction from the main spawn point (a 500*500 square). Note that the 251st block still counts as 'close to spawn' and isn't a free-for-all zone. Every player is expected to help improve the spawn area — build useful structures or stations, and be mindful of the community space. Keep entity counts low so you don't degrade other players' experience; any build or farm causing lag or discomfort will be investigated and addressed.",
          fa: "منطقه‌ی spawn شامل ۲۵۰ بلاک از هر طرف نقطه‌ی اصلی spawn هست (یه مربع 500 در 500). توجه کنید بلاک ۲۵۱ام هم هنوز جزو منطقه‌ی نزدیک به spawn حساب می‌شه و آزاد نیست. هر بازیکنی موظفه به بهتر شدن منطقه‌ی spawn کمک کنه — ساختن سازه یا ایستگاه‌های مفید، و رعایت حال بخش عمومی سرور. تعداد entity باید نسبتاً کم نگه داشته بشه تا تجربه‌ی بقیه بازیکن‌ها بد نشه؛ هر بیلد یا farmی که باعث لگ یا ناراحتی بشه بررسی و رسیدگی می‌شه."
        }
      },
      {
        id: "builds-community",
        number: "B-6",
        text: {
          en: "Community areas (shopping district, nether hub, etc.) should be respected. You're welcome to contribute, but avoid causing lag or discomfort for others — reports will be investigated.",
          fa: "به مناطق عمومی (مثل منطقه شاپ، ندر هاب و غیره) باید احترام گذاشته بشه. مشارکت آزاده، ولی سعی کنید باعث لگ یا ناراحتی بقیه نشید — هر گزارشی از مشکلات بررسی می‌شه."
        }
      },
      {
        id: "builds-surroundings",
        number: "B-7",
        text: {
          en: "Don't just drop a build and walk away — it's strongly encouraged that you develop the area around it too. Custom trees or natural landmarks are a good way to do this.",
          fa: "فقط یه بیلد نسازید و ولش کنید — توصیه می‌شه اطراف بیلدتون رو هم توسعه بدید. درخت‌های سفارشی یا لندمارک‌های طبیعی راه خوبی برای این کاره."
        }
      },
      {
        id: "builds-style",
        number: "B-8",
        text: {
          en: "Build in whatever style you like, but hiding stations and points of interest underground to dodge the rules ('cheesing the system') is strongly prohibited.",
          fa: "می‌تونید با هر سبکی که دوست دارید بسازید، ولی مخفی کردن ایستگاه‌ها و سازه‌های مختلف زیر زمین برای دور زدن قوانین به شدت ممنوعه."
        }
      }
    ]
  },

  {
    id: "C",
    number: "C",
    icon: null,
    title: {
      en: "Resources",
      fa: "منابع"
    },
    description: {
      en: "Resource gathering is a major part of gameplay, especially early on.",
      fa: "جمع‌آوری منابع (مخصوصاً اوایل سرور) بخش بزرگی از گیم‌پلی‌عه."
    },
    rules: [
      {
        id: "resources-community-areas",
        number: "C-1",
        text: {
          en: "Mining ores or gathering materials is discouraged in community areas (spawn chunks, shopping district, etc.).",
          fa: "استخراج ore یا جمع‌آوری متریال توی مناطق عمومی (اسپاون، منطقه‌ی شاپ و غیره) توصیه نمی‌شه."
        }
      },
      {
        id: "resources-lighting",
        number: "C-2",
        text: {
          en: "Light up caves and dark underground areas to minimize unwanted mob spawns.",
          fa: "بهتره غارها و مناطق تاریک زیر زمین رو روشن کنید تا از اسپاون شدن ماب های ناخواسته جلوگیری بشه."
        }
      },
      {
        id: "resources-monopoly",
        number: "C-3",
        text: {
          en: "Players may not monopolize a unique resource, especially rarer ones like elytra. If you mass-collect something, consider opening a shop for it to help other players.",
          fa: "بازیکن‌ها نباید انحصار یه منبع خاص رو در دست بگیرن، مخصوصاً منابع کمیاب مثل Elytra. اگه یه منبع رو انبوه جمع کردید، بهتره براش یه shop بزنید و به بقیه کمک کنید."
        }
      },
      {
        id: "resources-regeneration",
        number: "C-4",
        text: {
          en: "Some unique areas are planned to regenerate periodically for easier resource gathering — for example, a server mining desert.",
          fa: "قراره بعضی مناطق خاص بازی به‌صورت دوره‌ای بازسازی یا ریجنریت بشن تا جمع‌آوری منابع راحت‌تر بشه؛ مثلاً یه desert برای کل سرور که به‌صورت دوره‌ای پر از sand می‌شه."
        }
      }
    ]
  },

  {
    id: "D",
    number: "D",
    icon: null,
    title: {
      en: "Farms & Automation",
      fa: "Farm ها و اتوماسیون"
    },
    description: {
      en: "To keep the server lag-friendly and the economy balanced, we need to set some rules about farms.",
      fa: "برای اینکه سرور از نظر لگ سالم بمونه و اقتصاد کنترل‌شده باشه، چند قانون درباره‌ی farm ها باید تعیین شن."
    },
    rules: [
      {
        id: "farms-duplicates",
        number: "D-1",
        text: {
          en: "You can build any farm you like — but if you don't need a material in bulk, or someone else already stocks it, consider not building a duplicate farm for it.",
          fa: "هر فارمی که دوست دارید بسازید مجازه، ولی اگه به مقدار زیادی از یه متریال نیاز ندارید، یا کس دیگه‌ای همون آیتم رو تو شاپ داره، بهتره وقت نذارید برای ساختن یه فارم تکراری."
        }
      },
      {
        id: "farms-location",
        number: "D-2",
        text: {
          en: "Farms should be built where they won't interfere with other players' areas. If your farm will be close to another player's base, ask for their consent first (smaller-scale farms are still allowed regardless — check with an admin if you're unsure).",
          fa: "همه‌ی فارم ها باید جایی ساخته بشن که با محدوده‌ی بازیکن‌های دیگه تداخل نداشته باشن. اگه فارم‌تون قراره نزدیک بیس یه بازیکن دیگه باشه، باید اول ازش رضایت بگیرید (فارم های کوچیک‌مقیاس بازم مجازن — اگه مطمئن نیستید با ادمین‌ها هماهنگ کنید)."
        }
      },
      {
        id: "farms-lag",
        number: "D-3",
        text: {
          en: "AFK farms, mob farms, and redstone contraptions are all allowed, as long as they don't cause server-side or client-side lag outside their own area.",
          fa: "فارم ماب، فارم‌های AFK و سازه‌های رد‌استون کاملا مجاز هستن، تا حدی که باعث لگ سرور یا لگ کلاینت (بقیه پلیرها) نشن."
        }
      },
      {
        id: "farms-chunk-loaders",
        number: "D-4",
        text: {
          en: "Chunk loaders of any kind are currently prohibited unless coordinated with the admins.",
          fa: "فعلاً هر نوع چانک‌لودر ممنوعه، مگه اینکه با ادمین‌ها هماهنگ بشه."
        }
      },
      {
        id: "farms-exploits",
        number: "D-5",
        text: {
          en: "TNT-duper machines, item duplicators, and other exploit-based farms are allowed but strongly discouraged.",
          fa: "ماشین‌های TNT-duper، دوپلیکیت آیتم و فارم‌های مبتنی بر دوپلیکیت مجازن، ولی توصیه نمی‌شن."
        }
      },
      {
        id: "farms-permission",
        number: "D-6",
        text: {
          en: "Using someone else's farm without consent is prohibited, even a simple AFK farm.",
          fa: "استفاده از فارم بازیکن دیگه بدون رضایتش ممنوعه، حتی یه فارم AFK ساده."
        }
      }
    ]
  },

  {
    id: "E",
    number: "E",
    icon: null,
    title: {
      en: "Villagers",
      fa: "ویلیجر ها"
    },
    description: {
      en: "Villagers are essential to many farms, but large numbers of them cause lag.",
      fa: "Villager ها بخش مهمی از خیلی از farm ها هستن، ولی تعداد زیادشون باعث لگ می‌شه."
    },
    rules: [
      {
        id: "villagers-breeder",
        number: "E-1",
        text: {
          en: "You can technically build a villager breeder anywhere, but in a community space it should be temporary and removed afterward.",
          fa: "می‌تونید یه ویلیجر بریدر هرجایی بسازید، ولی اگه توی یه فضای عمومیه، باید موقتی باشه و بعد از مدتی برداشته بشه."
        }
      },
      {
        id: "villagers-hoarding",
        number: "E-2",
        text: {
          en: "Avoid hoarding villagers for trades you rarely use — use the server trading hall for those, and build your own hall around the trades you actually need often.",
          fa: "بهتره برای تریدهایی که زیاد ازشون استفاده نمی‌کنید ویلیجر انبار نکنید — از تریدینگ‌هال سرور استفاده کنید، و ویلیجرهای شخصی خودتون رو مطابق نیازهای پرتکرارتون داشته باشید."
        }
      },
      {
        id: "villagers-community",
        number: "E-3",
        text: {
          en: "If you start a community project involving villagers (especially trading halls), make sure it's usable by other players — easy access for zombification/curing, etc.",
          fa: "اگه یه پروژه‌ی عمومی مرتبط با ویلیجر می‌سازید (مخصوصاً تریدینگ‌هال)، حواستون باشه که برای بقیه‌ی بازیکن‌ها هم قابل استفاده باشه — دسترسی راحت برای zombify کردن و درمون کردن و غیره."
        }
      }
    ]
  },

  {
    id: "F",
    number: "F",
    icon: null,
    title: {
      en: "Economy",
      fa: "اقتصاد"
    },
    description: {
      en: "Every good SMP needs an economy. We keep the rules loose, but with a few constraints",
      fa: "هر SMP خوبی به یه سیستم اقتصادی نیاز داره. قوانین سخت‌گیرانه‌ای نداریم، ولی چند محدودیت هست."
    },
    rules: [
      {
        id: "economy-diamond",
        number: "F-1",
        text: {
          en: "This server runs on a diamond-based economy. By default, shops are expected to price in diamonds unless it's a special case.",
          fa: "اقتصاد این سرور بر پایه‌ی دیاموند هست. به‌صورت پیش‌فرض، هر شاپی که دارید باید با دایمند کار کنه، مگر در موارد خاص."
        }
      },
      {
        id: "economy-shopping-district",
        number: "F-2",
        text: {
          en: "All player shops should be located in the designated shopping district.",
          fa: "یه منطقه‌ی شاپ برای سرور انتخاب می‌شه و همه‌ی شاپ‌های پلیرها باید توی اون منطقه باشن."
        }
      },
      {
        id: "economy-shop-structure",
        number: "F-3",
        text: {
          en: "Set up a dedicated shop building/structure for each item (or category of items) you sell.",
          fa: "برای هر آیتمی که می‌فروشید باید یه بیلد/سازه‌ی شاپ مجزا بسازید، یا یه شاپ برای یه دسته از آیتم‌ها."
        }
      },
      {
        id: "economy-shop-theme",
        number: "F-4",
        text: {
          en: "It's suggested you make your shop thematic to what it sells; though you may ignore this rule if you want to build in another style.",
          fa: "بهتره شاپ با آیتمی که می‌فروشه هم‌تم باشه؛ البته اگه میخواین تو سبک دیگه‌ای بیلد بزنید میتونید این قانون رو نادیده بگیرید."
        }
      },
      {
        id: "economy-team-shops",
        number: "F-5",
        text: {
          en: "You're welcome to team up with other players to build a shop for multiple related items.",
          fa: "می‌تونید با بازیکن‌های دیگه همکاری کنید و یه شاپ مناسب برای چند آیتم مرتبط بسازید."
        }
      },
      {
        id: "economy-duplicate-shops",
        number: "F-6",
        text: {
          en: "Multiple shops for the same item are technically allowed but discouraged if one already exists.",
          fa: "در تئوری می‌شه چند تا شاپ (ساخته‌شده توسط چند بازیکن مختلف) برای یه آیتم داشت، ولی اگه از قبل شاپ برای آیتمی وجود داره، ساخت شاپ جدید براش توصیه نمیشه."
        }
      },
      {
        id: "economy-shopping-district-respect",
        number: "F-7",
        text: {
          en: "Respect the shopping district and other players' work — no stealing or taking items from shops without paying (pranks are still fine).",
          fa: "به منطقه‌ی شاپ و زحمت بازیکن‌های دیگه احترام بذارید، و از دزدیدن یا برداشتن آیتم از شاپ‌ها بدون پرداخت خودداری کنید (شوخی مجازه)."
        }
      },
      {
        id: "economy-visual-appeal",
        number: "F-8",
        text: {
          en: "Contribute to the district's visual appeal — a shop alone isn't 'done.' Add surroundings and infrastructure around it.",
          fa: "به زیبا شدن منطقه‌ی شاپ کمک کنید — فقط ساختن یه شاپ به معنی تمام شدن کار نیست. یکم محیط اطرافش رو هم بسازید و زیرساخت اضافه کنید."
        }
      },
      {
        id: "economy-admin",
        number: "F-9",
        text: {
          en: "If you're unsure about anything regarding your shop, check with an admin before building.",
          fa: "اگه هر نکته‌ای درباره‌ی شاپ‌تون براتون مبهمه، قبل از ساختنش با ادمین‌ها صحبت کنید."
        }
      },
      {
        id: "economy-excess",
        number: "F-10",
        text: {
          en: "Selling off your excess items is strongly encouraged — it helps other players and keeps the economy moving.",
          fa: "فروختن آیتم‌های اضافیتون به شدت توصیه می‌شه — به بقیه کمک می‌کنه و اقتصاد سرور رو فعال نگه می‌داره."
        }
      },
      {
        id: "economy-monopoly",
        number: "F-11",
        text: {
          en: "As noted in the 'Resources' section, monopolizing a single item is prohibited.",
          fa: "همون‌طور که توی بخش منابع گفته شد، انحصار یه آیتم خاص توسط یک پلیر ممنوعه."
        }
      }
    ]
  },

  {
    id: "G",
    number: "G",
    icon: null,
    title: {
      en: "PvP and Combat",
      fa: "PvP و فایت"
    },
    description: {
      en: "Some players thrive on a PvP based server. to keep this aspect involved in ours, we need to set some rules.",
      fa: "بعضی از پلیرها با سرورهای PvP حال میکنن. برای اینکه این جنبه رو توی سرورمون داشته باشیم، باید یک سری قوانین تنظیم کنیم."
    },
    rules: [
      {
        id: "pvp-consent",
        number: "G-1",
        text: {
          en: "Competitive or harsh PvP (traps, TNT, etc.) is prohibited unless both sides consent.",
          fa: "PvP رقابتی یا غیرمنتظره (Trap، TNT و غیره) ممنوعه، مگه با رضایت هر دو طرف."
        }
      },
      {
        id: "pvp-items",
        number: "G-2",
        text: {
          en: "If a prank or pvp fight ends up killing someone, make sure to save their items for them.",
          fa: "اگه شوخی‌ یا PvP باعث کشته شدن کسی شد، حتما آیتم‌هاشون رو براشون سیو بدید."
        }
      }
    ]
  },

  {
    id: "H",
    number: "H",
    icon: null,
    title: {
      en: "The Nether",
      fa: "Nether"
    },
    description: {
      en: "A nether hub is planned for the future. For now, please keep the nether clean and avoid random block vomit.",
      fa: "توی آینده یه nether hub برنامه‌ریزی و ساخته می‌شه. فعلاً لطفاً nether رو تمیز نگه دارید و از بیلد الکی با بلاک‌های زشت (😵‍💫) خودداری کنید."
    },
    rules: [

    ]
  },

  {
    id: "I",
    number: "I",
    icon: null,
    title: {
      en: "The End",
      fa: "End"
    },
    description: {
      en: "TBD.",
      fa: "هنوز مشخص نشده (TBD)."
    },
    rules: []
  },

  {
    id: "J",
    number: "J",
    icon: null,
    title: {
      en: "Technical Minecraft",
      fa: "Technical Minecraft"
    },
    description: {
      en: null,
      fa: null
    },
    rules: [
      {
        id: "technical-redstone-community",
        number: "J-1",
        text: {
          en: "Large amounts of redstone components in community areas are prohibited unless cleared with the admins.",
          fa: "انجام دادن حجم زیادی از رداستون توی مناطق عمومی ممنوعه، مگه با هماهنگی ادمین‌ها."
        }
      },
      {
        id: "technical-chunk-loaders",
        number: "J-2",
        text: {
          en: "Chunk loaders of any kind are prohibited unless cleared with the admins.",
          fa: "هر نوع چانک‌لودر ممنوعه، مگر با هماهنگی ادمین‌ها."
        }
      },
      {
        id: "technical-lag",
        number: "J-3",
        text: {
          en: "Build redstone contraptions to be lag-friendly — avoid always-on clocks and anything else that hurts server performance. Violations will be addressed.",
          fa: "سازه‌های رداستون‌تون رو طوری بسازید که به کارایی سرور آسیب نزنه — از سیستم‌های همیشه فعال (مثلا دو  observer فعال مخصوصا توی مناطق عمومی) و هر چیز دیگه‌ای که به عملکرد سرور ضربه بزنه خودداری کنید. تخلف از این مورد بررسی و بهش رسیدگی می‌شه."
        }
      }
    ]
  },

  {
    id: "K",
    number: "K",
    icon: null,
    title: {
      en: "Mods and Resource Packs",
      fa: "Mod ها و Resource Pack ها"
    },
    description: {
      en: null,
      fa: null
    },
    rules: [
      {
        id: "mods-unfair-advantage",
        number: "K-1",
        text: {
          en: "We won't force you to avoid mods or resource packs that give an unfair advantage, but we strongly encourage you not to use them at others' expense.",
          fa: "ما مجبورتون نمی‌کنیم از مادها و ریسورس‌پک‌هایی که مزیت ناعادلانه می‌دن استفاده نکنید، ولی به شدت توصیه می‌کنیم که تجربه‌ی گیم‌پلی خودتون نسبت به بقیه رو به این قیمت بهتر نکنید."
        }
      },
      {
        id: "mods-visual",
        number: "K-2",
        text: {
          en: "Visual mods and resource packs are completely fine to use.",
          fa: "استفاده از مادهای یا ریسورس‌پک‌های ظاهری کاملاً آزاده."
        }
      },
      {
        id: "mods-autoclicker",
        number: "K-3",
        text: {
          en: "Auto-clickers and other input modifiers are allowed for AFK farms and similar setups; other uses are discouraged.",
          fa: "اتوکلیکر‌ و سایر ابزارهای این چنینی برای فارم AFK و موارد مشابه مجازن؛ استفاده‌های دیگه ازشون توصیه نمی‌شه."
        }
      },
      {
        id: "mods-cheats",
        number: "K-4",
        text: {
          en: "Any type of hacked client or cheat is prohibited and is strictly dealt with.",
          fa: "هر نوع hack ممنوعه و به شدت باهاش برخورد میشه."
        }
      }
    ]
  },

  {
    id: "L",
    number: "L",
    icon: null,
    title: {
      en: "Chat",
      fa: "چت"
    },
    description: {
      en: null,
      fa: null
    },
    rules: [
      {
        id: "chat-respect",
        number: "L-1",
        text: {
          en: "Keep chat respectful — harassment of any kind is not allowed.",
          fa: "توی چت، لطفاً محترمانه رفتار کنید. هر نوع آزار و اذیت و توهین به دیگران ممنوعه."
        }
      },
      {
        id: "chat-spam",
        number: "L-2",
        text: {
          en: "Avoid spamming, advertising, or drama as much as possible.",
          fa: "تا حد امکان از اسپم کردن، تبلیغات و بحث بی‌ارزش خودداری کنید."
        }
      },
      {
        id: "chat-disturbance",
        number: "L-3",
        text: {
          en: "Respect players who don't want to be disturbed, especially via the voicechat mod.",
          fa: "به حریم پلیرهایی که مزاحمتی نمیخوان احترام بگذارین. مخصوصاً با وجود VoiceChat."
        }
      }
    ]
  },

  {
    id: "M",
    number: "M",
    icon: null,
    title: {
      en: "Multiplayer Co-op",
      fa: "همکاری پلیرها"
    },
    description: {
      en: null,
      fa: null
    },
    rules: [
      {
        id: "coop-teams",
        number: "M-1",
        text: {
          en: "Teams are a thing! Cooperate with others, build something useful, and grow the world together.",
          fa: "تیم‌ها بخشی از سرورن! با بقیه همکاری کنید، چیزای مفید بسازید و ورلد رو با هم شکل بدید."
        }
      },
      {
        id: "coop-ownership",
        number: "M-2",
        text: {
          en: "If you're building something with another player, agree on ownership of the project beforehand.",
          fa: "اگه با یه بازیکن دیگه چیزی می‌سازید، باید از قبل درباره‌ی مالکیت بیلد یا پروژه صحبت کنید."
        }
      },
      {
        id: "coop-shared-project",
        number: "M-3",
        text: {
          en: "If you share a project with someone, both of you may use it according to your agreement.",
          fa: "اگه یه پروژه رو با کسی به اشتراک بذارید، هر دوتون طبق توافق بین‌تون می‌تونید ازش استفاده کنید."
        }
      },
      {
        id: "coop-shop-profits",
        number: "M-4",
        text: {
          en: "If you share a shop with someone, profits must be split between you.",
          fa: "اگه یه شاپ رو با کسی مشترک دارید، باید سود رو باهاش تقسیم کنید."
        }
      },
      {
        id: "coop-project-shares",
        number: "M-5",
        text: {
          en: "Project shares can be bought and sold.",
          fa: "سهم پروژه‌ها رو می‌شه خرید و به فروش گذاشت."
        }
      }
    ]
  },

  {
    id: "N",
    number: "N",
    icon: null,
    title: {
      en: "Events, Games, etc.",
      fa: "رویدادها، بازی‌ها و غیره"
    },
    description: {
      en: "A gaming district for minigames is planned. Until then — start thinking through your ideas! See you soon.",
      fa: "توی آینده‌ی نزدیک یه منطقه‌ی مشخص برای مینی‌گیم‌هاتون ساخته می‌شه. تا اون موقع، فکراتون رو جمع کنید و ایده‌هاتون رو پرورش بدید! به‌زودی می‌بینیمتون."
    },
    rules: []
  },



    // rules: [
    //   {
    //     id: "",
    //     number: "",
    //     title: { en: "", fa: "" },
    //     parts: {
    //       en: [
    //         { text: "YOU CAN BUILD ANY FARM YOU LIKE", emphasis: true },
    //         { text: ", but if you don't need a material in a mass quantity, or if someone else already has the item you're looking for in stock, it's recommended you don't spend time making another farm for it." }
    //       ],
    //       fa: [
    //         { text: "شما می‌توانید هر مزرعه‌ای که دوست دارید بسازید", emphasis: true },
    //         { text: "، اما اگر به مقدار زیادی از یک ماده نیاز ندارید، یا شخص دیگری همان آیتم را در انبار خود دارد، توصیه می‌شود وقت خود را برای ساخت مزرعه‌ی دیگری صرف نکنید." }
    //       ]
];

/* -------------------------------------------------------------------------
   PLUGINS & DATAPACKS
   type: "plugin" | "datapack"
   Fields: name, type, description, link, icon (optional), version (optional)
   ------------------------------------------------------------------------- */
const plugins = [
  {
    id: "example-plugin-one",
    name: "ExamplePlugin",
    type: "plugin",
    icon: null,
    version: "1.20.x",
    description: {
      en: "Example placeholder entry — describe what this plugin actually does on your server here.",
      fa: "نمونه‌ی جای‌گزین — در اینجا توضیح دهید این پلاگین دقیقاً چه کاری روی سرور شما انجام می‌دهد."
    },
    link: "#"
  },
  {
    id: "example-datapack-one",
    name: "ExampleDatapack",
    type: "datapack",
    icon: null,
    version: "1.20.x",
    description: {
      en: "Example placeholder entry — swap this out for a real datapack running on the server.",
      fa: "نمونه‌ی جای‌گزین — این مورد را با یک دیتاپک واقعی که روی سرور اجرا می‌شود جایگزین کنید."
    },
    link: "#"
  },
  {
    id: "example-plugin-two",
    name: "AnotherPlugin",
    type: "plugin",
    icon: null,
    version: "1.20.x",
    description: {
      en: "A second placeholder entry, so the grid layout can be previewed with more than one card.",
      fa: "یک نمونه‌ی دوم، تا چیدمان شبکه‌ای با بیش از یک کارت قابل پیش‌نمایش باشد."
    },
    link: "#"
  }
];

/* -------------------------------------------------------------------------
   RECOMMENDED MODS
   side: "client" | "server" | "both"
   Fields: name, description, icon (optional), version, side, link
   ------------------------------------------------------------------------- */
const mods = [
  {
    id: "example-mod-one",
    name: "ExampleMod",
    icon: null,
    version: "1.20.x",
    side: "client",
    description: {
      en: "Example placeholder entry — replace with a mod you actually recommend, and why.",
      fa: "نمونه‌ی جای‌گزین — این را با مادی که واقعاً پیشنهاد می‌کنید و دلیل آن جایگزین کنید."
    },
    link: "#"
  },
  {
    id: "example-mod-two",
    name: "AnotherMod",
    icon: null,
    version: "1.20.x",
    side: "both",
    description: {
      en: "A second placeholder entry to preview the card grid with a client + server mod.",
      fa: "یک نمونه‌ی دوم برای پیش‌نمایش چیدمان کارت‌ها با مادی که هم سمت کلاینت و هم سرور است."
    },
    link: "#"
  }
];

/* -------------------------------------------------------------------------
   SITE CONFIG
   Replace serverName and logo path with your real values.
   ------------------------------------------------------------------------- */
const SITE_CONFIG = {
  serverName: { en: "i Craft", fa: "آی‌کرفت" },
  logo: "assets/logo.png"
};
