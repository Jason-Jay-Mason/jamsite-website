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
  default: () => Thank_you
});
module.exports = __toCommonJS(stdin_exports);
var import_index_ebf9217c = require("../../_app/immutable/chunks/index-ebf9217c.js");
var import_footer_77d318f1 = require("../../_app/immutable/chunks/footer-77d318f1.js");
var import_thank_you_306b0bba = require("../../_app/immutable/chunks/thank-you-306b0bba.js");
var import_home_hero_dino_game_91c58098 = require("../../_app/immutable/chunks/home.hero.dino-game-91c58098.js");
const Thank_you = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_ebf9217c.v)(import_thank_you_306b0bba.T, "ThankYouPage").$$render(
    $$result,
    {
      message: "Thanks for contacting us, we will get back to you ASAP.",
      headline: "Right on!"
    },
    {},
    {}
  )}`;
});
