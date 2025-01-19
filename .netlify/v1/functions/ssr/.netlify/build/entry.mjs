import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_4C2FG7TC.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/alquiler.astro.mjs');
const _page2 = () => import('./pages/asistencia-diaria.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page5 = () => import('./pages/comprar.astro.mjs');
const _page6 = () => import('./pages/conserjeria-de-lujo.astro.mjs');
const _page7 = () => import('./pages/contacto.astro.mjs');
const _page8 = () => import('./pages/en/blog.astro.mjs');
const _page9 = () => import('./pages/en/blog/_---slug_.astro.mjs');
const _page10 = () => import('./pages/en/buy.astro.mjs');
const _page11 = () => import('./pages/en/contact.astro.mjs');
const _page12 = () => import('./pages/en/daily-assistance.astro.mjs');
const _page13 = () => import('./pages/en/experiences.astro.mjs');
const _page14 = () => import('./pages/en/land-transport.astro.mjs');
const _page15 = () => import('./pages/en/luxury-concierge.astro.mjs');
const _page16 = () => import('./pages/en/meet-our-team.astro.mjs');
const _page17 = () => import('./pages/en/nautical-transport.astro.mjs');
const _page18 = () => import('./pages/en/privacy-policy.astro.mjs');
const _page19 = () => import('./pages/en/property-management.astro.mjs');
const _page20 = () => import('./pages/en/propiedad/_id_property_.astro.mjs');
const _page21 = () => import('./pages/en/rent.astro.mjs');
const _page22 = () => import('./pages/en/terms-and-conditions.astro.mjs');
const _page23 = () => import('./pages/en/tourist-plans.astro.mjs');
const _page24 = () => import('./pages/en/who-we-are.astro.mjs');
const _page25 = () => import('./pages/en.astro.mjs');
const _page26 = () => import('./pages/experiencias.astro.mjs');
const _page27 = () => import('./pages/gestion-de-propiedades.astro.mjs');
const _page28 = () => import('./pages/nuestro-equipo.astro.mjs');
const _page29 = () => import('./pages/planes-turisticos.astro.mjs');
const _page30 = () => import('./pages/politica-de-privacidad.astro.mjs');
const _page31 = () => import('./pages/propiedad/_id_property_.astro.mjs');
const _page32 = () => import('./pages/quienes-somos.astro.mjs');
const _page33 = () => import('./pages/terminos-y-condiciones.astro.mjs');
const _page34 = () => import('./pages/transporte-nautico.astro.mjs');
const _page35 = () => import('./pages/transporte-terrestre.astro.mjs');
const _page36 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/alquiler.astro", _page1],
    ["src/pages/asistencia-diaria.astro", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/blog/[...slug].astro", _page4],
    ["src/pages/comprar.astro", _page5],
    ["src/pages/conserjeria-de-lujo.astro", _page6],
    ["src/pages/contacto.astro", _page7],
    ["src/pages/en/blog/index.astro", _page8],
    ["src/pages/en/blog/[...slug].astro", _page9],
    ["src/pages/en/buy.astro", _page10],
    ["src/pages/en/contact.astro", _page11],
    ["src/pages/en/daily-assistance.astro", _page12],
    ["src/pages/en/experiences.astro", _page13],
    ["src/pages/en/land-transport.astro", _page14],
    ["src/pages/en/luxury-concierge.astro", _page15],
    ["src/pages/en/meet-our-team.astro", _page16],
    ["src/pages/en/nautical-transport.astro", _page17],
    ["src/pages/en/privacy-policy.astro", _page18],
    ["src/pages/en/property-management.astro", _page19],
    ["src/pages/en/propiedad/[id_property].astro", _page20],
    ["src/pages/en/rent.astro", _page21],
    ["src/pages/en/terms-and-conditions.astro", _page22],
    ["src/pages/en/tourist-plans.astro", _page23],
    ["src/pages/en/who-we-are.astro", _page24],
    ["src/pages/en/index.astro", _page25],
    ["src/pages/experiencias.astro", _page26],
    ["src/pages/gestion-de-propiedades.astro", _page27],
    ["src/pages/nuestro-equipo.astro", _page28],
    ["src/pages/planes-turisticos.astro", _page29],
    ["src/pages/politica-de-privacidad.astro", _page30],
    ["src/pages/propiedad/[id_property].astro", _page31],
    ["src/pages/quienes-somos.astro", _page32],
    ["src/pages/terminos-y-condiciones.astro", _page33],
    ["src/pages/transporte-nautico.astro", _page34],
    ["src/pages/transporte-terrestre.astro", _page35],
    ["src/pages/index.astro", _page36]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d92cf1f6-0fb7-4051-b9f1-6849713db257"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
