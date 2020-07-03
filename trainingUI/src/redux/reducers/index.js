import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as demo from 'src/modules/demo/reducers';
import * as statistic from 'src/modules/statistic/reducers';

export default combineReducers({
  routing: routerReducer,
  demo: combineReducers(demo),
  statistic: combineReducers(statistic),
  fake: () => []
});
