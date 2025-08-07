<template>
  <view class="pet-home">
    <view class="user-info">
      <image
        class="avatar"
        :src="user.avatar" />
      <text class="nickname">{{ user.nickname }}</text>
      <button
        class="login-btn"
        @click="login"
        v-if="!user.loggedIn">
        登录
      </button>
    </view>
    <view class="my-pets">
      <text class="section-title">我的宠物</text>
      <view v-if="pets.length === 0">暂无宠物，快去分享吧！</view>
      <view v-else>
        <view
          v-for="pet in pets"
          :key="pet.id"
          class="pet-card">
          <image
            :src="pet.img"
            class="pet-img" />
          <text>{{ pet.name }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      user: {
        avatar: 'https://example.com/avatar.png',
        nickname: '未登录',
        loggedIn: false,
      },
      pets: [],
    };
  },
  methods: {
    login() {
      // 登录逻辑，获取用户信息
      this.user = {
        avatar: 'https://example.com/avatar.png',
        nickname: '小明',
        loggedIn: true,
      };
    },
  },
};
</script>

<style scoped>
.pet-home {
  padding: 20px;
}
.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 16px;
}
.nickname {
  font-size: 18px;
  font-weight: bold;
}
.login-btn {
  margin-left: auto;
}
.section-title {
  font-size: 16px;
  margin-bottom: 10px;
}
.pet-card {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.pet-img {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  margin-right: 10px;
}
</style>
