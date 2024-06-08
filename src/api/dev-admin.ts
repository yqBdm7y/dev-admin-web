import { http } from "@/utils/http";
import type { UserResult, RefreshTokenResult } from "@/api/user";

export const baseUrlApi = (url: string) =>
  process.env.NODE_ENV === "development" ? `/api/${url}` : `/api/${url}`;

export const Login = (data?: object) => {
  return http.request<UserResult>("post", baseUrlApi("login"), { data });
};

export const RefreshToken = (params?: object) => {
  return http.request<RefreshTokenResult>("get", baseUrlApi("refreshToken"), {
    params
  });
};

export const UserGetList = (params?: object) => {
  return http.request<any>("get", baseUrlApi("user/getList"), { params });
};

export const UserCreate = (data?: object) => {
  return http.request<any>("post", baseUrlApi("user/create"), { data });
};

export const UserEdit = (data?: object) => {
  return http.request<any>("put", baseUrlApi("user/edit"), { data });
};

export const UserEditStatus = (data?: object) => {
  return http.request<any>("put", baseUrlApi("user/editStatus"), { data });
};

export const UserEditPassword = (data?: object) => {
  return http.request<any>("put", baseUrlApi("user/editPassword"), { data });
};

export const UserAssociateRole = (data?: object) => {
  return http.request<any>("put", baseUrlApi("user/associateRole"), { data });
};

export const UserDelete = (data?: object) => {
  return http.request<any>("delete", baseUrlApi("user/delete"), { data });
};

export const UserDeleteMultiple = (data?: object) => {
  return http.request<any>("delete", baseUrlApi("user/deleteMultiple"), {
    data
  });
};

export const RoleGetAll = (params?: object) => {
  return http.request<any>("get", baseUrlApi("role/getAll"), { params });
};

export const RoleGetList = (params?: object) => {
  return http.request<any>("get", baseUrlApi("role/getList"), { params });
};

export const RoleGetIdsByUserId = (params?: object) => {
  return http.request<any>("get", baseUrlApi("role/getIdsByUserId"), {
    params
  });
};

export const RoleCreate = (data?: object) => {
  return http.request<any>("post", baseUrlApi("role/create"), { data });
};

export const RoleEdit = (data?: object) => {
  return http.request<any>("put", baseUrlApi("role/edit"), { data });
};

export const RoleEditStatus = (data?: object) => {
  return http.request<any>("put", baseUrlApi("role/editStatus"), { data });
};

export const RoleAssociateMenu = (data?: object) => {
  return http.request<any>("put", baseUrlApi("role/associateMenu"), { data });
};

export const RoleDelete = (data?: object) => {
  return http.request<any>("delete", baseUrlApi("role/delete"), { data });
};

export const DepartmentGetAll = (params?: object) => {
  return http.request<any>("get", baseUrlApi("department/getAll"), { params });
};

export const DepartmentGetList = (params?: object) => {
  return http.request<any>("get", baseUrlApi("department/getList"), { params });
};

export const DepartmentCreate = (data?: object) => {
  return http.request<any>("post", baseUrlApi("department/create"), { data });
};

export const DepartmentEdit = (data?: object) => {
  return http.request<any>("put", baseUrlApi("department/edit"), { data });
};

export const DepartmentDelete = (data?: object) => {
  return http.request<any>("delete", baseUrlApi("department/delete"), { data });
};

export const MenuGetAll = (params?: object) => {
  return http.request<any>("get", baseUrlApi("menu/getAll"), { params });
};

export const MenuGetTree = (params?: object) => {
  return http.request<any>("get", baseUrlApi("menu/getTree"), { params });
};

export const MenuGetIdsByRoleId = (params?: object) => {
  return http.request<any>("get", baseUrlApi("menu/getIdsByRoleId"), {
    params
  });
};

export const MenuGetLeafIdsByRoleId = (params?: object) => {
  return http.request<any>("get", baseUrlApi("menu/getLeafIdsByRoleId"), {
    params
  });
};

export const MenuCreate = (data?: object) => {
  return http.request<any>("post", baseUrlApi("menu/create"), { data });
};

export const MenuEdit = (data?: object) => {
  return http.request<any>("put", baseUrlApi("menu/edit"), { data });
};

export const MenuDelete = (data?: object) => {
  return http.request<any>("delete", baseUrlApi("menu/delete"), { data });
};
