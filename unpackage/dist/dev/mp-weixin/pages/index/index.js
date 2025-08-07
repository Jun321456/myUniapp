"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      pets: [
        { id: 1, name: "小橘", type: "猫咪", emoji: "🐱", bg: "#ffe4e1" },
        { id: 2, name: "旺财", type: "狗狗", emoji: "🐶", bg: "#e0f7fa" },
        { id: 3, name: "雪球", type: "兔子", emoji: "🐰", bg: "#fffde7" },
        { id: 4, name: "小绿", type: "鹦鹉", emoji: "🦜", bg: "#e8f5e9" }
      ]
    };
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.pets, (pet, k0, i0) => {
      return {
        a: common_vendor.t(pet.emoji),
        b: common_vendor.t(pet.name),
        c: common_vendor.t(pet.type),
        d: pet.id,
        e: pet.bg
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
