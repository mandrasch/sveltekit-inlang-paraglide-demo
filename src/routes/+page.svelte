<script>
	import * as m from '$lib/paraglide/messages.js';
	import { languageTag } from '$lib/paraglide/runtime';

	// Dynamic markdown loading based on selected language (via +page.server.js)
	export let data;
	// important: make sure it's reactive for lang switcher
	$: renderedHtmlFromMarkdown = data.mdContent.html;
	// debug received data via:
	// console.log({ data });
</script>

<h1>{m.WelcomeMessage()}</h1>

<!-- Markdown loaded based on selected language -->

<p>{m.MarkdownInfo()}</p>

<div class="prose">
	{@html renderedHtmlFromMarkdown}
</div>

<p>Markdown: <code>/content/{languageTag()}/welcome.md</code></p>

<style>
	.prose {
		background: #e9e7e7;
		padding: 1rem 2rem;
	}
</style>
