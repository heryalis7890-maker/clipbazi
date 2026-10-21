/* ClipBazi — fresh video catalogue (Creative Commons sample videos) */

const LINK_BONUS  = "https://auctionr.org/4/076f372e5b807d3213b56990877ca995";
const LINK_OFFER1 = "https://auctionr.org/4/8b4b0f7a21acdf4a03db1e6a9c1532d4";
const LINK_OFFER2 = "https://asiafilm.org/4/4d85ad475b7dbe035f8f7b29d4a68db4";

const VIDEOS = [
  {id:"c1", title:"হাসির ঝড় — সেরা ফানি ক্লিপ কম্পিলেশন", cat:"ফানি", src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", dur:"1:00", views:"৩১ লাখ", likes:"২.২ লাখ"},
  {id:"c2", title:"দুষ্টু খরগোশের মজার কাণ্ড — কার্টুন", cat:"কার্টুন", src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", dur:"9:56", views:"১২ লাখ", likes:"৮৫ হাজার"},
  {id:"c3", title:"স্বপ্নের দেশে হাতির অ্যাডভেঞ্চার", cat:"কার্টুন", src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", dur:"10:53", views:"৮ লাখ", likes:"৫২ হাজার"},
  {id:"c4", title:"আগুন নিয়ে ভয়ংকর স্টান্ট — দেখুন!", cat:"ট্রেন্ডিং", src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", dur:"0:15", views:"২৩ লাখ", likes:"১.৪ লাখ"},
  {id:"c5", title:"ধাওয়া-পাল্টা ধাওয়া — অ্যাকশন ক্লিপ", cat:"ট্রেন্ডিং", src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", dur:"0:15", views:"১৯ লাখ", likes:"১.১ লাখ"},
  {id:"c6", title:"জয়রাইড মাস্তি — হাসতে হাসতে পেট ব্যথা", cat:"ফানি", src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", dur:"0:15", views:"১৫ লাখ", likes:"৯৮ হাজার"},
  {id:"c7", title:"ভাইরাল মেল্টডাউন মুহূর্ত 😂", cat:"টিকটক", src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4", dur:"0:15", views:"২৭ লাখ", likes:"১.৯ লাখ"},
  {id:"c8", title:"সিনটেল — ফ্যান্টাসি শর্ট ফিল্ম", cat:"মুভি", src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4", dur:"14:48", views:"৯ লাখ", likes:"৬৭ হাজার"},
  {id:"c9", title:"টিয়ার্স অফ স্টিল — সাই-ফাই শর্ট ফিল্ম", cat:"মুভি", src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4", dur:"12:14", views:"৭ লাখ", likes:"৪৯ হাজার"},
  {id:"c10", title:"Volkswagen GTI — ফুল রিভিউ", cat:"টেক", src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4", dur:"10:53", views:"৫ লাখ", likes:"৩১ হাজার"},
  {id:"c11", title:"কম বাজেটে সেরা গাড়ি কোনটি?", cat:"টেক", src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4", dur:"9:00", views:"৬ লাখ", likes:"৩৮ হাজার"},
  {id:"c12", title:"অফরোড অ্যাডভেঞ্চার — পাহাড়ি রাস্তায়", cat:"ট্রাভেল", src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4", dur:"9:54", views:"৪ লাখ", likes:"২৬ হাজার"},
];

const CATS = ["সব","ট্রেন্ডিং","ফানি","কার্টুন","মুভি","টেক","ট্রাভেল","টিকটক"];
const thumb = id => `https://picsum.photos/seed/clipbazi-${id}/640/360`;
const SP = 'target="_blank" rel="sponsored nofollow noopener"';

function sponsorCardHTML(title){
  return `<div class="scard"><span class="ad-label">SPONSORED</span><h3>${title}</h3>
    <div class="row">
      <a class="cta" href="${LINK_BONUS}" ${SP}>🎁 $5 ফ্রি বোনাস</a>
      <a class="cta ghost" href="${LINK_OFFER1}" ${SP}>🔥 স্পেশাল অফার</a>
      <a class="cta ghost" href="${LINK_OFFER2}" ${SP}>⭐ হট ডিল</a>
    </div></div>`;
}

function cardHTML(v){
  return `<div class="card" onclick="location.href='watch.html?v=${v.id}'">
    <div class="thumb"><img loading="lazy" src="${thumb(v.id)}" alt=""><span class="dur">${v.dur}</span></div>
    <div class="card-body"><div class="card-title">${v.title}</div>
    <div class="card-meta"><span>👁 ${v.views}</span><span>👍 ${v.likes}</span></div></div>
  </div>`;
}

/* ---------- index ---------- */
function initIndex(){
  const hero = VIDEOS[0];
  document.getElementById('hero').style.backgroundImage =
    `url('https://picsum.photos/seed/clipbazi-hero/1200/500')`;
  document.getElementById('heroTitle').textContent = hero.title;
  document.getElementById('heroMeta').textContent = `👁 ${hero.views} ভিউ • 👍 ${hero.likes} লাইক`;
  document.getElementById('heroPlay').href = `watch.html?v=${hero.id}`;
  document.getElementById('hero').onclick = e => {
    if(e.target.closest('a')) return;
    location.href = `watch.html?v=${hero.id}`;
  };

  const catsEl = document.getElementById('cats');
  const grid = document.getElementById('grid');
  const searchInput = document.getElementById('searchInput');
  let activeCat = "সব", query = "";
  catsEl.innerHTML = CATS.map(c =>
    `<button class="cat${c==="সব"?" active":""}" data-cat="${c}">${c}</button>`).join('');
  catsEl.addEventListener('click', e => {
    const b = e.target.closest('.cat'); if(!b) return;
    activeCat = b.dataset.cat;
    catsEl.querySelectorAll('.cat').forEach(x => x.classList.toggle('active', x===b));
    render();
  });
  searchInput.addEventListener('input', () => { query = searchInput.value.trim(); render(); });

  function render(){
    const list = VIDEOS.filter(v =>
      (activeCat==="সব" || v.cat===activeCat) &&
      (!query || v.title.includes(query)));
    if(!list.length){ grid.innerHTML = `<div class="empty">কোনো ভিডিও পাওয়া যায়নি</div>`; return; }
    let html = "";
    list.forEach((v,i) => {
      html += cardHTML(v);
      if((i+1)%6===0) html += sponsorCardHTML("💰 ভিডিও বিরতিতে বোনাস নিন!");
    });
    grid.innerHTML = html;
  }
  render();
}

/* ---------- watch ---------- */
function initWatch(){
  const id = new URLSearchParams(location.search).get('v');
  const v = VIDEOS.find(x => x.id===id) || VIDEOS[0];
  document.getElementById('player').src = v.src;
  document.getElementById('wTitle').textContent = v.title;
  document.getElementById('wMeta').innerHTML =
    `<span>👁 ${v.views} ভিউ</span><span>👍 ${v.likes} লাইক</span><span>📁 ${v.cat}</span>`;
  document.title = v.title + " — ClipBazi";
  document.getElementById('related').innerHTML =
    VIDEOS.filter(x => x.id!==v.id).slice(0,8).map(r =>
      `<div class="rel-item" onclick="location.href='watch.html?v=${r.id}'">
        <div class="thumb"><img loading="lazy" src="${thumb(r.id)}" alt=""><span class="dur">${r.dur}</span></div>
        <div><div class="card-title">${r.title}</div>
        <div class="card-meta"><span>👁 ${r.views}</span><span>👍 ${r.likes}</span></div></div>
      </div>`).join('');
}

/* ---------- entry popup ad: offers pop up on every visit ---------- */
function initPopup(){
  if(document.getElementById('adpop')) return;
  const pop = document.createElement('div');
  pop.id = 'adpop';
  pop.innerHTML =
    `<div class="adpop-back"></div>
     <div class="adpop-box">
       <button class="adpop-x" aria-label="বন্ধ করুন">✕</button>
       <span class="ad-label">SPONSORED</span>
       <h3>🎁 স্পেশাল অফার — মিস করবেন না!</h3>
       <a class="cta pop-cta" href="${LINK_BONUS}" ${SP}>$5 ফ্রি বোনাস নিন 🎁</a>
       <div class="pop-row">
         <a class="cta ghost" href="${LINK_OFFER1}" ${SP}>🔥 স্পেশাল অফার</a>
         <a class="cta ghost" href="${LINK_OFFER2}" ${SP}>⭐ হট ডিল</a>
       </div>
     </div>`;
  document.body.appendChild(pop);
  const close = () => pop.remove();
  pop.querySelector('.adpop-x').onclick = close;
  pop.querySelector('.adpop-back').onclick = close;
  setTimeout(() => pop.classList.add('show'), 1200);
}

/* ---------- free visitor counter ---------- */
function initCounter(){
  const day = new Date().toISOString().slice(0,10);
  const foot = document.querySelector('footer');
  if(!foot) return;
  const el = document.createElement('div');
  el.className = 'vcounter';
  el.innerHTML = `👁 আজকের ভিজিটর: <b id="vcDay">…</b> &nbsp;•&nbsp; মোট ভিজিটর: <b id="vcTotal">…</b>`;
  foot.appendChild(el);
  const bn = n => Number(n).toLocaleString('bn-BD');
  const get = u => fetch(u).then(r => r.ok ? r.json() : null).catch(() => null);
  get('https://api.countapi.xyz/hit/clipbazi24/total').then(d => {
    const t = document.getElementById('vcTotal');
    if(d && d.value != null && t) t.textContent = bn(d.value);
  });
  get(`https://api.countapi.xyz/hit/clipbazi24/day-${day}`).then(d => {
    const t = document.getElementById('vcDay');
    if(d && d.value != null && t) t.textContent = bn(d.value);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initPopup();
  initCounter();
  if(document.getElementById('grid')) initIndex();
  if(document.getElementById('player')) initWatch();
});
