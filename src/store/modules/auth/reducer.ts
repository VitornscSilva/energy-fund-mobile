import {produce} from 'immer';

interface Action {
  type: string;
}

interface Draft {
  loading: boolean;
  signed: boolean;
}

const INICIAL_STATE = {
  signed: false,
  loading: false,
};

export default function auth(state = INICIAL_STATE, action: Action) {
  return produce(state, (draft: Draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.signed = false;
        break;
      }
      default:
    }
  });
}
