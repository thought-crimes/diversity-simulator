import axios from 'axios';

// B
export const expandOneDeal = (dealKey) => ({
  type: 'EXPAND_ONE_DEAL',
  dealKey,
});
// A

export const hideOneDeal = (dealKey) => ({
  type: 'HIDE_ONE_DEAL',
  dealKey,
});

export const doSearch = (searchTerm) => {
  return async (dispatch) => {
    const resp = await axios.get(
      `https://bakesaleforgood.com/api/deals?searchTerm=${searchTerm}`
    );
    dispatch({
      type: 'RECEIVED_SEARCH_RESULTS',
      dealsFromSearch: resp.data,
    });
  };
};

// Thunk
export const fetchMoreDeals = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'START_FETCHING',
      });
      const resp = await axios.get('https://bakesaleforgood.com/api/deals');
      setTimeout(() => {
        dispatch({
          type: 'RECEIVED_NEW_DEALS',
          newDeals: resp.data.slice(5),
        });
      }, 4000);
    } catch (err) {
      dispatch({
        type: 'FETCH_ERROR',
      });
    }
  };
};
