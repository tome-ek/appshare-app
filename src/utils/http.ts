import { isApiError, isApiErrorWrapper } from "./ApiError";

export const post = async (url: string, body: Record<string, any>) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (isApiErrorWrapper(json) && isApiError(json.error)) {
    throw new Error(json.error.message);
  }

  return json;
};
