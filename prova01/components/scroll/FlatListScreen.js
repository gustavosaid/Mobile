import React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
export default function FlatListScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {Array.from({ length: 20 }).map((_, index) => (
                <View key={index} style={styles.item}>
                    <Text style={styles.text}>Item {index + 1}</Text>
                </View>
            ))}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 25,
        marginTop: 25,
    },
    item: {
        marginBottom: 10,
        padding: 25,
        backgroundColor: '#fdfdfd',
        borderRadius: 8,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})