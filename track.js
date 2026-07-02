/* Setia Trafik — conversion event tracking (Google Analytics GA4).
   Fires key events when visitors take contact/lead actions.
   Safe no-op if gtag isn't present. */
(function () {
  function ev(name, params) {
    try { if (typeof window.gtag === 'function') window.gtag('event', name, params || {}); } catch (e) {}
  }
  document.addEventListener('click', function (e) {
    var el = e.target && e.target.closest ? e.target.closest('a,button') : null;
    if (!el) return;
    var href = ((el.getAttribute && el.getAttribute('href')) || '').toLowerCase();
    var cls = (el.getAttribute && el.getAttribute('class')) || '';
    var txt = (el.textContent || '').trim().toLowerCase();
    if (href.indexOf('wa.me') > -1 || href.indexOf('whatsapp.com') > -1) {
      ev('whatsapp_click', { page_path: location.pathname });
    } else if (href.indexOf('tel:') > -1) {
      ev('call_click', { page_path: location.pathname });
    } else if (href.indexOf('mailto:') > -1) {
      ev('email_click', { page_path: location.pathname });
    } else if (cls.indexOf('btn-quote') > -1 || txt === '+ quote' || txt.indexOf('add to quote') > -1) {
      ev('add_to_quote', { page_path: location.pathname });
    } else if (cls.indexOf('st-cart-send') > -1 || txt.indexOf('send quote on whatsapp') > -1) {
      ev('quote_submit_whatsapp', { page_path: location.pathname });
    }
  }, true);
})();
