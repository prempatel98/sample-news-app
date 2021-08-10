import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import { Text, View } from '../components/Themed';
import Article from '../model/article';
import * as Linking from 'expo-linking';

type Props = {
  article: Article
}

const Card: React.FC<Props> = ({ article }): JSX.Element => {
  const handleOnPress = () => {
    const url = article.url
    if (Platform.OS === 'web') {
      window.open(url)
    }
    else if (Platform.OS === ('android' || 'ios')) {
      Linking.openURL(url)
    }
  }

  return (
    <TouchableOpacity onPress={handleOnPress}>
        <View style={styles.cardContainer}>
          <View style={styles.title}>
            <Text style={styles.title}>{article.title}</Text>
          </View>
          <View style={styles.section}>
            <Text>{article.description}</Text>
          </View>
          <Image source={{ uri: article.urlToImage }} style={styles.image} />
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    marginVertical: 20,
    backgroundColor: '#808080',
  },
  section: {
    justifyContent: 'center',
    marginVertical: 5,
  },
  title: {
    justifyContent: 'center',
    marginVertical: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    height: 400,
    width: '100%',
  }
});

export default Card;
