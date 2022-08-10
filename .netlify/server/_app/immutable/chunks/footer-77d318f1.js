var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  F: () => Footer
});
module.exports = __toCommonJS(stdin_exports);
var import_index_ebf9217c = require("./index-ebf9217c.js");
const app = "";
let styles = "text-white/90 py-2 md:py-0 lg:px-6 md:px-3  hover:text-white text-sm md:text-xs lg:text-sm";
const Footer_link = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { prefetch } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.prefetch === void 0 && $$bindings.prefetch && prefetch !== void 0)
    $$bindings.prefetch(prefetch);
  return `${prefetch ? `<a sveltekit:prefetch${(0, import_index_ebf9217c.a)("class", styles, 0)}${(0, import_index_ebf9217c.a)("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a>` : `<a${(0, import_index_ebf9217c.a)("class", styles, 0)}${(0, import_index_ebf9217c.a)("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a>`}`;
});
const Footer = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"py-14 px-4 w-full bg-analogBlack-300 text-center"}"><div class="${"container justify-between m-auto flex items-center flex-col md:flex-row p-4 max-w-screen-xl"}"><a href="${"/"}"><img src="${"/jamsite-logo-v1.svg"}" class="${"w-28 md:w-28 mr-9"}"></a>
		<div id="${"foor-links"}" class="${"flex items-center justify-center flex-col md:flex-row pb-10 md:p-0"}">${(0, import_index_ebf9217c.v)(Footer_link, "Link").$$render($$result, { href: "/#contact" }, {}, {
    default: () => {
      return `Contact Us`;
    }
  })}
			${(0, import_index_ebf9217c.v)(Footer_link, "Link").$$render($$result, { href: "/legal/privacy-policy" }, {}, {
    default: () => {
      return `Privacy Policy`;
    }
  })}
			${(0, import_index_ebf9217c.v)(Footer_link, "Link").$$render($$result, { href: "/legal/terms-of-service" }, {}, {
    default: () => {
      return `Terms of Service`;
    }
  })}</div>
		<p class="${"text-white text-sm md:text-xs lg:text-sm"}">All rights reserved - 2022 JamSite LLC</p></div></div>`;
});
