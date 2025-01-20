import '../../chunks/page-ssr_BdZ5HDMm.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CJE4JcK7.mjs';
import 'kleur/colors';
import { changeLanguage, t } from 'i18next';
import { $ as $$Layout } from '../../chunks/Layout_CbecvtHi.mjs';
export { renderers } from '../../renderers.mjs';

const $$DailyAssistance = createComponent(($$result, $$props, $$slots) => {
  changeLanguage("en");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("nav.daily") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="dark:bg-slate-800 bg-gray-50 lg:pt-24"> <div class="mx-auto max-w-screen-xl px-4 py-32 lg:py-16"> <!-- Imagen destacada --> <div class="mb-8"> <img src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="rounded-lg w-full object-cover h-64 md:h-96"> </div> <!-- Título y detalles del post --> <div class="text-center mb-12"> <h1 class="text-2xl lg:text-4xl font-heading mb-4 text-gray-900 dark:text-white"> ${t("nav.daily")} </h1> </div> <!-- Contenido del post --> <article class="prose prose-lg dark:prose-invert max-w-none mx-auto"> <p class="font-hero text-lg">
In a fast-paced world, daily assistance allows customers to delegate
          tasks and focus on what really matters. From organizing schedules to
          solving unforeseen issues, this service guarantees peace of mind and
          convenience.
</p> <h2 class="font-hero text-xl">Benefits for customers</h2> <p class="font-hero text-lg">
Time-saving: Routine tasks are managed by professionals.
</p> <p class="font-hero text-lg">
Exclusive access: Reservations at restaurants, events, or services
          that would otherwise be unattainable.
</p> <p class="font-hero text-lg">
Peace of mind: Knowing everything is under control provides
          unparalleled mental peace.
</p> </article> </div> </section> ` })}`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/en/daily-assistance.astro", void 0);

const $$file = "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/en/daily-assistance.astro";
const $$url = "/en/daily-assistance";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DailyAssistance,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
