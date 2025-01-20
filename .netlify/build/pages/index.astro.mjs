import '../chunks/page-ssr_C8K4u_ud.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_DqMNCrZL.mjs';
import 'kleur/colors';
import { changeLanguage } from 'i18next';
import { $ as $$PropertyList } from '../chunks/PropertyList_DGzfONFH.mjs';
import { $ as $$Hero, a as $$CenteredHero, b as $$CTA } from '../chunks/CenteredHero_wrVSmL9b.mjs';
import { $ as $$Layout } from '../chunks/Layout_BHMJpqHP.mjs';
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
