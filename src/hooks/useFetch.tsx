import useSWR from "swr";
import { api } from "../services/api";


export function useFetch<Data = any, Error = any>(param: string, platform?: string) {
  const searchUrl = (platform ? (platform + '/') : ('')) + param;
  const { data, error } = useSWR<Data, Error>(searchUrl, async url => {
    const response = await api.get<Data>(url);
    return response.data;
  })
  return { data, error }
}
