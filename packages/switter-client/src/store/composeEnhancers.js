import { compose } from 'redux';

let result;

if (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  result = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
} else {
  result = compose;
}

export default result;
