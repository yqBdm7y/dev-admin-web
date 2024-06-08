import { message } from "@/utils/message";

// 根据API返回的布尔值返回成功与失败信息
export const showMessage = (result: any) => {
  if (result.success) {
    message("操作成功！", { type: "success" });
    return true;
  } else {
    message("操作失败！Error：" + result.error, { type: "error" });
    return false;
  }
};
