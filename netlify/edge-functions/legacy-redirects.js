// Clean 301 redirects for old numbered/query URLs -> new clean URLs.
// Netlify's _redirects engine always re-appends the original query string
// (e.g. /products/cones?page_id=301), which leaves an ugly "id number" in the
// address bar. This edge function issues the redirect itself so the destination
// is perfectly clean — no query string.
//
// The 7 protected legacy links (/?page_id=149,163,227,281,170,190) are NOT
// listed here, so they fall through to _redirects and keep working unchanged.

const PAGE_MAP = {
  "300": "/quote",
  "309": "/cart",
  "301": "/products/cones",
  "302": "/products/barriers",
  "303": "/products/lights",
  "304": "/products/mirrors",
  "305": "/products/studs",
  "306": "/products/signage",
  "307": "/products/vms",
  "308": "/products/ppe",
};

export default async (request, context) => {
  const url = new URL(request.url);
  const path = url.pathname;
  const q = url.searchParams;

  const clean = (dest) => Response.redirect(new URL(dest, url.origin).toString(), 301);

  // Old WordPress-style category / utility links: /?page_id=NNN
  if (path === "/" && q.has("page_id")) {
    const dest = PAGE_MAP[q.get("page_id")];
    if (dest) return clean(dest);
    // 149/163/227/281/170/190 -> let _redirects serve them unchanged
    return context.next();
  }

  // Old product page: /product-detail.html?slug=X -> /product/X
  if (path === "/product-detail.html" && q.has("slug")) {
    return clean("/product/" + encodeURIComponent(q.get("slug")));
  }

  // Old news article: /news-article.html?id=X -> /news/X
  if (path === "/news-article.html" && q.has("id")) {
    return clean("/news/" + encodeURIComponent(q.get("id")));
  }

  return context.next();
};

export const config = {
  path: ["/", "/product-detail.html", "/news-article.html"],
};
