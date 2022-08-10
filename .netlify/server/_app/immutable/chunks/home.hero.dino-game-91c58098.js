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
  B: () => Button,
  H: () => Home_hero_dino_game
});
module.exports = __toCommonJS(stdin_exports);
var import_index_ebf9217c = require("./index-ebf9217c.js");
let buttonStyle = "flex transition-all justify-center items-center text-white text-base font-light py-6 w-fit px-14 mx-2 ";
const Button = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { href } = $$props;
  let { styles } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.styles === void 0 && $$bindings.styles && styles !== void 0)
    $$bindings.styles(styles);
  return `${href ? `<a${(0, import_index_ebf9217c.a)("href", href, 0)} preload><button${(0, import_index_ebf9217c.a)("class", buttonStyle + styles, 0)}>${slots.default ? slots.default({}) : ``}</button></a>` : `<button${(0, import_index_ebf9217c.a)("type", type, 0)}${(0, import_index_ebf9217c.a)("class", buttonStyle + styles, 0)}>${slots.default ? slots.default({}) : ``}</button>`}`;
});
const Home_hero_dino_game = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  let { ai } = $$props;
  let canvas;
  if ($$props.ai === void 0 && $$bindings.ai && ai !== void 0)
    $$bindings.ai(ai);
  return `<canvas class="${"hidden md:block -z-10 absolute top-0 w-full"}"${(0, import_index_ebf9217c.a)("this", canvas, 0)}></canvas>`;
});
