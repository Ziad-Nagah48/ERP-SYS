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
      pass: "1234",
      role: "admin",
      active: true,
    },
    {
      id: 2,
      name: "سارة علي",
      username: "cashier",
      pass: "1234",
      role: "cashier",
      active: true,
    },
    {
      id: 3,
      name: "أحمد حسن",
      username: "supervisor",
      pass: "1234",
      role: "supervisor",
      active: true,
    },
  ],
  nextInvId: 5,
  nextProdId: 11,
  nextCustId: 5,
  nextSuppId: 3,
  nextPurchId: 3,
  nextUserId: 4,
};

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

function selectRole(r) {
  document
    .querySelectorAll(".role-card")
    .forEach((c) => c.classList.remove("selected"));
  document
    .getElementById(r === "admin" ? "roleAdmin" : "roleCashier")
    .classList.add("selected");
}
function doLogin() {
  const u = document.getElementById("loginUser").value.trim();
  const p = document.getElementById("loginPass").value.trim();
  const user = DB.users.find(
    (x) => x.username === u && x.pass === p && x.active,
  );
  if (!user) {
    showToast("اسم المستخدم أو كلمة المرور غير صحيحة", "error");
    return;
  }
  currentUser = user;
  currentUserRole = user.role;
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("sidebar").style.display = "flex";
  document.getElementById("mainArea").style.display = "flex";
  document.getElementById("sideAvatar").textContent = user.name.charAt(0);
  document.getElementById("sideUserName").textContent = user.name;
  document.getElementById("sideUserRole").textContent =
    roleLabels[user.role] || "مستخدم";
  buildNav();
  renderDashboard();
}
function logout() {
  document.getElementById("loginScreen").style.display = "flex";
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("mainArea").style.display = "none";
}
function toggleTheme() {
  isDark = !isDark;
  document.body.classList.toggle("light", !isDark);
  document.getElementById("themeBtn").textContent = isDark
    ? "🌙 فاتح"
    : "☀️ داكن";
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
    { sec: "التحليل والإعدادات", roles: ["admin"] },
    { id: "reports", icon: "📈", label: "التقارير", roles: ["admin"] },
    { id: "users", icon: "👤", label: "المستخدمين", roles: ["admin"] },
    { id: "settings", icon: "⚙️", label: "الإعدادات", roles: ["admin"] },
  ];
  let html = "";
  allItems.forEach((item) => {
    if (item.sec) {
      if (!item.roles || item.roles.includes(currentUserRole))
        html += `<div class="nav-section">${item.sec}</div>`;
    } else if (!item.roles || item.roles.includes(currentUserRole)) {
      html += `<div class="nav-item" id="nav-${item.id}" onclick="navigate('${item.id}',this)"><span class="nav-icon">${item.icon}</span><span>${item.label}</span></div>`;
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
    suppliers: renderSuppliers,
    purchases: renderPurchases,
    users: renderUsers,
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
  filterPosProducts();
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
        p.code.toLowerCase().includes(q)),
  );
  document.getElementById("posGrid").innerHTML =
    filtered
      .map(
        (p) =>
          `<div class="product-tile" onclick="addToCart(${p.id})"><div class="pt-color" style="background:${catColors[p.cat] || "#888"}"></div><div class="pt-name">${p.name}</div><div class="pt-price">${p.sellPrice} ${DB.settings.currency}</div><div class="pt-unit">${p.unit} · مخزون: ${p.qty}</div></div>`,
      )
      .join() ||
    '<div style="color:var(--text3);padding:20px;font-size:13px">لا توجد منتجات</div>';
}
function addToCart(id) {
  const p = DB.products.find((x) => x.id === id);
  if (!p) return;
  if (cart[id]) cart[id].cartQty++;
  else cart[id] = { ...p, cartQty: 1 };
  renderCart();
}
function changeCartQty(id, d) {
  if (!cart[id]) return;
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
      '<div class="cart-empty-msg">اضغط على منتج لإضافته</div>';
    calcTotals();
    return;
  }
  document.getElementById("cartBody").innerHTML = items
    .map(
      (item) =>
        `<div class="cart-row"><div><div class="cr-name">${item.name}</div><div class="cr-sub">${item.sellPrice} ${DB.settings.currency}/${item.unit}</div></div><div class="qty-box"><button class="qty-btn" onclick="changeCartQty(${item.id},-1)">−</button><span class="qty-val">${item.cartQty}</span><button class="qty-btn" onclick="changeCartQty(${item.id},1)">+</button></div><div class="cr-total">${(item.cartQty * item.sellPrice).toFixed(2)} ${DB.settings.currency}</div><button class="del-x" onclick="removeFromCart(${item.id})">×</button></div>`,
    )
    .join("");
  calcTotals();
}
function calcTotals() {
  const items = Object.values(cart);
  const sub = items.reduce((s, i) => s + i.cartQty * i.sellPrice, 0);
  const disc = parseFloat(document.getElementById("discInput").value) || 0;
  const total = Math.max(0, sub - disc);
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
  const disc = parseFloat(document.getElementById("discInput").value) || 0;
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
    })),
    discount: disc,
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
function printInvoice() {
  closeModal("successModal");
  const inv = DB.invoices.find((i) => i.id === lastInvoiceId);
  if (inv) openPrintPreview(inv);
}
function printInvoiceById(id) {
  const inv = DB.invoices.find((i) => i.id === id);
  if (inv) openPrintPreview(inv);
}

function buildInvoiceHTML(inv) {
  const cust = DB.customers.find((c) => c.id === inv.customerId);
  const cur = DB.settings.currency;
  const itemsHtml = inv.items
    .map(
      (item) =>
        `<tr><td style="padding:9px 12px;border-bottom:1px solid #eee;font-size:13px;color:#333">${item.name || "صنف"}</td><td style="padding:9px 12px;border-bottom:1px solid #eee;font-size:13px;color:#666;text-align:center">${item.unit || ""}</td><td style="padding:9px 12px;border-bottom:1px solid #eee;font-size:13px;color:#666;text-align:center">${item.qty}</td><td style="padding:9px 12px;border-bottom:1px solid #eee;font-size:13px;color:#666;text-align:center">${item.price.toFixed(2)}</td><td style="padding:9px 12px;border-bottom:1px solid #eee;font-size:13px;font-weight:600;color:#333;text-align:left">${(item.qty * item.price).toFixed(2)}</td></tr>`,
    )
    .join("");
  const discRow =
    inv.discount > 0
      ? `<tr><td colspan="3" style="padding:6px 12px;font-size:13px;color:#666;text-align:right;border-bottom:1px solid #f0f0f0">الخصم:</td><td colspan="2" style="padding:6px 12px;font-size:13px;font-weight:600;color:#e74c3c;text-align:left;border-bottom:1px solid #f0f0f0">- ${inv.discount.toFixed(2)} ${cur}</td></tr>`
      : "";
  const remRow =
    inv.method === "credit" && inv.paid < inv.total
      ? `<tr><td colspan="3" style="padding:6px 12px;font-size:13px;color:#666;text-align:right;border-top:1px solid #eee">المدفوع:</td><td colspan="2" style="padding:6px 12px;font-size:13px;font-weight:600;color:#27ae60;text-align:left;border-top:1px solid #eee">${inv.paid.toFixed(2)} ${cur}</td></tr><tr><td colspan="3" style="padding:6px 12px;font-size:13px;color:#666;text-align:right">المتبقي:</td><td colspan="2" style="padding:6px 12px;font-size:13px;font-weight:700;color:#e74c3c;text-align:left">${(inv.total - inv.paid).toFixed(2)} ${cur}</td></tr>`
      : "";
  return `<div style="font-family:'Cairo',sans-serif;direction:rtl;color:#333;margin-bottom:28px;padding-bottom:20px;border-bottom:2px dashed #ddd">
    <div style="text-align:center;margin-bottom:18px;padding-bottom:14px;border-bottom:3px solid #6c63ff">
      <div style="font-size:22px;font-weight:700;color:#1a1a2e;margin-bottom:2px">${DB.settings.bizName}</div>
      ${DB.settings.address ? `<div style="font-size:12px;color:#888;margin-bottom:2px">${DB.settings.address}</div>` : ""}
      ${DB.settings.phone ? `<div style="font-size:12px;color:#888">📞 ${DB.settings.phone}</div>` : ""}
    </div>
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px">
      <div>
        <div style="font-size:20px;font-weight:700;color:#6c63ff">${inv.num}</div>
        <div style="font-size:12px;color:#999;margin-top:2px">${inv.dateTime || inv.date}</div>
        <div style="font-size:12px;color:#888">${getDayName(inv.date)}</div>
      </div>
      <div style="text-align:left">
        <span style="background:${statusColors[inv.status]}20;color:${statusColors[inv.status]};padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;border:1px solid ${statusColors[inv.status]}40">${statusLabels[inv.status]}</span>
        <div style="font-size:12px;color:#888;margin-top:4px;text-align:center">${payLabels[inv.method] || inv.method}</div>
      </div>
    </div>
    ${cust ? `<div style="background:#f8f8ff;border-radius:8px;padding:12px 14px;margin-bottom:16px;border-right:3px solid #6c63ff"><div style="font-size:11px;color:#999;margin-bottom:3px">بيانات العميل</div><div style="font-size:14px;font-weight:600;color:#1a1a2e">${cust.name}</div>${cust.phone ? `<div style="font-size:12px;color:#666">${cust.phone}</div>` : ""}</div>` : ""}
    <table style="width:100%;border-collapse:collapse;margin-bottom:0;border-radius:8px 8px 0 0;overflow:hidden">
      <thead><tr style="background:linear-gradient(135deg,#6c63ff,#8b7ff5)"><th style="padding:10px 12px;font-size:12px;color:white;text-align:right;font-weight:600">الصنف</th><th style="padding:10px 12px;font-size:12px;color:white;text-align:center;font-weight:600">الوحدة</th><th style="padding:10px 12px;font-size:12px;color:white;text-align:center;font-weight:600">الكمية</th><th style="padding:10px 12px;font-size:12px;color:white;text-align:center;font-weight:600">السعر</th><th style="padding:10px 12px;font-size:12px;color:white;text-align:left;font-weight:600">الإجمالي</th></tr></thead>
      <tbody>${itemsHtml}</tbody>
    </table>
    <table style="width:100%;border-collapse:collapse;background:#f9f9f9;border-radius:0 0 8px 8px;overflow:hidden">
      <tr><td colspan="3" style="padding:8px 12px;font-size:13px;color:#666;text-align:right;border-bottom:1px solid #eee">المجموع الفرعي:</td><td colspan="2" style="padding:8px 12px;font-size:13px;font-weight:600;color:#333;text-align:left;border-bottom:1px solid #eee">${(inv.subtotal || inv.total).toFixed(2)} ${cur}</td></tr>
      ${discRow}
      <tr style="background:#6c63ff10"><td colspan="3" style="padding:12px 12px;font-size:15px;font-weight:700;color:#1a1a2e;text-align:right">الإجمالي الكلي:</td><td colspan="2" style="padding:12px 12px;font-size:18px;font-weight:700;color:#6c63ff;text-align:left">${inv.total.toFixed(2)} ${cur}</td></tr>
      ${remRow}
    </table>
    <div style="text-align:center;margin-top:20px;padding-top:14px;border-top:1px dashed #ddd">
      <div style="font-size:20px;margin-bottom:6px">🙏</div>
      <div style="font-size:14px;color:#6c63ff;font-weight:600">${DB.settings.thanks}</div>
      <div style="font-size:11px;color:#bbb;margin-top:6px">نظام إدارة ERP/POS</div>
    </div>
  </div>`;
}

function openPrintPreview(inv) {
  document.getElementById("printArea").innerHTML = buildInvoiceHTML(inv);
  openModal("printPreviewModal");
}
function doPrint() {
  const content = document.getElementById("printArea").innerHTML;
  const w = window.open("", "_blank", "width=620,height=840");
  w.document.write(
    `<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="UTF-8"><title>فاتورة</title><link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet"><style>*{box-sizing:border-box;margin:0;padding:0;}body{font-family:'Cairo',sans-serif;background:white;padding:20px;direction:rtl;}@page{margin:10mm;}</style></head><body><div style="max-width:480px;margin:0 auto;padding:20px">${content}</div><script>window.onload=function(){window.print();window.onafterprint=function(){window.close();}}<\/script></body></html>`,
  );
  w.document.close();
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
function doBulkPrint() {
  const content = document.getElementById("bulkPrintArea").innerHTML;
  const w = window.open("", "_blank", "width=640,height=900");
  w.document.write(
    `<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="UTF-8"><title>فواتير</title><link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet"><style>*{box-sizing:border-box;margin:0;padding:0;}body{font-family:'Cairo',sans-serif;background:white;padding:16px;direction:rtl;}@page{margin:8mm;}</style></head><body><div style="max-width:500px;margin:0 auto">${content}</div><script>window.onload=function(){window.print();window.onafterprint=function(){window.close();}}<\/script></body></html>`,
  );
  w.document.close();
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
        return `<tr><td><code style="background:var(--bg3);padding:2px 6px;border-radius:4px;font-size:12px;color:var(--text2)">${p.code}</code></td><td style="color:var(--text);font-weight:500">${p.name}</td><td><span style="background:${catColors[p.cat] || "#888"}22;color:${catColors[p.cat] || "#888"};padding:2px 8px;border-radius:20px;font-size:12px">${p.cat}</span></td><td>${p.buyPrice} ${DB.settings.currency}</td><td style="color:var(--accent);font-weight:600">${p.sellPrice} ${DB.settings.currency}</td><td style="color:${isLow ? "var(--accent3)" : "var(--text)"};font-weight:${isLow ? 700 : 400}">${p.qty} ${p.unit}</td><td><span class="badge ${isLow ? "badge-danger" : "badge-success"}">${isLow ? "منخفض" : "متوفر"}</span></td><td>${canModify ? `<button class="btn btn-ghost btn-sm btn-icon" onclick="editProduct(${p.id})" style="margin-left:4px">✏️</button><button class="btn btn-ghost btn-sm btn-icon" onclick="deleteProduct(${p.id})">🗑️</button>` : "—"}</td></tr>`;
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
      document.getElementById("pCat").value = p.cat;
      document.getElementById("pUnit").value = p.unit;
      document.getElementById("pBuyPrice").value = p.buyPrice;
      document.getElementById("pSellPrice").value = p.sellPrice;
      document.getElementById("pQty").value = p.qty;
      document.getElementById("pMinQty").value = p.minQty;
    }
  } else {
    ["pName", "pCode", "pBuyPrice", "pSellPrice", "pQty"].forEach(
      (fid) => (document.getElementById(fid).value = ""),
    );
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
    cat: document.getElementById("pCat").value,
    unit: document.getElementById("pUnit").value,
    buyPrice: parseFloat(document.getElementById("pBuyPrice").value) || 0,
    sellPrice,
    qty: parseInt(document.getElementById("pQty").value) || 0,
    minQty: parseInt(document.getElementById("pMinQty").value) || 5,
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
    const sorted = [...DB.products].sort((a, b) => b.sellPrice - a.sellPrice);
    html +=
      `<table style="width:100%"><thead><tr><th>#</th><th>الصنف</th><th>سعر البيع</th><th>الكمية المتوفرة</th></tr></thead><tbody>` +
      sorted
        .slice(0, 8)
        .map(
          (p, i) =>
            `<tr><td style="color:var(--accent);font-weight:700">${i + 1}</td><td style="color:var(--text)">${p.name}</td><td>${p.sellPrice} ${DB.settings.currency}</td><td>${p.qty}</td></tr>`,
        )
        .join() +
      "</tbody></table>";
  } else if (type === "profit") {
    const rev = DB.invoices.reduce((s, i) => s + i.paid, 0),
      cost = DB.purchases.reduce((s, p) => s + p.total, 0),
      profit = rev - cost;
    html += `<div class="metric-grid" style="grid-template-columns:repeat(3,1fr)"><div class="metric-card" style="background:var(--bg3)"><div class="metric-label">إجمالي الإيرادات</div><div class="metric-value">${rev.toLocaleString()} ${DB.settings.currency}</div></div><div class="metric-card" style="background:var(--bg3)"><div class="metric-label">إجمالي التكاليف</div><div class="metric-value">${cost.toLocaleString()} ${DB.settings.currency}</div></div><div class="metric-card" style="background:var(--bg3)"><div class="metric-label">صافي الربح</div><div class="metric-value">${profit.toLocaleString()} ${DB.settings.currency}</div></div></div>`;
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
  DB.users.push({
    id: DB.nextUserId++,
    name,
    username,
    pass,
    role: document.getElementById("uRole").value,
    active: true,
  });
  closeModal("userModal");
  renderUsers();
  showToast("تم إضافة المستخدم بنجاح", "success");
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
