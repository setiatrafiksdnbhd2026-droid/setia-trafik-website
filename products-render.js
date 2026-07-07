/* products-render.js
 * Renders product cards from /products-data.json into #product-grid,
 * filtered by the grid's data-cat. Produces the same markup the pages
 * used to hard-code, so the existing search (data-name/data-sku) and
 * quote-cart (addQ) keep working. Edited via the /admin panel.
 */
(function () {
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function att(s) { return esc(s).replace(/"/g, '&quot;'); }

  function buildCard(p) {
    var name = p.name || '', slug = p.slug || '', sku = p.sku || '', img = p.img || '', cat = p.cat || '';
    var card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-name', name.toLowerCase());
    card.setAttribute('data-sku', (slug + ' ' + sku).toLowerCase());
    card.innerHTML =
      '<a href="/product/' + att(slug) + '" class="card-link" aria-label="' + att(name) + '"></a>' +
      '<div class="card-img"><img src="' + att(img) + '" alt="' + att(name) + '" loading="lazy" onerror="this.style.display=\'none\'"></div>' +
      '<div class="card-body"><div class="card-name">' + esc(name) + '</div><div class="card-sku">' + esc(sku) + '</div>' +
      '<div class="card-btns"><a class="btn-detail" href="/product/' + att(slug) + '">View Details</a>' +
      '<button class="btn-quote" id="qbtn-' + att(slug) + '">+ Quote</button></div></div>';
    card.querySelector('.btn-quote').addEventListener('click', function () {
      if (typeof addQ === 'function') addQ(name, cat, img, slug);
    });
    return card;
  }

  function run() {
    var grid = document.getElementById('product-grid');
    if (!grid) return;
    var cat = grid.getAttribute('data-cat');
    fetch('/products-data.json', { cache: 'no-cache' })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var list = ((data && data.products) || []).filter(function (p) { return !cat || p.cat === cat; });
        var frag = document.createDocumentFragment();
        list.forEach(function (p) { frag.appendChild(buildCard(p)); });
        grid.innerHTML = '';
        grid.appendChild(frag);
        if (typeof upd === 'function') upd();
      })
      .catch(function () { /* leave grid empty on error */ });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();
