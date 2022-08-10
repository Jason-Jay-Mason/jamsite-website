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
  default: () => _layout_home
});
module.exports = __toCommonJS(stdin_exports);
var import_index_ebf9217c = require("../../_app/immutable/chunks/index-ebf9217c.js");
var import_footer_77d318f1 = require("../../_app/immutable/chunks/footer-77d318f1.js");
var import_home_nav_318c6344 = require("../../_app/immutable/chunks/home.nav-318c6344.js");
const _layout_home = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_ebf9217c.v)(import_home_nav_318c6344.H, "Nav").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
${(0, import_index_ebf9217c.v)(import_footer_77d318f1.F, "Footer").$$render($$result, {}, {}, {})}`;
});
