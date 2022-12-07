import axios from "axios";

export const getTabData = () => {
  return axios.get(`http://localhost:8001/tabData`);
};
export const getProfileData = () => {
  return axios.get(`http://localhost:8001/profile`);
};
export const getCourseData = () => {
  return axios.get(`http://localhost:8001/course`);
};
export const getAssignmentData = () => {
  return axios.get(`http://localhost:8001/Assignment`);
};
