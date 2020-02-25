import React from 'react';
import * as Permissions from './Permissions';
import * as DocumentPicker from 'expo-document-picker';
import { 
StyleSheet, 
Text, 
TouchableOpacity, 
View, 
Alert } from 'react-native';

const DocumentPicker = props => {


// permissions returns only for document permissions on iOS and under certain conditions, see Permissions.DOCUMENT
getDocAsync = async() => {
    const { status, permissions } = await Permissions.askAsync(Permissions.DOCUMENTS);
    if (status === 'granted') {
    return Document.getCurrentPositionAsync({ enableHighAccuracy: true });
} else {
    throw new Error('Please allow permission to upload documents from phone');
}
}

SingleFilePicker = async () => {
try {
    const res = await DocumentPicker.getDocumentAsync({
    type: '*', 
    });

} catch (err) {
    console.log(err)
    }
}
return (
    <View style={styles.MainContainer}>

    <Text style={styles.text}>
        File Name: 
        {/* {this.state.singleFileOBJ.name ? this.state.singleFileOBJ.name : ''} */}

    </Text>

    <TouchableOpacity
        activeOpacity={0.5}
        style={styles.button}

        //needs state update...using constructor to bind to this. 
        onPress={this.SingleFilePicker.bind(this)}>
        <Text style={styles.buttonText}>
        Click Here To Pick File
        </Text>
    </TouchableOpacity>

    </View>
);
}





const styles = StyleSheet.create({
MainContainer: {
flex: 1,
backgroundColor: '#fff',
padding: 16,
justifyContent: 'center',
},

button: {
width: '100%',
backgroundColor: '#0091EA',
borderRadius:9,
},

buttonText: {
color: '#fff',
fontSize: 21,
padding: 10,
textAlign: 'center'
},

text: {
color: '#000',
fontSize: 16,
padding: 10,
textAlign: 'left'
},
});

export default DocumentPicker;