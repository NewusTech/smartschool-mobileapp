import { AxiosError, HttpStatusCode } from "axios";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useAccessToken } from "@/store/userStore";
import apiClient from "@/lib/fatcher";
import { PostLoginPayload, PostRegisterPayload } from "./validation";

export type PostLoginResponseSuccess = {
  data: {
    token: string;
    type: "bearer";
  };
};
export type PostResponseSuccess = {
  status: HttpStatusCode;
  message: string;
};

export type ResponseError = {
  message: string;
  status: string;
  data?: {
    type: string;
    message: string;
    field: string;
  }[];
};

export const postLogin = async (payload: PostLoginPayload) => {
  const response = await apiClient<PostLoginResponseSuccess>({
    method: "POST",
    url: "/login",
    data: payload,
  });

  return response.data;
};

export const postRegister = async (payload: PostRegisterPayload) => {
  const response = await apiClient({
    method: "POST",
    url: "/register",
    data: payload,
  });

  return response.data;
};

export type userProfileResponseSuccess = {
  status: 200;
  message: "Success Get User Profiles";
  data: {
    id: 6;
    email: string;
  };
};

export const getUserProfile = async () => {
  const response = await apiClient<userProfileResponseSuccess>({
    method: "GET",
    url: "/user/profile/get",
  });
  return response.data;
};

export const useAuthLogin = () => {
  return useMutation({
    mutationFn: (payload: PostLoginPayload) => postLogin(payload),
    onError: (error: AxiosError<ResponseError>) => error,
  });
};

export const useAuthRegister = () => {
  return useMutation({
    mutationFn: (payload: PostRegisterPayload) => postRegister(payload),
    onError: (error: AxiosError<ResponseError>) => error,
  });
};

export const useGetProfile = () => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetProfile", accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getUserProfile(),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
  });
};
