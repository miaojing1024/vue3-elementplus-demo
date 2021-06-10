import { ref, getCurrentInstance } from "vue";

// 定义类型
interface User {
  email: string;
  password: string;
}
export const loginUser = ref<User>({
  email: "",
  password: "",
});
interface Rules {
  email: {
    type: string;
    message: string;
    required: boolean;
    trigger: string;
  }[];
  password: ({
    message: string;
    required: boolean;
    trigger: string;
    min?: undefined;
    max?: undefined;
  } | {
    min: number;
    max: number;
    message: string;
    trigger: string;
    required?: undefined;
  })[];
}
// 校验规则
export const rules = ref<Rules>({
  email: [
    {
      type: "email",
      message: "email is incorrect",
      required: true,
      trigger: "blur",
    },
  ],
  password: [
    {
      message: "password could not be empty",
      required: true,
      trigger: "blur",
    },
    {
      min: 6,
      max: 30,
      message: "password length has to be 6 to 30 characters",
      trigger: "blur",
    },
  ],
});