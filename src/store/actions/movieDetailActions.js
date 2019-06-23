export const REQUEST_DETAIL_DATA = "REQUEST_DETAIL_DATA";
export const RECEIVE_DETAIL_DATA = "RECEIVE_DETAIL_DATA";

export const requestDetailData = payload => ({
  type: REQUEST_DETAIL_DATA,
  payload
});
export const receiveDetailData = data => ({
  type: RECEIVE_DETAIL_DATA,
  data
});
