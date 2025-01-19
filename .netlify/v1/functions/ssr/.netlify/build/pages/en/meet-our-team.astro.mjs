import '../../chunks/page-ssr_80fs5Lk_.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_DqMNCrZL.mjs';
import 'kleur/colors';
import { changeLanguage } from 'i18next';
import { $ as $$Layout } from '../../chunks/Layout_DJ02UOGn.mjs';
import { $ as $$Team } from '../../chunks/Team_D4PEpb_a.mjs';
export { renderers } from '../../renderers.mjs';

const $$MeetOurTeam = createComponent(($$result, $$props, $$slots) => {
  changeLanguage("en");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Meet our Team" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Team", $$Team, {})} ${maybeRenderHead()}<div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8"> <div class="mx-auto max-w-3xl text-center"> <span class="text-sm font-pattern uppercase block text-gray-600">Why choose us?</span> <h2 class="text-2xl mt-2 font-heading uppercase text-gray-900 sm:text-4xl lg:text-4xl">
Unmatched variety, quality, and personalized service
</h2> </div> <div class="grid grid-cols-1 gap-12 mt-16 lg:grid-cols-3 lg:gap-8"> <div class="text-center"> <div class="h-40 w-40 mx-auto rounded-full bg-hero-pattern-03 bg-cover flex items-center justify-center shadow-lg"> <!-- Icon/Content --> </div> <h3 class="mt-4 text-xl font-heading uppercase text-gray-900 sm:text-2xl">Variety of Properties</h3> <p class="text-sm text-gray-700 mt-2">We offer diverse options tailored to your needs.</p> </div> <div class="text-center"> <div class="h-40 w-40 mx-auto rounded-full bg-pattern-02 bg-cover flex items-center justify-center shadow-lg"> <!-- Icon/Content --> </div> <h3 class="mt-4 text-xl font-heading uppercase text-gray-900 sm:text-2xl">Quality Standards</h3> <p class="text-sm text-gray-700 mt-2">We guarantee excellence in every service.</p> </div> <div class="text-center"> <div class="h-40 w-40 mx-auto rounded-full bg-pattern-03 bg-cover flex items-center justify-center shadow-lg"> <!-- Icon/Content --> </div> <h3 class="mt-4 text-xl font-heading uppercase text-gray-900 sm:text-2xl">Personalized Service</h3> <p class="text-sm text-gray-700 mt-2">Your satisfaction is our priority.</p> </div> </div> </div>` })}`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/en/meet-our-team.astro", void 0);

const $$file = "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/en/meet-our-team.astro";
const $$url = "/en/meet-our-team";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
     __proto__: null,
     default: $$MeetOurTeam,
     file: $$file,
     url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
