import React from 'react';

import styles from '../stylesheets/Default';

import { Text, View } from 'react-native';

const DumbComponent = () => (
    <View style={styles.card}>
        <Text>This is the Dumb Component</Text>
    </View>
);

export default DumbComponent;