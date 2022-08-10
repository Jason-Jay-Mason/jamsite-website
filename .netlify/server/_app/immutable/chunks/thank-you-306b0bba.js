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
  T: () => Thank_you
});
module.exports = __toCommonJS(stdin_exports);
var import_index_ebf9217c = require("./index-ebf9217c.js");
var import_footer_77d318f1 = require("./footer-77d318f1.js");
var import_home_hero_dino_game_91c58098 = require("./home.hero.dino-game-91c58098.js");
const Thank_you = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  let { message } = $$props;
  let { headline } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.headline === void 0 && $$bindings.headline && headline !== void 0)
    $$bindings.headline(headline);
  return `<div class="${"z-0 relative h-screen min-h-hero flex flex-col justify-end bg-analogBlack-300 bg-gameGrid"}">${`<div class="${"max-w-xl h-full text-center m-auto flex flex-col justify-center items-center"}"><h1 class="${"font-bold text-3xl md:text-6xl pb-6"}">${(0, import_index_ebf9217c.e)(headline)}</h1>
			<h2 class="${"pb-6 leading-xl md:leading-xl text-base md:text-lg font-light font-body"}">${(0, import_index_ebf9217c.e)(message)}
				<br>
				<span class="${"font-bold"}">PS...control the ship with the J, K, L, and A keys. </span>.
			</h2>
			<div class="${"flex justify-center items-center"}">${(0, import_index_ebf9217c.v)(import_home_hero_dino_game_91c58098.B, "Button").$$render(
    $$result,
    {
      href: "/",
      styles: "bg-jamAqua-100/50 hover:bg-jamAqua-100 shadow-jamAqua-100/30 hover:shadow-jamAqua-100/90 "
    },
    {},
    {
      default: () => {
        return `Back to home`;
      }
    }
  )}
				<span class="${"hidden md:block"}">${(0, import_index_ebf9217c.v)(import_home_hero_dino_game_91c58098.B, "Button").$$render(
    $$result,
    {
      styles: "bg-jamAqua-100/50 hover:bg-jamAqua-100 shadow-jamAqua-100/30 hover:shadow-jamAqua-100/90 "
    },
    {},
    {
      default: () => {
        return `Hide Message`;
      }
    }
  )}</span></div></div>`}
	${(0, import_index_ebf9217c.v)(import_home_hero_dino_game_91c58098.H, "DinoGame").$$render($$result, { ai: false }, {}, {})}
	${(0, import_index_ebf9217c.v)(import_footer_77d318f1.F, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
