import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import AlongAction from '../atom/AlongAction';
import AlongModal from './AlongModal';

export default () => {
  const basicModal = () => {
    AlongAction.open({
      subTitle: 'ยืนยันการบันทึก',
      textConfirm: 'ยืนยัน',
      // textCancel: "ไม่ยืนยัน",
      onConfirm: () => {
        alert('onConfirm');
      },
    });
  };

  const exampleModal = () => {
    AlongAction.open({
      subTitle:
        'OTP ได้รับการตรวจสอบแล้ว ท่านสามารถเปลี่ยนรหัสผ่านโดยกดที่ปุ่ม “ตกลง”',
      textConfirm: 'ตกลง',
      image: require('./test.jpg'),
      // textCancel: "ยกเลิก",
      onConfirm: () => {
        alert('onConfirm');
      },
      disabledTextCancel: true,
    });
  };

  const exampleModalType = () => {
    AlongAction.open({
      subTitle:
        'OTP ได้รับการตรวจสอบแล้ว ท่านสามารถเปลี่ยนรหัสผ่านโดยกดที่ปุ่ม “ตกลง”',
      textConfirm: 'ตกลง',
      type: 'warning',
      // textCancel: "ยกเลิก",
      onConfirm: () => {
        alert('onConfirm');
      },
      disabledTextCancel: true,
    });
  };

  const exampleModalType2 = () => {
    AlongAction.open({
      title: 'อนุมัติสำเร็จ',
      subTitle: 'ยินดีด้วย ท่านได้รับการอนุมัติจากแอดมินแล้ว',
      textConfirm: 'ตกลง',
      image: require('./test.jpg'),
      postionLogo: 'inside',
      componentIcon: (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 150,
            height: 150,
            borderRadius: 75,
            borderWidth: 5,
            borderColor: '#F4CF60',
            overflow: 'hidden',
          }}>
          <Image
            source={require('./test.jpg')}
            style={{width: 90, height: 90, borderRadius: 45}}
          />
        </View>
      ),
      confirmButtonStartLinearGradient: {x: 0.5, y: 0},
      confirmButtonEndLinearGradient: {x: 0.5, y: 1},
      confirmButtonBackgroundColor: ['#394C76', '#394C76'],
      // buttonConfrim: ({onPress}: any) => (
      //   // <Button onPress={onPress}>asdasd</Button>
      //   <View>
      //     <Text>13asd65</Text>
      //   </View>
      // ),
      onConfirm: () => {
        alert('onConfirm');
      },
      disabledTextCancel: false,
    });
  };

  return (
    <View
      style={{
        marginTop: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
      }}>
      <Button onPress={basicModal}>Modal Basic</Button>

      <Button onPress={exampleModal}>Modal Basic 2</Button>

      <Button onPress={exampleModalType}>Modal Basic Type</Button>

      <Button onPress={exampleModalType2}>Modal Type prompt chauy</Button>
      <View style={{position: 'relative'}}>
        <View
          style={{
            width: 300,
            height: 300,
            backgroundColor: 'red',
            zIndex: 0,
          }}></View>
        <View
          style={{
            borderColor: 'green',
            padding: 50,
            borderWidth: 2,
            width: 20,
            zIndex: 1,
            position: 'absolute',
            backgroundColor: 'transparent',
          }}></View>
      </View>
    </View>
  );
};

const Button = ({children, onPress}: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingVertical: 8,
        backgroundColor: '#1f5b75',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 5,
      }}>
      <Text style={{color: 'white'}}>{children}</Text>
    </TouchableOpacity>
  );
};
