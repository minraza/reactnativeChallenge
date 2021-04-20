import React, {FC, useState} from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {emailInfo} from './emailData'
import { SwipeListView,SwipeRow } from 'react-native-swipe-list-view';


const App: FC = () => {

  const [emailData,setEmailData] = useState(emailInfo)


  const removeEmail=(rowKey:string)=>{
    let index  = emailData.findIndex(item => item.key === rowKey)
    let oldEmailInfo = [...emailData]
    oldEmailInfo.splice(index,1)
    setEmailData(oldEmailInfo)
  }

  return (
    <View style={styles.container}>
     <SwipeListView
     data={emailData}
     renderItem={ (data, rowMap) => (
       
      <TouchableOpacity 
      
      style={styles.item}>
          <View style={styles.divider}/>
          <Text style={styles.title}>{data.item.title}</Text>
          <Text>{data.item.body}</Text>
      </TouchableOpacity>
    )}
    renderHiddenItem={ (data, rowMap) => (
      <View style={styles.item}>
      </View>
    )}
    disableRightSwipe={true}
    swipeGestureEnded={(key,data)=>{removeEmail(key)}}
    />
     
    </View>
  );
}
export default App



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1
  },
  item: {
    height: 80,
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: '#f6f6f6',
    
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  divider: {
    borderBottomWidth: 0.5,
    borderColor: '#8294A7',
  }
});
