<script>
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import { i18n } from '$lib/i18n.js';
	import { page } from '$app/stores';

	import LanguageSwitch from '$lib/components/LanguageSwitch.svelte';
	import GitHubCorner from '$lib/components/GitHubCorner.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<ParaglideJS {i18n}>
	<header>
		<NavBar segment={$page.url.pathname} />
		<LanguageSwitch />
	</header>

	<main>
		<slot />
	</main>

	<Footer />

	<GitHubCorner />
</ParaglideJS>

<style>
	:global(body) {
		font-family: sans-serif;
	}

	header,
	main {
		max-width: 900px;
		margin: 0 auto;
	}

	main {
		padding: 1rem 2rem;
	}

	header {
		padding: 2rem;
		border-bottom: 1px solid #999;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	@media only screen and (max-width: 600px) {
		header {
			flex-direction: column;
			gap: 1rem;
		}
	}
</style>
