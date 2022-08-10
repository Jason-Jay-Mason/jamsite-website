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
  L: () => Legal
});
module.exports = __toCommonJS(stdin_exports);
var import_index_ebf9217c = require("./index-ebf9217c.js");
var import_footer_77d318f1 = require("./footer-77d318f1.js");
var import_home_nav_318c6344 = require("./home.nav-318c6344.js");
var import_transition_row_fead0798 = require("./transition-row-fead0798.js");
const Legal = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  let { h1 } = $$props;
  if ($$props.h1 === void 0 && $$bindings.h1 && h1 !== void 0)
    $$bindings.h1(h1);
  return `${(0, import_index_ebf9217c.v)(import_home_nav_318c6344.H, "Nav").$$render($$result, {}, {}, {})}
<div class="${"h-full bg-analogBlack-300 m-0 pb-20"}"><div class="${"bg-gameGrid py-32 md:pt-52 md:pb-30"}"><h1 class="${"text-center text-2xl md:text-5xl"}">${(0, import_index_ebf9217c.e)(h1)}</h1></div>
	${(0, import_index_ebf9217c.v)(import_transition_row_fead0798.T, "Transition").$$render($$result, {}, {}, {})}
	<div class="${"legal text-white max-w-screen-lg px-4 mx-auto"}">${slots.default ? slots.default({}) : ``}</div></div>
${(0, import_index_ebf9217c.v)(import_footer_77d318f1.F, "Footer").$$render($$result, {}, {}, {})}`;
});
