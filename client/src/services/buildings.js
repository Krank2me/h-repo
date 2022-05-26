import http from "../http-common";

export const getBuildings = async () => {
  return await http.get("/api/v1/buildings");
};
