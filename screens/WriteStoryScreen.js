import React  from "react";
import {Text,View,TouchableOpacity,TextInput,Image,StyleSheet} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class TransactionScreen extends React.Component{
    constructor(){
        super();
        this.state={
            hasCameraPermissions:null,
            scanned:false,
            scannedbookId:'',
            scannedStudentsId:'',
            buttonState:'normal'

        }
    }

    getCameraPermissions= async (id)=>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);

        this.setState({
            hasCameraPermissions:status === 'granted',
            buttonState:id,
            scanned:false
        });
    }
handleBarCodeScanned= async({type,data})=>{
    const{buttonState}=this.state

    if(buttonState==="BookId"){
        this.setState({
            scanned:true,
            scannedbookId:data,
            buttonState:'normal'
        });
    }
}
 
render(){
    const hasCameraPermissions=this.state.hasCameraPermissions;
    const scanned=this.state.scanned;
    const buttonState=this.state.buttonState;

    if(buttonState === 'normal'){
        return(
           <View style={styles.container}>
            <View>
                <Text style={{textAlign:'center',fontSize:30,backgroundColor:'cyan' }}>StoryHub</Text>
            </View>
            <View style={styles.inputView}>
                <TextInput
                  style={styles.inputBox}
                  placeholder="Title of Story"/>
            </View>
            <View style={styles.inputView}>
                <TextInput 
                  style={styles.inputBox}
                  placeholder="Author of story"/>
            </View>
            <TextInput
            style={styles.storyBox}
            placeholder="Write your story here"/>
           </View>
        );
    }
}

}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'cyan'
    },

    displayText:{
        fontSize:15,
        textDecorationLine:'underline'
    },

    scanButton:{
        backgroundColor:"#2196P3",
        padding:10,
        margin:10
    },

    buttonText:{
        fontSize:15,
        textAlign:'center',
        margin:10
    },

    inputView:{
        flexDirection:"row",
        margin:20,
    },

    inputBox:{
        width:200,
        height:40,
        borderWidth:1.5,
        borderRightWidth:1.5,
        fontSize:20,
        backgroundColor:'white'
    },

    storyBox:{
        width:200,
        height:200,
        borderWidth:1.5,
        borderRightWidth:1.5,
        fontSize:20,
        backgroundColor:'white'

    },


    scanButton:{
        backgroundColor:"#66BB6A",
        width:50,
        borderWidth:1.5,
        borderLeftWidth:0

    }
})


























