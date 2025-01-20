import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_CJE4JcK7.mjs';
import 'kleur/colors';
import 'clsx';
import { t } from 'i18next';

const $$Form = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg bg-white p-8  lg:col-span-3 lg:p-12"> <form action="#" class="space-y-4"> <div> <label class="sr-only" for="name">${t("cta.name")}</label> <input class="w-full rounded-lg border-gray-200 p-3 text-sm"${addAttribute(t("cta.name"), "placeholder")} type="text" id="name"> </div> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"> <div> <label class="sr-only" for="email">${t("cta.mail")}</label> <input class="w-full rounded-lg border-gray-200 p-3 text-sm"${addAttribute(t("cta.mail"), "placeholder")} type="email" id="email"> </div> <div> <label class="sr-only" for="phone">${t("cta.phone")}</label> <input class="w-full rounded-lg border-gray-200 p-3 text-sm"${addAttribute(t("cta.phone"), "placeholder")} type="tel" id="phone"> </div> </div> <div> <label class="sr-only" for="message">${t("cta.msg-label")}</label> <textarea class="w-full rounded-lg border-gray-200 p-3 text-sm"${addAttribute(t("cta.msg-label"), "placeholder")} rows="4" id="message"></textarea> </div> <label class="font-pattern"> <input type="checkbox" class="accent-[#60C11C] focus:accent-[#60C11C]"> ${t("nav.accept")} <span class="font-medium">${t("nav.terms")}</span> ${t("nav.for")} </label> <div class="mt-4"> <button type="submit" class="inline-block w-full rounded-lg bg-[#60C11C] px-5 py-3 font-medium text-white sm:w-auto"> ${t("contact.btn")} </button> </div> </form> </div>`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/components/sections/Form.astro", void 0);

export { $$Form as $ };
