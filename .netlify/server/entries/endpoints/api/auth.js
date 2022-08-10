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
  GET: () => GET
});
module.exports = __toCommonJS(stdin_exports);
async function getNewToken() {
  try {
    let url = "https://accounts.zoho.com/oauth/v2/token?";
    const params = new URLSearchParams({
      refresh_token: { "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true }.VITE_ZOHO_REFRESH_TOKEN,
      client_id: { "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true }.VITE_ZOHO_CLIENT_ID,
      client_secret: { "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true }.VITE_ZOHO_CLIENT_SECRET,
      grant_type: "refresh_token"
    });
    const res = await fetch(url + params, {
      method: "POST"
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}
async function GET() {
  try {
    const data = await getNewToken();
    return {
      status: 200,
      headers: {
        "access-control-allow-origin": "*"
      },
      body: data
    };
  } catch (err) {
    return {
      status: err.response.status,
      headers: {
        "access-control-allow-origin": "*"
      },
      body: "There was an issue with your request"
    };
  }
}
