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
  default: () => Index_home
});
module.exports = __toCommonJS(stdin_exports);
var import_index_ebf9217c = require("../../_app/immutable/chunks/index-ebf9217c.js");
var import_home_hero_dino_game_91c58098 = require("../../_app/immutable/chunks/home.hero.dino-game-91c58098.js");
var import_transition_row_fead0798 = require("../../_app/immutable/chunks/transition-row-fead0798.js");
const subscriber_queue = [];
function writable(value, start = import_index_ebf9217c.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_ebf9217c.b)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = import_index_ebf9217c.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_ebf9217c.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
const schedulerModalVisible = writable(false);
const videoModalVisible = writable(false);
const Form_input = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  let { placeholder } = $$props;
  let { type } = $$props;
  let { valid } = $$props;
  let { required } = $$props;
  let { validationExpression } = $$props;
  let { invalidExpMessage } = $$props;
  let { validExpMessage } = $$props;
  let { formValue } = $$props;
  let { labelStyling } = $$props;
  let { inputStyling } = $$props;
  let { messageStyling } = $$props;
  let message = validExpMessage;
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0)
    $$bindings.valid(valid);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.validationExpression === void 0 && $$bindings.validationExpression && validationExpression !== void 0)
    $$bindings.validationExpression(validationExpression);
  if ($$props.invalidExpMessage === void 0 && $$bindings.invalidExpMessage && invalidExpMessage !== void 0)
    $$bindings.invalidExpMessage(invalidExpMessage);
  if ($$props.validExpMessage === void 0 && $$bindings.validExpMessage && validExpMessage !== void 0)
    $$bindings.validExpMessage(validExpMessage);
  if ($$props.formValue === void 0 && $$bindings.formValue && formValue !== void 0)
    $$bindings.formValue(formValue);
  if ($$props.labelStyling === void 0 && $$bindings.labelStyling && labelStyling !== void 0)
    $$bindings.labelStyling(labelStyling);
  if ($$props.inputStyling === void 0 && $$bindings.inputStyling && inputStyling !== void 0)
    $$bindings.inputStyling(inputStyling);
  if ($$props.messageStyling === void 0 && $$bindings.messageStyling && messageStyling !== void 0)
    $$bindings.messageStyling(messageStyling);
  return `${type === "text" || type === null || type === "email" ? `<label${(0, import_index_ebf9217c.a)("class", labelStyling, 0)}><input type="${"text"}" minlength="${"2"}"${(0, import_index_ebf9217c.a)("placeholder", placeholder, 0)}${(0, import_index_ebf9217c.a)("class", inputStyling, 0)}${(0, import_index_ebf9217c.a)("value", formValue, 0)}>
		<span${(0, import_index_ebf9217c.a)("class", messageStyling, 0)}>${(0, import_index_ebf9217c.e)(message)}\xA0</span></label>` : `${type === "phone" ? `<label${(0, import_index_ebf9217c.a)("class", labelStyling, 0)}><input${(0, import_index_ebf9217c.a)("value", formValue, 0)} type="${"text"}" minlength="${"2"}"${(0, import_index_ebf9217c.a)("placeholder", placeholder, 0)}${(0, import_index_ebf9217c.a)("class", inputStyling, 0)}>
		<span${(0, import_index_ebf9217c.a)("class", messageStyling, 0)}>${(0, import_index_ebf9217c.e)(message)}\xA0</span></label>` : `${type === "text-area" ? `<label${(0, import_index_ebf9217c.a)("class", labelStyling, 0)}><textarea type="${"text"}" minlength="${"2"}"${(0, import_index_ebf9217c.a)("placeholder", placeholder, 0)}${(0, import_index_ebf9217c.a)("class", inputStyling, 0)}>${formValue || ""}</textarea>
		<span${(0, import_index_ebf9217c.a)("class", messageStyling, 0)}>${(0, import_index_ebf9217c.e)(message)}\xA0</span></label>` : ``}`}`}`;
});
const Form_styled_input = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  let { placeholder } = $$props;
  let { formValue } = $$props;
  let { type } = $$props;
  let { valid } = $$props;
  let invalidExpMessage = null;
  function getValidationExpression() {
    switch (type) {
      case "email":
        invalidExpMessage = "Please enter a valid email.";
        return new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
      case "phone":
        invalidExpMessage = "Please enter a valid phone number";
        return new RegExp(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/);
      default:
        return null;
    }
  }
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.formValue === void 0 && $$bindings.formValue && formValue !== void 0)
    $$bindings.formValue(formValue);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0)
    $$bindings.valid(valid);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${type === "email" || type === "phone" || type === "text" ? `${(0, import_index_ebf9217c.v)(Form_input, "Input").$$render(
      $$result,
      {
        labelStyling: "\n	flex\n	w-full \n	flex-col-reverse\n		",
        inputStyling: "\nbg-analogBlack-300/90\n		shadow-button\n		text-white\n		bg-transparent \n		border-form\n		rounded-md\n		placeholder:text-center \n		placehoder:text-lg\n		placeholder:text-white \n		focus:placeholder:text-transparent\n		h-16\n		text-center\n		peer\n		border-white\n		placeholder-shown:valid:border-white\n		placeholder-shown:valid:shadow-white/30\n		invalid:focus:border-warnYellow-100\n		invalid:focus:shadow-warnYellow-100/30\n		valid:border-successGreen-100\n		valid:shadow-successGreen-100/30 \n		invalid:border-villainRed-100 \n		invalid:shadow-villainRed-100/30",
        messageStyling: "\n		text-center\n		text-sm\n		py-2\n		peer-focus:peer-invalid:invisible\n		peer-invalid:text-villainRed-100\n		peer-valid:text-successGreen-100\n		peer-valid:visible\n		peer-placeholder-shown:peer-valid:invisible \n		peer-empty:peer-invalid:visible\n		",
        placeholder,
        invalidExpMessage,
        validationExpression: getValidationExpression(),
        required: true,
        validExpMessage: "\u2713",
        type,
        formValue,
        valid
      },
      {
        formValue: ($$value) => {
          formValue = $$value;
          $$settled = false;
        },
        valid: ($$value) => {
          valid = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${type === "text-area" ? `${(0, import_index_ebf9217c.v)(Form_input, "Input").$$render(
      $$result,
      {
        labelStyling: "\n		flex\n		w-full \n		flex-col-reverse\n		py-4\n		px-3",
        inputStyling: "\n		shadow-button\n		text-white\n		bg-transparent \n		border-form\n		rounded-md\n		placeholder:text-center \n		placehoder:text-lg\n		placeholder:text-white \n		focus:placeholder:text-transparent\n		h-16\n		peer\n		border-white\n		placeholder-shown:valid:border-white\n		placeholder-shown:valid:shadow-white/30\n		invalid:focus:border-warnYellow-100\n		invalid:focus:shadow-warnYellow-100/30\n		valid:border-successGreen-100\n		valid:shadow-successGreen-100/30 \n		invalid:border-villainRed-100 \n		invalid:shadow-villainRed-100/30\n		text-left\n		p-5\n		h-60\n		placeholder:text-center\n		placeholder:leading-[12rem]",
        messageStyling: "\n		text-center\n		text-sm\n		pb-2\n		peer-focus:peer-invalid:invisible\n		peer-invalid:text-villainRed-100\n		peer-valid:text-successGreen-100\n		peer-valid:visible\n		peer-placeholder-shown:peer-valid:invisible \n		peer-empty:peer-invalid:visible\n		",
        placeholder,
        required: true,
        validExpMessage: "\u2713",
        type,
        formValue,
        valid
      },
      {
        formValue: ($$value) => {
          formValue = $$value;
          $$settled = false;
        },
        valid: ($$value) => {
          valid = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`}`;
  } while (!$$settled);
  return $$rendered;
});
const Spinner = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  let { styles } = $$props;
  const spinnerStyles = `animate-spin ${styles}`;
  if ($$props.styles === void 0 && $$bindings.styles && styles !== void 0)
    $$bindings.styles(styles);
  return `<svg${(0, import_index_ebf9217c.a)("class", spinnerStyles, 0)} xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}"><circle class="${"opacity-25"}" cx="${"12"}" cy="${"12"}" r="${"10"}" stroke="${"currentColor"}" stroke-width="${"4"}"></circle><path class="${"opacity-75"}" fill="${"currentColor"}" d="${"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}"></path></svg>`;
});
const Home_contact_form = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  let formValid;
  let formValues = {
    name: { valid: false, value: "" },
    email: { valid: false, value: "" },
    message: { valid: false, value: "" }
  };
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    formValid = !Object.values(formValues).some(({ valid }) => valid === false);
    $$rendered = `<form class="${"group flex flex-col w-full"}"><div class="${"flex w-full flex-col md:flex-row justify-center items-center"}"><div class="${"px-2 w-full"}">${(0, import_index_ebf9217c.v)(Form_styled_input, "StyledInput").$$render(
      $$result,
      {
        placeholder: "Name",
        type: "text",
        formValue: formValues.name.value,
        valid: formValues.name.valid
      },
      {
        formValue: ($$value) => {
          formValues.name.value = $$value;
          $$settled = false;
        },
        valid: ($$value) => {
          formValues.name.valid = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
		<div class="${"px-2 w-full"}">${(0, import_index_ebf9217c.v)(Form_styled_input, "StyledInput").$$render(
      $$result,
      {
        placeholder: "Email",
        type: "email",
        formValue: formValues.email.value,
        valid: formValues.email.valid
      },
      {
        formValue: ($$value) => {
          formValues.email.value = $$value;
          $$settled = false;
        },
        valid: ($$value) => {
          formValues.email.valid = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>
	${(0, import_index_ebf9217c.v)(Form_styled_input, "StyledInput").$$render(
      $$result,
      {
        placeholder: "How can we help?",
        type: "text-area",
        formValue: formValues.message.value,
        valid: formValues.message.valid
      },
      {
        formValue: ($$value) => {
          formValues.message.value = $$value;
          $$settled = false;
        },
        valid: ($$value) => {
          formValues.message.valid = $$value;
          $$settled = false;
        }
      },
      {}
    )}
	${`${formValid ? `<div class="${"w-full flex justify-center items-center"}">${(0, import_index_ebf9217c.v)(import_home_hero_dino_game_91c58098.B, "Button").$$render(
      $$result,
      {
        type: "submit",
        styles: "transition-all\n			group-invalid:invisible\n			mx-auto\n			bg-successGreen-100/60\n			hover:bg-successGreen-100\n			shadow-successGreen-100/60 \n			hover:shadow-successGreen-100/90\n			mt-8 "
      },
      {},
      {
        default: () => {
          return `${`Send Message`}`;
        }
      }
    )}</div>` : ``}`}</form>`;
  } while (!$$settled);
  return $$rendered;
});
const Home_contact = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  return `<section id="${"contact"}"><div class="${"w-full relative bg-analogBlack-300 py-40"}"><div class="${"max-w-screen-md m-auto text-center"}"><h3 class="${"text-1xl md:text-4xl font-light pb-2 md:pb-5"}">Got questions? Let\u2019s talk.</h3>
			<h4 class="${"text-3xl md:text-6xl font-bold pb-3 md:pb-8"}">Send us a message</h4>
			${(0, import_index_ebf9217c.v)(Home_contact_form, "Form").$$render($$result, {}, {}, {})}</div></div></section>`;
});
const Home_hero_cta = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${(0, import_index_ebf9217c.a)("href", href, 0)}><button class="${"bg-jamAqua-100/50 hover:bg-jamAqua-100 shadow-jamAqua-100/30 hover:shadow-jamAqua-100/90 transition-all text-white text-base md:text-lg font-light w-10/12 md:w-auto max-w-xs md:max-w-none py-5 md:py-5 md:px-14 mb-3 md:mx-4"}">${slots.default ? slots.default({}) : ``}</button></a>`;
});
const Box_highlight_corner = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  let { yPosition } = $$props;
  let { xPosition } = $$props;
  let styles = "border-white/60 bg-analogBlack-300 border-1 absolute";
  if (yPosition === "top") {
    if (xPosition === "left") {
      styles += " h-2 md:h-4 w-2 md:w-4 -top-1 md:-top-2 -left-1 md:-left-2";
    } else {
      styles += " h-2 md:h-4 w-2 md:w-4 -top-1 md:-top-2 -right-1 md:-right-2";
    }
  } else {
    if (xPosition === "left") {
      styles += " h-2 md:h-4 w-2 md:w-4 -bottom-1 md:-bottom-2 -left-1 md:-left-2";
    } else {
      styles += " h-2 md:h-4 w-2 md:w-4 -bottom-1 md:-bottom-2 -right-1 md:-right-2";
    }
  }
  if ($$props.yPosition === void 0 && $$bindings.yPosition && yPosition !== void 0)
    $$bindings.yPosition(yPosition);
  if ($$props.xPosition === void 0 && $$bindings.xPosition && xPosition !== void 0)
    $$bindings.xPosition(xPosition);
  return `<span${(0, import_index_ebf9217c.a)("class", styles, 0)}></span>`;
});
const Box_highlight = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"relative w-fit mx-auto max-w-full px-4 md:px-9 border-white/60 border-1"}">${(0, import_index_ebf9217c.v)(Box_highlight_corner, "Corner").$$render($$result, { xPosition: "left", yPosition: "top" }, {}, {})}
	${(0, import_index_ebf9217c.v)(Box_highlight_corner, "Corner").$$render($$result, { xPosition: "right", yPosition: "top" }, {}, {})}
	${(0, import_index_ebf9217c.v)(Box_highlight_corner, "Corner").$$render($$result, { xPosition: "left", yPosition: "bottom" }, {}, {})}
	${(0, import_index_ebf9217c.v)(Box_highlight_corner, "Corner").$$render($$result, { xPosition: "right", yPosition: "bottom" }, {}, {})}
	${slots.default ? slots.default({}) : ``}</div>`;
});
const Home_hero_video_btn = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  return `<button class="${"group relative -right-4 bg-jamAqua-100/00 hover:bg-jamAqua-100 shadow-jamAqua-100/0 hover:shadow-jamAqua-100/90 transition-all text-white text-base md:text-lg font-light h-16 pr-14 pl-12 mt-6 md:my-0 mx-auto md:mx-14 "}"><span class="${"transition-all absolute flex justify-center items-center bg-jamAqua-100/50 group-hover:bg-jamAqua-100 w-8 h-16 top-0 rounded-tl-full rounded-bl-full -left-7"}"><span class="${"absolute flex justify-center items-center w-12 h-12 bg-white rounded-full left-2"}"><span class="${"relative border-triangle w-0 h-0 border-l-analogBlack-200 border-r-white/0 border-b-white/0 border-t-white/0 right-[-0.69rem]"}"></span></span></span>
	Watch Video
</button>`;
});
let cursorMs = 600;
const Type_writer = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  let currentMessage;
  let { data } = $$props;
  let messageIndex = 0;
  let letterIndex = 0;
  let deleting = false;
  const handleTyping = () => {
    if (deleting === false) {
      if (letterIndex === data[messageIndex].length) {
        deleting = true;
      } else {
        letterIndex++;
      }
    } else {
      if (letterIndex === 0) {
        deleting = false;
        if (messageIndex === data.length - 1) {
          messageIndex = 0;
        } else {
          messageIndex++;
        }
      } else {
        letterIndex--;
      }
    }
  };
  let typingInt;
  let cursorActive = true;
  const handleCursor = () => {
    if (letterIndex === data[messageIndex].length) {
      cursorActive = !cursorActive;
    } else {
      cursorActive = true;
    }
  };
  let clearCursor;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  currentMessage = letterIndex === 0 ? "" : data[messageIndex].slice(0, letterIndex);
  {
    {
      clearInterval(typingInt);
      if (letterIndex === data[messageIndex].length) {
        typingInt = setInterval(handleTyping, 3e3);
      } else {
        if (deleting) {
          typingInt = setInterval(handleTyping, Math.random() * (90 - 80) + 80);
        } else {
          typingInt = setInterval(handleTyping, Math.random() * (160 - 80) + 80);
        }
      }
    }
  }
  {
    {
      clearInterval(clearCursor);
      clearCursor = setInterval(handleCursor, cursorMs);
    }
  }
  return `<div class="${"relative w-fit mx-auto pb-1 flex justify-center items-center"}"><span class="${"w-auto"}">${(0, import_index_ebf9217c.e)(currentMessage)}\xA0
		${cursorActive ? `<span class="${"font-thin absolute -ml-2 md:-ml-5"}">|</span>` : ``}</span></div>`;
});
const Home_hero = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  let messages = ["ranks higher.", "loads faster.", "looks better.", "wins more sales."];
  return `<div class="${"z-0 relative bg-analogBlack-300 w-full h-auto md:h-screen md:min-h-hero bg-gameGrid"}"><div class="${"relative -top-6 container py-40 px-2 mx-auto flex justify-center items-center h-full flex-col text-center max-w-3xl"}"><h1 class="${"text-3xl sm:text-5xl md:text-7xl font-bold leading-normal md:leading-snug sm:leading-normal pb-9"}">Get a website that<br>
			${(0, import_index_ebf9217c.v)(Box_highlight, "BoxHighlight").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_index_ebf9217c.v)(Type_writer, "TypeWriter").$$render($$result, { data: messages }, {}, {
        default: () => {
          return `ranks higher`;
        }
      })}`;
    }
  })}</h1>
		<h2 class="${"leading-xl md:leading-xl text-base md:text-lg font-light font-body"}">We\u2019re a web design and development agency on a mission to defend businesses from cyberspace
			dinosaurs and feed starving children. Book a call and get a free site audit.
		</h2>
		<div class="${"container relative flex justify-center flex-col md:flex-row pt-12"}"><span>${(0, import_index_ebf9217c.v)(Home_hero_cta, "Cta").$$render($$result, { href: "/", color: "jamAqua-100" }, {}, {
    default: () => {
      return `Book A Call`;
    }
  })}</span>
			<span>${(0, import_index_ebf9217c.v)(Home_hero_video_btn, "VideoBtn").$$render($$result, { href: "/", color: "jamAqua-100" }, {}, {
    default: () => {
      return `Watch Video`;
    }
  })}</span></div></div>
	${(0, import_index_ebf9217c.v)(import_home_hero_dino_game_91c58098.H, "DinoGame").$$render($$result, { ai: true }, {}, {})}
	${(0, import_index_ebf9217c.v)(import_transition_row_fead0798.T, "Transition").$$render($$result, {}, {}, {})}</div>`;
});
const Modal_container = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  let { store } = $$props;
  let active;
  store.subscribe((value) => {
    active = value;
  });
  if ($$props.store === void 0 && $$bindings.store && store !== void 0)
    $$bindings.store(store);
  return `${active ? `<div class="${"z-40 flex justify-center items-center h-screen w-screen fixed max-h-screen overflow-y-scroll bg-analogBlack-300/95"}"><div class="${"absolute top-7 left-7"}"><button class="${"text-white shadow-none"}">Close</button></div>
		<div class="${"h-full py-12 w-auto"}">${slots.default ? slots.default({}) : ``}</div></div>` : ``}`;
});
const buttonStyles = "transition-all shadow-transparent border-1 justify-center items-center text-base font-light w-10/12 py-2 my-2 rounded-sm";
const Modal_scheduler_calendar = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  let { clientTimes } = $$props;
  let { selectedTime } = $$props;
  let { page } = $$props;
  if ($$props.clientTimes === void 0 && $$bindings.clientTimes && clientTimes !== void 0)
    $$bindings.clientTimes(clientTimes);
  if ($$props.selectedTime === void 0 && $$bindings.selectedTime && selectedTime !== void 0)
    $$bindings.selectedTime(selectedTime);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  return `<div class="${"flex flex-col justify-center items-center h-auto md:h-full max-w-lg mx-auto"}"><div class="${"flex flex-col md:flex-row justify-center items-center "}">${(0, import_index_ebf9217c.d)(Object.keys(clientTimes), (clientTimeKey) => {
    return `<div class="${"flex items-center flex-col w-32"}"><p class="${"text-xl text-white pb-1"}">${(0, import_index_ebf9217c.e)(clientTimes[clientTimeKey].day)}</p>
				<p class="${"text-sm text-white pb-3"}">${(0, import_index_ebf9217c.e)(clientTimes[clientTimeKey].longMonth + " " + clientTimes[clientTimeKey].singleDate)}</p>
				${(0, import_index_ebf9217c.d)(clientTimes[clientTimeKey].times, (time, i) => {
      return `${i < 4 ? `<button${(0, import_index_ebf9217c.a)(
        "class",
        selectedTime === time ? buttonStyles + " text-successGreen-100 border-successGreen-100 bg-analogBlack-300" : buttonStyles + " text-white border-white hover:bg-white/5 bg-analogBlack-300/90",
        0
      )}>${(0, import_index_ebf9217c.e)(time.standardTime)}${(0, import_index_ebf9217c.e)(time.amPm)}</button>` : ``}`;
    })}
			</div>`;
  })}</div>
	<div class="${"h-32 mb-12"}">${selectedTime ? `<div class="${"flex flex-col justify-center items-center w-full"}"><p class="${"text-white text-center pb-9 pt-6"}">${(0, import_index_ebf9217c.e)(selectedTime.day)}
					${(0, import_index_ebf9217c.e)(selectedTime.longMonth)}
					${(0, import_index_ebf9217c.e)(selectedTime.singleDate)}
					@ ${(0, import_index_ebf9217c.e)(selectedTime.standardTime)}${(0, import_index_ebf9217c.e)(selectedTime.amPm)}</p>
				<span>${(0, import_index_ebf9217c.v)(import_home_hero_dino_game_91c58098.B, "Button").$$render(
    $$result,
    {
      styles: "bg-successGreen-100/80 hover:bg-successGreen-100 shadow-successGreen-100/50 hover:shadow-successGreen-100"
    },
    {},
    {
      default: () => {
        return `Next`;
      }
    }
  )}</span></div>` : ``}</div></div>`;
});
const Modal_scheduler_error = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"h-full flex justify-center items-center max-w-xl px-5 "}"><p class="${"text-white text-xl md:text-3xl text-center font-light leading-relaxed md:leading-relaxed"}">${slots.default ? slots.default({}) : ``}</p></div>`;
});
const scheduleMax = 13;
function validateAuth(auth) {
  const now = new Date();
  if (auth) {
    console.log("auth found in storage");
    if (now.getTime() > auth.ttl) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}
async function refreshToken() {
  const now = new Date();
  let auth = JSON.parse(window.localStorage.getItem("auth"));
  let valid = validateAuth(auth);
  if (valid) {
    return true;
  }
  if (!valid && auth) {
    window.localStorage.removeItem("auth");
  }
  if (!window.localStorage.getItem("auth")) {
    const res = await fetch("/api/auth");
    const data = await res.json();
    if (data == null ? void 0 : data.access_token) {
      window.localStorage.setItem("auth", JSON.stringify({
        ttl: now.getTime() + 3e6,
        token: data.access_token
      }));
      return true;
    } else {
      return false;
    }
  }
}
const Modal_scheduler = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  let formValid;
  let loading = false;
  let page = 1;
  let errorMessage = null;
  let dates = new Array(scheduleMax);
  let queries = new Array(scheduleMax);
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let clientTimes = {};
  let selectedTime = null;
  let formError = null;
  let formValues = {
    name: { valid: false, value: "" },
    email: { valid: false, value: "" },
    phone: { valid: false, value: "" }
  };
  async function addToClientTimes(date, times) {
    times.forEach((time) => {
      const jamsite = new Date(
        date.toLocaleString("en-US", { dateStyle: "full" }) + ` ${time}`
      );
      const [day, longMonth, singleDate, year, standardTime, amPm] = jamsite.toLocaleString("en-US", {
        timeZone,
        dateStyle: "full",
        timeStyle: "short",
        hourCycle: "h12"
      }).replaceAll(",", "").split(" ").filter((a) => a !== "at");
      const [qmonth, qdate, qyear, militaryTime] = jamsite.toLocaleString("en-US", {
        timeZone,
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hourCycle: "h24"
      }).replaceAll(",", "").split(" ");
      const query = `${qdate}-${qmonth}-${qyear} ${militaryTime}:00`;
      const timeObj = {
        day,
        longMonth,
        singleDate,
        year,
        qmonth,
        qdate,
        qyear,
        standardTime,
        amPm,
        militaryTime,
        query
      };
      const dateKey = `${qmonth}${qdate}${qyear}`;
      if (clientTimes[dateKey]) {
        clientTimes[dateKey].times.push(timeObj);
      } else {
        clientTimes[dateKey] = {
          day,
          longMonth,
          singleDate,
          year,
          qmonth,
          qdate,
          qyear,
          times: [timeObj]
        };
      }
    });
  }
  async function generateDays() {
    var _a, _b, _c;
    loading = true;
    const now = new Date();
    let storedTimes = JSON.parse(window.localStorage.getItem("clientTimes"));
    console.log("stored items", storedTimes);
    if (storedTimes && storedTimes.clientTimes) {
      if (storedTimes.ttl < now.getTime() || Object.keys(storedTimes.clientTimes).length < 1) {
        console.log("time exceeded for client times or there are no times saved");
        window.localStorage.removeItem("clientTimes");
      } else {
        console.log("times found in storage");
        clientTimes = storedTimes.clientTimes;
        loading = false;
        return;
      }
    }
    const tokenOk = await refreshToken();
    if (!tokenOk) {
      loading = false;
      errorMessage = "Oops! It looks like we are too busy right now to fulfill your request! Please try again in a few minutes.";
      console.log("auth not found in storage after api call");
      loading = false;
      return;
    }
    for (let i = 0; i < scheduleMax; i++) {
      let date = new Date();
      date.setDate(date.getDate() + 2 + i);
      dates[i] = date;
      queries[i] = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    }
    if (window.localStorage.getItem("auth")) {
      console.log("auth found, now getting times");
      for (let i = 0; i < queries.length; i++) {
        if (Object.keys(clientTimes).length >= 4) {
          console.log("client times length is greater than 4");
          break;
        } else {
          try {
            let auth = JSON.parse(window.localStorage.getItem("auth"));
            let params = new URLSearchParams({ date: queries[i], token: auth.token });
            const res = await fetch("/api/get-schedule?" + params, {
              method: "GET"
            });
            const data = await res.json();
            console.log(data, "this is the time data");
            if (((_c = (_b = (_a = data == null ? void 0 : data.response) == null ? void 0 : _a.returnvalue) == null ? void 0 : _b.data) == null ? void 0 : _c.length) > 1) {
              console.log("adding times fechted to client times obj", data);
              addToClientTimes(dates[i], data.response.returnvalue.data);
            }
          } catch (err) {
            console.error(err);
          }
        }
      }
      if (clientTimes.length < 1) {
        loading = false;
        errorMessage = "It looks like we are all booked for the next two weeks! Try sending us a message instead and we will get back to you as soon as we can.";
      } else {
        window.localStorage.setItem("clientTimes", JSON.stringify({
          clientTimes,
          ttl: now.getTime() + 18e5
        }));
        errorMessage = null;
        loading = false;
        console.log(clientTimes);
        console.log("client times loaded from api");
      }
    }
  }
  schedulerModalVisible.subscribe((value) => {
    if (value === true) {
      generateDays();
    }
  });
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    formValid = !Object.values(formValues).some(({ valid }) => valid === false);
    $$rendered = `${(0, import_index_ebf9217c.v)(Modal_container, "Modal").$$render($$result, { store: schedulerModalVisible }, {}, {
      default: () => {
        return `${loading && !formValid ? `<div class="${"h-full flex justify-center items-center"}">${(0, import_index_ebf9217c.v)(Spinner, "Spinner").$$render($$result, { styles: "w-16 h-16 text-white" }, {}, {})}</div>` : `${errorMessage ? `${(0, import_index_ebf9217c.v)(Modal_scheduler_error, "Error").$$render($$result, {}, {}, {
          default: () => {
            return `${(0, import_index_ebf9217c.e)(errorMessage)}`;
          }
        })}` : `${clientTimes && page === 1 ? `${(0, import_index_ebf9217c.v)(Modal_scheduler_calendar, "Calendar").$$render(
          $$result,
          { page, clientTimes, selectedTime },
          {
            page: ($$value) => {
              page = $$value;
              $$settled = false;
            },
            clientTimes: ($$value) => {
              clientTimes = $$value;
              $$settled = false;
            },
            selectedTime: ($$value) => {
              selectedTime = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : `${clientTimes && page === 2 && selectedTime ? `<div class="${"flex flex-col w-full md:w-96 mx-auto h-full justify-center items-center px-3"}"><div class="${"flex flex-row w-full justify-start items-center"}"><button class="${"text-white border-1 border-white shadow-transparent px-2 pb-1 pt-1.5 hover:bg-white/10 transition-all mr-6"}">\u21B5</button>
				<p class="${"text-white font-semibold text-sm md:text-lg text-center"}">${(0, import_index_ebf9217c.e)(selectedTime.day)}
					${(0, import_index_ebf9217c.e)(selectedTime.longMonth)}
					${(0, import_index_ebf9217c.e)(selectedTime.singleDate)}
					@ ${(0, import_index_ebf9217c.e)(selectedTime.standardTime)}${(0, import_index_ebf9217c.e)(selectedTime.amPm)}</p></div>
			<form class="${"group w-full"}">${(0, import_index_ebf9217c.v)(Form_styled_input, "StyledInput").$$render(
          $$result,
          {
            placeholder: "Name",
            type: "text",
            formValue: formValues.name.value,
            valid: formValues.name.valid
          },
          {
            formValue: ($$value) => {
              formValues.name.value = $$value;
              $$settled = false;
            },
            valid: ($$value) => {
              formValues.name.valid = $$value;
              $$settled = false;
            }
          },
          {}
        )}
				${(0, import_index_ebf9217c.v)(Form_styled_input, "StyledInput").$$render(
          $$result,
          {
            placeholder: "Email",
            type: "email",
            formValue: formValues.email.value,
            valid: formValues.email.valid
          },
          {
            formValue: ($$value) => {
              formValues.email.value = $$value;
              $$settled = false;
            },
            valid: ($$value) => {
              formValues.email.valid = $$value;
              $$settled = false;
            }
          },
          {}
        )}
				${(0, import_index_ebf9217c.v)(Form_styled_input, "StyledInput").$$render(
          $$result,
          {
            placeholder: "Phone",
            type: "phone",
            formValue: formValues.phone.value,
            valid: formValues.phone.valid
          },
          {
            formValue: ($$value) => {
              formValues.phone.value = $$value;
              $$settled = false;
            },
            valid: ($$value) => {
              formValues.phone.valid = $$value;
              $$settled = false;
            }
          },
          {}
        )}
				<div class="${"relative w-full h-40 mb-12 pt-5 mx-auto flex flex-col justify-center items-center"}">${`${formValid && !formError ? `<span class="${"absolute"}">${(0, import_index_ebf9217c.v)(import_home_hero_dino_game_91c58098.B, "Button").$$render(
          $$result,
          {
            type: "submit",
            styles: "transition-all\n						group-invalid:invisible\n						mx-auto\n						bg-successGreen-100/60\n						hover:bg-successGreen-100\n						shadow-successGreen-100/60 \n						hover:shadow-successGreen-100/90"
          },
          {},
          {
            default: () => {
              return `${loading ? `${(0, import_index_ebf9217c.v)(Spinner, "Spinner").$$render($$result, { styles: "-ml-1 mr-3 h-5 w-5 text-white" }, {}, {})}
									Please wait...` : `Book Meeting`}`;
            }
          }
        )}</span>` : ``}`}</div></form></div>` : `${(0, import_index_ebf9217c.v)(Modal_scheduler_error, "Error").$$render($$result, {}, {}, {
          default: () => {
            return `It looks like there was a problem getting our schedule, please fill out our contact form.`;
          }
        })}`}`}`}`}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const Modal_video = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_ebf9217c.v)(Modal_container, "Modal").$$render($$result, { store: videoModalVisible }, {}, {
    default: () => {
      return `<div class="${"w-screen flex flex-col justify-center items-center h-full md:h-full max-w-3xl mx-auto pt-4"}"><div class="${"w-full h-4/6 max-h-[435px]"}"><iframe width="${"100%"}" height="${"100%"}" src="${"https://www.youtube.com/embed/sxrBUcUr3R0?autoplay=1"}" title="${"Video"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen autoplay></iframe></div></div>`;
    }
  })}`;
});
const Animation_frame = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  let { frameHeight } = $$props;
  let { progress } = $$props;
  let frame;
  const frameStyles = `relative h-[${frameHeight}] bg-analogBlack-300`;
  if ($$props.frameHeight === void 0 && $$bindings.frameHeight && frameHeight !== void 0)
    $$bindings.frameHeight(frameHeight);
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  return `
<div${(0, import_index_ebf9217c.a)("class", frameStyles, 0)}${(0, import_index_ebf9217c.a)("this", frame, 0)}><div${(0, import_index_ebf9217c.a)("style", `opacity:${progress ? 1 : 0}`, 0)} class="${"sticky top-0"}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
function getStyleValue(progress, start, length, startValue, endValue) {
  let animationProgress = (progress - start) / length;
  if (animationProgress < 0) {
    return startValue;
  }
  if (animationProgress > 1) {
    return endValue;
  }
  let valueDistance = Math.abs(endValue - startValue);
  return startValue + animationProgress * valueDistance;
}
const Featured_icon_blurb = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  let { headline } = $$props;
  let { body } = $$props;
  let { iconSrc } = $$props;
  if ($$props.headline === void 0 && $$bindings.headline && headline !== void 0)
    $$bindings.headline(headline);
  if ($$props.body === void 0 && $$bindings.body && body !== void 0)
    $$bindings.body(body);
  if ($$props.iconSrc === void 0 && $$bindings.iconSrc && iconSrc !== void 0)
    $$bindings.iconSrc(iconSrc);
  return `
<div class="${"flex flex-col w-full py-7 md:px-4 text-white"}"><img${(0, import_index_ebf9217c.a)("src", iconSrc, 0)} class="${"w-12 pb-6 filter drop-shadow-icon"}">
	<h4 class="${"text-xl md:text-2xl pb-3"}">${(0, import_index_ebf9217c.e)(headline)}</h4>
	<p>${(0, import_index_ebf9217c.e)(body)}</p></div>`;
});
const Home_problem = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  let progress;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `
<section id="${"#problem"}">${(0, import_index_ebf9217c.v)(Animation_frame, "AnimationFrame").$$render(
      $$result,
      { frameHeight: "400vh", progress },
      {
        progress: ($$value) => {
          progress = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="${"bg-analogBlack-300 flex items-center justify-center py-9 h-[100vh]"}"><div class="${"mx-auto max-w-screen-2xl px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center items-center"}"><h3${(0, import_index_ebf9217c.a)("style", `opacity:${getStyleValue(progress, 0.15, 0.1, 0, 1)}`, 0)} class="${"relative md:top-12 leading-tight md:leading-tight whitespace-nowrap font-bold w-full text-4xl md:text-5xl pb-12 md:pr-9"}">The<span class="${"text-villainRed-300"}">problem </span><br>with the web<br> today...
				</h3>
				<div${(0, import_index_ebf9217c.a)("style", `opacity:${getStyleValue(progress, 0.3, 0.15, 0, 1)}`, 0)}>${(0, import_index_ebf9217c.v)(Featured_icon_blurb, "Blurb").$$render(
            $$result,
            {
              iconSrc: "/dummy-icon.svg",
              headline: "Site Speed",
              body: "We\u2019re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit."
            },
            {},
            {}
          )}</div>
				<div${(0, import_index_ebf9217c.a)("style", `opacity:${getStyleValue(progress, 0.55, 0.15, 0, 1)}`, 0)}>${(0, import_index_ebf9217c.v)(Featured_icon_blurb, "Blurb").$$render(
            $$result,
            {
              iconSrc: "/dummy-icon.svg",
              headline: "Scalability",
              body: "We\u2019re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit."
            },
            {},
            {}
          )}</div>
				<div${(0, import_index_ebf9217c.a)("style", `opacity:${getStyleValue(progress, 0.8, 0.15, 0, 1)}`, 0)}>${(0, import_index_ebf9217c.v)(Featured_icon_blurb, "Blurb").$$render(
            $$result,
            {
              iconSrc: "/dummy-icon.svg",
              headline: "Vendor Lockin",
              body: "We\u2019re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit."
            },
            {},
            {}
          )}</div></div></div>`;
        }
      }
    )}</section>`;
  } while (!$$settled);
  return $$rendered;
});
const Index_home = (0, import_index_ebf9217c.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" data-svelte="svelte-1238ufb"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin data-svelte="svelte-1238ufb"><link href="${"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Rubik:wght@300;400;500;700;800&display=swap"}" rel="${"stylesheet"}" data-svelte="svelte-1238ufb">`, ""}


${(0, import_index_ebf9217c.v)(Modal_video, "Video").$$render($$result, {}, {}, {})}
${(0, import_index_ebf9217c.v)(Modal_scheduler, "Scheduler").$$render($$result, {}, {}, {})}
${(0, import_index_ebf9217c.v)(Home_hero, "Hero").$$render($$result, {}, {}, {})}
${(0, import_index_ebf9217c.v)(Home_problem, "Problem").$$render($$result, {}, {}, {})}
${(0, import_index_ebf9217c.v)(Home_contact, "Contact").$$render($$result, {}, {}, {})}`;
});
