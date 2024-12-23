
<script setup lang="ts">
/**
 *登录注册页面
 * @author 高桥凉介
 * @date 2024-12-23 18:10:13
 */
import { reactive } from "vue";
import { ElMessage } from "element-plus";
import type {LoginForm} from "@/types";

// 登录表单的数据和校验规则
const loginForm : LoginForm= reactive({
  username: "",
  password: "",
});

const rules = {
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 20, message: "用户名长度在 3 到 20 个字符", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 6, max: 20, message: "密码长度在 6 到 20 个字符", trigger: "blur" },
  ],
};

// 模拟登录函数
const handleLogin = async () => {
  if (!loginForm.username || !loginForm.password) {
    ElMessage.error("请输入完整的用户名和密码！");
    return;
  }

  // 模拟登录请求
  ElMessage.success(`欢迎回来，${loginForm.username}！`);
};
</script>

<template>
  <div class="login-page">
    <el-card hadow="always" style="border-radius: 15px" class="card">

        <h2 class="login-title">登录</h2>
        <el-form
            :model="loginForm"
            :rules="rules"
            ref="loginFormRef"
            label-width="200px"
            class="login-form"
        >
          <el-form-item label="用户名" prop="username">
            <el-input
                v-model="loginForm.username"
                placeholder="请输入用户名"
                prefix-icon="el-icon-user"
                clearable
            />
          </el-form-item>

          <el-form-item label="密码" prop="password">
            <el-input
                v-model="loginForm.password"
                placeholder="请输入密码"
                prefix-icon="el-icon-lock"
                show-password
                clearable
            />
          </el-form-item>

          <el-form-item>
            <el-button
                type="primary"
                class="login-button"
                block
                @click="handleLogin"
            >
              登录
            </el-button>
          </el-form-item>

          <el-form-item>
            <div class="form-footer">
              <a href="#" class="forgot-password">忘记密码？</a>
              <a href="#" class="register-link">注册账号</a>
            </div>
          </el-form-item>
        </el-form>

    </el-card>
  </div>
</template>

<style scoped>
/* 页面整体样式 */
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url("../assets/bbgg.jpg");
  background-size: cover; /* 图片覆盖整个页面 */
  background-position: center; /* 图片居中显示 */
  background-repeat: no-repeat; /* 不重复背景图片 */
  padding: 1rem;
  box-sizing: border-box;
}
.card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
/* 标题样式 */
.login-title {
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

/* 表单样式 */
.login-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 垂直居中 */
  align-items: center;    /* 水平居中 */
  text-align: center;     /* 文本居中 */
}


.login-button {
  width: 10rem;
  background-color: #74b9ff;
  border-color: #74b9ff;
  color: #ffffff;
}

.login-button:hover {
  background-color: #0984e3;
  border-color: #0984e3;
}

.form-footer {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #636e72;
}

.forgot-password:hover,
.register-link:hover {
  color: #0984e3;
  text-decoration: underline;
}
</style>
