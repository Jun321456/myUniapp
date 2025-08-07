<template>
  <view class="adopt-page">
    <view class="user-header">
      <image
        class="avatar"
        :src="user.avatar" />
      <view class="user-info">
        <text class="nickname">{{ user.nickname }}</text>
        <text class="subtitle">宠物空间 · 分享你的快乐</text>
      </view>
    </view>
    <view class="share-list">
      <view
        v-for="share in shares"
        :key="share.id"
        class="share-card">
        <text class="share-text">{{ share.text }}</text>
        <image
          v-if="share.img"
          :src="share.img"
          class="share-img"
          mode="aspectFill" />
        <view class="share-actions">
          <button
            class="like-btn"
            @click="handleLike(share.id)">
            <text :class="{ liked: share.likes > 0 }">👍</text>
            {{ share.likes }}
          </button>
          <button
            class="comment-btn"
            @click="handleComment(share.id)">
            💬 评论
          </button>
          <button
            class="share-btn"
            @click="handleShare(share.id)">
            🔗 分享
          </button>
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
        nickname: '小明',
      },
      shares: [
        {
          id: 1,
          text: '今天带小橘去公园玩啦！',
          img: 'https://example.com/pet1.jpg',
          likes: 5,
        },
        {
          id: 2,
          text: '旺财学会了新技能，超可爱！',
          img: 'https://example.com/pet2.jpg',
          likes: 3,
        },
      ],
    };
  },
  methods: {
    handleLike(shareId) {
      const share = this.shares.find(s => s.id === shareId);
      if (share) share.likes++;
    },
    handleComment(shareId) {
      // 评论逻辑
    },
    handleShare(shareId) {
      // 分享逻辑
    },
  },
};
</script>

<style scoped>
.adopt-page {
  padding: 24px;
  background: #f7f8fa;
  min-height: 100vh;
}
.user-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
}
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px #ddd;
}
.user-info {
  text-align: center;
}
.nickname {
  font-size: 22px;
  font-weight: bold;
  color: #333;
}
.subtitle {
  font-size: 14px;
  color: #888;
  margin-top: 4px;
}
.share-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.share-card {
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 16px #e0e0e0;
  transition: box-shadow 0.2s;
}
.share-card:hover {
  box-shadow: 0 8px 24px #ccc;
}
.share-text {
  font-size: 17px;
  margin-bottom: 12px;
  color: #222;
  display: block;
}
.share-img {
  width: 100%;
  max-width: 340px;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 14px;
  background: #eee;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.share-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
.like-btn,
.comment-btn,
.share-btn {
  background: #f5f5f5;
  border: none;
  border-radius: 20px;
  padding: 6px 18px;
  font-size: 15px;
  color: #666;
  cursor: pointer;
  transition: background 0.2s;
}
.like-btn:hover,
.comment-btn:hover,
.share-btn:hover {
  background: #e0e0e0;
}
.liked {
  color: #ff9800;
  font-weight: bold;
}
</style>
