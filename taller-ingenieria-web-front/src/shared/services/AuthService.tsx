import axios from "axios";

interface LoginCredentials {
  username: string;
  password: string;
}

interface RegisterCredentials {
  username: string;
  password: string;
  email: string;
}

export const login = async (credentials: LoginCredentials) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/auth/authenticate",
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
      "http://localhost:8080/api/auth/register",
      credentials
    );
    return response.data;
  } catch (error) {
    throw new Error("Register failed");
  }
};
