import {writeFileSync} from 'fs'
import {globby} from 'globby'

const domain = 'https://www.jamsite.agency'

async function generateSiteMap(){
	const pages = await globby([
		'src/routes/*',
		'!src/routes/**/__*',
		'!src/routes/api/*'
	])
	
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		${pages
			.map((page) => {
				const path = page.replace("src/", "").replace("routes/", "").replace(".js", "").replace('.svelte', '').replace(".mdx", "").replace(".md", "").replace(".json", "");
				const route = path === "index@home" ? "" : path;
				return `
					<url>
							<loc>${`${domain}/${route}`}</loc>
							<lastmod>${new Date().toISOString()}</lastmod>
							<changefreq>monthly</changefreq>
					</url>
				`;
			})
			.join("")}
</urlset>
    `;
	writeFileSync('static/sitemap.xml',sitemap)
}

generateSiteMap()
