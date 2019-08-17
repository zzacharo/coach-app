export function serializeUserProfileResponse(response) {
  return {
    username: response.username,
    email: response.email,
    firstName: response.first_name,
    lastName: response.last_name,
    phoneNumber: response.phone_number,
    photoUrl: response.photo_url,
    vehicles: response.user_vehicles,
  };
}

