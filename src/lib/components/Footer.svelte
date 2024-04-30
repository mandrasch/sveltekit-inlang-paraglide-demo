<script>
	import * as m from '$lib/paraglide/messages.js';
	import { languageTag } from '$lib/paraglide/runtime';
</script>

<footer>
	<p>{m.currentlySelectedLanguage()}: <code>{languageTag()}</code></p>
</footer>

<style>
	footer {
		margin-top: 2rem;
		max-width: 900px;
		margin: 0 auto;
		text-align: center;
	}
</style>
