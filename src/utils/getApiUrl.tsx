export const getApiUrl: string =
  process.env.NODE_ENV === 'development'
    ? typeof window === 'undefined'
      ? process.env.API_URL
      : '/api/'
    : typeof window === 'undefined'
    ? process.env.API_URL
    : '/api/'
