import React from 'react';
import { SafeAreaView } from 'react-native';
import AlongModal from './src/compoents/AlongModal'
import AlongProvider from "./src/compoents/AlongProvider";
import Example from "./src/compoents/Example";


const App = () => {
    return (
        <SafeAreaView>
            <AlongProvider>
                <Example />
                <AlongModal

                />
            </AlongProvider>
        </SafeAreaView>
    );
};
export default App;
