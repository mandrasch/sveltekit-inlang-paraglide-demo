<script>
	import * as m from '$lib/paraglide/messages.js';

	// TODO: add jsdocs string type
	export let segment;

	const routes = [
		{
			href: '/',
			label: m.Home()
		},
		{
			href: '/about', // path name will be translated via src/lib/i18n.js
			label: m.About()
		}
	];
</script>

<nav>
	{#each routes as route}
		<a class={`button ${segment === route.href ? 'selected' : ''}`} href={route.href}
			>{route.label}</a
		>
	{/each}
</nav>

<style>
	nav {
		display: flex;
		justify-content: row;
		gap: 1rem;
	}
</style>
