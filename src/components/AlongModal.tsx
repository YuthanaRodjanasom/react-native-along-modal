import React from 'react';
import {Text, View, StyleSheet, Image, TextStyle} from 'react-native';
import Modal from 'react-native-modal';
import AlongModalAtom from '../atom/AlongModalAtom';
import AlongAction from '../atom/AlongAction';
import {useRecoilValue} from 'recoil';
import LinearGradient from 'react-native-linear-gradient';

export type AlongModalProps = {
  textHeaderStyle?: TextStyle;
  textInfoStyle?: TextStyle;
};

const AlongModal = (props: AlongModalProps) => {
  let styles = _Styles();

  const modal = useRecoilValue(AlongModalAtom);

  const RenderImage = () => {
    if (!!modal.image) {
      return (
        <View style={styles.modal_frame}>
          {!!modal.image && (
            <View style={styles.modal_frame_container}>
              {/* Third Circle Frame */}
              <Image style={styles.modal_frame_content} source={modal.image} />
            </View>
          )}
        </View>
      );
    } else if (!!modal.componentIcon) {
      return (
        <View style={styles.modal_frame}>
          {!!modal.componentIcon && (
            <View style={styles.modal_frame_container}>
              {/* Third Circle Frame */}
              <View style={styles.modal_frame_content}>
                {modal.componentIcon}
              </View>
            </View>
          )}
        </View>
      );
    } else if (modal.type !== 'hidden') {
      return (
        <View style={styles.modal_frame}>
          {/* <WarningIcon /> */}
        </View>
      );
    } else {
      return <View></View>;
    }
  };

  const backgroundConfirmButton = (): string[] => {
    if (
      typeof modal.confirmButtonBackgroundColor === 'string' &&
      !!modal.confirmButtonBackgroundColor
    ) {
      return [
        modal.confirmButtonBackgroundColor,
        modal.confirmButtonBackgroundColor,
      ];
    } else if (Array.isArray(modal.confirmButtonBackgroundColor)) {
      return modal.confirmButtonBackgroundColor;
    } else {
      return ['#65A4FA', '#1370ED'];
    }
  };

  const backgroundCancelButton = (): string[] => {
    if (
      typeof modal.cancelButtonBackgroundColor === 'string' &&
      !!modal.cancelButtonBackgroundColor
    ) {
      return [
        modal.cancelButtonBackgroundColor,
        modal.cancelButtonBackgroundColor,
      ];
    } else if (Array.isArray(modal.cancelButtonBackgroundColor)) {
      return modal.cancelButtonBackgroundColor;
    } else {
      return ['#FFF', '#FFF'];
    }
  };

  return (
    <Modal
      style={styles.modal_container}
      isVisible={modal.visible}
      swipeDirection={null || ['down']}
      onModalHide={() => {
        if (modal.typeOnClose === 'confirm' && !!modal.onConfirm) {
          modal.onConfirm();
        } else if (modal.typeOnClose === 'close' && !!modal.onCancel) {
          modal.onCancel();
        }
      }}>
      <View style={[styles.modal_content, modal.style]}>
        {modal.postionLogo !== 'inside' && <RenderImage />}

        <View
          style={[
            !!modal.image
              ? styles.text_content
              : styles.text_content_without_image,
            (modal.type === 'hidden' || modal.postionLogo === 'inside') && {
              marginTop: 0,
            },
          ]}>
          {(modal.componentIcon != undefined || modal.image) &&
            modal.postionLogo == 'inside' && (
              <View style={{marginTop: -25, marginBottom: 10}}>
                {modal.image ? (
                  <Image
                    style={styles.modal_frame_content}
                    source={modal.image}
                  />
                ) : (
                  modal.componentIcon
                )}
              </View>
            )}

          {/*Header text*/}
          <Text
            style={[
              styles.text_header,
              props.textHeaderStyle,
              {fontFamily: modal.fontFamily},
            ]}>
            {modal.title || 'แจ้งเตือน'}
          </Text>

          {/*Text description*/}
          {modal.subTitle && (
            <Text
              style={[
                styles.text_info,
                props.textInfoStyle,
                {fontFamily: modal.fontFamily},
              ]}>
              {modal.subTitle}
            </Text>
          )}

          {/*Show confirm condition*/}
          <LinearGradient
            start={modal.confirmButtonStartLinearGradient}
            end={modal.confirmButtonEndLinearGradient}
            colors={backgroundConfirmButton()}
            style={[styles.confirm_button, modal.confirmButtonContainerStyle]}>
            <Text
              onPress={() => {
                AlongAction.close('confirm');
              }}
              style={[styles.text_confrim, {fontFamily: modal.fontFamily}]}>
              {`${modal.textConfirm || 'ตกลง'}`}
            </Text>
          </LinearGradient>

          {/*Show cancel condition*/}
          {!modal.disabledTextCancel && (
            <LinearGradient
              start={modal.cancelButtonStartLinearGradient}
              end={modal.cancelButtonEndLinearGradient}
              colors={backgroundCancelButton()}
              style={[styles.cancel_button, modal.cancelButtonContainerStyle]}>
              <Text
                style={[styles.text_cancel, {fontFamily: modal.fontFamily}]}
                onPress={async () => {
                  AlongAction.close('close');
                }}>
                {`${modal.textCancel || 'ยกเลิก'}`}
              </Text>
            </LinearGradient>
          )}
        </View>
      </View>
    </Modal>
  );
};

export const _Styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
    },
    modal_container: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    modal_content: {
      backgroundColor: '#FFF',
      paddingBottom: 30,
      paddingTop: 50,
      borderTopRightRadius: 50,
      borderTopLeftRadius: 50,
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modal_frame: {
      backgroundColor: '#FFF',
      padding: 10,
      width: 130,
      height: 130,
      position: 'absolute',
      top: -65,
      alignSelf: 'center',
      borderRadius: 65,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    modal_frame_container: {
      width: 115,
      height: 115,
      borderRadius: 57.5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modal_frame_content: {
      width: 95,
      height: 95,
      borderRadius: 47.5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text_header: {
      fontSize: 24,
      lineHeight: 29,
      padding: 5,
      color: '#4d4d4d',
    },
    text_content: {
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 30,
    },
    text_content_without_image: {
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 10,
    },
    text_info: {
      fontSize: 16,
      textAlign: 'center',
      paddingHorizontal: 12,
      color: '#5d5d5d',
    },
    confirm_button: {
      borderRadius: 23,
      marginTop: 25,
    },
    cancel_button: {
      paddingTop: 10,
    },
    text_confrim: {
      fontSize: 22,
      color: '#fff',
      paddingHorizontal: 55,
      paddingVertical: 10,
      lineHeight: 28,
    },
    text_cancel: {
      color: '#2F80ED',
      textDecorationLine: 'underline',
      fontSize: 18,
    },
  });
};

export default AlongModal;
