import { useState} from 'react';
import {BASE_URL, DEFAULT_OPTIONS} from '../utils';

export const useFetch = <T = undefined>(baseUrl: string = BASE_URL): [(url:string, options?:any) => Promise<any>, T | undefined, boolean, any] => {
  const [response, setResponse] = useState<T>();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (url: string, options: any = DEFAULT_OPTIONS) => {
    try {
      setIsLoading(true);
      const res = await fetch(baseUrl + url, options);
      const json = await res.json();
      setResponse(json);
      setIsLoading(false);
    } catch (e) {
      setError(e);
    }
  };

  return [fetchData, response, isLoading, error];
}
