import axios from 'axios'
import { getApiUrl } from 'utils/getApiUrl'

export const request = axios.create({
  baseURL: getApiUrl,
})
