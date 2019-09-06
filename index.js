"use strict";
exports.__esModule = true;
var jsonpatch = require("fast-json-patch");
var document = { firstName: "Albert", contactDetails: { phoneNumbers: [] } };
var typedPatch = new Array({ op: "replace", path: "/firstName", value: "Joachim" });
var resultDocument = jsonpatch.applyPatch(document, typedPatch).newDocument;
console.log(resultDocument.firstName); // Joachim
