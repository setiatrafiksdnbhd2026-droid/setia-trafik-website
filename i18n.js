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
    "We plan, staff, equip and run the work zone — Pengurusan Trafik for highway concessionaires, JKR projects, MRT/LRT rail works, G5 main contractors and local councils nationwide. One partner, full scope, zero headaches.": "Kami merancang, menyediakan tenaga kerja, melengkapi dan mengendalikan zon kerja — Pengurusan Trafik untuk konsesi lebuh raya, projek JKR, kerja rel MRT/LRT, kontraktor utama G5 dan majlis tempatan di seluruh negara. Satu rakan, skop penuh, tanpa masalah.",
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
    "You May Also Like": "Anda Mungkin Juga Suka",

    /* ---- Product listing pages — hero titles ---- */
    "Lights & Blinkers": "Lampu & Penggera", "Cones & Posts": "Kon & Tiang",
    "Convex Mirrors & Safety": "Cermin Cembung & Keselamatan", "PPE & Safety": "PPE & Keselamatan",
    "Road Studs & Accessories": "Paku Jalan & Aksesori", "Signage": "Papan Tanda",
    "VMS / Solar PVMS": "VMS / PVMS Solar",

    /* ---- Product listing — hero descriptions ---- */
    "25 products · Solar blinkers, LED lights & arrow boards": "25 produk · Penggera solar, lampu LED & papan anak panah",
    "13 products · PE, PVC & PU flexible posts": "13 produk · Tiang fleksibel PE, PVC & PU",
    "7 products · Acrylic convex mirrors & safety accessories": "7 produk · Cermin cembung akrilik & aksesori keselamatan",
    "1 product · High-visibility safety vests": "1 produk · Vest keselamatan berkebolehlihatan tinggi",
    "14 products · Cat eyes, solar studs & delineators": "14 produk · Mata kucing, paku solar & penanda lorong",
    "131 signs · REAM, Highway/LLM & Standard": "131 papan tanda · REAM, Lebuhraya/LLM & Standard",
    "3 products · Portable variable message sign systems": "3 produk · Sistem papan tanda mesej boleh ubah mudah alih",

    /* ---- Product listing — category section headers ---- */
    "Blinkers & Warning Lights": "Lampu Penggera & Amaran", "Solar Products": "Produk Solar",
    "Convex Mirrors": "Cermin Cembung", "Other Safety Equipment": "Peralatan Keselamatan Lain",
    "Standard Signage": "Papan Tanda Standard", "Highway / LLM Standard": "Standard Lebuhraya / LLM",
    "REAM Standard": "Standard REAM", "Standard VMS": "VMS Standard", "Solar PVMS": "PVMS Solar",

    /* ---- Quote cart page ---- */
    "Your cart is empty": "Troli Anda Kosong",
    "Browse our products and tap “Add to Quote” to build your list.": "Layari produk kami dan tekan “Tambah ke Sebut Harga” untuk membina senarai anda.",
    "Browse Products →": "Layari Produk →", "Continue shopping": "Teruskan membeli-belah",
    "Review your items below, adjust quantities, then send the whole list to us on WhatsApp for fast pricing & availability.": "Semak item anda di bawah, laraskan kuantiti, kemudian hantar keseluruhan senarai kepada kami melalui WhatsApp untuk harga & ketersediaan pantas.",

    /* ---- Added: full-content BM translations ---- */
    "+ Quote": "+ Sebut Harga",
    "50+ Certified Traffic Management Personnel": "50+ Kakitangan Pengurusan Trafik Bertauliah",
    "A certified, Bumiputera-status traffic management contractor trusted by JKR, DBKL, LLM, PLUS and leading construction firms.": "Kontraktor pengurusan trafik bertauliah berstatus Bumiputera yang dipercayai oleh JKR, DBKL, LLM, PLUS dan firma pembinaan terkemuka.",
    "A decade of delivering safe, certified traffic management across Malaysia's most demanding projects.": "Satu dekad menyampaikan pengurusan trafik yang selamat dan bertauliah merentasi projek paling mencabar di Malaysia.",
    "A selection of projects where Setia Trafik has provided traffic management and road safety services.": "Pilihan projek di mana Setia Trafik telah menyediakan perkhidmatan pengurusan trafik dan keselamatan jalan raya.",
    "Achieved CIDB Grade G5 certification and secured our first major highway project on the DUKE Expressway extension.": "Memperoleh pensijilan CIDB Gred G5 dan memperoleh projek lebuh raya utama pertama kami di sambungan Lebuh Raya DUKE.",
    "Active CIDB Grade G5 Status Maintained": "Status Aktif CIDB Gred G5 Dikekalkan",
    "All certifications are current and verified. Click": "Semua pensijilan adalah terkini dan disahkan. Klik",
    "Available": "Tersedia",
    "Barrier Solutions →": "Penyelesaian Penghadang →",
    "Barriers & Hoardings": "Penghadang & Hoarding",
    "Bridge Ahead": "Jambatan Di Hadapan",
    "Browse Catalog →": "Layari Katalog →",
    "Browse our complete catalog of traffic control products — cones, delineators, bollards, road studs, reflective sheeting and more. Competitive pricing on bulk orders.": "Layari katalog lengkap produk kawalan trafik kami — kon, penanda, bolard, stud jalan, kepingan pemantul dan banyak lagi. Harga kompetitif untuk pesanan pukal.",
    "Building & infrastructure projects": "Projek bangunan & infrastruktur",
    "Building Construction": "Pembinaan Bangunan",
    "Bulk purchase discounts": "Diskaun pembelian pukal",
    "CIDB G5 (Active), MOF registered, Bumiputera status, PKK/STB and SPKK — fully compliant for government and private projects.": "CIDB G5 (Aktif), berdaftar MOF, status Bumiputera, PKK/STB dan SPKK — mematuhi sepenuhnya untuk projek kerajaan dan swasta.",
    "CIDB G5, MOF Registered, PKK/STB Bumiputera, and SPKK certified. All certifications are current and verified.": "CIDB G5, berdaftar MOF, PKK/STB Bumiputera, dan bertauliah SPKK. Semua pensijilan adalah terkini dan disahkan.",
    "CIDB Grade G5 Awarded": "CIDB Gred G5 Dianugerahkan",
    "Catalog": "Katalog",
    "Category": "Kategori",
    "Cattle on Road": "Ternakan Di Jalan",
    "Central Spine Road, Gua Musang — Kelantan Works Begin": "Jalan Central Spine, Gua Musang — Kerja Kelantan Bermula",
    "Chevron Left": "Chevron Kiri",
    "Chevron Right": "Chevron Kanan",
    "Children Crossing": "Lintasan Kanak-Kanak",
    "Click a category to browse products": "Klik kategori untuk melayari produk",
    "Company Founded": "Syarikat Ditubuhkan",
    "Company updates, industry news, and a record of our past traffic management projects and tenders.": "Kemas kini syarikat, berita industri, dan rekod projek serta tender pengurusan trafik kami yang lepas.",
    "Complete Traffic Management Solutions": "Penyelesaian Pengurusan Trafik Lengkap",
    "Compliance documentation": "Dokumentasi pematuhan",
    "Construction": "Pembinaan",
    "Construction Signage Set": "Set Papan Tanda Pembinaan",
    "Construction Traffic Control": "Kawalan Trafik Pembinaan",
    "Contraflow Ahead": "Aliran Bertentangan Di Hadapan",
    "Core Service": "Perkhidmatan Teras",
    "Crosswind Warning": "Amaran Angin Sisi",
    "Cyclist Crossing": "Lintasan Penunggang Basikal",
    "Dedicated Emergency Response Team available around the clock — incident scene management, urgent utility works, rapid mobilisation within hours.": "Pasukan Tindak Balas Kecemasan khusus tersedia sepanjang masa — pengurusan tempat kejadian, kerja utiliti kecemasan, mobilisasi pantas dalam masa beberapa jam.",
    "Dedicated traffic management for construction sites — highway widening, utility works, bridge construction and building projects. CIDB Grade G5 registered contractor.": "Pengurusan trafik khusus untuk tapak pembinaan — pelebaran lebuh raya, kerja utiliti, pembinaan jambatan dan projek bangunan. Kontraktor berdaftar CIDB Gred G5.",
    "Delivery across Malaysia": "Penghantaran ke seluruh Malaysia",
    "Detour Diversion": "Lencongan",
    "Dip Ahead": "Lekuk Di Hadapan",
    "Direct Contact": "Hubungan Terus",
    "Diversion Arrow": "Anak Panah Lencongan",
    "East Malaysia Expansion": "Pengembangan Malaysia Timur",
    "Emergency / Urgent": "Kecemasan / Segera",
    "End Speed Limit": "Tamat Had Laju",
    "End of Restriction": "Tamat Sekatan",
    "End-to-end traffic management — CIDB G5-registered, Bumiputera-status, 24/7 operations across Malaysia.": "Pengurusan trafik menyeluruh — berdaftar CIDB G5, berstatus Bumiputera, operasi 24/7 di seluruh Malaysia.",
    "Equipment": "Peralatan",
    "Equipment Supply": "Bekalan Peralatan",
    "Event / Road Closure": "Acara / Penutupan Jalan",
    "Every person on our team — Traffic Manager, TMO, Flagman, TMDT Driver — is Lantra-certified and field-trained for Malaysia's most demanding projects.": "Setiap ahli pasukan kami — Pengurus Trafik, TMO, Pengawal Bendera, Pemandu TMDT — bertauliah Lantra dan terlatih di lapangan untuk projek paling mencabar di Malaysia.",
    "Exit Only": "Keluar Sahaja",
    "Falling Rocks": "Batu Jatuh",
    "Fast Response": "Tindak Balas Pantas",
    "For highway and expressway works, you'll need a full Traffic Management Plan (TMP) submitted to JKR before any works begin. Our in-house TMP designers handle all drawings and regulatory liaison — then our CIDB G5-registered team deploys with owned TMDT lorries, ERT vehicles, shadow vehicles and all required DBKL/JKR signage. We've handled dozens of major highway projects across Malaysia.": "Untuk kerja lebuh raya dan lebuh raya ekspres, anda memerlukan Pelan Pengurusan Trafik (TMP) penuh yang diserahkan kepada JKR sebelum sebarang kerja bermula. Pereka TMP dalaman kami menguruskan semua lukisan dan urusan kawal selia — kemudian pasukan berdaftar CIDB G5 kami dikerahkan dengan lori TMDT sendiri, kenderaan ERT, kenderaan bayang dan semua papan tanda DBKL/JKR yang diperlukan. Kami telah mengendalikan berpuluh-puluh projek lebuh raya utama di seluruh Malaysia.",
    "From Perlis in the north to Johor in the south, from Kelantan to Sabah — Setia Trafik delivers consistent, certified traffic management nationwide.": "Dari Perlis di utara hingga Johor di selatan, dari Kelantan hingga Sabah — Setia Trafik menyampaikan pengurusan trafik yang konsisten dan bertauliah di seluruh negara.",
    "From TMP design to full on-site deployment — we handle every aspect of traffic control so your project stays safe and on schedule.": "Daripada reka bentuk TMP hingga pelaksanaan penuh di tapak — kami mengendalikan setiap aspek kawalan trafik supaya projek anda kekal selamat dan mengikut jadual.",
    "Full MOF registration, Bumiputera status, PKK/STB and SPKK — enabling government and private tenders nationwide.": "Pendaftaran MOF penuh, status Bumiputera, PKK/STB dan SPKK — membolehkan tender kerajaan dan swasta di seluruh negara.",
    "Full TMP scope: plan drafting, permit submission, and direct regulatory liaison with JKR, DBKL, and highway concessionaires.": "Skop TMP penuh: penyediaan pelan, penyerahan permit, dan urusan kawal selia terus dengan JKR, DBKL, dan pemegang konsesi lebuh raya.",
    "Full Traffic Management Details →": "Butiran Penuh Pengurusan Trafik →",
    "Full product specs & datasheets": "Spesifikasi produk penuh & lembaran data",
    "Fully Certified": "Bertauliah Sepenuhnya",
    "Fully Owned Fleet": "Armada Milik Sendiri",
    "Give Way": "Beri Laluan",
    "HQ Operations": "Operasi Ibu Pejabat",
    "Highest Grade Certifications": "Pensijilan Gred Tertinggi",
    "Highway & expressway projects": "Projek lebuh raya & lebuh raya ekspres",
    "Highway / Expressway Works": "Kerja Lebuh Raya / Ekspres",
    "Hump Ahead": "Bonggol Di Hadapan",
    "Image available on request": "Imej tersedia atas permintaan",
    "Installation & removal service": "Perkhidmatan pemasangan & penanggalan",
    "Issued by CIDB Malaysia": "Dikeluarkan oleh CIDB Malaysia",
    "Issued by Kementerian Kewangan": "Dikeluarkan oleh Kementerian Kewangan",
    "Jersey & water-filled barriers": "Penghadang Jersey & berisi air",
    "Junction Ahead": "Persimpangan Di Hadapan",
    "Just Equipment / Rental": "Peralatan Sahaja / Sewaan",
    "Keep Left": "Ikut Kiri",
    "Keep Right": "Ikut Kanan",
    "LED blinkers, flashing arrow boards, solar warning lights for night-time works.": "Lampu penggera LED, papan anak panah berkelip, lampu amaran solar untuk kerja waktu malam.",
    "Lane Closed Ahead": "Lorong Ditutup Di Hadapan",
    "Latest Updates": "Kemas Kini Terkini",
    "Left Lane Closed": "Lorong Kiri Ditutup",
    "Low Clearance": "Ruang Rendah",
    "MOF Bumiputera Status Recognised": "Status Bumiputera MOF Diiktiraf",
    "MOF Registered — Kementerian Kewangan Malaysia": "Berdaftar MOF — Kementerian Kewangan Malaysia",
    "MOF Registration & Fleet Expansion": "Pendaftaran MOF & Pengembangan Armada",
    "Manager 4×4": "Pengurus 4×4",
    "Men at Work Ahead": "Kerja Sedang Dijalankan Di Hadapan",
    "Merge Left": "Bergabung Kiri",
    "Merge Right": "Bergabung Kanan",
    "More from our range": "Lagi daripada rangkaian kami",
    "Multi-year Traffic Management Plan deployment for one of Penang's most significant urban infrastructure upgrades — full TMP design, certified team and owned fleet mobilised.": "Pelaksanaan Pelan Pengurusan Trafik pelbagai tahun untuk salah satu naik taraf infrastruktur bandar paling penting di Pulau Pinang — reka bentuk TMP penuh, pasukan bertauliah dan armada sendiri dikerahkan.",
    "Narrow Lane Ahead": "Lorong Sempit Di Hadapan",
    "Nationwide": "Seluruh Negara",
    "Nationwide Reach": "Liputan Seluruh Negara",
    "News & Announcements": "Berita & Pengumuman",
    "No Entry": "Dilarang Masuk",
    "No Left Turn": "Dilarang Belok Kiri",
    "No Overtaking": "Dilarang Memotong",
    "No Parking": "Dilarang Meletak Kenderaan",
    "No Parking Temporary": "Dilarang Meletak Kenderaan (Sementara)",
    "No Right Turn": "Dilarang Belok Kanan",
    "No Stopping": "Dilarang Berhenti",
    "No U-Turn": "Dilarang Pusing U",
    "No categories found": "Tiada kategori dijumpai",
    "Obtained Sijil Taraf Bumiputera (STB) from PKK and Sijil Perolehan Kerja Kerajaan (SPKK) — opening access to government tenders and Bumiputera procurement programmes.": "Memperoleh Sijil Taraf Bumiputera (STB) daripada PKK dan Sijil Perolehan Kerja Kerajaan (SPKK) — membuka akses kepada tender kerajaan dan program perolehan Bumiputera.",
    "One Vendor, Complete Solution": "Satu Pembekal, Penyelesaian Lengkap",
    "One-Way Left": "Sehala Kiri",
    "One-Way Right": "Sehala Kanan",
    "One-Way Straight": "Sehala Lurus",
    "Operating Across All of Malaysia": "Beroperasi Di Seluruh Malaysia",
    "Operating across Peninsular Malaysia and East Malaysia. Based in Klang Valley with rapid deployment to all states.": "Beroperasi merentasi Semenanjung Malaysia dan Malaysia Timur. Berpangkalan di Lembah Klang dengan pengerahan pantas ke semua negeri.",
    "Our Certifications": "Pensijilan Kami",
    "Our Clients": "Pelanggan Kami",
    "Our Coverage": "Liputan Kami",
    "Our Credentials": "Kelayakan Kami",
    "Our People": "Warga Kami",
    "Our Services": "Perkhidmatan Kami",
    "Overtaking Prohibited": "Memotong Dilarang",
    "PKK / STB & SPKK Certifications": "Pensijilan PKK / STB & SPKK",
    "Past Projects & Tenders": "Projek & Tender Lepas",
    "Pedestrian Crossing": "Lintasan Pejalan Kaki",
    "Peninsular Malaysia to East Malaysia — same quality, same standards, everywhere.": "Semenanjung Malaysia hingga Malaysia Timur — kualiti sama, standard sama, di mana-mana.",
    "Plan drafting & submission": "Penyediaan & penyerahan pelan",
    "Product": "Produk",
    "Product Catalog": "Katalog Produk",
    "Product Name": "Nama Produk",
    "Project Tenders": "Tender Projek",
    "Railway Level Crossing": "Lintasan Landasan Kereta Api",
    "Raised pavement markers, cat-eyes, solar road studs — for lane delineation.": "Penanda turapan timbul, cat-eye, stud jalan solar — untuk penandaan lorong.",
    "Reach Us Anytime": "Hubungi Kami Bila-Bila Masa",
    "Reduce Speed Now": "Kurangkan Laju Sekarang",
    "Registered with Kementerian Kewangan Malaysia (MOF). Expanded fleet to 15 vehicles and grew team to 40+ certified personnel.": "Berdaftar dengan Kementerian Kewangan Malaysia (MOF). Mengembangkan armada kepada 15 kenderaan dan menambah pasukan kepada 40+ kakitangan bertauliah.",
    "Regulatory liaison (JKR/DBKL)": "Urusan kawal selia (JKR/DBKL)",
    "Request for This Project →": "Mohon untuk Projek Ini →",
    "Right Lane Closed": "Lorong Kanan Ditutup",
    "Road Ends": "Jalan Berakhir",
    "Road Narrows": "Jalan Menyempit",
    "Road Works Ahead": "Kerja Jalan Di Hadapan",
    "Road marking materials": "Bahan penanda jalan",
    "Round and D-shape convex mirrors for driveways, car parks and blind corners.": "Cermin cembung bulat dan bentuk-D untuk laluan masuk, tempat letak kereta dan selekoh buta.",
    "Roundabout Ahead": "Bulatan Di Hadapan",
    "Safety": "Keselamatan",
    "Safety vests, helmets, gloves, flagman equipment for road work crews.": "Vest keselamatan, topi keledar, sarung tangan, peralatan pengawal bendera untuk krew kerja jalan.",
    "School Zone": "Zon Sekolah",
    "Selected for PLUS Yong Peng–Senai Third-Lane Widening": "Dipilih untuk Pelebaran Lorong Ketiga PLUS Yong Peng–Senai",
    "Setia Trafik Engaged for Penang Ayer Itam Bypass TMP": "Setia Trafik Dilantik untuk TMP Jalan Pintas Ayer Itam Pulau Pinang",
    "Setia Trafik Holds Active CIDB Grade G5 Status": "Setia Trafik Memegang Status Aktif CIDB Gred G5",
    "Setia Trafik appointed as Traffic Management contractor for the major third-lane widening programme along the PLUS southern expressway corridor.": "Setia Trafik dilantik sebagai kontraktor pengurusan trafik untuk program pelebaran lorong ketiga utama di sepanjang koridor lebuh raya ekspres selatan PLUS.",
    "Setia Trafik delivers TMP on the critical Central Spine alignment connecting the East Coast through Kelantan, expanding our nationwide project footprint.": "Setia Trafik menyampaikan TMP pada penjajaran Central Spine yang kritikal menghubungkan Pantai Timur melalui Kelantan, memperluas jejak projek kami di seluruh negara.",
    "Setia Trafik established in Kuala Lumpur with a small team of certified traffic managers. First contract: utility works in Cheras.": "Setia Trafik ditubuhkan di Kuala Lumpur dengan pasukan kecil pengurus trafik bertauliah. Kontrak pertama: kerja utiliti di Cheras.",
    "Setia Trafik holds all mandatory Malaysian certifications to tender and execute government and private sector traffic management projects nationwide.": "Setia Trafik memegang semua pensijilan Malaysia yang mandatori untuk menender dan melaksanakan projek pengurusan trafik sektor kerajaan dan swasta di seluruh negara.",
    "Shadow Vehicle": "Kenderaan Bayang",
    "Sharp Bend Left": "Selekoh Tajam Kiri",
    "Sharp Bend Right": "Selekoh Tajam Kanan",
    "Slippery Road": "Jalan Licin",
    "Solar-powered arrow boards": "Papan anak panah berkuasa solar",
    "Solar-powered devices": "Peranti berkuasa solar",
    "Specialist": "Pakar",
    "Speed Limit 30": "Had Laju 30",
    "Speed Limit 30 km/h": "Had Laju 30 km/j",
    "Speed Limit 40": "Had Laju 40",
    "Speed Limit 40 km/h": "Had Laju 40 km/j",
    "Speed Limit 50": "Had Laju 50",
    "Speed Limit 50 km/h": "Had Laju 50 km/j",
    "Speed Limit 60": "Had Laju 60",
    "Speed Limit 60 km/h": "Had Laju 60 km/j",
    "Speed Limit 70": "Had Laju 70",
    "Speed Limit 80": "Had Laju 80",
    "Speed Limit 80 km/h": "Had Laju 80 km/j",
    "Speed Limit 90": "Had Laju 90",
    "Started as a small team of certified traffic managers in Kuala Lumpur, handling utility and drainage works around the Klang Valley. Our founding principle was simple — hire only certified people, own our equipment, and never cut corners on safety.": "Bermula sebagai pasukan kecil pengurus trafik bertauliah di Kuala Lumpur, mengendalikan kerja utiliti dan saliran di sekitar Lembah Klang. Prinsip asas kami mudah — ambil hanya orang bertauliah, miliki peralatan sendiri, dan jangan sesekali berkompromi pada keselamatan.",
    "Steep Ascent": "Mendaki Curam",
    "Steep Descent": "Menurun Curam",
    "Stop / Slow Board": "Papan Berhenti / Perlahan",
    "Stop Sign": "Papan Tanda Berhenti",
    "Supply and rental of certified traffic management equipment — from cones and barriers to electronic warning devices. All DBKL and JKR approved.": "Bekalan dan sewaan peralatan pengurusan trafik bertauliah — daripada kon dan penghadang hingga peranti amaran elektronik. Semua diluluskan DBKL dan JKR.",
    "Supply, delivery and installation of temporary and permanent road barrier systems — Jersey barriers, water-filled barriers, Armco crash barriers and more.": "Bekalan, penghantaran dan pemasangan sistem penghadang jalan sementara dan kekal — penghadang Jersey, penghadang berisi air, penghadang perlanggaran Armco dan banyak lagi.",
    "T-Junction Left": "Simpang-T Kiri",
    "T-Junction Right": "Simpang-T Kanan",
    "TMDT Driver": "Pemandu TMDT",
    "TMDT Lorry, ERT Vehicle, Shadow Vehicle, Water Tanker, Road Sweeper and Manager 4x4 — all owned, no sub-rental.": "Lori TMDT, kenderaan ERT, kenderaan bayang, tangki air, penyapu jalan dan 4x4 pengurus — semuanya milik sendiri, tiada sewaan luar.",
    "TMO & Supervisor": "TMO & Penyelia",
    "TMP In-House": "TMP Dalaman",
    "TMP design, personnel, equipment and fleet — no juggling multiple contractors.": "Reka bentuk TMP, kakitangan, peralatan dan armada — tanpa perlu menguruskan pelbagai kontraktor.",
    "Tell us about your project and we'll point you to exactly what you need.": "Beritahu kami tentang projek anda dan kami akan tunjukkan tepat apa yang anda perlukan.",
    "Temporary Speed Limit 30": "Had Laju Sementara 30",
    "Temporary Speed Limit 40": "Had Laju Sementara 40",
    "Temporary Speed Limit 50": "Had Laju Sementara 50",
    "Temporary Speed Limit 60": "Had Laju Sementara 60",
    "Temporary Speed Limit 80": "Had Laju Sementara 80",
    "Temporary traffic signs & signals": "Papan tanda & isyarat trafik sementara",
    "Temporary traffic signs, JKR/REAM/highway standard signage — construction zone compliant.": "Papan tanda trafik sementara, papan tanda standard JKR/REAM/lebuh raya — mematuhi zon pembinaan.",
    "To be Malaysia's most trusted and comprehensive traffic management company — where every project is safer because we were there.": "Menjadi syarikat pengurusan trafik paling dipercayai dan menyeluruh di Malaysia — di mana setiap projek lebih selamat kerana kehadiran kami.",
    "Track Record": "Rekod Prestasi",
    "Traffic Lights Ahead": "Lampu Isyarat Di Hadapan",
    "Traffic Management & Road Safety Partner": "Rakan Pengurusan Trafik & Keselamatan Jalan Raya",
    "Traffic Management Products": "Produk Pengurusan Trafik",
    "Traffic Management — Pengurusan Trafik": "Pengurusan Trafik",
    "Traffic Manager": "Pengurus Trafik",
    "Traffic Manager, TMO, Supervisor, TMDT Driver, Flagman and Traffic Controller — all Lantra-certified and ready to deploy.": "Pengurus Trafik, TMO, Penyelia, Pemandu TMDT, Pengawal Bendera dan Pengawal Trafik — semuanya bertauliah Lantra dan sedia dikerahkan.",
    "Traffic cones, delineator posts, flexible posts — all sizes, JKR/REAM compliant.": "Kon trafik, tiang penanda, tiang fleksibel — semua saiz, mematuhi JKR/REAM.",
    "Try a different search term.": "Cuba istilah carian yang berbeza.",
    "Two-Way Traffic": "Trafik Dua Hala",
    "Uneven Road": "Jalan Tidak Rata",
    "Utility & drainage works": "Kerja utiliti & saliran",
    "Utility / Drainage Works": "Kerja Utiliti / Saliran",
    "Variable message sign trailers, solar PVMS, arrow boards for lane closures.": "Treler papan tanda mesej berubah, PVMS solar, papan anak panah untuk penutupan lorong.",
    "Variable message signs (VMS)": "Papan tanda mesej berubah (VMS)",
    "View Equipment Catalog →": "Lihat Katalog Peralatan →",
    "View Traffic Management →": "Lihat Pengurusan Trafik →",
    "Water Tanker & Road Sweeper": "Tangki Air & Penyapu Jalan",
    "Water-filled barrier rental": "Sewaan penghadang berisi air",
    "Water-filled barriers, precast concrete barriers, Jersey barriers, site hoarding panels.": "Penghadang berisi air, penghadang konkrit pratuang, penghadang Jersey, panel hoarding tapak.",
    "We are proud to maintain our CIDB Grade G5 registration (Active) — together with full MOF registration, Bumiputera status, PKK/STB, and SPKK — enabling us to tender and execute government and private sector traffic management projects nationwide.": "Kami bangga mengekalkan pendaftaran CIDB Gred G5 (Aktif) kami — bersama pendaftaran MOF penuh, status Bumiputera, PKK/STB, dan SPKK — membolehkan kami menender dan melaksanakan projek pengurusan trafik sektor kerajaan dan swasta di seluruh negara.",
    "We handle the entire Traffic Management scope end-to-end — TMP design, certified team deployment, owned fleet mobilisation, full equipment supply and installation, daily on-site implementation, and close-out reporting. One contract, one point of accountability, zero headaches.": "Kami menguruskan keseluruhan skop Pengurusan Trafik dari awal hingga akhir — reka bentuk TMP, penempatan pasukan bertauliah, mobilisasi armada sendiri, bekalan dan pemasangan peralatan penuh, pelaksanaan harian di tapak, dan pelaporan penutupan. Satu kontrak, satu titik akauntabiliti, tanpa masalah.",
    "What Are You Looking For?": "Apa Yang Anda Cari?",
    "What Have We Done": "Apa Yang Kami Telah Lakukan",
    "WhatsApp Us for a Quote →": "WhatsApp Kami untuk Sebut Harga →",
    "WhatsApp us your requirements and we'll respond fast — usually within minutes during business hours. Add products to your quote cart, or message us directly below.": "WhatsApp kami keperluan anda dan kami akan membalas dengan pantas — biasanya dalam beberapa minit pada waktu perniagaan. Tambah produk ke troli sebut harga anda, atau hubungi kami terus di bawah.",
    "WhatsApp — Fast Response": "WhatsApp — Balasan Pantas",
    "When your project involves a live road, construction interruption, or any work zone impacting traffic — Setia Trafik is the specialist you call. We handle the entire Traffic Management scope end-to-end so you can focus on construction, the utility installation, or the rail works.": "Apabila projek anda melibatkan jalan yang sedang digunakan, gangguan pembinaan, atau mana-mana zon kerja yang menjejaskan trafik — Setia Trafik ialah pakar yang anda hubungi. Kami menguruskan keseluruhan skop Pengurusan Trafik dari awal hingga akhir supaya anda boleh fokus pada pembinaan, pemasangan utiliti, atau kerja rel.",
    "Where We Cover": "Kawasan Liputan Kami",
    "Why Choose Setia Trafik": "Mengapa Pilih Setia Trafik",
    "Work Zone Speed 60": "Laju Zon Kerja 60",
    "Work Zone Speed 80": "Laju Zon Kerja 80",
    "Zero Incident Track Record": "Rekod Sifar Insiden",
    "contact us": "hubungi kami",
    "for full details or": "untuk butiran penuh atau",
    "here": "di sini",
    "to request certificate copies.": "untuk memohon salinan sijil.",
    "› Quote Cart": "› Troli Sebut Harga",
    "← All News & Projects": "← Semua Berita & Projek",
    "← Back to News & Projects": "← Kembali ke Berita & Projek",
    "📞 For pricing and availability, contact us via WhatsApp or request a quote below. Bulk orders welcome.": "📞 Untuk harga dan ketersediaan, hubungi kami melalui WhatsApp atau mohon sebut harga di bawah. Pesanan pukal dialu-alukan.",
    "🛒 Your Quote Cart": "🛒 Troli Sebut Harga Anda",
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
