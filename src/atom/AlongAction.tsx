import { getRecoil, setRecoil } from "recoil-nexus";
import AlongModalAtom, {AlongModalAtomProps, CloseType, ModalType} from "./AlongModalAtom";

const open = (body: (AlongModalAtomProps & ModalType)) => {
    setRecoil(AlongModalAtom, {
        ...body,
        visible: true
    })
}

const close = (body?: CloseType[keyof CloseType]) => {
    const value = getRecoil(AlongModalAtom);
    setRecoil(AlongModalAtom, {
        ...value,
        visible: false,
        typeOnClose: body
    })
}

export default {
    open,
    close,
}
