import React from 'react';
import { View } from 'react-native';


export default function Header(){
    return(
        <View
            style={styles.container}
        />
    );
}


const styles = StyleSheet.create({
    container:{
        padding:24
    }
})