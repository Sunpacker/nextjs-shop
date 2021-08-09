import { request } from 'api/request'

export async function fetchGoods(): Promise<any> {
  return request.get('goods')
}
