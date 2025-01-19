import '../chunks/page-ssr_80fs5Lk_.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_MjWaUeqA.mjs';
import 'kleur/colors';
import { changeLanguage } from 'i18next';
import { $ as $$Layout } from '../chunks/Layout_Xxx8BAc8.mjs';
import { $ as $$Team } from '../chunks/Team_Cgy_3jXK.mjs';
export { renderers } from '../renderers.mjs';

const $$NuestroEquipo = createComponent(($$result, $$props, $$slots) => {
  changeLanguage("es");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nuestro Equipo" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Team", $$Team, {})} ${maybeRenderHead()}<div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8"> <div class="mx-auto max-w-3xl text-center"> <span class="text-sm font-pattern uppercase block text-gray-600">¿Por qué elegirnos?</span> <h2 class="text-2xl mt-2 font-heading uppercase text-gray-900 sm:text-4xl lg:text-4xl">
Variedad, calidad y servicio personalizado incomparables
</h2> </div> <div class="grid grid-cols-1 gap-12 mt-16 lg:grid-cols-3 lg:gap-8"> <div class="text-center"> <div class="h-40 w-40 mx-auto rounded-full bg-hero-pattern-03 bg-cover flex items-center justify-center shadow-lg"> <!-- Icon/Content --> </div> <h3 class="mt-4 text-xl font-heading uppercase text-gray-900 sm:text-2xl">Variedad de Propiedades</h3> <p class="text-sm text-gray-700 mt-2">Ofrecemos diversas opciones adaptadas a tus necesidades.</p> </div> <div class="text-center"> <div class="h-40 w-40 mx-auto rounded-full bg-pattern-02 bg-cover flex items-center justify-center shadow-lg"> <!-- Icon/Content --> </div> <h3 class="mt-4 text-xl font-heading uppercase text-gray-900 sm:text-2xl">Estándares de Calidad</h3> <p class="text-sm text-gray-700 mt-2">Garantizamos la excelencia en cada servicio.</p> </div> <div class="text-center"> <div class="h-40 w-40 mx-auto rounded-full bg-pattern-03 bg-cover flex items-center justify-center shadow-lg"> <!-- Icon/Content --> </div> <h3 class="mt-4 text-xl font-heading uppercase text-gray-900 sm:text-2xl">Servicio Personalizado</h3> <p class="text-sm text-gray-700 mt-2">Tu satisfacción es nuestra prioridad.</p> </div> </div> </div>` })}`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/nuestro-equipo.astro", void 0);

const $$file = "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/nuestro-equipo.astro";
const $$url = "/nuestro-equipo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
     __proto__: null,
     default: $$NuestroEquipo,
     file: $$file,
     url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
