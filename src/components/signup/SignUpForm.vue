<template>
  <div class="min-h-screen bg-gray-100">
    <div class="flex justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 중앙 게시판 -->
      <form @submit.prevent="onSubmit()" ref="form">
        <div class="py-10 mx-auto col-span-6">
          <div class="bg-white rounded-lg shadow p-10">
            <div class="mx-8 py-8 flex justify-center">
              <div class="table-row">
                <h2 class="text-3xl font-medium">🐶 Join MungMung 💜</h2>
                <div class="container h-10"></div>
                <!--이메일 인풋-->
                <p class="text-sm">이메일</p>
                <input
                  class="h-10 w-full border"
                  v-model="email"
                  @input="emailValidate"
                  type="text"
                  maxlength="50"
                  placeholder=" 이메일을 입력하세요"
                  required
                />
                <p class="text-xs text-red-600" v-show="email.length > 0 && !emailPass">
                  이메일 주소를 정확히 입력하세요
                </p>
                <div class="container h-5"></div>
                <!--비밀번호 인풋-->
                <p class="text-sm">비밀번호</p>
                <input
                  class="h-10 w-full border"
                  v-model="password"
                  @input="passwordValidate"
                  type="password"
                  maxlength="50"
                  placeholder=" 4 ~ 20자리의 영문, 숫자 조합을 입력하세요"
                  required
                />
                <p class="text-xs text-red-600" v-show="password.length > 0 && !passwordPass">
                  4자 ~ 20자의 영문, 숫자 조합을 입력하세요
                </p>
                <div class="container h-20"></div>
                <button class="h-12 w-full text-white rounded-lg bg-indigo-500 hover:bg-indigo-600">
                  MungMung과 함께하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpForm',
  data() {
    return {
      email: '',
      password: '',
      nickname: '',
      emailFocus: false,
      emailPass: false,
      passwordPass: false,
      nicknamePass: false,
    };
  },
  methods: {
    emailValidate() {
      const emailValid = this.email.match(
        /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
      this.emailPass = !!emailValid;
    },
    passwordValidate() {
      const passwordValid = this.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,20}$/);
      this.passwordPass = !!passwordValid;
    },
    onSubmit() {
      if (this.$refs.form.validate()) {
        const { email, password, nickname } = this;
        this.$emit('submit', { email, password, nickname });
      } else {
        alert('올바른 정보를 입력하세요!');
      }
    },
  },
};
</script>

<style scoped></style>
