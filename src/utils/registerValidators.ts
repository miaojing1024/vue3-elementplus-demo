import { ref, getCurrentInstance } from "vue";

interface RegisterUser {
  name: string;
  email: string;
  password: string;
  password2: string;
  role: string;
}
export const registerUser = ref<RegisterUser>({
  name: "",
  email: "",
  password: "",
  password2: "",
  role: "",
});

export const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请再次输入密码"));
  } else if (value !== registerUser.value.password) {
    callback(new Error("两次输入密码不一致!"));
  } else {
    callback();
  }
};

interface RegisterRules {
  name: ({
    message: string;
    required: boolean;
    trigger: string;
  } | {
    min: number;
    max: number;
    message: string;
    trigger: string;
  })[];
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
  } | {
    min: number;
    max: number;
    message: string;
    trigger: string;
  })[];
  password2: ({
    message: string;
    required: boolean;
    trigger: string;
  } | {
    min: number;
    max: number;
    message: string;
    trigger: string;
  } | {
    validator: (rule: RegisterRules, value: string, callback: any) => void;
    trigger: string
  })[];
}
export const registerRules = ref<RegisterRules>({
  name: [
    {
      message: "用户名不能为空...",
      required: true,
      trigger: "blur",
    },
    {
      min: 2,
      max: 30,
      message: "长度在2到30个字符",
      trigger: "blur",
    },
  ],
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
  password2: [
    {
      message: "password2 could not be empty",
      required: true,
      trigger: "blur",
    },
    {
      min: 6,
      max: 30,
      message: "password2 length has to be 6 to 30 characters",
      trigger: "blur",
    },
    {
      validator: validatePass2,
      trigger: 'blur'
    },
  ],
});