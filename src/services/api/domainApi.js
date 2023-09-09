import api from './apiConfig';

//API functions related to a Domains and URls
export const getFeatureData = async () => {
  try {
    const response = await api.get('/feature-data');
    return response.data;
  } catch (error) {
    console.error('Error fetching feature data:', error);
    throw error;
  }
};

export const createFeatureItem = async (itemData) => {
  try {
    const response = await api.post('/feature-data', itemData);
    return response.data;
  } catch (error) {
    console.error('Error creating feature item:', error);
    throw error;
  }
};

export const updateFeatureItem = async (itemId, itemData) => {
  try {
    const response = await api.put(`/feature-data/${itemId}`, itemData);
    return response.data;
  } catch (error) {
    console.error('Error updating feature item:', error);
    throw error;
  }
};

export const deleteFeatureItem = async (itemId) => {
  try {
    const response = await api.delete(`/feature-data/${itemId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting feature item:', error);
    throw error;
  }
};
