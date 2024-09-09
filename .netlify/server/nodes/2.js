

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BXwM4wDL.js","_app/immutable/chunks/scheduler.BXr5QVQj.js","_app/immutable/chunks/index.Ou6W_Wae.js","_app/immutable/chunks/entry.BRybC_4y.js"];
export const stylesheets = ["_app/immutable/assets/2.DeqbxUFV.css"];
export const fonts = ["_app/immutable/assets/urbanist-latin-ext-wght-normal.CikX8QxC.woff2","_app/immutable/assets/urbanist-latin-wght-normal.S2b5Uui_.woff2"];
