import { apiClient } from "./client";


export const blogApi = {
    getPublicBlogs: () => apiClient.get('/blog/allblogs'),
    getAllBlogs: () => apiClient.get('/admin/allblogs'),
    getSiteSettings: () => apiClient.get('/admin/siteadminsettings'),
    getById: (id) => apiClient.get(`/projects/${id}`),
    create: (data) => apiClient.post('/projects', data),
    update: ({ id, data }) => apiClient.put(`/projects/${id}`, data),
    delete: (id) => apiClient.delete(`/projects/${id}`),
};