<template>
<div>
  <v-row  justify="center">
    <v-col cols="auto" style="padding-bottom: 90px" class="pt-10">
      <p style="font-size: 30px">
        MungMung
      </p>
      <PetProfileReg/>

      <v-btn class="button" outlined>
        반려견 등록하기
      </v-btn>
    </v-col>
  </v-row>
</div>
</template>

<script>
import PetProfileReg from "@/components/profile/PetProfileReg";
export default {
  name: "PetProfileView",
  components: {PetProfileReg}
}
</script>

<style scoped>
.button {
  width: 80%;
  height: 30px;
  margin-left: 10%;
  margin-top: 30px;
}
</style>