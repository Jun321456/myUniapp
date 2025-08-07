"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      user: {
        avatar: "https://example.com/avatar.png",
        nickname: "未登录",
        loggedIn: false
      },
      pets: []
    };
  },
  methods: {
    login() {
      this.user = {
        avatar: "https://example.com/avatar.png",
        nickname: "小明",
        loggedIn: true
      };
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.user.avatar,
    b: common_vendor.t($data.user.nickname),
    c: !$data.user.loggedIn
  }, !$data.user.loggedIn ? {
    d: common_vendor.o((...args) => $options.login && $options.login(...args))
  } : {}, {
    e: $data.pets.length === 0
  }, $data.pets.length === 0 ? {} : {
    f: common_vendor.f($data.pets, (pet, k0, i0) => {
      return {
        a: pet.img,
        b: common_vendor.t(pet.name),
        c: pet.id
      };
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-275b3bc3"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mypet/index.js.map
