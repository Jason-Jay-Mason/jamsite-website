var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["dummy-icon.svg", "favicon.png", "game-grid.svg", "j-ship-2.svg", "j-ship.svg", "jamsite-logo-v1.svg", "jamsite-logo.svg", "laser.svg", "wix-raptor.svg", "wordpress-rex.svg"]),
  mimeTypes: { ".svg": "image/svg+xml", ".png": "image/png" },
  _: {
    entry: { "file": "_app/immutable/start-4503332c.js", "imports": ["_app/immutable/start-4503332c.js", "_app/immutable/chunks/index-930b4413.js", "_app/immutable/chunks/index-34e0645c.js", "_app/immutable/chunks/singletons-eca981c1.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js")))
    ],
    routes: [
      {
        type: "page",
        id: "@home",
        pattern: /^\/?$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [2, 3],
        b: [1]
      },
      {
        type: "page",
        id: "thank-you-booking",
        pattern: /^\/thank-you-booking\/?$/,
        names: [],
        types: [],
        path: "/thank-you-booking",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "thank-you",
        pattern: /^\/thank-you\/?$/,
        names: [],
        types: [],
        path: "/thank-you",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "endpoint",
        id: "api/get-schedule",
        pattern: /^\/api\/get-schedule\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/get-schedule.js")))
      },
      {
        type: "endpoint",
        id: "api/book-appointment",
        pattern: /^\/api\/book-appointment\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/book-appointment.js")))
      },
      {
        type: "endpoint",
        id: "api/auth",
        pattern: /^\/api\/auth\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/auth.js")))
      },
      {
        type: "page",
        id: "legal/privacy-policy",
        pattern: /^\/legal\/privacy-policy\/?$/,
        names: [],
        types: [],
        path: "/legal/privacy-policy",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        id: "legal/terms-of-service",
        pattern: /^\/legal\/terms-of-service\/?$/,
        names: [],
        types: [],
        path: "/legal/terms-of-service",
        shadow: null,
        a: [0, 7],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
