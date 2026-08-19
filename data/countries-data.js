/* ============================================================
   countries-data.js - بيانات الدول (مفاتيح الهاتف + قواعد الأرقام + البنوك)
   ============================================================ */
const COUNTRIES_DATA = [
  {
    name: "اليمن",
    code: "+967",
    flag: "🇾🇪",
    phoneDigits: 9,
    phonePrefix: ["77", "78", "70", "73", "71"],
    phonePlaceholder: "7XXXXXXXX",
    banks: [
      "بنك الكريمي للتمويل الأصغر",
      "كاك بنك",
      "بنك اليمن والكويت",
      "البنك الأهلي اليمني",
      "بنك التسليف التعاوني والزراعي",
      "بنك اليمن الدولي",
      "بنك سبأ الإسلامي",
      "بنك التضامن الإسلامي",
      "بنك اليمن والبحرين الشامل"
    ]
  },
  {
    name: "السعودية",
    code: "+966",
    flag: "🇸🇦",
    phoneDigits: 9,
    phonePrefix: ["5"],
    phonePlaceholder: "5XXXXXXXX",
    banks: [
      "بنك الراجحي",
      "البنك الأهلي السعودي",
      "بنك الإنماء",
      "بنك الرياض",
      "البنك السعودي الفرنسي",
      "البنك العربي الوطني",
      "بنك ساب (SABB)",
      "بنك البلاد",
      "بنك الجزيرة",
      "STC Pay"
    ]
  },
  {
    name: "الإمارات",
    code: "+971",
    flag: "🇦🇪",
    phoneDigits: 9,
    phonePrefix: ["5"],
    phonePlaceholder: "5XXXXXXXX",
    banks: [
      "بنك أبوظبي الأول (FAB)",
      "بنك الإمارات دبي الوطني",
      "بنك المشرق",
      "بنك أبوظبي التجاري",
      "بنك دبي الإسلامي",
      "بنك الشارقة الإسلامي",
      "بنك رأس الخيمة الوطني"
    ]
  },
  {
    name: "مصر",
    code: "+20",
    flag: "🇪🇬",
    phoneDigits: 10,
    phonePrefix: ["10", "11", "12", "15"],
    phonePlaceholder: "1XXXXXXXXX",
    banks: [
      "البنك الأهلي المصري",
      "بنك مصر",
      "بنك القاهرة",
      "البنك التجاري الدولي (CIB)",
      "بنك الإسكندرية",
      "بنك QNB الأهلي",
      "فودافون كاش",
      "اتصالات كاش",
      "بنك فيصل الإسلامي"
    ]
  },
  {
    name: "الأردن",
    code: "+962",
    flag: "🇯🇴",
    phoneDigits: 9,
    phonePrefix: ["7"],
    phonePlaceholder: "7XXXXXXXX",
    banks: [
      "البنك العربي",
      "بنك الإسكان للتجارة والتمويل",
      "البنك الأهلي الأردني",
      "بنك الأردن",
      "البنك الإسلامي الأردني",
      "بنك القاهرة عمان",
      "البنك العربي الإسلامي الدولي"
    ]
  },
  {
    name: "العراق",
    code: "+964",
    flag: "🇮🇶",
    phoneDigits: 10,
    phonePrefix: ["7"],
    phonePlaceholder: "7XXXXXXXXX",
    banks: [
      "مصرف الرافدين",
      "مصرف الرشيد",
      "المصرف التجاري العراقي",
      "مصرف الشرق الأوسط العراقي",
      "مصرف كردستان الدولي",
      "زين كاش",
      "آسيا حوالة"
    ]
  },
  {
    name: "الكويت",
    code: "+965",
    flag: "🇰🇼",
    phoneDigits: 8,
    phonePrefix: ["5", "6", "9"],
    phonePlaceholder: "XXXXXXXX",
    banks: [
      "بنك الكويت الوطني (NBK)",
      "بيت التمويل الكويتي",
      "بنك بوبيان",
      "البنك التجاري الكويتي",
      "بنك الخليج",
      "البنك الأهلي المتحد"
    ]
  },
  {
    name: "البحرين",
    code: "+973",
    flag: "🇧🇭",
    phoneDigits: 8,
    phonePrefix: ["3"],
    phonePlaceholder: "3XXXXXXX",
    banks: [
      "بنك البحرين الوطني",
      "بنك البحرين والكويت",
      "بنك البحرين الإسلامي",
      "مصرف السلام",
      "بنك ABC"
    ]
  },
  {
    name: "عُمان",
    code: "+968",
    flag: "🇴🇲",
    phoneDigits: 8,
    phonePrefix: ["7", "9"],
    phonePlaceholder: "XXXXXXXX",
    banks: [
      "بنك مسقط",
      "البنك الوطني العماني",
      "بنك ظفار",
      "بنك صحار الدولي",
      "البنك الأهلي العماني"
    ]
  },
  {
    name: "قطر",
    code: "+974",
    flag: "🇶🇦",
    phoneDigits: 8,
    phonePrefix: ["3", "5", "6", "7"],
    phonePlaceholder: "XXXXXXXX",
    banks: [
      "بنك قطر الوطني (QNB)",
      "البنك التجاري القطري",
      "مصرف قطر الإسلامي",
      "بنك الدوحة",
      "مصرف الريان"
    ]
  },
  {
    name: "لبنان",
    code: "+961",
    flag: "🇱🇧",
    phoneDigits: 8,
    phonePrefix: ["3", "7", "8"],
    phonePlaceholder: "XXXXXXXX",
    banks: [
      "بنك عودة",
      "بنك لبنان والمهجر (BLOM)",
      "بنك بيبلوس",
      "فرنسبنك",
      "بنك بيروت"
    ]
  },
  {
    name: "سوريا",
    code: "+963",
    flag: "🇸🇾",
    phoneDigits: 9,
    phonePrefix: ["9"],
    phonePlaceholder: "9XXXXXXXX",
    banks: [
      "المصرف التجاري السوري",
      "بنك بيمو السعودي الفرنسي",
      "بنك سوريا والمهجر",
      "البنك الإسلامي السوري",
      "بنك الشرق"
    ]
  },
  {
    name: "السودان",
    code: "+249",
    flag: "🇸🇩",
    phoneDigits: 9,
    phonePrefix: ["9"],
    phonePlaceholder: "9XXXXXXXX",
    banks: [
      "بنك الخرطوم",
      "بنك أم درمان الوطني",
      "بنك فيصل الإسلامي",
      "البنك السعودي السوداني",
      "بنكك (Bankak)"
    ]
  },
  {
    name: "ليبيا",
    code: "+218",
    flag: "🇱🇾",
    phoneDigits: 9,
    phonePrefix: ["9"],
    phonePlaceholder: "9XXXXXXXX",
    banks: [
      "مصرف الجمهورية",
      "المصرف التجاري الوطني",
      "مصرف الوحدة",
      "المصرف الأهلي",
      "مصرف الصحاري"
    ]
  },
  {
    name: "المغرب",
    code: "+212",
    flag: "🇲🇦",
    phoneDigits: 9,
    phonePrefix: ["6", "7"],
    phonePlaceholder: "6XXXXXXXX",
    banks: [
      "التجاري وفا بنك",
      "البنك الشعبي المركزي",
      "بنك إفريقيا (BMCE)",
      "القرض الفلاحي",
      "CIH بنك"
    ]
  },
  {
    name: "الجزائر",
    code: "+213",
    flag: "🇩🇿",
    phoneDigits: 9,
    phonePrefix: ["5", "6", "7"],
    phonePlaceholder: "XXXXXXXXX",
    banks: [
      "بنك الجزائر الخارجي (BEA)",
      "القرض الشعبي الجزائري (CPA)",
      "بنك التنمية المحلية (BDL)",
      "الصندوق الوطني للتوفير (CNEP)",
      "بريد الجزائر"
    ]
  },
  {
    name: "تونس",
    code: "+216",
    flag: "🇹🇳",
    phoneDigits: 8,
    phonePrefix: ["2", "5", "9"],
    phonePlaceholder: "XXXXXXXX",
    banks: [
      "الشركة التونسية للبنك (STB)",
      "بنك الأمان",
      "البنك الوطني الفلاحي",
      "بنك تونس العربي الدولي (BIAT)",
      "البريد التونسي"
    ]
  },
  {
    name: "فلسطين",
    code: "+970",
    flag: "🇵🇸",
    phoneDigits: 9,
    phonePrefix: ["5", "9"],
    phonePlaceholder: "5XXXXXXXX",
    banks: [
      "بنك فلسطين",
      "البنك الإسلامي العربي",
      "البنك الوطني",
      "بنك القدس"
    ]
  },
  {
    name: "الصومال",
    code: "+252",
    flag: "🇸🇴",
    phoneDigits: 8,
    phonePrefix: ["6", "7"],
    phonePlaceholder: "XXXXXXXX",
    banks: [
      "بنك سلام الصومالي",
      "البنك الدولي الصومالي (IBS)",
      "بنك داهبشيل",
      "Premier Bank"
    ]
  },
  {
    name: "موريتانيا",
    code: "+222",
    flag: "🇲🇷",
    phoneDigits: 8,
    phonePrefix: ["2", "3", "4"],
    phonePlaceholder: "XXXXXXXX",
    banks: [
      "البنك الموريتاني للتجارة الدولية (BMCI)",
      "بنك موريتانيا (BMD)",
      "الشركة العامة الموريتانية للبنوك (SGBM)"
    ]
  },
  {
    name: "جيبوتي",
    code: "+253",
    flag: "🇩🇯",
    phoneDigits: 8,
    phonePrefix: ["7"],
    phonePlaceholder: "7XXXXXXX",
    banks: [
      "البنك الدولي لجيبوتي",
      "بنك الإنماء والتجارة",
      "بنك سلام جيبوتي"
    ]
  }
];
