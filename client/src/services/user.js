import http from "../http-common";

export const createUser = async (user) => {
  return await http.post("/api/v1/user", user);
};
