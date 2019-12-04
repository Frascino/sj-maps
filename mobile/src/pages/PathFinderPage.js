import React, { useState, useEffect } from 'react';
import { View , Text, StyleSheet, Image, AsyncStorage} from 'react-native';
import {Node} from './../components/Node';
import {NodeRow} from './../components/NodeRow';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import terreo from '../../assets/terreo.png';
import api from '../../backend/api';

export default function PathFinderPage() {

    const terreoX = 30;
    const terreoY = 60;

    let terreoArr = [];

    for (let linhaX = 0; linhaX < terreoX; linhaX++) {
        let tempY = [];
        for (let linhaY = 0; linhaY < terreoY; linhaY++) {
            tempY.push({
                x: linhaX,
                y: linhaY,
                isActive: false,
            });
        }
        terreoArr.push(tempY);
    }

    const [matriz,setMatriz]=useState([]);
    
    useEffect(() => {
      AsyncStorage.getItem('salaAtual').then(storagedSalaAtual => {
         const salaAtual = storagedSalaAtual;
         AsyncStorage.getItem('salaDestino').then(storagedSalaDestino => {
           const salaDestino = storagedSalaDestino;
           const caminho = api.generateRoute(salaAtual, salaDestino);

           caminho.forEach(element => {
            terreoArr[element.y][element.x] = ({
              x: element.y,
              y: element.x,
              isActive: true,
            });
          });

          const matrizAsync = terreoArr.map((nodeRow,keyRow) =>
            <NodeRow key={keyRow} style={styles.row}>
              {nodeRow.map((node,key) => 
              <Node key={key} isActive={node.isActive}/>)}
            </NodeRow>
          );

          setMatriz(matrizAsync);

         })
      })

    },[]);

      
    return <View style={{flex: 1}}>
        <ReactNativeZoomableView
        maxZoom={1.2}
        minZoom={0.8}
        zoomStep={1}
        initialZoom={1}
        bindToBorders={false}
        movementSensibility={0.8}
        >
        <Image source={terreo} style={styles.bgImage}/>
        <View style={styles.matriz}>{matriz}</View>


    </ReactNativeZoomableView>
    </View>
}


const styles = StyleSheet.create({
  map: {
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  bgImage: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position:'absolute',
  },
  matriz: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position:'absolute',
  },
});