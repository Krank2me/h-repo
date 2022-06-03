import http from "../http-common";

export const getBuildings = async () => {
  return await http.get("/api/v1/buildings");
};

export const findBuildingByQuery = async (param) => {
  return await http.get(`/api/v1/buildings/${param}`);
};
