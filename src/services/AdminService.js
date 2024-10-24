import { BASE_URL } from "../config/core";
import axios from "axios";
import {
  CREATE_INVITATION_ROUTE,
  GET_ALL_INVITATION,
  CHANGE_INVITATION_STATUS,
  UPLOAD_IMAGE_TO_GALLERY,
  GET_ALL_IMAGES,
  CHECK_INVITAION_ROUTES,
} from "../config/routes";

export const CREATE_INVITATION = async (payload) => {
  try {
    const response = await axios.post(
      `${BASE_URL}${CREATE_INVITATION_ROUTE}`,
      payload
    );
    return response.data;
  } catch (error) {
    return error?.response?.data || error?.response || error.message;
  }
};
export const CHECK_INVITATION = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}${CHECK_INVITAION_ROUTES}/${id}`
    );
    return response.data;
  } catch (error) {
    return error?.response?.data || error?.response || error.message;
  }
};
export const CHANGE_STATUS = async (payload) => {
  try {
    const response = await axios.post(
      `${BASE_URL}${CHANGE_INVITATION_STATUS}`,
      payload
    );
    return response.data;
  } catch (error) {
    return error?.response?.data || error?.response || error.message;
  }
};
export const UPLOAD_IMAGE = async (payload) => {
  try {
    const response = await axios.post(
      `${BASE_URL}${UPLOAD_IMAGE_TO_GALLERY}`,
      payload
    );
    return response.data;
  } catch (error) {
    return error?.response?.data || error?.response || error.message;
  }
};

export const GET_INVITATIONS = async () => {
  try {
    const response = await axios.get(`${BASE_URL}${GET_ALL_INVITATION}`);
    return response.data;
  } catch (error) {
    return error?.response?.data || error?.response || error.message;
  }
};
export const GET_IMAGES = async () => {
  try {
    const response = await axios.get(`${BASE_URL}${GET_ALL_IMAGES}`);
    return response.data;
  } catch (error) {
    return error?.response?.data || error?.response || error.message;
  }
};
