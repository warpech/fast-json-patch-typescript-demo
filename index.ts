
import * as jsonpatch from "fast-json-patch";

const document = { firstName: "Albert", contactDetails: { phoneNumbers: [] } };

const typedPatch = new Array<jsonpatch.Operation>({ op: "replace", path: "/firstName", value: "Joachim" });

const resultDocument = jsonpatch.applyPatch(document, typedPatch).newDocument;

console.log(resultDocument.firstName); // Joachim