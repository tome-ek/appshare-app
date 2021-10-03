export interface ApiError {
  message: string;
}

interface ApiErrorWrapper {
  error: unknown;
}

export const isApiErrorWrapper = (error: unknown): error is ApiErrorWrapper => {
  if (typeof error === "object") {
    const object = error || {};
    return "error" in object;
  }
  return false;
};

export const isApiError = (error: unknown): error is ApiError => {
  if (typeof error === "object") {
    if (isApiErrorWrapper(error)) {
      const object = error || {};
      return "message" in object;
    }
  }
  return false;
};
