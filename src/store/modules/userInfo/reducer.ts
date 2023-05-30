import {produce} from 'immer';

interface Action {
  type: string;
  payload: FundsData;
}

interface Portfolio {
  amount?: number;
  increasement?: number;
}

interface Fund {
  name?: string;
  isPositive?: boolean;
  abbr?: string;
  currentPrice?: string;
  increasement?: number;
  chartData?: number[];
  infoStats?: {
    aum?: string;
    issueData?: string;
    vintageRange?: string;
    ter?: string;
    priceAtClose?: string;
    priceAtOpen?: string;
  };
  portfolio?: {
    credits?: number;
    amount?: string;
    lastPurchase?: string;
    increasement?: number;
    retiredCredits?: number;
  };
}

interface FundsData {
  portfolio: Portfolio;
  funds: Fund[];
  loading: boolean;
}

const INICIAL_STATE: FundsData = {
  portfolio: {},
  funds: [],
  loading: false,
};

export default function funds(state = INICIAL_STATE, action: Action) {
  return produce(state, (draft: FundsData) => {
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
