<template>
  <span class="support-ico" :class="iconCls"></span>
</template>

<script>
export default {
  name: "support-ico",
  props: {
    size: {
      type: Number,
    },
    type: {
      type: Number,
    },
  },
  computed:{
      iconCls(){
          const classMap = ['decrease','discount','special','invoice','']
          return  `icon-${this.size} ${classMap[this.type]}`
      }
  }
};
</script>

<style lang="stylus" scoped>
@import "~common/stylus/mixin";

.support-ico
    display :inline-block
    backdrop-repeat:no-repeat

.icon-1
    width :12px
    height :12px
    background-size:12px 12px
    &.decrease
        bg-image()
</style>