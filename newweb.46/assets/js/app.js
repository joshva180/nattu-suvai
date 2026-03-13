(function(){
  const $$ = (s, el=document) => Array.from(el.querySelectorAll(s));
  const $ = (s, el=document) => el.querySelector(s);

  const state = {
    seed: window.ELLAKAI_SEED,
    cart: readJSON("ellakai_cart", []),
    orders: readJSON("ellakai_orders", [])
  };

  // ---------- helpers ----------
  function money(n){ return `₹${Number(n).toLocaleString("en-IN")}`; }
  function readJSON(key, fallback){
    try{ return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch(e){ return fallback; }
  }
  function writeJSON(key, val){ localStorage.setItem(key, JSON.stringify(val)); }

  function toast(msg){
    let t = $("#toast");
    if(!t){
      t = document.createElement("div");
      t.id = "toast";
      t.className = "toast";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add("show");
    setTimeout(()=>t.classList.remove("show"), 1800);
  }

  // ---------- navbar mobile drawer ----------
  function initNav(){
    const drawer = $("#mobileDrawer");
    const openBtn = $("#mobileOpen");
    const closeBtn = $("#mobileClose");

    if(openBtn && drawer){
      openBtn.addEventListener("click", ()=> drawer.classList.add("open"));
    }
    if(closeBtn && drawer){
      closeBtn.addEventListener("click", ()=> drawer.classList.remove("open"));
      drawer.addEventListener("click", (e)=>{ if(e.target === drawer) drawer.classList.remove("open"); });
      $$(".drawer-links a").forEach(a => a.addEventListener("click", ()=> drawer.classList.remove("open")));
    }

    // cart count
    const count = state.cart.reduce((a,i)=>a+i.qty,0);
    $$(".js-cart-count").forEach(el => el.textContent = count);
  }

  // ---------- hero particles ----------
  function initParticles(){
    const host = $("#particles");
    if(!host) return;
    const N = 18;
    for(let i=0;i<N;i++){
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = `${Math.random()*100}%`;
      p.style.bottom = `${-10 - Math.random()*20}px`;
      p.style.width = p.style.height = `${6 + Math.random()*12}px`;
      p.style.animationDuration = `${8 + Math.random()*10}s`;
      p.style.animationDelay = `${Math.random()*4}s`;
      host.appendChild(p);
    }
  }

  // ---------- reveal on scroll ----------
  function initReveal(){
    const els = $$(".reveal");
    if(!els.length) return;
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting) e.target.classList.add("show");
      });
    }, {threshold: .12});
    els.forEach(el=>io.observe(el));
  }

  // ---------- products rendering ----------
  function productCard(p){
    return `
      <article class="card hoverlift">
        <div class="product-thumb">
          <img loading="lazy" src="${p.images?.[0] || ""}" alt="${p.name}">
        </div>
        <div class="product-body">
          <h3 class="product-title">${p.name}</h3>
          <p class="product-desc">${p.short}</p>
          <div class="price-row">
            <div class="price">${money(p.priceKg)} <small>/ kg</small></div>
            <a class="btn secondary small" href="product.html?id=${encodeURIComponent(p.id)}">View</a>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">
            ${(p.tags||[]).slice(0,3).map(t=>`<span class="pill">${t}</span>`).join("")}
          </div>
        </div>
      </article>
    `;
  }

  function renderFeatured(){
    const host = $("#featuredProducts");
    if(!host) return;
    const list = state.seed.products.slice(0,7);
    host.innerHTML = list.map(productCard).join("");
  }

  function renderProductsPage(){
    const host = $("#productsGrid");
    if(!host) return;

    const categorySel = $("#filterCategory");
    const priceRange = $("#filterPrice");
    const search = $("#filterSearch");
    const sortSel = $("#filterSort");
    const priceOut = $("#priceOut");

    // fill categories
    if(categorySel){
      const cats = ["All", ...new Set(state.seed.products.map(p=>p.category))];
      categorySel.innerHTML = cats.map(c=>`<option value="${c}">${c}</option>`).join("");
    }

    function apply(){
      let items = [...state.seed.products];
      const q = (search?.value || "").trim().toLowerCase();
      const cat = categorySel?.value || "All";
      const maxP = Number(priceRange?.value || 5000);

      if(q) items = items.filter(p => (p.name+p.short+p.category).toLowerCase().includes(q));
      if(cat !== "All") items = items.filter(p => p.category === cat);
      items = items.filter(p => p.priceKg <= maxP);

      const sort = sortSel?.value || "featured";
      if(sort === "price-asc") items.sort((a,b)=>a.priceKg-b.priceKg);
      if(sort === "price-desc") items.sort((a,b)=>b.priceKg-a.priceKg);
      if(sort === "name") items.sort((a,b)=>a.name.localeCompare(b.name));

      if(priceOut) priceOut.textContent = money(maxP);

      host.innerHTML = items.map(p=>`
        <article class="card hoverlift">
          <div class="product-thumb">
            <img loading="lazy" src="${p.images?.[0]||""}" alt="${p.name}">
          </div>
          <div class="product-body">
            <div style="display:flex;justify-content:space-between;gap:10px;align-items:flex-start">
              <div>
                <h3 class="product-title" style="margin-bottom:4px">${p.name}</h3>
                <div class="small">${p.category}</div>
              </div>
              <button class="icon-btn js-quick" data-id="${p.id}" title="Quick view">
                ${svgEye()}
              </button>
            </div>
            <p class="product-desc">${p.short}</p>
            <div class="price-row">
              <div class="price">${money(p.priceKg)} <small>/ kg</small></div>
              <button class="btn primary small js-add" data-id="${p.id}">${svgCart()} Add</button>
            </div>
            <div style="margin-top:10px;display:flex;justify-content:space-between;gap:10px;align-items:center">
              <a class="btn secondary small" href="product.html?id=${encodeURIComponent(p.id)}">Details</a>
              <span class="pill">Farm direct</span>
            </div>
          </div>
        </article>
      `).join("");

      $$(".js-add", host).forEach(b => b.addEventListener("click", ()=> addToCart(b.dataset.id, 1)));
      $$(".js-quick", host).forEach(b => b.addEventListener("click", ()=> openQuickView(b.dataset.id)));
    }

    [categorySel, priceRange, search, sortSel].filter(Boolean).forEach(el => el.addEventListener("input", apply));
    apply();
  }

  // ---------- product detail ----------
  function renderProductDetail(){
    const host = $("#productDetail");
    if(!host) return;
    const id = new URLSearchParams(location.search).get("id");
    const p = state.seed.products.find(x=>x.id===id) || state.seed.products[0];

    host.innerHTML = `
      <div class="split">
        <div class="card pad reveal">
          <div class="grid" style="grid-template-columns: 1fr; gap:12px">
            <div class="card" style="overflow:hidden;border-radius:18px">
              <img id="mainImg" src="${p.images?.[0]||""}" alt="${p.name}" style="width:100%;height:360px;object-fit:cover">
            </div>
            <div class="grid" style="grid-template-columns: repeat(4, 1fr); gap:10px">
              ${(p.images||[]).slice(0,4).map((src,idx)=>`
                <button class="card" data-src="${src}" style="padding:0;overflow:hidden;border-radius:14px;cursor:pointer;border:1px solid rgba(27,58,43,.12)">
                  <img src="${src}" alt="${p.name} ${idx+1}" style="width:100%;height:86px;object-fit:cover">
                </button>
              `).join("")}
            </div>
          </div>
        </div>

        <div class="card pad reveal">
          <div class="kicker">Premium • Farm Direct</div>
          <h2 class="h2" style="margin-top:6px">${p.name}</h2>
          <p class="p-muted">${p.short}</p>

          <div style="display:flex;gap:10px;flex-wrap:wrap;margin:12px 0 6px 0">
            <span class="pill">Origin: ${p.origin}</span>
            <span class="pill">Grade: ${p.grade}</span>
            <span class="pill">Harvest: ${p.harvest}</span>
          </div>

          <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:12px">
            <div>
              <div class="small">Retail price</div>
              <div class="price" style="font-size:26px">${money(p.priceKg)} <small>/ kg</small></div>
            </div>
            <div style="display:flex;gap:10px;align-items:center">
              <div class="field" style="min-width:140px">
                <label for="qty">Quantity (kg)</label>
                <input id="qty" type="number" min="1" value="1">
              </div>
              <button id="addBtn" class="btn primary" style="margin-top:22px">${svgCart()} Add to cart</button>
            </div>
          </div>

          <div class="cta-band" style="margin-top:16px">
            <h3>Bulk order available</h3>
            <p>Get the best wholesale tier pricing for restaurants, supermarkets, and distributors.</p>
            <div class="row">
              <a class="btn accent" href="wholesale.html">Request Wholesale Price</a>
              <a class="btn ghost" target="_blank" rel="noopener" href="${state.seed.brand.whatsapp}">WhatsApp Order</a>
            </div>
          </div>
        </div>
      </div>

      <div class="split" style="margin-top:16px">
        <div class="card pad reveal">
          <h3 style="margin:0 0 8px 0">Product information</h3>
          <div class="grid" style="gap:10px">
            <div class="badge">Origin location: <strong>${p.origin}</strong></div>
            <div class="badge">Quality grade: <strong>${p.grade}</strong></div>
            <div class="badge">Harvest season: <strong>${p.harvest}</strong></div>
            <div class="badge">Packaging: <strong>${(p.packaging||[]).join(", ")}</strong></div>
          </div>
          <hr class="sep">
          <div class="small">
            Each batch is selected for aroma, cleanliness, and consistency. Suitable for retail packs and bulk procurement.
          </div>
        </div>

        <div class="card pad reveal">
          <h3 style="margin:0 0 8px 0">Wholesale pricing tiers</h3>
          <table class="table">
            <thead>
              <tr><th>Quantity</th><th>Price / kg</th><th>Action</th></tr>
            </thead>
            <tbody>
              ${(p.tiers||[]).map(t=>`
                <tr>
                  <td>${t.qtyKg} kg</td>
                  <td><strong>${money(t.price)}</strong></td>
                  <td><button class="btn secondary small js-tier" data-qty="${t.qtyKg}">Set qty</button></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
          <div class="small" style="margin-top:10px">
            Tier pricing shown for demonstration. Final quote depends on grade, packaging, and delivery location.
          </div>
        </div>
      </div>
    `;

    // gallery
    $$("#productDetail button[data-src]").forEach(b=>{
      b.addEventListener("click", ()=>{
        $("#mainImg").src = b.dataset.src;
      });
    });

    // add to cart
    $("#addBtn").addEventListener("click", ()=>{
      const qty = Math.max(1, Number($("#qty").value||1));
      addToCart(p.id, qty);
    });

    // tier buttons
    $$(".js-tier").forEach(b=>{
      b.addEventListener("click", ()=>{
        $("#qty").value = Number(b.dataset.qty);
        toast(`Quantity set to ${b.dataset.qty} kg`);
      });
    });
  }

  // ---------- cart ----------
  function addToCart(productId, qty){
    const p = state.seed.products.find(x=>x.id===productId);
    if(!p) return;
    const existing = state.cart.find(i=>i.id===productId);
    if(existing) existing.qty += qty;
    else state.cart.push({id: productId, qty});
    writeJSON("ellakai_cart", state.cart);
    $$(".js-cart-count").forEach(el => el.textContent = state.cart.reduce((a,i)=>a+i.qty,0));
    toast(`${p.name} added to cart`);
  }

  function cartLine(item){
    const p = state.seed.products.find(x=>x.id===item.id);
    if(!p) return "";
    const line = p.priceKg * item.qty;
    return `
      <tr>
        <td style="display:flex;gap:10px;align-items:center">
          <img src="${p.images?.[0]||""}" alt="${p.name}" style="width:54px;height:54px;border-radius:14px;object-fit:cover;border:1px solid rgba(27,58,43,.12)">
          <div>
            <div style="font-weight:900">${p.name}</div>
            <div class="small">${money(p.priceKg)} / kg</div>
          </div>
        </td>
        <td>
          <div style="display:flex;gap:8px;align-items:center">
            <button class="icon-btn js-dec" data-id="${p.id}" title="Decrease">−</button>
            <strong>${item.qty}</strong>
            <button class="icon-btn js-inc" data-id="${p.id}" title="Increase">+</button>
          </div>
        </td>
        <td><strong>${money(line)}</strong></td>
        <td><button class="btn secondary small js-remove" data-id="${p.id}">Remove</button></td>
      </tr>
    `;
  }

  function renderCart(){
    const host = $("#cartTableBody");
    if(!host) return;

    host.innerHTML = state.cart.map(cartLine).join("") || `
      <tr><td colspan="4" class="small">Your cart is empty. Explore <a href="products.html" style="text-decoration:underline">products</a>.</td></tr>
    `;

    const subtotal = state.cart.reduce((sum,i)=>{
      const p = state.seed.products.find(x=>x.id===i.id);
      return sum + (p? p.priceKg*i.qty : 0);
    },0);
    const shipping = subtotal > 0 ? 180 : 0;
    const total = subtotal + shipping;

    $("#subtotal") && ($("#subtotal").textContent = money(subtotal));
    $("#shipping") && ($("#shipping").textContent = money(shipping));
    $("#total") && ($("#total").textContent = money(total));

    $$(".js-inc", host).forEach(b=>b.addEventListener("click", ()=> updateQty(b.dataset.id, +1)));
    $$(".js-dec", host).forEach(b=>b.addEventListener("click", ()=> updateQty(b.dataset.id, -1)));
    $$(".js-remove", host).forEach(b=>b.addEventListener("click", ()=> removeItem(b.dataset.id)));
  }

  function updateQty(id, delta){
    const item = state.cart.find(i=>i.id===id);
    if(!item) return;
    item.qty = Math.max(1, item.qty + delta);
    writeJSON("ellakai_cart", state.cart);
    renderCart();
    initNav();
  }
  function removeItem(id){
    state.cart = state.cart.filter(i=>i.id!==id);
    writeJSON("ellakai_cart", state.cart);
    renderCart();
    initNav();
  }

  // ---------- checkout + order tracking (demo) ----------
  function renderCheckout(){
    const host = $("#checkoutPage");
    if(!host) return;
    const subtotal = state.cart.reduce((sum,i)=>{
      const p = state.seed.products.find(x=>x.id===i.id);
      return sum + (p? p.priceKg*i.qty : 0);
    },0);
    const shipping = subtotal > 0 ? 180 : 0;
    const total = subtotal + shipping;

    $("#coSubtotal") && ($("#coSubtotal").textContent = money(subtotal));
    $("#coShipping") && ($("#coShipping").textContent = money(shipping));
    $("#coTotal") && ($("#coTotal").textContent = money(total));

    const form = $("#checkoutForm");
    form?.addEventListener("submit", (e)=>{
      e.preventDefault();
      if(state.cart.length === 0){ toast("Cart is empty"); return; }

      const orderId = "ELK" + Math.floor(100000 + Math.random()*900000);
      const payload = {
        orderId,
        createdAt: new Date().toISOString(),
        status: "Confirmed",
        customer: {
          name: $("#coName").value.trim(),
          email: $("#coEmail").value.trim(),
          phone: $("#coPhone").value.trim(),
          address: $("#coAddress").value.trim()
        },
        items: state.cart.map(i=>({id:i.id, qty:i.qty})),
        totals: {subtotal, shipping, total}
      };

      state.orders.unshift(payload);
      writeJSON("ellakai_orders", state.orders);
      state.cart = [];
      writeJSON("ellakai_cart", state.cart);

      toast(`Order placed: ${orderId}`);
      setTimeout(()=> location.href = `order-tracking.html?order=${encodeURIComponent(orderId)}`, 650);
    });
  }

  function renderOrderTracking(){
    const host = $("#trackingBox");
    if(!host) return;
    const orderId = new URLSearchParams(location.search).get("order") || "";
    const orders = readJSON("ellakai_orders", []);
    const o = orders.find(x=>x.orderId===orderId);

    if(!orderId){
      host.innerHTML = `
        <div class="card pad">
          <h3 style="margin:0 0 6px 0">Track your order</h3>
          <p class="small">Enter your order ID from invoice/confirmation.</p>
          <form class="form" onsubmit="event.preventDefault(); location.href='order-tracking.html?order='+encodeURIComponent(document.getElementById('orderIdInput').value)">
            <div class="field">
              <label>Order ID</label>
              <input id="orderIdInput" placeholder="ELK123456" required>
            </div>
            <button class="btn primary">Track</button>
          </form>
        </div>
      `;
      return;
    }

    if(!o){
      host.innerHTML = `
        <div class="card pad">
          <h3 style="margin:0 0 6px 0">Order not found</h3>
          <p class="small">We couldn’t find <strong>${orderId}</strong>. Please verify and try again.</p>
          <a class="btn secondary" href="order-tracking.html">Try another</a>
        </div>
      `;
      return;
    }

    host.innerHTML = `
      <div class="card pad">
        <div class="badge">Order ID: <strong>${o.orderId}</strong></div>
        <div style="height:10px"></div>
        <div class="badge">Status: <strong>${o.status}</strong></div>
        <hr class="sep">

        <h3 style="margin:0 0 8px 0">Items</h3>
        <table class="table">
          <thead><tr><th>Product</th><th>Qty</th></tr></thead>
          <tbody>
            ${o.items.map(i=>{
              const p = state.seed.products.find(x=>x.id===i.id);
              return `<tr><td>${p? p.name : i.id}</td><td><strong>${i.qty} kg</strong></td></tr>`;
            }).join("")}
          </tbody>
        </table>

        <hr class="sep">
        <div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap">
          <div class="small">Placed: ${new Date(o.createdAt).toLocaleString()}</div>
          <div><strong>Total: ${money(o.totals.total)}</strong></div>
        </div>
      </div>
    `;
  }

  // ---------- blog ----------
  function renderBlog(){
    const host = $("#blogGrid");
    if(!host) return;
    const posts = state.seed.blog;
    host.innerHTML = posts.map(p=>`
      <article class="card hoverlift">
        <div style="height:170px;overflow:hidden">
          <img src="${p.cover}" alt="${p.title}" style="width:100%;height:170px;object-fit:cover">
        </div>
        <div class="product-body">
          <div class="kicker">${p.category} • ${p.readMins} min read</div>
          <h3 class="product-title" style="margin-top:6px">${p.title}</h3>
          <p class="product-desc">${p.excerpt}</p>
          <div class="price-row">
            <div class="small">${new Date(p.date).toLocaleDateString()}</div>
            <a class="btn secondary small" href="blog.html#${p.id}">Read</a>
          </div>
        </div>
      </article>
    `).join("");
  }

  // ---------- quick view modal (lightweight) ----------
  function openQuickView(id){
    const p = state.seed.products.find(x=>x.id===id);
    if(!p) return;
    const m = document.createElement("div");
    m.className = "mobile-drawer open";
    m.innerHTML = `
      <div class="drawer-panel" style="width:min(720px, 96vw)">
        <div class="drawer-head">
          <div style="font-weight:900">Quick view</div>
          <button class="icon-btn" id="qClose">${svgClose()}</button>
        </div>
        <div style="padding:14px">
          <div class="split">
            <div class="card" style="overflow:hidden;border-radius:18px">
              <img src="${p.images?.[0]||""}" alt="${p.name}" style="width:100%;height:320px;object-fit:cover">
            </div>
            <div class="card pad">
              <div class="kicker">${p.category}</div>
              <h2 class="h2" style="margin-top:6px">${p.name}</h2>
              <p class="p-muted">${p.short}</p>
              <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:10px">
                <span class="pill">Origin: ${p.origin}</span>
                <span class="pill">Grade: ${p.grade}</span>
              </div>
              <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:14px">
                <div class="price">${money(p.priceKg)} <small>/ kg</small></div>
                <button class="btn primary" id="qAdd">${svgCart()} Add</button>
              </div>
              <div style="margin-top:12px;display:flex;gap:10px;flex-wrap:wrap">
                <a class="btn secondary" href="product.html?id=${encodeURIComponent(p.id)}">Full details</a>
                <a class="btn accent" href="wholesale.html">Wholesale price</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(m);
    $("#qClose", m).addEventListener("click", ()=> m.remove());
    m.addEventListener("click", (e)=>{ if(e.target===m) m.remove(); });
    $("#qAdd", m).addEventListener("click", ()=> addToCart(p.id, 1));
  }

  // ---------- icons ----------
  function svgCart(){
    return `<svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6h15l-2 9H8L6 6Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      <path d="M6 6 5 3H2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor"/>
    </svg>`;
  }
  function svgEye(){
    return `<svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" stroke="currentColor" stroke-width="2"/>
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="currentColor" opacity=".9"/>
    </svg>`;
  }
  function svgClose(){
    return `<svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`;
  }

  // expose money for admin
  window.ELLAKAI = { money };

  // ---------- init ----------
  document.addEventListener("DOMContentLoaded", ()=>{
    initNav();
    initParticles();
    initReveal();
    renderFeatured();
    renderProductsPage();
    renderProductDetail();
    renderCart();
    renderCheckout();
    renderOrderTracking();
    renderBlog();
  });
})();
