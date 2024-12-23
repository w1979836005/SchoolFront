<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <div class="header">
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
    >
      <img
          style="width: 30px;height: 30px; margin-left: 2rem;"
          src="../assets/logo.png"
          alt="cat logo"
      />
      <div class="mess">综合信息服务平台</div>
      <el-menu-item class="startMenu" index="1">首页</el-menu-item>
      <el-sub-menu class="menu" index="2">
        <template #title>有解</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-sub-menu>

      <el-menu-item class="menu" index="3">关于</el-menu-item>

      <el-menu-item class="login">
        <a href="#"  style="text-decoration: none">登录</a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-left: 10rem;
}
.startMenu{
  margin-left: 10rem;
}
.menu{
  margin-left: 2rem;
}
.el-menu-demo{
  margin: 0;
  display: flex;
  align-items: center;  /* 垂直居中 */
  background-color: #fcfcfc;
}
.mess{
  margin-left: 1rem;
  color: #615454;
}
.login{
  margin-left: 700px;
}
</style>