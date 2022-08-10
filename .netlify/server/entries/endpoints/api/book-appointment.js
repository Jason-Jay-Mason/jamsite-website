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
  POST: () => POST
});
module.exports = __toCommonJS(stdin_exports);
async function POST({ request }) {
  const body = await request.json();
  try {
    const searchParams = new URLSearchParams({
      service_id: "4310677000000274004",
      staff_id: "4310677000000026017",
      from_time: body.from_time,
      time_zone: body.time_zone,
      customer_details: JSON.stringify(body.customer_details)
    });
    const url = "https://www.zohoapis.com/bookings/v1/json/appointment?";
    const res = await fetch(url + searchParams, {
      method: "POST",
      headers: {
        Authorization: "Zoho-oauthtoken " + body.token
      }
    });
    const data = await res.json();
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
