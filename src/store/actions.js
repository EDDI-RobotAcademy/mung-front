import {} from './mutation-types';

import axios from 'axios';
import router from '@/router';

export default {
  requestRegisterWikiToString(_, payload) {
    console.log('Spring 으로 wiki 정보 등록 요청');
    console.log(payload.data);
    return axios
      .post('http://localhost:7777/mungWiki/register', payload)
      .then((res) => {
        console.log(res.data);
        if (res.data == '새로운 위키 등록 성공!') {
          alert(res.data);
          router.push('/');
        } else {
          alert(res.data);
          router.go(0);
        }
      })
      .catch((res) => {
        console.log(res.message);
      });
  },
};
