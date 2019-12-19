// Compiled using marko@4.18.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nodejs-part1$1.0.0/src/app/views/books/form/form.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><body>");

  component_globals_tag({}, out);

  out.w("<h1>Add books</h1><form action=\"/book\" method=\"post\">");

  if (data.book.id) {
    out.w("<div><input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" name=\"id\"" +
      marko_attr("value", "" + data.book.id) +
      "></div>");
  }

  out.w("<div><label>Title</label><input type=\"text\" name=\"title\" placeholder=\"Add Title\"" +
    marko_attr("value", "" + data.book.titulo) +
    "></div><div><label>Price</label><input type=\"text\" name=\"price\" placeholder=\"Add Price\"" +
    marko_attr("value", "" + data.book.preco) +
    "></div><div><label>Description</label><textarea name=\"description\"" +
    marko_attr("value", "" + data.book.descricao) +
    " rows=\"8\" cols=\"40\"></textarea></div><input type=\"submit\" value=\"Save book\"></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "17");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nodejs-part1$1.0.0/src/app/views/books/form/form.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
