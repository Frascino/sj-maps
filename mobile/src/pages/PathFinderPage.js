import React, { useState } from 'react';
import { View , Text, StyleSheet} from 'react-native';
import {Node} from './../components/Node';
import {NodeRow} from './../components/NodeRow';


export default function PathFinderPage() {

  const [boo,setBoo] = useState(true);
  let i = 1;

  const response = [
    [
      {x:1, y:1, isActive:true},
      {x:1, y:2, isActive:false},
      {x:1, y:3, isActive:false},
    ],
    [
      {x:2, y:1, isActive:true},
      {x:2, y:2, isActive:true},
      {x:2, y:3, isActive:false},
    ],
    
  ];

  const row = response.map((nodeRow,keyRow) =>
        <NodeRow key={keyRow} style={styles.row}>
          {nodeRow.map((node,key) => <Node key={node.x+'-'+node.y} isActive={node.isActive}/>)}
        </NodeRow>
  );
      
  return <View>
    <Text>OláOláOlá</Text>
      {row}
    </View>
}


const styles = StyleSheet.create({
  map: {
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
});