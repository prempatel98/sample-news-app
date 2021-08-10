import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import * as data from '../components/data/articles.json';
import Article from '../model/article';
import Card from '../components/Card';

export default function TabTwoScreen() {

  const newData = data.articles.map(( item: Article ) => (
    <Card article={item} key={item.url} />
  ));

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Select an Article:</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        {newData}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
