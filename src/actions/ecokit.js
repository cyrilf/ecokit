import { ECOKIT_SEARCH } from 'constants/ecokit';

export default {
  search: (query) => ({ type : ECOKIT_SEARCH, query })
};
