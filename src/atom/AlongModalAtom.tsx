import {atom} from 'recoil';
import {FunctionComponent, ReactElement} from 'react';
import {TextStyle, ViewStyle} from 'react-native';
import {
  LinearGradient,
  LinearGradientProps,
} from 'react-native-linear-gradient';

export type AlongModalAtomProps = {
  title?: string;
  subTitle?: string;
  textConfirm?: string;
  textCancel?: string;
  disabledTextCancel?: Boolean;
  image?:
    | number
    | {
        uri: string;
      };
  onConfirm?: Function;
  onCancel?: Function;
  visible?: boolean;
  postionLogo?: 'inside' | 'top';
  componentIcon?: ReactElement;
  style?: ViewStyle;
  fontFamily?: string;
  confirmButtonContainerStyle?: ViewStyle;
  confirmButtonBackgroundColor?: string | Array<string>;
  confirmButtonStartLinearGradient?: {x: number; y: number};
  confirmButtonEndLinearGradient?: {x: number; y: number};
  cancelButtonContainerStyle?: ViewStyle;
  cancelButtonBackgroundColor?: string | Array<string>;
  cancelButtonStartLinearGradient?: {x: number; y: number};
  cancelButtonEndLinearGradient?: {x: number; y: number};
};

export type CloseType = {
  typeOnClose?: 'confirm' | 'close';
};

export type ModalType = {
  type?: 'success' | 'warning' | 'danger' | 'hidden' | 'inside';
};

export default atom({
  key: 'AlongModalAtom',
  default: {
    visible: false,
    type: 'success',
    title: '',
    subTitle: '',
    textConfirm: '',
    textCancel: '',
    imageUrl: '',
    postionLogo: 'top',
    disabledTextCancel: false,
    iconComponent: undefined,
    style: {},
    fontFamily: '',
    confirmButtonBackgroundColor: '',
    confirmButtonContainerStyle: {},
    confirmButtonStartLinearGradient: {x: 0, y: 0},
    confirmButtonEndLinearGradient: {x: 1, y: 1},
    cancelButtonBackgroundColor: '',
    cancelButtonContainerStyle: {},
    cancelButtonStartLinearGradient: {x: 0, y: 0},
    cancelButtonEndLinearGradient: {x: 1, y: 1},
    onConfirm: () => {},
  } as AlongModalAtomProps & CloseType & ModalType,
});
