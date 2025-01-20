import '../../chunks/page-ssr_C8K4u_ud.mjs';
import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_IEYgzetq.mjs';
import 'kleur/colors';
import { changeLanguage, t } from 'i18next';
import { $ as $$Layout } from '../../chunks/Layout_DdZHTpIe.mjs';
import { $ as $$NauticalModalCard } from '../../chunks/NauticalModalCard_RiNuKdaa.mjs';
export { renderers } from '../../renderers.mjs';

const $$NauticalTransport = createComponent(($$result, $$props, $$slots) => {
  changeLanguage("en");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nautical Transport Services" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="dark:bg-slate-800 bg-gray-50 lg:pt-24"> <div class="mx-auto max-w-screen-xl px-4 py-32 lg:py-16"> <!-- Título y detalles del post --> <div class="text-center mb-12"> <h1 class="text-2xl lg:text-4xl font-heading mb-4 text-gray-900 dark:text-white"> ${t("nautical.title")} </h1> <p>
Discover excellence in Nautical Transport Services with our exclusive options:
</p> </div> ${renderComponent($$result2, "NauticalModalCard", $$NauticalModalCard, {})} </div> </section> ` })}`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/en/nautical-transport.astro", void 0);

const $$file = "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/en/nautical-transport.astro";
const $$url = "/en/nautical-transport";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$NauticalTransport,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
