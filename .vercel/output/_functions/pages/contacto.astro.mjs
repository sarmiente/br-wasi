import '../chunks/page-ssr_BdZ5HDMm.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CJE4JcK7.mjs';
import 'kleur/colors';
import { changeLanguage, t } from 'i18next';
import { $ as $$Layout } from '../chunks/Layout_CEk94C0i.mjs';
import { $ as $$Form } from '../chunks/Form_CtlNlu1e.mjs';
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  changeLanguage("es");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("nav.contact") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-white dark:bg-gray-900 pt-36"> <!-- Header de la sección --> <div class="relative h-auto bg-gray-100 dark:bg-gray-800 py-10"> <div class="container px-6 mx-auto"> <h1 class="text-sm font-pattern uppercase text-gray-600 text-center">${t("contact.title")}</h1> <h2 class="mt-2 text-center text-2xl font-heading uppercase text-gray-900 sm:text-4xl dark:text-white"> ${t("contact.desc")} </h2> </div> </div> </section> <section class="bg-gray-100 "> <div class="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8"> ${renderComponent($$result2, "Form", $$Form, {})} </div> </section> ` })}`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
