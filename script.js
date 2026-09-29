/* ============================================================
   KeyMaster — Keyboard Learning Platform
   QISM 1/4: Tarjimalar + State + Yordamchi funksiyalar
   ============================================================ */

/* ==================== 1. TARJIMALAR ==================== */
const TRANSLATIONS = {
  uz: {
    'nav.home': 'Bosh sahifa',
    'nav.explorer': 'Klaviatura',
    'nav.shortcuts': 'Shortcutlar',
    'nav.typing': 'Mashq',
    'nav.quiz': 'Test',
    'nav.progress': 'Progress',
    'footer.tagline': "Klaviaturani o'rganishning eng oson yo'li",

    'home.title1': "Klaviaturani",
    'home.title2': "0 dan professionalgacha",
    'home.text': "Barcha tugmalarni, shortcutlarni o'rganing. Typing mashqlari va testlar orqali bilimingizni mustahkamlang.",
    'home.start': "Boshlash",
    'home.learn': "Klaviaturani ko'rish",
    'features.title': "Nega KeyMaster?",
    'features.subtitle': "Interaktiv o'rganish tajribasi",
    'feature1.title': "Interaktiv klaviatura",
    'feature1.text': "Har bir tugmani bosib, uning vazifasini o'rganing.",
    'feature2.title': "Shortcutlar",
    'feature2.text': "Foydali klaviatura shortcutlarini yodlang.",
    'feature3.title': "Typing mashqi",
    'feature3.text': "Tez va aniq yozishni mashq qiling.",
    'feature4.title': "Test va progress",
    'feature4.text': "Bilimingizni sinang va natijalarni kuzating.",

    'explorer.title': "Klaviatura Explorer",
    'explorer.subtitle': "Har bir tugmani bosing va uning vazifasini bilib oling",
    'explorer.click': "Tugma tanlanmagan",
    'explorer.hint': "Tugma haqida ma'lumot shu yerda ko'rinadi",

    'shortcuts.title': "Klaviatura Shortcutlari",
    'shortcuts.subtitle': "Vaqtingizni tejaydigan foydali kombinatsiyalar",
    'shortcuts.all': "Barchasi",
    'shortcuts.system': "Tizim",
    'shortcuts.browser': "Brauzer",
    'shortcuts.text': "Matn",
    'shortcuts.other': "Boshqa",

    'typing.title': "Typing Mashqi",
    'typing.subtitle': "Matnni iloji boricha tez va aniq yozing",
    'typing.wpm': "WPM",
    'typing.accuracy': "Aniqlik",
    'typing.time': "Vaqt",
    'typing.errors': "Xatolar",
    'typing.restart': "Qaytadan",
    'typing.focus': "Mashqni boshlash uchun matn ustiga bosing",
    'typing.newText': "Yangi matn",
    'typing.finished': "Mashq tugadi!",

    'quiz.title': "Bilim Testi",
    'quiz.subtitle': "Klaviatura bo'yicha bilimingizni sinang",
    'quiz.question': "Savol",
    'quiz.of': "dan",
    'quiz.restart': "Qaytadan boshlash",
    'quiz.correct': "To'g'ri!",
    'quiz.wrong': "Noto'g'ri!",
    'quiz.result': "Test natijasi",
    'quiz.youScored': "Siz to'pladingiz",
    'quiz.next': "Keyingi savol",
    'quiz.finish': "Yakunlash",

    'progress.title': "Sizning progressingiz",
    'progress.subtitle': "O'rganish jarayonini kuzatib boring",
    'progress.wpm': "Eng yaxshi WPM",
    'progress.accuracy': "Eng yaxshi aniqlik",
    'progress.quizzes': "Yakunlangan testlar",
    'progress.avgScore': "O'rtacha ball",
    'progress.reset': "Progressni tozalash",
    'progress.resetConfirm': "Progressni tozalashni xohlaysizmi?",
    'progress.resetDone': "Progress tozalandi",
    'progress.noData': "—",
  },

  en: {
    'nav.home': 'Home',
    'nav.explorer': 'Keyboard',
    'nav.shortcuts': 'Shortcuts',
    'nav.typing': 'Practice',
    'nav.quiz': 'Quiz',
    'nav.progress': 'Progress',
    'footer.tagline': "The easiest way to learn the keyboard",

    'home.title1': "Learn the keyboard",
    'home.title2': "from 0 to professional",
    'home.text': "Explore every key, master shortcuts, practice typing, and test your knowledge.",
    'home.start': "Get Started",
    'home.learn': "View Keyboard",
    'features.title': "Why KeyMaster?",
    'features.subtitle': "Interactive learning experience",
    'feature1.title': "Interactive keyboard",
    'feature1.text': "Click any key and learn what it does.",
    'feature2.title': "Shortcuts",
    'feature2.text': "Memorize useful keyboard shortcuts.",
    'feature3.title': "Typing practice",
    'feature3.text': "Practice typing fast and accurate.",
    'feature4.title': "Quiz & progress",
    'feature4.text': "Test yourself and track your results.",

    'explorer.title': "Keyboard Explorer",
    'explorer.subtitle': "Click any key to see what it does",
    'explorer.click': "No key selected",
    'explorer.hint': "Key info will appear here",

    'shortcuts.title': "Keyboard Shortcuts",
    'shortcuts.subtitle': "Useful combinations to save your time",
    'shortcuts.all': "All",
    'shortcuts.system': "System",
    'shortcuts.browser': "Browser",
    'shortcuts.text': "Text",
    'shortcuts.other': "Other",

    'typing.title': "Typing Practice",
    'typing.subtitle': "Type the text as fast and accurately as possible",
    'typing.wpm': "WPM",
    'typing.accuracy': "Accuracy",
    'typing.time': "Time",
    'typing.errors': "Errors",
    'typing.restart': "Restart",
    'typing.focus': "Click on the text to start practicing",
    'typing.newText': "New Text",
    'typing.finished': "Practice complete!",

    'quiz.title': "Knowledge Quiz",
    'quiz.subtitle': "Test your keyboard knowledge",
    'quiz.question': "Question",
    'quiz.of': "of",
    'quiz.restart': "Restart",
    'quiz.correct': "Correct!",
    'quiz.wrong': "Wrong!",
    'quiz.result': "Quiz Result",
    'quiz.youScored': "You scored",
    'quiz.next': "Next Question",
    'quiz.finish': "Finish",

    'progress.title': "Your Progress",
    'progress.subtitle': "Track your learning journey",
    'progress.wpm': "Best WPM",
    'progress.accuracy': "Best Accuracy",
    'progress.quizzes': "Quizzes Taken",
    'progress.avgScore': "Average Score",
    'progress.reset': "Reset Progress",
    'progress.resetConfirm': "Do you want to reset your progress?",
    'progress.resetDone': "Progress has been reset",
    'progress.noData': "—",
  }
};


/* ==================== 2. STATE ==================== */
const state = {
  lang: localStorage.getItem('km_lang') || 'uz',
  page: 'home',
  shortcutFilter: 'all',
};


/* ==================== 3. YORDAMCHI FUNKSIYALAR ==================== */

// Tarjima olish
function t(key) {
  if (!TRANSLATIONS[state.lang]) return key;
  return TRANSLATIONS[state.lang][key] || key;
}

// querySelector qisqartmasi
function $(sel, parent) {
  return (parent || document).querySelector(sel);
}

// querySelectorAll — massivga o'girish
function $$(sel, parent) {
  return Array.prototype.slice.call((parent || document).querySelectorAll(sel));
}

// LocalStorage ga saqlash
function saveProgress(key, value) {
  localStorage.setItem('km_' + key, JSON.stringify(value));
}

// LocalStorage dan o'qish
function loadProgress(key, fallback) {
  const raw = localStorage.getItem('km_' + key);
  if (raw === null) return fallback;
  try {
    return JSON.parse(raw);
  } catch (e) {
    return fallback;
  }
}

// Toast xabar
function showToast(msg) {
  const el = $('#toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('is-visible');
  clearTimeout(el._timer);
  el._timer = setTimeout(function () {
    el.classList.remove('is-visible');
  }, 2000);
}

// Massivni aralashtirish
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a;
}

// Tasodifiy element tanlash
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Sahifa o'zgarishida eski event listenerlarni olib tashlash uchun
let activeCleanups = [];

function addCleanup(fn) {
  activeCleanups.push(fn);
}

function runCleanups() {
  activeCleanups.forEach(function (fn) {
    try { fn(); } catch (e) { /* ignore */ }
  });
  activeCleanups = [];
}

/* ============================================================
   QISM 1 TUGADI ✅
   Keyingi qismni so'rash uchun "davom et" deb yozing.
   ============================================================ */

   /* ============================================================
   QISM 2/4: Klaviatura + Shortcuts + Typing + Quiz ma'lumotlari
   ============================================================ */


/* ==================== 4. KLAVIATURA LAYOUT ==================== */
const KEYBOARD_ROWS = [
  // 1-qator: F tugmalari
  [
    { code: 'Escape', label: 'Esc', width: 'wide', uz: "Bekor qilish / Yopish", en: "Cancel / Close" },
    { code: 'F1', label: 'F1', uz: "Yordam oynasi", en: "Help" },
    { code: 'F2', label: 'F2', uz: "Nomini o'zgartirish", en: "Rename" },
    { code: 'F3', label: 'F3', uz: "Qidiruv", en: "Find" },
    { code: 'F4', label: 'F4', uz: "Manzil qatori", en: "Address bar" },
    { code: 'F5', label: 'F5', uz: "Sahifani yangilash", en: "Refresh" },
    { code: 'F6', label: 'F6', uz: "Manzil qatoriga o'tish", en: "Focus address bar" },
    { code: 'F7', label: 'F7', uz: "Kursor rejimi", en: "Caret browsing" },
    { code: 'F8', label: 'F8', uz: "Xavfsiz rejim", en: "Safe mode" },
    { code: 'F9', label: 'F9', uz: "Yorqinlik", en: "Brightness" },
    { code: 'F10', label: 'F10', uz: "Menyu paneli", en: "Menu bar" },
    { code: 'F11', label: 'F11', uz: "To'liq ekran", en: "Fullscreen" },
    { code: 'F12', label: 'F12', uz: "Developer tools", en: "Developer tools" },
  ],
  // 2-qator: Raqamlar
  [
    { code: 'Backquote', label: '`', uz: "Teskari apostrof", en: "Backquote" },
    { code: 'Digit1', label: '1', uz: "Raqam 1", en: "Digit 1" },
    { code: 'Digit2', label: '2', uz: "Raqam 2", en: "Digit 2" },
    { code: 'Digit3', label: '3', uz: "Raqam 3", en: "Digit 3" },
    { code: 'Digit4', label: '4', uz: "Raqam 4", en: "Digit 4" },
    { code: 'Digit5', label: '5', uz: "Raqam 5", en: "Digit 5" },
    { code: 'Digit6', label: '6', uz: "Raqam 6", en: "Digit 6" },
    { code: 'Digit7', label: '7', uz: "Raqam 7", en: "Digit 7" },
    { code: 'Digit8', label: '8', uz: "Raqam 8", en: "Digit 8" },
    { code: 'Digit9', label: '9', uz: "Raqam 9", en: "Digit 9" },
    { code: 'Digit0', label: '0', uz: "Raqam 0", en: "Digit 0" },
    { code: 'Minus', label: '-', uz: "Minus", en: "Minus" },
    { code: 'Equal', label: '=', uz: "Teng", en: "Equal" },
    { code: 'Backspace', label: 'Backspace', width: 'wider', uz: "Orqaga o'chirish", en: "Backspace" },
  ],
  // 3-qator: QWERTY
  [
    { code: 'Tab', label: 'Tab', width: 'wide', uz: "Tabulatsiya", en: "Tab" },
    { code: 'KeyQ', label: 'Q', uz: "Q harfi", en: "Letter Q" },
    { code: 'KeyW', label: 'W', uz: "W harfi", en: "Letter W" },
    { code: 'KeyE', label: 'E', uz: "E harfi", en: "Letter E" },
    { code: 'KeyR', label: 'R', uz: "R harfi", en: "Letter R" },
    { code: 'KeyT', label: 'T', uz: "T harfi", en: "Letter T" },
    { code: 'KeyY', label: 'Y', uz: "Y harfi", en: "Letter Y" },
    { code: 'KeyU', label: 'U', uz: "U harfi", en: "Letter U" },
    { code: 'KeyI', label: 'I', uz: "I harfi", en: "Letter I" },
    { code: 'KeyO', label: 'O', uz: "O harfi", en: "Letter O" },
    { code: 'KeyP', label: 'P', uz: "P harfi", en: "Letter P" },
    { code: 'BracketLeft', label: '[', uz: "Ochiluvchi qavs", en: "Left bracket" },
    { code: 'BracketRight', label: ']', uz: "Yopiluvchi qavs", en: "Right bracket" },
    { code: 'Backslash', label: '\\', uz: "Teskari slash", en: "Backslash" },
  ],
  // 4-qator: ASDF
  [
    { code: 'CapsLock', label: 'Caps', width: 'wider', uz: "Katta harflar", en: "Caps Lock" },
    { code: 'KeyA', label: 'A', uz: "A harfi", en: "Letter A" },
    { code: 'KeyS', label: 'S', uz: "S harfi", en: "Letter S" },
    { code: 'KeyD', label: 'D', uz: "D harfi", en: "Letter D" },
    { code: 'KeyF', label: 'F', uz: "F harfi (asosiy)", en: "Letter F (home)" },
    { code: 'KeyG', label: 'G', uz: "G harfi", en: "Letter G" },
    { code: 'KeyH', label: 'H', uz: "H harfi", en: "Letter H" },
    { code: 'KeyJ', label: 'J', uz: "J harfi (asosiy)", en: "Letter J (home)" },
    { code: 'KeyK', label: 'K', uz: "K harfi", en: "Letter K" },
    { code: 'KeyL', label: 'L', uz: "L harfi", en: "Letter L" },
    { code: 'Semicolon', label: ';', uz: "Nuqtali vergul", en: "Semicolon" },
    { code: 'Quote', label: "'", uz: "Apostrof", en: "Apostrophe" },
    { code: 'Enter', label: 'Enter', width: 'widest', uz: "Tasdiqlash", en: "Enter" },
  ],
  // 5-qator: ZXCV
  [
    { code: 'ShiftLeft', label: 'Shift', width: 'widest', uz: "Katta harf", en: "Shift" },
    { code: 'KeyZ', label: 'Z', uz: "Z harfi", en: "Letter Z" },
    { code: 'KeyX', label: 'X', uz: "X harfi", en: "Letter X" },
    { code: 'KeyC', label: 'C', uz: "C harfi", en: "Letter C" },
    { code: 'KeyV', label: 'V', uz: "V harfi", en: "Letter V" },
    { code: 'KeyB', label: 'B', uz: "B harfi", en: "Letter B" },
    { code: 'KeyN', label: 'N', uz: "N harfi", en: "Letter N" },
    { code: 'KeyM', label: 'M', uz: "M harfi", en: "Letter M" },
    { code: 'Comma', label: ',', uz: "Vergul", en: "Comma" },
    { code: 'Period', label: '.', uz: "Nuqta", en: "Period" },
    { code: 'Slash', label: '/', uz: "Slash", en: "Slash" },
    { code: 'ShiftRight', label: 'Shift', width: 'widest', uz: "Katta harf (o'ng)", en: "Shift (right)" },
  ],
  // 6-qator: Ctrl, Alt, Space
  [
    { code: 'ControlLeft', label: 'Ctrl', width: 'wider', uz: "Boshqaruv", en: "Control" },
    { code: 'MetaLeft', label: 'Win', width: 'wide', uz: "Windows", en: "Windows" },
    { code: 'AltLeft', label: 'Alt', width: 'wide', uz: "Alternativ", en: "Alt" },
    { code: 'Space', label: 'Space', width: 'space', uz: "Bo'sh joy", en: "Space" },
    { code: 'AltRight', label: 'Alt', width: 'wide', uz: "Alt (o'ng)", en: "Alt (right)" },
    { code: 'MetaRight', label: 'Win', width: 'wide', uz: "Windows (o'ng)", en: "Windows (right)" },
    { code: 'ContextMenu', label: 'Menu', width: 'wide', uz: "Kontekst menyu", en: "Context menu" },
    { code: 'ControlRight', label: 'Ctrl', width: 'wider', uz: "Ctrl (o'ng)", en: "Ctrl (right)" },
  ],
];


/* ==================== 5. SHORTCUTS MA'LUMOTLARI ==================== */
const SHORTCUTS = [
  // Tizim
  { keys: ['Ctrl', 'C'], cat: 'system', uz: "Nusxa olish", en: "Copy" },
  { keys: ['Ctrl', 'V'], cat: 'system', uz: "Joylashtirish", en: "Paste" },
  { keys: ['Ctrl', 'X'], cat: 'system', uz: "Kesib olish", en: "Cut" },
  { keys: ['Ctrl', 'Z'], cat: 'system', uz: "Orqaga qaytarish", en: "Undo" },
  { keys: ['Ctrl', 'Y'], cat: 'system', uz: "Qayta bajarish", en: "Redo" },
  { keys: ['Ctrl', 'A'], cat: 'system', uz: "Hammasini tanlash", en: "Select all" },
  { keys: ['Ctrl', 'S'], cat: 'system', uz: "Saqlash", en: "Save" },
  { keys: ['Ctrl', 'P'], cat: 'system', uz: "Chop etish", en: "Print" },
  // Brauzer
  { keys: ['Ctrl', 'T'], cat: 'browser', uz: "Yangi tab ochish", en: "New tab" },
  { keys: ['Ctrl', 'W'], cat: 'browser', uz: "Tabni yopish", en: "Close tab" },
  { keys: ['Ctrl', 'N'], cat: 'browser', uz: "Yangi oyna ochish", en: "New window" },
  { keys: ['Ctrl', 'Shift', 'T'], cat: 'browser', uz: "Yopilgan tabni qayta ochish", en: "Reopen closed tab" },
  { keys: ['Ctrl', 'L'], cat: 'browser', uz: "Manzil qatoriga o'tish", en: "Focus address bar" },
  { keys: ['Ctrl', 'D'], cat: 'browser', uz: "Xatcho'pga qo'shish", en: "Bookmark page" },
  { keys: ['Ctrl', 'R'], cat: 'browser', uz: "Sahifani yangilash", en: "Refresh page" },
  { keys: ['F5'], cat: 'browser', uz: "Sahifani yangilash", en: "Refresh page" },
  // Matn
  { keys: ['Ctrl', 'B'], cat: 'text', uz: "Qalin matn", en: "Bold text" },
  { keys: ['Ctrl', 'I'], cat: 'text', uz: "Kursiv matn", en: "Italic text" },
  { keys: ['Ctrl', 'U'], cat: 'text', uz: "Tagiga chizish", en: "Underline" },
  { keys: ['Home'], cat: 'text', uz: "Qator boshiga", en: "Go to line start" },
  { keys: ['End'], cat: 'text', uz: "Qator oxiriga", en: "Go to line end" },
  { keys: ['Ctrl', 'Home'], cat: 'text', uz: "Hujjat boshiga", en: "Go to document start" },
  { keys: ['Ctrl', 'End'], cat: 'text', uz: "Hujjat oxiriga", en: "Go to document end" },
  // Boshqa
  { keys: ['Alt', 'Tab'], cat: 'other', uz: "Oynalarni almashtirish", en: "Switch windows" },
  { keys: ['Alt', 'F4'], cat: 'other', uz: "Oynani yopish", en: "Close window" },
  { keys: ['Win', 'D'], cat: 'other', uz: "Ish stolini ko'rsatish", en: "Show desktop" },
  { keys: ['Win', 'E'], cat: 'other', uz: "Fayl Explorer ochish", en: "File Explorer" },
  { keys: ['Win', 'L'], cat: 'other', uz: "Kompyuterni bloklash", en: "Lock computer" },
  { keys: ['Ctrl', 'Shift', 'Esc'], cat: 'other', uz: "Task Manager ochish", en: "Task Manager" },
];


/* ==================== 6. TYPING MATNLARI ==================== */
const TYPING_TEXTS = {
  uz: [
    "Kompyuter klaviaturasi bilan ishlashni o'rganish uchun har kuni mashq qilish kerak.",
    "Tez yozish siri bu doimiy mashq va to'g'ri barmoqlar joylashuvidir.",
    "Klaviaturada har bir tugmaning o'z vazifasi bor va ularni bilish juda muhim.",
    "Barmoqlaringizni to'g'ri joylashtirib yozsangiz, tezlik va aniqlik oshadi.",
    "Har kuni o'n daqiqa mashq qilsangiz bir oyda katta natijaga erishasiz.",
  ],
  en: [
    "Learning to use a computer keyboard requires daily practice and patience.",
    "The secret of fast typing is consistent practice and correct finger placement.",
    "Every key on the keyboard has its own function and knowing them is essential.",
    "If you place your fingers correctly, both speed and accuracy will improve.",
    "Ten minutes of practice every day will give you amazing results in a month.",
  ]
};


/* ==================== 7. QUIZ SAVOLLARI ==================== */
// BARCHA savollar BIR XIL formatda: options — obyekt { uz: [...], en: [...] }
const QUIZ_QUESTIONS = [
  {
    q: { uz: "Nusxa olish uchun qaysi shortcut ishlatiladi?", en: "Which shortcut is used to copy?" },
    options: {
      uz: ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + Z"],
      en: ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + Z"]
    },
    correct: 1
  },
  {
    q: { uz: "F5 tugmasi nima qiladi?", en: "What does the F5 key do?" },
    options: {
      uz: ["Sahifani yangilaydi", "Sahifani yopadi", "Yangi tab ochadi", "Chop etadi"],
      en: ["Refreshes page", "Closes page", "Opens new tab", "Prints"]
    },
    correct: 0
  },
  {
    q: { uz: "Qaysi tugma barcha matnni tanlaydi?", en: "Which shortcut selects all text?" },
    options: {
      uz: ["Ctrl + S", "Ctrl + A", "Ctrl + F", "Ctrl + D"],
      en: ["Ctrl + S", "Ctrl + A", "Ctrl + F", "Ctrl + D"]
    },
    correct: 1
  },
  {
    q: { uz: "Enter tugmasi nima qiladi?", en: "What does the Enter key do?" },
    options: {
      uz: ["Belgini o'chiradi", "Yangi qatorga o'tadi", "Menyu ochadi", "Katta harf yozadi"],
      en: ["Deletes character", "Moves to new line", "Opens menu", "Types capital"]
    },
    correct: 1
  },
  {
    q: { uz: "Kesib olish (cut) uchun qaysi shortcut?", en: "Which shortcut for cut?" },
    options: {
      uz: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + P"],
      en: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + P"]
    },
    correct: 2
  },
  {
    q: { uz: "Alt + Tab nima qiladi?", en: "What does Alt + Tab do?" },
    options: {
      uz: ["Oynalarni almashtiradi", "Tabni yopadi", "Faylni saqlaydi", "Yordam ochadi"],
      en: ["Switches windows", "Closes tab", "Saves file", "Opens help"]
    },
    correct: 0
  },
  {
    q: { uz: "Caps Lock tugmasi nima qiladi?", en: "What does Caps Lock do?" },
    options: {
      uz: ["Katta harflar rejimini yoqadi", "Klaviaturani bloklaydi", "Ekranni o'chiradi", "Ovozni boshqaradi"],
      en: ["Turns on capitals", "Locks keyboard", "Turns off screen", "Controls volume"]
    },
    correct: 0
  },
  {
    q: { uz: "Sahifadan so'z topish uchun qaysi tugma?", en: "Which shortcut finds text on page?" },
    options: {
      uz: ["Ctrl + F", "Ctrl + S", "Ctrl + R", "Ctrl + N"],
      en: ["Ctrl + F", "Ctrl + S", "Ctrl + R", "Ctrl + N"]
    },
    correct: 0
  },
  {
    q: { uz: "Space tugmasi nima qiladi?", en: "What does the Space key do?" },
    options: {
      uz: ["Yangi qator qo'shadi", "Bo'sh joy qo'yadi", "Matnni o'chiradi", "Katta harf yozadi"],
      en: ["Adds new line", "Adds a space", "Deletes text", "Types capital"]
    },
    correct: 1
  },
  {
    q: { uz: "Backspace tugmasi nima qiladi?", en: "What does Backspace do?" },
    options: {
      uz: ["Oldingi belgini o'chiradi", "Keyingi belgini o'chiradi", "Yangi qator qo'shadi", "Nusxa oladi"],
      en: ["Deletes previous char", "Deletes next char", "Adds new line", "Copies"]
    },
    correct: 0
  },
];


/* ============================================================
   QISM 2 TUGADI ✅
   Endi "davom et" deb yozing — QISM 3 ni yuboraman
   (sahifa render funksiyalari: Home, Explorer, Shortcuts)
   ============================================================ */

   /* ============================================================
   QISM 3/4: Sahifa render funksiyalari
   Home, Explorer, Shortcuts
   ============================================================ */


/* ==================== 8. HOME SAHIFASI ==================== */
function renderHome() {
  const app = $('#app');
  const previewKeys = 'Q W E R T Y U I O P A S D F G H J K L Z X C V B N M'.split(' ');

  app.innerHTML = `
    <section class="hero">
      <div>
        <h1 class="hero__title">
          ${t('home.title1')} <span>${t('home.title2')}</span>
        </h1>
        <p class="hero__text">${t('home.text')}</p>
        <div class="hero__actions">
          <button class="btn btn--primary" data-go="typing">${t('home.start')} →</button>
          <button class="btn btn--ghost" data-go="explorer">${t('home.learn')}</button>
        </div>
      </div>
      <div class="hero__preview">
        ${previewKeys.map(function (k) { return '<span>' + k + '</span>'; }).join('')}
      </div>
    </section>

    <section style="margin-top:64px">
      <h2 class="section-title">${t('features.title')}</h2>
      <p class="section-subtitle">${t('features.subtitle')}</p>
      <div class="features">
        <div class="feature">
          <div class="feature__icon">⌨️</div>
          <h3 class="feature__title">${t('feature1.title')}</h3>
          <p class="feature__text">${t('feature1.text')}</p>
        </div>
        <div class="feature">
          <div class="feature__icon">⚡</div>
          <h3 class="feature__title">${t('feature2.title')}</h3>
          <p class="feature__text">${t('feature2.text')}</p>
        </div>
        <div class="feature">
          <div class="feature__icon">🎯</div>
          <h3 class="feature__title">${t('feature3.title')}</h3>
          <p class="feature__text">${t('feature3.text')}</p>
        </div>
        <div class="feature">
          <div class="feature__icon">📊</div>
          <h3 class="feature__title">${t('feature4.title')}</h3>
          <p class="feature__text">${t('feature4.text')}</p>
        </div>
      </div>
    </section>
  `;

  // Sahifa o'tish tugmalari
  $$('[data-go]', app).forEach(function (btn) {
    btn.addEventListener('click', function () {
      navigate(btn.getAttribute('data-go'));
    });
  });
}


/* ==================== 9. EXPLORER SAHIFASI ==================== */
function renderExplorer() {
  const app = $('#app');

  app.innerHTML = `
    <h1 class="section-title">${t('explorer.title')}</h1>
    <p class="section-subtitle">${t('explorer.subtitle')}</p>

    <div class="keyboard-wrap">
      <div class="keyboard" id="keyboard"></div>
    </div>

    <div class="key-info" id="keyInfo">
      <div class="key-info__title">
        <span class="key-info__name" id="keyName">${t('explorer.click')}</span>
      </div>
      <p class="key-info__desc" id="keyDesc">${t('explorer.hint')}</p>
    </div>
  `;

  const keyboard = $('#keyboard');

  // Har bir qator uchun tugmalar yaratamiz
  KEYBOARD_ROWS.forEach(function (row) {
    const rowEl = document.createElement('div');
    rowEl.className = 'kb-row';

    row.forEach(function (keyData) {
      const keyEl = document.createElement('button');
      keyEl.className = 'kb-key';
      if (keyData.width) {
        keyEl.classList.add('kb-key--' + keyData.width);
      }
      keyEl.textContent = keyData.label;
      keyEl.setAttribute('data-code', keyData.code);
      keyEl.setAttribute('type', 'button');

      keyEl.addEventListener('click', function () {
        showKeyInfo(keyData);
      });

      rowEl.appendChild(keyEl);
    });

    keyboard.appendChild(rowEl);
  });

  // Real klaviaturadan tugma bosilsa ham ishlaydi
  function onKeydown(e) {
    if (state.page !== 'explorer') return;

    // KEYBOARD_ROWS dan mos keladigan tugmani topamiz
    let found = null;
    for (let i = 0; i < KEYBOARD_ROWS.length; i++) {
      for (let j = 0; j < KEYBOARD_ROWS[i].length; j++) {
        if (KEYBOARD_ROWS[i][j].code === e.code) {
          found = KEYBOARD_ROWS[i][j];
          break;
        }
      }
      if (found) break;
    }

    if (found) {
      showKeyInfo(found);
      // Tab va F tugmalari default harakatini to'xtatamiz
      if (found.code === 'Tab' || found.code.indexOf('F') === 0) {
        e.preventDefault();
      }
    }
  }

  document.addEventListener('keydown', onKeydown);

  // Sahifa o'zgarganda listener ni olib tashlaymiz
  addCleanup(function () {
    document.removeEventListener('keydown', onKeydown);
  });
}


/* ---------- Explorer: tugma ma'lumotini ko'rsatish ---------- */
function showKeyInfo(keyData) {
  const nameEl = $('#keyName');
  const descEl = $('#keyDesc');
  if (!nameEl || !descEl) return;

  // Barcha aktiv tugmalarni olib tashlaymiz
  $$('.kb-key').forEach(function (k) {
    k.classList.remove('is-active');
  });

  // Yangi aktiv tugmani belgilaymiz
  const active = $('.kb-key[data-code="' + keyData.code + '"]');
  if (active) {
    active.classList.add('is-active');
  }

  nameEl.textContent = keyData.label;
  descEl.textContent = keyData[state.lang] || keyData.uz;
}


/* ==================== 10. SHORTCUTS SAHIFASI ==================== */
function renderShortcuts() {
  const app = $('#app');

  app.innerHTML = `
    <h1 class="section-title">${t('shortcuts.title')}</h1>
    <p class="section-subtitle">${t('shortcuts.subtitle')}</p>

    <div class="filter-bar" id="filterBar">
      <button class="filter-chip is-active" data-filter="all">${t('shortcuts.all')}</button>
      <button class="filter-chip" data-filter="system">${t('shortcuts.system')}</button>
      <button class="filter-chip" data-filter="browser">${t('shortcuts.browser')}</button>
      <button class="filter-chip" data-filter="text">${t('shortcuts.text')}</button>
      <button class="filter-chip" data-filter="other">${t('shortcuts.other')}</button>
    </div>

    <div class="shortcut-grid" id="shortcutGrid"></div>
  `;

  // Filtr tugmalariga listener
  $$('.filter-chip', app).forEach(function (chip) {
    chip.addEventListener('click', function () {
      state.shortcutFilter = chip.getAttribute('data-filter');

      $$('.filter-chip', app).forEach(function (c) {
        c.classList.remove('is-active');
      });
      chip.classList.add('is-active');

      renderShortcutCards();
    });
  });

  // Kartalarni chizamiz
  renderShortcutCards();
}


/* ---------- Shortcut kartalarini chizish ---------- */
function renderShortcutCards() {
  const grid = $('#shortcutGrid');
  if (!grid) return;

  // Filtr bo'yicha tanlaymiz
  const filtered = state.shortcutFilter === 'all'
    ? SHORTCUTS
    : SHORTCUTS.filter(function (s) {
        return s.cat === state.shortcutFilter;
      });

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-dim)">—</p>';
    return;
  }

  grid.innerHTML = filtered.map(function (sc) {
    const keysHtml = sc.keys.map(function (k) {
      return '<span class="kbd">' + k + '</span>';
    }).join('');

    const desc = state.lang === 'uz' ? sc.uz : sc.en;

    return `
      <div class="shortcut-card">
        <div class="shortcut-card__keys">${keysHtml}</div>
        <div class="shortcut-card__title">${desc}</div>
      </div>
    `;
  }).join('');
}


/* ============================================================
   QISM 3 TUGADI ✅
   Endi "davom et" deb yozing — QISM 4 ni yuboraman
   (Typing, Quiz, Progress, Router va init)
   ============================================================ */

/* ============================================================
   QISM 4/4: Typing, Quiz, Progress, Router va init
   ============================================================ */


/* ==================== 11. TYPING SAHIFASI ==================== */
// Typing holati
const typingState = {
  text: '',
  index: 0,
  errors: 0,
  startTime: 0,
  timerId: null,
  started: false,
  finished: false,
};

function renderTyping() {
  const app = $('#app');

  // Yangi matn tanlaymiz
  const texts = TYPING_TEXTS[state.lang] || TYPING_TEXTS.uz;
  typingState.text = pickRandom(texts);
  typingState.index = 0;
  typingState.errors = 0;
  typingState.startTime = 0;
  typingState.started = false;
  typingState.finished = false;
  typingState.timerId = null;

  app.innerHTML = `
    <h1 class="section-title">${t('typing.title')}</h1>
    <p class="section-subtitle">${t('typing.subtitle')}</p>

    <div class="typing-stats">
      <div class="stat">
        <div class="stat__value" id="statWpm">0</div>
        <div class="stat__label">${t('typing.wpm')}</div>
      </div>
      <div class="stat">
        <div class="stat__value" id="statAcc">100%</div>
        <div class="stat__label">${t('typing.accuracy')}</div>
      </div>
      <div class="stat">
        <div class="stat__value" id="statTime">0.0</div>
        <div class="stat__label">${t('typing.time')}</div>
      </div>
      <div class="stat">
        <div class="stat__value" id="statErrors">0</div>
        <div class="stat__label">${t('typing.errors')}</div>
      </div>
    </div>

    <div class="typing-text" id="typingText" tabindex="0"></div>

    <div style="display:flex;gap:12px;flex-wrap:wrap">
      <button class="btn btn--ghost" id="typingRestart">${t('typing.restart')}</button>
      <button class="btn btn--primary" id="typingNew">${t('typing.newText')}</button>
    </div>
  `;

  renderTypingText();

  // Restart tugmasi
  $('#typingRestart').addEventListener('click', function () {
    resetTyping();
  });

  // Yangi matn tugmasi
  $('#typingNew').addEventListener('click', function () {
    typingState.text = pickRandom(TYPING_TEXTS[state.lang] || TYPING_TEXTS.uz);
    resetTyping();
  });

  // Fokus berish
  const textEl = $('#typingText');
  textEl.focus();

  textEl.addEventListener('click', function () {
    textEl.focus();
  });

  // Klaviatura hodisalari
  function onKeydown(e) {
    if (state.page !== 'typing') return;

    // Tab, Ctrl kabi tugmalarni o'tkazib yuboramiz (F5, Ctrl+R va h.k.)
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    if (e.key === 'Tab' || e.key === 'Shift' || e.key === 'CapsLock' ||
        e.key === 'Control' || e.key === 'Alt' || e.key === 'Meta' ||
        e.key === 'Escape' || e.key === 'ArrowUp' || e.key === 'ArrowDown' ||
        e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      return;
    }

    if (typingState.finished) return;

    if (e.key === 'Backspace') {
      e.preventDefault();
      if (typingState.index > 0) {
        typingState.index--;
        renderTypingText();
      }
      return;
    }

    if (e.key.length !== 1) return; // faqat bitta belgi

    e.preventDefault();

    // Boshlanish vaqtini belgilash
    if (!typingState.started) {
      typingState.started = true;
      typingState.startTime = Date.now();
      startTimer();
    }

    const expected = typingState.text[typingState.index];
    const typed = e.key;

    if (typed === expected) {
      typingState.index++;
      renderTypingText();

      // Tugadimi?
      if (typingState.index >= typingState.text.length) {
        finishTyping();
      }
    } else {
      typingState.errors++;
      updateTypingStats();
      // Xato animatsiyasi
      const chars = $$('.char', textEl);
      const current = chars[typingState.index];
      if (current) {
        current.classList.add('char--wrong');
        setTimeout(function () {
          current.classList.remove('char--wrong');
        }, 200);
      }
    }
  }

  document.addEventListener('keydown', onKeydown);
  addCleanup(function () {
    document.removeEventListener('keydown', onKeydown);
    if (typingState.timerId) {
      clearInterval(typingState.timerId);
      typingState.timerId = null;
    }
  });
}


/* ---------- Typing matnni HTML ko'rinishida chizish ---------- */
function renderTypingText() {
  const textEl = $('#typingText');
  if (!textEl) return;

  const text = typingState.text;
  const idx = typingState.index;

  const html = text.split('').map(function (ch, i) {
    let cls = 'char';
    if (i < idx) cls += ' char--correct';
    if (i === idx) cls += ' char--current';
    // Bo'shliqni ko'rinadigan qilish uchun
    const display = ch === ' ' ? '&nbsp;' : escapeHtml(ch);
    return '<span class="' + cls + '">' + display + '</span>';
  }).join('');

  textEl.innerHTML = html;
  updateTypingStats();
}


/* ---------- HTML escape ---------- */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}


/* ---------- Typing statistikasini yangilash ---------- */
function updateTypingStats() {
  const wpmEl = $('#statWpm');
  const accEl = $('#statAcc');
  const timeEl = $('#statTime');
  const errEl = $('#statErrors');
  if (!wpmEl || !accEl || !timeEl || !errEl) return;

  const elapsedMs = typingState.started ? Date.now() - typingState.startTime : 0;
  const minutes = elapsedMs / 60000;
  const correctChars = typingState.index;
  const totalTyped = typingState.index + typingState.errors;

  // WPM = (belgilar / 5) / daqiqa
  const wpm = minutes > 0 ? Math.round((correctChars / 5) / minutes) : 0;

  // Aniqlik
  const accuracy = totalTyped > 0
    ? Math.max(0, Math.round((correctChars / totalTyped) * 100))
    : 100;

  wpmEl.textContent = wpm;
  accEl.textContent = accuracy + '%';
  timeEl.textContent = (elapsedMs / 1000).toFixed(1);
  errEl.textContent = typingState.errors;
}


/* ---------- Timer boshlash ---------- */
function startTimer() {
  if (typingState.timerId) return;
  typingState.timerId = setInterval(function () {
    if (typingState.started && !typingState.finished) {
      updateTypingStats();
    }
  }, 100);
}


/* ---------- Typing tugatildi ---------- */
function finishTyping() {
  typingState.finished = true;
  if (typingState.timerId) {
    clearInterval(typingState.timerId);
    typingState.timerId = null;
  }

  updateTypingStats();

  const elapsedMs = Date.now() - typingState.startTime;
  const minutes = elapsedMs / 60000;
  const wpm = minutes > 0 ? Math.round((typingState.text.length / 5) / minutes) : 0;
  const totalTyped = typingState.text.length + typingState.errors;
  const accuracy = totalTyped > 0
    ? Math.round((typingState.text.length / totalTyped) * 100)
    : 100;

  // Saqlaymiz
  const bestWpm = loadProgress('best_wpm', 0);
  if (wpm > bestWpm) saveProgress('best_wpm', wpm);

  const bestAcc = loadProgress('best_acc', 0);
  if (accuracy > bestAcc) saveProgress('best_acc', accuracy);

  showToast(t('typing.finished') + ' WPM: ' + wpm + ' | ' + accuracy + '%');
}


/* ---------- Typing ni qayta boshlash ---------- */
function resetTyping() {
  typingState.index = 0;
  typingState.errors = 0;
  typingState.startTime = 0;
  typingState.started = false;
  typingState.finished = false;
  if (typingState.timerId) {
    clearInterval(typingState.timerId);
    typingState.timerId = null;
  }
  renderTypingText();
}


/* ==================== 12. QUIZ SAHIFASI ==================== */
function renderQuiz() {
  const app = $('#app');

  // Quiz holatini yangilash
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnswered = false;
  state.quizQuestions = shuffle(QUIZ_QUESTIONS);

  app.innerHTML = `
    <h1 class="section-title">${t('quiz.title')}</h1>
    <p class="section-subtitle">${t('quiz.subtitle')}</p>
    <div class="quiz" id="quizContainer"></div>
  `;

  renderQuizQuestion();
}


/* ---------- Quiz savolini chizish ---------- */
function renderQuizQuestion() {
  const container = $('#quizContainer');
  if (!container) return;

  const questions = state.quizQuestions;

  // Test tugadimi?
  if (state.quizIndex >= questions.length) {
    renderQuizResult();
    return;
  }

  const current = questions[state.quizIndex];
  const options = current.options[state.lang] || current.options.uz;
  const questionText = current.q[state.lang] || current.q.uz;

  const progressPercent = Math.round((state.quizIndex / questions.length) * 100);

  container.innerHTML = `
    <div class="quiz__progress">
      <span>${t('quiz.question')} ${state.quizIndex + 1} ${t('quiz.of')} ${questions.length}</span>
      <div class="quiz__bar">
        <div class="quiz__bar-fill" style="width:${progressPercent}%"></div>
      </div>
    </div>

    <div class="quiz__question">${escapeHtml(questionText)}</div>

    <div class="quiz__options" id="quizOptions">
      ${options.map(function (opt, i) {
        return '<button class="quiz__option" data-idx="' + i + '" type="button">' + escapeHtml(opt) + '</button>';
      }).join('')}
    </div>
  `;

  state.quizAnswered = false;

  // Javob variantlariga listener
  $$('.quiz__option', container).forEach(function (btn) {
    btn.addEventListener('click', function () {
      handleQuizAnswer(parseInt(btn.getAttribute('data-idx'), 10), current);
    });
  });
}


/* ---------- Quiz javobini tekshirish ---------- */
function handleQuizAnswer(chosenIdx, current) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;

  const options = $$('.quiz__option');
  const correctIdx = current.correct;

  // To'g'ri va noto'g'ri ranglar
  options.forEach(function (btn, i) {
    btn.disabled = true;
    if (i === correctIdx) {
      btn.classList.add('is-correct');
    } else if (i === chosenIdx) {
      btn.classList.add('is-wrong');
    }
  });

  if (chosenIdx === correctIdx) {
    state.quizScore++;
    showToast(t('quiz.correct'));
  } else {
    showToast(t('quiz.wrong'));
  }

  // 1 soniyadan keyin keyingi savol
  setTimeout(function () {
    state.quizIndex++;
    renderQuizQuestion();
  }, 1000);
}


/* ---------- Quiz natijasi ---------- */
function renderQuizResult() {
  const container = $('#quizContainer');
  if (!container) return;

  const total = state.quizQuestions.length;
  const score = state.quizScore;
  const percent = Math.round((score / total) * 100);

  // Saqlaymiz
  const quizzes = loadProgress('quizzes', []);
  quizzes.push({ score: score, total: total, percent: percent, date: Date.now() });
  saveProgress('quizzes', quizzes);

  container.innerHTML = `
    <div class="quiz-result">
      <div class="quiz-result__score">${percent}%</div>
      <div class="quiz-result__label">
        ${t('quiz.youScored')} ${score} / ${total}
      </div>
      <button class="btn btn--primary" id="quizRestart" type="button">${t('quiz.restart')}</button>
    </div>
  `;

  $('#quizRestart').addEventListener('click', function () {
    renderQuiz();
  });
}


/* ==================== 13. PROGRESS SAHIFASI ==================== */
function renderProgress() {
  const app = $('#app');

  const bestWpm = loadProgress('best_wpm', 0);
  const bestAcc = loadProgress('best_acc', 0);
  const quizzes = loadProgress('quizzes', []);

  // O'rtacha ball
  let avgScore = 0;
  if (quizzes.length > 0) {
    let sum = 0;
    quizzes.forEach(function (q) { sum += q.percent; });
    avgScore = Math.round(sum / quizzes.length);
  }

  app.innerHTML = `
    <h1 class="section-title">${t('progress.title')}</h1>
    <p class="section-subtitle">${t('progress.subtitle')}</p>

    <div class="progress-grid">
      <div class="progress-card">
        <div class="progress-card__label">${t('progress.wpm')}</div>
        <div class="progress-card__value">${bestWpm > 0 ? bestWpm : t('progress.noData')}</div>
        <div class="progress">
          <div class="progress__bar" style="width:${Math.min(100, (bestWpm / 100) * 100)}%"></div>
        </div>
      </div>

      <div class="progress-card">
        <div class="progress-card__label">${t('progress.accuracy')}</div>
        <div class="progress-card__value">${bestAcc > 0 ? bestAcc + '%' : t('progress.noData')}</div>
        <div class="progress">
          <div class="progress__bar" style="width:${bestAcc}%"></div>
        </div>
      </div>

      <div class="progress-card">
        <div class="progress-card__label">${t('progress.quizzes')}</div>
        <div class="progress-card__value">${quizzes.length}</div>
        <div class="progress">
          <div class="progress__bar" style="width:${Math.min(100, quizzes.length * 10)}%"></div>
        </div>
      </div>

      <div class="progress-card">
        <div class="progress-card__label">${t('progress.avgScore')}</div>
        <div class="progress-card__value">${quizzes.length > 0 ? avgScore + '%' : t('progress.noData')}</div>
        <div class="progress">
          <div class="progress__bar" style="width:${avgScore}%"></div>
        </div>
      </div>
    </div>

    <button class="btn btn--danger" id="resetProgress" type="button">
      ${t('progress.reset')}
    </button>
  `;

  // Reset tugmasi
  $('#resetProgress').addEventListener('click', function () {
    if (!confirm(t('progress.resetConfirm'))) return;

    localStorage.removeItem('km_best_wpm');
    localStorage.removeItem('km_best_acc');
    localStorage.removeItem('km_quizzes');

    showToast(t('progress.resetDone'));
    renderProgress();
  });
}


/* ==================== 14. ROUTER (sahifalar orasida o'tish) ==================== */
const PAGE_TITLES = {
  home: 'nav.home',
  explorer: 'nav.explorer',
  shortcuts: 'nav.shortcuts',
  typing: 'nav.typing',
  quiz: 'nav.quiz',
  progress: 'nav.progress',
};

const PAGE_RENDERERS = {
  home: renderHome,
  explorer: renderExplorer,
  shortcuts: renderShortcuts,
  typing: renderTyping,
  quiz: renderQuiz,
  progress: renderProgress,
};

function navigate(page) {
  // Noto'g'ri sahifa bo'lsa — home ga
  if (!PAGE_RENDERERS[page]) {
    page = 'home';
  }

  // Eski event listenerlarni olib tashlaymiz
  runCleanups();

  state.page = page;

  // Aktiv nav linkni belgilash
  $$('.nav__link').forEach(function (link) {
    link.classList.remove('is-active');
    if (link.getAttribute('data-page') === page) {
      link.classList.add('is-active');
    }
  });

  // Sahifani chizamiz
  PAGE_RENDERERS[page]();

  // Mobil menyuni yopamiz
  const nav = $('#nav');
  if (nav) nav.classList.remove('is-open');

  // Sahifa boshiga qaytamiz
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


/* ==================== 15. TILNI ALMASHTIRISH ==================== */
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;

  state.lang = lang;
  localStorage.setItem('km_lang', lang);

  // Lang switcher matnini yangilash
  const sw = $('#langSwitch');
  if (sw) {
    sw.querySelector('.lang-switch__current').textContent = lang.toUpperCase();
  }

  // HTML lang atributini yangilash
  document.documentElement.lang = lang;

  // Statik matnlarni (data-i18n) yangilash
  $$('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  // Joriy sahifani qaytadan chizamiz
  navigate(state.page);
}


/* ==================== 16. INIT (ishga tushirish) ==================== */
function init() {
  // Sahifa yuklanganda HTML lang ni o'rnatamiz
  document.documentElement.lang = state.lang;

  // Lang switcher tugmasi
  const sw = $('#langSwitch');
  if (sw) {
    sw.querySelector('.lang-switch__current').textContent = state.lang.toUpperCase();

    sw.addEventListener('click', function () {
      const newLang = state.lang === 'uz' ? 'en' : 'uz';
      setLanguage(newLang);
    });
  }

  // Mobil menyu tugmasi
  const menuToggle = $('#menuToggle');
  const nav = $('#nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
    });
  }

  // Nav linklarga listener
  $$('.nav__link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      if (page) navigate(page);
    });
  });

  // Logo bosilsa — home
  const logo = $('.logo');
  if (logo) {
    logo.addEventListener('click', function (e) {
      e.preventDefault();
      navigate('home');
    });
  }

  // Statik matnlarni tarjima qilamiz
  $$('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  // Boshlang'ich sahifa
  navigate('home');
}


/* ==================== 17. DOM TAYYOR BO'LGACH ISHGA TUSHIRISH ==================== */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}


/* ============================================================
   ✅ QISM 4 TUGADI — LOYIHA TO'LIQ TAYYOR!
   ============================================================ */