const url = process.env.NEXT_PUBLIC_DEV_API_URL;

export const postsApi = {
  get: `${url}/posts/read`,
  post: `${url}/posts/insert`,
  patch: `${url}/posts/update`,
  delete: `${url}/posts/delete`
};

export const categoriesApi = {
  get: `${url}/category/read`,
  post: `${url}/category/insert`,
  patch: `${url}/category/update`,
  delete: `${url}/category/delete`
};

export const userApi = {
  get: `${url}/auth/user-info`,
  post: `${url}/auth/login`
};

export const registerApi = {
  post: `${url}/auth/register`
};