import {Fund} from './fund';
import {Portfolio} from './portfolio';

export interface FundsData {
  portfolio: Portfolio;
  funds: Fund[];
}
