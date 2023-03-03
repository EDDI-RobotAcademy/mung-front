<template>
  <div class="justify">
    <div class="p-6 space-y-4 bg-white">
      <div class="flex items-center">
        <label class="w-20 text-gray-700 font-semibold mr-2">견종</label>
        <select
          id="dogTypes"
          name="dogTypes"
          v-model="Status.selectedType"
          class="flex-1 appearance-none bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow-sm leading-tight focus:outline-none focus:shadow-outline"
        >
          <option disabled value="">강아지 종류를 선택해주세요</option>
          <option v-for="dogTypes in dogTypes" :key="dogTypes.value" :value="dogTypes.value">
            {{ dogTypes.label }}
          </option>
        </select>
      </div>
      <div class="flex items-center">
        <label class="w-20 text-gray-700 font-semibold mr-2">지능</label>
        <input
          type="number"
          v-model="Status.intelligenceLevel"
          @input="statusValidation"
          class="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <p v-if="intelligenceShowError">0-5사이의 숫자만 입력이 가능합니다</p>
      <div class="flex items-center">
        <label class="w-20 text-gray-700 font-semibold mr-2">털빠짐</label>
        <input
          type="number"
          v-model="Status.sheddingLevel"
          @input="statusValidation"
          class="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <p v-if="sheddingShowError">0-5사이의 숫자만 입력이 가능합니다</p>
      <div class="flex items-center">
        <label class="w-20 text-gray-700 font-semibold mr-2">사회성</label>
        <input
          type="number"
          v-model="Status.sociabilityLevel"
          @input="statusValidation"
          class="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <p v-if="sociabilityShowError">0-5사이의 숫자만 입력이 가능합니다</p>
      <div class="flex items-center">
        <label class="w-20 text-gray-700 font-semibold mr-2">활동성</label>
        <input
          type="number"
          v-model="Status.activityLevel"
          @input="statusValidation"
          class="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <p v-if="activityShowError">0-5사이의 숫자만 입력이 가능합니다</p>
      <div class="flex items-center">
        <label class="w-20 text-gray-700 font-semibold mr-2">실내적응력</label>
        <input
          type="number"
          v-model="Status.indoorAdaptLevel"
          @input="statusValidation"
          class="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <p v-if="indoorAdaptShowError">0-5사이의 숫자만 입력이 가능합니다</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WikiStatusReg',
  data() {
    return {
      intelligenceShowError: false,
      sheddingShowError: false,
      sociabilityShowError: false,
      activityShowError: false,
      indoorAdaptShowError: false,
      Status: {
        intelligenceLevel: 0,
        sheddingLevel: 0,
        sociabilityLevel: 0,
        activityLevel: 0,
        indoorAdaptLevel: 0,
        selectedType: '',
      },
      dogTypes: [
        { value: '푸들', label: '푸들' },
        { value: '시츄', label: '시츄' },
        { value: '비숑프리제', label: '비숑프리제' },
        { value: '포메라니안', label: '포메라니안' },
        { value: '말티즈', label: '말티즈' },
        { value: '요크셔테리어', label: '요크셔테리어' },
        { value: '치와와', label: '치와와' },
        { value: '닥스훈트', label: '닥스훈트' },
        { value: '골든리트리버', label: '골든리트리버' },
        { value: '래브라도리트리버', label: '래브라도리트리버' },
        { value: '시베리안허스키', label: '시베리안허스키' },
        { value: '알래스칸말라뮤트', label: '알래스칸말라뮤트' },
        { value: '사모예드', label: '사모예드' },
        { value: '미니어쳐슈나우저', label: '미니어쳐슈나우저' },
        { value: '비숑', label: '비숑' },
        { value: '보스턴 테리어', label: '보스턴 테리어' },
        { value: '비글', label: '비글' },
        { value: '셰틀랜드 쉽독', label: '셰틀랜드 쉽독' },
        { value: '시바', label: '시바' },
        { value: '윌시 코기', label: '윌시 코기' },
        { value: '진돗개', label: '진돗개' },
        { value: '그레이 하운드', label: '그레이 하운드' },
        { value: '아메리칸 코카스파니엘', label: '아메리칸 코카스파니엘' },
        { value: '스피치', label: '스피치' },
        { value: '불도그', label: '불도그' },
        { value: '믹스', label: '믹스' },
        { value: '기타', label: '기타' },
      ],
    };
  },
  methods: {
    getChildData() {
      console.log('Get Status Child data');
      this.$emit('GetStatusData', 'WikiStatusReg', this.Status);
    },
    statusValidation() {
      console.log('Status Validation');
      if (this.Status.intelligenceLevel < 0 || this.Status.intelligenceLevel > 5) {
        this.intelligenceShowError = true;
      } else {
        this.intelligenceShowError = false;
      }

      if (this.Status.sheddingLevel < 0 || this.Status.sheddingLevel > 5) {
        this.sheddingShowError = true;
      } else {
        this.sheddingShowError = false;
      }

      if (this.Status.activityLevel < 0 || this.Status.activityLevel > 5) {
        this.activityShowError = true;
      } else {
        this.activityShowError = false;
      }

      if (this.Status.sociabilityLevel < 0 || this.Status.sociabilityLevel > 5) {
        this.sociabilityShowError = true;
      } else {
        this.sociabilityShowError = false;
      }

      if (this.Status.indoorAdaptLevel < 0 || this.Status.indoorAdaptLevel > 5) {
        this.indoorAdaptShowError = true;
      } else {
        this.indoorAdaptShowError = false;
      }
    },
  },
};
</script>

<style scoped>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.justify {
  display: flex;
  justify-content: center;
}
</style>
