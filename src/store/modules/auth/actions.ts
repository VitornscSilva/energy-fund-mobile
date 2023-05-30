interface SignInRequest {
  email: string;
  password: string;
}

interface SignUpRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export function signInRequest({email, password}: SignInRequest) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {email, password},
  };
}

export function signInSuccess() {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
  };
}

export function signUpRequest(user: SignUpRequest) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {user},
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
