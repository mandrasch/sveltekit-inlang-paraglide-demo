// thx to https://github.com/LorisSigrist/paraglide-sveltekit-example/blob/main/src/lib/i18n.js

import { createI18n } from "@inlang/paraglide-js-adapter-sveltekit"
import * as runtime from "$lib/paraglide/runtime.js"
export const i18n = createI18n(runtime, {
    pathnames: {
        "/about": {
            en: "/about",
            "de-at": "/ueber",
            "de-de": "/ueber"
        },
    }
});

