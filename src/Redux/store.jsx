import { createStore,combineReducers } from 'redux';
import { searchReducer } from './search Page/reducer';
import { queryReducer} from "./SearchQuery/reducer"
const rootReducer =combineReducers({
    search : searchReducer,
    query : queryReducer
  })
export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
