const BASE_URL = "http://localhost:3001";

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Terjadi kesalahan pada server");
  }
  return response.json();
};

const api = {
  // --- GET Requests ---
  getCourses: () => fetch(`${BASE_URL}/courses`).then(handleResponse),
  getAuthors: () => fetch(`${BASE_URL}/authors`).then(handleResponse),
  getCourseDetails: (id) =>
    fetch(`${BASE_URL}/courses/${id}`).then(handleResponse),
  getRelatedCourses: (id) =>
    fetch(`${BASE_URL}/courses?id_ne=${id}&_limit=3`).then(handleResponse),
  getMyCourses: (userId) =>
    fetch(`${BASE_URL}/myCourses?userId=${userId}`).then(handleResponse),
  getOrders: (userId) =>
    fetch(`${BASE_URL}/orders?userId=${userId}`).then(handleResponse),
  getUserByEmail: (email) =>
    fetch(`${BASE_URL}/users?email=${email}`).then(handleResponse),

  // --- POST, PATCH, DELETE Requests ---
  addUser: (newUser) => {
    return fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    }).then(handleResponse);
  },

  updateUser: (userId, updatedData) => {
    return fetch(`${BASE_URL}/users/${userId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    }).then(handleResponse);
  },

  deleteUser: (userId) => {
    return fetch(`${BASE_URL}/users/${userId}`, {
      method: "DELETE",
    }).then(handleResponse);
  },

  createOrder: (newOrder) => {
    return fetch(`${BASE_URL}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    }).then(handleResponse);
  },

  deleteOrder: (orderId) => {
    return fetch(`${BASE_URL}/orders/${orderId}`, {
      method: "DELETE",
    }).then(handleResponse);
  },

  updateOrderStatus: (orderId, status) => {
    return fetch(`${BASE_URL}/orders/${orderId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    }).then(handleResponse);
  },

  addCourseToMyCourses: (newMyCourse) => {
    return fetch(`${BASE_URL}/myCourses`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMyCourse),
    }).then(handleResponse);
  },
};

export default api;
