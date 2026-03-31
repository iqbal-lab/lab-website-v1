import adapter from "@sveltejs/adapter-cloudflare";
import { mdsvex } from "mdsvex";

const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$components: "./src/components"
		}
	},
	extensions: [".svelte", ".md"],
	preprocess: [
		mdsvex({
			extensions: [".md"],
			layout: "./src/components/BlogPost.svelte"
		})
	]
};

export default config;
