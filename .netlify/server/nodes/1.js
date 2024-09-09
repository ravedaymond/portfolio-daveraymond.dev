

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BugT9Zcl.js","_app/immutable/chunks/scheduler.BXr5QVQj.js","_app/immutable/chunks/index.Ou6W_Wae.js","_app/immutable/chunks/entry.BRybC_4y.js"];
export const stylesheets = [];
export const fonts = [];
