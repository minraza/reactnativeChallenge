import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {emailData} from './emailData'
import { SwipeListView } from 'react-native-swipe-list-view';


const App: FC = () => {
  return (
    <View style={styles.container}>
     <SwipeListView
     data={emailData}
     renderItem={ (data, rowMap) => (
      <View style={styles.item}>
          <View style={styles.divider}/>
          <Text style={styles.title}>{data.item.title}</Text>
          <Text>{data.item.body}</Text>
      </View>
    )}
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
