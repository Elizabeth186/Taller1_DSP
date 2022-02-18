/**
 * @format
 * @flow strict-local
 */
 import React, {useState, useEffect} from 'react';
 import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  button,
 } from 'react-native';
 import Forms from './src/components/Forms';
 import Footer from './src/components/Footer';
 import Result from './src/components/Result';
 import colors from './src/utils/colors';
 export default function App() {
  const [tamano, setTamano] = useState(null);
  const [tipo, setTipo] = useState(null);
  const [pago, setPago] = useState(null);
  const [qnty, setQnty] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
 useEffect(() => {
  if (tamano && tipo && pago && qnty) calculate();
  else reset();
  }, [tamano, tipo, pago, qnty ]);
  const calculate = () => {
  reset();
  if (!tamano) {
    setErrorMessage('Seleccione tamaño de cafe');
    } else if (!tipo) {
    setErrorMessage('elige tipo de cafe');
    } else if (!pago) {
    setErrorMessage('selecciona forma d pago');
    }else if (!qnty) {
      setErrorMessage('elije una cantidad');
      } else {
    
    setTotal({
      
    });
    }
    };
    const reset = () => {
    setErrorMessage('');
    setTotal(null);
    };
    return (
    <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.background} />
    <Text style={styles.titleApp}>Cafe el quitasueño</Text>
    <Forms
    setTamano={setTamano}
    setTipo={setTipo}
    setPago={setPago}
    setQnty={setQnty}
    />
    </SafeAreaView>
    <Result
    tamano={tamano}
    tipo={tipo}
    pago={pago}
    qnty={qnty}
    total={total}
    errorMessage={errorMessage}
    />
    <Footer calculate={calculate} />
    </>
    );
   }
   const styles = StyleSheet.create({
    safeArea: {
    height: 290,
    alignItems: 'center',
    },
    background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    position: 'absolute',
    zIndex: -1,
    },
    titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
    },
   });