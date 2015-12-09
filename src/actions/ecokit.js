import { ECOKIT_SEARCH } from 'constants/ecokit';

export function search(query) {
  return { type : ECOKIT_SEARCH, query };
};
