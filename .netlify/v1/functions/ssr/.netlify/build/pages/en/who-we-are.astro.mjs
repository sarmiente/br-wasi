import '../../chunks/page-ssr_80fs5Lk_.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_DqMNCrZL.mjs';
import 'kleur/colors';
import { changeLanguage } from 'i18next';
import { $ as $$Layout } from '../../chunks/Layout_DJ02UOGn.mjs';
export { renderers } from '../../renderers.mjs';

const $$WhoWeAre = createComponent(($$result, $$props, $$slots) => {
  changeLanguage("en");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Qui\xE9nes somos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative pt-24 lg:pt-32 pb-20"> <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8"> <!-- Sección "Quiénes somos" --> <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center motion-translate-y-in-[-30%] motion-ease-spring-smooth "> <div> <div class="max-w-lg md:max-w-none text-center md:text-left"> <span class="text-sm font-pattern uppercase block text-gray-600">Who we are</span> <h2 class="text-2xl font-heading uppercase text-gray-900 sm:text-4xl lg:text-5xl">
Building a visionary legacy in the future of property excellence.
</h2> <p class="mt-4 text-gray-700 font-hero text-sm sm:text-base lg:text-md">
At BR Solutions, we believe that every journey is a unique experience and that where you stay can make that journey truly unforgettable. As providers of tourist accommodations, property sales, and boat rentals, we take pride in offering homes away from home and exceptional experiences.
</p> <div class="py-5"> <a href="#" class="bg-[#60C11C] font-hero uppercase px-6 py-3 text-sm rounded-md text-white hover:bg-[#4ea015] transition">
Learn more
</a> </div> </div> </div> <div> <img src="https://brsolution.com.co/wp-content/uploads/2024/04/Team_Photo.jpg" class="rounded-2xl w-full object-cover" alt="Team Photo"> </div> </div> </div> </section>  <section class="relative pb-20"> <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center motion-preset-slide-right "> <!-- Imagen lado izquierdo --> <div class="order-2 md:order-1 place-items-center"> <img src="https://images.unsplash.com/photo-1708196889869-1405f43976ea?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="rounded-2xl w-[70%] object-cover" alt="Mission Image"> </div> <!-- Texto lado derecho --> <div class="order-1 md:order-2"> <div class="max-w-lg text-center md:text-left"> <span class="text-sm font-pattern uppercase block text-gray-600">Our mission</span> <h2 class="text-2xl font-heading uppercase text-gray-900 sm:text-4xl lg:text-4xl">
Excellence in quality, safety and service.
</h2> <p class="mt-4 text-gray-700 font-hero text-sm sm:text-base lg:text-md">
We are committed to providing properties and boats of the highest quality, ensuring the safety and well-being of our clients at all times. Excellence is service is our standard.
</p> </div> </div> </div> </div> </section>  <section class="relative pb-20"> <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center motion-preset-slide-left "> <!-- Texto lado izquierdo --> <div> <div class="max-w-lg text-center md:text-left"> <span class="text-sm font-pattern uppercase block text-gray-600">Our Vision</span> <h2 class="text-2xl font-heading uppercase text-gray-900 sm:text-4xl lg:text-4xl">
Transformating statys into timeless adventures
</h2> <p class="mt-4 text-gray-700 font-hero text-sm sm:text-base lg:text-md">
Becoming the leading company in providing real state services focused on the rental of tourist accomodations, local property sales, and maritime boat rentals, offering access to the most exclusive properties and boats in dream destinations, where each stay transform into a unique and unforgettable adventure.
</p> </div> </div> <!-- Imagen lado derecho --> <div class="place-items-center"> <img src="https://images.unsplash.com/photo-1708196889869-1405f43976ea?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="rounded-2xl w-[70%] object-cover" alt="Vision Image"> </div> </div> </div> </section> ` })}`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/en/who-we-are.astro", void 0);

const $$file = "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/en/who-we-are.astro";
const $$url = "/en/who-we-are";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WhoWeAre,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
