var SVGPATH = '<path d="m120.95 1.74c4.08-0.09 8.33-0.84 12.21 0.82 3.61 1.8 7 4.16 11.01 5.05 2.08 3.61 6.12 5.46 8.19 9.07 3.6 5.67 7.09 11.66 8.28 18.36 1.61 9.51 7.07 17.72 12.69 25.35 3.43 7.74 1.97 16.49 3.6 24.62 2.23 5.11 4.09 10.39 6.76 15.31 1.16 2 4.38 0.63 4.77-1.32 1.2-7.1-2.39-13.94-1.97-21.03 0.38-3.64-0.91-7.48 0.25-10.99 2.74-3.74 4.57-8.05 7.47-11.67 3.55-5.47 10.31-8.34 16.73-7.64 2.26 2.89 5.13 5.21 7.58 7.92 2.88 4.3 6.52 8.01 9.83 11.97 1.89 2.61 3.06 5.64 4.48 8.52 2.81 4.9 4 10.5 6.63 15.49 2.16 6.04 5.56 11.92 5.37 18.5 0.65 1.95 0.78 4 0.98 6.03 1.01 3.95 2.84 8.55 0.63 12.42-2.4 5.23-7.03 8.97-11.55 12.33-6.06 4.66-11.62 10.05-18.37 13.75-4.06 2.65-8.24 5.17-12.71 7.08-3.59 1.57-6.06 4.94-9.85 6.09-2.29 1.71-3.98 4.51-6.97 5.02-4.56 1.35-8.98-3.72-13.5-1.25-2.99 1.83-6.19 3.21-9.39 4.6-8.5 5.61-18.13 9.48-28.06 11.62-8.36-0.2-16.69 0.62-25.05 0.47-3.5-1.87-7.67-1.08-11.22-2.83-6.19-1.52-10.93-6.01-16.62-8.61-2.87-1.39-5.53-3.16-8.11-4.99-2.58-1.88-4.17-4.85-6.98-6.44-3.83-0.11-6.54 3.42-10.24 3.92-2.31 0.28-4.64 0.32-6.96 0.31-3.5-3.65-5.69-8.74-10.59-10.77-5.01-3.68-10.57-6.67-14.84-11.25-2.52-2.55-5.22-4.87-8.24-6.8-4.73-4.07-7.93-9.51-11.41-14.62-3.08-4.41-5.22-9.73-4.6-15.19 0.65-8.01 0.62-16.18 2.55-24.02 4.06-10.46 11.15-19.34 18.05-28.06 3.71-5.31 9.91-10.21 16.8-8.39 3.25 1.61 5.74 4.56 7.14 7.89 1.19 2.7 3.49 4.93 3.87 7.96 0.97 5.85 1.6 11.86 0.74 17.77-1.7 6.12-2.98 12.53-2.32 18.9 0.01 2.92 2.9 5.36 5.78 4.57 3.06-0.68 3.99-4.07 5.32-6.48 1.67-4.06 4.18-7.66 6.69-11.23 3.61-5.28 5.09-11.57 7.63-17.37 2.07-4.56 1.7-9.64 2.56-14.46 0.78-7.65-0.62-15.44 0.7-23.04 1.32-3.78 1.79-7.89 3.8-11.4 3.01-3.66 6.78-6.63 9.85-10.26 1.72-2.12 4.21-3.32 6.55-4.6 7.89-2.71 15.56-6.75 24.06-7z"/>',
	DEBUG = localStorage.ffzDebugMode == "true" && document.body.classList.contains('ffz-dev');

module.exports = {
	DEBUG: DEBUG,
	SERVER: DEBUG ? "//localhost:8000/" : "//cdn.frankerfacez.com/",

	SVGPATH: SVGPATH,
	ZREKNARF: '<svg style="padding:1.75px 0" class="svg-glyph_views" width="16px" viewBox="0 0 249 195" version="1.1" height="12.5px">' + SVGPATH + '</svg>',
	CHAT_BUTTON: '<svg class="svg-emoticons ffz-svg" height="18px" width="24px" viewBox="0 0 249 195" version="1.1">' + SVGPATH + '</svg>',

	CLOCK: '<svg class="svg-glyph_views svg-clock" height="16px" version="1.1" viewBox="0 0 16 16" width="16px" x="0px" y="0px"><path fill-rule="evenodd" clip-rule="evenodd" fill="#888888" d="M8,15c-3.866,0-7-3.134-7-7s3.134-7,7-7s7,3.134,7,7 S11.866,15,8,15z M8,3C5.238,3,3,5.238,3,8s2.238,5,5,5s5-2.238,5-5S10.762,3,8,3z M7.293,8.707L7,8l1-4l0.902,3.607L11,11 L7.293,8.707z"/></svg>',
	GEAR: '<svg class="svg-gear" height="16px" version="1.1" viewBox="0 0 16 16" width="16px" x="0px" y="0px"><path clip-rule="evenodd" d="M15,7v2h-2.115c-0.125,0.615-0.354,1.215-0.713,1.758l1.484,1.484l-1.414,1.414l-1.484-1.484C10.215,12.531,9.615,12.76,9,12.885V15H7v-2.12c-0.614-0.126-1.21-0.356-1.751-0.714l-1.491,1.49l-1.414-1.414l1.491-1.49C3.477,10.211,3.247,9.613,3.12,9H1V7h2.116C3.24,6.384,3.469,5.785,3.829,5.242L2.343,3.757l1.414-1.414l1.485,1.485C5.785,3.469,6.384,3.24,7,3.115V1h2v2.12c0.613,0.126,1.211,0.356,1.752,0.714l1.49-1.491l1.414,1.414l-1.49,1.492C12.523,5.79,12.754,6.387,12.88,7H15z M8,6C6.896,6,6,6.896,6,8s0.896,2,2,2s2-0.896,2-2S9.104,6,8,6z" fill-rule="evenodd"></path></svg>',
	HEART: '<svg class="svg-heart" height="16px" version="1.1" viewBox="0 0 16 16" width="16px" x="0px" y="0px"><path clip-rule="evenodd" d="M8,13.5L1.5,7V4l2-2h3L8,3.5L9.5,2h3l2,2v3L8,13.5z" fill-rule="evenodd"></path></svg>',
	EMOTE: '<svg class="svg-emote" height="16px" version="1.1" viewBox="0 0 18 18" width="16px" x="0px" y="0px"><path clip-rule="evenodd" d="M9,18c-4.971,0-9-4.029-9-9s4.029-9,9-9s9,4.029,9,9S13.971,18,9,18z M14,4.111V4h-0.111C12.627,2.766,10.904,2,9,2C7.095,2,5.373,2.766,4.111,4H4v0.111C2.766,5.373,2,7.096,2,9s0.766,3.627,2,4.889V14l0.05-0.051C5.317,15.217,7.067,16,9,16c1.934,0,3.684-0.783,4.949-2.051L14,14v-0.111c1.234-1.262,2-2.984,2-4.889S15.234,5.373,14,4.111zM11,6h2v4h-2V6z M12.535,12.535C11.631,13.44,10.381,14,9,14s-2.631-0.56-3.536-1.465l0.707-0.707C6.896,12.553,7.896,13,9,13s2.104-0.447,2.828-1.172L12.535,12.535z M5,6h2v4H5V6z" fill-rule="evenodd"></path></svg>'
}