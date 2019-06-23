import config from './config';

export const apiFetch = (page) => {
  return fetch(`${config.url}${page}`, {
    method: 'GET'
  })
}
