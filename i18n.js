/* ───────────────────────────────────────────────────────────────
   Setia Trafik — EN / BM language switcher
   Self-contained: injects a toggle into the nav, remembers choice,
   and swaps text via the Malay dictionary below. Untranslated
   strings (product names, codes, official Malay cert names) stay as-is.
   ─────────────────────────────────────────────────────────────── */
(function () {
  var KEY = 'st_lang';

  /* English -> Malay. Keys are the trimmed, whitespace-collapsed text. */
  var MS = {
    /* ---- Navigation ---- */
    "What We Do": "Perkhidmatan", "Products": "Produk", "Who Are We": "Tentang Kami",
    "Coverage": "Liputan", "Certifications": "Pensijilan", "News & Projects": "Berita & Projek",
    "News": "Berita", "Get a Quote": "Dapatkan Sebut Harga", "Services": "Perkhidmatan",
    "Contact Us": "Hubungi Kami", "Home": "Laman Utama", "Quote Basket": "Bakul Sebut Harga",

    /* ---- Buttons / CTAs ---- */
    "Get Fast Quote": "Sebut Harga Pantas", "Our Services →": "Perkhidmatan Kami →",
    "Get a Free Quote →": "Dapatkan Sebut Harga Percuma →", "View All Services →": "Lihat Semua Perkhidmatan →",
    "Browse Products & Build Quote →": "Layari Produk & Bina Sebut Harga →",
    "View All News & Projects →": "Lihat Semua Berita & Projek →", "Learn More →": "Ketahui Lagi →",
    "Read More →": "Baca Lagi →", "View Products →": "Lihat Produk →", "Browse Category": "Layari Kategori",
    "Add to Quote": "Tambah ke Sebut Harga", "+ Add to Quote": "+ Tambah ke Sebut Harga",
    "WhatsApp Now": "WhatsApp Sekarang", "WhatsApp Now — Fast Reply": "WhatsApp Sekarang — Balasan Pantas",
    "Call": "Telefon", "Call Us": "Telefon Kami", "WhatsApp Us": "WhatsApp Kami",
    "Quote Cart": "Troli Sebut Harga", "Your Quote Cart": "Troli Sebut Harga Anda",
    "Send Quote on WhatsApp": "Hantar Sebut Harga melalui WhatsApp", "Clear cart": "Kosongkan troli",
    "View Details": "Lihat Butiran", "View Quote Basket": "Lihat Bakul Sebut Harga",
    "Back to Products": "Kembali ke Produk", "Explore Traffic Management →": "Terokai Pengurusan Trafik →",
    "View All News →": "Lihat Semua Berita →", "Send Request →": "Hantar Permohonan →",
    "No items yet.": "Tiada item lagi.", "Browse products and tap “Add to Quote”.": "Layari produk dan tekan “Tambah ke Sebut Harga”.",
    "Your quote cart is empty. Add products first.": "Troli sebut harga anda kosong. Tambah produk dahulu.",

    /* ---- Hero (home) ---- */
    "Malaysia's Specialist Traffic Management & Road Safety Partner": "Rakan Pakar Pengurusan Trafik & Keselamatan Jalan Raya Malaysia",
    "We plan, staff, equip and run the work zone — Pengurusan Trafik for highway concessionaires, JKR projects, MRT/LRT rail works, G7 main contractors and local councils nationwide. One partner, full scope, zero headaches.": "Kami merancang, menyediakan tenaga kerja, melengkapi dan mengendalikan zon kerja — Pengurusan Trafik untuk konsesi lebuh raya, projek JKR, kerja rel MRT/LRT, kontraktor utama G7 dan majlis tempatan di seluruh negara. Satu rakan, skop penuh, tanpa masalah.",
    "Years in Business": "Tahun Beroperasi", "CIDB Grade ↗ Certifications": "Gred CIDB ↗ Pensijilan",
    "States Covered": "Negeri Diliputi", "✓ Our Certifications": "✓ Pensijilan Kami",
    "Where We Operate": "Kawasan Operasi Kami", "+ more": "+ lagi",

    /* ---- Location band / stats ---- */
    "Headquartered in Kuala Lumpur, Malaysia": "Ibu Pejabat di Kuala Lumpur, Malaysia",
    "Projects Completed": "Projek Disiapkan", "Certified Personnel": "Kakitangan Bertauliah",
    "Emergency Response": "Tindak Balas Kecemasan", "Full Coverage": "Liputan Penuh",

    /* ---- "What We Do" section ---- */
    "End-to-End Traffic Management": "Pengurusan Trafik Menyeluruh",
    "From TMP design to physical deployment — we handle every step so your project stays compliant and on schedule.": "Daripada reka bentuk TMP hingga pelaksanaan di tapak — kami menguruskan setiap langkah supaya projek anda patuh dan mengikut jadual.",
    "TMP Design": "Reka Bentuk TMP", "Plan drafting": "Penyediaan pelan", "Submission": "Penyerahan",
    "Regulatory liaison (JKR/DBKL/LLM)": "Urusan kawal selia (JKR/DBKL/LLM)",
    "Certified Team": "Pasukan Bertauliah", "Traffic Manager & TMO": "Pengurus Trafik & TMO",
    "Supervisor & TMDT Driver": "Penyelia & Pemandu TMDT", "Flagman & Traffic Controller": "Pengawal Bendera & Pengawal Trafik",
    "Owned Fleet": "Armada Sendiri", "TMDT Lorry & ERT Vehicle": "Lori TMDT & Kenderaan ERT",
    "Shadow Vehicle & Water Tanker": "Kenderaan Bayang & Tangki Air", "Road Sweeper & Manager 4x4": "Penyapu Jalan & 4x4 Pengurus",
    "Full Equipment Supply": "Bekalan Peralatan Lengkap", "DBKL/JKR signage": "Papan tanda DBKL/JKR",
    "Lightweight barriers & hoarding": "Penghadang ringan & hoarding", "Solar devices & road marking": "Peranti solar & penanda jalan",
    "Daily Operations & Reporting": "Operasi Harian & Pelaporan", "On-site implementation": "Pelaksanaan di tapak",
    "Incident response": "Tindak balas insiden", "Close-out documentation": "Dokumentasi penutupan",
    "One Partner, Full Scope": "Satu Rakan, Skop Penuh",
    "Everything from plan to deployment under one accredited roof — no subcontractor gaps, no compliance surprises.": "Segalanya daripada perancangan hingga pelaksanaan di bawah satu bumbung bertauliah — tiada jurang subkontraktor, tiada kejutan pematuhan.",

    /* ---- Products section ---- */
    "80+ Products": "80+ Produk", "Traffic Equipment Catalogue": "Katalog Peralatan Trafik",
    "Cones, barriers, VMS, road studs, signage and more — all JKR/REAM approved. Build and send your quote in minutes.": "Kon, penghadang, VMS, paku jalan, papan tanda dan banyak lagi — semua diluluskan JKR/REAM. Bina dan hantar sebut harga anda dalam beberapa minit.",

    /* ---- Latest news (home) ---- */
    "Latest News": "Berita Terkini", "What Setia Trafik Has Been Up To": "Aktiviti Terkini Setia Trafik",
    "Recent projects, mobilisations and company milestones from across Malaysia.": "Projek terkini, mobilisasi dan pencapaian syarikat dari seluruh Malaysia.",

    /* ---- Footer ---- */
    "Company": "Syarikat", "Our History": "Sejarah Kami", "Coverage Areas": "Kawasan Liputan",
    "Traffic Management": "Pengurusan Trafik", "TM Equipment & Materials": "Peralatan & Bahan TM",
    "Traffic Equipment Catalog": "Katalog Peralatan Trafik", "Road Barrier Systems": "Sistem Penghadang Jalan",
    "Construction TM": "TM Pembinaan", "TMP Design & Submission": "Reka Bentuk & Penyerahan TMP",
    "Traffic Cones": "Kon Trafik", "Road Barriers": "Penghadang Jalan", "Solar Arrow Boards": "Papan Anak Panah Solar",
    "Variable Message Signs": "Papan Tanda Mesej Boleh Ubah", "Road Markings": "Penanda Jalan",
    "Signage & Road Studs": "Papan Tanda & Paku Jalan", "Bandar Baru Bangi, Selangor (HQ)": "Bandar Baru Bangi, Selangor (Ibu Pejabat)",
    "Malaysia's specialist traffic management & road safety partner. CIDB Grade G5 (Active), MOF Registered, Bumiputera status, PKK/STB & SPKK certified. Nationwide coverage since 2015.": "Rakan pakar pengurusan trafik & keselamatan jalan raya Malaysia. CIDB Gred G5 (Aktif), Berdaftar MOF, status Bumiputera, bertauliah PKK/STB & SPKK. Liputan seluruh negara sejak 2015.",
    "© 2015–2026 Setia Trafik Sdn. Bhd. All Rights Reserved.": "© 2015–2026 Setia Trafik Sdn. Bhd. Hak Cipta Terpelihara.",

    /* ---- Certifications ---- */
    "Certifications & Accreditations": "Pensijilan & Akreditasi",
    "Setia Trafik holds all required Malaysian certifications for traffic management and government contracting.": "Setia Trafik memiliki semua pensijilan Malaysia yang diperlukan untuk pengurusan trafik dan kontrak kerajaan.",
    "📄 View official certificates (PDF):": "📄 Lihat sijil rasmi (PDF):", "What This Means For You": "Apa Maksudnya Untuk Anda",
    "View Certificate (PDF) →": "Lihat Sijil (PDF) →", "Open / Download ↗": "Buka / Muat Turun ↗",
    "Licensed, Certified & Bumiputera": "Berlesen, Bertauliah & Bumiputera", "Grade G5": "Gred G5",
    "MOF Registered": "Berdaftar MOF", "Bumiputera Status": "Status Bumiputera", "Government Works": "Kerja Kerajaan",
    "Certified & Accredited:": "Bertauliah & Berakreditasi:", "Certificate": "Sijil",
    "When you engage Setia Trafik, you're working with a fully certified, Bumiputera-status contractor that meets all regulatory requirements for traffic management in Malaysia. Our certifications mean faster approvals, Bumiputera procurement eligibility, and a safer site.": "Apabila anda melantik Setia Trafik, anda bekerja dengan kontraktor bertauliah penuh berstatus Bumiputera yang memenuhi semua keperluan kawal selia untuk pengurusan trafik di Malaysia. Pensijilan kami bermaksud kelulusan lebih pantas, kelayakan perolehan Bumiputera, dan tapak yang lebih selamat.",

    /* ---- Our Story / history modal ---- */
    "Our Story": "Kisah Kami", "Founded 2015": "Ditubuhkan 2015", "Growth Milestones": "Pencapaian Pertumbuhan",
    "Our Vision": "Visi Kami",
    "Setia Trafik was established in 2015 with a clear mission: to raise the standard of traffic management in Malaysia.": "Setia Trafik ditubuhkan pada 2015 dengan misi yang jelas: meningkatkan standard pengurusan trafik di Malaysia.",

    /* ---- Forms / quote ---- */
    "Request a Quote": "Minta Sebut Harga", "Send a Request": "Hantar Permohonan", "Send Request →": "Hantar Permohonan →",
    "Recommended for You": "Disyorkan Untuk Anda", "Client:": "Pelanggan:",
    "You May Also Like": "Anda Mungkin Juga Suka"
  };

  /* Attribute translations (placeholder/title/aria-label/alt). */
  var ATTR = {
    "Your Name *": "Nama Anda *", "Company": "Syarikat", "Phone / WhatsApp *": "Telefon / WhatsApp *",
    "Project Type *": "Jenis Projek *", "Email *": "E-mel *", "Email": "E-mel",
    "Tell us about your project...": "Beritahu kami tentang projek anda...", "Search...": "Cari...",
    "Search products...": "Cari produk...", "Menu": "Menu", "Quote Cart": "Troli Sebut Harga",
    "Close": "Tutup", "WhatsApp Setia Trafik": "WhatsApp Setia Trafik", "Call Setia Trafik": "Telefon Setia Trafik"
  };

  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }
  function getLang() { try { return localStorage.getItem(KEY) || 'en'; } catch (e) { return 'en'; } }

  function walkText(toMS) {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !norm(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        var p = n.parentNode, t = p && p.nodeName;
        if (t === 'SCRIPT' || t === 'STYLE' || t === 'NOSCRIPT' || t === 'TEXTAREA') return NodeFilter.FILTER_REJECT;
        if (p && p.id === 'lang-toggle') return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n;
    while ((n = w.nextNode())) {
      var raw = n.nodeValue, core = norm(raw);
      if (toMS) {
        if (MS[core] !== undefined) {
          if (n.__en === undefined) n.__en = raw;
          var lead = raw.match(/^\s*/)[0], trail = raw.match(/\s*$/)[0];
          n.nodeValue = lead + MS[core] + trail;
        }
      } else if (n.__en !== undefined) {
        n.nodeValue = n.__en;
      }
    }
  }

  var ATTRS = ['placeholder', 'title', 'aria-label', 'alt', 'value'];
  function walkAttrs(toMS) {
    ATTRS.forEach(function (a) {
      var els = document.querySelectorAll('[' + a + ']');
      Array.prototype.forEach.call(els, function (el) {
        var raw = el.getAttribute(a); if (raw == null) return;
        var core = norm(raw), dataKey = 'data-en-' + a;
        if (toMS) {
          var ms = ATTR[core] !== undefined ? ATTR[core] : MS[core];
          if (ms !== undefined) {
            if (el.getAttribute(dataKey) == null) el.setAttribute(dataKey, raw);
            el.setAttribute(a, ms);
          }
        } else if (el.getAttribute(dataKey) != null) {
          el.setAttribute(a, el.getAttribute(dataKey));
        }
      });
    });
  }

  function setLang(lang) {
    var toMS = lang === 'ms';
    walkText(toMS); walkAttrs(toMS);
    document.documentElement.setAttribute('lang', toMS ? 'ms' : 'en');
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    var t = document.getElementById('lang-toggle');
    if (t) {
      t.querySelector('[data-l="en"]').className = toMS ? '' : 'on';
      t.querySelector('[data-l="ms"]').className = toMS ? 'on' : '';
    }
  }
  window.stSetLang = setLang;

  function injectToggle() {
    if (document.getElementById('lang-toggle')) return;
    var host = document.querySelector('#navbar .nav-links') || document.querySelector('.nav-links');
    if (!host) return;
    var css = document.createElement('style');
    css.textContent =
      '#lang-toggle{display:inline-flex;align-items:center;gap:0;border:1.5px solid #c3dcf5;border-radius:20px;overflow:hidden;background:#fff;cursor:pointer;padding:0;margin:0 6px;font-family:inherit;vertical-align:middle}' +
      '#lang-toggle span{font-size:12px;font-weight:800;padding:5px 11px;color:#5a6474;line-height:1;transition:.2s}' +
      '#lang-toggle span.on{background:#1a3a6e;color:#fff}' +
      '@media(max-width:768px){#lang-toggle{margin:8px 24px}}';
    document.head.appendChild(css);
    var btn = document.createElement('button');
    btn.id = 'lang-toggle'; btn.type = 'button'; btn.setAttribute('aria-label', 'Language / Bahasa');
    btn.innerHTML = '<span data-l="en">EN</span><span data-l="ms">BM</span>';
    btn.addEventListener('click', function () { setLang(getLang() === 'ms' ? 'en' : 'ms'); });
    host.insertBefore(btn, host.firstChild);
  }

  function init() {
    injectToggle();
    setLang(getLang());
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
