import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent } from './astro/server_DqMNCrZL.mjs';
import 'kleur/colors';
import 'clsx';
import { t } from 'i18next';

const $$NauticalForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="p-3"> <div class="relative max-w-3xl p-0 h-auto flex flex-wrap gap-4 rounded-tr-3xl border border-gray-100 sm:flex-nowrap"> <div class="w-full p-2 text-center lg:w-1/2 "> <img alt="Fotos de servicios de transporte nautico" src="https://images.unsplash.com/photo-1560976027-3c09ce1c6da5?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="relative inset-0 w-full h-96 object-cover rounded-xl hidden sm:flex"> </div> <!-- Formulario --> <div class="w-full p-4 text-center lg:w-1/2 "> <form action="#" class="space-y-4"> <!-- Input de Nombre --> <div> <label class="sr-only" for="name">${t("cta.name")}</label> <input class="w-full rounded-lg border-gray-200 p-3 text-sm"${addAttribute(t("cta.name"), "placeholder")} type="text" id="name"> </div> <!-- Inputs de Email y Teléfono --> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"> <div> <label class="sr-only" for="email">${t("cta.mail")}</label> <input class="w-full rounded-lg border-gray-200 p-3 text-sm"${addAttribute(t("cta.mail"), "placeholder")} type="email" id="email"> </div> <div> <label class="sr-only" for="phone">${t("cta.phone")}</label> <input class="w-full rounded-lg border-gray-200 p-3 text-sm"${addAttribute(t("cta.phone"), "placeholder")} type="tel" id="phone"> </div> </div> <!-- Opciones de selección --> <div class="grid grid-cols-1 gap-4 sm:grid-cols-3"> <div> <label for="Option1" class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white" tabindex="0"> <input class="sr-only" id="Option1" type="radio" tabindex="-1" name="option"> <span class="text-sm"> ${t("nautical.subtitle-1")} </span> </label> </div> <div> <label for="Option2" class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white" tabindex="0"> <input class="sr-only" id="Option2" type="radio" tabindex="-1" name="option"> <span class="text-sm"> ${t("nautical.subtitle-2")} </span> </label> </div> <div> <label for="Option3" class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white" tabindex="0"> <input class="sr-only" id="Option3" type="radio" tabindex="-1" name="option"> <span class="text-sm"> ${t("nautical.subtitle-3")} </span> </label> </div> </div> <!-- Mensaje --> <div> <label class="sr-only" for="message">${t("contact.title")}</label> <textarea class="resize-none  w-full rounded-lg border-gray-200 p-3 text-sm"${addAttribute(t("cta.msg-label"), "placeholder")} rows="4" id="message"></textarea> </div> <!-- Botón --> <div class="mt-4"> <button type="submit" class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"> ${t("contact.btn")} </button> </div> </form> </div> </div></div>`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/components/modals/NauticalForm.astro", void 0);

const $$NauticalModalCard = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: t("nautical.title-1"),
      subtitle: t("nautical.subtitle-1"),
      image: "/catamaran_br.jpg",
      content: t("nautical.content-1")
    },
    {
      title: t("nautical.title-2"),
      subtitle: t("nautical.subtitle-2"),
      image: "/yates_br.jpg",
      content: t("nautical.content-2")
    },
    {
      title: t("nautical.title-3"),
      subtitle: t("nautical.subtitle-3"),
      image: "/botes_br.jpg",
      content: t("nautical.content-3")
    }
  ];
  return renderTemplate`<!-- Modal Card -->${maybeRenderHead()}<div x-data="{modalIsOpen: false}" x-init="modalIsOpen = false"> <ul class="grid gap-8 max-w-6xl mx-auto px-4 sm:grid-cols-2 lg:grid-cols-3 py-12"> ${services.map((service) => renderTemplate`<li class="group relative block bg-black rounded-xl overflow-hidden"> <img alt="Fotos de servicios de transporte nautico"${addAttribute(service.image, "src")} class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"> <div class="relative p-4 sm:p-6 lg:p-8"> <p class="text-sm font-medium uppercase tracking-widest text-white"> ${service.title} </p> <p class="text-xl font-bold text-white sm:text-2xl"> ${service.subtitle} </p> <div class="mt-32 sm:mt-48 lg:mt-64"> <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 "> <p class="text-sm font-hero text-white">${service.content}</p> <button x-on:click="modalIsOpen = true" type="button" class="cursor-pointer whitespace-nowrap rounded-md bg-[#60C11C] px-4 py-2 text-center text-sm font-medium tracking-wide text-neutral-100 transition hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:opacity-100 active:outline-offset-0 dark:bg-white dark:text-black dark:focus-visible:outline-white">${t("contact.book")}</button> </div> </div> </div> </li>`)} </ul> <div x-cloak x-show="modalIsOpen" x-transition.opacity.duration.200ms x-trap.inert.noscroll="modalIsOpen" @keydown.esc.window="modalIsOpen = false" @click.self="modalIsOpen = false" class="fixed inset-0 z-30 flex items-end justify-center bg-black/20 p-2 backdrop-blur-md sm:items-center " role="dialog" aria-modal="true" aria-labelledby="defaultModalTitle"> <!-- Modal Dialog --> <div x-show="modalIsOpen" x-transition:enter="transition ease-out duration-200 delay-100 motion-reduce:transition-opacity" x-transition:enter-start="opacity-0 scale-50" x-transition:enter-end="opacity-100 scale-100" class="flex flex-col gap-4 overflow-hidden rounded-md border border-neutral-300 bg-white text-neutral-600"> <!-- Dialog Header --> <div class="hidden sm:flex items-center justify-between border-b border-neutral-300 bg-neutral-50/60 p-4 dark:border-neutral-700 dark:bg-neutral-950/20"> <h3 id="defaultModalTitle" class="font-semibold tracking-wide text-neutral-900 dark:text-white">${t("contact.title")}</h3> <button @click="modalIsOpen = false" aria-label="close modal"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" stroke="currentColor" fill="none" stroke-width="1.4" class="w-5 h-5"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <!-- Dialog Body --> ${renderComponent($$result, "NauticalForm", $$NauticalForm, {})} <!-- Dialog Footer --> <div class="flex flex-col-reverse justify-between gap-2 border-t border-neutral-300 bg-neutral-50/60 p-4 dark:border-neutral-700 dark:bg-neutral-950/20 sm:flex-row sm:items-center md:justify-end"> <button @click="modalIsOpen = false" type="button" class="cursor-pointer whitespace-nowrap rounded-md px-4 py-2 text-center text-sm font-medium tracking-wide text-neutral-600 transition hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:opacity-100 active:outline-offset-0 dark:text-neutral-300 dark:focus-visible:outline-white">${t("contact.cancel")}</button> </div> </div> </div> </div>`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/components/modals/NauticalModalCard.astro", void 0);

export { $$NauticalModalCard as $ };
