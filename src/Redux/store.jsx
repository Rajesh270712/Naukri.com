import { createStore,combineReducers } from 'redux';
import { searchReducer } from './search Page/reducer';
import { queryReducer} from "./SearchQuery/reducer";
import { educationReducer } from './Education/reducer';
import {userReducer} from "./UserDetails/reducer"
const rootReducer =combineReducers({
    search : searchReducer,
    query : queryReducer,
    education : educationReducer,
    userDetails: userReducer
  })
export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
