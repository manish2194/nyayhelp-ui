import api from './apiConfig';

//API functions related to a Domains and URls
export const getBlogsData = async (query) => {
  try {
    const response = await api.get('/blog', {
      query
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching feature data:', error);
    throw error;
  }
};

export const createBlog = async (data) => {
  try {
    const response = await api.post('/blog', data );
    return response.data;
  } catch (error) {
    console.error('Error fetching feature data:', error);
    throw error;
  }
};

export const getBlogById = async (id) => {
  try {
    const response = await api.get(`/blog/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching feature data:', error);
    throw error;
  }
};