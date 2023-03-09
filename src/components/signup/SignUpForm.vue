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
                <div class="flex justify-between items-center space-x-0.5 text-sm my-5">
                  <div>
                    <input type="radio" v-model="memberType" value="normal" @click="emailValidate" />
                    일반 회원가입
                  </div>
                  <div>
                    <input type="radio" v-model="memberType" value="admin" @click="emailValidate" />
                    관리자 회원가입
                  </div>
                </div>
                <!--이메일 인풋-->
                <p class="text-sm">이메일</p>
                <div class="flex justify-between items-center space-x-1">
                  <input
                    class="h-10 w-3/4 border rounded-lg px-2"
                    v-model="email"
                    @input="emailValidate"
                    type="text"
                    maxlength="50"
                    placeholder="이메일 입력"
                  />
                  <button
                    class="w-1/4 h-10 text-white text-sm rounded-lg bg-indigo-500 hover:bg-indigo-600"
                    :disabled="!emailPass"
                    @click="emailDupCheck"
                  >
                    중복 확인
                  </button>
                </div>
                <p class="text-xs text-red-600" v-show="email.length > 0 && !emailPass">
                  이메일 주소를 정확히 입력하세요
                </p>
                <div class="container h-5"></div>
                <!--비밀번호 인풋-->
                <p class="text-sm">비밀번호</p>
                <input
                  class="h-10 w-full border rounded-lg"
                  v-model="password"
                  @input="passwordValidate"
                  type="password"
                  maxlength="50"
                  placeholder=" 4 ~ 20자리의 영문, 숫자 조합을 입력하세요"
                />
                <p class="text-xs text-red-600" v-show="password.length > 0 && !passwordPass">
                  4자 ~ 20자의 영문, 숫자 조합을 입력하세요
                </p>
                <div class="container h-5"></div>
                <!--닉네임 인풋-->
                <p class="text-sm">닉네임</p>
                <div class="flex justify-between items-center space-x-1">
                  <input
                    class="h-10 w-3/4 border rounded-lg"
                    v-model="nickname"
                    @input="nicknameValidate"
                    type="text"
                    maxlength="50"
                    placeholder=" 10자 이하 닉네임 입력"
                  />
                  <button
                    class="w-1/4 h-10 text-white text-sm rounded-lg bg-indigo-500 hover:bg-indigo-600"
                    :disabled="!nicknamePass"
                    @click="nicknameDupCheck"
                  >
                    중복 확인
                  </button>
                </div>

                <p class="text-xs text-red-600" v-show="nickname.length > 0 && !nicknamePass">
                  공백, 특수 문자를 제외한 10자 이하 닉네임을 입력하세요
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
import {
  requestCheckDupEmailToSpring,
  requestCheckDupNicknameToSpring,
  requestSignUpToSpring,
} from '@/api/services/authService';
import router from '@/router';

export default {
  name: 'SignUpForm',
  data() {
    return {
      email: '',
      password: '',
      nickname: '',
      emailPass: false,
      passwordPass: false,
      nicknamePass: false,
      emailAvailable: false,
      nicknameAvailable: false,
      isAdmin: false,
      memberType: 'normal',
    };
  },
  methods: {
    normalEmailValidate() {
      this.emailAvailable = false;
      this.emailPass = this.email.match(
        /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
    },
    adminEmailValidate() {
      this.emailAvailable = false;
      this.emailPass = this.email.match(/^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@mung.com$/);
    },
    nicknameValidate() {
      this.nicknameAvailable = false;
      this.nicknamePass = this.nickname.match(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|*]{1,10}$/);
    },
    passwordValidate() {
      const passwordValid = this.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,20}$/);
      this.passwordPass = !!passwordValid;
    },
    async emailDupCheck() {
      if (this.isAdmin) {
        this.adminEmailValidate();
      }

      if (this.emailPass) {
        const { email } = this;
        this.emailAvailable = await requestCheckDupEmailToSpring(email);
        if (this.emailAvailable) {
          alert('사용가능한 이메일입니다.');
        } else {
          alert('이미 가입된 이메일입니다.');
        }
      } else {
        alert('관리자로 회원가입을 선택하셨다면 가입 가능한 계정을 입력하세요');
      }
    },
    async nicknameDupCheck() {
      const { nickname } = this;
      this.nicknameAvailable = await requestCheckDupNicknameToSpring(nickname);
      if (this.nicknameAvailable) {
        alert('사용가능한 닉네임입니다');
      } else {
        alert('이미 가입된 닉네임입니다.');
      }
    },
    async onSubmit() {
      console.log('회원가입~~~!!!');
      if (this.isAdmin) {
        this.memberType = 'admin';
      }
      if (this.emailAvailable) {
        if (this.nicknameAvailable) {
          const { email, password, nickname, memberType } = this;
          const result = await requestSignUpToSpring({ email, password, nickname, memberType });
          if (result) {
            alert('회원가입 성공!');
            await router.push('/login');
          } else {
            console.log('회원가입 실패ㅠㅠ');
          }
        } else {
          alert('닉네임 중복 검사를 진행하세요!');
        }
      } else {
        alert('이메일 중복 검사를 진행하세요!');
      }
    },
  },
};
</script>

<style scoped></style>
