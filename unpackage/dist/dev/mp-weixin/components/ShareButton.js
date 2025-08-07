"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  methods: {
    sharePet() {
      if (typeof common_vendor.wx$1 !== "undefined") {
        common_vendor.wx$1.shareAppMessage({
          title: "我分享了我的宠物！",
          path: "/pages/share/index",
          success: () => {
            common_vendor.index.__f__("log", "at components/ShareButton.vue:19", "分享成功");
          },
          fail: (error) => {
            common_vendor.index.__f__("error", "at components/ShareButton.vue:22", "分享失败", error);
          }
        });
      } else {
        common_vendor.index.__f__("warn", "at components/ShareButton.vue:26", "微信API未加载");
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.sharePet && $options.sharePet(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8e058796"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/ShareButton.js.map
