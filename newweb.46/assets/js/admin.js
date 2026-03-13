(function(){
  const $ = (s, el=document) => el.querySelector(s);
  const $$ = (s, el=document) => Array.from(el.querySelectorAll(s));

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

  const seed = window.ELLAKAI_SEED;
  const storeKey = "ellakai_admin_products";
  const productList = readJSON(storeKey, seed.products);

  function syncSeed(){
    // override in-memory for this session pages
    window.ELLAKAI_SEED.products = productList;
  }
  syncSeed();

  function render(){
    const host = $("#adminProductsBody");
    if(!host) return;

    host.innerHTML = productList.map(p=>`
      <tr>
        <td><strong>${p.name}</strong><div class="small">${p.id}</div></td>
        <td>${p.category}</td>
        <td><strong>${window.ELLAKAI?.money ? window.ELLAKAI.money(p.priceKg) : p.priceKg}</strong> / kg</td>
        <td>
          <button class="btn secondary small js-edit" data-id="${p.id}">Edit</button>
          <button class="btn secondary small js-del" data-id="${p.id}">Delete</button>
        </td>
      </tr>
    `).join("");

    $$(".js-edit", host).forEach(b=>b.addEventListener("click", ()=> loadToForm(b.dataset.id)));
    $$(".js-del", host).forEach(b=>b.addEventListener("click", ()=> del(b.dataset.id)));

    // orders
    const orders = readJSON("ellakai_orders", []);
    const oh = $("#adminOrdersBody");
    if(oh){
      oh.innerHTML = orders.slice(0,30).map(o=>`
        <tr>
          <td><strong>${o.orderId}</strong><div class="small">${new Date(o.createdAt).toLocaleString()}</div></td>
          <td>${o.customer?.name || "-"}</td>
          <td><strong>${o.status}</strong></td>
          <td><strong>${window.ELLAKAI?.money ? window.ELLAKAI.money(o.totals?.total || 0) : (o.totals?.total||0)}</strong></td>
        </tr>
      `).join("") || `<tr><td colspan="4" class="small">No orders yet.</td></tr>`;
    }

    // inquiries
    const inquiries = readJSON("ellakai_inquiries", []);
    const ih = $("#adminInquiriesBody");
    if(ih){
      ih.innerHTML = inquiries.slice(0,40).map(x=>`
        <tr>
          <td><strong>${x.name}</strong><div class="small">${x.business || ""}</div></td>
          <td>${x.phone || "-"}<div class="small">${x.email || "-"}</div></td>
          <td>${x.spices || "-"}</td>
          <td>${x.quantity || "-"}<div class="small">${new Date(x.createdAt).toLocaleString()}</div></td>
        </tr>
      `).join("") || `<tr><td colspan="4" class="small">No inquiries yet.</td></tr>`;
    }

    // blog
    const posts = readJSON("ellakai_blog_posts", seed.blog);
    const bh = $("#adminBlogBody");
    if(bh){
      bh.innerHTML = posts.map(p=>`
        <tr>
          <td><strong>${p.title}</strong><div class="small">${p.id}</div></td>
          <td>${p.category}</td>
          <td>${new Date(p.date).toLocaleDateString()}</td>
          <td><button class="btn secondary small js-bdel" data-id="${p.id}">Delete</button></td>
        </tr>
      `).join("");
      $$(".js-bdel", bh).forEach(b=>b.addEventListener("click", ()=>{
        const next = posts.filter(x=>x.id!==b.dataset.id);
        writeJSON("ellakai_blog_posts", next);
        toast("Blog post deleted");
        render();
      }));
    }
  }

  function loadToForm(id){
    const p = productList.find(x=>x.id===id);
    if(!p) return;
    $("#pId").value = p.id;
    $("#pName").value = p.name;
    $("#pCat").value = p.category;
    $("#pPrice").value = p.priceKg;
    $("#pShort").value = p.short;
    $("#pOrigin").value = p.origin;
    $("#pGrade").value = p.grade;
    $("#pHarvest").value = p.harvest;
    $("#pImg").value = (p.images||[])[0] || "";
    toast("Loaded product to form");
  }

  function del(id){
    const idx = productList.findIndex(x=>x.id===id);
    if(idx<0) return;
    productList.splice(idx,1);
    writeJSON(storeKey, productList);
    syncSeed();
    toast("Product deleted");
    render();
  }

  function upsertFromForm(){
    const id = $("#pId").value.trim();
    if(!id){ toast("Product ID required"); return; }
    const payload = {
      id,
      name: $("#pName").value.trim(),
      category: $("#pCat").value.trim() || "Whole Spices",
      priceKg: Number($("#pPrice").value || 0),
      short: $("#pShort").value.trim(),
      origin: $("#pOrigin").value.trim(),
      grade: $("#pGrade").value.trim(),
      harvest: $("#pHarvest").value.trim(),
      packaging: ["1kg pouch", "5kg bulk", "25kg sack"],
      images: [$("#pImg").value.trim() || "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1400&q=70"],
      tiers: [
        {qtyKg: 1, price: Number($("#pPrice").value || 0)},
        {qtyKg: 5, price: Math.max(0, Number($("#pPrice").value || 0) - 40)},
        {qtyKg: 10, price: Math.max(0, Number($("#pPrice").value || 0) - 70)},
        {qtyKg: 50, price: Math.max(0, Number($("#pPrice").value || 0) - 140)}
      ],
      tags: ["Farm Direct", "Fresh Packed", "Premium"]
    };

    const existing = productList.findIndex(x=>x.id===id);
    if(existing >= 0) productList[existing] = {...productList[existing], ...payload};
    else productList.unshift(payload);

    writeJSON(storeKey, productList);
    syncSeed();
    toast(existing >= 0 ? "Product updated" : "Product added");
    render();
  }

  function saveInquiry(e){
    e.preventDefault();
    const inquiries = readJSON("ellakai_inquiries", []);
    inquiries.unshift({
      createdAt: new Date().toISOString(),
      name: $("#wName").value.trim(),
      business: $("#wBiz").value.trim(),
      phone: $("#wPhone").value.trim(),
      email: $("#wEmail").value.trim(),
      spices: $("#wSpices").value.trim(),
      quantity: $("#wQty").value.trim(),
      message: $("#wMsg").value.trim()
    });
    writeJSON("ellakai_inquiries", inquiries);
    toast("Inquiry saved (demo)");
    e.target.reset();
    render();
  }

  function addBlog(e){
    e.preventDefault();
    const posts = readJSON("ellakai_blog_posts", seed.blog);
    const id = $("#bId").value.trim();
    posts.unshift({
      id,
      title: $("#bTitle").value.trim(),
      excerpt: $("#bExcerpt").value.trim(),
      date: $("#bDate").value,
      readMins: Number($("#bRead").value||5),
      category: $("#bCat").value.trim(),
      cover: $("#bCover").value.trim() || "https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&w=1600&q=70"
    });
    writeJSON("ellakai_blog_posts", posts);
    toast("Blog post added (demo)");
    e.target.reset();
    render();
  }

  document.addEventListener("DOMContentLoaded", ()=>{
    render();

    $("#productForm")?.addEventListener("submit", (e)=>{ e.preventDefault(); upsertFromForm(); });
    $("#inquirySeedForm")?.addEventListener("submit", saveInquiry);
    $("#blogForm")?.addEventListener("submit", addBlog);

    $("#resetSeed")?.addEventListener("click", ()=>{
      localStorage.removeItem(storeKey);
      localStorage.removeItem("ellakai_blog_posts");
      toast("Reset to seed data");
      location.reload();
    });
  });
})();
