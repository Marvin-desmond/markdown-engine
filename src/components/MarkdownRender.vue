<template>
  <div class="home p-1 relative" style="height: 95vh; width: 100vw">
    <!-- Boundary defining writing board -->
    <div class="w-full sm:w-10/12 md:w-7/12 h-full" style="margin: 0px auto">
      <!-- Writing board -->
      <input
        type="button"
        value="Article"
        class="bg-gray-600 px-3 py-1 border text-white text-sm shadow rounded cursor-pointer focus:outline-none"
      />

      <div class="w-full border relative border-gray-500" style="height: 70vh">
        <textarea
          id="div1"
          class="h-full w-full bg-gray-100 border resize-none focus:outline-none p-3 relative"
          :class="toggle ? 'opacity-100 z-40' : 'opacity-0 z-0'"
          v-model="article"
        >
        </textarea>
        <div
          id="div2"
          class="h-full w-full bg-gray-100 absolute top-0 left-0 py-3 px-1 md:px-2 overflow-y-scroll text-left m-0"
          :class="toggle ? 'opacity-0 z-0' : 'opacity-100 z-40'"
          v-markdown
          :key="article"
        >
          {{ article }}
        </div>
      </div>
      <!-- End of writing board -->
      <input
        type="button"
        value="Preview"
        class="bg-gray-600 px-3 py-1 border text-white text-sm shadow rounded cursor-pointer focus:outline-none"
      />
      <div class="w-full flex p-0 overflow-y-hidden" style="height: 12vh">
        <div class="w-1/2">
          <textarea
            class="write h-full resize-none w-full border border-gray-500 focus:outline-none p-1 mr-1"
            ref="textareaEmoji"
            v-model="preview_article"
            @keydown.ctrl.enter="modify_article"
          >
          </textarea>
        </div>
        <div
          class="reveal h-full w-1/2 bg-gray-100 border border-gray-500"
          v-markdownPreview
          :key="preview_article"
          style="font-size: 13 px"
        >
          {{ preview_article }}
        </div>
      </div>
      <div class="flex justify-between w-1/2">
        <input
          type="button"
          value="Toggle"
          class="bg-gray-900 px-3 py-1 border text-white text-sm shadow rounded cursor-pointer focus:outline-none"
          @click="toggle = !toggle"
        />
        <input
          type="button"
          value="Add to Article"
          class="bg-gray-900 px-3 py-1 border text-white text-sm shadow rounded cursor-pointer focus:outline-none"
          @click="modify_article"
        />
      </div>
    </div>
    <!-- End of boundary defining writing board -->
    <!-- Help board -->
    <div class="absolute w-48 text-sm" style="top: 30px; right: 30px">
      <p>h1 : #[space]text</p>
      <p>h2 : ##[space]text</p>
      <p>h3 : ###[space]text</p>
      <p>h4 : ####[space]text</p>
      <p>h5 : #####[space]text</p>
      <p>h6 : ######[space]text</p>
      <p>p : @[space]text</p>
      <p>bold : _text_</p>
      <p>italics : *text*</p>
      <p>striekthrough : ~text~</p>
    </div>
    <!-- End of help board -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      preview_article: "",
      article: `
@ _bold_
@ *italics*
@ ~strikethrough~


# h1 heading
## h2 heading
### h3 heading
#### h4 heading
##### h5 heading
###### h6 heading
_~bold and strikethrough~_`,

      matching: false,
      toggle: false,
      result: "jello",
      note_id: null,
      appear: false,
    };
  },
  methods: {
    modify_article(e) {
      e.preventDefault();
      this.article += this.preview_article + "\n";
      this.preview_article = "";
    },
  },
  computed: {},
  watch: {
    article: function () {
      this.$nextTick(() => {
        var messageBody = document.querySelector("#div2");
        let a = messageBody.scrollHeight;
        messageBody.scrollTop = a;
      });
    },
  },
  mounted() {},
};
</script>

<style scoped></style>
