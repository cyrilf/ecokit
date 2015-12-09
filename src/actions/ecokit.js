import * as ecokitConstant from 'constants/ecokit';

export function search(query) {
  return { type : ecokitConstant.ECOKIT_SEARCH, query };
};

export function changeSelectedMonth(month) {
  return { type : ecokitConstant.ECOKIT_CHANGE_SELECTED_MONTH, month };
};
