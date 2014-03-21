define(function (require, exports, module) {
  'use strict';

  var LanguageManager = brackets.getModule("language/LanguageManager");

  LanguageManager.defineLanguage("scheme", {
      name: "Scheme",
      mode: "scheme",
      fileExtensions: ["scm", "sch", "ss", "rkt"],
      blockComment: ["#|", "|#"],
      lineComment: [";"]
  });
});
