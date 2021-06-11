<template>
  <!-- 注册 -->
  <el-form
    ref="registerForm"
    :model="registerUser"
    :rules="registerRules"
    label-width="100px"
    class="registerForm sign-up-form"
  >
    <el-form-item label="用户名" prop="name">
      <el-input
        v-model="registerUser.name"
        placeholder="Enter UserName..."
      ></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input
        v-model="registerUser.email"
        placeholder="Enter Email..."
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="registerUser.password"
        type="password"
        placeholder="Enter password..."
      ></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="password2">
      <el-input
        v-model="registerUser.password2"
        type="password"
        placeholder="Enter password2..."
      ></el-input>
    </el-form-item>
    <el-form-item label="选择身份">
      <el-select v-model="registerUser.role" placeholder="请选择身份">
        <el-option label="管理员" value="admin"></el-option>
        <el-option label="用户" value="user"></el-option>
        <el-option label="游客" value="visitor"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button
        @click="handleRegister()"
        type="primary"
        class="submit-btn submit_btn"
        >注册</el-button
      >
    </el-form-item>
    <!-- 找回密码 -->
    <div class="tiparea">
      <p>忘记密码? <a href="">立即找回</a></p>
    </div>
  </el-form>
</template>

<script lang="ts">
import { ref, getCurrentInstance, nextTick } from "vue";

export default {
  props: {
    registerUser: {
      type: Object,
      required: true,
    },
    registerRules: {
      type: Object,
      required: true,
    },
  },
  components: {},
  setup(props: any) {
    // @ts-ignore 忽略类型匹配
    const { ctx } = getCurrentInstance(); // 获取实例
    console.log(ctx);
    const registerForm = ref(null); /// 执行完后.value获取到实例

    // 触发注册方法
    const handleRegister = () => {
      (registerForm as any).value.validate((valid: boolean) => {
        if (valid) {
          alert("submit!");
          ctx.$axios
            .post(
              "http://imissu.herokuapp.com/api/v1/auth/register",
              props.registerUser
            )
            .then((res: any) => {
              // 注册成功
              ctx.$message({
                message: "注册成功",
              });
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };
    return { registerForm, handleRegister };
  },
};
</script>

<style scoped>
/* form */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
/* register */
.registerForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit_btn {
  width: 100%;
}
</style>