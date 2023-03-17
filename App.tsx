import React from 'react';
import { SafeAreaView } from 'react-native';
import AlongModal from './src/components/AlongModal'
import AlongProvider from "./src/components/AlongProvider";
import Example from "./src/components/Example";


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
