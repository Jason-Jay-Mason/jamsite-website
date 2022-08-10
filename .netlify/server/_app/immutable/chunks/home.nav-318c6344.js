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
  H: () => Home_nav
});
module.exports = __toCommonJS(stdin_exports);
var import_index_ebf9217c = require("./index-ebf9217c.js");
let styles = "text-white/90 px-6 hover:text-white text-sm md:text:base";
const Home_nav_link = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { prefetch } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.prefetch === void 0 && $$bindings.prefetch && prefetch !== void 0)
    $$bindings.prefetch(prefetch);
  return `${prefetch ? `<a sveltekit:prefetch${(0, import_index_ebf9217c.a)("class", styles, 0)}${(0, import_index_ebf9217c.a)("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a>` : `<a${(0, import_index_ebf9217c.a)("class", styles, 0)}${(0, import_index_ebf9217c.a)("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a>`}`;
});
const Home_nav = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"z-40 absolute bg-analogBlack-300/60 w-full transition-all hover:bg-analogBlack-300"}"><div class="${"container max-w-screen-2xl mx-auto flex justify-between items-center py-4 px-4 md:px-12"}"><div class="${"flex items-center text-white"}"><a href="${"/"}"><img src="${"/jamsite-logo-v1.svg"}" class="${"w-32 md:w-36 mr-9"}"></a>
			<div class="${"hidden md:flex"}">
				
				</div></div>
		<div class="${"items-center md:flex"}"><span class="${"hidden md:block"}">${(0, import_index_ebf9217c.v)(Home_nav_link, "Link").$$render($$result, { href: "#contact" }, {}, {
    default: () => {
      return `Contact`;
    }
  })}</span>
			<button class="${"bg-white/0 hover:bg-white/10 ml-5 text-white border-1 border-white py-3 px-6 text-xs md:text-base shadow-button shadow-white/10 hover:shadow-white/10 transition-all"}">Book A Call</button></div></div></div>`;
});
