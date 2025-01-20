import '../../chunks/page-ssr_BdZ5HDMm.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CJE4JcK7.mjs';
import 'kleur/colors';
import { changeLanguage, t } from 'i18next';
import { $ as $$Layout } from '../../chunks/Layout_CbecvtHi.mjs';
import { $ as $$LandModalCard } from '../../chunks/LandModalCard_RenLjaKJ.mjs';
export { renderers } from '../../renderers.mjs';

const $$LandTransport = createComponent(($$result, $$props, $$slots) => {
  changeLanguage("en");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": " Transport Services" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="dark:bg-slate-800 bg-gray-50 lg:pt-24"> <div class="mx-auto max-w-screen-xl px-4 py-32 lg:py-16"> <!-- Título y detalles del post --> <div class="text-center mb-12"> <h1 class="text-2xl lg:text-4xl font-heading mb-4 text-gray-900 dark:text-white"> ${t("land.title")} </h1> <p>
Discover excellence in Nautical Transport Services with our exclusive options:
</p> </div> ${renderComponent($$result2, "LandModalCard", $$LandModalCard, {})} </div> </section> ` })}`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/en/land-transport.astro", void 0);

const $$file = "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/en/land-transport.astro";
const $$url = "/en/land-transport";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LandTransport,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
