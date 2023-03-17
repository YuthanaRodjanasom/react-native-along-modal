import React from 'react';
import { SafeAreaView } from 'react-native';
import AlongProvider from "./src/components/AlongProvider";
import Example from "./src/components/Example";


const App = () => {
    return (
        <SafeAreaView>
            <AlongProvider>
                <Example />
            </AlongProvider>
        </SafeAreaView>
    );
};
export default App;
