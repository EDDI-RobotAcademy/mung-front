<template>
  <div class="max-w-md mx-auto bg-gray-100 rounded-lg overflow-hidden">
    <div class="p-6">
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-gray-800">강아지 사진 업로드 (최대 5장)</h2>
        <p class="text-gray-600 mt-2">업로드할 파일을 선택하세요.</p>
      </div>
      <div class="grid grid-cols-5 gap-4">
        <label
          for="file-upload"
          class="relative overflow-hidden rounded-md cursor-pointer bg-white shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <span>파일 선택</span>
          <input id="file-upload" type="file" class="sr-only" :multiple="true" @change="previewImages" />
        </label>
        <div v-for="(image, index) in images" :key="index" class="relative">
          <button
            type="button"
            class="absolute top-0 right-0 -mt-2 -mr-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            @click="deleteImage(index)"
          >
            <span class="sr-only">이미지 삭제</span>
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M14.348 5.652a.5.5 0 0 0-.707 0L10 9.293 6.357 5.65a.5.5 0 0 0-.707.707L9.293 10l-3.643 3.643a.5.5 0 0 0 .707.707L10 10.707l3.643 3.643a.5.5 0 0 0 .707-.707L10.707 10l3.641-3.648a.5.5 0 0 0 0-.707z"
              />
            </svg>
          </button>
          <img :src="image" class="w-full h-full object-cover rounded-lg shadow-sm" />
        </div>
        <div v-if="images.length === 0" class="col-span-5 text-center text-gray-600">
          아직 업로드된 이미지가 없습니다.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'imgReg',
  data() {
    return {
      images: [],
    };
  },
  methods: {
    previewImages(event) {
      const files = event.target.files;
      if (files.length > 5) {
        alert('이미지는 최대 5장 까지 삽입이 가능합니다.');
      }
      for (let i = 0; i < files.length && i + this.images.length < 5; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = (e) => {
          this.images.push(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    },
    getChildData() {
      console.log('Get Img Child data');
      this.$emit('GetImgData', 'imgReg', this.images);
    },
    deleteImage(index) {
      this.images.splice(index, 1);
    },
  },
};
</script>
