import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
        return (
                <View style={styles.header}>
                        <Text style={styles.title}>{title}</Text>
                </View>
        );
};


const styles = StyleSheet.create({

        header: {
                height: 70,
                paddingTop: 10,
                paddingHorizontal: 16
        },
        title: {
                color: "#222",
                fontSize: 30,
                fontWeight: "800",
        }
})
export default Header;

