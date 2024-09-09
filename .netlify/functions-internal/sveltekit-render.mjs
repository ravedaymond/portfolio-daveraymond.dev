import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.afdesign","favicon.png","files/declaration_of_the_independence_of_cyberspace.pdf","files/experience.pdf","fonts/Aileron/Aileron-Black.otf","fonts/Aileron/Aileron-BlackItalic.otf","fonts/Aileron/Aileron-Bold.otf","fonts/Aileron/Aileron-BoldItalic.otf","fonts/Aileron/Aileron-Heavy.otf","fonts/Aileron/Aileron-HeavyItalic.otf","fonts/Aileron/Aileron-Italic.otf","fonts/Aileron/Aileron-Light.otf","fonts/Aileron/Aileron-LightItalic.otf","fonts/Aileron/Aileron-Regular.otf","fonts/Aileron/Aileron-SemiBold.otf","fonts/Aileron/Aileron-SemiBoldItalic.otf","fonts/Aileron/Aileron-Thin.otf","fonts/Aileron/Aileron-ThinItalic.otf","fonts/Aileron/Aileron-UltraLight.otf","fonts/Aileron/Aileron-UltraLightItalic.otf","fonts/Aileron/CC0 1.0 Universal (CC0 1.0)  Public Domain Dedication.txt","fonts/Aileron.css","images/icons/LI-In-Bug.png","images/icons/LI-Logo.png","images/icons/github-mark-white.png","images/icons/github-mark-white.svg","images/icons/github-mark.png","images/icons/github-mark.svg","images/portraits/a.png","images/portraits/b.png","images/portraits/c.png"]),
	mimeTypes: {".png":"image/png",".pdf":"application/pdf",".otf":"font/otf",".txt":"text/plain",".css":"text/css",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.BTedu6SO.js","app":"_app/immutable/entry/app.D3UatckO.js","imports":["_app/immutable/entry/start.BTedu6SO.js","_app/immutable/chunks/entry.BRybC_4y.js","_app/immutable/chunks/scheduler.BXr5QVQj.js","_app/immutable/entry/app.D3UatckO.js","_app/immutable/chunks/scheduler.BXr5QVQj.js","_app/immutable/chunks/index.Ou6W_Wae.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
