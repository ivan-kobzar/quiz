import storageSession from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import { AnyAction, combineReducers, createStore, Store } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

const persistConfig = {
  key: "quiz-flow-boilerplate",
  storage: storageSession,
};

export const configStore = () => {
  const persistedReducer = persistReducer(persistConfig, combineReducers({}));
  let store: Store<{}, AnyAction> = createStore(
    persistedReducer,
    devToolsEnhancer({})
  );

  return {
    store,
    persistor: persistStore(store),
  };
};
