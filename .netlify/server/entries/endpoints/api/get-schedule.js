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
async function getDates(date, token) {
  try {
    let url = "https://www.zohoapis.com/bookings/v1/json/availableslots?";
    let params = new URLSearchParams({
      service_id: "4310677000000274004",
      staff_id: "4310677000000026017",
      selected_date: date
    });
    const res = await fetch(url + params, {
      method: "GET",
      headers: {
        Authorization: "Zoho-oauthtoken " + token
      }
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}
async function GET({ url }) {
  const date = url.searchParams.get("date");
  const token = url.searchParams.get("token");
  try {
    const data = await getDates(date, token);
    return {
      status: 200,
      headers: {
        "access-control-allow-origin": "*"
      },
      body: data
    };
  } catch (err) {
    return {
      status: 403,
      headers: {
        "access-control-allow-origin": "*"
      },
      body: err
    };
  }
}
