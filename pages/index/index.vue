<template>
  <view class="pet-home">
    <view class="banner no-img">
      <text class="banner-title">宠物之家</text>
    </view>
    <view class="welcome">
      <text class="main-title">宠物之家</text>
      <text class="sub-title">欢迎来到你的宠物乐园</text>
    </view>
    <view class="pet-list-title">热门宠物</view>
    <view class="pet-list">
      <view
        class="pet-card"
        v-for="pet in pets"
        :key="pet.id"
        :style="{ background: pet.bg }">
        <view class="pet-avatar">
          <text class="pet-emoji">{{ pet.emoji }}</text>
        </view>
        <view class="pet-info">
          <text class="pet-name">{{ pet.name }}</text>
          <text class="pet-type">{{ pet.type }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      pets: [
        { id: 1, name: '小橘', type: '猫咪', emoji: '🐱', bg: '#ffe4e1' },
        { id: 2, name: '旺财', type: '狗狗', emoji: '🐶', bg: '#e0f7fa' },
        { id: 3, name: '雪球', type: '兔子', emoji: '🐰', bg: '#fffde7' },
        { id: 4, name: '小绿', type: '鹦鹉', emoji: '🦜', bg: '#e8f5e9' },
      ],
    };
  },
  methods: {},
};
</script>

<style>
.pet-home {
  background: #f8f9fa;
}
.banner.no-img {
  width: 100vw;
  height: 320rpx;
  background: linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner-title {
  font-size: 56rpx;
  font-weight: bold;
  color: #fff;
  letter-spacing: 8rpx;
  text-shadow: 2rpx 4rpx 12rpx #fcb69f;
}
.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30rpx;
}
.main-title {
  font-size: 48rpx;
  font-weight: bold;
  color: #333;
}
.sub-title {
  font-size: 28rpx;
  color: #888;
  margin-top: 10rpx;
}
.pet-list-title {
  font-size: 32rpx;
  font-weight: bold;
  margin: 40rpx 0 20rpx 30rpx;
  color: #444;
}
.pet-list {
  display: flex;
  flex-direction: row;
  padding-left: 30rpx;
  margin-bottom: 30rpx;
}
.pet-card {
  width: 180rpx;
  margin-right: 24rpx;
  border-radius: 18rpx;
  box-shadow: 0 2rpx 8rpx #eee;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s;
}
.pet-card:active {
  box-shadow: 0 4rpx 16rpx #ccc;
}
.pet-avatar {
  width: 120rpx;
  height: 120rpx;
  border-radius: 60rpx;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20rpx;
  margin-bottom: 10rpx;
  font-size: 64rpx;
  box-shadow: 0 2rpx 8rpx #f0f0f0;
}
.pet-emoji {
  font-size: 64rpx;
}
.pet-info {
  padding: 12rpx 0 20rpx 0;
  text-align: center;
}
.pet-name {
  font-size: 28rpx;
  color: #222;
  font-weight: bold;
}
.pet-type {
  font-size: 22rpx;
  color: #888;
}
</style>
