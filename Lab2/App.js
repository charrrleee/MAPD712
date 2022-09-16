import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Switch, Text, TextInput, View} from 'react-native';
import {useState} from "react";


export default function App() {
    const [input, setInput] = useState("placeholder");
    const [isEnabled, setIsEnabled] = useState(false);

    const clears = () => {
        setInput("")
    }

    const changeStyle = () => {
        const containerStyle = {...styles.container}
        containerStyle.backgroundColor = isEnabled ? "black" : "white"
        return containerStyle
    }

    return (
        <View style={changeStyle()}>
            <TextInput style={styles.edit}
                       onChangeText={(text) => setInput(text)}
                       clearTextOnFocus={true}
            />

            {
                input !== "" ? <Text style={styles.textView}>{input}</Text> : ""
            }
            <Button title={"Clear"} onPress={() => clears()}/>
            <Switch value={isEnabled} onChange={() => setIsEnabled(!isEnabled)}></Switch>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: '20',
        backgroundColor: "black",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },
    edit: {
        borderWidth: 3,
        margin: '5%',

        borderColor: "black",
        justifyContent: 'center',
        width: "90%",
    },
    textView: {
        fontSize: 20,
        margin: '5%',
        borderWidth: 3,
        borderColor: 'red',
        color: 'black'
    },
    black: {
        backgroundColor: "black"
    },
    white: {
        backgroundColor: "white"

    }
});
