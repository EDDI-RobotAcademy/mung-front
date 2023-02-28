<template>
  <div class="text-black flex items-center justify-between bg-white ml-20 mr-20 mt-4">
    <router-link to="/" class="text-cl"> MungMung </router-link>
    <div class="flex items-center">
      <router-link to="/dog-wiki" class="text-lg mr-10 text-black hover:text-indigo-500 hover:bg-gray-100 rounded-lg">
        멍멍위키
      </router-link>
      <router-link to="/dog-walking" class="text-lg mr-10 text-black hover:text-indigo-500">산책인증</router-link>
      <router-link to="/dog-column" class="text-lg mr-10 text-black hover:text-indigo-500">애견컬럼</router-link>
      <img v-if="isSearchVisible" class="animate-fade-in-down w-5 mr-10" src="@/assets/logo/search_icon.png" />
      <router-link to="/login" class="px-4 py-2 rounded-lg text-white bg-indigo-500 hover:bg-indigo-600"
        >로그인
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
  computed: {
    isSearchVisible() {
      return ['/dog-wiki', '/dog-walking', '/dog-column'].includes(this.$route.path);
    },
  },
};
</script>

<style>
a {
  @apply decoration-inherit no-underline text-inherit;
}

.animate-fade-in-down {
  animation: fade-in-down 1s ease-out;
}

@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
