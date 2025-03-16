// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://yerma.github.io',
	base: '/tremun',
	integrations: [mdx(), sitemap()],
	redirects: {
		'/material/el-dios-del-mar': '/tremun/material/una-aventura-de-leyenda/el-dios-del-mar/',
	},
});
