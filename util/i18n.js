const { Locale } = require("./util.js");
const { join } = require("path");
const i18n = require("i18n");

i18n.configure({
  locales: [
    "en",
    "ru"
  ],

  directory: join(__dirname, "..", "locales"),
  defaultLocale: "ru",
  retryInDefaultLocale: true,
  objectNotation: true,
  register: global,

  logWarnFn: function (msg) {
    console.log(msg);
  },

  logErrorFn: function (msg) {
    console.log(msg);
  },

  missingKeyFn: function (locale, value) {
    return value;
  },

  mustacheConfig: {
    tags: ["{{", "}}"],
    disable: false
  }
});

i18n.setLocale(Locale);

module.exports = i18n;