<template>
  <view class="pet-home">
    <view class="banner no-img">
      <text class="banner-title">宠物之家</text>
    </view>
    <view class="welcome">
      <text class="main-title">健康检测</text>
      <text class="sub-title">为你的宠物健康保驾护航</text>
    </view>
    <view class="pet-list-title">选择宠物</view>
    <picker
      :range="pets"
      range-key="name"
      @change="onPetChange">
      <view class="picker">当前选择：{{ pets[selectedPet].name }}</view>
    </picker>
    <view class="health-title">健康指标</view>
    <view class="health-list">
      <view
        class="health-item"
        v-for="item in healthIndicators"
        :key="item.key">
        <text class="health-label">{{ item.label }}</text>
        <input
          class="health-input"
          type="number"
          v-model="item.value"
          :placeholder="'请输入' + item.label" />
        <text class="health-unit">{{ item.unit }}</text>
      </view>
    </view>
    <button
      class="check-btn"
      @click="checkHealth">
      检测健康状况
    </button>
    <view
      class="result"
      v-if="result">
      <text>{{ result }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      pets: [
        { id: 1, name: '小橘', type: '猫咪' },
        { id: 2, name: '旺财', type: '狗狗' },
        { id: 3, name: '雪球', type: '兔子' },
        { id: 4, name: '小绿', type: '鹦鹉' },
      ],
      selectedPet: 0,
      healthIndicators: [
        { key: 'weight', label: '体重', value: '', unit: 'kg' },
        { key: 'temperature', label: '体温', value: '', unit: '℃' },
        { key: 'heartrate', label: '心率', value: '', unit: '次/分' },
      ],
      result: '',
    };
  },
  methods: {
    onPetChange(e) {
      this.selectedPet = Number(e.detail.value);
      // 清空健康指标
      this.healthIndicators.forEach(item => {
        item.value = '';
      });
      this.result = '';
    },
    checkHealth() {
      // 简单的健康检测逻辑（可根据宠物类型自定义范围）
      const petType = this.pets[this.selectedPet].type;
      const { weight, temperature, heartrate } = Object.fromEntries(
        this.healthIndicators.map(i => [i.key, Number(i.value)])
      );
      let msg = '';
      if (!weight || !temperature || !heartrate) {
        this.result = '请填写所有健康指标';
        return;
      }
      // 示例范围（实际可根据宠物类型调整）
      let normal = {
        猫咪: { weight: [2, 8], temperature: [37.5, 39.5], heartrate: [120, 180] },
        狗狗: { weight: [3, 40], temperature: [37.5, 39.2], heartrate: [70, 120] },
        兔子: { weight: [1, 2.5], temperature: [38.5, 40], heartrate: [130, 325] },
        鹦鹉: { weight: [0.03, 1.5], temperature: [40, 42], heartrate: [200, 400] },
      }[petType];
      if (
        weight < normal.weight[0] ||
        weight > normal.weight[1] ||
        temperature < normal.temperature[0] ||
        temperature > normal.temperature[1] ||
        heartrate < normal.heartrate[0] ||
        heartrate > normal.heartrate[1]
      ) {
        msg = '健康指标有异常，请及时咨询兽医！';
      } else {
        msg = '健康指标正常，继续保持哦！';
      }
      this.result = msg;
    },
  },
};
</script>

<style>
.pet-home {
  background: #f8f9fa;
  min-height: 100vh;
  padding-bottom: 40rpx;
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
.pet-list-title,
.health-title {
  font-size: 32rpx;
  font-weight: bold;
  margin: 40rpx 0 20rpx 30rpx;
  color: #444;
}
.picker {
  margin: 0 30rpx 20rpx 30rpx;
  padding: 18rpx 24rpx;
  background: #fff;
  border-radius: 12rpx;
  font-size: 28rpx;
  color: #333;
  box-shadow: 0 2rpx 8rpx #eee;
}
.health-list {
  margin: 0 30rpx;
}
.health-item {
  display: flex;
  align-items: center;
  margin-bottom: 24rpx;
  background: #fff;
  border-radius: 12rpx;
  padding: 18rpx 24rpx;
  box-shadow: 0 2rpx 8rpx #eee;
}
.health-label {
  width: 120rpx;
  font-size: 28rpx;
  color: #333;
}
.health-input {
  flex: 1;
  margin: 0 16rpx;
  padding: 8rpx 12rpx;
  border: 1rpx solid #eee;
  border-radius: 8rpx;
  font-size: 28rpx;
  background: #f8f9fa;
}
.health-unit {
  font-size: 24rpx;
  color: #888;
}
.check-btn {
  margin: 30rpx 30rpx 0 30rpx;
  background: #ffb199;
  color: #fff;
  font-size: 32rpx;
  border-radius: 12rpx;
  padding: 18rpx 0;
}
.result {
  margin: 30rpx 30rpx 0 30rpx;
  font-size: 30rpx;
  color: #ff7043;
  text-align: center;
}
</style>
