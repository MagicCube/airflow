import App from './components/App';
import combinedReducer from './reducers';

export const meta = require('./meta').default;

export default App;

export const reducer = combinedReducer;
