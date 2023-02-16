import React from "react"
import {RecoilRoot} from "recoil";
import RecoilNexus from "recoil-nexus";

type Props = {
    children: JSX.Element[] | JSX.Element,
};

const AlongProvider: React.FC<Props> = ({children}) => {
    return (
        <RecoilRoot>
            <RecoilNexus/>
            {children}
        </RecoilRoot>
    )
}

export default AlongProvider
