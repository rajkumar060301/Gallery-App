import React, { useState } from 'react';
import { Text, StyleSheet, Pressable, View, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Collections = ({ navigation }) => {
  const [collections, setCollections] = useState(
    ['Gallery', 'Camera', 'Photos', 'WhatsApp', 'Instagram', 'Facebook', 'Telegram', 'Downloads']
  );

  return (
    <View style={styles.collectionsComponent}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Collections <Icon name={'appstore1'} size={35} color={'white'} />
        </Text>
      </View>

      <View style={styles.body}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContainerStyles}>
          {collections.map((itemName, index) => (
            <Pressable
              style={styles.collection}
              android_ripple={{
                color: 'lightgray',
                borderless: true,
              }}
              onPress={() => {navigation.navigate('CollectionImages', {collectionIndex: index})}}
            >
              <Image source={{ uri : `https://picsum.photos/seed/${index +1}/200`}} style={styles.image}/>
              <Text style={styles.collectionName}>{itemName}</Text>
              </Pressable>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Collections;

const styles = StyleSheet.create({
  collectionsComponent: {
    flex: 1,
    // borderColor: 'red',
    // borderWidth: 1
  },
  header: {
    flex: 1,
    // borderTopColor: 'red',
    // borderTopWidth: 1,
    backgroundColor: 'black',
  },
  headerText: {
    flex: 1,
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    textAlignVertical: 'center',
    // borderWidth: 1,
    // borderColor: 'white',
  },
  body: {
    flex: 9,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContainerStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    flexWrap: 'wrap',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  collection: {
    // borderColor: 'red',
    // borderWidth: 1,
    height: 200,
    width: '48%',
    borderRadius: 10,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  collectionName: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    // height: '100%',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',
    backgroundColor :'#09090963',
    fontSize: 20,
  }
});
