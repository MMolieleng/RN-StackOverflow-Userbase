import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';


const UserProfile = ({ user }) => {

        const [following, setFollowing] = useState(false)
        const [showDetails, setShowDetails] = useState(false);

        return <View>
                <Pressable onPress={() => setShowDetails((prev) => !prev)}>
                        <View style={styles.userProfile}>
                                <Image
                                        style={styles.avatar}
                                        source={{ uri: user.profile_image }}
                                        testID="profileImage"
                                />
                                <View>
                                        <Text style={styles.nameText} testID="displayName">{user.display_name}</Text>
                                        <Text style={styles.reputationText} testID="reputation">{user.reputation}</Text>
                                </View>
                        </View>
                </Pressable>

                {showDetails &&
                        <View style={styles.panel}>
                                <Pressable onPress={() => setFollowing((prev) => !prev)}>
                                        <Text>{following ? "Block" : "Follow"}</Text>
                                </Pressable>
                        </View>
                }

        </View>
}

const styles = StyleSheet.create({

        userProfile: {
                flex: 1 / 2,
                flexDirection: "row",
                marginTop: 20,
                marginHorizontal: 16
        },

        avatar: {
                width: 60,
                height: 60,
                borderRadius: 100 / 2,
        },

        nameText: {
                fontSize: 20,
                fontWeight: "bold",
                paddingHorizontal: 20
        },
        reputationText: {
                fontSize: 18,
                paddingHorizontal: 20
        },

        panel: {
                padding: 20,
        }
});

export default UserProfile;

