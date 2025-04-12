import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export const API_BACKEND = 'http://localhost:3000';

const createAxiosInstance = (config: AxiosRequestConfig): AxiosInstance => {
	return axios.create(config);
};

export const client = createAxiosInstance({
	baseURL: API_BACKEND,
});
