import React from 'react'
import { SafeAreaView, FlatList } from 'react-native';
import UserProfile from "./UserProfile";

export default function UsersList({ users }) {
        return <SafeAreaView style={{ height: '93%' }}>
                <FlatList
                        data={users}
                        renderItem={({ item }) => (<UserProfile user={item} />)}
                        keyExtractor={(item) => { return item.user_id }}
                        extraData={(item) => item.user_id}
                />
        </SafeAreaView>
}
