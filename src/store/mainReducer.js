export default (state, action) => {
  switch (action.type) {
    case 'EXPAND_ONE_DEAL':
      return {
        ...state,
        deals: state.deals.map((deal) => ({
          ...deal,
          isExpanded: deal.key === action.dealKey,
        })),
      };
    case 'HIDE_ONE_DEAL':
      return {
        ...state,
        deals: state.deals.filter((deal) => {
          return deal.key !== action.dealKey;
        }),
      };
    case 'RECEIVED_SEARCH_RESULTS':
      return {
        ...state,
        dealsFromSearch: action.dealsFromSearch,
      };
    case 'RECEIVED_NEW_DEALS':
      return {
        ...state,
        deals: [...state.deals, ...action.newDeals],
        isFetching: false,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        errorMessage: 'Something went wrong',
        isFetching: false,
      };
    case 'START_FETCHING':
      return {
        ...state,
        isFetching: true,
      };
    default:
      return state;
  }
};
