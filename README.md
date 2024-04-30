# sveltekit-inlang-paraglide-demo

Simple multilanguage demo with SvelteKit and @inlang/paraglide-js-adapter-sveltekit.

Also with conditional markdown loading based on selected language (server side).

## How was this created 

1. `npm create svelte@latest .` -> skeleton project
2. Followed https://www.npmjs.com/package/@inlang/paraglide-js-adapter-sveltekit

```bash
npx @inlang/paraglide-js init
# Selected languages: en, de-at, de-de; and selected SvelteKit

npm i

npm i -D @inlang/paraglide-js-adapter-sveltekit
```

