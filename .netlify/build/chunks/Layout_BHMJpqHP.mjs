import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, y as spreadAttributes, b as addAttribute, a as renderComponent, u as unescapeHTML, z as Fragment, B as renderScript, C as renderHead, e as renderSlot } from './astro/server_DqMNCrZL.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_DJK9ItTF.mjs';
import { getIconData, iconToSVG } from '@iconify/utils';
import { P, T } from './page-ssr_C8K4u_ud.mjs';
import i18next, { t } from 'i18next';
/* empty css                          */
import 'clsx';
import '@proload/core';
import '@proload/plugin-tsm';
import localeEmoji from 'locale-emoji';
import ISO6991 from 'iso-639-1';

const Logo = new Proxy({"src":"/_astro/br_logo.DxElPP_F.svg","width":110,"height":130,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/icons/br_logo.svg";
							}
							
							return target[name];
						}
					});

const icons = {"local":{"prefix":"local","lastModified":1737385289,"icons":{"area_vector":{"body":"<path fill=\"currentColor\" d=\"M2 0H0v2h2zm2 0h2v2H4zm6 0H8v2h2zm2 0h2v2h-2zm4 0h2v2h-2zM0 4h2v2H0zm2 4H0v2h2zm-2 4h2v2H0zm2 4H0v2h2zm2 0h2v2H4zm6 0H8v2h2zm6-8h2v2h-2zm2-4h-2v2h2zm-6 8h6v2h-2v2h-2v2h-2zm4 4v2h2v-2z\"/>","width":18,"height":18},"arrow":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m6 9 6 6 6-6\"/>"},"arrow_vector":{"body":"<g fill=\"none\"><path fill=\"#94C120\" d=\"M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15\"/><path fill=\"#fff\" d=\"M12 7.575 8 3.75 4 7.575h2.65v4.675h2.575V7.575z\"/></g>","width":16,"height":16},"available_vector":{"body":"<path fill=\"currentColor\" d=\"M7.95 16.35 4.4 12.8l1.45-1.45 2.1 2.1 4.2-4.2 1.45 1.45zM2 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 0 18V4q0-.824.588-1.412A1.93 1.93 0 0 1 2 2h1V0h2v2h8V0h2v2h1q.825 0 1.413.588T18 4v14q0 .825-.587 1.413A1.92 1.92 0 0 1 16 20zm0-2h14V8H2z\"/>","width":18,"height":20},"bath_vector":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M18.385 9.984V2.635s0-2.57-2.406-.556m0 0c-.63-.483-1.624-.244-2.22.535l2.284 1.749c.596-.778.567-1.8-.063-2.283m1.497 15.304.422 1.307h-1.303l-.247-.76m-13.553-.547-.423 1.307h1.304l.246-.76M.75 9.983v3.49c0 2.559 1.998 4.652 4.44 4.652h9.62c2.442 0 4.44-2.093 4.44-4.652v-3.49s-8.51.776-18.5 0\"/>","width":20,"height":20},"bed":{"body":"<path fill=\"currentColor\" d=\"M2.535 11A4 4 0 0 0 2 13v4a1 1 0 0 0 1 1h2v1a1 1 0 1 0 2 0v-1h10v1a1 1 0 1 0 2 0v-1h2a1 1 0 0 0 1-1v-4c0-.729-.195-1.412-.535-2zM20 9V8a4 4 0 0 0-4-4h-3v5zm-9-5H8a4 4 0 0 0-4 4v1h7z\"/>"},"bed_vector":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.25 7.25a3.01 3.01 0 0 0-3 3v5.25-.375A1.13 1.13 0 0 1 2.375 14h17.25a1.13 1.13 0 0 1 1.125 1.125v.375-5.25a3.01 3.01 0 0 0-3-3m-13.5 0h13.5m-13.5 0V6.5A1.504 1.504 0 0 1 5.75 5H9.5A1.504 1.504 0 0 1 11 6.5m6.75.75V6.5a1.504 1.504 0 0 0-1.5-1.5H12.5A1.504 1.504 0 0 0 11 6.5m0 0v.75m-7.5 0V2.375A1.88 1.88 0 0 1 5.375.5h11.25A1.88 1.88 0 0 1 18.5 2.375V7.25z\"/>","width":22,"height":16},"bookmark":{"body":"<path fill=\"currentColor\" d=\"M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.8 1.8 0 0 0 16.167 2z\"/>"},"briefcase":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01\"/>"},"check":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 11.917 9.724 16.5 19 7.5\"/>"},"close-book":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2m0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4\"/>"},"cloud":{"body":"<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1z\" clip-rule=\"evenodd\"/>","width":20,"height":20},"database":{"body":"<g fill=\"currentColor\"><path d=\"M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.5 3.5 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267z\"/><path fill-rule=\"evenodd\" d=\"M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75z\" clip-rule=\"evenodd\"/></g>","width":20,"height":20},"door":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18 18V6h-5v12zm0 0h2M4 18h2.5m3.5-5.5V12M6 6l7-2v16l-7-2z\"/>"},"envelop":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m3 8 7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2\"/>"},"envelop_vector":{"body":"<g fill=\"none\"><g clip-path=\"url(#a)\"><path fill=\"currentColor\" d=\"M5.768.75h6.464c.813 0 1.469 0 2 .043.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47.043.531.043 1.187.043 2v3.464c0 .813 0 1.469-.043 2-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365-.531.043-1.187.043-2 .043H5.768c-.813 0-1.469 0-2-.043-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47-.043-.531-.043-1.187-.043-2V6.268c0-.813 0-1.469.043-2 .045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365.531-.043 1.187-.043 2-.043M3.89 2.288c-.454.037-.715.107-.912.207-.3.153-.56.37-.763.633l5.18 4.489c.38.33.633.549.843.704.202.15.318.205.409.232.23.067.474.067.704 0 .09-.027.207-.082.409-.232.21-.155.463-.375.844-.704l5.179-4.489a2.25 2.25 0 0 0-.762-.633c-.198-.1-.459-.17-.913-.207-.462-.037-1.057-.038-1.909-.038H5.8c-.852 0-1.447 0-1.91.038M1.75 6.3v3.4c0 .853 0 1.447.038 1.91.037.453.107.714.207.912q.07.137.159.264L4.97 9.97a.75.75 0 0 1 1.06 1.06l-2.617 2.618q.196.04.478.064c.462.037 1.057.038 1.909.038h6.4c.852 0 1.447 0 1.91-.038q.24-.018.478-.064L11.97 11.03a.75.75 0 1 1 1.06-1.06l2.816 2.816q.088-.127.159-.265c.1-.197.17-.458.207-.912.037-.462.038-1.056.038-1.909V6.3c0-.66 0-1.166-.018-1.575l-4.666 4.044c-.354.306-.65.564-.912.757-.274.203-.552.37-.88.466a2.75 2.75 0 0 1-1.549 0c-.327-.096-.605-.263-.88-.466a17 17 0 0 1-.91-.757L1.767 4.725c-.018.41-.017.915-.017 1.575\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h18v16H0z\"/></clipPath></defs></g>","width":18,"height":16},"facebook":{"body":"<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12\" clip-rule=\"evenodd\"/>"},"flecha":{"body":"<path fill=\"currentColor\" d=\"M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749c-31.879 5.313-49.1 9.017-61.296 13.185-4.76 1.627-5.176 1.844-5.13 2.676.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066\"/>","width":418,"height":42},"github":{"body":"<path fill=\"currentColor\" d=\"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6m-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3m44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8M97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1m-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7m32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1m-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2\"/>","width":496,"height":512},"instagram":{"body":"<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.9 4.9 0 0 1 1.772 1.153 4.9 4.9 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.9 4.9 0 0 1-1.153 1.772 4.9 4.9 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153 4.9 4.9 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748s-.566.683-.748 1.15c-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748s.566-.683.748-1.15c.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.1 3.1 0 0 0-.748-1.15 3.1 3.1 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058M12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27m0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666m5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4\" clip-rule=\"evenodd\"/>"},"location":{"body":"<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M11.906 1.994a8 8 0 0 1 8.09 8.421 8 8 0 0 1-1.297 3.957 1 1 0 0 1-.133.204l-.108.129q-.268.365-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18 18 0 0 1-.309-.38l-.133-.163a1 1 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0\" clip-rule=\"evenodd\"/>"},"lock":{"body":"<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1m3 8V5.5a3 3 0 1 0-6 0V9z\" clip-rule=\"evenodd\"/>","width":20,"height":20},"open-book":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023\"/>"},"price_vector":{"body":"<g fill=\"currentColor\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path d=\"M10.722 9.334A2 2 0 0 0 8.836 8v-.5h-1V8a2 2 0 1 0 0 4v2c-.435 0-.806-.277-.944-.666a.501.501 0 1 0-.942.332A2 2 0 0 0 7.836 15v.5h1V15a2 2 0 1 0 0-4V9a1 1 0 0 1 .943.666.5.5 0 1 0 .943-.332M7.836 9a1 1 0 0 0 0 2zm1 5a1 1 0 0 0 0-2z\"/><path d=\"M2.912 1.31C4.14.71 6.152 0 8.355 0c2.157 0 4.117.68 5.338 1.273l.069.034c.368.182.665.354.874.493l-1.847 2.7c4.258 4.353 7.547 13.499-4.434 13.499S-.425 9.019 3.87 4.5L2.035 1.8q.214-.141.535-.314.159-.086.342-.175m8.69 3.154 1.478-2.161c-1.375.099-3.01.422-4.586.878-1.125.325-2.375.276-3.532.062a13 13 0 0 1-.869-.193l.96 1.414c2.058.732 4.49.732 6.549 0m-7.126.851c2.407.93 5.3.93 7.708-.001a14.7 14.7 0 0 1 2.494 3.572c.676 1.379 1.044 2.757.984 3.945-.058 1.146-.509 2.126-1.539 2.854-1.073.758-2.879 1.313-5.768 1.313-2.893 0-4.707-.545-5.79-1.295-1.038-.718-1.493-1.685-1.558-2.816-.067-1.175.293-2.546.966-3.935a15.3 15.3 0 0 1 2.503-3.637M3.9 1.958c.4.119.818.222 1.242.301 1.075.198 2.153.227 3.073-.04a27 27 0 0 1 3.265-.735A11 11 0 0 0 8.355 1c-1.723 0-3.33.48-4.454.958\"/></g>","width":17,"height":18},"ruler":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 7H7m2 3H7m2 3H7m4 2v2m3-2v2m3-2v2M4 5v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-9a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1\"/>"},"store":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734s.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659s1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659s1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.8 1.8 0 0 0 1.53 0 2 2 0 0 0 .65-.488c.185-.209.332-.457.433-.73s.152-.566.152-.861c0-.974-1.108-3.85-1.618-5.121A.98.98 0 0 0 17.466 4H6.456a.99.99 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697m0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266s.651-.091.94-.266c.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.8 1.8 0 0 0 1.06-.351M6 12a1.77 1.77 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2z\"/>"},"top_vector":{"body":"<g fill=\"currentColor\"><path d=\"M9 17.16A8.153 8.153 0 0 1 .84 9 8.153 8.153 0 0 1 9 .84 8.153 8.153 0 0 1 17.16 9 8.153 8.153 0 0 1 9 17.16M9 1.8A7.19 7.19 0 0 0 1.8 9 7.19 7.19 0 0 0 9 16.2 7.19 7.19 0 0 0 16.2 9 7.19 7.19 0 0 0 9 1.8\"/><path d=\"M12.984 9.816 9 5.832 5.016 9.816l-.672-.672L9 4.488l4.656 4.656z\"/><path d=\"M8.52 5.16h.96v8.16h-.96z\"/></g>","width":18,"height":18},"whatsapp":{"body":"<g fill=\"none\"><path fill=\"url(#a)\" d=\"M2.732 63.728a61.4 61.4 0 0 0 8.213 30.75l-8.728 31.871 32.615-8.552a61.5 61.5 0 0 0 29.4 7.485h.028c33.907 0 61.508-27.592 61.523-61.505.006-16.434-6.387-31.887-18.004-43.513C96.164 8.639 80.716 2.234 64.257 2.226c-33.912 0-61.512 27.59-61.526 61.502\"/><path fill=\"url(#b)\" d=\"M.535 63.708A63.6 63.6 0 0 0 9.042 95.56L0 128.574l33.786-8.859a63.7 63.7 0 0 0 30.454 7.755h.028c35.124 0 63.717-28.583 63.732-63.711.006-17.024-6.618-33.032-18.65-45.075C97.317 6.643 81.317.007 64.268 0 29.138 0 .549 28.58.535 63.708m20.12 30.188-1.261-2.002a52.8 52.8 0 0 1-8.098-28.182c.011-29.198 23.773-52.952 52.992-52.952 14.15.006 27.448 5.522 37.45 15.53 10.001 10.009 15.505 23.314 15.502 37.465-.013 29.197-23.776 52.955-52.972 52.955h-.021a52.9 52.9 0 0 1-26.961-7.383l-1.935-1.147-20.049 5.257z\"/><path fill=\"#fff\" d=\"M48.339 37.074c-1.193-2.651-2.448-2.705-3.583-2.751-.929-.04-1.991-.038-3.052-.038-1.062 0-2.788.4-4.246 1.993-1.46 1.593-5.574 5.446-5.574 13.28s5.706 15.407 6.502 16.47c.796 1.061 11.017 17.653 27.202 24.036 13.453 5.305 16.19 4.25 19.11 3.984 2.92-.265 9.422-3.851 10.748-7.57 1.328-3.718 1.328-6.904.93-7.57-.398-.664-1.46-1.062-3.053-1.859s-9.422-4.649-10.881-5.18c-1.46-.531-2.522-.796-3.584.799-1.062 1.591-4.112 5.177-5.041 6.24-.928 1.064-1.858 1.197-3.45.4-1.594-.799-6.722-2.479-12.807-7.903-4.733-4.221-7.93-9.434-8.858-11.028-.93-1.592-.1-2.455.699-3.248.715-.714 1.592-1.86 2.39-2.79.794-.93 1.059-1.593 1.59-2.655.531-1.063.265-1.993-.133-2.79s-3.493-8.672-4.909-11.82\"/><defs><linearGradient id=\"a\" x1=\"6400\" x2=\"6400\" y1=\"12857.4\" y2=\"0\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#1FAF38\"/><stop offset=\"1\" stop-color=\"#60D669\"/></linearGradient><linearGradient id=\"b\" x1=\"6400\" x2=\"6400\" y1=\"12857.4\" y2=\"0\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#F9F9F9\"/><stop offset=\"1\" stop-color=\"#fff\"/></linearGradient></defs></g>","width":128,"height":129}},"width":24,"height":24}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$6 = createAstro("https://br-wasi.vercel.app");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const date = /* @__PURE__ */ new Date();
  const footerData = [
    {
      title: t("nav.about"),
      items: [
        { text: t("nav.who-we-are"), href: P("/quienes-somos") },
        { text: t("nav.our-team"), href: P("/nuestro-equipo") }
      ]
    },
    {
      title: "Servicios",
      items: [
        { text: t("nav.manage"), href: P("/gestion-de-propiedades") },
        { text: t("nav.concierge"), href: P("/conserjeria-de-lujo") }
      ]
    },
    {
      title: "Enlaces \xFAtiles",
      items: [
        { text: t("nav.pqrs"), href: "#" },
        { text: t("nav.support"), href: "#" }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white"> <div class="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24"> <div class="grid grid-cols-1 gap-8 lg:grid-cols-3"> <div> <div class="flex justify-center text-teal-600 sm:justify-start"> <a${addAttribute(P("/"), "href")}> ${renderComponent($$result, "Image", $$Image, { "src": Logo, "width": 80, "height": 80, "alt": "Logo de BR Solutions" })} </a> </div> <p class="mt-6 max-w-md text-center font-pattern leading-relaxed text-gray-500 sm:max-w-xs sm:text-left"> ${t("nav.msg")} </p> <ul class="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8"> <li> <a href="https://www.facebook.com/profile.php?id=61555851065583" rel="noreferrer" target="_blank" class="text-[#60C11C] transition hover:text-teal-700/75"> <span class="sr-only">Facebook</span> ${renderComponent($$result, "Icon", $$Icon, { "class": "h-6 w-6", "name": "facebook" })} </a> </li> <li> <a href="https://www.instagram.com/brsolutions_co" rel="noreferrer" target="_blank" class="text-[#60C11C] transition hover:text-teal-700/75"> <span class="sr-only">Instagram</span> ${renderComponent($$result, "Icon", $$Icon, { "class": "h-6 w-6", "name": "instagram" })} </a> </li> </ul> </div> <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2"> <div class="text-center sm:text-left"> <p class="text-lg uppercase font-pattern text-gray-900">${t("nav.about")}</p> <ul class="mt-8 space-y-4 text-sm"> ${footerData[0].items.map((item) => renderTemplate`<li> <a class="text-gray-700  transition font-pattern uppercase hover:text-gray-700/75"${addAttribute(item.href, "href")}> ${item.text} </a> </li>`)} </ul> </div> <div class="text-center sm:text-left"> <p class="text-lg uppercase font-pattern text-gray-900">${t("nav.services")}</p> <ul class="mt-8 space-y-4 text-sm"> ${footerData[1].items.map((item) => renderTemplate`<li> <a class="text-gray-700 transition font-pattern uppercase hover:text-gray-700/75"${addAttribute(item.href, "href")}> ${item.text} </a> </li>`)} </ul> </div> <div class="text-center sm:text-left"> <p class="text-lg uppercase font-pattern text-gray-900">${t("nav.links")}</p> <ul class="mt-8 space-y-4 text-sm"> ${footerData[2].items.map((item) => renderTemplate`<li> <a class="text-gray-700 transition font-pattern uppercase hover:text-gray-700/75"${addAttribute(item.href, "href")}> ${item.text} </a> </li>`)} </ul> </div> <div class="text-center sm:text-left"> <p class="text-lg uppercase font-pattern text-gray-900">${t("nav.contact")}</p> <ul class="mt-8 space-y-4 text-sm"> <li class="flex sm:justify-start items-center justify-center  gap-1.5"> ${renderComponent($$result, "Icon", $$Icon, { "class": "h-4 w-4 text-green-500", "name": "whatsapp" })} <a href="https://api.whatsapp.com/send/?phone=573242016401&text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios"> <span class=" p-1 font-pattern text-xs">+57 324 201 6401</span> </a> </li> <li class="flex sm:justify-start items-center justify-center gap-1.5"> ${renderComponent($$result, "Icon", $$Icon, { "class": "h4 w-4 ", "name": "envelop_vector" })} <a href="mailto:info@brsolution.com.co"> <span class="text-white p-1 font-pattern text-xs bg-[#000080] rounded-2xl">info@brsolution.com.co</span> </a> </li> <li class="flex sm:justify-start items-center justify-center gap-1.5"> ${renderComponent($$result, "Icon", $$Icon, { "class": "h4 w-4 text-red-600", "name": "location" })} <address class="-mt-0.5 not-italic text-gray-700 font-pattern uppercase">
Cartagena de Indias, Colombia
</address> </li> </ul> </div> </div> </div> <div class="mt-12 border-t border-gray-100 pt-6"> <div class="text-center sm:flex sm:justify-between sm:text-left"> <a href="http://devs.sarpin.agency/" target="_blank"><span class="font-pattern block sm:inline text-sm text-gray-400 hover:text-[#60C11C] pb-5 md:p-0">sarpin.agency</span></a> <p class="text-sm text-gray-500"> <a class="inline-block font-pattern text-[#60C11C] transition hover:text-[#000080]" href="/terms-and-conditions"> ${t("nav.terms")} </a> <span>&middot;</span> <a class="inline-block font-pattern text-[#60C11C] transition hover:text-[#000080]" href="/privacy-policy"> ${t("nav.privacy")} </a> </p> <p class="mt-4 text-sm font-pattern text-gray-500 sm:order-first sm:mt-0">
BR SOLUTIONS &copy; ${date.getFullYear()}. ${t("nav.rights")} </p> </div> </div> </div> </footer>`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/components/ui/Footer.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Mobile = createComponent(($$result, $$props, $$slots) => {
  const navItems = {
    links: [
      { href: P("/comprar"), text: t("nav.buy") },
      { href: P("/alquiler"), text: t("nav.rent") },
      { href: P("/blog"), text: "Blog" }
    ],
    dropmenu: [
      {
        title: t("nav.services"),
        dropdown: [
          { href: P("/gestion-de-propiedades"), text: t("nav.manage") }
        ]
      },
      {
        title: t("nav.about"),
        dropdown: [
          { href: P("/quienes-somos"), text: t("nav.who-we-are") },
          { href: P("/nuestro-equipo"), text: t("nav.our-team") }
        ]
      },
      {
        title: t("nav.concierge"),
        dropdown: [
          { href: P("/asistencia-diaria"), text: t("daily-assistance") },
          { href: P("/planes-turisticos"), text: t("nav.tourist") },
          { href: P("/experiencias"), text: t("nav.experiences") }
        ]
      },
      {
        title: t("nav.transport"),
        dropdown: [
          { href: P("/transporte-terrestre"), text: t("nav.land") },
          { href: P("/transporte-nautico"), text: t("nav.nautical") }
        ]
      }
    ]
  };
  const links = navItems.links;
  const dropdowns = navItems.dropmenu[0].dropdown;
  const dropabout = navItems.dropmenu[1].dropdown;
  const dropluxury = navItems.dropmenu[2].dropdown;
  const transportation = navItems.dropmenu[3].dropdown;
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<div x-data="{ openToggle: false }"> <!-- Bot\xF3n de men\xFA --> <div class="md:hidden" @click="openToggle = ! openToggle"> <button type="button" class="text-black dark:text-white focus:outline-none" aria-label="Main menu mobile" :aria-expanded="openToggle.toString()"> <div class="w-5 h-0.5 rounded-full bg-black dark:bg-white mb-1"></div> <div class="w-5 h-0.5 rounded-full bg-black dark:bg-white mb-1"></div> <div class="w-5 h-0.5 rounded-full bg-black dark:bg-white"></div> </button> </div> <!-- Men\xFA m\xF3vil --> <div x-show="openToggle" class="flex flex-col mt-16 lg:hidden absolute top-4 left-0 bg-white dark:bg-slate-800 z-50 w-full items-center gap-10 py-15 pb-10" @click.away="openToggle = false"> ', ' <!-- Dropdown para M\xF3vil --> <div x-data="dropdown" class="w-full text-center"> <button class="dark:text-white hover:text-[#60C11C] px-3 py-2 rounded-md text-sm font-pattern font-light uppercase focus:outline-none inline-flex items-center transition-transform ease-out duration-150 transform hover:scale-105 hover:opacity-100 opacity-90" @click="toggle"> ', "", ' </button> <div x-show="open" x-transition.duration.400ms class="flex flex-col items-center mt-2"> ', ' <!-- Bot\xF3n de LUXURY con Dropdown --> <div x-data="dropdown" class="relative" @click.away="open = false"> <!-- Bot\xF3n principal con el t\xEDtulo del dropdown --> <button @click="toggle" type="button" class="relative hover:text-[#60C11C] px-4 py-2 rounded-md text-sm font-pattern font-light uppercase focus:outline-none inline-flex items-center text-left"> ', " ", ' </button> <!-- Men\xFA desplegable --> <div x-show="open" x-transition.duration.400ms class="relative"> ', ' </div> </div> <!-- Bot\xF3n de Transportes con Dropdown --> <div x-data="dropdown" class="relative" @click.away="open = false"> <!-- Bot\xF3n principal con el t\xEDtulo del dropdown --> <button @click="toggle" type="button" class="relative hover:text-[#60C11C] px-4 py-2 rounded-md text-sm font-pattern font-light uppercase focus:outline-none inline-flex items-center text-left"> ', " ", ' </button> <!-- Men\xFA desplegable --> <div x-show="open" x-transition.duration.400ms class="relative"> ', ' </div> </div> </div> </div> <!-- Bot\xF3n de About con Dropdown --> <div x-data="dropdown" class="text-center"> <button @click="toggle" type="button" class="relative hover:text-[#60C11C] px-4 py-2 rounded-md text-sm font-pattern font-light uppercase focus:outline-none inline-flex items-center text-center"> ', " ", ' </button> <!-- Men\xFA desplegable --> <div x-show="open" x-transition.duration.400ms class="relative"> ', ' </div> </div> <!-- Bot\xF3n de Contact Us --> <a href="/contacto" class="dark:text-white hover:text-[#60C11C] px-3 py-2 rounded-md text-sm font-pattern font-light uppercase focus:outline-none inline-flex items-center transition-transform ease-out duration-150 transform hover:scale-105 hover:opacity-100 opacity-90"> ', " </a> </div> </div> <script>\n  document.addEventListener('alpine:init', () => {\n      Alpine.data('dropdown', () => ({\n          open: false,\n\n          toggle() {\n              this.open = ! this.open\n          },\n      }))\n  })\n<\/script>"])), maybeRenderHead(), links.map(({ href, text }) => renderTemplate`<a class="dark:text-white hover:text-[#60C11C] font-pattern px-3 py-2 rounded-md text-sm font-light uppercase"${addAttribute(href, "href")}> ${text} </a>`), navItems.dropmenu[0].title, renderComponent($$result, "Icon", $$Icon, { "name": "arrow" }), dropdowns.map(({ href, text }) => renderTemplate`<a${addAttribute(href, "href")} class="dark:text-white font-pattern font-light uppercase lg:text-base text-sm leading-6 py-1 hover:text-orange-500"> ${text} </a>`), navItems.dropmenu[2].title, renderComponent($$result, "Icon", $$Icon, { "name": "arrow" }), dropluxury.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="block px-4 py-2 hover:text-[#60C11C] text-sm font-pattern font-light uppercase"> ${item.text} </a>`), navItems.dropmenu[3].title, renderComponent($$result, "Icon", $$Icon, { "name": "arrow" }), transportation.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="block px-4 py-2 hover:text-[#60C11C] text-sm font-pattern font-light uppercase"> ${item.text} </a>`), navItems.dropmenu[1].title, renderComponent($$result, "Icon", $$Icon, { "name": "arrow" }), dropabout.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="block px-4 py-2 dark:text-white hover:text-[#60C11C] text-sm font-pattern font-light uppercase"> ${item.text} </a>`), t("nav.contact"));
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/components/ui/Mobile.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const navItems = {
    links: [
      { href: P("/comprar"), text: t("nav.buy") },
      { href: P("/alquiler"), text: t("nav.rent") },
      { href: P("/blog"), text: "Blog" }
    ],
    dropmenu: [
      {
        title: t("nav.services"),
        dropdown: [
          { href: P("/gestion-de-propiedades"), text: t("nav.manage") }
        ]
      },
      {
        title: t("nav.about"),
        dropdown: [
          { href: P("/quienes-somos"), text: t("nav.who-we-are") },
          { href: P("/nuestro-equipo"), text: t("nav.our-team") }
        ]
      },
      {
        title: t("nav.concierge"),
        dropdown: [
          { href: P("/asistencia-diaria"), text: t("nav.daily") },
          { href: P("/planes-turisticos"), text: t("nav.tourist") },
          { href: P("/experiencias"), text: t("nav.experiences") }
        ]
      },
      {
        title: t("nav.transport"),
        dropdown: [
          { href: P("/transporte-terrestre"), text: t("nav.land") },
          { href: P("/transporte-nautico"), text: t("nav.nautical") }
        ]
      }
    ]
  };
  const links = navItems.links;
  const dropdowns = navItems.dropmenu[0].dropdown;
  const dropabout = navItems.dropmenu[1].dropdown;
  const dropluxury = navItems.dropmenu[2].dropdown;
  const transportation = navItems.dropmenu[3].dropdown;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<nav class="w-full bg-white dark:bg-slate-800 fixed shadow-md p-5 z-10"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between"> <!-- Logo - Izquierda en Desktop y Mobile --> <a', ' class="flex-shrink-0"> <img width="50" height="50" src="/favicon.svg" alt="Logo BR Solutions"> </a> <!-- Men\xFA de navegaci\xF3n - Centro en Desktop --> <div class="hidden md:flex md:flex-1 justify-center space-x-4"> ', ' <!-- Bot\xF3n de Servicios con Dropdown --> <div class="relative group mx-auto"> <!-- Bot\xF3n principal con el t\xEDtulo del dropdown --> <button type="button" class="dark:text-white hover:text-[#60C11C] px-3 py-2 rounded-md text-sm font-pattern font-light uppercase focus:outline-none inline-flex items-center transition-transform ease-out duration-150 transform hover:scale-105 hover:opacity-100 opacity-90"> ', " ", ' </button> <!-- Men\xFA desplegable --> <div class="absolute left-0 mt-2 w-48 bg-white dark:bg-slate-800 shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-300 ease-in-out"> ', ' <!-- Boton Dropdown de Conserjeria --> <div x-data="dropdown" class="relative" @click.away="open = false" @mouseleave="open = false"> <!-- Bot\xF3n principal con el t\xEDtulo del dropdown --> <button @click="toggle" type="button" class="relative hover:text-[#60C11C] px-4 py-2 rounded-md text-sm font-pattern font-light uppercase focus:outline-none inline-flex items-center text-left"> ', " ", ' </button> <!-- Men\xFA desplegable --> <div x-show="open" x-transition.duration.400ms class="relative"> ', ' </div> </div> <!-- Bot\xF3n de Transportes con Dropdown --> <div x-data="dropdown" class="relative" @click.away="open = false" @mouseleave="open = false"> <!-- Bot\xF3n principal con el t\xEDtulo del dropdown --> <button @click="toggle" type="button" class="relative hover:text-[#60C11C] px-4 py-2 rounded-md text-sm font-pattern font-light uppercase focus:outline-none inline-flex items-center text-left"> ', " ", ' </button> <!-- Men\xFA desplegable --> <div x-show="open" x-transition.duration.400ms class="relative"> ', ' </div> </div> </div> </div> <!-- Bot\xF3n de About con Dropdown --> <div class="relative group"> <!-- Bot\xF3n principal con el t\xEDtulo del dropdown --> <button type="button" class="dark:text-white hover:text-[#60C11C] px-3 py-2 rounded-md text-sm font-pattern font-light uppercase focus:outline-none inline-flex items-center transition-transform ease-out duration-150 transform hover:scale-105 hover:opacity-100 opacity-90"> ', " ", ' </button> <!-- Men\xFA desplegable --> <div class="absolute left-0 mt-2 w-48 bg-white dark:bg-slate-800 shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-300 ease-in-out"> ', " </div> </div> <!-- Bot\xF3n de Contact Us --> <a", ' class="dark:text-white hover:text-[#60C11C] px-3 py-2 rounded-md text-sm font-pattern font-light uppercase focus:outline-none inline-flex items-center transition-transform ease-out duration-150 transform hover:scale-105 hover:opacity-100 opacity-90"> ', ' </a> </div> <!-- Mobile Menu en Mobile --> <div class="md:hidden flex items-center"> ', " </div> </div> </div> </nav> <script>\n  document.addEventListener('alpine:init', () => {\n      Alpine.data('dropdown', () => ({\n          open: false,\n\n          toggle() {\n              this.open = ! this.open\n          },\n      }))\n  })\n<\/script>"])), maybeRenderHead(), addAttribute(P("/"), "href"), links.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="dark:text-white hover:text-[#60C11C]  font-pattern px-3 py-2 rounded-md text-sm font-light uppercase"> ${item.text} </a>`), navItems.dropmenu[0].title, renderComponent($$result, "Icon", $$Icon, { "name": "arrow" }), dropdowns.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="block px-4 py-2 dark:text-white hover:text-[#60C11C] text-sm font-pattern font-light uppercase"> ${item.text} </a>`), navItems.dropmenu[2].title, renderComponent($$result, "Icon", $$Icon, { "name": "arrow" }), dropluxury.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="px-4 py-2 hover:text-[#60C11C] text-sm font-pattern font-light uppercase"> ${item.text} </a>`), navItems.dropmenu[3].title, renderComponent($$result, "Icon", $$Icon, { "name": "arrow" }), transportation.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="block px-4 py-2 hover:text-[#60C11C] text-sm font-pattern font-light uppercase"> ${item.text} </a>`), navItems.dropmenu[1].title, renderComponent($$result, "Icon", $$Icon, { "name": "arrow" }), dropabout.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="block px-4 py-2 dark:text-white hover:text-[#60C11C] text-sm font-pattern font-light uppercase"> ${item.text} </a>`), addAttribute(P("/contacto"), "href"), t("nav.contact"), renderComponent($$result, "Mobile", $$Mobile, {}));
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/components/ui/Navbar.astro", void 0);

const $$Astro$5 = createAstro("https://br-wasi.vercel.app");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro("https://br-wasi.vercel.app");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", "</title><!-- Transition View -->", '<!-- Swiper CSS --><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"><!-- Alpine Plugins --><script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/focus@3.x.x/dist/cdn.min.js"><\/script><!-- Alpine Core --><script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.3/dist/cdn.min.js"><\/script><!-- List JS --><script defer src="//cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js"><\/script>'])), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ClientRouter", $$ClientRouter, {}));
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/components/layout/BaseHead.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$TopButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<button class="to-top" type="button"> ', ' </button> <script>\n    const btn = document.querySelector(".to-top");\n    btn.addEventListener("click", () => {\n        document.documentElement.scrollTo({\n            top: 0,\n            behavior: "smooth",\n        })\n    });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Icon", $$Icon, { "name": "arrow_vector", "width": 40, "height": 40, "class": "z-10 text-[#60C11C] text-3xl fixed bottom-5 left-5" }));
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/components/ui/TopButton.astro", void 0);

const $$Whatsapp = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="fixed bottom-5 right-5 z-50"> <a href="https://api.whatsapp.com/send/?phone=573242016401&text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios" target="_blank"> ${renderComponent($$result, "Icon", $$Icon, { "name": "whatsapp", "width": 50, "height": 50, "class": "text-green-600 animate-bounce" })} </a> </div>`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/components/ui/Whatsapp.astro", void 0);

const interpolate = (i18nKey, referenceString, namespace = null) => {
  const localizedString = t(i18nKey, { ns: namespace });
  if (localizedString === i18nKey) {
    console.warn(`WARNING(astro-i18next): missing translation key ${i18nKey}.`);
    return referenceString;
  }
  const tagsRegex = /<([\w\d]+)([^>]*)>/gi;
  const referenceStringMatches = referenceString.match(tagsRegex);
  if (!referenceStringMatches) {
    console.warn(
      "WARNING(astro-i18next): default slot does not include any HTML tag to interpolate! You should use the `t` function directly."
    );
    return localizedString;
  }
  const referenceTags = [];
  referenceStringMatches.forEach((tagNode) => {
    const [, name, attributes] = tagsRegex.exec(tagNode);
    referenceTags.push({ name, attributes });
    tagsRegex.exec("");
  });
  let interpolatedString = localizedString;
  for (let index = 0; index < referenceTags.length; index++) {
    const referencedTag = referenceTags[index];
    interpolatedString = interpolatedString.replaceAll(
      `<${index}>`,
      `<${referencedTag.name}${referencedTag.attributes}>`
    );
    interpolatedString = interpolatedString.replaceAll(
      `</${index}>`,
      `</${referencedTag.name}>`
    );
  }
  return interpolatedString;
};
const createReferenceStringFromHTML = (html) => {
  const allowedTags = ["strong", "br", "em", "i", "b"];
  let forbiddenStrings = [];
  if (i18next.options) {
    forbiddenStrings = [
      "keySeparator",
      "nsSeparator",
      "pluralSeparator",
      "contextSeparator"
    ].map((key) => {
      return {
        key,
        str: i18next.options[key]
      };
    }).filter(function(val) {
      return typeof val !== "undefined";
    });
  }
  const tagsRegex = /<([\w\d]+)([^>]*)>/gi;
  const referenceStringMatches = html.match(tagsRegex);
  if (!referenceStringMatches) {
    console.warn(
      "WARNING(astro-i18next): default slot does not include any HTML tag to interpolate! You should use the `t` function directly."
    );
    return html;
  }
  const referenceTags = [];
  referenceStringMatches.forEach((tagNode) => {
    const [, name, attributes] = tagsRegex.exec(tagNode);
    referenceTags.push({ name, attributes });
    tagsRegex.exec("");
  });
  let sanitizedString = html.replace(/\s+/g, " ").trim();
  for (let index = 0; index < referenceTags.length; index++) {
    const referencedTag = referenceTags[index];
    if (allowedTags.includes(referencedTag.name) && referencedTag.attributes.trim().length === 0) {
      continue;
    }
    sanitizedString = sanitizedString.replaceAll(
      new RegExp(`<${referencedTag.name}[^>]*?\\s*\\/>`, "gi"),
      `<${index}/>`
    );
    sanitizedString = sanitizedString.replaceAll(
      `<${referencedTag.name}${referencedTag.attributes}>`,
      `<${index}>`
    );
    sanitizedString = sanitizedString.replaceAll(
      `</${referencedTag.name}>`,
      `</${index}>`
    );
  }
  for (let index = 0; index < forbiddenStrings.length; index++) {
    const { key, str } = forbiddenStrings[index];
    if (sanitizedString.includes(str)) {
      console.warn(
        `WARNING(astro-i18next): "${str}" was found in a <Trans> translation key, but it is also used as ${key}. Either explicitly set an i18nKey or change the value of ${key}.`
      );
    }
  }
  return sanitizedString;
};

const $$Astro$3 = createAstro("https://br-wasi.vercel.app");
const $$Trans = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Trans;
  const { i18nKey, ns } = Astro2.props;
  const referenceString = await Astro2.slots.render("default");
  let key;
  if (typeof i18nKey === "string") {
    key = i18nKey;
  } else {
    key = createReferenceStringFromHTML(referenceString);
  }
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(interpolate(key, referenceString, ns))}` })}`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/node_modules/astro-i18next/src/components/Trans.astro", void 0);

const $$Astro$2 = createAstro("https://br-wasi.vercel.app");
const $$LanguageSelector = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LanguageSelector;
  const supportedLanguages = i18next.languages;
  const currentLanguage = i18next.language;
  const { pathname } = Astro2.url;
  const { showFlag = false, languageMapping, ...attributes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<select onchange="location = this.value;"${spreadAttributes(attributes)}> ${supportedLanguages.map((supportedLanguage) => {
    let value = P(pathname, supportedLanguage);
    const flag = showFlag ? localeEmoji(supportedLanguage) + " " : "";
    let nativeName = "";
    if (languageMapping && languageMapping.hasOwnProperty(supportedLanguage)) {
      nativeName = languageMapping[supportedLanguage];
    } else {
      nativeName = ISO6991.getNativeName(supportedLanguage);
    }
    const label = flag + nativeName;
    return renderTemplate`<option${addAttribute(value, "value")}${addAttribute(supportedLanguage === currentLanguage, "selected")}> ${label} </option>`;
  })} </select>`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/node_modules/astro-i18next/src/components/LanguageSelector.astro", void 0);

const $$Astro$1 = createAstro("https://br-wasi.vercel.app");
const $$HeadHrefLangs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeadHrefLangs;
  const supportedLanguages = i18next.languages;
  const currentUrl = Astro2.url.href;
  return renderTemplate`${supportedLanguages.map((supportedLanguage) => renderTemplate`<link rel="alternate"${addAttribute(supportedLanguage, "hreflang")}${addAttribute(T(currentUrl, supportedLanguage), "href")}>`)}`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/node_modules/astro-i18next/src/components/HeadHrefLangs.astro", void 0);

const $$LanguagePicker = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LanguageSelector", $$LanguageSelector, { "showFlag": true, "class": "bg-white dark:text-white dark:bg-slate-800 fixed right-4 top-1/4 -translate-y-20 flex flex-col text-sm rounded-md z-10" })}`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/components/LanguagePicker.astro", void 0);

const $$Astro = createAstro("https://br-wasi.vercel.app");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "Basehead", $$BaseHead, { "title": title })}${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderComponent($$result, "LanguagePicker", $$LanguagePicker, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "TopButton", $$TopButton, {})} ${renderComponent($$result, "Whatsapp", $$Whatsapp, {})} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Icon as a };
