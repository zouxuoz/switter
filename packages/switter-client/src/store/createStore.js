import { createStore } from 'redux';
import compose from './composeEnhancers';
import reducers from './reducers';

export default () => {
  const store = createStore(
    reducers,
    compose(),
  );

  return store;
};
