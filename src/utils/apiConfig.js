import axios from "axios";

const header = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

const Server_Api_Url = import.meta.env.VITE_APP_SERVER_API;

function handleError(error) {
  return {
    message:
      error?.response?.data?.message ||
      error?.message ||
      "Something Went Wrong!!!",
    statusCode: error?.response?.data?.statusCode || 400,
    success: false,
  };
}

export async function getData(endpoint, queryParams = "", headers = header) {
  try {
    const response = await axios.get(
      `${Server_Api_Url}/${endpoint}${queryParams}`,
      headers
    );
    return response;
  } catch (error) {
    return handleError(error);
  }
}

export async function postData(
  endpoint,
  queryParams = "",
  payload = {},
  headers = header
) {
  try {
    const response = await axios.post(
      `${Server_Api_Url}/${endpoint}${queryParams}`,
      payload,
      headers
    );
    return response;
  } catch (error) {
    return handleError(error);
  }
}

export async function patchData(
  endpoint,
  queryParams = "",
  payload = {},
  headers = header
) {
  try {
    const response = await axios.patch(
      `${Server_Api_Url}/${endpoint}${queryParams}`,
      payload,
      headers
    );
    return response;
  } catch (error) {
    return handleError(error);
  }
}

export async function putData(
  endpoint,
  queryParams = "",
  payload = {},
  headers = header
) {
  try {
    const response = await axios.put(
      `${Server_Api_Url}/${endpoint}${queryParams}`,
      payload,
      headers
    );
    return response;
  } catch (error) {
    return handleError(error);
  }
}

export async function deleteData(
  endpoint,
  queryParams = "",
  payload = {},
  headers = header
) {
  try {
    const response = await axios.delete(
      `${Server_Api_Url}/${endpoint}${queryParams}`,
      payload,
      headers
    );
    return response;
  } catch (error) {
    return handleError(error);
  }
}
