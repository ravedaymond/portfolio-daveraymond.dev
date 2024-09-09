import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.B82-pCFw.js","_app/immutable/chunks/scheduler.BXr5QVQj.js","_app/immutable/chunks/index.Ou6W_Wae.js"];
export const stylesheets = [];
export const fonts = [];
