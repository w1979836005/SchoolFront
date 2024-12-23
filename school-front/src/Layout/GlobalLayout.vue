<script setup lang="ts">

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>

    <div class="common-layout">
      <el-container class="container">

        <el-header class="header">
          <Header/>
        </el-header>

        <el-main class="main">Main</el-main>

        <el-footer class="footer">
          <Footer/>
        </el-footer>

      </el-container>
    </div>

</template>

<style scoped>
.container{
  height: 100vh;
  width: 100%;
}
.header{
  padding: 0;
}
.footer{
  padding: 0;
}
</style>