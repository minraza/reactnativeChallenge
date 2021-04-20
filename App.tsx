import React, {FC, useState} from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {emailInfo} from './emailData'
import { SwipeListView,SwipeRow } from 'react-native-swipe-list-view';


const App: FC = () => {

  const [emailData,setEmailData] = useState(emailInfo)

  const [openEmailKey,setOpenEmailKey] = useState("")

  const removeEmail=(rowKey:string)=>{
    let index  = emailData.findIndex(item => item.key === rowKey)
    let oldEmailInfo = [...emailData]
    oldEmailInfo.splice(index,1)
    setEmailData(oldEmailInfo)
  }

  const openClickedEmail=(key:string)=>{
    if(openEmailKey!==key){
      setOpenEmailKey(key)
    }
    else{
      setOpenEmailKey("")
    }
  }

  function visibleEmailClosed(data:any){
    return(
      <TouchableOpacity 
      onPress={()=>openClickedEmail(data.item.key)}
      style={[openEmailKey!==data.item.key&&styles.closedItem,openEmailKey===data.item.key&&styles.openItem]}>
          <View style={styles.divider}/>
          <Text style={styles.title}>{data.item.title}</Text>
          <Text>{data.item.body}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
     <SwipeListView
     data={emailData}
     renderItem={ (data, rowMap) => ( 
     visibleEmailClosed(data)
    )}
    renderHiddenItem={ (data, rowMap) => (
      <View style={styles.closedItem}>
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
  closedItem: {
    height: 80,
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: '#f6f6f6',
    
  },
  openItem: {
    flex:1,
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
