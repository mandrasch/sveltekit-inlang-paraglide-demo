<script>
	import * as m from '$lib/paraglide/messages.js';

	// Thx to https://github.com/LorisSigrist/paraglide-sveltekit-example
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';

	/**
	 * @param { import("$lib/paraglide/runtime").AvailableLanguageTag } newLanguage
	 */
	function switchToLanguage(newLanguage) {
		const canonicalPath = i18n.route(get(page).url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		console.log('Trying to switch to ', { localisedPath });
		goto(localisedPath);
	}

	// TODO: don't use emojis (not windows compatible?)
	/**
	 * @type {Record<import("$lib/paraglide/runtime").AvailableLanguageTag, string>}
	 */
	const labels = {
		en: '🇬🇧 English (en)',
		'de-at': '🇦🇹 Österreichisches Deutsch (de-at)',
		'de-de': '🇩🇪 Bundes-Deutsch (de-de)'
	};
</script>

<div class="languageSwitcher">
	<label
		>{m.SelectYourLanguage()}
		<select on:change={(e) => switchToLanguage(/** @type {any} */ (e).target.value)}>
			{#each availableLanguageTags as langTag}
				<option value={langTag} selected={languageTag() === langTag}>{labels[langTag]}</option>
			{/each}
		</select>
	</label>
</div>
