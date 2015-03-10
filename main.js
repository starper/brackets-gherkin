define(function (require, exports, module) {
  'use strict';

  var LanguageManager = brackets.getModule("language/LanguageManager");

  LanguageManager.defineLanguage("gherkin", {
    name: "Gherkin",
    mode: "gherkin",
    fileExtensions: ["feature"],
    lineComment: ["#", "#"]
  });
});
