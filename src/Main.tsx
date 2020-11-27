import React from 'react';
import Constants from 'expo-constants';
import {Text, StyleSheet, View, Dimensions} from 'react-native';


const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight + 20,
        marginLeft: width * 0.05,
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <Text>Rate Repository Application</Text>
        </View>
    );
};

export default Main;

