<template>
  <div class="container">
    <div class="horizontal-container">
      <WikiStatusReg ref="StatusWiki" @GetStatusData="onChildDataChanged" style="margin-left: 20%" />
      <img-reg ref="ImgWiki" @GetImgData="onChildDataChanged" />
    </div>
    <div style="margin-bottom: 20px">
      <wiki-document-reg ref="DocumentWiki" @GetDocumentData="onChildDataChanged" />
    </div>

    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto block w-1/2 mb-4"
      @click="submitToServer"
    >
      위키 데이터 저장
    </button>
  </div>
</template>

<script>
import ImgReg from '@/components/mungwiki/wikiRegisterComponent/imgReg';
import WikiStatusReg from '@/components/mungwiki/wikiRegisterComponent/WikiStatusReg';
import WikiDocumentReg from '@/components/mungwiki/wikiRegisterComponent/wikiDocumentReg';
import { mapActions } from 'vuex';
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
      totalStatus: Number,
      validationFlag: false,
    };
  },
  methods: {
    ...mapActions(['requestRegisterWikiToString']),
    getChildData() {
      console.log('Get child data');
      this.$refs.StatusWiki.getChildData();
      this.$refs.DocumentWiki.getChildData();

      this.validationCheck();
    },
    validationCheck() {
      if (
        ![
          this.Status.activityLevel,
          this.Status.intelligenceLevel,
          this.Status.indoorAdaptLevel,
          this.Status.sheddingLevel,
          this.Status.sociabilityLevel,
        ].every((level) => level >= 0 && level <= 5)
      ) {
        alert('강아지 들의 능력은 0-5사이의 숫자만 입력 가능합니다.');
        this.validationFlag = false;
      } else {
        this.validationFlag = true;
      }
    },
    onChildDataChanged(childName, data) {
      console.log(`ChildName ${childName} data changed:`, data);
      if (childName == 'imgReg') {
        this.images.push(data);
        console.log(this.images);
      } else if (childName == 'WikiStatusReg') {
        this.Status = data;
      } else if (childName == 'wikiDocumentReg') {
        this.wikiDocument = data;
      }
    },
    calculateTotalStatus() {
      if (this.validationFlag) {
        this.totalStatus =
          (this.Status.activityLevel +
            this.Status.intelligenceLevel +
            this.Status.indoorAdaptLevel +
            this.Status.sheddingLevel +
            this.Status.sociabilityLevel) /
          5;
      }
    },
    async submitToServer() {
      this.getChildData();
      this.calculateTotalStatus();
      console.log('wiki register To Spring');
      let formData = new FormData();

      for (let i = 0; i < this.images.length; i++) {
        formData.append('images', this.images[i]);
      }

      let wikiInfo = {
        dogType: this.Status.selectedType,
        intelligenceLevel: this.Status.intelligenceLevel,
        sheddingLevel: this.Status.sheddingLevel,
        sociabilityLevel: this.Status.sociabilityLevel,
        activityLevel: this.Status.activityLevel,
        indoorAdaptLevel: this.Status.indoorAdaptLevel,
        totalStatus: this.totalStatus,
        documentation: this.wikiDocument,
      };
      console.log(formData.get('images'));
      formData.append('info', new Blob([JSON.stringify(wikiInfo)], { type: 'application/json' }));
      console.log(formData.get('info'));

      await this.requestRegisterWikiToString(formData);
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
