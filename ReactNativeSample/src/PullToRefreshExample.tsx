import React, { useState } from 'react';
import {
  ScrollView,
  FlatList,
  RefreshControl,
  Text,
  View,
  StyleSheet,
} from 'react-native';

const PullToRefreshExample = () => {
  const [refreshingScrollView, setRefreshingScrollView] = useState(false);
  const [refreshingFlatList, setRefreshingFlatList] = useState(false);
  const [data, setData] = useState(
    Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`),
  );

  const onRefreshScrollView = () => {
    setRefreshingScrollView(true);
    setTimeout(() => {
      setRefreshingScrollView(false);
    }, 1500);
  };

  const onRefreshFlatList = () => {
    setRefreshingFlatList(true);
    setTimeout(() => {
      setData(Array.from({ length: 10 }, (_, i) => `New Item ${i + 1}`));
      setRefreshingFlatList(false);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ScrollView with Pull to Refresh</Text>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshingScrollView}
            onRefresh={onRefreshScrollView}
          />
        }
        style={styles.scrollView}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <Text key={i} style={styles.item}>
            Scroll Item {i + 1}
          </Text>
        ))}
      </ScrollView>

      <Text style={styles.title}>FlatList with Pull to Refresh</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        refreshControl={
          <RefreshControl
            refreshing={refreshingFlatList}
            onRefresh={onRefreshFlatList}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  scrollView: {
    marginBottom: 20,
  },
  item: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
  },
});

export default PullToRefreshExample;
