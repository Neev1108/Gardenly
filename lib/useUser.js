import swr from 'swr'

import { getUser } from "./userApi";

export default function useUser() {
  const { data, mutate, error } = swr("api_user", getUser);

  const loading = !data && !error;
  const loggedIn = !error && data;

  return {
    loading,
    loggedIn,
    user: data,
    mutate,
  };
}