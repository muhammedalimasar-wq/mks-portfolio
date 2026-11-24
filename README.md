# MKS Group — Portfolio website

Static site (GitHub Pages) + Firebase Firestore for view tracking, client links and contact messages.

- `index.html` — home (hero, stats, services, featured project, process, portfolio, about, contact + map)
- `project.html?id=p1` — project page: gallery + watermarked drawings viewer
- `admin.html` — owner dashboard (Google sign-in, owner email only)
- `js/data.js` — **all site content and projects** (edit here to add/replace projects)
- `js/firebase-config.js` — Firebase web config + admin email
- `firestore.rules` — paste into Firebase Console → Firestore → Rules
- `img/p/` project images, `img/d/` watermarked drawing sheets, `img/brand/` logos

Client tracking links: `index.html?c=CL-001` or `project.html?id=p2&c=CL-001` (created from the dashboard).
