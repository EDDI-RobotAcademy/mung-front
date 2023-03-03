<template>
  <div>
    <a :href="naverLoginURL">네이버 로그인 테스트</a> |
    <router-link to="signup-view">회원 가입</router-link>
  </div>
</template>

<script>
export default {
  name: 'NaverLogin',
  data() {
    return {
      CLIENT_ID: 'VgoFe7ibEndOZy1pDjQ8',
      redirectURI: 'http://localhost:7777/member/naver-login',
      state: 1234,
      naverLoginURL: 'https://nid.naver.com/oauth2.0/authorize?response_type=code',
    };
  },
  created() {
    this.naverLoginURL += '&client_id=' + this.CLIENT_ID;
    this.naverLoginURL += '&redirect_uri=' + this.redirectURI;
    this.naverLoginURL += '&state=' + this.state;
  },
};
</script>
