import { c as createComponent, r as renderTemplate, B as renderScript, b as addAttribute, m as maybeRenderHead, d as createAstro } from './astro/server_MjWaUeqA.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$PropertySwiper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PropertySwiper;
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
      const response = await fetch(
        `${urlGetProperty}${propertyId}?id_company=${"23639330"}&wasi_token=${"6Blp_oUrv_kl9r_m0rE"}`,
        options
      );
      property = await response.json();
    } catch (error) {
      console.error("Error fetching property:", error);
    }
  }
  await fetchProperty(Astro2.params);
  const images = Object.values(property?.galleries?.[0] || {});
  return renderTemplate(_a || (_a = __template(["", '<section class="relative pb-10"> <div class="swiper mySwiper2 mx-auto max-w-screen-xl md:rounded-xl  py-8 sm:px-6 "> <div class="swiper-wrapper rounded-xl"> <!-- Slider principal dinámico --> ', ' </div> </div> <!-- Miniaturas dinámicas --> <div class="swiper mySwiper max-w-screen-xl md:rounded-xl mx-auto"> <div class="swiper-wrapper"> ', ' </div> </div> </section> <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script> ', ""])), maybeRenderHead(), images.filter((image) => image.url_original).map((image, index) => renderTemplate`<div class="swiper-slide"${addAttribute(index, "key")}> <img class="flex items-center justify-center text-white text-4xl font-bold w-full h-[60vh] object-cover"${addAttribute(image.url_original, "src")}${addAttribute(`Project Cover ${index}`, "alt")}> </div>`), images.filter((image) => image.url_original).map((image, index) => renderTemplate`<div class="swiper-slide"${addAttribute(`thumb-${index}`, "key")}> <img class="cursor-pointer flex items-center justify-center text-4xl font-bold w-full h-[20vh] object-cover"${addAttribute(image.url_original, "src")}${addAttribute(`Thumbnail ${index}`, "alt")}> </div>`), renderScript($$result, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/components/sections/PropertySwiper.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/components/sections/PropertySwiper.astro", void 0);

export { $$PropertySwiper as $ };
