import '../../chunks/page-ssr_80fs5Lk_.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_MjWaUeqA.mjs';
import 'kleur/colors';
import { changeLanguage } from 'i18next';
import { $ as $$Layout } from '../../chunks/Layout_Xxx8BAc8.mjs';
export { renderers } from '../../renderers.mjs';

const $$TouristPlans = createComponent(($$result, $$props, $$slots) => {
  changeLanguage("en");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Planes Turisticos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="dark:bg-slate-800 bg-gray-50 lg:pt-24"> <div class="mx-auto max-w-screen-xl px-4 py-32 lg:py-16"> <!-- Imagen destacada --> <div class="mb-8"> <img src="https://images.unsplash.com/photo-1707623988408-ab88c9981730?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="rounded-lg w-full object-cover h-64 md:h-96"> </div> <!-- Título y detalles del post --> <div class="text-center mb-12"> <h1 class="text-2xl lg:text-4xl font-heading mb-4 text-gray-900 dark:text-white">Planes Turisticos</h1> </div> <!-- Contenido del post --> <article class="prose prose-lg dark:prose-invert max-w-none mx-auto">
Content
</article> </div> </section> ` })}`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/en/tourist-plans.astro", void 0);

const $$file = "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/en/tourist-plans.astro";
const $$url = "/en/tourist-plans";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TouristPlans,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
