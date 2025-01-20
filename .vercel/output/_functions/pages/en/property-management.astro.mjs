import '../../chunks/page-ssr_C8K4u_ud.mjs';
import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_IEYgzetq.mjs';
import 'kleur/colors';
import { changeLanguage, t } from 'i18next';
import { $ as $$Layout } from '../../chunks/Layout_DdZHTpIe.mjs';
import { $ as $$PropertyList } from '../../chunks/PropertyList_T1tpqLeJ.mjs';
export { renderers } from '../../renderers.mjs';

const $$PropertyManagement = createComponent(($$result, $$props, $$slots) => {
  changeLanguage("en");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("nav.manage") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="dark:bg-slate-800 bg-gray-50 lg:pt-24"> <div class="mx-auto max-w-screen-xl px-4 py-32 lg:py-16"> <!-- Imagen destacada -->  <!-- Título y detalles del post --> <div class="text-center mb-12"> <h1 class="text-2xl lg:text-4xl font-heading mb-4 text-gray-900 dark:text-white">${t("nav.manage")} Services</h1> </div> <!-- Contenido del post --> <article class="prose prose-lg dark:prose-invert max-w-none mx-auto"> <p class="font-hero">
Focus on building your empire, we'll handle the day-to-day. Our meticulous property management ensures your investment thrives while you conquer your goals. 
              Property management has evolved significantly in recent years, and 2025 is no exception. With the integration of innovative technologies, a focus on sustainability, and a constantly changing real estate market, this service has become a fundamental pillar for property owners looking to maximize their investments and maintain efficient management.
</p> <p class="font-hero">
It involves comprehensive property management, from tenant search to property maintenance and compliance with legal regulations. This service is designed to free property owners from the operational burden of managing their properties, delegating tasks to experts in the field.
</p> </article> ${renderComponent($$result2, "PropertyList", $$PropertyList, {})} </div> </section> ` })}`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/en/property-management.astro", void 0);

const $$file = "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/en/property-management.astro";
const $$url = "/en/property-management";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PropertyManagement,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
