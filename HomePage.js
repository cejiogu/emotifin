import React from 'react';
import { View, Text, Button } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the HomePage!</Text>
      <Button
        title="Log Mood"
        onPress={() => navigation.navigate('LoggingPage')}
      />
      <Button
        title="Set Maximum Spending"
        onPress={() => navigation.navigate('SettingMaximum')}
      />
      <Button
        title="Recent Moods"
        onPress={() => navigation.navigate('RecentMoods')}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
};

export default HomePage;
