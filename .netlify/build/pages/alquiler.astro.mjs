import '../chunks/page-ssr_80fs5Lk_.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DqMNCrZL.mjs';
import 'kleur/colors';
import { changeLanguage } from 'i18next';
import { $ as $$Layout } from '../chunks/Layout_8YhVD-py.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Alquiler = createComponent(async ($$result, $$props, $$slots) => {
  changeLanguage("es");
  const urlSearch = "https://api.wasi.co/v1/property/search?";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authentication: `Bearer ${"23639330"}`
    }
  };
  const res = await fetch(`${urlSearch}id_company=${"23639330"}&wasi_token=${"6Blp_oUrv_kl9r_m0rE"}&for_rent=true&take=100`, options);
  const data = await res.json();
  const properties = Object.keys(data).filter((key) => key !== "total" && key !== "status").map((key) => data[key]);
  return renderTemplate(_a || (_a = __template(["", ` <!-- Script para habilitar List.js --> <script src="//cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js"></script> <script>
// @ts-nocheck
      // Configuración de List.js
      var options = {
        valueNames: ['titulo'], // Clases a buscar
        listClass: 'list', // Clase que contiene los elementos
        searchClass: 'search' ,// Clase del input de búsqueda
        page: 3,
        pagination: true
      };
    
      // Inicialización
      var listProperties = new List('properties', options);
    </script>`])), renderComponent($$result, "Layout", $$Layout, { "title": "Propiedades en Alquiler" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="properties" class="py-12 pt-32"> <!-- Título del portafolio --> <h2 class="text-center text-xl md:text-3xl font-heading uppercase pt-10 pb-10">
Nuestras Propiedades en Alquiler
</h2> <!-- Filtros y búsqueda --> <div class="mx-auto w-2/3 md:w-1/2 flex flex-col md:flex-row items-center justify-between gap-4 mb-8"> <!-- Campo de búsqueda --> <input type="search" class="search w-full  border border-gray-300 rounded-lg p-2 text-xs focus:outline-none focus:ring focus:ring-green-500 font-pattern" placeholder="Busca por titulo, ID de propiedad o precio"> </div> <!-- Contenedor de propiedades --> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-5 sm:p-8 list"> <!-- Cada propiedad --> ${properties.map((property) => renderTemplate`<div class="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"> <a${addAttribute(`/propiedad/${property.id_property}`, "href")} class="block"> <!-- Imagen de la propiedad --> <div class="relative"> <img alt="Property Image"${addAttribute(property.main_image.url_original, "src")} class="h-56 w-full object-cover"> <!-- Etiqueta de ubicación --> <div class="absolute top-2 right-2 bg-black bg-opacity-75 text-white text-xs px-3 py-1 rounded"> <p class="font-display uppercase">${property.city_label}</p> </div> </div> <!-- Detalles de la propiedad --> <div class="p-4 bg-white"> <!-- Título y precio --> <div class="mb-4"> <h2 class="titulo text-lg font-medium font-heading text-gray-800 uppercase truncate"> ${property.title} </h2> <p class="text-sm text-gray-600 font-light font-display"> ${property.sale_price_label && property.rent_price_label} </p> </div> <!-- "Ver ID propiedad" --> <div class="flex items-center justify-between mt-4"> <p class="text-xs text-gray-600 font-light font-display"> ${property.id_property} </p> <!-- Botón "Ver propiedades" --> <div class="w-1/2 flex justify-end"> <a${addAttribute(`/propiedad/${property.id_property}`, "href")} class="bg-[#60C11C] font-pattern uppercase p-1.5 text-xs rounded-md">
Ver propiedad
</a> </div> </div> </div> </a> </div>`)} </div> <!-- Controles de paginación --> <div id="pagination-controls" class="text-center mt-8 "> <div class="inline-flex items-center justify-center gap-3"> <ul class="pagination flex gap-4"></ul> </div> </div> </section> ` }));
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/alquiler.astro", void 0);
const $$file = "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/alquiler.astro";
const $$url = "/alquiler";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Alquiler,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
