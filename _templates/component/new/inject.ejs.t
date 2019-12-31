---
to: src/components/index.js
inject: true
skip_if: <%= name %>
append: true
eof_last: false
---
export <%= name %> from './<%= name %>/<%= name %>'
