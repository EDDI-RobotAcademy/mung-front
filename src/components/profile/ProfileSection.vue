<template>
  <div>
    <p style="font-size: 12px">
      회원 님의 정보를 입력해주세요
    </p>
    <v-card class="pa-8 mb-5" outlined style="width: 500px; alignment: center">
      <v-row>
        <p class="subTitle">회원 닉네임</p>
        <v-text-field class="field" variant="underlined" dense></v-text-field>
      </v-row>

      <v-row>
        <p class="subTitle">회원 생년월일</p>
        <v-text-field class="field" variant="underlined" dense></v-text-field>
      </v-row>
    </v-card>

  </div>
</template>

<script>
export default {
  name: "ProfileSection",
  data() {
    return{
    }
  },
  methods:{

  }
}
</script>

<style scoped>
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
.button {
  width: 80%;
  height: 30px;
  margin-left: 10%;
  margin-top: 30px;
}

</style>