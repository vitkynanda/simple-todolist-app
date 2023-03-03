const callApi = async ({ path, method, payload }) => {
  let body;
  let headers = {};

  if (["POST", "PUT"].includes(method)) {
    headers["Content-Type"] = "application/json";
    body = JSON.stringify(payload);
  }

  try {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL + path}`, {
      method,
      headers,
      body,
    });

    return await res.json();
  } catch (error) {
    return error;
  }
};

export default callApi;
