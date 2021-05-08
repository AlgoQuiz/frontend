<template>
  <PrismEditor
    class="code-editor"
    :highlight="highlighter"
    line-numbers
    :value="value"
    @input="handleInput"
  />
</template>

<script>
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css' // import the styles somewhere

import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css' // import syntax highlighting styles

export default {
  components: {
    PrismEditor,
  },

  props: {
    value: {
      type: String,
      required: true,
    },
  },

  methods: {
    highlighter(code) {
      return highlight(code, languages.js)
    },

    handleInput(value) {
      this.$emit('input', value)
    },
  },
}
</script>

<style>
.code-editor {
  background: #ededed;

  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

.prism-editor__textarea:focus {
  outline: none;
}
</style>
