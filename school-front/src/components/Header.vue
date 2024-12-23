<script setup lang="ts">
/**
 * 路由切换动态刷新
 * @author 高桥凉介
 */
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

/**
 * 使用TS接口定义Header栏数据
 * @author 高桥凉介
 */
import type{Header} from '../types'
import {useRouter} from "vue-router";
import SearchHeader from "@/components/SearchHeader.vue";
const headerData: Header = {
  title: "校园综合信息服务",
  menu: [
    { id: 1, label: "首页", link: "/" },
    {
      id: 2,
      label: "校园",
      link: "/solutions",
      children: [
        { id: 21, label: "校园活动", link: "/solutions/item-one" },
        { id: 22, label: "最新咨询", link: "/solutions/item-two" },
        { id: 23, label: "学习", link: "/solutions/item-three" },
      ],
    },
    { id: 3, label: "动物", link: "/about" },
    { id: 4, label: "有解", link: "/about" },
    { id: 5, label: "关于", link: "/about" },
  ],
};


/**
 * 登录跳转函数
 * @author 高桥凉介
 */
const routers = useRouter();
function goLogin() {
  routers.push("/login")
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
      <div class="mess">{{headerData.title}}</div>

      <template v-for="item in headerData.menu">
        <!-- 如果有子菜单 -->
        <el-sub-menu
            v-if="item.children && item.children.length > 0"
            :key="item.id"
            class="menu"
            :index="item.id.toString()"
        >
          <template #title>{{ item.label }}</template>
          <!-- 渲染子菜单 -->
          <el-menu-item
              v-for="child in item.children"
              :key="child.id"
              :index="child.id.toString()"
          >
            {{ child.label }}
          </el-menu-item>
        </el-sub-menu>

        <!-- 如果没有子菜单 -->
        <el-menu-item
            v-else
            class="menu"
            :index="item.id.toString()"
        >
          {{ item.label }}
        </el-menu-item>
      </template>

      <div class="search">
        <SearchHeader/>
      </div>

      <el-button type="primary" class="login" @click="goLogin" round>
          登录
      </el-button>


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
  margin-right: 2rem;
  color: #615454;
}
.login{
  margin-left: 10rem;
}
.search{
  margin-left: 7rem;
}
</style>