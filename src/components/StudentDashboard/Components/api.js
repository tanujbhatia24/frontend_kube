import axios from "axios";

export const getTabData = () => {
  return axios.get(`http://localhost:8000/tabData`);
};
export const getProfileData = () => {
  return axios.get(`http://localhost:8000/profile`);
};
export const getCourseData = () => {
  return axios.get(`http://localhost:8000/course`);
};
export const getAssignmentData = () => {
  return axios.get(`http://localhost:8000/Assignment`);
};
