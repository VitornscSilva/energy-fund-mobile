import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(middlewares);

sagaMiddleware.run(rootSaga);

export {store};
