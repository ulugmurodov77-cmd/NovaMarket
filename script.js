
/* ==========================================
   NOVAMARKET — 1000 PRODUCTS MARKETPLACE
   ========================================== */

const $ = id => document.getElementById(id);

const categories = [
  {name:"Elektronika", items:["Smartfon","Planshet","Aqlli soat","Naushnik","Bluetooth kolonka","Monitor","Klaviatura","Sichqoncha","Powerbank","Kamera"], brands:["Samsung","Apple","Xiaomi","Redmi","Huawei"], images:["photo-1511707171634-5f897ff02aa9","photo-1592899677977-9c10ca588bbd","photo-1517336714731-489689fd1ca8","photo-1505740420928-5e560c06d30e"]},
  {name:"Kompyuterlar",items:["Noutbuk","Gaming laptop","Kompyuter","Printer","SSD disk","Videokarta","Protsessor","RAM xotira","Router","Web kamera"],brands:["Asus","HP","Lenovo","Dell","Acer"],images:["photo-1496181133206-80ce9b88a853","photo-1517336714731-489689fd1ca8","photo-1587829741301-dc798b83add3"]},
  {name:"Televizorlar",items:["Smart TV","LED televizor","OLED televizor","Projektor","TV pristavka","Soundbar","Uy kinoteatri","TV antenna","DVD player","Media player"],brands:["LG","Samsung","Sony","Philips","TCL"],images:["photo-1593359677879-a4bb92f829d1","photo-1574717024653-61fd2cf4d44d"]},
  {name:"Kiyim",items:["Futbolka","Ko‘ylak","Kurtka","Huddi","Jinsi shim","Sport kostyum","Klassik shim","Sviter","Palto","Shortik"],brands:["Nike","Adidas","Puma","Zara","Premium"],images:["photo-1521572163474-6864f9cf17ab","photo-1551028719-00167b16eac5","photo-1556821840-3a63f95609a7"]},
  {name:"Oyoq kiyim",items:["Krossovka","Keda","Klassik tufli","Botinka","Sandaliya","Sport oyoq kiyimi","Etik","Lofer","Shippak","Futbol butsasi"],brands:["Nike","Adidas","Puma","New Balance","Reebok"],images:["photo-1542291026-7eec264c27ff","photo-1549298916-b41d501d3772","photo-1460353581641-37baddab0fa2"]},
  {name:"Sumka va aksessuar",items:["Ryukzak","Qo‘l sumkasi","Hamyon","Ko‘zoynak","Qo‘l soati","Kamar","Kepka","Sharf","Qo‘lqop","Sayohat sumkasi"],brands:["Nike","Adidas","Guess","Classic","Urban"],images:["photo-1553062407-98eeb64c6a62","photo-1511499767150-a48a237f0083","photo-1627123424574-724758594e93"]},
  {name:"Uy jihozlari",items:["Divan","Kreslo","Stol","Stul","Shkaf","Karavot","Kitob javoni","Komod","Tokcha","Gilam"],brands:["Modern","Royal","Comfort","Home","Luxury"],images:["photo-1555041469-a586c61ea9bc","photo-1503602642458-232111445657","photo-1616486338812-3dadae4b4ace"]},
  {name:"Oshxona",items:["Idishlar to‘plami","Qozon","Tova","Pichoq to‘plami","Choynak","Krujka","Termos","Likopcha","Blender idishi","Oshxona javoni"],brands:["Tefal","Bergner","Royal","Kitchen","Home"],images:["photo-1556911220-bff31c812dba","photo-1556911261-6bd341186b2f"]},
  {name:"Maishiy texnika",items:["Muzlatkich","Kir yuvish mashinasi","Changyutgich","Mikroto‘lqinli pech","Konditsioner","Dazmol","Elektr choynak","Fen","Mikser","Idish yuvish mashinasi"],brands:["Samsung","LG","Bosch","Artel","Beko"],images:["photo-1584622650111-993a426fbf0a","photo-1556911220-bff31c812dba"]},
  {name:"Go‘zallik",items:["Yuz kremi","Shampun","Soch niqobi","Makiyaj to‘plami","Lab bo‘yog‘i","Tonal krem","Teri parvarishi","Kosmetik cho‘tka","Yuz niqobi","Manikyur to‘plami"],brands:["L'Oreal","Maybelline","Nivea","Garnier","Beauty"],images:["photo-1608248543803-ba4f8c70ae0b","photo-1596462502278-27bfdc403348"]},
  {name:"Parfyumeriya",items:["Erkaklar atiri","Ayollar atiri","Uniseks atir","Parfyum to‘plami","Body mist","Dezodorant","Atir sovg‘a to‘plami","Mini atir","Parfyum moyi","Xushbo‘y krem"],brands:["Dior","Chanel","Versace","Armani","Luxury"],images:["photo-1541643600914-78b084683601","photo-1594035910387-fea47794261f"]},
  {name:"Sport",items:["Gantel","Yoga gilamchasi","Basketbol to‘pi","Futbol to‘pi","Velosiped","Trenajyor","Sport qo‘lqopi","Suv idishi","Arqon","Sport sumkasi"],brands:["Nike","Adidas","Puma","SportPro","Fitness"],images:["photo-1583454110551-21f2fa2afe61","photo-1519861531473-9200262188bf","photo-1601925260368-ae2f83cf8b7f"]},
  {name:"Avtomobil",items:["Avtomobil kamerasi","Telefon ushlagich","Avto gilamcha","Avto zaryadlagich","Rul qoplamasi","Avto changyutgich","Kompressor","Bagaj sumkasi","LED chiroq","Avto organizer"],brands:["Bosch","Xiaomi","Baseus","AutoPro","Premium"],images:["photo-1492144534655-ae79c964c9d7","photo-1503376780353-7e6692767b70"]},
  {name:"Bolalar",items:["Bolalar kiyimi","Bolalar aravachasi","Beshik","Bolalar stuli","Maktab sumkasi","Bolalar oyoq kiyimi","Bolalar ko‘rpasi","Bolalar idishi","Rivojlantiruvchi o‘yin","Bolalar javoni"],brands:["BabyCare","Chicco","Kids","Happy","Mini"],images:["photo-1516627145497-ae6968895b74","photo-1471286174890-9c112ffca5b4"]},
  {name:"O‘yinchoqlar",items:["Konstruktor","Mashina o‘yinchoq","Qo‘g‘irchoq","Robot","Yumshoq o‘yinchoq","Pazl","Stol o‘yini","Masofadan boshqariladigan mashina","Lego to‘plami","Rangli kubiklar"],brands:["LEGO","Hot Wheels","Barbie","Play","Fun"],images:["photo-1558877385-81a1a5b47e0b","photo-1599623560574-39d485900c95"]},
  {name:"Kitoblar",items:["Badiiy kitob","Biznes kitob","Tarix kitobi","Ilmiy kitob","Bolalar kitobi","Ingliz tili kitobi","Lug‘at","Dasturlash kitobi","Motivatsion kitob","Daftarlar to‘plami"],brands:["Premium","Classic","Edu","World","New"],images:["photo-1544947950-fa07a98d237f","photo-1512820790803-83ca734da794"]},
  {name:"Oziq-ovqat",items:["Shokolad","Qahva","Choy","Makaron","Guruch","Yong‘oq","Pechenye","Asal","Zaytun moyi","Quruq mevalar"],brands:["Nestle","Nescafe","Baraka","Organic","Daily"],images:["photo-1542838132-92c53300491e","photo-1509440159596-0249088772ff"]},
  {name:"Hayvonlar uchun",items:["Mushuk yemi","It yemi","Hayvonlar idishi","Uycha","O‘yinchoq","Bo‘yinbog‘","Taroq","Hayvonlar sumkasi","Qum to‘ldirgich","Parvarish to‘plami"],brands:["PetCare","Royal","HappyPet","Animal","Best"],images:["photo-1543852786-1cf6624b9987","photo-1583337130417-3346a1be7dee"]},
  {name:"Sayohat",items:["Chamadon","Sayohat yostiqchasi","Termos","Pasport g‘ilofi","Palatka","Sayohat ryukzagi","Uyqu qopi","Sayohat to‘plami","Bo‘yin yostiqchasi","Fonar"],brands:["TravelPro","Urban","Adventure","Voyage","Outdoor"],images:["photo-1476514525535-07fb3b4ae5f1","photo-1500530855697-b586d89ba3ee"]},
  {name:"Bog‘ va ta'mirlash",items:["Elektr dreli","Otvyortka to‘plami","Bolg‘a","Bog‘ qaychisi","Sug‘orish shlangi","Lopata","Bo‘yoq to‘plami","O‘lchov asbobi","Bog‘ stuli","Asboblar qutisi"],brands:["Bosch","Makita","Total","Garden","Master"],images:["photo-1416879595882-3373a0480b5b","photo-1504307651254-35680f356dfd"]}
];

const productSuffixes = [
  "Classic","Premium","Pro","Ultra","Max",
  "Plus","2026","New Edition","Advanced","Special"
];

const imageBase = "https://images.unsplash.com/";

const products = [];

categories.forEach((category, ci) => {
  for (let i = 0; i < 50; i++) {
    const type = category.items[i % category.items.length];
    const brand = category.brands[Math.floor(i / category.items.length)];
    const suffix = productSuffixes[i % productSuffixes.length];
    const number = Math.floor(i / 10) + 1;

    const id = ci * 50 + i + 1;
    const price = 49000 + ((id * 17391 + ci * 28117) % 15000000);
    const discount = 5 + ((id * 7) % 36);
    const oldPrice = Math.round(price / (1 - discount / 100));

    const photo = category.images[i % category.images.length];

    products.push({
      id,
      name: `${brand} ${type} ${suffix} ${number}`,
      category: category.name,
      price,
      old: oldPrice,
      rating: +(4.1 + ((id * 13) % 9) / 10).toFixed(1),
      discount,
      image: `${imageBase}${photo}?auto=format&fit=crop&w=600&q=85`,
      description: `${brand} brendining ${type.toLowerCase()} mahsuloti. Sifatli material, zamonaviy dizayn va kundalik foydalanish uchun qulay tanlov.`
    });
  }
});

console.log("NOVAMARKET mahsulotlari:", products.length);

// MA'LUMOTLARNI SAQLASH

function load(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

let cart = load("nova_cart", []);
let favorites = load("nova_favorites", []);
let orders = load("nova_orders", []);
let user = load("nova_user", null);

let currentCategory = "Barchasi";
let currentSearch = "";

const money = n => new Intl.NumberFormat("uz-UZ").format(n) + " so‘m";

function saveData() {
  localStorage.setItem("nova_cart", JSON.stringify(cart));
  localStorage.setItem("nova_favorites", JSON.stringify(favorites));
  localStorage.setItem("nova_orders", JSON.stringify(orders));
  localStorage.setItem("nova_user", JSON.stringify(user));
  updateCounts();
}

function toast(message) {
  const el = $("toast");
  if (!el) return;
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(window.novaToast);
  window.novaToast = setTimeout(() => el.classList.remove("show"), 2500);
}

function updateCounts() {
  $("cartCount").textContent = cart.reduce((s, p) => s + p.qty, 0);
  $("favCount").textContent = favorites.length;
}

// KATEGORIYALARNI YARATISH

function renderCategories() {
  const aside = document.querySelector(".categories");

  aside.innerHTML = `
    <h3><i class="fa-solid fa-bars"></i> Kategoriyalar</h3>
    <button class="category active" data-category="Barchasi">
      <i class="fa-solid fa-border-all"></i> Barchasi
      <span>1000</span>
    </button>
    ${categories.map((c, i) => `
      <button class="category" data-category="${c.name}">
        <i class="fa-solid ${[
          "fa-mobile-screen","fa-laptop","fa-tv","fa-shirt",
          "fa-shoe-prints","fa-bag-shopping","fa-couch","fa-utensils",
          "fa-blender","fa-spa","fa-spray-can-sparkles","fa-dumbbell",
          "fa-car","fa-baby","fa-puzzle-piece","fa-book",
          "fa-apple-whole","fa-paw","fa-suitcase","fa-screwdriver-wrench"
        ][i]}"></i>
        ${c.name}
      </button>
    `).join("")}
  `;
}

// MAHSULOTLAR

function renderProducts() {
  let list = products.filter(p =>
    (currentCategory === "Barchasi" || p.category === currentCategory) &&
    (p.name.toLowerCase().includes(currentSearch) ||
     p.category.toLowerCase().includes(currentSearch))
  );

  const sort = $("sortSelect").value;

  if (sort === "cheap") list.sort((a,b) => a.price-b.price);
  if (sort === "expensive") list.sort((a,b) => b.price-a.price);

  $("productsTitle").textContent =
    currentCategory === "Barchasi" ? "Barcha mahsulotlar" : currentCategory;

  $("productGrid").innerHTML = list.length ? list.map(p => `
    <article class="product-card">
      <div class="product-image">
        <span class="discount">-${p.discount}%</span>
        <button class="heart ${favorites.includes(p.id) ? "selected" : ""}" data-fav="${p.id}">
          <i class="${favorites.includes(p.id) ? "fa-solid" : "fa-regular"} fa-heart"></i>
        </button>
        <img src="${p.image}" alt="${p.name}" loading="lazy" data-detail="${p.id}">
      </div>
      <div class="product-info">
        <h3 data-detail="${p.id}">${p.name}</h3>
        <div class="rating">★ ${p.rating} <span>(${p.id * 3})</span></div>
        <div class="price">${money(p.price)}</div>
        <span class="old-price">${money(p.old)}</span>
        <button class="add-cart" data-add="${p.id}">
          <i class="fa-solid fa-cart-plus"></i> Savatchaga
        </button>
      </div>
    </article>
  `).join("") : `<div class="empty">Mahsulot topilmadi.</div>`;
}

// SAVATCHA

function addToCart(id) {
  const item = cart.find(p => p.id === id);
  if (item) item.qty++;
  else cart.push({id, qty:1});
  saveData();
  toast("Savatchaga qo‘shildi!");
}

function changeQty(id, amount) {
  const item = cart.find(p => p.id === id);
  if (!item) return;
  item.qty += amount;
  if (item.qty <= 0) cart = cart.filter(p => p.id !== id);
  saveData();
  renderDrawer();
}

function removeCart(id) {
  cart = cart.filter(p => p.id !== id);
  saveData();
  renderDrawer();
}

function cartTotal() {
  return cart.reduce((sum, item) => {
    const p = products.find(x => x.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

// YON PANEL

function openDrawer(type) {
  $("drawer").classList.add("show");
  $("overlay").classList.add("show");

  if (type === "cart") {
    $("drawerTitle").textContent = "Savatcham";
    renderDrawer();
  } else if (type === "favorites") {
    $("drawerTitle").textContent = "Sevimlilar";
    renderFavorites();
  } else {
    $("drawerTitle").textContent = "Buyurtmalarim";
    renderOrders();
  }
}

function closeDrawer() {
  $("drawer").classList.remove("show");
  $("overlay").classList.remove("show");
}

function renderDrawer() {
  $("drawerContent").innerHTML = cart.length ? `
    ${cart.map(item => {
      const p = products.find(x => x.id === item.id);
      if (!p) return "";
      return `
        <div class="drawer-item">
          <img src="${p.image}" alt="${p.name}">
          <div class="drawer-item-info">
            <h4>${p.name}</h4>
            <strong>${money(p.price)}</strong>
            <div class="quantity">
              <button data-qty="${p.id}" data-amount="-1">−</button>
              ${item.qty}
              <button data-qty="${p.id}" data-amount="1">+</button>
              <button class="remove-item" data-remove="${p.id}">×</button>
            </div>
          </div>
        </div>`;
    }).join("")}
    <div class="drawer-total">
      Jami:
      <strong>${money(cartTotal())}</strong>
      <button class="primary-btn" id="checkoutOpen">Buyurtma berish</button>
    </div>
  ` : `<div class="empty"><i class="fa-solid fa-cart-shopping"></i><p>Savatcha bo‘sh.</p></div>`;
}

function renderFavorites() {
  const list = products.filter(p => favorites.includes(p.id));
  $("drawerContent").innerHTML = list.length ? list.map(p => `
    <div class="drawer-item">
      <img src="${p.image}" alt="${p.name}">
      <div class="drawer-item-info">
        <h4>${p.name}</h4>
        <strong>${money(p.price)}</strong>
        <div class="quantity">
          <button data-add="${p.id}">Savatga qo‘shish</button>
          <button class="remove-item" data-fav="${p.id}">♥</button>
        </div>
      </div>
    </div>
  `).join("") : `<div class="empty"><i class="fa-regular fa-heart"></i><p>Sevimlilar bo‘sh.</p></div>`;
}

function renderOrders() {
  $("drawerContent").innerHTML = orders.length ? [...orders].reverse().map(o => `
    <div class="drawer-item">
      <div class="drawer-item-info">
        <h4>Buyurtma #${o.id}</h4>
        <p>${o.date}</p>
        <strong>${money(o.total)}</strong>
        <p>${o.status} · ${o.payment}</p>
      </div>
    </div>
  `).join("") : `<div class="empty"><i class="fa-solid fa-box"></i><p>Buyurtmalar yo‘q.</p></div>`;
}

// MAHSULOT TAFSILOTI

function showProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  $("productDetails").innerHTML = `
    <img class="detail-image" src="${p.image}" alt="${p.name}">
    <h2 class="detail-title">${p.name}</h2>
    <div class="rating">★ ${p.rating} / 5</div>
    <h3 style="color:#6138f5">${money(p.price)}</h3>
    <p class="detail-description">${p.description}</p>
    <button class="primary-btn" id="detailAdd">Savatchaga qo‘shish</button>
  `;

  $("productModal").classList.add("show");
  $("detailAdd").onclick = () => {
    addToCart(id);
    closeModal("productModal");
  };
}

function showModal(id) {
  $(id).classList.add("show");
}

function closeModal(id) {
  $(id).classList.remove("show");
}

// BUYURTMA

function openCheckout() {
  if (!cart.length) return toast("Savatcha bo‘sh!");

  closeDrawer();
  $("checkoutTotal").textContent = "Jami: " + money(cartTotal());
  if (user) $("customerName").value = user.name || "";
  showModal("checkoutModal");
}

function updateAddressField() {
  const pickup = $("deliveryType").value === "Olib ketish";
  $("customerAddress").required = !pickup;
  $("customerAddress").disabled = pickup;
  $("customerAddress").placeholder = pickup ? "Manzil kerak emas" : "Manzilingiz";
}

// KIRISH VA RO‘YXATDAN O‘TISH

let authMode = "login";

function setAuthMode(mode) {
  authMode = mode;
  const register = mode === "register";
  $("authTitle").textContent = register ? "Ro‘yxatdan o‘tish" : "Hisobga kirish";
  $("authName").hidden = !register;
  $("authName").required = register;
  $("authSwitch").innerHTML = register
    ? 'Hisobingiz bormi? <a href="#" id="switchAuth">Kirish</a>'
    : 'Hisobingiz yo‘qmi? <a href="#" id="switchAuth">Ro‘yxatdan o‘tish</a>';
}

// HODISALAR

document.addEventListener("click", e => {
  const add = e.target.closest("[data-add]");
  const fav = e.target.closest("[data-fav]");
  const detail = e.target.closest("[data-detail]");
  const qty = e.target.closest("[data-qty]");
  const remove = e.target.closest("[data-remove]");
  const category = e.target.closest("[data-category]");
  const close = e.target.closest("[data-close]");

  if (add) addToCart(Number(add.dataset.add));
  if (fav) {
    const id = Number(fav.dataset.fav);
    favorites = favorites.includes(id) ? favorites.filter(x => x !== id) : [...favorites,id];
    saveData();
    renderProducts();
    if ($("drawerTitle").textContent === "Sevimlilar") renderFavorites();
  }
  if (detail) showProduct(Number(detail.dataset.detail));
  if (qty) changeQty(Number(qty.dataset.qty), Number(qty.dataset.amount));
  if (remove) removeCart(Number(remove.dataset.remove));

  if (category) {
    currentCategory = category.dataset.category;
    document.querySelectorAll(".category").forEach(x => x.classList.remove("active"));
    category.classList.add("active");
    renderProducts();
  }

  if (close) closeModal(close.dataset.close);
  if (e.target.id === "checkoutOpen") openCheckout();

  if (e.target.id === "switchAuth") {
    e.preventDefault();
    setAuthMode(authMode === "login" ? "register" : "login");
  }
});

$("searchInput").addEventListener("input", e => {
  currentSearch = e.target.value.toLowerCase().trim();
  renderProducts();
});

$("searchBtn").onclick = () => {
  currentSearch = $("searchInput").value.toLowerCase().trim();
  renderProducts();
};

$("sortSelect").onchange = renderProducts;

$("cartOpen").onclick = () => openDrawer("cart");
$("favoritesOpen").onclick = () => openDrawer("favorites");
$("ordersOpen").onclick = () => openDrawer("orders");
$("drawerClose").onclick = closeDrawer;
$("overlay").onclick = closeDrawer;

$("heroShop").onclick = () => $("productsSection").scrollIntoView({behavior:"smooth"});
$("promoShop").onclick = () => $("productsSection").scrollIntoView({behavior:"smooth"});

$("loginOpen").onclick = () => {
  setAuthMode("login");
  showModal("authModal");
};

$("registerOpen").onclick = () => {
  setAuthMode("register");
  showModal("authModal");
};

$("authForm").onsubmit = e => {
  e.preventDefault();
  const phone = $("authPhone").value.trim();
  const password = $("authPassword").value;

  if (authMode === "register") {
    user = {name:$("authName").value.trim(), phone, password};
  } else {
    const saved = load("nova_user", null);
    if (!saved || saved.phone !== phone || saved.password !== password) {
      return toast("Telefon yoki parol noto‘g‘ri!");
    }
    user = saved;
  }

  saveData();
  closeModal("authModal");
  toast("Xush kelibsiz!");
  $("authForm").reset();
};

$("deliveryType").onchange = updateAddressField;

$("checkoutForm").onsubmit = e => {
  e.preventDefault();

  const payment = document.querySelector('input[name="payment"]:checked').value;

  orders.push({
    id:Date.now().toString().slice(-8),
    name:$("customerName").value.trim(),
    phone:$("customerPhone").value.trim(),
    address:$("customerAddress").value.trim(),
    delivery:$("deliveryType").value,
    payment,
    total:cartTotal(),
    date:new Date().toLocaleString("uz-UZ"),
    status:"Qabul qilindi",
    items:[...cart]
  });

  cart = [];
  saveData();
  closeModal("checkoutModal");
  $("checkoutForm").reset();
  updateAddressField();
  toast("Buyurtma yaratildi!");
  setTimeout(() => openDrawer("orders"), 500);
};

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeDrawer();
    document.querySelectorAll(".modal.show").forEach(m => m.classList.remove("show"));
  }
});

// ISHGA TUSHIRISH

renderCategories();
renderProducts();
updateCounts();
updateAddressField();

console.log("NovaMarket ishga tushdi: " + products.length + " mahsulot!");
