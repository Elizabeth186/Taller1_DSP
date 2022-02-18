import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';
export default function Form(props) {
 const {setTamano, setTipo, setPago, setQnty} = props;
 return (
 <View style={styles.viewForm}>
 <View style={styles.viewInputs}>
 <RNPickerSelect
 style={picketSelectStyles}
 onValueChange={(value) => setTamano(value)}
 placeholder={{
 label: 'Selecciona tamaño de cafe',
 value: null,
 }}
 items={[
 {label: '8oz', value: '8z', price: 2.50},
 {label: '12oz', value: '12oz', price: 3.50},
 {label: '16oz', value: '16oz', price: 4.50},
 {label: '20oz', value: '20oz', price: 6.10},
 ]}
 />
 <RNPickerSelect
 style={picketSelectStyles}
 onValueChange={(value) => setTipo(value)}
 placeholder={{
 label: 'selecciona tipo de cafe',
 value: null,
 }}
 items={[
 {label: 'negro', value: 'negro'},
 {label: 'con leche', value: 'con leche'},
 {label: 'colombiano', value: 'colombiano'},
 ]}
 />
 </View>
 <RNPickerSelect
 style={picketSelectStyles}
 onValueChange={(value) => setPago(value)}
 placeholder={{
 label: 'Tipo de pago',
 value: null,
 }}
 items={[
 {label: 'efectivo', value: 'efectivo'},
 {label: 'credito', value: 'credito'},
 {label: 'fiado', value: 'fiado'},
 ]}
 />
 <RNPickerSelect
 style={picketSelectStyles}
 onValueChange={(value) => setQnty(value)}
 placeholder={{
 label: 'cantidad',
 value: null,
 }}
 items={[
 {label: '1', value: '1'},
 {label: '2', value: '2'},
 {label: '3', value: '3'},
 ]}
 />
 
 </View>
 );
}
const styles = StyleSheet.create({
 viewForm: {
 position: 'absolute',
 bottom: 0,
 width: '70%',
 paddingHorizontal: 50,
 backgroundColor: colors.PRIMARY_COLOR_DARK,
 borderRadius: 30,
 height: 350,
 justifyContent: 'center',
 },
 viewInputs: {
 flexDirection: 'row',
 },
 input: {
 height: 50,
 backgroundColor: 'gray',
 borderWidth: 20,
 borderColor: colors.PRIMARY_COLOR,
 borderRadius: 30,
 width: '60%',
 marginRight: 5,
 marginLeft: -5,
 marginBottom: 10,
 color: 'gray',
 paddingHorizontal: 20,
 },
 inputPercentage: {
 width: '100%',
 marginLeft: 5,
 },
});
const picketSelectStyles = StyleSheet.create({
 inputIOS: {
 fontSize: 16,
 paddingVertical: 12,
 paddingHorizontal: 10,
 borderWidth: 1,
 borderColor: 'grey',
 borderRadius: 4,
 color: 'black',
 paddingRight: 30,
 backgroundColor: '#fff',
 marginLeft: -5,
 marginRight: -5,
 },
 inputAndroid: {
 fontSize: 16,
 paddingHorizontal: 10,
 paddingVertical: 8,
 borderWidth: 0.5,
 borderColor: 'grey',
 borderRadius: 8,
 color: 'black',
 paddingRight: 30,
 backgroundColor: '#fff',
 },
});