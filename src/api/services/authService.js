import mainRequest from '@/api/mainRequest';

// 최신 async await 문법
export const requestCheckDupEmailToSpring = async (email) => {
  const res = await mainRequest.get(`/member/check-email/${email}`);
  return res.data;
};

export const requestCheckDupNicknameToSpring = async (nickname) => {
  const res = await mainRequest.get(`/member/check-nickname/${nickname}`);
  return res.data;
};

export const requestSignUpToSpring = async (signUpData) => {
  console.log('requestSignUpToSpring()');
  const { email, password, nickname, memberType } = signUpData;
  const res = await mainRequest.post('/member/sign-up', { email, password, nickname, memberType });
  return res.data;
};
