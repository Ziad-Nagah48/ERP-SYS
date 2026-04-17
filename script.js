const TODAY = new Date().toISOString().split("T")[0];
const DAY_NAMES = [
  "الأحد",
  "الاثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
];
function getDayName(d) {
  return DAY_NAMES[new Date(d).getDay()];
}

const DB = {
  settings: {
    bizName: "نظام الإدارة",
    currency: "ج",
    address: "",
    phone: "",
    thanks: "شكراً لتعاملكم معنا",
  },
  categories: ["بقالة", "مشروبات", "ألبان", "منظفات", "خضار وفاكهة", "أخرى"],
  products: [
    {
      id: 1,
      name: "زيت زيتون 1 لتر",
      code: "P001",
      barcode: "6001234567890",
      cat: "بقالة",
      unit: "قطعة",
      buyPrice: 60,
      sellPrice: 85,
      qty: 3,
      minQty: 5,
    },
    {
      id: 2,
      name: "سكر 1 كيلو",
      code: "P002",
      barcode: "6002345678901",
      cat: "بقالة",
      unit: "كيلو",
      buyPrice: 18,
      sellPrice: 25,
      qty: 5,
      minQty: 10,
    },
    {
      id: 3,
      name: "أرز بسمتي 2 كيلو",
      code: "P003",
      barcode: "6003456789012",
      cat: "بقالة",
      unit: "كيس",
      buyPrice: 40,
      sellPrice: 55,
      qty: 12,
      minQty: 5,
    },
    {
      id: 4,
      name: "مياه معدنية 1.5 لتر",
      code: "P004",
      barcode: "6004567890123",
      cat: "مشروبات",
      unit: "قارورة",
      buyPrice: 5,
      sellPrice: 8,
      qty: 50,
      minQty: 20,
    },
    {
      id: 5,
      name: "عصير برتقال طبيعي",
      code: "P005",
      barcode: "6005678901234",
      cat: "مشروبات",
      unit: "علبة",
      buyPrice: 12,
      sellPrice: 18,
      qty: 20,
      minQty: 10,
    },
    {
      id: 6,
      name: "لبن طازج 1 لتر",
      code: "P006",
      barcode: "6006789012345",
      cat: "ألبان",
      unit: "كرتونة",
      buyPrice: 15,
      sellPrice: 22,
      qty: 2,
      minQty: 10,
    },
    {
      id: 7,
      name: "جبنة بيضاء 500 جم",
      code: "P007",
      barcode: "6007890123456",
      cat: "ألبان",
      unit: "قطعة",
      buyPrice: 32,
      sellPrice: 45,
      qty: 8,
      minQty: 5,
    },
    {
      id: 8,
      name: "صابون غسيل 2 كيلو",
      code: "P008",
      barcode: "6008901234567",
      cat: "منظفات",
      unit: "علبة",
      buyPrice: 28,
      sellPrice: 38,
      qty: 15,
      minQty: 8,
    },
    {
      id: 9,
      name: "شاي أحمر 100 ظرف",
      code: "P009",
      barcode: "6009012345678",
      cat: "أخرى",
      unit: "علبة",
      buyPrice: 22,
      sellPrice: 32,
      qty: 18,
      minQty: 5,
    },
    {
      id: 10,
      name: "كولا 330 مل",
      code: "P010",
      barcode: "6000123456789",
      cat: "مشروبات",
      unit: "علبة",
      buyPrice: 8,
      sellPrice: 12,
      qty: 40,
      minQty: 15,
    },
  ],
  customers: [
    {
      id: 1,
      name: "أحمد محمد",
      phone: "01012345678",
      address: "القاهرة",
      balance: 850,
    },
    {
      id: 2,
      name: "شركة النيل للتجارة",
      phone: "0222345678",
      address: "الجيزة",
      balance: 5200,
    },
    {
      id: 3,
      name: "محمود علي",
      phone: "01198765432",
      address: "الإسكندرية",
      balance: 0,
    },
    {
      id: 4,
      name: "سارة خالد",
      phone: "01234567890",
      address: "القاهرة",
      balance: 1400,
    },
  ],
  suppliers: [
    {
      id: 1,
      name: "شركة الأهرام للتوريدات",
      phone: "0223456789",
      address: "القاهرة",
      balance: 12000,
    },
    {
      id: 2,
      name: "مورد الأغذية المصرية",
      phone: "01012222333",
      address: "الجيزة",
      balance: 4500,
    },
  ],
  invoices: [
    {
      id: 1,
      num: "INV-0001",
      customerId: 1,
      items: [
        {
          productId: 3,
          name: "أرز بسمتي 2 كيلو",
          unit: "كيس",
          qty: 2,
          price: 55,
        },
        {
          productId: 4,
          name: "مياه معدنية 1.5 لتر",
          unit: "قارورة",
          qty: 10,
          price: 8,
        },
      ],
      discount: 0,
      subtotal: 190,
      total: 190,
      paid: 190,
      method: "cash",
      status: "paid",
      date: "2025-04-10",
      dateTime: "10/04/2025 10:30 ص",
    },
    {
      id: 2,
      num: "INV-0002",
      customerId: 2,
      items: [
        {
          productId: 1,
          name: "زيت زيتون 1 لتر",
          unit: "قطعة",
          qty: 5,
          price: 85,
        },
        {
          productId: 8,
          name: "صابون غسيل 2 كيلو",
          unit: "علبة",
          qty: 10,
          price: 38,
        },
      ],
      discount: 0,
      subtotal: 805,
      total: 805,
      paid: 200,
      method: "credit",
      status: "partial",
      date: "2025-04-11",
      dateTime: "11/04/2025 02:15 م",
    },
    {
      id: 3,
      num: "INV-0003",
      customerId: 3,
      items: [
        {
          productId: 2,
          name: "سكر 1 كيلو",
          unit: "كيلو",
          qty: 4,
          price: 25,
        },
        {
          productId: 9,
          name: "شاي أحمر 100 ظرف",
          unit: "علبة",
          qty: 4,
          price: 32,
        },
      ],
      discount: 0,
      subtotal: 228,
      total: 228,
      paid: 228,
      method: "cash",
      status: "paid",
      date: "2025-04-12",
      dateTime: "12/04/2025 11:00 ص",
    },
    {
      id: 4,
      num: "INV-0004",
      customerId: 4,
      items: [
        {
          productId: 5,
          name: "عصير برتقال طبيعي",
          unit: "علبة",
          qty: 10,
          price: 18,
        },
        {
          productId: 7,
          name: "جبنة بيضاء 500 جم",
          unit: "قطعة",
          qty: 20,
          price: 45,
        },
      ],
      discount: 50,
      subtotal: 1080,
      total: 1030,
      paid: 0,
      method: "credit",
      status: "unpaid",
      date: "2025-04-12",
      dateTime: "12/04/2025 04:45 م",
    },
  ],
  purchases: [
    {
      id: 1,
      num: "PUR-0001",
      supplierId: 1,
      total: 8500,
      paid: 8500,
      method: "cash",
      status: "paid",
      date: "2025-04-08",
    },
    {
      id: 2,
      num: "PUR-0002",
      supplierId: 2,
      total: 3200,
      paid: 1500,
      method: "credit",
      status: "partial",
      date: "2025-04-10",
    },
  ],
  users: [
    {
      id: 1,
      name: "محمد أحمد",
      username: "admin",
      pass: "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4",
      role: "admin",
      active: true,
    },
    {
      id: 2,
      name: "سارة علي",
      username: "cashier",
      pass: "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4",
      role: "cashier",
      active: true,
    },
    {
      id: 3,
      name: "أحمد حسن",
      username: "supervisor",
      pass: "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4",
      role: "supervisor",
      active: true,
    },
  ],
  returns: [],
  journalEntries: [],
  nextReturnId: 1,
  nextJournalId: 1,
  nextInvId: 5,
  nextProdId: 11,
  nextCustId: 5,
  nextSuppId: 3,
  nextPurchId: 3,
  nextUserId: 4,
  nextEmpId: 4,
  employees: [
    {
      id: 1,
      name: "محمد أحمد",
      job: "مدير المتجر",
      phone: "01012345678",
      joinDate: "2023-01-01",
      basic: 5000,
      transport: 500,
      other: 200,
      dailyDeduct: 150,
      contractType: "full",
      active: true,
    },
    {
      id: 2,
      name: "سارة علي",
      job: "كاشير",
      phone: "01198765432",
      joinDate: "2023-06-01",
      basic: 3000,
      transport: 300,
      other: 0,
      dailyDeduct: 100,
      contractType: "full",
      active: true,
    },
    {
      id: 3,
      name: "أحمد حسن",
      job: "مخزنجي",
      phone: "01234567890",
      joinDate: "2024-01-15",
      basic: 2500,
      transport: 250,
      other: 0,
      dailyDeduct: 80,
      contractType: "full",
      active: true,
    },
  ],
  attendance: [
    {
      id: 1,
      empId: 1,
      date: "2025-04-02",
      type: "absent",
      reason: "إجازة مرضية",
    },
    {
      id: 2,
      empId: 2,
      date: "2025-04-05",
      type: "late",
      reason: "تأخير ساعة",
    },
    {
      id: 3,
      empId: 3,
      date: "2025-04-08",
      type: "absent",
      reason: "ظروف شخصية",
    },
  ],
  adjustments: [
    {
      id: 1,
      empId: 1,
      type: "bonus",
      amount: 500,
      reason: "مكافأة أداء",
      month: "2025-04",
    },
    {
      id: 2,
      empId: 2,
      type: "deduction",
      amount: 200,
      reason: "خصم تأخير متكرر",
      month: "2025-04",
    },
  ],
  nextAttId: 4,
  nextAdjId: 3,
};

// ═══════════════════════════════════════════
// 🔐 SHA-256 — pure JS, يشتغل على file:// و EXE
// ═══════════════════════════════════════════
function sha256(str) {
  function rr(v, a) {
    return (v >>> a) | (v << (32 - a));
  }
  var mP = Math.pow,
    mW = mP(2, 32),
    i,
    j,
    res = "",
    words = [],
    al = str.length * 8;
  var h = sha256._h || (sha256._h = []);
  var k = sha256._k || (sha256._k = []);
  if (!k.length) {
    var ic = {};
    for (var cd = 2; k.length < 64; cd++) {
      if (!ic[cd]) {
        for (i = 0; i < 313; i += cd) ic[i] = cd;
        h[k.length] = (mP(cd, 0.5) * mW) | 0;
        k[k.length] = (mP(cd, 1 / 3) * mW) | 0;
      }
    }
  }
  str += "\x80";
  while ((str.length % 64) - 56) str += "\x00";
  for (i = 0; i < str.length; i++) {
    j = str.charCodeAt(i);
    words[i >> 2] |= j << (((3 - i) % 4) * 8);
  }
  words[words.length] = (al / mW) | 0;
  words[words.length] = al;
  for (j = 0; j < words.length; ) {
    var w = words.slice(j, (j += 16)),
      oh = h.slice(0);
    h = h.slice(0, 8);
    for (i = 0; i < 64; i++) {
      var w15 = w[i - 15],
        w2 = w[i - 2],
        a = h[0],
        e = h[4];
      var t1 =
        h[7] +
        (rr(e, 6) ^ rr(e, 11) ^ rr(e, 25)) +
        ((e & h[5]) ^ (~e & h[6])) +
        k[i] +
        (w[i] =
          i < 16
            ? w[i]
            : (w[i - 16] +
                (rr(w15, 7) ^ rr(w15, 18) ^ (w15 >>> 3)) +
                w[i - 7] +
                (rr(w2, 17) ^ rr(w2, 19) ^ (w2 >>> 10))) |
              0);
      var t2 =
        (rr(a, 2) ^ rr(a, 13) ^ rr(a, 22)) +
        ((a & h[1]) ^ (a & h[2]) ^ (h[1] & h[2]));
      h = [(t1 + t2) | 0].concat(h);
      h[4] = (h[4] + t1) | 0;
    }
    for (i = 0; i < 8; i++) h[i] = (h[i] + oh[i]) | 0;
  }
  for (i = 0; i < 8; i++)
    for (j = 3; j + 1; j--) {
      var b = (h[i] >> (j * 8)) & 255;
      res += (b < 16 ? "0" : "") + b.toString(16);
    }
  return res;
}
function hashPass(password) {
  return sha256(password);
}

// ═══════════════════════════════════════════
// 💾 نظام الحفظ والاسترجاع التلقائي (Auto-Save)
// ═══════════════════════════════════════════
function loadDB() {
  try {
    const savedData = localStorage.getItem("erp_super_data");
    if (savedData) {
      Object.assign(DB, JSON.parse(savedData));
    }
  } catch (e) {
    console.warn("loadDB error, starting fresh:", e);
  }
  // ترقية تلقائية من نسخ قديمة
  if (!DB.returns) DB.returns = [];
  if (!DB.nextReturnId) DB.nextReturnId = 1;
  if (!DB.journalEntries) DB.journalEntries = [];
  if (!DB.nextJournalId) DB.nextJournalId = 1;
  if (!DB.categories) DB.categories = [];
  if (!DB.products) DB.products = [];
  if (!DB.customers) DB.customers = [];
  if (!DB.suppliers) DB.suppliers = [];
  if (!DB.invoices) DB.invoices = [];
  if (!DB.purchases) DB.purchases = [];
  if (!DB.employees) DB.employees = [];
  if (!DB.attendance) DB.attendance = [];
  if (!DB.adjustments) DB.adjustments = [];
  if (!DB.users) DB.users = [];
  // ترقية كلمات المرور plain text → SHA-256
  DB.users.forEach((u) => {
    if (u.pass && u.pass.length !== 64) {
      u.pass = sha256(u.pass);
    }
  });
  saveDB();
}
function saveDB() {
  localStorage.setItem("erp_super_data", JSON.stringify(DB));
}
loadDB();
setInterval(saveDB, 2000);
// ═══════════════════════════════════════════

let cart = {},
  posActiveCat = "all",
  activePayment = "cash",
  editingProductId = null,
  lastInvoiceId = null;
let currentUser = null,
  currentUserRole = "admin",
  purchItems = [],
  editingSuppId = null,
  editingCustId = null;
let isDark = true,
  selectedInvIds = new Set();

const catColors = {
  بقالة: "#6c63ff",
  مشروبات: "#4ecdc4",
  ألبان: "#ffa726",
  منظفات: "#ff6b6b",
  "خضار وفاكهة": "#2ecc71",
  أخرى: "#8b92a9",
};
const avatarColors = [
  "#6c63ff",
  "#4ecdc4",
  "#ff6b6b",
  "#ffa726",
  "#2ecc71",
  "#e91e63",
];
const roleLabels = {
  admin: "مدير",
  cashier: "كاشير",
  supervisor: "مشرف",
};
const payLabels = { cash: "نقدي", credit: "آجل", transfer: "تحويل بنكي" };
const statusLabels = {
  paid: "مدفوع",
  partial: "جزئي",
  unpaid: "غير مدفوع",
};
const statusColors = {
  paid: "#27ae60",
  partial: "#f39c12",
  unpaid: "#e74c3c",
};

let selectedLoginRole = "admin"; // الدور المختار من الكروت في شاشة الدخول
function selectRole(r) {
  selectedLoginRole = r;
  document
    .querySelectorAll(".role-card")
    .forEach((c) => c.classList.remove("selected"));
  const map = {
    admin: "roleAdmin",
    supervisor: "roleSupervisor",
    cashier: "roleCashier",
  };
  const el = document.getElementById(map[r]);
  if (el) el.classList.add("selected");
}
// SHA-256 pure JS — يشتغل على file:// و EXE و كل حاجة
function doLogin() {
  try {
    const u = document.getElementById("loginUser").value.trim();
    const p = document.getElementById("loginPass").value.trim();
    if (!u || !p) {
      showToast("أدخل اسم المستخدم وكلمة المرور", "error");
      return;
    }
    const hashed = hashPass(p);
    const user = DB.users.find(
      (x) => x.username === u && x.pass === hashed && x.active,
    );
    if (!user) {
      showToast("اسم المستخدم أو كلمة المرور غير صحيحة", "error");
      return;
    }
    // التحقق من تطابق الدور المختار مع دور المستخدم الفعلي
    if (user.role !== selectedLoginRole) {
      const selectedLabel = roleLabels[selectedLoginRole] || selectedLoginRole;
      const actualLabel = roleLabels[user.role] || user.role;
      showToast(
        `غير مسموح — هذا المستخدم مسجّل كـ "${actualLabel}" وليس "${selectedLabel}"`,
        "error",
      );
      return;
    }
    currentUser = user;
    currentUserRole = user.role;
    document.getElementById("loginScreen").style.display = "none";
    const sbEl = document.getElementById("sidebar");
    sbEl.style.display = "flex";
    document.getElementById("mainArea").style.display = "flex";
    if (window.innerWidth >= 768) {
      openSidebar();
    }
    document.getElementById("sideAvatar").textContent = user.name.charAt(0);
    document.getElementById("sideUserName").textContent = user.name;
    document.getElementById("sideUserRole").textContent =
      roleLabels[user.role] || "مستخدم";
    buildNav();
    renderDashboard();
  } catch (err) {
    console.error("Login error:", err);
    showToast("خطأ أثناء تسجيل الدخول: " + err.message, "error");
  }
}
function logout() {
  document.getElementById("loginScreen").style.display = "flex";
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("mainArea").style.display = "none";
}

function toggleSidebar() {
  const sb = document.getElementById("sidebar");
  const ov = document.getElementById("sideOverlay");
  const hb = document.getElementById("hamburgerBtn");
  if (sb.classList.contains("closed")) {
    sb.classList.remove("closed");
    ov.classList.add("open");
    hb.classList.add("open");
  } else {
    closeSidebar();
  }
}
function closeSidebar() {
  const sb = document.getElementById("sidebar");
  const ov = document.getElementById("sideOverlay");
  const hb = document.getElementById("hamburgerBtn");
  sb.classList.add("closed");
  ov.classList.remove("open");
  if (hb) hb.classList.remove("open");
}
function openSidebar() {
  const sb = document.getElementById("sidebar");
  const ov = document.getElementById("sideOverlay");
  const hb = document.getElementById("hamburgerBtn");
  sb.classList.remove("closed");
  ov.classList.add("open");
  if (hb) hb.classList.add("open");
}

function toggleTheme() {
  isDark = !isDark;
  document.body.classList.toggle("light", !isDark);
  const btn = document.getElementById("themeTopBtn");
  if (btn) btn.textContent = isDark ? "🌙" : "☀️";
  localStorage.setItem("erpTheme", isDark ? "dark" : "light");
}
function initTheme() {
  const saved = localStorage.getItem("erpTheme");
  if (saved === "light") {
    isDark = false;
    document.body.classList.add("light");
    const btn = document.getElementById("themeTopBtn");
    if (btn) btn.textContent = "☀️";
  }
}

function buildNav() {
  const allItems = [
    { sec: "الرئيسية" },
    {
      id: "dashboard",
      icon: "📊",
      label: "لوحة التحكم",
      roles: ["admin", "cashier", "supervisor"],
    },
    {
      id: "pos",
      icon: "🛒",
      label: "كاشير / بيع",
      roles: ["admin", "cashier", "supervisor"],
    },
    { sec: "الإدارة", roles: ["admin", "supervisor"] },
    {
      id: "products",
      icon: "📦",
      label: "الأصناف",
      roles: ["admin", "supervisor"],
    },
    {
      id: "inventory",
      icon: "🏭",
      label: "المخزون",
      roles: ["admin", "supervisor"],
    },
    {
      id: "purchases",
      icon: "🚚",
      label: "المشتريات",
      roles: ["admin", "supervisor"],
    },
    { sec: "الحسابات", roles: ["admin", "supervisor"] },
    {
      id: "customers",
      icon: "👥",
      label: "العملاء",
      roles: ["admin", "supervisor"],
    },
    {
      id: "suppliers",
      icon: "🤝",
      label: "الموردين",
      roles: ["admin", "supervisor"],
    },
    {
      id: "invoices",
      icon: "🧾",
      label: "الفواتير",
      roles: ["admin", "cashier", "supervisor"],
    },
    {
      id: "returns",
      icon: "↩️",
      label: "المرتجعات",
      roles: ["admin", "supervisor"],
    },
    {
      id: "journal",
      icon: "📒",
      label: "القيود المحاسبية",
      roles: ["admin", "supervisor"],
    },
    { sec: "التحليل والإعدادات", roles: ["admin"] },
    { id: "reports", icon: "📈", label: "التقارير", roles: ["admin"] },
    {
      id: "hr",
      icon: "👷",
      label: "الموظفين والرواتب",
      roles: ["admin"],
    },
    { id: "users", icon: "👤", label: "المستخدمين", roles: ["admin"] },
    { id: "settings", icon: "⚙️", label: "الإعدادات", roles: ["admin"] },
  ];
  let html = "";
  allItems.forEach((item) => {
    if (item.sec) {
      if (!item.roles || item.roles.includes(currentUserRole))
        html += `<div class="nav-section">${item.sec}</div>`;
    } else if (!item.roles || item.roles.includes(currentUserRole)) {
      html += `<div class="nav-item" id="nav-${item.id}" onclick="navigate('${item.id}',this);if(window.innerWidth<768)closeSidebar();"><span class="nav-icon">${item.icon}</span><span>${item.label}</span></div>`;
    }
  });
  document.getElementById("sideNav").innerHTML = html;
  const first = document.getElementById("nav-dashboard");
  if (first) first.classList.add("active");
}

function navigate(page, el) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document
    .querySelectorAll(".nav-item")
    .forEach((n) => n.classList.remove("active"));
  const pg = document.getElementById("page-" + page);
  if (pg) pg.classList.add("active");
  if (el) el.classList.add("active");
  else {
    const n = document.getElementById("nav-" + page);
    if (n) n.classList.add("active");
  }
  const titles = {
    dashboard: "لوحة التحكم",
    pos: "كاشير / بيع",
    products: "إدارة الأصناف",
    inventory: "إدارة المخزون",
    purchases: "المشتريات",
    customers: "العملاء",
    suppliers: "الموردين",
    invoices: "الفواتير",
    returns: "المرتجعات",
    journal: "القيود المحاسبية",
    reports: "التقارير",
    settings: "الإعدادات",
    users: "إدارة المستخدمين",
    custhistory: "سجل العميل",
  };
  document.getElementById("pageTitle").textContent = titles[page] || page;
  const ab = document.getElementById("topbarActionBtn");
  const addMap = {
    products: { label: "+ صنف جديد", fn: "openProductModal()" },
    customers: { label: "+ عميل جديد", fn: "openCustModal()" },
    users: { label: "+ مستخدم جديد", fn: "openModal('userModal')" },
  };
  if (addMap[page]) {
    ab.textContent = addMap[page].label;
    ab.onclick = () => eval(addMap[page].fn);
    ab.style.display = "";
  } else ab.style.display = "none";
  const renders = {
    dashboard: renderDashboard,
    products: renderProducts,
    inventory: renderInventory,
    pos: initPOS,
    customers: renderCustomers,
    invoices: renderInvoices,
    returns: renderReturns,
    journal: renderJournal,
    suppliers: renderSuppliers,
    purchases: renderPurchases,
    users: renderUsers,
    hr: renderHR,
    settings: renderCatsList,
  };
  if (renders[page]) renders[page]();
}

function renderDashboard() {
  const todaySales = DB.invoices
    .filter((i) => i.date === TODAY)
    .reduce((s, i) => s + i.paid, 0);
  const totalDebts = DB.customers.reduce((s, c) => s + c.balance, 0);
  document.getElementById("d-sales").textContent =
    (todaySales || 12450).toLocaleString() + " " + DB.settings.currency;
  document.getElementById("d-invoices").textContent = DB.invoices.length;
  document.getElementById("d-debts").textContent =
    totalDebts.toLocaleString() + " " + DB.settings.currency;
  document.getElementById("d-profit").textContent =
    "3,780 " + DB.settings.currency;
  const days = ["سبت", "أحد", "اثن", "ثلا", "أرب", "خمي", "جمع"];
  const vals = [8200, 9500, 7100, 11200, 9800, 13400, 12450];
  const max = Math.max(...vals);
  document.getElementById("chartBars").innerHTML = days
    .map(
      (d, i) =>
        `<div class="bar-wrap"><div class="bar filled" style="height:${Math.round((vals[i] / max) * 130)}px" title="${vals[i].toLocaleString()} ج"></div><div class="bar-lbl">${d}</div></div>`,
    )
    .join("");
  const lowStock = DB.products.filter((p) => p.qty <= p.minQty);
  document.getElementById("stockAlerts").innerHTML = lowStock.length
    ? lowStock
        .map(
          (p) =>
            `<div class="alert-item"><div style="display:flex;align-items:center;gap:8px"><div class="alert-dot"></div><span style="font-size:13px;color:var(--text)">${p.name}</span></div><span style="font-size:13px;color:var(--accent3);font-weight:700">متبقي: ${p.qty} ${p.unit}</span></div>`,
        )
        .join("")
    : '<div style="color:var(--text3);font-size:13px;padding:10px 0">لا توجد تنبيهات</div>';
}

function initPOS() {
  const cats = ["all", ...DB.categories];
  document.getElementById("posCats").innerHTML = cats
    .map(
      (c) =>
        `<button class="cat-chip ${c === posActiveCat ? "active" : ""}" onclick="setPOSCat('${c}',this)">${c === "all" ? "الكل" : c}</button>`,
    )
    .join("");
  document.getElementById("posCustomer").innerHTML =
    '<option value="">-- عميل نقدي --</option>' +
    DB.customers
      .map((c) => `<option value="${c.id}">${c.name}</option>`)
      .join("");
  // Update currency label in discount row
  const discLabel = document.getElementById("discCurrLabel");
  if (discLabel) discLabel.textContent = DB.settings.currency;
  filterPosProducts();
  // Auto-focus barcode input for scanner readiness
  setTimeout(() => {
    const bc = document.getElementById("barcodeInput");
    if (bc) bc.focus();
  }, 100);
}
function setPOSCat(cat, el) {
  posActiveCat = cat;
  document
    .querySelectorAll(".cat-chip")
    .forEach((b) => b.classList.remove("active"));
  el.classList.add("active");
  filterPosProducts();
}
function filterPosProducts() {
  const q = (document.getElementById("posSearch").value || "").toLowerCase();
  const filtered = DB.products.filter(
    (p) =>
      (posActiveCat === "all" || p.cat === posActiveCat) &&
      (!q ||
        p.name.toLowerCase().includes(q) ||
        p.code.toLowerCase().includes(q) ||
        (p.barcode && p.barcode.toLowerCase().includes(q))),
  );
  document.getElementById("posGrid").innerHTML =
    filtered
      .map(
        (p) =>
          `<div class="product-tile" onclick="addToCart(${p.id})">
                  <div class="pt-color" style="background:${catColors[p.cat] || "#888"}"></div>
                  <div class="pt-name">${p.name}</div>
                  <div class="pt-price">${p.sellPrice} ${DB.settings.currency}</div>
                  <div class="pt-unit">${p.unit} · مخزون: ${p.qty}</div>
                  ${p.barcode ? `<div style="font-size:10px;color:var(--text3);font-family:monospace;margin-top:4px">🔲 ${p.barcode}</div>` : ""}
                </div>`,
      )
      .join("") ||
    '<div style="color:var(--text3);padding:20px;font-size:13px">لا توجد منتجات</div>';
}

// ═══════════════════════════════════════════
// BARCODE SCANNER FUNCTIONS
// ═══════════════════════════════════════════
let barcodeBuffer = "";
let barcodeTimer = null;

function handleBarcodeInput() {
  // Clear feedback when user is typing
  const fb = document.getElementById("barcodeFeedback");
  if (fb) fb.style.display = "none";
}

function scanBarcode() {
  const input = document.getElementById("barcodeInput");
  if (!input) return;
  const bc = input.value.trim();
  if (!bc) return;

  // Add pulse animation to input
  input.classList.add("barcode-scan-pulse");
  setTimeout(() => input.classList.remove("barcode-scan-pulse"), 400);

  // Search by barcode field, then by code as fallback
  const p = DB.products.find(
    (x) => (x.barcode && x.barcode === bc) || x.code === bc,
  );

  if (p) {
    addToCart(p.id);
    showBarcodeFeedback(
      true,
      `✅ تمت الإضافة: ${p.name} — ${p.sellPrice} ${DB.settings.currency}`,
    );
    flashProduct(p.id);
  } else {
    showBarcodeFeedback(false, `❌ لم يُعثر على منتج بالباركود: "${bc}"`);
  }

  // Clear the input and refocus for next scan
  input.value = "";
  setTimeout(() => input.focus(), 80);
}

function showBarcodeFeedback(success, msg) {
  const fb = document.getElementById("barcodeFeedback");
  if (!fb) return;
  fb.textContent = msg;
  fb.style.display = "block";
  fb.style.background = success
    ? "rgba(46,204,113,0.15)"
    : "rgba(231,76,60,0.15)";
  fb.style.color = success ? "var(--success)" : "var(--danger)";
  fb.style.border = `1px solid ${success ? "var(--success)" : "var(--danger)"}`;
  clearTimeout(fb._timer);
  fb._timer = setTimeout(() => (fb.style.display = "none"), 2500);
}

function flashProduct(id) {
  // Find the product tile and briefly highlight it
  const tiles = document.querySelectorAll(".product-tile");
  tiles.forEach((tile) => {
    if (tile.getAttribute("onclick") === `addToCart(${id})`) {
      tile.style.transition = "all 0.1s";
      tile.style.background = "rgba(78,205,196,0.3)";
      tile.style.borderColor = "var(--accent2)";
      setTimeout(() => {
        tile.style.background = "";
        tile.style.borderColor = "";
      }, 600);
    }
  });
}

// Global barcode scanner listener — detects fast typing from handheld scanner
// Scanners type all chars within ~50ms then send Enter
(function () {
  let globalBuf = "";
  let globalTimer = null;
  document.addEventListener("keydown", (e) => {
    // Only activate if POS page is visible and barcode input is NOT focused
    const posPage = document.getElementById("page-pos");
    if (!posPage || !posPage.classList.contains("active")) return;
    const barcodeEl = document.getElementById("barcodeInput");
    if (document.activeElement === barcodeEl) return;
    // Ignore modifier keys
    if (e.ctrlKey || e.altKey || e.metaKey) return;

    if (e.key === "Enter") {
      if (globalBuf.length >= 3) {
        // Route to barcode input and trigger scan
        if (barcodeEl) {
          barcodeEl.value = globalBuf;
          scanBarcode();
        }
      }
      globalBuf = "";
      clearTimeout(globalTimer);
    } else if (e.key.length === 1) {
      globalBuf += e.key;
      clearTimeout(globalTimer);
      // If no Enter comes within 100ms, it's manual typing — ignore
      globalTimer = setTimeout(() => {
        globalBuf = "";
      }, 100);
    }
  });
})();
function addToCart(id) {
  const p = DB.products.find((x) => x.id === id);
  if (!p) return;
  const inCart = cart[id] ? cart[id].cartQty : 0;
  if (inCart >= p.qty) {
    showToast(`⚠️ لا يوجد مخزون كافي — المتوفر: ${p.qty} ${p.unit}`, "error");
    return;
  }
  if (cart[id]) cart[id].cartQty++;
  else cart[id] = { ...p, cartQty: 1, itemDisc: 0 };
  renderCart();
}
function changeCartQty(id, d) {
  if (!cart[id]) return;
  if (d > 0) {
    const p = DB.products.find((x) => x.id === id);
    if (p && cart[id].cartQty >= p.qty) {
      showToast(`⚠️ الحد الأقصى المتوفر: ${p.qty} ${p.unit}`, "error");
      return;
    }
  }
  cart[id].cartQty += d;
  if (cart[id].cartQty <= 0) delete cart[id];
  renderCart();
}
function removeFromCart(id) {
  delete cart[id];
  renderCart();
}
function clearCart() {
  cart = {};
  renderCart();
}
function renderCart() {
  const items = Object.values(cart);
  document.getElementById("cartCountBadge").textContent = items.length + " صنف";
  document.getElementById("checkoutBtn").disabled = !items.length;
  if (!items.length) {
    document.getElementById("cartBody").innerHTML =
      `<div class="cart-empty-msg">
              <div style="font-size:32px;margin-bottom:8px">🛒</div>
              <div>اضغط على منتج أو امسح الباركود</div>
              <div style="font-size:11px;margin-top:4px;color:var(--text3)">لإضافة أصناف للفاتورة</div>
            </div>`;
    calcTotals();
    return;
  }
  document.getElementById("cartBody").innerHTML = items
    .map((item) => {
      const lineTotal = item.cartQty * item.sellPrice - (item.itemDisc || 0);
      return `<div class="cart-row" style="flex-wrap:wrap;gap:6px">
              <div style="flex:1;min-width:120px">
                <div class="cr-name">${item.name}</div>
                <div class="cr-sub">${item.sellPrice} ${DB.settings.currency}/${item.unit}</div>
              </div>
              <div class="qty-box">
                <button class="qty-btn" onclick="changeCartQty(${item.id},-1)">−</button>
                <span class="qty-val">${item.cartQty}</span>
                <button class="qty-btn" onclick="changeCartQty(${item.id},1)">+</button>
              </div>
              <div style="display:flex;align-items:center;gap:4px">
                <span style="font-size:11px;color:var(--text3)">خصم:</span>
                <input type="number" min="0" value="${item.itemDisc || 0}"
                  style="width:54px;padding:3px 6px;background:var(--bg3);border:1px solid var(--border);border-radius:6px;color:var(--text);font-size:12px;font-family:Cairo,sans-serif;outline:none"
                  oninput="cart[${item.id}].itemDisc=Math.max(0,parseFloat(this.value)||0);calcTotals()"
                />
              </div>
              <div class="cr-total" style="color:${lineTotal < 0 ? "var(--danger)" : "var(--accent2)"}">
                ${lineTotal.toFixed(2)} ${DB.settings.currency}
              </div>
              <button class="del-x" onclick="removeFromCart(${item.id})">×</button>
            </div>`;
    })
    .join("");
  calcTotals();
}
function calcTotals() {
  const items = Object.values(cart);
  const sub = items.reduce((s, i) => s + i.cartQty * i.sellPrice, 0);
  const itemDiscTotal = items.reduce((s, i) => s + (i.itemDisc || 0), 0);
  const globalDisc =
    parseFloat(document.getElementById("discInput").value) || 0;
  const total = Math.max(0, sub - itemDiscTotal - globalDisc);
  document.getElementById("subtotal").textContent =
    sub.toFixed(2) + " " + DB.settings.currency;
  document.getElementById("grandTotal").textContent =
    total.toFixed(2) + " " + DB.settings.currency;
}
function setPayment(m, el) {
  activePayment = m;
  document
    .querySelectorAll(".pay-chip")
    .forEach((b) => b.classList.remove("active"));
  el.classList.add("active");
}
function checkout() {
  const items = Object.values(cart);
  if (!items.length) return;
  const itemDiscTotal = items.reduce((s, i) => s + (i.itemDisc || 0), 0);
  const globalDisc =
    parseFloat(document.getElementById("discInput").value) || 0;
  const disc = itemDiscTotal + globalDisc;
  const sub = items.reduce((s, i) => s + i.cartQty * i.sellPrice, 0);
  const total = Math.max(0, sub - disc);
  const custId = document.getElementById("posCustomer").value;
  const cust = DB.customers.find((c) => c.id == custId);
  const num = "INV-" + String(DB.nextInvId).padStart(4, "0");
  const now = new Date();
  const inv = {
    id: DB.nextInvId++,
    num,
    customerId: custId ? parseInt(custId) : null,
    items: items.map((i) => ({
      productId: i.id,
      name: i.name,
      unit: i.unit,
      qty: i.cartQty,
      price: i.sellPrice,
      buyPrice: i.buyPrice || 0,
      itemDisc: i.itemDisc || 0,
    })),
    discount: globalDisc,
    itemDiscTotal,
    subtotal: sub,
    total,
    paid: activePayment === "credit" ? 0 : total,
    method: activePayment,
    status: activePayment === "credit" ? "unpaid" : "paid",
    date: now.toISOString().split("T")[0],
    dateTime:
      now.toLocaleDateString("ar-EG") +
      " " +
      now.toLocaleTimeString("ar-EG", {
        hour: "2-digit",
        minute: "2-digit",
      }),
  };
  DB.invoices.push(inv);
  items.forEach((i) => {
    const p = DB.products.find((x) => x.id === i.id);
    if (p) p.qty = Math.max(0, p.qty - i.cartQty);
  });
  if (custId && activePayment === "credit") {
    const c = DB.customers.find((x) => x.id == custId);
    if (c) c.balance += total;
  }
  lastInvoiceId = inv.id;
  document.getElementById("successDetails").innerHTML =
    `<strong>${num}</strong><br>الإجمالي: ${total.toFixed(2)} ${DB.settings.currency}<br>طريقة الدفع: ${payLabels[activePayment]}${cust ? "<br>العميل: " + cust.name : ""}`;
  openModal("successModal");
}
function newSale() {
  clearCart();
  document.getElementById("discInput").value = 0;
  closeModal("successModal");
}

// ═══════════════════════════════════════════
// 🖨️ محرك الطباعة الشامل (A4 + 80mm)
// ═══════════════════════════════════════════
function printInvoice(size = "a4") {
  closeModal("successModal");
  const inv = DB.invoices.find((i) => i.id === lastInvoiceId);
  if (inv) {
    document.getElementById("printArea").innerHTML = buildInvoiceHTML(inv);
    doPrint(size);
  }
}
function printInvoiceById(id) {
  const inv = DB.invoices.find((i) => i.id === id);
  if (inv) openPrintPreview(inv);
}
function openPrintPreview(inv) {
  document.getElementById("printArea").innerHTML = buildInvoiceHTML(inv);
  openModal("printPreviewModal");
}

function buildInvoiceHTML(inv) {
  const cust = DB.customers.find((c) => c.id === inv.customerId);
  const cur = DB.settings.currency;
  const itemsHtml = inv.items
    .map(
      (item) =>
        `<tr><td style="padding:9px 12px;border-bottom:1px solid #eee;font-size:13px;color:#333">${item.name || "صنف"}</td><td class="hide-80" style="padding:9px 12px;border-bottom:1px solid #eee;font-size:13px;color:#666;text-align:center">${item.unit || ""}</td><td style="padding:9px 12px;border-bottom:1px solid #eee;font-size:13px;color:#666;text-align:center">${item.qty}</td><td style="padding:9px 12px;border-bottom:1px solid #eee;font-size:13px;color:#666;text-align:center">${item.price.toFixed(2)}</td><td style="padding:9px 12px;border-bottom:1px solid #eee;font-size:13px;font-weight:600;color:#333;text-align:left">${(item.qty * item.price).toFixed(2)}</td></tr>`,
    )
    .join("");
  const discRow =
    inv.discount > 0
      ? `<tr><td colspan="3" class="tf-span" style="padding:6px 12px;font-size:13px;color:#666;text-align:right;border-bottom:1px solid #f0f0f0">الخصم:</td><td colspan="2" class="tf-val" style="padding:6px 12px;font-size:13px;font-weight:600;color:#e74c3c;text-align:left;border-bottom:1px solid #f0f0f0">- ${inv.discount.toFixed(2)} ${cur}</td></tr>`
      : "";
  const remRow =
    inv.method === "credit" && inv.paid < inv.total
      ? `<tr><td colspan="3" class="tf-span" style="padding:6px 12px;font-size:13px;color:#666;text-align:right;border-top:1px solid #eee">المدفوع:</td><td colspan="2" class="tf-val" style="padding:6px 12px;font-size:13px;font-weight:600;color:#27ae60;text-align:left;border-top:1px solid #eee">${inv.paid.toFixed(2)} ${cur}</td></tr><tr><td colspan="3" class="tf-span" style="padding:6px 12px;font-size:13px;color:#666;text-align:right">المتبقي:</td><td colspan="2" class="tf-val" style="padding:6px 12px;font-size:13px;font-weight:700;color:#e74c3c;text-align:left">${(inv.total - inv.paid).toFixed(2)} ${cur}</td></tr>`
      : "";

  return `<div class="inv-wrapper" style="font-family:'Cairo',sans-serif;direction:rtl;color:#333;margin-bottom:28px;padding-bottom:20px;border-bottom:2px dashed #ddd">
    <div class="inv-header" style="text-align:center;margin-bottom:18px;padding-bottom:14px;border-bottom:3px solid #6c63ff">
      <div class="inv-title" style="font-size:22px;font-weight:700;color:#1a1a2e;margin-bottom:2px">${DB.settings.bizName}</div>
      ${DB.settings.address ? `<div class="inv-address" style="font-size:12px;color:#888;margin-bottom:2px">${DB.settings.address}</div>` : ""}
      ${DB.settings.phone ? `<div class="inv-phone" style="font-size:12px;color:#888">📞 ${DB.settings.phone}</div>` : ""}
    </div>
    <div class="inv-meta" style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px">
      <div>
        <div class="inv-num" style="font-size:20px;font-weight:700;color:#6c63ff">${inv.num}</div>
        <div class="inv-date" style="font-size:12px;color:#999;margin-top:2px">${inv.dateTime || inv.date}</div>
        <div class="inv-day hide-80" style="font-size:12px;color:#888">${getDayName(inv.date)}</div>
      </div>
      <div style="text-align:left">
        <span class="inv-status" style="background:${statusColors[inv.status]}20;color:${statusColors[inv.status]};padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;border:1px solid ${statusColors[inv.status]}40">${statusLabels[inv.status]}</span>
        <div class="inv-method" style="font-size:12px;color:#888;margin-top:4px;text-align:center">${payLabels[inv.method] || inv.method}</div>
      </div>
    </div>
    ${cust ? `<div class="inv-cust" style="background:#f8f8ff;border-radius:8px;padding:12px 14px;margin-bottom:16px;border-right:3px solid #6c63ff"><div class="hide-80" style="font-size:11px;color:#999;margin-bottom:3px">بيانات العميل</div><div style="font-size:14px;font-weight:600;color:#1a1a2e">${cust.name}</div>${cust.phone ? `<div style="font-size:12px;color:#666">${cust.phone}</div>` : ""}</div>` : ""}
    <table class="inv-table" style="width:100%;border-collapse:collapse;margin-bottom:0;border-radius:8px 8px 0 0;overflow:hidden">
      <thead><tr style="background:linear-gradient(135deg,#6c63ff,#8b7ff5)"><th style="padding:10px 12px;font-size:12px;color:white;text-align:right;font-weight:600">الصنف</th><th class="hide-80" style="padding:10px 12px;font-size:12px;color:white;text-align:center;font-weight:600">الوحدة</th><th style="padding:10px 12px;font-size:12px;color:white;text-align:center;font-weight:600">الكمية</th><th style="padding:10px 12px;font-size:12px;color:white;text-align:center;font-weight:600">السعر</th><th style="padding:10px 12px;font-size:12px;color:white;text-align:left;font-weight:600">الإجمالي</th></tr></thead>
      <tbody>${itemsHtml}</tbody>
    </table>
    <table class="inv-totals" style="width:100%;border-collapse:collapse;background:#f9f9f9;border-radius:0 0 8px 8px;overflow:hidden">
      <tr><td colspan="3" class="tf-span" style="padding:8px 12px;font-size:13px;color:#666;text-align:right;border-bottom:1px solid #eee">المجموع الفرعي:</td><td colspan="2" class="tf-val" style="padding:8px 12px;font-size:13px;font-weight:600;color:#333;text-align:left;border-bottom:1px solid #eee">${(inv.subtotal || inv.total).toFixed(2)} ${cur}</td></tr>
      ${discRow}
      <tr style="background:#6c63ff10"><td colspan="3" class="tf-span" style="padding:12px 12px;font-size:15px;font-weight:700;color:#1a1a2e;text-align:right">الإجمالي الكلي:</td><td colspan="2" class="tf-val" style="padding:12px 12px;font-size:18px;font-weight:700;color:#6c63ff;text-align:left">${inv.total.toFixed(2)} ${cur}</td></tr>
      ${remRow}
    </table>
    <div class="inv-footer" style="text-align:center;margin-top:20px;padding-top:14px;border-top:1px dashed #ddd">
      <div class="hide-80" style="font-size:20px;margin-bottom:6px">🙏</div>
      <div style="font-size:14px;color:#6c63ff;font-weight:600">${DB.settings.thanks}</div>
      <div style="font-size:11px;color:#bbb;margin-top:6px">نظام إدارة ERP/POS</div>
    </div>
  </div>`;
}

function getPrintStyles(size) {
  if (size === "80mm") {
    return `
      @page { margin: 0; size: 80mm auto; }
      body { width: 75mm; margin: 0 auto; padding: 5mm 2mm; font-family: 'Cairo', sans-serif; direction: rtl; color: #000; background: #fff; }
      .inv-wrapper { border: none !important; margin: 0 !important; padding: 0 !important; page-break-after: always; }
      .inv-header { border-bottom: 2px dashed #000 !important; margin-bottom: 8px !important; padding-bottom: 8px !important; }
      .inv-title { font-size: 16px !important; color: #000 !important; }
      .inv-address, .inv-phone { font-size: 11px !important; color: #000 !important; }
      .inv-num { font-size: 14px !important; color: #000 !important; }
      .inv-date { font-size: 11px !important; color: #000 !important; }
      .inv-status { border: 1px solid #000 !important; color: #000 !important; background: transparent !important; padding: 2px 6px !important; font-size: 10px !important; }
      .inv-method { font-size: 11px !important; color: #000 !important; }
      .inv-cust { background: transparent !important; border: 1px dashed #000 !important; padding: 5px !important; margin-bottom: 10px !important; }
      .inv-cust div { color: #000 !important; font-size: 12px !important; }
      .inv-table th { font-size: 11px !important; color: #000 !important; background: transparent !important; border-bottom: 1px solid #000 !important; padding: 4px 2px !important; }
      .inv-table td { font-size: 12px !important; color: #000 !important; padding: 4px 2px !important; border-bottom: 1px dashed #ccc !important; }
      .tf-span { font-size: 11px !important; color: #000 !important; padding: 4px !important; }
      .tf-val { font-size: 13px !important; color: #000 !important; padding: 4px !important; font-weight: bold !important; }
      .inv-footer { border-top: 1px dashed #000 !important; margin-top: 10px !important; padding-top: 10px !important; color: #000 !important; }
      .inv-footer div { color: #000 !important; font-size: 12px !important; }
      .hide-80 { display: none !important; }
      table { width: 100%; border-collapse: collapse; }
    `;
  } else {
    return `
      @page { margin: 10mm; size: A4; }
      body { font-family: 'Cairo', sans-serif; background: white; padding: 20px; direction: rtl; }
      .invoice-container { max-width: 800px; margin: 0 auto; }
      .inv-wrapper { page-break-after: always; }
      @media print { * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; } }
    `;
  }
}

function doPrint(size = "a4") {
  const content = document.getElementById("printArea").innerHTML;
  const w = window.open(
    "",
    "_blank",
    size === "80mm" ? "width=350,height=600" : "width=800,height=900",
  );
  w.document.write(
    `<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="UTF-8"><title>طباعة</title><link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet"><style>*{box-sizing:border-box;margin:0;padding:0;} ${getPrintStyles(size)}</style></head><body><div class="invoice-container">${content}</div><script>window.onload=function(){setTimeout(()=>{window.print();window.onafterprint=function(){window.close();}},300);}<\/script></body></html>`,
  );
  w.document.close();
}

function doBulkPrint(size = "a4") {
  const content = document.getElementById("bulkPrintArea").innerHTML;
  const w = window.open(
    "",
    "_blank",
    size === "80mm" ? "width=350,height=600" : "width=800,height=900",
  );
  w.document.write(
    `<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="UTF-8"><title>طباعة مجمعة</title><link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet"><style>*{box-sizing:border-box;margin:0;padding:0;} ${getPrintStyles(size)}</style></head><body><div class="invoice-container">${content}</div><script>window.onload=function(){setTimeout(()=>{window.print();window.onafterprint=function(){window.close();}},300);}<\/script></body></html>`,
  );
  w.document.close();
}

function printRangeInvoices(size = "a4") {
  const invs = getRangeInvoices();
  if (!invs.length) {
    showToast("لا توجد فواتير في هذا النطاق", "error");
    return;
  }
  const content = invs.map((inv) => buildInvoiceHTML(inv)).join("");
  const w = window.open(
    "",
    "_blank",
    size === "80mm" ? "width=350,height=600" : "width=800,height=900",
  );
  w.document.write(
    `<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="UTF-8"><title>طباعة فواتير</title><link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet"><style>*{box-sizing:border-box;margin:0;padding:0;} ${getPrintStyles(size)}</style></head><body><div class="invoice-container">${content}</div><script>window.onload=function(){setTimeout(()=>{window.print();window.onafterprint=function(){window.close();}},300);}<\/script></body></html>`,
  );
  w.document.close();
  closeModal("printRangeModal");
}

function getFilteredInvoices() {
  const q = (
    document.getElementById("invSearch2")
      ? document.getElementById("invSearch2").value
      : ""
  ).toLowerCase();
  const sf = document.getElementById("invStatusFilter")
    ? document.getElementById("invStatusFilter").value
    : "";
  const df = document.getElementById("invDateFrom")
    ? document.getElementById("invDateFrom").value
    : "";
  const dt = document.getElementById("invDateTo")
    ? document.getElementById("invDateTo").value
    : "";
  return DB.invoices.filter((i) => {
    const cust = DB.customers.find((c) => c.id === i.customerId);
    return (
      (!q ||
        i.num.toLowerCase().includes(q) ||
        (cust && cust.name.toLowerCase().includes(q))) &&
      (!sf || i.status === sf) &&
      (!df || i.date >= df) &&
      (!dt || i.date <= dt)
    );
  });
}
function toggleSelectAllInv(chk) {
  selectedInvIds = new Set();
  if (chk.checked)
    getFilteredInvoices().forEach((i) => selectedInvIds.add(i.id));
  document
    .querySelectorAll(".inv-chk")
    .forEach((c) => (c.checked = chk.checked));
  updateSelectedCount();
}
function toggleInvSelect(id, chk) {
  if (chk.checked) selectedInvIds.add(id);
  else selectedInvIds.delete(id);
  updateSelectedCount();
}
function updateSelectedCount() {
  document.getElementById("selectedCount").textContent =
    selectedInvIds.size + " محدد";
}
function printSelectedInvoices() {
  const ids = [...selectedInvIds];
  if (!ids.length) {
    showToast("اختر فواتير أولاً", "error");
    return;
  }
  openBulkPrint(
    ids.map((id) => DB.invoices.find((i) => i.id === id)).filter(Boolean),
    "طباعة " + ids.length + " فاتورة محددة",
  );
}
function printAllInvoices() {
  const invs = getFilteredInvoices();
  openBulkPrint(invs, "طباعة كل الفواتير (" + invs.length + ")");
}
function openBulkPrint(invs, title) {
  document.getElementById("bulkPrintTitle").textContent = title;
  document.getElementById("bulkPrintArea").innerHTML =
    '<div style="background:white;border-radius:8px;padding:28px;font-family:Cairo,sans-serif;direction:rtl;max-width:460px;margin:0 auto;box-shadow:0 2px 12px rgba(0,0,0,.1)">' +
    invs.map((inv) => buildInvoiceHTML(inv)).join("") +
    "</div>";
  openModal("bulkPrintModal");
}
function resetInvFilter() {
  ["invDateFrom", "invDateTo", "invSearch2"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  document.getElementById("invStatusFilter").value = "";
  selectedInvIds = new Set();
  renderInvoices();
}
function renderInvoices() {
  const list = getFilteredInvoices();
  const badges = {
    paid: "badge-success",
    partial: "badge-warning",
    unpaid: "badge-danger",
  };
  document.getElementById("invoicesTbody").innerHTML =
    list
      .map((i) => {
        const cust = DB.customers.find((c) => c.id === i.customerId);
        return `<tr><td><input type="checkbox" class="inv-chk" style="width:14px;height:14px;accent-color:var(--accent)" ${selectedInvIds.has(i.id) ? "checked" : ""} onchange="toggleInvSelect(${i.id},this)"/></td><td style="color:var(--accent);font-weight:600">${i.num}</td><td style="color:var(--text)">${cust ? cust.name : "نقدي"}</td><td style="color:var(--text3)">${i.date}</td><td style="color:var(--text2);font-size:12px">${getDayName(i.date)}</td><td style="font-weight:600">${i.total.toFixed(2)} ${DB.settings.currency}</td><td>${i.paid.toFixed(2)} ${DB.settings.currency}</td><td><span class="badge ${badges[i.status]}">${statusLabels[i.status]}</span></td><td><button class="btn btn-ghost btn-sm" onclick="printInvoiceById(${i.id})">🖨️ طباعة</button></td></tr>`;
      })
      .join() ||
    `<tr><td colspan="9" style="text-align:center;color:var(--text3);padding:30px">لا توجد فواتير</td></tr>`;
  updateSelectedCount();
}

function renderProducts() {
  const q = (document.getElementById("prodSearch").value || "").toLowerCase();
  const cf = document.getElementById("prodCatFilter").value;
  document.getElementById("prodCatFilter").innerHTML =
    '<option value="">كل التصنيفات</option>' +
    DB.categories
      .map(
        (c) =>
          `<option value="${c}"${cf === c ? " selected" : ""}>${c}</option>`,
      )
      .join("");
  const list = DB.products.filter(
    (p) =>
      (!q ||
        p.name.toLowerCase().includes(q) ||
        p.code.toLowerCase().includes(q)) &&
      (!cf || p.cat === cf),
  );
  const canModify = currentUserRole !== "cashier";
  document.getElementById("productsTbody").innerHTML =
    list
      .map((p) => {
        const isLow = p.qty <= p.minQty;
        return `<tr><td><code style="background:var(--bg3);padding:2px 6px;border-radius:4px;font-size:12px;color:var(--text2)">${p.code}</code></td><td><span style="font-family:monospace;font-size:12px;color:var(--text3);background:var(--bg3);padding:2px 8px;border-radius:4px">${p.barcode || "—"}</span></td><td style="color:var(--text);font-weight:500">${p.name}${p.notes ? '<br><span style="font-size:10px;color:var(--text3)">' + p.notes + "</span>" : ""}</td><td><span style="background:${catColors[p.cat] || "#888"}22;color:${catColors[p.cat] || "#888"};padding:2px 8px;border-radius:20px;font-size:12px">${p.cat}</span></td><td><span class="prod-type-badge">${p.ptype || "بضاعة"}</span></td><td>${p.buyPrice} ${DB.settings.currency}</td><td style="color:var(--accent);font-weight:600">${p.sellPrice} ${DB.settings.currency}</td><td style="color:${isLow ? "var(--accent3)" : "var(--text)"};font-weight:${isLow ? 700 : 400}">${p.qty} ${p.unit}</td><td><span class="badge ${isLow ? "badge-danger" : "badge-success"}">${isLow ? "منخفض" : "متوفر"}</span></td><td>${canModify ? `<button class="btn btn-ghost btn-sm btn-icon" onclick="editProduct(${p.id})" style="margin-left:4px">✏️</button><button class="btn btn-ghost btn-sm btn-icon" onclick="deleteProduct(${p.id})">🗑️</button>` : "—"}</td></tr>`;
      })
      .join() ||
    `<tr><td colspan="8" style="text-align:center;color:var(--text3);padding:30px">لا توجد أصناف</td></tr>`;
}
function openProductModal(id) {
  editingProductId = id || null;
  document.getElementById("productModalTitle").textContent = id
    ? "تعديل الصنف"
    : "إضافة صنف جديد";
  document.getElementById("pCat").innerHTML = DB.categories
    .map((c) => `<option>${c}</option>`)
    .join("");
  if (id) {
    const p = DB.products.find((x) => x.id === id);
    if (p) {
      document.getElementById("pName").value = p.name;
      document.getElementById("pCode").value = p.code;
      document.getElementById("pBarcode").value = p.barcode || "";
      document.getElementById("pCat").value = p.cat;
      document.getElementById("pUnit").value = p.unit;
      document.getElementById("pBuyPrice").value = p.buyPrice;
      document.getElementById("pSellPrice").value = p.sellPrice;
      document.getElementById("pQty").value = p.qty;
      document.getElementById("pMinQty").value = p.minQty;
      document.getElementById("pType").value = p.ptype || "بضاعة";
      document.getElementById("pNotes").value = p.notes || "";
    }
  } else {
    [
      "pName",
      "pCode",
      "pBarcode",
      "pBuyPrice",
      "pSellPrice",
      "pQty",
      "pNotes",
      "pType",
    ].forEach((fid) => (document.getElementById(fid).value = ""));
    document.getElementById("pMinQty").value = 5;
  }
  openModal("productModal");
}
function saveProduct() {
  const name = document.getElementById("pName").value.trim(),
    sellPrice = parseFloat(document.getElementById("pSellPrice").value);
  if (!name || !sellPrice) {
    showToast("يرجى إدخال الاسم وسعر البيع");
    return;
  }
  const data = {
    name,
    code: document.getElementById("pCode").value || "P" + DB.nextProdId,
    barcode: document.getElementById("pBarcode").value.trim(),
    cat: document.getElementById("pCat").value,
    ptype: document.getElementById("pType").value,
    unit: document.getElementById("pUnit").value,
    buyPrice: parseFloat(document.getElementById("pBuyPrice").value) || 0,
    sellPrice,
    qty: parseInt(document.getElementById("pQty").value) || 0,
    minQty: parseInt(document.getElementById("pMinQty").value) || 5,
    notes: document.getElementById("pNotes").value,
  };
  if (editingProductId) {
    const idx = DB.products.findIndex((p) => p.id === editingProductId);
    if (idx !== -1) DB.products[idx] = { ...DB.products[idx], ...data };
    showToast("تم تعديل الصنف", "success");
  } else {
    DB.products.push({ id: DB.nextProdId++, ...data });
    showToast("تم إضافة الصنف", "success");
  }
  closeModal("productModal");
  renderProducts();
}
function editProduct(id) {
  openProductModal(id);
}
function deleteProduct(id) {
  if (currentUserRole === "supervisor") {
    showToast("المشرف لا يملك صلاحية الحذف", "error");
    return;
  }
  if (!confirm("هل تريد حذف هذا الصنف؟")) return;
  DB.products = DB.products.filter((p) => p.id !== id);
  renderProducts();
  showToast("تم حذف الصنف", "success");
}

function renderInventory() {
  const q = (document.getElementById("invSearch").value || "").toLowerCase();
  const f = document.getElementById("invFilter").value;
  const list = DB.products.filter((p) => {
    const matchQ = !q || p.name.toLowerCase().includes(q);
    const isLow = p.qty <= p.minQty;
    const matchF = !f || (f === "low" && isLow) || (f === "ok" && !isLow);
    return matchQ && matchF;
  });
  document.getElementById("invTbody").innerHTML = list
    .map((p) => {
      const pct = Math.min(
        100,
        Math.round((p.qty / Math.max(p.minQty * 2, 1)) * 100),
      );
      const cls =
        p.qty === 0 ? "inv-critical" : p.qty <= p.minQty ? "inv-low" : "";
      const badge =
        p.qty === 0
          ? "badge-danger"
          : p.qty <= p.minQty
            ? "badge-warning"
            : "badge-success";
      const label = p.qty === 0 ? "نفد" : p.qty <= p.minQty ? "منخفض" : "متوفر";
      return `<tr><td style="color:var(--text);font-weight:500">${p.name}</td><td>${p.cat}</td><td style="font-weight:700;color:${p.qty <= p.minQty ? "var(--accent3)" : "var(--text)"}">${p.qty} ${p.unit}</td><td style="color:var(--text3)">${p.minQty} ${p.unit}</td><td><span class="badge ${badge}">${label}</span></td><td style="min-width:120px"><div class="inv-progress"><div class="inv-bar ${cls}" style="width:${pct}%"></div></div><span style="font-size:11px;color:var(--text3)">${pct}%</span></td></tr>`;
    })
    .join("");
}
function openStockTake() {
  document.getElementById("stockTakeTbody").innerHTML = DB.products
    .map(
      (p) =>
        `<tr><td style="color:var(--text)">${p.name}</td><td style="color:var(--text2)">${p.qty} ${p.unit}</td><td><input type="number" class="form-control" id="st_${p.id}" value="${p.qty}" min="0" style="width:90px;padding:6px 8px;font-size:13px"></td><td id="stDiff_${p.id}" style="font-weight:700">—</td></tr>`,
    )
    .join("");
  DB.products.forEach((p) => {
    const inp = document.getElementById("st_" + p.id);
    inp.oninput = () => {
      const v = parseInt(inp.value) || 0,
        diff = v - p.qty,
        el = document.getElementById("stDiff_" + p.id);
      el.textContent = diff > 0 ? "+" + diff : diff;
      el.style.color =
        diff > 0
          ? "var(--success)"
          : diff < 0
            ? "var(--accent3)"
            : "var(--text3)";
    };
  });
  openModal("stockTakeModal");
}
function confirmStockTake() {
  DB.products.forEach((p) => {
    const inp = document.getElementById("st_" + p.id);
    if (inp) p.qty = parseInt(inp.value) || 0;
  });
  closeModal("stockTakeModal");
  renderInventory();
  showToast("تم تحديث المخزون بنجاح", "success");
}

function renderCustomers() {
  const q = (document.getElementById("custSearch").value || "").toLowerCase();
  const list = DB.customers.filter(
    (c) => !q || c.name.toLowerCase().includes(q) || c.phone.includes(q),
  );
  const canDelete = currentUserRole === "admin";
  document.getElementById("custList").innerHTML =
    list
      .map(
        (c, i) => `
    <div class="cust-card-row">
      <div class="cust-avatar" style="background:${avatarColors[i % avatarColors.length]}22;color:${avatarColors[i % avatarColors.length]}">${c.name.charAt(0)}</div>
      <div style="flex:1"><div style="font-size:14px;font-weight:600;color:var(--text)">${c.name}</div><div style="font-size:12px;color:var(--text3)">${c.phone} · ${c.address}</div></div>
      <div style="font-size:13px;font-weight:700;${c.balance > 0 ? "color:var(--accent3)" : "color:var(--success)"}">${c.balance > 0 ? c.balance.toLocaleString() + " " + DB.settings.currency + " مدين" : "لا ديون"}</div>
      <button class="btn btn-ghost btn-sm" onclick="showCustHistory(${c.id})">📋 السجل</button>
      <button class="btn btn-ghost btn-sm" onclick="openCustModal(${c.id})">✏️</button>
      ${canDelete ? `<button class="btn btn-ghost btn-sm" onclick="deleteCustomer(${c.id})" style="color:var(--danger)">🗑️</button>` : ""}
    </div>`,
      )
      .join() ||
    '<div style="padding:20px;color:var(--text3);text-align:center">لا يوجد عملاء</div>';
}
function showCustHistory(id) {
  const cust = DB.customers.find((c) => c.id === id);
  if (!cust) return;
  const invs = DB.invoices.filter((i) => i.customerId === id);
  document.getElementById("histCustName").textContent =
    "سجل العميل: " + cust.name;
  document.getElementById("histTotal").textContent =
    invs.reduce((s, i) => s + i.total, 0).toFixed(2) +
    " " +
    DB.settings.currency;
  document.getElementById("histPaid").textContent =
    invs.reduce((s, i) => s + i.paid, 0).toFixed(2) +
    " " +
    DB.settings.currency;
  document.getElementById("histBalance").textContent =
    cust.balance.toFixed(2) + " " + DB.settings.currency;
  const badges = {
    paid: "badge-success",
    partial: "badge-warning",
    unpaid: "badge-danger",
  };
  document.getElementById("histTbody").innerHTML = invs.length
    ? invs
        .map(
          (i) =>
            `<tr><td style="color:var(--accent);font-weight:600">${i.num}</td><td style="color:var(--text3)">${i.date}</td><td style="color:var(--text2);font-size:12px">${getDayName(i.date)}</td><td style="font-weight:600">${i.total.toFixed(2)} ${DB.settings.currency}</td><td>${i.paid.toFixed(2)} ${DB.settings.currency}</td><td style="color:var(--text2)">${payLabels[i.method] || i.method}</td><td><span class="badge ${badges[i.status]}">${statusLabels[i.status]}</span></td><td><button class="btn btn-ghost btn-sm" onclick="printInvoiceById(${i.id})">🖨️</button></td></tr>`,
        )
        .join("")
    : `<tr><td colspan="8" style="text-align:center;color:var(--text3);padding:20px">لا توجد فواتير لهذا العميل</td></tr>`;
  navigate("custhistory", null);
}
function openCustModal(id) {
  editingCustId = id || null;
  document.getElementById("custModalTitle").textContent = id
    ? "تعديل بيانات العميل"
    : "إضافة عميل جديد";
  if (id) {
    const c = DB.customers.find((x) => x.id === id);
    if (c) {
      document.getElementById("cName").value = c.name;
      document.getElementById("cPhone").value = c.phone;
      document.getElementById("cAddress").value = c.address;
    }
  } else {
    ["cName", "cPhone", "cAddress"].forEach(
      (fid) => (document.getElementById(fid).value = ""),
    );
  }
  openModal("customerModal");
}
function saveCustomer() {
  const name = document.getElementById("cName").value.trim();
  if (!name) {
    showToast("يرجى إدخال الاسم");
    return;
  }
  const data = {
    name,
    phone: document.getElementById("cPhone").value,
    address: document.getElementById("cAddress").value,
  };
  if (editingCustId) {
    const idx = DB.customers.findIndex((c) => c.id === editingCustId);
    if (idx !== -1) DB.customers[idx] = { ...DB.customers[idx], ...data };
    showToast("تم تعديل بيانات العميل", "success");
  } else {
    DB.customers.push({ id: DB.nextCustId++, ...data, balance: 0 });
    showToast("تم إضافة العميل", "success");
  }
  closeModal("customerModal");
  renderCustomers();
}
function deleteCustomer(id) {
  if (!confirm("هل تريد حذف هذا العميل؟")) return;
  DB.customers = DB.customers.filter((c) => c.id !== id);
  renderCustomers();
  showToast("تم حذف العميل", "success");
}

function renderSuppliers() {
  const canDelete = currentUserRole === "admin";
  document.getElementById("suppliersTbody").innerHTML = DB.suppliers
    .map(
      (s) =>
        `<tr><td style="color:var(--text);font-weight:500">${s.name}</td><td>${s.phone}</td><td style="color:var(--text2)">${s.address}</td><td style="color:var(--accent3);font-weight:600">${s.balance.toLocaleString()} ${DB.settings.currency}</td><td><button class="btn btn-ghost btn-sm" onclick="openSupplierModal(${s.id})" style="margin-left:4px">✏️</button>${canDelete ? `<button class="btn btn-ghost btn-sm" onclick="deleteSupplier(${s.id})" style="color:var(--danger)">🗑️</button>` : ""}</td></tr>`,
    )
    .join("");
}
function openSupplierModal(id) {
  editingSuppId = id || null;
  document.getElementById("supplierModalTitle").textContent = id
    ? "تعديل بيانات المورد"
    : "إضافة مورد جديد";
  if (id) {
    const s = DB.suppliers.find((x) => x.id === id);
    if (s) {
      document.getElementById("sName").value = s.name;
      document.getElementById("sPhone").value = s.phone;
      document.getElementById("sAddress").value = s.address;
    }
  } else {
    ["sName", "sPhone", "sAddress"].forEach(
      (fid) => (document.getElementById(fid).value = ""),
    );
  }
  openModal("supplierModal");
}
function saveSupplier() {
  const name = document.getElementById("sName").value.trim();
  if (!name) {
    showToast("يرجى إدخال الاسم");
    return;
  }
  const data = {
    name,
    phone: document.getElementById("sPhone").value,
    address: document.getElementById("sAddress").value,
  };
  if (editingSuppId) {
    const idx = DB.suppliers.findIndex((s) => s.id === editingSuppId);
    if (idx !== -1) DB.suppliers[idx] = { ...DB.suppliers[idx], ...data };
    showToast("تم تعديل بيانات المورد", "success");
  } else {
    DB.suppliers.push({ id: DB.nextSuppId++, ...data, balance: 0 });
    showToast("تم إضافة المورد", "success");
  }
  closeModal("supplierModal");
  renderSuppliers();
}
function deleteSupplier(id) {
  if (!confirm("هل تريد حذف هذا المورد؟")) return;
  DB.suppliers = DB.suppliers.filter((s) => s.id !== id);
  renderSuppliers();
  showToast("تم حذف المورد", "success");
}

function renderPurchases() {
  const badges = {
    paid: "badge-success",
    partial: "badge-warning",
    unpaid: "badge-danger",
  };
  const labels = { paid: "مدفوع", partial: "جزئي", unpaid: "آجل" };
  document.getElementById("purchasesTbody").innerHTML = DB.purchases
    .map((p) => {
      const sup = DB.suppliers.find((s) => s.id === p.supplierId);
      return `<tr><td style="color:var(--accent);font-weight:600">${p.num}</td><td style="color:var(--text)">${sup ? sup.name : "—"}</td><td style="color:var(--text3)">${p.date}</td><td style="color:var(--text2);font-size:12px">${getDayName(p.date)}</td><td style="font-weight:600">${p.total.toFixed(2)} ${DB.settings.currency}</td><td>${p.paid.toFixed(2)} ${DB.settings.currency}</td><td><span class="badge ${badges[p.status]}">${labels[p.status]}</span></td></tr>`;
    })
    .join("");
}
function openPurchaseModal() {
  purchItems = [];
  document.getElementById("purchSupplier").innerHTML = DB.suppliers
    .map((s) => `<option value="${s.id}">${s.name}</option>`)
    .join("");
  document.getElementById("purchDate").value = TODAY;
  renderPurchItems();
  openModal("purchaseModal");
}
function renderPurchItems() {
  document.getElementById("purchItems").innerHTML = purchItems
    .map(
      (item, i) =>
        `<div style="display:flex;gap:8px;align-items:center;margin-bottom:8px"><select class="form-control" style="flex:2;font-size:13px;padding:7px" onchange="purchItems[${i}].productId=parseInt(this.value)">${DB.products.map((p) => `<option value="${p.id}"${item.productId == p.id ? " selected" : ""}>${p.name}</option>`).join("")}</select><input type="number" class="form-control" style="width:80px;padding:7px" placeholder="الكمية" value="${item.qty}" min="1" onchange="purchItems[${i}].qty=parseInt(this.value)||1"><input type="number" class="form-control" style="width:90px;padding:7px" placeholder="السعر" value="${item.price}" onchange="purchItems[${i}].price=parseFloat(this.value)||0"><button class="btn btn-ghost btn-sm" onclick="purchItems.splice(${i},1);renderPurchItems()">×</button></div>`,
    )
    .join("");
}
function addPurchItem() {
  purchItems.push({
    productId: DB.products[0]?.id || 1,
    qty: 1,
    price: 0,
  });
  renderPurchItems();
}
function savePurchase() {
  if (!purchItems.length) {
    showToast("أضف صنفاً على الأقل");
    return;
  }
  const total = purchItems.reduce((s, i) => s + i.qty * i.price, 0);
  const method = document.getElementById("purchPayMethod").value;
  const num = "PUR-" + String(DB.nextPurchId).padStart(4, "0");
  DB.purchases.push({
    id: DB.nextPurchId++,
    num,
    supplierId: parseInt(document.getElementById("purchSupplier").value),
    items: [...purchItems],
    total,
    paid: method === "credit" ? 0 : total,
    method,
    status: method === "credit" ? "unpaid" : "paid",
    date: document.getElementById("purchDate").value,
  });
  purchItems.forEach((item) => {
    const p = DB.products.find((x) => x.id === item.productId);
    if (p) p.qty += item.qty;
  });
  closeModal("purchaseModal");
  renderPurchases();
  showToast("تم تسجيل فاتورة الشراء بنجاح", "success");
}

function showReport(type) {
  document.getElementById("reportContent").style.display = "";
  const titles = {
    sales: "تقرير المبيعات",
    profit: "الأرباح والخسائر",
    inventory: "تقرير المخزون",
    top: "أفضل المنتجات مبيعاً",
    customers: "تقرير العملاء",
    stockaudit: "تقرير الجرد",
  };
  let html = `<div style="font-size:16px;font-weight:700;color:var(--text);margin-bottom:20px">${titles[type]}</div>`;
  if (type === "sales") {
    const total = DB.invoices.reduce((s, i) => s + i.paid, 0);
    html += `<div class="metric-grid" style="grid-template-columns:repeat(3,1fr)"><div class="metric-card" style="background:var(--bg3)"><div class="metric-label">إجمالي المبيعات</div><div class="metric-value">${total.toLocaleString()} ${DB.settings.currency}</div></div><div class="metric-card" style="background:var(--bg3)"><div class="metric-label">عدد الفواتير</div><div class="metric-value">${DB.invoices.length}</div></div><div class="metric-card" style="background:var(--bg3)"><div class="metric-label">متوسط الفاتورة</div><div class="metric-value">${DB.invoices.length ? Math.round(total / DB.invoices.length).toLocaleString() : 0} ${DB.settings.currency}</div></div></div>`;
  } else if (type === "inventory") {
    const totalVal = DB.products.reduce((s, p) => s + p.qty * p.sellPrice, 0);
    html +=
      `<div style="color:var(--text2);font-size:14px;margin-bottom:12px">إجمالي قيمة المخزون: <strong style="color:var(--accent)">${totalVal.toLocaleString()} ${DB.settings.currency}</strong></div><table style="width:100%"><thead><tr><th>الصنف</th><th>الكمية</th><th>سعر البيع</th><th>القيمة الإجمالية</th></tr></thead><tbody>` +
      DB.products
        .map(
          (p) =>
            `<tr><td style="color:var(--text)">${p.name}</td><td>${p.qty}</td><td>${p.sellPrice} ${DB.settings.currency}</td><td style="color:var(--accent);font-weight:600">${(p.qty * p.sellPrice).toLocaleString()} ${DB.settings.currency}</td></tr>`,
        )
        .join() +
      "</tbody></table>";
  } else if (type === "customers") {
    html +=
      `<table style="width:100%"><thead><tr><th>العميل</th><th>الهاتف</th><th>الرصيد المدين</th></tr></thead><tbody>` +
      DB.customers
        .map(
          (c) =>
            `<tr><td style="color:var(--text);font-weight:500">${c.name}</td><td>${c.phone}</td><td style="color:${c.balance > 0 ? "var(--accent3)" : "var(--success)"};font-weight:600">${c.balance.toLocaleString()} ${DB.settings.currency}</td></tr>`,
        )
        .join() +
      "</tbody></table>";
  } else if (type === "top") {
    const salesMap = {};
    DB.invoices.forEach((inv) => {
      inv.items.forEach((item) => {
        if (!salesMap[item.name]) salesMap[item.name] = { qty: 0, revenue: 0 };
        salesMap[item.name].qty += item.qty;
        salesMap[item.name].revenue += item.qty * item.price;
      });
    });
    const sorted = Object.entries(salesMap).sort((a, b) => b[1].qty - a[1].qty);
    html +=
      `<table style="width:100%"><thead><tr><th>#</th><th>الصنف</th><th>الكمية المباعة</th><th>الإيراد</th></tr></thead><tbody>` +
      (sorted.length
        ? sorted
            .slice(0, 10)
            .map(
              ([name, d], i) =>
                `<tr><td style="color:var(--accent);font-weight:700">${i + 1}</td><td style="color:var(--text)">${name}</td><td style="font-weight:600">${d.qty}</td><td style="color:var(--success);font-weight:600">${d.revenue.toFixed(2)} ${DB.settings.currency}</td></tr>`,
            )
            .join("")
        : `<tr><td colspan="4" style="text-align:center;color:var(--text3);padding:20px">لا توجد مبيعات بعد</td></tr>`) +
      "</tbody></table>";
  } else if (type === "profit") {
    // حساب الربح الحقيقي من الفواتير (سعر بيع - سعر شراء لكل صنف)
    let totalRevenue = 0,
      totalCost = 0,
      totalDiscount = 0;
    DB.invoices.forEach((inv) => {
      totalRevenue += inv.paid;
      totalDiscount += (inv.itemDiscTotal || 0) + (inv.discount || 0);
      inv.items.forEach((item) => {
        const bp =
          item.buyPrice ||
          DB.products.find((p) => p.id === item.productId)?.buyPrice ||
          0;
        totalCost += bp * item.qty;
      });
    });
    const grossProfit = totalRevenue - totalCost;
    const margin =
      totalRevenue > 0 ? ((grossProfit / totalRevenue) * 100).toFixed(1) : 0;
    const returnsCost = DB.returns.reduce((s, r) => s + r.total, 0);
    const netProfit = grossProfit - returnsCost;

    // تفصيل الأرباح لكل منتج
    const profitByProduct = {};
    DB.invoices.forEach((inv) => {
      inv.items.forEach((item) => {
        const bp =
          item.buyPrice ||
          DB.products.find((p) => p.id === item.productId)?.buyPrice ||
          0;
        const profit =
          (item.price - bp - (item.itemDisc || 0) / item.qty) * item.qty;
        if (!profitByProduct[item.name])
          profitByProduct[item.name] = {
            revenue: 0,
            cost: 0,
            qty: 0,
            profit: 0,
          };
        profitByProduct[item.name].revenue += item.price * item.qty;
        profitByProduct[item.name].cost += bp * item.qty;
        profitByProduct[item.name].qty += item.qty;
        profitByProduct[item.name].profit += profit;
      });
    });
    const sortedProfit = Object.entries(profitByProduct).sort(
      (a, b) => b[1].profit - a[1].profit,
    );

    html += `
            <div class="metric-grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:20px">
              <div class="metric-card" style="background:var(--bg3)"><div class="metric-label">إجمالي الإيرادات</div><div class="metric-value" style="font-size:18px">${totalRevenue.toLocaleString()} ${DB.settings.currency}</div></div>
              <div class="metric-card" style="background:var(--bg3)"><div class="metric-label">إجمالي تكلفة البضاعة</div><div class="metric-value" style="font-size:18px;color:var(--danger)">${totalCost.toLocaleString()} ${DB.settings.currency}</div></div>
              <div class="metric-card" style="background:var(--bg3)"><div class="metric-label">صافي الربح الحقيقي</div><div class="metric-value" style="font-size:18px;color:var(--success)">${netProfit.toLocaleString()} ${DB.settings.currency}</div></div>
              <div class="metric-card" style="background:var(--bg3)"><div class="metric-label">هامش الربح</div><div class="metric-value" style="font-size:18px;color:var(--accent)">${margin}%</div></div>
            </div>
            <div style="font-size:14px;font-weight:600;color:var(--text);margin-bottom:10px">📦 ربح كل منتج</div>
            <table style="width:100%"><thead><tr><th>المنتج</th><th>الكمية المباعة</th><th>الإيراد</th><th>التكلفة</th><th>صافي الربح</th><th>هامش</th></tr></thead><tbody>
            ${sortedProfit
              .map(([name, d]) => {
                const m =
                  d.revenue > 0 ? ((d.profit / d.revenue) * 100).toFixed(1) : 0;
                return `<tr>
                <td style="color:var(--text);font-weight:500">${name}</td>
                <td>${d.qty}</td>
                <td>${d.revenue.toFixed(2)} ${DB.settings.currency}</td>
                <td style="color:var(--danger)">${d.cost.toFixed(2)} ${DB.settings.currency}</td>
                <td style="color:${d.profit >= 0 ? "var(--success)" : "var(--danger)"};font-weight:700">${d.profit.toFixed(2)} ${DB.settings.currency}</td>
                <td><span class="badge ${d.profit >= 0 ? "badge-success" : "badge-danger"}">${m}%</span></td>
              </tr>`;
              })
              .join("")}
            </tbody></table>`;
    if (totalDiscount > 0)
      html += `<div style="margin-top:12px;font-size:13px;color:var(--text3)">إجمالي الخصومات الممنوحة: <strong style="color:var(--warning)">${totalDiscount.toFixed(2)} ${DB.settings.currency}</strong></div>`;
  } else if (type === "stockaudit") {
    html +=
      `<table style="width:100%"><thead><tr><th>الصنف</th><th>الكمية</th><th>الحد الأدنى</th><th>الحالة</th></tr></thead><tbody>` +
      DB.products
        .map(
          (p) =>
            `<tr><td style="color:var(--text)">${p.name}</td><td>${p.qty}</td><td>${p.minQty}</td><td><span class="badge ${p.qty <= p.minQty ? "badge-danger" : "badge-success"}">${p.qty <= p.minQty ? "يحتاج تعبئة" : "كافي"}</span></td></tr>`,
        )
        .join() +
      "</tbody></table>";
  }
  document.getElementById("reportBody").innerHTML = html;
}

function renderUsers() {
  const roleColors = {
    admin: "#6c63ff",
    cashier: "#4ecdc4",
    supervisor: "#ffa726",
  };
  document.getElementById("usersGrid").innerHTML = DB.users
    .map(
      (u) => `
    <div class="user-card">
      <div class="uc-avatar" style="background:${roleColors[u.role] || "#888"}22;color:${roleColors[u.role] || "#888"}">${u.name.charAt(0)}</div>
      <div class="uc-info"><div class="uc-name">${u.name}</div><div class="uc-role">@${u.username} · ${roleLabels[u.role] || u.role}</div></div>
      <div class="uc-actions">
        <span class="badge ${u.active ? "badge-success" : "badge-danger"}">${u.active ? "نشط" : "معطل"}</span>
        <button class="btn btn-ghost btn-sm" onclick="toggleUserActive(${u.id})">${u.active ? "تعطيل" : "تفعيل"}</button>
        <button class="btn btn-ghost btn-sm" onclick="openChangePassModal(${u.id})" title="تغيير كلمة المرور">🔑</button>
        ${u.id !== currentUser?.id ? `<button class="btn btn-ghost btn-sm" onclick="deleteUser(${u.id})" style="color:var(--danger)">🗑️</button>` : ""}
      </div>
    </div>`,
    )
    .join("");
}
function saveUser() {
  const name = document.getElementById("uName").value.trim(),
    username = document.getElementById("uUsername").value.trim(),
    pass = document.getElementById("uPass").value.trim();
  if (!name || !username || !pass) {
    showToast("يرجى ملء جميع الحقول");
    return;
  }
  if (DB.users.find((u) => u.username === username)) {
    showToast("اسم المستخدم موجود بالفعل", "error");
    return;
  }
  const hashed = hashPass(pass);
  DB.users.push({
    id: DB.nextUserId++,
    name,
    username,
    pass: hashed,
    role: document.getElementById("uRole").value,
    active: true,
  });
  closeModal("userModal");
  renderUsers();
  showToast("تم إضافة المستخدم بنجاح", "success");
}
let changingPassUserId = null;
function openChangePassModal(uid) {
  changingPassUserId = uid;
  const u = DB.users.find((x) => x.id === uid);
  document.getElementById("cpUserName").textContent = u ? u.name : "";
  document.getElementById("cpNewPass").value = "";
  document.getElementById("cpConfirm").value = "";
  openModal("changePassModal");
}
function saveNewPassword() {
  const np = document.getElementById("cpNewPass").value.trim();
  const nc = document.getElementById("cpConfirm").value.trim();
  if (!np) {
    showToast("أدخل كلمة المرور الجديدة", "error");
    return;
  }
  if (np !== nc) {
    showToast("كلمات المرور غير متطابقة", "error");
    return;
  }
  if (np.length < 4) {
    showToast("كلمة المرور قصيرة جداً (4 أحرف على الأقل)", "error");
    return;
  }
  const hashed = hashPass(np);
  const u = DB.users.find((x) => x.id === changingPassUserId);
  if (u) u.pass = hashed;
  closeModal("changePassModal");
  showToast("تم تغيير كلمة المرور بنجاح ✅", "success");
}
function toggleUserActive(id) {
  const u = DB.users.find((x) => x.id === id);
  if (u) {
    u.active = !u.active;
    renderUsers();
    showToast(u.active ? "تم تفعيل المستخدم" : "تم تعطيل المستخدم", "success");
  }
}
function deleteUser(id) {
  if (!confirm("هل تريد حذف هذا المستخدم؟")) return;
  DB.users = DB.users.filter((u) => u.id !== id);
  renderUsers();
  showToast("تم حذف المستخدم", "success");
}

// ═══════════════════════════════════════════
// RETURNS SYSTEM — المرتجعات
// ═══════════════════════════════════════════
let returnCartItems = []; // { productId, name, unit, maxQty, price, retQty }

function renderReturns() {
  const tbody = document.getElementById("returnsTbody");
  if (!tbody) return;
  if (!DB.returns.length) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;color:var(--text3);padding:30px">لا توجد مرتجعات مسجلة</td></tr>`;
    return;
  }
  tbody.innerHTML = DB.returns
    .map((r) => {
      const inv = DB.invoices.find((i) => i.id === r.invoiceId);
      const cust = inv
        ? DB.customers.find((c) => c.id === inv.customerId)
        : null;
      const itemsSummary = r.items
        .map((i) => `${i.name} (${i.retQty})`)
        .join(" — ");
      const jEntry = r.journalRef
        ? DB.journalEntries.find((j) => j.id === r.journalRef)
        : null;
      const balBadge = jEntry
        ? jEntry.balanced
          ? `<span class="badge badge-success">متوازن ✓</span>`
          : `<span class="badge badge-danger">غير متوازن!</span>`
        : `<span class="badge badge-warning">بدون قيد</span>`;
      return `<tr>
            <td style="color:var(--accent);font-weight:600">${r.num}</td>
            <td style="color:var(--text)">${inv ? inv.num : "—"}</td>
            <td>${cust ? cust.name : "نقدي"}</td>
            <td style="color:var(--text3)">${r.date}</td>
            <td style="font-size:12px;color:var(--text2)">${itemsSummary}</td>
            <td style="color:var(--accent3);font-weight:700">${r.total.toFixed(2)} ${DB.settings.currency}</td>
            <td style="color:var(--text2)">${r.reason || "—"}</td>
            <td>${balBadge}${jEntry ? `<button class="btn btn-ghost btn-sm" style="margin-right:4px" onclick="showPage('journal');setTimeout(()=>showJournalDetail(${jEntry.id}),200)">عرض</button>` : ""}</td>
          </tr>`;
    })
    .join("");
}

function openReturnModal() {
  returnCartItems = [];
  document.getElementById("returnReason").value = "";
  document.getElementById("returnItemsSection").style.display = "none";
  document.getElementById("returnTotal").textContent = "0.00";
  // Fill invoice dropdown
  document.getElementById("returnInvId").innerHTML =
    '<option value="">— اختر رقم الفاتورة —</option>' +
    DB.invoices
      .map((i) => {
        const cust = DB.customers.find((c) => c.id === i.customerId);
        return `<option value="${i.id}">${i.num} — ${cust ? cust.name : "نقدي"} — ${i.date}</option>`;
      })
      .join("");
  openModal("returnModal");
}

function loadReturnItems() {
  const invId = parseInt(document.getElementById("returnInvId").value);
  if (!invId) {
    document.getElementById("returnItemsSection").style.display = "none";
    return;
  }
  const inv = DB.invoices.find((i) => i.id === invId);
  if (!inv) return;

  // حساب الحد المتبقي للاسترجاع
  const prevReturnsTotal = DB.returns
    .filter((r) => r.invoiceId === invId)
    .reduce((s, r) => s + r.total, 0);
  const maxAllowed = inv.total - prevReturnsTotal;
  const usedPct =
    inv.total > 0 ? ((prevReturnsTotal / inv.total) * 100).toFixed(1) : 0;

  // اعرض بار الحد
  const limitBar = document.getElementById("returnLimitBar");
  if (limitBar) {
    limitBar.style.display = "";
    limitBar.innerHTML = `
            <div style="margin-bottom:8px;font-size:13px;color:var(--text2)">
              <strong>قيمة الفاتورة:</strong> ${inv.total.toFixed(2)} ${DB.settings.currency} &nbsp;|&nbsp;
              <strong style="color:var(--accent3)">مرتجع سابق:</strong> ${prevReturnsTotal.toFixed(2)} ${DB.settings.currency} &nbsp;|&nbsp;
              <strong style="color:var(--success)">الحد المسموح:</strong> ${maxAllowed.toFixed(2)} ${DB.settings.currency}
            </div>
            <div style="background:var(--bg3);border-radius:6px;height:10px;overflow:hidden">
              <div style="height:100%;width:${Math.min(100, usedPct)}%;background:${usedPct >= 100 ? "var(--danger)" : usedPct > 70 ? "var(--warning)" : "var(--success)"};border-radius:6px;transition:width .4s"></div>
            </div>
            <div style="font-size:11px;color:var(--text3);margin-top:4px">تم استرجاع ${usedPct}% من قيمة الفاتورة</div>
            ${maxAllowed <= 0 ? '<div style="color:var(--danger);font-weight:700;font-size:13px;margin-top:6px">⚠️ تم استرجاع كامل قيمة الفاتورة — لا يمكن إضافة مرتجعات جديدة</div>' : ""}`;
  }

  if (maxAllowed <= 0) {
    returnCartItems = [];
    document.getElementById("returnItemsList").innerHTML =
      `<div style="color:var(--danger);padding:16px;text-align:center">تم استرجاع كامل قيمة هذه الفاتورة مسبقاً</div>`;
    document.getElementById("returnItemsSection").style.display = "block";
    return;
  }

  returnCartItems = inv.items.map((item) => ({
    productId: item.productId,
    name: item.name,
    unit: item.unit,
    maxQty: item.qty,
    price: item.price,
    retQty: 0,
  }));

  renderReturnItems();
  document.getElementById("returnItemsSection").style.display = "block";
}

function renderReturnItems() {
  document.getElementById("returnItemsList").innerHTML = returnCartItems
    .map(
      (item, idx) => `
          <div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border)">
            <div style="flex:1">
              <div style="font-size:13px;font-weight:600;color:var(--text)">${item.name}</div>
              <div style="font-size:11px;color:var(--text3)">الكمية المباعة: ${item.maxQty} ${item.unit} · السعر: ${item.price} ${DB.settings.currency}</div>
            </div>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-size:12px;color:var(--text3)">كمية الإرجاع:</span>
              <button class="qty-btn" onclick="changeRetQty(${idx},-1)">−</button>
              <span class="qty-val" id="retQty_${idx}">${item.retQty}</span>
              <button class="qty-btn" onclick="changeRetQty(${idx},1)">+</button>
            </div>
            <div style="min-width:80px;text-align:left;font-weight:700;color:var(--accent3)" id="retLine_${idx}">
              ${(item.retQty * item.price).toFixed(2)} ${DB.settings.currency}
            </div>
          </div>`,
    )
    .join("");
  updateReturnTotal();
}

function changeRetQty(idx, d) {
  const item = returnCartItems[idx];
  item.retQty = Math.max(0, Math.min(item.maxQty, item.retQty + d));
  document.getElementById("retQty_" + idx).textContent = item.retQty;
  document.getElementById("retLine_" + idx).textContent =
    (item.retQty * item.price).toFixed(2) + " " + DB.settings.currency;
  updateReturnTotal();
}

function updateReturnTotal() {
  const total = returnCartItems.reduce((s, i) => s + i.retQty * i.price, 0);
  document.getElementById("returnTotal").textContent =
    total.toFixed(2) + " " + DB.settings.currency;
}

function saveReturn() {
  const invId = parseInt(document.getElementById("returnInvId").value);
  if (!invId) {
    showToast("اختر الفاتورة الأصلية", "error");
    return;
  }
  const inv = DB.invoices.find((i) => i.id === invId);
  if (!inv) {
    showToast("الفاتورة غير موجودة", "error");
    return;
  }

  const selected = returnCartItems.filter((i) => i.retQty > 0);
  if (!selected.length) {
    showToast("اختر صنفاً واحداً على الأقل وحدد الكمية", "error");
    return;
  }

  // ══════════════════════════════════════════
  // 1) حساب إجمالي المرتجع
  // ══════════════════════════════════════════
  const returnTotal = selected.reduce((s, i) => s + i.retQty * i.price, 0);

  // ══════════════════════════════════════════
  // 2) التحقق: المرتجع لا يتجاوز الفاتورة الأصلية
  //    (مجموع كل المرتجعات السابقة على نفس الفاتورة + الحالي ≤ 100%)
  // ══════════════════════════════════════════
  const prevReturnsTotal = DB.returns
    .filter((r) => r.invoiceId === invId)
    .reduce((s, r) => s + r.total, 0);

  const maxAllowedReturn = inv.total - prevReturnsTotal;

  if (returnTotal <= 0) {
    showToast("قيمة المرتجع يجب أن تكون أكبر من صفر", "error");
    return;
  }
  if (returnTotal > maxAllowedReturn) {
    showToast(
      `⚠️ المرتجع (${returnTotal.toFixed(2)}) يتجاوز الحد المسموح (${maxAllowedReturn.toFixed(2)} ${DB.settings.currency}) — يجب ألا يتجاوز 100% من قيمة الفاتورة`,
      "error",
    );
    return;
  }

  const num = "RET-" + String(DB.nextReturnId).padStart(4, "0");
  const reason = document.getElementById("returnReason").value.trim();

  // ══════════════════════════════════════════
  // 3) تسجيل المرتجع
  // ══════════════════════════════════════════
  DB.returns.push({
    id: DB.nextReturnId++,
    num,
    invoiceId: invId,
    items: selected.map((i) => ({ ...i })),
    total: returnTotal,
    reason,
    date: TODAY,
    journalRef: null, // سيتحدث بعد إنشاء القيد
  });
  const retRecord = DB.returns[DB.returns.length - 1];

  // ══════════════════════════════════════════
  // 4) إرجاع الكميات للمخزون (المخزون يرتفع)
  // ══════════════════════════════════════════
  selected.forEach((item) => {
    const p = DB.products.find((x) => x.id === item.productId);
    if (p) p.qty += item.retQty;
  });

  // ══════════════════════════════════════════
  // 5) إنشاء قيد محاسبي متوازن (Debit = Credit)
  //    حالات:
  //    أ) آجل (credit):  العميل ليس ملزماً بالسداد → اطرح من رصيده
  //    ب) نقدي (cash):   أرجع الكاش → الصندوق ينخفض
  // ══════════════════════════════════════════
  let journalLines = [];

  if (inv.method === "credit" && inv.customerId) {
    // آجل: المرتجع يُلغي جزءاً من الذمة
    const cust = DB.customers.find((c) => c.id === inv.customerId);
    const custName = cust ? cust.name : "عميل";

    journalLines = [
      {
        side: "debit",
        account: "مردودات المبيعات",
        amount: returnTotal,
        note: `مرتجع ${num} — ${custName}`,
      },
      {
        side: "credit",
        account: `ذمم مدينة — ${custName}`,
        amount: returnTotal,
        note: `إلغاء ذمة بسبب مرتجع ${num}`,
      },
    ];

    // تخفيض رصيد العميل (لا يقل عن صفر)
    if (cust) cust.balance = Math.max(0, cust.balance - returnTotal);

    // تعديل حالة الفاتورة الأصلية: لو صار مدفوع أكثر من المتبقي بعد المرتجع
    inv.total = Math.max(0, inv.total - returnTotal);
    if (inv.paid > inv.total) inv.paid = inv.total;
    inv.status =
      inv.paid >= inv.total ? "paid" : inv.paid > 0 ? "partial" : "unpaid";
  } else {
    // نقدي: الصندوق يدفع
    journalLines = [
      {
        side: "debit",
        account: "مردودات المبيعات",
        amount: returnTotal,
        note: `مرتجع ${num} — نقدي`,
      },
      {
        side: "credit",
        account: "الصندوق",
        amount: returnTotal,
        note: `استرداد نقدي للمرتجع ${num}`,
      },
    ];
  }

  // ══════════════════════════════════════════
  // 6) إضافة قيد المخزون (تكلفة البضاعة المُرجعة)
  // ══════════════════════════════════════════
  const costTotal = selected.reduce((s, i) => {
    const p = DB.products.find((x) => x.id === i.productId);
    return s + i.retQty * (p ? p.buyPrice || 0 : 0);
  }, 0);

  if (costTotal > 0) {
    journalLines.push(
      {
        side: "debit",
        account: "مخزون البضاعة",
        amount: costTotal,
        note: `إعادة بضاعة للمخزون — ${num}`,
      },
      {
        side: "credit",
        account: "تكلفة البضاعة المباعة",
        amount: costTotal,
        note: `عكس تكلفة مرتجع ${num}`,
      },
    );
  }

  // التحقق النهائي من توازن الدبيت والكريديت
  const totalDebit = journalLines
    .filter((l) => l.side === "debit")
    .reduce((s, l) => s + l.amount, 0);
  const totalCredit = journalLines
    .filter((l) => l.side === "credit")
    .reduce((s, l) => s + l.amount, 0);
  const isBalanced = Math.abs(totalDebit - totalCredit) < 0.01;

  const journalEntry = {
    id: DB.nextJournalId++,
    ref: num,
    date: TODAY,
    description: `مرتجع مبيعات — ${num} — فاتورة ${inv.num}${reason ? " — " + reason : ""}`,
    lines: journalLines,
    totalDebit,
    totalCredit,
    balanced: isBalanced,
  };
  DB.journalEntries.push(journalEntry);
  retRecord.journalRef = journalEntry.id;

  closeModal("returnModal");
  renderReturns();

  const balMsg = isBalanced ? "✅ القيد متوازن" : "⚠️ القيد غير متوازن!";
  showToast(
    `✅ تم تسجيل ${num} بقيمة ${returnTotal.toFixed(2)} ${DB.settings.currency} — ${balMsg}`,
    isBalanced ? "success" : "error",
  );
}

// ═══════════════════════════════════════════
// 📒 القيود المحاسبية — Journal Entries
// ═══════════════════════════════════════════
function renderJournal() {
  const entries = DB.journalEntries;
  const totalDebitAll = entries.reduce((s, e) => s + e.totalDebit, 0);
  const totalCreditAll = entries.reduce((s, e) => s + e.totalCredit, 0);
  const allBalanced = entries.every((e) => e.balanced);
  const cur = DB.settings.currency;

  // Summary bar
  document.getElementById("journalSummaryBar").innerHTML = `
          <div class="metric-card">
            <div class="metric-icon">📥</div>
            <div class="metric-label">إجمالي الديبيت</div>
            <div class="metric-value" style="font-size:20px;color:var(--success)">${totalDebitAll.toFixed(2)}</div>
            <div class="metric-sub" style="color:var(--text3)">${cur}</div>
          </div>
          <div class="metric-card">
            <div class="metric-icon">📤</div>
            <div class="metric-label">إجمالي الكريديت</div>
            <div class="metric-value" style="font-size:20px;color:var(--accent3)">${totalCreditAll.toFixed(2)}</div>
            <div class="metric-sub" style="color:var(--text3)">${cur}</div>
          </div>
          <div class="metric-card" style="border-color:${allBalanced ? "var(--success)" : "var(--danger)"}">
            <div class="metric-icon">${allBalanced ? "⚖️" : "⚠️"}</div>
            <div class="metric-label">حالة الميزان</div>
            <div class="metric-value" style="font-size:16px;color:${allBalanced ? "var(--success)" : "var(--danger)"}">
              ${allBalanced ? "متوازن تماماً ✓" : "يوجد فرق!"}
            </div>
            <div class="metric-sub" style="color:var(--text3)">فرق: ${Math.abs(totalDebitAll - totalCreditAll).toFixed(2)} ${cur}</div>
          </div>`;

  if (!entries.length) {
    document.getElementById("journalTbody").innerHTML =
      `<tr><td colspan="8" style="text-align:center;color:var(--text3);padding:30px">لا توجد قيود محاسبية مسجلة بعد</td></tr>`;
    return;
  }

  document.getElementById("journalTbody").innerHTML = entries
    .map(
      (e) => `
          <tr>
            <td style="color:var(--text3)">${e.id}</td>
            <td style="color:var(--accent);font-weight:600">${e.ref}</td>
            <td>${e.date}</td>
            <td style="color:var(--text)">${e.description}</td>
            <td style="color:var(--success);font-weight:600">${e.totalDebit.toFixed(2)} ${cur}</td>
            <td style="color:var(--accent3);font-weight:600">${e.totalCredit.toFixed(2)} ${cur}</td>
            <td><span class="badge ${e.balanced ? "badge-success" : "badge-danger"}">${e.balanced ? "متوازن ✓" : "غير متوازن!"}</span></td>
            <td><button class="btn btn-ghost btn-sm" onclick="showJournalDetail(${e.id})">📋 تفاصيل</button></td>
          </tr>`,
    )
    .join("");
}

function showJournalDetail(jId) {
  const entry = DB.journalEntries.find((e) => e.id === jId);
  if (!entry) return;
  const cur = DB.settings.currency;
  const debitLines = entry.lines.filter((l) => l.side === "debit");
  const creditLines = entry.lines.filter((l) => l.side === "credit");

  document.getElementById("journalDetailTitle").textContent =
    `📋 تفاصيل القيد — ${entry.ref} — ${entry.date}`;

  document.getElementById("journalDetailBody").innerHTML = `
          <div style="margin-bottom:12px;color:var(--text2);font-size:13px">${entry.description}</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
            <div>
              <div style="font-size:12px;font-weight:700;color:var(--success);margin-bottom:8px;padding-bottom:6px;border-bottom:2px solid var(--success)">
                📥 الديبيت (المدين)
              </div>
              ${debitLines
                .map(
                  (l) => `
                <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border)">
                  <div>
                    <div style="font-size:13px;color:var(--text)">${l.account}</div>
                    <div style="font-size:11px;color:var(--text3)">${l.note}</div>
                  </div>
                  <div style="font-weight:700;color:var(--success)">${l.amount.toFixed(2)} ${cur}</div>
                </div>`,
                )
                .join("")}
              <div style="display:flex;justify-content:space-between;padding:10px 0;font-weight:700;color:var(--success)">
                <span>الإجمالي</span><span>${entry.totalDebit.toFixed(2)} ${cur}</span>
              </div>
            </div>
            <div>
              <div style="font-size:12px;font-weight:700;color:var(--accent3);margin-bottom:8px;padding-bottom:6px;border-bottom:2px solid var(--accent3)">
                📤 الكريديت (الدائن)
              </div>
              ${creditLines
                .map(
                  (l) => `
                <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border)">
                  <div>
                    <div style="font-size:13px;color:var(--text)">${l.account}</div>
                    <div style="font-size:11px;color:var(--text3)">${l.note}</div>
                  </div>
                  <div style="font-weight:700;color:var(--accent3)">${l.amount.toFixed(2)} ${cur}</div>
                </div>`,
                )
                .join("")}
              <div style="display:flex;justify-content:space-between;padding:10px 0;font-weight:700;color:var(--accent3)">
                <span>الإجمالي</span><span>${entry.totalCredit.toFixed(2)} ${cur}</span>
              </div>
            </div>
          </div>
          <div style="margin-top:14px;padding:12px;border-radius:8px;background:${entry.balanced ? "rgba(46,204,113,0.1)" : "rgba(231,76,60,0.1)"};border:1px solid ${entry.balanced ? "var(--success)" : "var(--danger)"};text-align:center;font-weight:700;color:${entry.balanced ? "var(--success)" : "var(--danger)"}">
            ${
              entry.balanced
                ? `⚖️ القيد متوازن — الديبيت = الكريديت = ${entry.totalDebit.toFixed(2)} ${cur}`
                : `⚠️ القيد غير متوازن! فرق = ${Math.abs(entry.totalDebit - entry.totalCredit).toFixed(2)} ${cur}`
            }
          </div>`;

  document.getElementById("journalDetailCard").style.display = "";
  document
    .getElementById("journalDetailCard")
    .scrollIntoView({ behavior: "smooth" });
}

function showPage(pageId) {
  navigate(pageId, null);
}

function saveSettings() {
  DB.settings.bizName =
    document.getElementById("bizNameInput").value || "نظام الإدارة";
  DB.settings.currency = document.getElementById("bizCurrency").value;
  DB.settings.address = document.getElementById("bizAddress").value;
  DB.settings.phone = document.getElementById("bizPhone").value;
  DB.settings.thanks = document.getElementById("bizThanks").value;
  document.getElementById("bizName").textContent = DB.settings.bizName;
  showToast("تم حفظ الإعدادات بنجاح", "success");
}

// ═══════════════════════════════════════════
// 🗂️ إدارة التصنيفات
// ═══════════════════════════════════════════
function renderCatsList() {
  const el = document.getElementById("catsList");
  if (!el) return;
  if (!DB.categories.length) {
    el.innerHTML = `<div style="color:var(--text3);font-size:13px;padding:12px 0">لا توجد تصنيفات — أضف تصنيفاً جديداً أعلاه</div>`;
    return;
  }
  el.innerHTML = DB.categories
    .map((cat, idx) => {
      const usedCount = DB.products.filter((p) => p.cat === cat).length;
      return `<div style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--bg3);border:1px solid var(--border);border-radius:var(--radius-sm);margin-bottom:8px">
            <span style="font-size:16px">🏷️</span>
            <div id="catView_${idx}" style="flex:1;display:flex;align-items:center;gap:8px">
              <span style="font-size:14px;font-weight:600;color:var(--text)">${cat}</span>
              <span style="font-size:11px;color:var(--text3);background:var(--bg4);padding:2px 8px;border-radius:10px">${usedCount} منتج</span>
            </div>
            <div id="catEdit_${idx}" style="flex:1;display:none">
              <input class="form-control" id="catInput_${idx}" value="${cat}"
                style="font-size:13px;padding:6px 10px"
                onkeydown="if(event.key==='Enter')saveCatEdit(${idx});if(event.key==='Escape')renderCatsList()"/>
            </div>
            <div style="display:flex;gap:6px;flex-shrink:0">
              <button class="btn btn-ghost btn-sm" id="catEditBtn_${idx}" onclick="startCatEdit(${idx})" title="تعديل">✏️</button>
              <button class="btn btn-ghost btn-sm" id="catSaveBtn_${idx}" onclick="saveCatEdit(${idx})" style="display:none;color:var(--success)">✅</button>
              <button class="btn btn-ghost btn-sm" id="catCancelBtn_${idx}" onclick="renderCatsList()" style="display:none">✕</button>
              <button class="btn btn-ghost btn-sm" onclick="deleteCategory(${idx})" style="color:var(--danger)" title="حذف">🗑️</button>
            </div>
          </div>`;
    })
    .join("");
}

function addCategory() {
  const inp = document.getElementById("newCatInput");
  const name = inp.value.trim();
  if (!name) {
    showToast("اكتب اسم التصنيف أولاً", "error");
    return;
  }
  if (DB.categories.includes(name)) {
    showToast("هذا التصنيف موجود بالفعل", "error");
    return;
  }
  DB.categories.push(name);
  inp.value = "";
  renderCatsList();
  showToast(`✅ تم إضافة "${name}"`, "success");
}

function startCatEdit(idx) {
  document.getElementById("catView_" + idx).style.display = "none";
  document.getElementById("catEdit_" + idx).style.display = "flex";
  document.getElementById("catEditBtn_" + idx).style.display = "none";
  document.getElementById("catSaveBtn_" + idx).style.display = "";
  document.getElementById("catCancelBtn_" + idx).style.display = "";
  const inp = document.getElementById("catInput_" + idx);
  inp.focus();
  inp.select();
}

function saveCatEdit(idx) {
  const inp = document.getElementById("catInput_" + idx);
  const newName = inp.value.trim();
  if (!newName) {
    showToast("الاسم لا يمكن أن يكون فارغاً", "error");
    return;
  }
  if (DB.categories.includes(newName) && DB.categories[idx] !== newName) {
    showToast("هذا الاسم موجود بالفعل", "error");
    return;
  }
  const oldName = DB.categories[idx];
  // تحديث اسم التصنيف في جميع المنتجات تلقائياً
  DB.products.forEach((p) => {
    if (p.cat === oldName) p.cat = newName;
  });
  DB.categories[idx] = newName;
  renderCatsList();
  showToast(`✅ تم تغيير "${oldName}" إلى "${newName}"`, "success");
}

function deleteCategory(idx) {
  const name = DB.categories[idx];
  const usedCount = DB.products.filter((p) => p.cat === name).length;
  if (usedCount > 0) {
    if (
      !confirm(
        `التصنيف "${name}" مستخدم في ${usedCount} منتج.\nهل تريد حذفه وتحويل هذه المنتجات إلى "أخرى"؟`,
      )
    )
      return;
    if (!DB.categories.includes("أخرى")) DB.categories.push("أخرى");
    DB.products.forEach((p) => {
      if (p.cat === name) p.cat = "أخرى";
    });
  } else {
    if (!confirm(`هل تريد حذف تصنيف "${name}"؟`)) return;
  }
  DB.categories.splice(idx, 1);
  renderCatsList();
  showToast(`تم حذف "${name}"`, "success");
}
function exportBackup() {
  const blob = new Blob([JSON.stringify(DB, null, 2)], {
    type: "application/json",
  });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "erp_backup_" + TODAY + ".json";
  a.click();
  showToast("تم تصدير النسخة الاحتياطية", "success");
}
function importBackup(input) {
  const f = input.files[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = (e) => {
    try {
      Object.assign(DB, JSON.parse(e.target.result));
      showToast("تم الاستيراد بنجاح", "success");
    } catch {
      showToast("ملف غير صحيح", "error");
    }
  };
  r.readAsText(f);
}

// ═══════════════════════════════════════════
// HR — EMPLOYEES, ATTENDANCE, PAYROLL
// ═══════════════════════════════════════════
let editingEmpId = null,
  currentRangeType = "num";

function renderHR() {
  const cur = DB.settings.currency;
  const month = document.getElementById("hrMonthFilter").value;
  const curMonth = new Date().getMonth() + 1;
  const targetMonth = month ? parseInt(month) : curMonth;
  const targetMonthStr =
    new Date().getFullYear() + "-" + String(targetMonth).padStart(2, "0");

  // Populate attendance emp filter
  const attSel = document.getElementById("attEmpFilter");
  attSel.innerHTML =
    '<option value="">كل الموظفين</option>' +
    DB.employees
      .map((e) => `<option value="${e.id}">${e.name}</option>`)
      .join("");
  if (!document.getElementById("attDateFilter").value)
    document.getElementById("attDateFilter").value = TODAY;

  let totalBasic = 0,
    totalDeductions = 0,
    totalNet = 0;

  // Employees table
  document.getElementById("hrTbody").innerHTML =
    DB.employees
      .map((e, i) => {
        const absences = DB.attendance.filter(
          (a) =>
            a.empId === e.id &&
            a.date.startsWith(targetMonthStr) &&
            a.type === "absent",
        ).length;
        const lates = DB.attendance.filter(
          (a) =>
            a.empId === e.id &&
            a.date.startsWith(targetMonthStr) &&
            a.type === "late",
        ).length;
        const bonuses = DB.adjustments
          .filter(
            (a) =>
              a.empId === e.id &&
              a.month === targetMonthStr &&
              a.type === "bonus",
          )
          .reduce((s, a) => s + a.amount, 0);
        const extra_deductions = DB.adjustments
          .filter(
            (a) =>
              a.empId === e.id &&
              a.month === targetMonthStr &&
              a.type === "deduction",
          )
          .reduce((s, a) => s + a.amount, 0);
        const absenceDeduct = absences * e.dailyDeduct;
        const lateDeduct = Math.round(lates * (e.dailyDeduct / 2));
        const totalDeduct = absenceDeduct + lateDeduct + extra_deductions;
        const allowances = e.transport + e.other + bonuses;
        const net = Math.max(0, e.basic + allowances - totalDeduct);
        totalBasic += e.basic + allowances;
        totalDeductions += totalDeduct;
        totalNet += net;
        const col = avatarColors[i % avatarColors.length];
        return `<tr>
      <td><div style="display:flex;align-items:center;gap:8px"><div class="emp-avatar" style="width:34px;height:34px;background:${col}22;color:${col};font-size:12px">${e.name.charAt(0)}</div><div><div style="font-size:13px;font-weight:600;color:var(--text)">${e.name}</div><div style="font-size:11px;color:var(--text3)">${e.phone}</div></div></div></td>
      <td style="color:var(--text2)">${e.job}</td>
      <td style="font-weight:600">${e.basic.toLocaleString()} ${cur}</td>
      <td style="color:${absences > 0 ? "var(--danger)" : "var(--text3)"};font-weight:${absences > 0 ? 700 : 400}">${absences} يوم${lates > 0 ? " + " + lates + " تأخير" : ""}</td>
      <td style="color:var(--success)">${allowances.toLocaleString()} ${cur}</td>
      <td style="color:${totalDeduct > 0 ? "var(--accent3)" : "var(--text3)"};font-weight:${totalDeduct > 0 ? 700 : 400}">${totalDeduct.toLocaleString()} ${cur}</td>
      <td style="color:var(--accent);font-weight:700;font-size:15px">${net.toLocaleString()} ${cur}</td>
      <td><span class="badge ${e.active ? "badge-success" : "badge-danger"}">${e.active ? "نشط" : "موقوف"}</span></td>
      <td style="display:flex;gap:4px;flex-wrap:wrap">
        <button class="btn btn-ghost btn-sm" onclick="openEmpModal(${e.id})">✏️</button>
        <button class="btn btn-ghost btn-sm" onclick="openDeductModal(${e.id})" title="خصم / بدل">💰</button>
        <button class="btn btn-ghost btn-sm" onclick="printEmpSlip(${e.id},'${targetMonthStr}')" title="كشف راتب">🖨</button>
        <button class="btn btn-ghost btn-sm" onclick="toggleEmpActive(${e.id})" style="color:var(--warning)">${e.active ? "إيقاف" : "تفعيل"}</button>
      </td>
    </tr>`;
      })
      .join("") ||
    '<tr><td colspan="9" style="text-align:center;color:var(--text3);padding:20px">لا يوجد موظفون — أضف موظفاً جديداً</td></tr>';

  document.getElementById("hr-count").textContent = DB.employees.filter(
    (e) => e.active,
  ).length;
  document.getElementById("hr-total").textContent =
    totalBasic.toLocaleString() + " " + cur;
  document.getElementById("hr-deductions").textContent =
    totalDeductions.toLocaleString() + " " + cur;
  document.getElementById("hr-net").textContent =
    totalNet.toLocaleString() + " " + cur;

  // Attendance log
  const empF = document.getElementById("attEmpFilter").value;
  const dateF = document.getElementById("attDateFilter").value;
  const attList = DB.attendance.filter(
    (a) => (!empF || a.empId == empF) && (!dateF || a.date === dateF),
  );
  const typeCls = {
    absent: "att-badge-absent",
    late: "att-badge-late",
    leave: "att-badge-leave",
  };
  const typeLabel = { absent: "غياب", late: "تأخير", leave: "إجازة" };
  document.getElementById("attTbody").innerHTML = attList.length
    ? attList
        .map((a) => {
          const emp = DB.employees.find((e) => e.id === a.empId);
          return `<tr><td style="color:var(--text);font-weight:500">${emp ? emp.name : "—"}</td><td style="color:var(--text3)">${a.date}</td><td style="font-size:12px;color:var(--text2)">${getDayName(a.date)}</td><td><span class="${typeCls[a.type] || "badge-info"}">${typeLabel[a.type] || a.type}</span></td><td style="color:var(--text2)">${a.reason || "—"}</td><td><button class="btn btn-ghost btn-sm" onclick="deleteAttendance(${a.id})" style="color:var(--danger)">🗑️</button></td></tr>`;
        })
        .join("")
    : '<tr><td colspan="6" style="text-align:center;color:var(--text3);padding:20px">لا توجد سجلات في هذا اليوم</td></tr>';
}

function openEmpModal(id) {
  editingEmpId = id || null;
  document.getElementById("empModalTitle").textContent = id
    ? "تعديل بيانات الموظف"
    : "موظف جديد";
  if (id) {
    const e = DB.employees.find((x) => x.id === id);
    if (e) {
      document.getElementById("empName").value = e.name;
      document.getElementById("empJob").value = e.job;
      document.getElementById("empPhone").value = e.phone;
      document.getElementById("empJoinDate").value = e.joinDate;
      document.getElementById("empBasic").value = e.basic;
      document.getElementById("empTransport").value = e.transport;
      document.getElementById("empOther").value = e.other;
      document.getElementById("empDailyDeduct").value = e.dailyDeduct;
      document.getElementById("empContractType").value = e.contractType;
    }
  } else {
    ["empName", "empJob", "empPhone"].forEach(
      (fid) => (document.getElementById(fid).value = ""),
    );
    document.getElementById("empJoinDate").value = TODAY;
    document.getElementById("empBasic").value = "";
    document.getElementById("empTransport").value = 0;
    document.getElementById("empOther").value = 0;
    document.getElementById("empDailyDeduct").value = 0;
  }
  openModal("empModal");
}

function saveEmployee() {
  const name = document.getElementById("empName").value.trim();
  const basic = parseFloat(document.getElementById("empBasic").value) || 0;
  if (!name || !basic) {
    showToast("يرجى إدخال الاسم والراتب الأساسي");
    return;
  }
  const data = {
    name,
    job: document.getElementById("empJob").value,
    phone: document.getElementById("empPhone").value,
    joinDate: document.getElementById("empJoinDate").value,
    basic,
    transport: parseFloat(document.getElementById("empTransport").value) || 0,
    other: parseFloat(document.getElementById("empOther").value) || 0,
    dailyDeduct:
      parseFloat(document.getElementById("empDailyDeduct").value) || 0,
    contractType: document.getElementById("empContractType").value,
    active: true,
  };
  if (editingEmpId) {
    const idx = DB.employees.findIndex((e) => e.id === editingEmpId);
    if (idx !== -1) DB.employees[idx] = { ...DB.employees[idx], ...data };
    showToast("تم تعديل بيانات الموظف", "success");
  } else {
    DB.employees.push({ id: DB.nextEmpId++, ...data });
    showToast("تم إضافة الموظف بنجاح", "success");
  }
  closeModal("empModal");
  renderHR();
}

function toggleEmpActive(id) {
  const e = DB.employees.find((x) => x.id === id);
  if (e) {
    e.active = !e.active;
    renderHR();
    showToast(e.active ? "تم تفعيل الموظف" : "تم إيقاف الموظف", "success");
  }
}

function openDeductModal(empId) {
  const sel = document.getElementById("deductEmpId");
  sel.innerHTML = DB.employees
    .map(
      (e) =>
        `<option value="${e.id}"${e.id === empId ? " selected" : ""}>${e.name}</option>`,
    )
    .join("");
  document.getElementById("deductAmount").value = "";
  document.getElementById("deductReason").value = "";
  const now = new Date();
  document.getElementById("deductMonth").value =
    now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0");
  openModal("deductModal");
}

function saveDeduction() {
  const empId = parseInt(document.getElementById("deductEmpId").value);
  const amount = parseFloat(document.getElementById("deductAmount").value) || 0;
  if (!amount) {
    showToast("يرجى إدخال المبلغ");
    return;
  }
  DB.adjustments.push({
    id: DB.nextAdjId++,
    empId,
    type: document.getElementById("deductType").value,
    amount,
    reason: document.getElementById("deductReason").value,
    month: document.getElementById("deductMonth").value,
  });
  closeModal("deductModal");
  renderHR();
  showToast("تم التسجيل بنجاح", "success");
}

function recordAttendance() {
  const empId = parseInt(document.getElementById("attEmpFilter").value);
  const date = document.getElementById("attDateFilter").value || TODAY;
  if (!empId) {
    showToast("اختر موظفاً أولاً");
    return;
  }
  const types = ["absent", "late", "leave"];
  const labels = ["غياب", "تأخير", "إجازة"];
  const choice = prompt(
    "نوع السجل:\n1- غياب\n2- تأخير\n3- إجازة\nاكتب رقم الاختيار:",
  );
  const idx = (parseInt(choice) || 1) - 1;
  const type = types[Math.max(0, Math.min(2, idx))];
  const reason = prompt("السبب (اختياري):") || "";
  DB.attendance.push({ id: DB.nextAttId++, empId, date, type, reason });
  renderHR();
  showToast("تم تسجيل " + labels[idx] + " بنجاح", "success");
}

function deleteAttendance(id) {
  DB.attendance = DB.attendance.filter((a) => a.id !== id);
  renderHR();
  showToast("تم حذف السجل", "success");
}

function printPayroll() {
  const cur = DB.settings.currency;
  const now = new Date();
  const monthStr =
    now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0");
  const monthName = now.toLocaleDateString("ar-EG", {
    month: "long",
    year: "numeric",
  });
  let rows = "",
    grandNet = 0;
  DB.employees.forEach((e, i) => {
    const absences = DB.attendance.filter(
      (a) =>
        a.empId === e.id && a.date.startsWith(monthStr) && a.type === "absent",
    ).length;
    const lates = DB.attendance.filter(
      (a) =>
        a.empId === e.id && a.date.startsWith(monthStr) && a.type === "late",
    ).length;
    const bonuses = DB.adjustments
      .filter(
        (a) => a.empId === e.id && a.month === monthStr && a.type === "bonus",
      )
      .reduce((s, a) => s + a.amount, 0);
    const extraDeduct = DB.adjustments
      .filter(
        (a) =>
          a.empId === e.id && a.month === monthStr && a.type === "deduction",
      )
      .reduce((s, a) => s + a.amount, 0);
    const absDeduct = absences * e.dailyDeduct,
      lateDeduct = Math.round(lates * (e.dailyDeduct / 2));
    const totalDeduct = absDeduct + lateDeduct + extraDeduct;
    const allowances = e.transport + e.other + bonuses;
    const net = Math.max(0, e.basic + allowances - totalDeduct);
    grandNet += net;
    rows += `<tr><td style="padding:8px 10px;border-bottom:1px solid #eee;font-size:13px">${e.name}</td><td style="padding:8px 10px;border-bottom:1px solid #eee;font-size:12px;color:#666">${e.job}</td><td style="padding:8px 10px;border-bottom:1px solid #eee;text-align:center">${e.basic.toLocaleString()}</td><td style="padding:8px 10px;border-bottom:1px solid #eee;text-align:center;color:#27ae60">${allowances.toLocaleString()}</td><td style="padding:8px 10px;border-bottom:1px solid #eee;text-align:center;color:#e74c3c">${totalDeduct.toLocaleString()}</td><td style="padding:8px 10px;border-bottom:1px solid #eee;text-align:center;font-weight:700;color:#6c63ff">${net.toLocaleString()}</td></tr>`;
  });
  document.getElementById("payslipArea").innerHTML = `
    <div style="text-align:center;margin-bottom:20px;padding-bottom:14px;border-bottom:3px solid #6c63ff">
      <div style="font-size:20px;font-weight:700;color:#1a1a2e">${DB.settings.bizName}</div>
      <div style="font-size:14px;color:#6c63ff;margin-top:4px">كشف رواتب — ${monthName}</div>
    </div>
    <table style="width:100%;border-collapse:collapse">
      <thead><tr style="background:#6c63ff"><th style="padding:9px 10px;color:white;text-align:right;font-size:12px">الموظف</th><th style="padding:9px 10px;color:white;text-align:right;font-size:12px">الوظيفة</th><th style="padding:9px 10px;color:white;text-align:center;font-size:12px">الأساسي</th><th style="padding:9px 10px;color:white;text-align:center;font-size:12px">البدلات</th><th style="padding:9px 10px;color:white;text-align:center;font-size:12px">الخصومات</th><th style="padding:9px 10px;color:white;text-align:center;font-size:12px">الصافي</th></tr></thead>
      <tbody>${rows}</tbody>
      <tfoot><tr style="background:#6c63ff10"><td colspan="5" style="padding:10px;font-weight:700;text-align:right">إجمالي الرواتب المستحقة:</td><td style="padding:10px;font-weight:700;color:#6c63ff;text-align:center;font-size:16px">${grandNet.toLocaleString()} ${cur}</td></tr></tfoot>
    </table>
    <div style="text-align:center;margin-top:16px;color:#999;font-size:11px">تاريخ الطباعة: ${new Date().toLocaleDateString("ar-EG")}</div>`;
  openModal("payslipModal");
}

function doPrintPayroll() {
  const content = document.getElementById("payslipArea").innerHTML;
  const w = window.open("", "_blank", "width=800,height=600");
  w.document.write(
    `<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="UTF-8"><title>كشف رواتب</title><link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet"><style>*{box-sizing:border-box;margin:0;padding:0;}body{font-family:Cairo,sans-serif;background:white;padding:20px;direction:rtl;}@page{margin:10mm;}</style></head><body><div style="max-width:700px;margin:0 auto">${content}</div><script>window.onload=function(){window.print();window.onafterprint=function(){window.close();}}<\/script></body></html>`,
  );
  w.document.close();
}

function printEmpSlip(empId, monthStr) {
  const e = DB.employees.find((x) => x.id === empId);
  if (!e) return;
  const cur = DB.settings.currency;
  const absences = DB.attendance.filter(
    (a) =>
      a.empId === empId && a.date.startsWith(monthStr) && a.type === "absent",
  ).length;
  const lates = DB.attendance.filter(
    (a) =>
      a.empId === empId && a.date.startsWith(monthStr) && a.type === "late",
  ).length;
  const bonuses = DB.adjustments.filter(
    (a) => a.empId === empId && a.month === monthStr && a.type === "bonus",
  );
  const extraDeductions = DB.adjustments.filter(
    (a) => a.empId === empId && a.month === monthStr && a.type === "deduction",
  );
  const totalBonus = bonuses.reduce((s, a) => s + a.amount, 0);
  const totalExtraDeduct = extraDeductions.reduce((s, a) => s + a.amount, 0);
  const absDeduct = absences * e.dailyDeduct,
    lateDeduct = Math.round(lates * (e.dailyDeduct / 2));
  const totalDeduct = absDeduct + lateDeduct + totalExtraDeduct;
  const allowances = e.transport + e.other + totalBonus;
  const net = Math.max(0, e.basic + allowances - totalDeduct);
  const monthName = new Date(monthStr + "-01").toLocaleDateString("ar-EG", {
    month: "long",
    year: "numeric",
  });
  const html = `<div style="font-family:Cairo,sans-serif;direction:rtl;max-width:500px;margin:0 auto;padding:24px;border:2px solid #6c63ff;border-radius:12px">
    <div style="text-align:center;margin-bottom:18px;padding-bottom:14px;border-bottom:3px solid #6c63ff">
      <div style="font-size:20px;font-weight:700;color:#1a1a2e">${DB.settings.bizName}</div>
      <div style="font-size:13px;color:#6c63ff">قسيمة راتب — ${monthName}</div>
    </div>
    <div style="background:#f8f8ff;border-radius:8px;padding:12px 14px;margin-bottom:16px;border-right:3px solid #6c63ff">
      <div style="font-size:16px;font-weight:700;color:#1a1a2e">${e.name}</div>
      <div style="font-size:13px;color:#666">${e.job}</div>
      <div style="font-size:12px;color:#999">تعيين: ${e.joinDate}</div>
    </div>
    <table style="width:100%;border-collapse:collapse;margin-bottom:14px">
      <tr style="background:#f0f0f0"><td style="padding:8px 12px;font-size:13px;font-weight:600" colspan="2">المستحقات</td></tr>
      <tr><td style="padding:7px 12px;font-size:13px;color:#666;border-bottom:1px solid #f0f0f0">الراتب الأساسي</td><td style="padding:7px 12px;font-size:13px;text-align:left;border-bottom:1px solid #f0f0f0;color:#27ae60;font-weight:600">${e.basic.toLocaleString()} ${cur}</td></tr>
      <tr><td style="padding:7px 12px;font-size:13px;color:#666;border-bottom:1px solid #f0f0f0">بدل النقل</td><td style="padding:7px 12px;font-size:13px;text-align:left;border-bottom:1px solid #f0f0f0;color:#27ae60">${e.transport.toLocaleString()} ${cur}</td></tr>
      ${e.other > 0 ? `<tr><td style="padding:7px 12px;font-size:13px;color:#666;border-bottom:1px solid #f0f0f0">بدلات أخرى</td><td style="padding:7px 12px;font-size:13px;text-align:left;border-bottom:1px solid #f0f0f0;color:#27ae60">${e.other.toLocaleString()} ${cur}</td></tr>` : ""}
      ${bonuses.map((b) => `<tr><td style="padding:7px 12px;font-size:13px;color:#666;border-bottom:1px solid #f0f0f0">مكافأة: ${b.reason}</td><td style="padding:7px 12px;font-size:13px;text-align:left;border-bottom:1px solid #f0f0f0;color:#27ae60">${b.amount.toLocaleString()} ${cur}</td></tr>`).join("")}
      <tr style="background:#f0f0f0"><td style="padding:8px 12px;font-size:13px;font-weight:600" colspan="2">الخصومات</td></tr>
      ${absences > 0 ? `<tr><td style="padding:7px 12px;font-size:13px;color:#666;border-bottom:1px solid #f0f0f0">خصم غياب (${absences} يوم)</td><td style="padding:7px 12px;font-size:13px;text-align:left;border-bottom:1px solid #f0f0f0;color:#e74c3c">- ${absDeduct.toLocaleString()} ${cur}</td></tr>` : ""}
      ${lates > 0 ? `<tr><td style="padding:7px 12px;font-size:13px;color:#666;border-bottom:1px solid #f0f0f0">خصم تأخير (${lates} مرة)</td><td style="padding:7px 12px;font-size:13px;text-align:left;border-bottom:1px solid #f0f0f0;color:#e74c3c">- ${lateDeduct.toLocaleString()} ${cur}</td></tr>` : ""}
      ${extraDeductions.map((d) => `<tr><td style="padding:7px 12px;font-size:13px;color:#666;border-bottom:1px solid #f0f0f0">خصم: ${d.reason}</td><td style="padding:7px 12px;font-size:13px;text-align:left;border-bottom:1px solid #f0f0f0;color:#e74c3c">- ${d.amount.toLocaleString()} ${cur}</td></tr>`).join("")}
    </table>
    <div style="background:#6c63ff;border-radius:8px;padding:14px;display:flex;justify-content:space-between;align-items:center">
      <span style="color:white;font-size:16px;font-weight:700">صافي الراتب</span>
      <span style="color:white;font-size:22px;font-weight:700">${net.toLocaleString()} ${cur}</span>
    </div>
    <div style="text-align:center;margin-top:16px;color:#999;font-size:11px">طُبع في: ${new Date().toLocaleDateString("ar-EG")}</div>
  </div>`;
  document.getElementById("payslipArea").innerHTML = html;
  openModal("payslipModal");
}

// ═══════════════════════════════════════════
// BULK PRINT BY RANGE
// ═══════════════════════════════════════════
function openPrintRangeModal() {
  openModal("printRangeModal");
  updateRangePreview();
}
function setRangeType(type) {
  currentRangeType = type;
  document.getElementById("rangeByNumSection").style.display =
    type === "num" ? "" : "none";
  document.getElementById("rangeByDateSection").style.display =
    type === "date" ? "" : "none";
  document.getElementById("rangeByManualSection").style.display =
    type === "manual" ? "" : "none";
  ["rangeByNum", "rangeByDate", "rangeByManual"].forEach((id) =>
    document.getElementById(id).classList.remove("active-range"),
  );
  const map = {
    num: "rangeByNum",
    date: "rangeByDate",
    manual: "rangeByManual",
  };
  document.getElementById(map[type]).classList.add("active-range");
  updateRangePreview();
}
function getRangeInvoices() {
  if (currentRangeType === "num") {
    const from = parseInt(document.getElementById("rangeFrom").value) || 1;
    const to = parseInt(document.getElementById("rangeTo").value) || 1;
    return DB.invoices.filter((i) => i.id >= from && i.id <= to);
  } else if (currentRangeType === "date") {
    const from = document.getElementById("rangeDateFrom").value;
    const to = document.getElementById("rangeDateTo").value;
    return DB.invoices.filter(
      (i) => (!from || i.date >= from) && (!to || i.date <= to),
    );
  } else {
    const manual = document.getElementById("rangeManual").value;
    const ids = manual
      .split(",")
      .map((x) => parseInt(x.trim()))
      .filter(Boolean);
    return ids
      .map((id) => DB.invoices.find((i) => i.id === id))
      .filter(Boolean);
  }
}
function updateRangePreview() {
  const invs = getRangeInvoices();
  const total = invs.reduce((s, i) => s + i.total, 0);
  document.getElementById("rangePreview").textContent =
    "سيتم طباعة " +
    invs.length +
    " فاتورة — الإجمالي: " +
    total.toFixed(2) +
    " " +
    DB.settings.currency;
}
function previewRangeInvoices() {
  const invs = getRangeInvoices();
  if (!invs.length) {
    showToast("لا توجد فواتير في هذا النطاق", "error");
    return;
  }
  closeModal("printRangeModal");
  openBulkPrint(invs, "معاينة " + invs.length + " فاتورة");
}

function openModal(id) {
  document.getElementById(id).classList.add("open");
}
function closeModal(id) {
  document.getElementById(id).classList.remove("open");
}
function topbarAction() {}
let toastTimer;
function showToast(msg, type) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.className = "toast show" + (type ? " " + type : "");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 3000);
}
function updateClock() {
  document.getElementById("clock").textContent = new Date().toLocaleTimeString(
    "ar-EG",
    {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    },
  );
}
setInterval(updateClock, 1000);
updateClock();
initTheme();
["rangeFrom", "rangeTo", "rangeDateFrom", "rangeDateTo", "rangeManual"].forEach(
  (id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", updateRangePreview);
  },
);

(function () {
  let startX = 0,
    startY = 0;
  document.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    },
    { passive: true },
  );
  document.addEventListener(
    "touchend",
    (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = Math.abs(e.changedTouches[0].clientY - startY);
      if (dy > 60) return; // mostly vertical swipe, ignore
      if (
        dx < -60 &&
        document.getElementById("sidebar").classList.contains("closed")
      )
        return; // left swipe but closed already
      if (dx > 60 && startX < 40) {
        openSidebar();
      } // swipe right from edge → open
      if (dx < -60) {
        closeSidebar();
      } // swipe left → close
    },
    { passive: true },
  );
})();
