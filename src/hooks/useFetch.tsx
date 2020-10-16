import useSWR from "swr";


export function useFetch<Data = any, Error = any>(param: string, platform?: string) {
  const baseUrl = "https://api.warframestat.us/";
  const searchUrl = baseUrl + (platform ? (platform + '/') : ('')) + param;
  console.log(searchUrl);
  const { data, error } = useSWR<Data, Error>(searchUrl, async url => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  })
  return { data, error }
}
