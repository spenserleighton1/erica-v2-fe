import { apiFetch } from './api'

export const getPage = (page) => {
  return apiFetch(`/pages/${page}`)
  .then(response => response.json())
}





