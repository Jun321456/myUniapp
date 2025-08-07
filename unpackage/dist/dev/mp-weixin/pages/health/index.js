"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      pets: [
        { id: 1, name: "小橘", type: "猫咪" },
        { id: 2, name: "旺财", type: "狗狗" },
        { id: 3, name: "雪球", type: "兔子" },
        { id: 4, name: "小绿", type: "鹦鹉" }
      ],
      selectedPet: 0,
      healthIndicators: [
        { key: "weight", label: "体重", value: "", unit: "kg" },
        { key: "temperature", label: "体温", value: "", unit: "℃" },
        { key: "heartrate", label: "心率", value: "", unit: "次/分" }
      ],
      result: ""
    };
  },
  methods: {
    onPetChange(e) {
      this.selectedPet = Number(e.detail.value);
      this.healthIndicators.forEach((item) => {
        item.value = "";
      });
      this.result = "";
    },
    checkHealth() {
      const petType = this.pets[this.selectedPet].type;
      const { weight, temperature, heartrate } = Object.fromEntries(
        this.healthIndicators.map((i) => [i.key, Number(i.value)])
      );
      let msg = "";
      if (!weight || !temperature || !heartrate) {
        this.result = "请填写所有健康指标";
        return;
      }
      let normal = {
        猫咪: { weight: [2, 8], temperature: [37.5, 39.5], heartrate: [120, 180] },
        狗狗: { weight: [3, 40], temperature: [37.5, 39.2], heartrate: [70, 120] },
        兔子: { weight: [1, 2.5], temperature: [38.5, 40], heartrate: [130, 325] },
        鹦鹉: { weight: [0.03, 1.5], temperature: [40, 42], heartrate: [200, 400] }
      }[petType];
      if (weight < normal.weight[0] || weight > normal.weight[1] || temperature < normal.temperature[0] || temperature > normal.temperature[1] || heartrate < normal.heartrate[0] || heartrate > normal.heartrate[1]) {
        msg = "健康指标有异常，请及时咨询兽医！";
      } else {
        msg = "健康指标正常，继续保持哦！";
      }
      this.result = msg;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.pets[$data.selectedPet].name),
    b: $data.pets,
    c: common_vendor.o((...args) => $options.onPetChange && $options.onPetChange(...args)),
    d: common_vendor.f($data.healthIndicators, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.label),
        b: "请输入" + item.label,
        c: item.value,
        d: common_vendor.o(($event) => item.value = $event.detail.value, item.key),
        e: common_vendor.t(item.unit),
        f: item.key
      };
    }),
    e: common_vendor.o((...args) => $options.checkHealth && $options.checkHealth(...args)),
    f: $data.result
  }, $data.result ? {
    g: common_vendor.t($data.result)
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/health/index.js.map
