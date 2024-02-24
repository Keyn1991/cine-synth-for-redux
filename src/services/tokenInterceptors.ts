import { axiosService } from "./axiosService";

axiosService.interceptors.request.use(
    config => {
        const token: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Yjc0OTg3OGQ2ZTM4ZGI5OWQ1ZDlmZGMwODlmYzRmMiIsInN1YiI6IjYzZWU3ZGQwODhiMTQ4MDBkZGJiZjMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OmBE_pXFPqyaXsz4DOY_O-904_OvEjRQcIceHwom5b8';
        config.headers.Authorization = `Bearer ${token}`;

        return config;
    }
);
