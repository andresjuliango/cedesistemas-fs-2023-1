import axios from 'axios';

const headersConfig = () => {
  return {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
};

const HTTP_METHODS = {
  POST: 'post',
  GET: 'get',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete'
}

export const httpRequest = async ({
  method = HTTP_METHODS.POST,
  endpoint = '/',
  body = {},
  params = {}
}) => {
  try {
    const url = 'http://localhost:3000' + endpoint
    const options = {
      method,
      url,
      data: body,
      params,
      headers: headersConfig()
    }
    return await axios(options);
  } catch (error) {
    throw error;
  }

};
