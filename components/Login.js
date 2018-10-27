import React, {Component} from 'react';
import {StyleSheet, View,Text, Image} from 'react-native';

export default class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.containser}>
                    <View style={{flex: 0.8, backgroundColor: 'white'}}/>
                    <Image 
                        resizeMode='contain'
                        style={styles.logo}
                        source={require('../assets/login_logo.jpg')}/>
                    <View style={styles.login}>
                        <Text>HELLO THIS IS LOGIN</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    logo:{
        flex:2,
        width:400,

    },
    login:{
        flex:3,
        backgroundColor:'white',
    }
});