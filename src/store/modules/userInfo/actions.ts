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
}

export function fetchData() {
  return {
    type: '@userInfo/FETCH_DATA_REQUEST',
  };
}

export function fetchDataSuccess({portfolio, funds}: FundsData) {
  return {
    type: '@userInfo/FETCH_DATA_SUCCESS',
    payload: {portfolio, funds},
  };
}
