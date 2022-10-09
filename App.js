import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";

export default function App() {
    const [name, setName] = useState('eslam');
    /* as object*/
    const [person, setParson] = useState({name: 'ghazy', age: '24'});
    const clickMe = () => {
        setName('ghazy')
        setParson({name:'ESLAM',age: '25'})
    }

    return (
        <View style={styles.container}>
            <Text>my name is {name}</Text>
            <Text> His name is {person.name} and his age id {person.age}</Text>
            <View style={styles.buttonContainer}>
                <Button title={'update state'} onPress={clickMe}/>
            </View>

            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        marginTop: 20,
    }
});
