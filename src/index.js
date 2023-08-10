import fontoxpath from 'fontoxpath';

const queries = ["//div", "//*[name()='div']"]

window.onload = function() {
    for (const query of queries) {
        const matchedElems = fontoxpath.evaluateXPathToNodes(query, document, null, null, {
            language: fontoxpath.evaluateXPath.XQUERY_3_1_LANGUAGE
        });
    console.log(`Matched elements for ${query}: `, matchedElems);
}}

  