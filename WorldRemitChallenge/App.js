import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
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

      <View >
        {users ? <UsersList users={users} /> : null}
        {hasError ? <Text>Something went wrong</Text> : null}
        {isLoading ? <Text>Loading...</Text> : null}
      </View>
    </SafeAreaView>
  );
};


export default App;
