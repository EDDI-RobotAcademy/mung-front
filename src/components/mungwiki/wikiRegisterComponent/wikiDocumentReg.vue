<template>
  <div class="grid justify-items-center">
    <p style="font-size: 15px; font-weight: bold">해당 견종에 대한 설명을 입력해주세요</p>
    <textarea
      id="wiki_document"
      v-model="wikiDocument"
      style="resize: none"
      class="wiki_document outline outline-1 rounded-3xl px-2 py-1"
      rows="10"
      cols="50"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'wikiDocumentReg',
  data() {
    return {
      wikiDocument: '',
    };
  },
  methods: {
    getChildData() {
      console.log('Get Document Child data');
      this.$emit('GetDocumentData', 'wikiDocumentReg', this.wikiDocument);
    },
  },
};
</script>

<style scoped>
.wiki_document {
  height: 400px;
  width: 80%;
}
</style>
