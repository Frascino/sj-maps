import React, { useState } from 'react';
import { View , Text} from 'react-native';
import {Node} from './../components/Node';


export default function PathFinderPage() {

  const [boo,setBoo] = useState(true);

  let response = [
    {nodeId:1, isActive:true},
    {nodeId:2, isActive:false},
    {nodeId:3, isActive:true},
    {nodeId:4, isActive:false},
  ];

  const nodes = response.map((node, key) => 
    <Node key={node.nodeId} isActive={node.isActive}/>
  );

  return <View>
    <Text>OláOláOlá</Text>
      {nodes}
    </View>
}
