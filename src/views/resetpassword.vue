<template>
  <!-- 登录 -->
  <el-form label-width="100px" class="container">
    <el-form-item label="邮箱">
      <el-input
        type="password"
        v-model="password"
        placeholder="Enter password..."
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="handleResetPassword"
        class="submit-btn submit_btn"
        >重置密码</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import router from "@/router";
import { ref, getCurrentInstance } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  components: {},
  setup() {
    // @ts-ignore
    const { proxy } = getCurrentInstance();
    const password = ref<string>("");
    const route = useRoute();
    const router = useRouter();
    console.log(route.params.id);

    const handleResetPassword = () => {
      if (password.value) {
        proxy.$axios
          .put("/api/v1/auth/resetpassword/" + route.params.id, {
            password: password.value,
          })
          .then((res: any) => {
            // 修改成功
            if(res.data.success){
              router.push("/")
            }
          });
      }
    };
    // @ts-ignore 忽略类型匹配
    return { password, handleResetPassword };
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