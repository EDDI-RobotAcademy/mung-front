<template>
<div>
  <p style="font-size: 12px">
    귀여운 반려견의 정보를 입력해주세요
  </p>
  <v-card v-for="(index) in petCnt" :key="index"
          class="pa-8 mt-5" outlined style="width: 500px; alignment: center">
    <v-row>
      <p class="subTitle">반려견 이름</p>
      <v-text-field class="field" variant="underlined" dense></v-text-field>
    </v-row>
    <v-row>
      <p class="subTitle">반려견 종</p>
      <v-select class="field" v-bind:items="petType" v-model="selectedType[index]" style="font-size: 13px"></v-select>
    </v-row>
    <v-row>
      <p class="subTitle">반려견 나이</p>
      <v-text-field class="field" variant="underlined" dense></v-text-field>
    </v-row>
  </v-card>

  <v-btn class="plusButton" @click="plusPetCnt" outlined height="20px">+</v-btn>


</div>
</template>

<script>
export default {
  name: "PetProfileReg",
  data() {
    return{
      petCnt : 1,
      petType:['포메라니안','시베리안 허스키','골든리트리버','래브라도 리트리버','몰티즈','미니어처 슈나우저', '사모예드','비숑',
        '보스턴 테리어','비글','셰틀랜드 쉽독','스탠더드 푸들','시바','요크셔테리어','윌시 코기','진돗개',
        '치와와', '그레이 하운드','아메리칸 코카스파니엘','스피치','시츄','불도그','닥스훈트','믹스견','기타'],
      selectedType:[],
    }
  },
  methods:{
    plusPetCnt(){
      this.petCnt += 1;
    }
  }
}
</script>

<style scoped>
.plusButton {
  width: 100%;
}
.subTitle {
  width: 110px;
  font-size: 13px;
  height: 20px;
  margin: auto;
  padding: 10px;
}
.field {
  margin: auto;
  height: 60px;
  padding-top: 20px;
}
</style>