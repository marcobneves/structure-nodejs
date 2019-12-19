// Compiled using marko@4.18.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nodejs-part1$1.0.0/src/app/views/books/list/list.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><body>");

  component_globals_tag({}, out);

  out.w("<table id=\"books\"><thead><tr><td>ID</td><td>TITLE</td><td>PRICE</td><td>DESCRIPTION</td><td>ACTION</td></tr></thead><tbody>");

  var $for$0 = 0;

  marko_forEach(data.books, function(book) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr" +
      marko_attr("id", "livro_" + book.id) +
      "><td>" +
      marko_escapeXml(book.id) +
      "</td><td>" +
      marko_escapeXml(book.titulo) +
      "</td><td>" +
      marko_escapeXml(book.preco) +
      "</td><td>" +
      marko_escapeXml(book.descricao) +
      "</td><td><a href=\"#\"" +
      marko_attr("data-ref", "" + book.id) +
      " data-type=\"remove\">Remove</a></td><td><a" +
      marko_attr("href", "/book/form/" + book.id) +
      marko_attr("data-ref", "" + book.id) +
      " data-type=\"edit\">Edit</a></td></tr>");
  });

  out.w("</tbody></table><script src=\"/static/js/remove.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "20");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nodejs-part1$1.0.0/src/app/views/books/list/list.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
