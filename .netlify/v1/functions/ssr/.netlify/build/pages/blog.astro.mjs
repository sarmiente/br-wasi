import { P } from '../chunks/page-ssr_80fs5Lk_.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_MjWaUeqA.mjs';
import 'kleur/colors';
import { changeLanguage, t } from 'i18next';
import { g as getCollection } from '../chunks/_astro_content_cHlk7rp4.mjs';
import { $ as $$Layout } from '../chunks/Layout_Xxx8BAc8.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  changeLanguage("es");
  const posts = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Explora ultimos articulos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-gray-50 dark:bg-slate-800 pt-36"> <section class="pb-16 py-10"> <h1 class=" text-center font-pattern uppercase dark:text-white ">
Explora
</h1> <p class="text-3xl font-heading text-center uppercase sm:text-4xl">Nuestros Ultimos Articulos</p> <ul class="grid gap-8 max-w-6xl mx-auto px-4 sm:grid-cols-2 lg:grid-cols-3 py-12"> ${posts.map((post) => renderTemplate`<li class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"> <a${addAttribute(`${P("/blog")}/${post.slug}/`, "href")} class="block h-full"> <img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(post.data.heroImage, "src")}${addAttribute(post.data.title, "alt")} class="w-full h-48 object-cover"> <div class="p-6"> <h4 class="text-xl font-heading text-gray-900  mb-3"> ${t(post.data.title)} </h4> <p class="text-gray-700 font-pattern text-xs line-clamp-3"> ${t(post.data.description || "Descripci\xF3n del art\xEDculo...")} </p> </div> </a> </li>`)} </ul> </section> </main> ` })}`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
