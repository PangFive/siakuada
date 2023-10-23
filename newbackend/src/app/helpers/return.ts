const res = ({ status, data, message, token }: any) => {
  let response: any = { status: status };

  if (token) {
    response.token = token;
  }

  if (data) {
    response.data = data;
  }

  if (message) {
    response.message = message;
  }

  return response
};

export default res;

