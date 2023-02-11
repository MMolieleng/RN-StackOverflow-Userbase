import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import Header from "./components/Header";
import UsersList from './components/UsersList';
import useFetch from './hooks/useFetch';

const App = () => {
  const { users, hasError, isLoading } = useFetch();

  return (
    <SafeAreaView>
      <View>
        <Header title={"Stackoverflow Users"} />
      </View>

      <View>
        {hasError ? <Text style={styles.error}>Something went wrong</Text> : null}
        {isLoading ? <Text style={styles.loading}>Loading...</Text> : null}
        {users ? <UsersList users={users} /> : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loading: {
    width: "100%",
    textAlign: "center",
  },
  error: {
    width: "100%",
    textAlign: "center",
    color: "red"
  },
})

export default App;
