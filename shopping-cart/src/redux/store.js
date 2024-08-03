// import reducer from "./productReducer/reducer";
import { legacy_createStore as createStore} from 'redux'
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

export default store;