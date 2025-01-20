import '../../chunks/page-ssr_BdZ5HDMm.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, b as createAstro } from '../../chunks/astro/server_CJE4JcK7.mjs';
import 'kleur/colors';
import { changeLanguage, t } from 'i18next';
import { a as $$Icon, $ as $$Layout } from '../../chunks/Layout_CbecvtHi.mjs';
import { $ as $$PropertySwiper } from '../../chunks/PropertySwiper_-8_MCSFu.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$FeaturesList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeaturesList;
  const urlGetFeatures = "https://api.wasi.co/v1/feature/all";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authentication: `Bearer ${"23639330"}`
    }
  };
  let internal = [];
  let external = [];
  async function fetchFeature(params) {
    const propertyId = params.id_property;
    if (!propertyId) {
      console.error("No se proporcionó el ID de la propiedad.");
      return;
    }
    try {
      const response = await fetch(
        `${urlGetFeatures}?id_property=${propertyId}&id_company=${"23639330"}&wasi_token=${"6Blp_oUrv_kl9r_m0rE"}`,
        options
      );
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
      const feature = await response.json();
      internal = feature.internal || [];
      external = feature.external || [];
    } catch (error) {
      console.error("Error al obtener las características:", error);
    }
  }
  await fetchFeature(Astro2.params);
  return renderTemplate`${maybeRenderHead()}<div class="p-5 max-w-5xl mx-auto"> <!-- Título general --> <h2 class="text-2xl font-bold text-gray-800 mb-6">Características</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <!-- Características Internas --> <div> <h3 class="text-xl font-semibold text-gray-700 mb-4">Características Internas</h3> <ul class="space-y-3"> ${internal.length > 0 ? internal.map((item) => renderTemplate`<li${addAttribute(item.id, "key")} class="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg shadow-md"> <div class="w-8 h-8 bg-[#60C11C] text-white rounded-full flex items-center justify-center text-sm font-semibold"> ${renderComponent($$result, "Icon", $$Icon, { "name": "check" })} </div> <span class="text-gray-800">${item.nombre || item.name}</span> </li>`) : renderTemplate`<p class="text-gray-500">No hay características internas disponibles.</p>`} </ul> </div> <!-- Características Externas --> <div> <h3 class="text-xl font-semibold text-gray-700 mb-4">Características Externas</h3> <ul class="space-y-3"> ${external.length > 0 ? external.map((item) => renderTemplate`<li${addAttribute(item.id, "key")} class="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg shadow-md"> <div class="w-8 h-8 bg-[#60C11C] text-white rounded-full flex items-center justify-center text-sm font-semibold"> ${renderComponent($$result, "Icon", $$Icon, { "name": "check" })} </div> <span class="text-gray-800">${item.nombre || item.name}</span> </li>`) : renderTemplate`<p class="text-gray-500">No hay características externas disponibles.</p>`} </ul> </div> </div> </div>`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/components/sections/FeaturesList.astro", void 0);

const $$Astro = createAstro();
const $$idProperty = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$idProperty;
  changeLanguage("es");
  const urlGetProperty = "https://api.wasi.co/v1/property/get/";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authentication: `Bearer ${"23639330"}`
    }
  };
  let property = null;
  async function fetchProperty(params) {
    const propertyId = params.id_property;
    try {
      const response = await fetch(`${urlGetProperty}${propertyId}?id_company=${"23639330"}&wasi_token=${"6Blp_oUrv_kl9r_m0rE"}`, options);
      property = await response.json();
    } catch (error) {
      console.error("Error fetching property:", error);
    }
  }
  await fetchProperty(Astro2.params);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": property.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-32 pb-16">  ${property ? renderTemplate`<div class="mx-auto max-w-6xl px-6 md:px-4"> <div class="mt-12"> <h2 class="text-2xl font-heading uppercase text-gray-900 sm:text-4xl lg:text-5xl pb-5">${property.title}</h2> <p class="text-md tracking-wide uppercase font-pattern dark:text-zinc-300"> ${property.city_label}</p> <p class="text-sm tracking-wide uppercase font-pattern text-zinc-700 dark:text-zinc-300"> ${property.zone_label}</p> </div>  </div>
                 
                  ${renderComponent($$result2, "PropertySwiper", $$PropertySwiper, {})}
                  <!-- Características -->
                        <div class="m-auto max-w-5xl mx-auto flex flex-wrap justify-center gap-12 text-center"> <!-- Área --> <div class="flex flex-col items-center space-y-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "area_vector", "class": "text-[#60C11C] text-2xl" })} <p class="font-pattern  text-sm">${property.built_area ? `${property.built_area} m²` : ""}</p> </div> <!-- Baños --> <div class="flex flex-col items-center space-y-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "bath_vector", "class": "text-[#60C11C] text-2xl" })} <p class="font-pattern text-sm">${property.bathrooms || ""} ${t("property.bath")}</p> </div> <!-- Habitaciones --> <div class="flex flex-col items-center space-y-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "bed_vector", "class": "text-[#60C11C] text-2xl" })} <p class="font-pattern text-sm">${property.bedrooms || ""} ${t("property.bed")} </p> </div> <!-- Disponibilidad --> <div class="flex flex-col items-center space-y-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "available_vector", "class": "text-[#60C11C] text-2xl" })} <p class="font-pattern text-sm">${property.availability_label}</p> </div> </div>` : renderTemplate`<p>Cargando datos de la propiedad...</p>`} </section> <section> <div class="mx-auto max-w-6xl px-6 md:px-4"> <div class="h-32 rounded-lg  items-center place-content-center text-center"> <p class="font-pattern text-2xl"> ${property.for_sale === "true" && property.sale_price_label && property.sale_price_label !== 0 ? renderTemplate`<span>${t("proplist.sale-price")} ${property.sale_price_label}</span>` : property.for_rent === "true" && property.rent_price_label && property.rent_price_label !== 0 ? renderTemplate`<span>${t("proplist.rent-price")} ${property.rent_price_label}</span>` : null} </p> </div> </div> </section> ${renderComponent($$result2, "FeaturesList", $$FeaturesList, {})} ` })}`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/propiedad/[id_property].astro", void 0);
const $$file = "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/propiedad/[id_property].astro";
const $$url = "/propiedad/[id_property]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$idProperty,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
