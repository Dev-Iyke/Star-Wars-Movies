import { Children } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "../redux-toolkit/store";
const AppProvider = ({children}) => {
    const persistRedux = persistStore(store)
    return ( 
        <Provider store={store}>
            <PersistGate loading={
                <div id="loader">
                    <img src='imgs/starwars-icon.png' alt="loading" id="loading"/>
                    <h2>Loading...</h2>
                </div>
                
                } persistor={persistRedux}>
                {
                    children
                }
            </PersistGate>
        </Provider>
     );
}
 
export default AppProvider;