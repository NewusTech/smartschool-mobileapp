import apiClient from "@/lib/fatcher";
import { useAccessToken } from "@/store/userStore";
import { useQuery } from "@tanstack/react-query";
import { PnpResponseSuccess, TncResponseSuccess } from "./interface";
import { ApiResponse, DataObject } from "@/types/types";

export const getTnc = async () => {
  const response = await apiClient<ApiResponse<DataObject<TncResponseSuccess>>>(
    {
      method: "GET",
      url: "/snk/get",
    }
  );
  return response.data;
};
export const useGetTnc = () => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetTnc", accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getTnc(),
  });
};

export const getPnp = async () => {
  const response = await apiClient<ApiResponse<DataObject<PnpResponseSuccess>>>(
    {
      method: "GET",
      url: "/kebijakanprivasi/get",
    }
  );
  return response.data;
};

export const useGetPnp = () => {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["useGetPnp", accessToken],
    // TODO replace with actual get Profile API
    queryFn: () => getPnp(),
  });
};
