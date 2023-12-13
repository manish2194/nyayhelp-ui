import api from "./apiConfig";

//API functions related to a Domains and URls
export const submitQuestion = async (data) => {
  try {
    const response = await api.post("/question", data);
    return response.data;
  } catch (error) {
    console.error("Error fetching feature data:", error);
    throw error;
  }
};

export const getAllQuestions = async () => {
  try {
    const response = await api.get("/question");
    return response.data;
  } catch (error) {
    console.error("Error fetching feature data:", error);
    throw error;
  }
};

export const getQuestionsById = async (id) => {
  try {
    const response = await api.get(`/question/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching feature data:", error);
    throw error;
  }
};

export const getCommentsById = async (id) => {
  try {
    const response = await api.get(`/question/${id}/comments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching feature data:", error);
    throw error;
  }
};

export const submitComment = async (id, data) => {
  try {
    const response = await api.post(`/question/${id}/comments`, data);
    return response.data;
  } catch (error) {
    console.error("Error fetching feature data:", error);
    throw error;
  }
};
