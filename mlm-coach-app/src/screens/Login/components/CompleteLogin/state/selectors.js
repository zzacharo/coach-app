export function serializeLoginResponse(response) {
  return {
    token: response.token,
    userId: response.user_id
  };
}
