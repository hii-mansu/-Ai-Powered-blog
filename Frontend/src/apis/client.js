const BASE_URL = `${import.meta.env.VITE_BASE_URL}/api`;

const getHeaders = () => {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: token }),
  };
};


export const apiClient = {
  get: async (endpoint) => {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      headers: getHeaders(),
    });
    if (!res.ok) {
      const errorData = await res.json().catch(() => null);

      throw new Error(errorData?.message || "Something went wrong while fetching api.");
    }
    return res.json();
  },
  /*post: async (endpoint, data) => {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const error = await res.json().catch(() => ({ message: "API Error" }));
      throw new Error(error.message || "API Error");
    }
    return res.json();
  },
  put: async (endpoint, data) => {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "PUT",
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const error = await res.json().catch(() => ({ message: "API Error" }));
      throw new Error(error.message || "API Error");
    }
    return res.json();
  },
  patch: async (endpoint, data) => {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "PATCH",
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const error = await res.json().catch(() => ({ message: "API Error" }));
      throw new Error(error.message || "API Error");
    }
    return res.json();
  },
  delete: async (endpoint) => {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "DELETE",
      headers: getHeaders(),
    });
    if (!res.ok) {
      const error = await res.json().catch(() => ({ message: "API Error" }));
      throw new Error(error.message || "API Error");
    }
    return res.json();
  },*/
};
