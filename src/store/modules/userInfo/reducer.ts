import {produce} from 'immer';
import {FundsData} from '../../../types/fundData';

interface Action {
  type: string;
  payload: FundsData;
}

interface UserInfo extends FundsData {
  loading: boolean;
}

const INICIAL_STATE: UserInfo = {
  portfolio: {},
  funds: [],
  loading: false,
};

export default function funds(state = INICIAL_STATE, action: Action) {
  return produce(state, (draft: UserInfo) => {
    switch (action.type) {
      case '@userInfo/FETCH_DATA_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@userInfo/FETCH_DATA_SUCCESS': {
        draft.portfolio = action.payload.portfolio;
        draft.funds = action.payload.funds;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
