<template>
  <!-- 登录 -->
  <el-form label-width="100px" class="container">
    <el-form-item label="邮箱">
      <el-input
        type="email"
        v-model="email"
        placeholder="Enter Email..."
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="handleForgotPassword"
        class="submit-btn submit_btn"
        >找回密码</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { ref, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {},
  setup() {
    // @ts-ignore
    const { proxy } = getCurrentInstance();
    const email = ref<string>("");
    const handleForgotPassword = () => {
      if (email.value) {
        proxy.$axios
          .post("/api/v1/auth/forgotpassword", { email: email.value })
          .then((res: any) => {
            console.log(res);
          });
      }
    };
    // @ts-ignore 忽略类型匹配
    return { email, handleForgotPassword };
  },
};
</script>

<style scoped>
.container {
  width: 50%;
  margin: 200px auto;
}
.submit-btn {
  width: 100%;
}
</style>