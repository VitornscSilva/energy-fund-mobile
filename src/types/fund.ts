export interface Fund {
  name?: string;
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
  isPositive?: boolean;
}
