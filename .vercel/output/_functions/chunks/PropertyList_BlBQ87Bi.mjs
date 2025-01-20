import { c as createComponent, r as renderTemplate, d as addAttribute, m as maybeRenderHead } from './astro/server_CJE4JcK7.mjs';
import 'kleur/colors';
import 'clsx';
import { P } from './page-ssr_BdZ5HDMm.mjs';
import { t } from 'i18next';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$PropertyList = createComponent(async ($$result, $$props, $$slots) => {
  const urlSearch = "https://api.wasi.co/v1/property/search?";
  const take = 100;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authentication: `Bearer ${"23639330"}`
    }
  };
  const res = await fetch(`${urlSearch}id_company=${"23639330"}&wasi_token=${"6Blp_oUrv_kl9r_m0rE"}&take=${take}&order_by=title`, options);
  const data = await res.json();
  const properties = Object.keys(data).filter((key) => key !== "total" && key !== "status").map((key) => data[key]);
  return renderTemplate(_a || (_a = __template(["", '<section id="properties" class="py-12"> <!-- Título del portafolio --> <h2 class="text-center text-xl md:text-3xl font-heading uppercase pt-10 pb-10"> ', ' </h2> <!-- Filtros y búsqueda --> <div class="mx-auto w-2/3 md:w-1/2 flex flex-col md:flex-row items-center justify-between gap-4 mb-8"> <!-- Campo de búsqueda --> <input type="search" class="search w-full  border border-gray-300 rounded-lg p-2 text-xs focus:outline-none focus:ring focus:ring-green-500 font-pattern"', '> </div> <!-- Contenedor de propiedades --> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-5 sm:p-8 list"> <!-- Cada propiedad --> ', ` </div> <!-- Controles de paginación --> <div id="pagination-controls" class="text-center mt-8 "> <div class="inline-flex items-center justify-center gap-3"> <ul class="pagination flex gap-4 font-display font-light "></ul> </div> </div> </section> <!-- Script para habilitar List.js --> <script src="//cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js"></script> <script>
  // @ts-nocheck
  // Configuración de List.js
  var options = {
    valueNames: ['titulo', 'property-id', 'price'], // Clases a buscar
    listClass: 'list', // Clase que contiene los elementos
    searchClass: 'search', // Clase del input de búsqueda
    page: 6,
    pagination: true
  };

  
  var listProperties = new List('properties', options);
</script>`])), maybeRenderHead(), t("proplist.title"), addAttribute(t("proplist.search"), "placeholder"), properties.map((property) => renderTemplate`<div class="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"> <a${addAttribute(`/propiedad/${property.id_property}`, "href")} class="block"> <!-- Imagen de la propiedad --> <div class="relative"> <img alt="Property Image"${addAttribute(property.main_image.url_original, "src")} class="h-56 w-full object-cover"> <!-- Etiqueta de ubicación --> <div class="absolute top-2 right-2 bg-black bg-opacity-75 text-white text-xs px-3 py-1 rounded"> <p class="font-display uppercase">${property.city_label}</p> </div> </div> <!-- Detalles de la propiedad --> <div class="p-4 bg-white"> <!-- Título y precio --> <div class="mb-4"> <h2 class="titulo text-lg font-medium font-heading text-gray-800 uppercase truncate"> ${property.title} </h2> <p class="text-sm text-gray-600 font-light font-display price uppercase "> ${property.for_sale === "true" && property.sale_price_label && property.sale_price_label !== 0 ? renderTemplate`<span>${t("proplist.sale-price")} ${property.sale_price_label}</span>` : property.for_rent === "true" && property.rent_price_label && property.rent_price_label !== 0 ? renderTemplate`<span>${t("proplist.rent-price")} ${property.rent_price_label}</span>` : null} </p> </div> <!-- Botón "View Property" --> <div class="flex items-center justify-between mt-4"> <p class="text-xs text-gray-600 font-light font-display property-id"> ${property.id_property} </p> <!-- Botón "View Property" --> <div class="w-1/2 flex justify-end"> <a${addAttribute(P(`/propiedad/${property.id_property}`), "href")} class="bg-[#60C11C] font-pattern uppercase p-1.5 text-xs rounded-md"> ${t("proplist.btn")} </a> </div> </div> </div> </a> </div>`));
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/components/PropertyList.astro", void 0);

export { $$PropertyList as $ };
