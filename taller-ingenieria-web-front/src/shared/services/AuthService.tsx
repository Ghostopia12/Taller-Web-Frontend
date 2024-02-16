import axios from "axios";

interface LoginCredentials {
  username: string;
  password: string;
}

interface RegisterCredentials {
  username: string;
  password: string;
  email: string;
  role: string;
}

function getHeaders() {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

export const login = async (credentials: LoginCredentials) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/users/login",
      credentials
    );
    return response.data;
  } catch (error) {
    throw new Error("Login failed");
  }
};

export const register = async (credentials: RegisterCredentials) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/users/create",
      credentials, getHeaders()
    );
    return response.data;
  } catch (error) {
    throw new Error("Register failed");
  }
};
