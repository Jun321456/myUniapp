"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      user: {
        avatar: "https://example.com/avatar.png",
        nickname: "小明"
      },
      shares: [
        {
          id: 1,
          text: "今天带小橘去公园玩啦！",
          img: "https://example.com/pet1.jpg",
          likes: 5
        },
        {
          id: 2,
          text: "旺财学会了新技能，超可爱！",
          img: "https://example.com/pet2.jpg",
          likes: 3
        }
      ]
    };
  },
  methods: {
    handleLike(shareId) {
      const share = this.shares.find((s) => s.id === shareId);
      if (share)
        share.likes++;
    },
    handleComment(shareId) {
    },
    handleShare(shareId) {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.user.avatar,
    b: common_vendor.t($data.user.nickname),
    c: common_vendor.f($data.shares, (share, k0, i0) => {
      return common_vendor.e({
        a: common_vendor.t(share.text),
        b: share.img
      }, share.img ? {
        c: share.img
      } : {}, {
        d: share.likes > 0 ? 1 : "",
        e: common_vendor.t(share.likes),
        f: common_vendor.o(($event) => $options.handleLike(share.id), share.id),
        g: common_vendor.o(($event) => $options.handleComment(share.id), share.id),
        h: common_vendor.o(($event) => $options.handleShare(share.id), share.id),
        i: share.id
      });
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-65579be7"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/adopt/index.js.map
