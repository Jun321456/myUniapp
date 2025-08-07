"use strict";
const common_vendor = require("../common/vendor.js");
const CommentList = () => "./CommentList.js";
const _sfc_main = {
  components: {
    CommentList
  },
  props: {
    pet: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      likes: 0,
      showComments: false,
      comments: []
    };
  },
  methods: {
    likePet() {
      this.likes++;
    },
    toggleComments() {
      this.showComments = !this.showComments;
    },
    replyToComment(commentId, reply) {
      const comment = this.comments.find((c) => c.id === commentId);
      if (comment) {
        comment.replies.push(reply);
      }
    }
  }
};
if (!Array) {
  const _component_comment_list = common_vendor.resolveComponent("comment-list");
  _component_comment_list();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($props.pet.name),
    b: common_vendor.t($props.pet.emoji),
    c: common_vendor.t($props.pet.type),
    d: common_vendor.t($data.likes),
    e: common_vendor.o((...args) => $options.likePet && $options.likePet(...args)),
    f: common_vendor.t($data.showComments ? "隐藏评论" : "查看评论"),
    g: common_vendor.o((...args) => $options.toggleComments && $options.toggleComments(...args)),
    h: $data.showComments
  }, $data.showComments ? {
    i: common_vendor.o($options.replyToComment),
    j: common_vendor.p({
      comments: $data.comments
    })
  } : {}, {
    k: $props.pet.bg
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-064edc18"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/PetCard.js.map
