<template>
  <div class="container">
    <div class="horizontal-container">
      <WikiStatusReg ref="StatusWiki" @GetStatusData="onChildDataChanged" style="margin-left: 20%" />
      <img-reg ref="ImgWiki" @GetImgData="onChildDataChanged" />
    </div>
    <div style="margin-bottom: 20px">
      <wiki-document-reg ref="DocumentWiki" @GetDocumentData="onChildDataChanged" />
    </div>
    <button @click="getChildData">데이터 확인~</button>
    images : {{ images }} wikiDocument : {{ wikiDocument }} Status : {{ Status }}
  </div>
</template>

<script>
import ImgReg from '@/components/mungwiki/wikiRegisterComponent/imgReg';
import WikiStatusReg from '@/components/mungwiki/wikiRegisterComponent/WikiStatusReg';
import WikiDocumentReg from '@/components/mungwiki/wikiRegisterComponent/wikiDocumentReg';
export default {
  name: 'mungWikiReg',
  components: { WikiDocumentReg, WikiStatusReg, ImgReg },
  data() {
    return {
      images: [],
      wikiDocument: '',
      Status: {
        intelligenceLevel: Number,
        sheddingLevel: Number,
        sociabilityLevel: Number,
        activityLevel: Number,
        indoorAdaptLevel: Number,
        selectedType: '',
      },
    };
  },
  methods: {
    getChildData() {
      console.log('Get child data');
      this.$refs.StatusWiki.getChildData();
      this.$refs.DocumentWiki.getChildData();
      this.$refs.ImgWiki.getChildData();
    },
    onChildDataChanged(childName, data) {
      console.log(`ChildName ${childName} data changed:`, data);
      if (childName == 'imgReg') {
        this.images = data;
      } else if (childName == 'WikiStatusReg') {
        this.Status = data;
      } else if (childName == 'wikiDocumentReg') {
        this.wikiDocument = data;
      }
    },
    submitToServer() {
      console.log('wiki register To Spring');
      let formData = new FormData();

      for (let i = 0; i < this.images.length; i++) {
        formData.append('images', this.image[i]);
      }
    },
  },
};
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
}

.horizontal-container {
  display: flex;
  flex-direction: row;
}
</style>
