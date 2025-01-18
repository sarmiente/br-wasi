import '../chunks/page-ssr_80fs5Lk_.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_MjWaUeqA.mjs';
import 'kleur/colors';
import { changeLanguage, t } from 'i18next';
import { $ as $$Layout } from '../chunks/Layout_Tof5YGWG.mjs';
import { $ as $$NauticalModalCard } from '../chunks/NauticalModalCard_D-ootYKj.mjs';
export { renderers } from '../renderers.mjs';

const $$TransporteNautico = createComponent(($$result, $$props, $$slots) => {
  changeLanguage("es");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servicios de Transporte Nautico" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="dark:bg-slate-800 bg-gray-50 lg:pt-24"> <div class="mx-auto max-w-screen-xl px-4 py-32 lg:py-16"> <!-- Título y detalles del post --> <div class="text-center mb-12"> <h1 class="text-2xl lg:text-4xl font-heading mb-4 text-gray-900 dark:text-white"> ${t("nautical.title")} </h1> <p>
Descubre la excelencia en Servicios de Transporte Náutico con nuestras exclusivas opciones:
</p> </div> ${renderComponent($$result2, "NauticalModalCard", $$NauticalModalCard, {})} </div> </section> ` })}`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/transporte-nautico.astro", void 0);

const $$file = "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/transporte-nautico.astro";
const $$url = "/transporte-nautico";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TransporteNautico,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
