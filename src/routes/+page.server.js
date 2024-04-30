// TODO: Bbundle this as general / shared function, use file name as param instead of hardcoding 'welcome.md'

// TODO: convert to JSDocs type
// import type { PageServerLoad } from './$types';
// export const load: PageServerLoad = async ({ locals, depends }) => {
export const load = async ({ locals, depends }) => {
	try {

		// This tells SvelteKit to re-run this load function when the language changes
		depends('paraglide:lang');

		// Important - we can't use  { languageTag } from '$lib/paraglide/runtime' here on server, this is only possible on client. But there is another way to access it on server 🎉 thx to https://github.com/LorisSigrist/paraglide-sveltekit-example/blob/main/src/routes/%2Blayout.server.js

		console.log(`[server] Detected selected language as "${locals.paraglide.lang}"`);

		// get the currently selected language from user session
		const selectedLanguage = locals.paraglide.lang ?? 'en';

		// Get markdown content for currently selected language
		const post = await import(`../content/${selectedLanguage}/welcome.md`);

		// console.log('Returning ', { mdContent: post.default.render() });

		// Submit as rendered object (.html, .css)
		return {
			mdContent: post.default.render()
		};
	} catch (e) {
		console.error('Load error', { e });
		return {
			mdContent: {
				html: 'Failed to load.'
			}
		};
	}
};
