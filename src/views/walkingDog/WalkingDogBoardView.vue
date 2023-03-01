<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-10">
        <div class="grid grid-cols-12 gap-6">
          <!-- 중앙 게시판 -->
          <div class="col-span-12">
            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center justify-between mb-4">
                <h2 class="text-xl font-medium">멍멍이와 산책해버리기~</h2>
                <div class="flex">
                  <button
                    @click="sortByLatest"
                    :class="{ 'text-indigo-500 font-medium': sortBy === 'latest' }"
                    class="mr-4 hover:text-indigo-500"
                  >
                    최신순
                  </button>
                  <button
                    @click="sortByPopularity"
                    :class="{ 'text-indigo-500 font-medium': sortBy === 'popularity' }"
                    class="hover:text-indigo-500"
                  >
                    인기순
                  </button>
                </div>
              </div>
              <div class="grid grid-cols-4 gap-4">
                <!-- 더미 데이터 -->
                <div v-for="post in sortedPosts" :key="post.id" class="relative">
                  <div class="border border-gray-200 h-200 rounded-lg p-4 h-70">
                    <div class="mb-4">
                      <div class="top-0 left-0 w-full h-50 border border-gray-200 rounded-lg overflow-hidden">
                        <img
                          src="@/assets/tmpDogs/tmp_walking_dog1.jpeg"
                          alt="thumbnail"
                          class="w-full h-full rounded-lg"
                        />
                      </div>
                      <a href="#" class="text-gray-800 font-medium hover:text-indigo-500 ml-20">{{ post.title }}</a>
                    </div>
                    <div class="text-sm text-black overflow-hidden h-5">{{ post.content }}</div>
                    <div class="mt-4 flex justify-between">
                      <div class="text-sm text-gray-500 inline-block ml-2">{{ post.author }}</div>
                      <div class="text-sm text-gray-500 inline-block">{{ post.date }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 페이지네이션 -->
              <div class="flex justify-center mt-8">
                <a
                  href="#"
                  class="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-500 mr-2 hover:text-indigo-500"
                  >1</a
                >
                <a
                  href="#"
                  class="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-500 mr-2 hover:text-indigo-500"
                  >2</a
                >
                <a
                  href="#"
                  class="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-500 hover:text-indigo-500"
                  >3</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WalkingDogBoard',
  data() {
    return {
      sortBy: 'latest',
      posts: [
        {
          id: 1,
          title: '댕댕이 산책시키기',
          content:
            '우하하하하ㅏㅎ텍스ㅡ트 길이조절 되나보잔ㅁ어ㅏㅗ림ㅇ노리ㅏㅁㄴ오라ㅣㅁㄴ오라ㅣㅁㄴ오라먼오라민어ㅗ람니ㅓ오라미ㅓㄴ올마ㅣ너ㅗㅇㄹㅁㄴ',
          date: '2023-02-27',
          author: 'Author 1',
          views: 1,
          thumbnail: '@/assets/tmpDogs/tmp_walking_dog1.jpeg',
        },
        {
          id: 2,
          title: '빽구랑 산책 갈기기',
          content: 'Content 1',
          date: '2023-02-27',
          author: 'Author 1',
          views: 10,
          thumbnail: '@/assets/tmpDogs/tmp_walking_dog1.jpeg',
        },
        {
          id: 3,
          title: 'Title 3',
          content: 'Content 1',
          date: '2023-02-27',
          author: 'Author 1',
          views: 20,
          thumbnail: '@/assets/tmpDogs/tmp_walking_dog1.jpeg',
        },
        {
          id: 4,
          title: 'Title 4',
          content: 'Content 1',
          date: '2023-02-27',
          author: 'Author 1',
          views: 30,
          thumbnail: '@/assets/tmpDogs/tmp_walking_dog1.jpeg',
        },
        {
          id: 5,
          title: 'Title 5',
          content: 'Content 1',
          date: '2023-02-27',
          author: 'Author 1',
          views: 40,
          thumbnail: '@/assets/tmpDogs/tmp_walking_dog1.jpeg',
        },
      ],
    };
  },
  methods: {
    sortByLatest() {
      this.sortBy = 'latest';
    },
    sortByPopularity() {
      this.sortBy = 'popularity';
    },
  },
  computed: {
    sortedPosts() {
      if (this.sortBy === 'latest') {
        return this.posts.slice().sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
      } else if (this.sortBy === 'popularity') {
        return this.posts.slice().sort((a, b) => {
          return b.views - a.views;
        });
      }
    },
  },
};
</script>

<style scoped>
a {
  @apply decoration-inherit no-underline text-inherit;
}
button:focus {
  outline: none;
}
</style>
