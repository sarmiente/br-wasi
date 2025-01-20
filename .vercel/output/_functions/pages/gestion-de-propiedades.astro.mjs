import '../chunks/page-ssr_BdZ5HDMm.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CJE4JcK7.mjs';
import 'kleur/colors';
import { changeLanguage, t } from 'i18next';
import { $ as $$Layout } from '../chunks/Layout_CEk94C0i.mjs';
import { $ as $$PropertyList } from '../chunks/PropertyList_BlBQ87Bi.mjs';
export { renderers } from '../renderers.mjs';

const $$GestionDePropiedades = createComponent(($$result, $$props, $$slots) => {
  changeLanguage("es");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("nav.manage") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="dark:bg-slate-800 bg-gray-50 lg:pt-24"> <div class="mx-auto max-w-screen-xl px-4 py-32 lg:py-16"> <!-- Imagen destacada --> <!-- Título y detalles del post --> <div class="text-center mb-12"> <h1 class="text-2xl lg:text-4xl font-heading mb-4 text-gray-900 dark:text-white">
Servicio de ${t("nav.manage")} </h1> </div> <!-- Contenido del post --> <article class="prose prose-lg dark:prose-invert max-w-none mx-auto"> <p class="font-hero text-lg">
Enfócate en construir, nosotros nos encargamos del día a
          día. Nuestra meticulosa gestión de propiedades garantiza que tu
          inversión prospere mientras conquistas tus metas.
</p> <p class="font-hero text-lg">
La administración de propiedades ha evolucionado considerablemente en
          los últimos años, y en 2025 no es la excepción. Con la integración de
          tecnologías innovadoras, un enfoque en la sostenibilidad y un mercado
          inmobiliario en constante cambio, este servicio se ha convertido en un
          pilar fundamental para propietarios de bienes inmuebles que buscan
          maximizar sus inversiones y mantener una gestión eficiente.
</p> <p class="font-hero text-lg">
Implica la gestión integral de bienes inmuebles, desde la búsqueda de
          inquilinos hasta el mantenimiento de la propiedad y el cumplimiento de
          las normativas legales. Este servicio está diseñado para liberar a los
          propietarios de la carga operativa de manejar sus propiedades,
          delegando las tareas a expertos en el área.
</p> </article> ${renderComponent($$result2, "PropertyList", $$PropertyList, {})} </div> </section> ` })}`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/gestion-de-propiedades.astro", void 0);

const $$file = "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/gestion-de-propiedades.astro";
const $$url = "/gestion-de-propiedades";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GestionDePropiedades,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
