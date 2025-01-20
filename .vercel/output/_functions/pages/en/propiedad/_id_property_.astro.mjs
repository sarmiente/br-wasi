import '../../../chunks/page-ssr_BdZ5HDMm.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, b as createAstro } from '../../../chunks/astro/server_CJE4JcK7.mjs';
import 'kleur/colors';
import { changeLanguage, t } from 'i18next';
import { a as $$Icon, $ as $$Layout } from '../../../chunks/Layout_CEk94C0i.mjs';
import { $ as $$PropertySwiper } from '../../../chunks/PropertySwiper_-8_MCSFu.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$FeaturesListEng = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeaturesListEng;
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
  const possibleFeatures = {
    internal: [
      "Admite mascotas",
      "Armarios Empotrados",
      "Balcón",
      "Baño auxiliar",
      "Baño en habitación principal",
      "Barra estilo americano",
      "Biblioteca/Estudio",
      "Calentador",
      "Citófono / Intercomunicador",
      "Clósets",
      "Cocina integral",
      "Depósito",
      "Doble Ventana",
      "Gas domiciliario",
      "Hall de Alcobas",
      "Suelo de cerámica / mármol",
      "Vista panorámica",
      "Zona de lavandería",
      "Adosado",
      "Agua",
      "Aire acondicionado",
      "Alarma",
      "Amoblado",
      "Bifamiliar",
      "Chimenea",
      "Cocina equipada",
      "Cocina tipo americano",
      "Comedor auxiliar",
      "Despensa",
      "Electricidad",
      "Habitación conductores",
      "Habitación servicio",
      "Hospedaje Turismo",
      "Inmueble de Lujo",
      "Internet",
      "Jaccuzi",
      "Piso Laminado",
      "Piso Madera",
      "Puerta de seguridad",
      "Reformado",
      "Sala de usos múltiples",
      "Sauna",
      "Trastero",
      "Trifamiliar",
      "Turco",
      "Unifamiliar",
      "Video por cable"
    ],
    external: [
      "Acceso pavimentado",
      "Área Social",
      "Ascensor",
      "Centros comerciales",
      "Cerca zona urbana",
      "Circuito cerrado de TV",
      "Colegios / Universidades",
      "Garaje",
      "Gimnasio",
      "Parqueadero visitantes",
      "Parques cercanos",
      "Piscina",
      "Portería / Recepción",
      "Salón Comunal",
      "Sobre vía principal",
      "Trans. público cercano",
      "Urbanización Cerrada",
      "Vigilancia",
      "Zona Infantil",
      "Zona residencial",
      "Zonas deportivas",
      "Zonas verdes",
      "Acceso discapacitados",
      "Árboles frutales",
      "Áreas turísticas",
      "Barbacoa / parrilla / quincho",
      "Bosque nativos",
      "Bungalow / pareado",
      "Calles de Tosca",
      "Cancha de baloncesto",
      "Cancha de fútbol",
      "Cancha de squash",
      "Cancha de tenis",
      "Centro Médico",
      "Club House",
      "Club Social",
      "Cochera / Garaje",
      "Edificio Inteligente",
      "Establo",
      "Galpón",
      "Garita de Entrada",
      "Invernadero",
      "Jardín",
      "Jardín de techo",
      "Jaula de golf",
      "Kiosko",
      "Lago",
      "Laguna",
      "Montaña",
      "Oficina de negocios",
      "Patio",
      "Pesebrera",
      "Pista de Padel",
      "Planta eléctrica",
      "Playas",
      "Pozo de agua natural",
      "Rio/Quebrada cercano",
      "Sala de internet",
      "Sistema de riego",
      "Terraza",
      "Trastero",
      "Ubicacion Exterior",
      "Ubicacion Interior",
      "Vivienda bifamiliar",
      "Vivienda multifamiliar",
      "Vivienda unifamiliar",
      "Zona campestre",
      "Zona camping",
      "Zona comercial",
      "Zona industrial"
    ]
  };
  const translations = {
    "Admite mascotas": "Pets Allowed",
    "Armarios Empotrados": "Built-in Wardrobes",
    "Balcón": "Balcony",
    "Baño auxiliar": "Guest Bathroom",
    "Baño en habitación principal": "Master Bathroom",
    "Barra estilo americano": "American Bar",
    "Biblioteca/Estudio": "Library/Study",
    "Calentador": "Heater",
    "Citófono / Intercomunicador": "Intercom",
    "Clósets": "Closets",
    "Cocina integral": "Integral Kitchen",
    "Depósito": "Storage Room",
    "Doble Ventana": "Double Window",
    "Gas domiciliario": "Residential Gas",
    "Hall de Alcobas": "Bedroom Hall",
    "Suelo de cerámica / mármol": "Ceramic/Marble Floor",
    "Vista panorámica": "Panoramic View",
    "Zona de lavandería": "Laundry Area",
    "Adosado": "Semi-detached",
    "Agua": "Water",
    "Aire acondicionado": "Air Conditioning",
    "Alarma": "Alarm",
    "Amoblado": "Furnished",
    "Bifamiliar": "Two-family House",
    "Chimenea": "Fireplace",
    "Cocina equipada": "Equipped Kitchen",
    "Cocina tipo americano": "American Style Kitchen",
    "Comedor auxiliar": "Auxiliary Dining Room",
    "Despensa": "Pantry",
    "Electricidad": "Electricity",
    "Habitación conductores": "Driver's Room",
    "Habitación servicio": "Service Room",
    "Hospedaje Turismo": "Tourism Accommodation",
    "Inmueble de Lujo": "Luxury Property",
    "Internet": "Internet",
    "Jaccuzi": "Jacuzzi",
    "Piso Laminado": "Laminate Floor",
    "Piso Madera": "Wood Floor",
    "Puerta de seguridad": "Security Door",
    "Reformado": "Renovated",
    "Sala de usos múltiples": "Multipurpose Room",
    "Sauna": "Sauna",
    "Trastero": "Storage Room",
    "Trifamiliar": "Three-family House",
    "Turco": "Turkish Bath",
    "Unifamiliar": "Single-family House",
    "Video por cable": "Cable Video",
    "Acceso pavimentado": "Paved Access",
    "Área Social": "Social Area",
    "Ascensor": "Elevator",
    "Centros comerciales": "Shopping Centers",
    "Cerca zona urbana": "Near Urban Area",
    "Circuito cerrado de TV": "Closed Circuit TV",
    "Colegios / Universidades": "Schools / Universities",
    "Garaje": "Garage",
    "Gimnasio": "Gym",
    "Parqueadero visitantes": "Visitor Parking",
    "Parques cercanos": "Nearby Parks",
    "Piscina": "Pool",
    "Portería / Recepción": "Reception",
    "Salón Comunal": "Community Room",
    "Sobre vía principal": "On Main Road",
    "Trans. público cercano": "Public Transport Nearby",
    "Urbanización Cerrada": "Gated Community",
    "Vigilancia": "Surveillance",
    "Zona Infantil": "Children's Zone",
    "Zona residencial": "Residential Area",
    "Zonas deportivas": "Sports Zones",
    "Zonas verdes": "Green Zones",
    "Acceso discapacitados": "Disabled Access",
    "Árboles frutales": "Fruit Trees",
    "Áreas turísticas": "Tourist Areas",
    "Barbacoa / parrilla / quincho": "Barbecue/Grill",
    "Bosque nativos": "Native Forests",
    "Bungalow / pareado": "Bungalow/Semi-detached",
    "Calles de Tosca": "Unpaved Streets",
    "Cancha de baloncesto": "Basketball Court",
    "Cancha de fútbol": "Football Field",
    "Cancha de squash": "Squash Court",
    "Cancha de tenis": "Tennis Court",
    "Centro Médico": "Medical Center",
    "Club House": "Club House",
    "Club Social": "Social Club",
    "Cochera / Garaje": "Garage",
    "Edificio Inteligente": "Smart Building",
    "Establo": "Stable",
    "Galpón": "Shed",
    "Garita de Entrada": "Entrance Booth",
    "Invernadero": "Greenhouse",
    "Jardín": "Garden",
    "Jardín de techo": "Roof Garden",
    "Jaula de golf": "Golf Cage",
    "Kiosko": "Kiosk",
    "Lago": "Lake",
    "Laguna": "Lagoon",
    "Montaña": "Mountain",
    "Oficina de negocios": "Business Office",
    "Patio": "Yard",
    "Pesebrera": "Stable",
    "Pista de Padel": "Padel Court",
    "Planta eléctrica": "Power Plant",
    "Playas": "Beaches",
    "Pozo de agua natural": "Natural Water Well",
    "Rio/Quebrada cercano": "Nearby River/Stream",
    "Sala de internet": "Internet Room",
    "Sistema de riego": "Irrigation System",
    "Terraza": "Terrace",
    "Ubicacion Exterior": "Exterior Location",
    "Ubicacion Interior": "Interior Location",
    "Vivienda bifamiliar": "Two-family House",
    "Vivienda multifamiliar": "Multi-family House",
    "Vivienda unifamiliar": "Single-family House",
    "Zona campestre": "Countryside Area",
    "Zona camping": "Camping Area",
    "Zona comercial": "Commercial Area",
    "Zona industrial": "Industrial Area"
  };
  function translateFeature(feature) {
    return translations[feature] || feature;
  }
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
  const internalFeatures = possibleFeatures.internal.filter(
    (feature) => internal.some((item) => item.nombre === feature || item.name === feature)
  );
  const externalFeatures = possibleFeatures.external.filter(
    (feature) => external.some((item) => item.nombre === feature || item.name === feature)
  );
  return renderTemplate`${maybeRenderHead()}<div class="p-5 max-w-5xl mx-auto"> <!-- Título general --> <h2 class="text-2xl font-bold text-gray-800 mb-6">Features</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <!-- Internal Features --> <div> <h3 class="text-xl font-semibold text-gray-700 mb-4">
Internal Features
</h3> <ul class="space-y-3"> ${internalFeatures.length > 0 ? internalFeatures.map((feature, index) => renderTemplate`<li${addAttribute(index, "key")} class="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg shadow-md"> <div class="w-8 h-8 bg-[#60C11C] text-white rounded-full flex items-center justify-center text-sm font-semibold"> ${renderComponent($$result, "Icon", $$Icon, { "name": "check" })} </div> <span class="text-gray-800">${translateFeature(feature)}</span> </li>`) : renderTemplate`<p class="text-gray-500">No internal features available.</p>`} </ul> </div> <!-- External Features --> <div> <h3 class="text-xl font-semibold text-gray-700 mb-4">
External Features
</h3> <ul class="space-y-3"> ${externalFeatures.length > 0 ? externalFeatures.map((feature, index) => renderTemplate`<li${addAttribute(index, "key")} class="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg shadow-md"> <div class="w-8 h-8 bg-[#60C11C] text-white rounded-full flex items-center justify-center text-sm font-semibold"> ${renderComponent($$result, "Icon", $$Icon, { "name": "check" })} </div> <span class="text-gray-800">${translateFeature(feature)}</span> </li>`) : renderTemplate`<p class="text-gray-500">No external features available.</p>`} </ul> </div> </div> </div>`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/components/sections/FeaturesListEng.astro", void 0);

const $$Astro = createAstro();
const $$idProperty = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$idProperty;
  changeLanguage("en");
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
  property.galleries;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": property.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-32 pb-16">  ${property ? renderTemplate`<div class="mx-auto max-w-5xl px-6 md:px-4"> <div class="mt-12"> <h2 class="text-2xl font-heading uppercase text-gray-900 sm:text-4xl lg:text-5xl pb-5">${property.title}</h2> <p class="text-md tracking-wide uppercase font-pattern dark:text-zinc-300"> ${property.city_label}</p> <p class="text-sm tracking-wide uppercase font-pattern text-zinc-700 dark:text-zinc-300"> ${property.zone_label}</p> </div> </div>
                  ${renderComponent($$result2, "PropertySwiper", $$PropertySwiper, {})}
                  
                  <!-- Características -->
                        <div class="m-auto max-w-5xl mx-auto flex flex-wrap justify-center gap-12 text-center"> <!-- Área --> <div class="flex flex-col items-center space-y-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "area_vector", "class": "text-[#60C11C] text-2xl" })} <p class="font-pattern  text-sm">${property.built_area ? `${property.built_area} m²` : ""}</p> </div> <!-- Baños --> <div class="flex flex-col items-center space-y-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "bath_vector", "class": "text-[#60C11C] text-2xl" })} <p class="font-pattern text-sm">${property.bathrooms || ""} ${t("property.bath")} </p> </div> <!-- Habitaciones --> <div class="flex flex-col items-center space-y-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "bed_vector", "class": "text-[#60C11C] text-2xl" })} <p class="font-pattern text-sm">${property.bedrooms || ""} ${t("property.bed")} </p> </div> <!-- Disponibilidad --> <div class="flex flex-col items-center space-y-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "available_vector", "class": "text-[#60C11C] text-2xl" })} <p class="font-pattern text-sm">${property.availability_label}</p> </div> </div>` : renderTemplate`<p>Cargando datos de la propiedad...</p>`} </section> <section> <div class="mx-auto max-w-6xl px-6 md:px-4"> <div class="h-32 rounded-lg  items-center place-content-center text-center"> <p class="font-pattern text-2xl"> ${property.for_sale === "true" && property.sale_price_label && property.sale_price_label !== 0 ? renderTemplate`<span>${t("proplist.sale-price")} ${property.sale_price_label}</span>` : property.for_rent === "true" && property.rent_price_label && property.rent_price_label !== 0 ? renderTemplate`<span>${t("proplist.rent-price")} ${property.rent_price_label}</span>` : null} </p> </div> </div> </section> ${renderComponent($$result2, "FeaturesListEng", $$FeaturesListEng, {})} ` })}`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/en/propiedad/[id_property].astro", void 0);
const $$file = "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/en/propiedad/[id_property].astro";
const $$url = "/en/propiedad/[id_property]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$idProperty,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
