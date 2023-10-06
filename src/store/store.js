import { configureStore } from '@reduxjs/toolkit';
import valorantReducer from '../reducers/valorantReducer';
import { Provider } from 'react-redux';

const store = configureStore(
    {reducer:valorantReducer,}
);

function MainProvider({children}) {
    return <Provider store={store}>{children}</Provider>;
}

export default MainProvider;
