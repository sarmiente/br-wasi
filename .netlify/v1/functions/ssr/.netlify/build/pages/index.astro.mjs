import '../chunks/page-ssr_80fs5Lk_.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_MjWaUeqA.mjs';
import 'kleur/colors';
import { changeLanguage } from 'i18next';
import { $ as $$PropertyList } from '../chunks/PropertyList_4jcHwUYg.mjs';
import { $ as $$Hero, a as $$CenteredHero, b as $$CTA } from '../chunks/CenteredHero_CIRSsncY.mjs';
import { $ as $$Layout } from '../chunks/Layout_Xxx8BAc8.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  changeLanguage("es");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "BR Solutions" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "PropertyList", $$PropertyList, {})} ${renderComponent($$result2, "CenteredHero", $$CenteredHero, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/index.astro", void 0);

const $$file = "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
