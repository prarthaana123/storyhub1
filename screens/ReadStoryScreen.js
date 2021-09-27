import React  from "react";
import {Text,View,Header,StyleSheet} from 'react-native';

export default class Searchscreen extends React.Component{
    render(){
        return(
           <View style={{flex:1,justifyContent:'center', alignItems:'center' }}>     <Text style={styles.header}>ReadStory</Text>

            <Text style={styles.text}>One bright day in late autumn a family of Ants were bustling about in the warm sunshine, drying out the grain they had stored up during the summer, when a starving Grasshopper, his fiddle under his arm, came up and humbly begged for a bite to eat.

"What!" cried the Ants in surprise, "haven't you stored anything away for the winter? What in the world were you doing all last summer?"

"I didn't have time to store up any food," whined the Grasshopper; "I was so busy making music that before I knew it the summer was gone."

The Ants shrugged their shoulders in disgust.

"Making music, were you?" they cried. "Very well; now dance!" And they turned their backs on the Grasshopper and went on with their work.

There's a time for work and a time for play.</Text>

           </View>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        flex:1,
        fontWeight:'bold',
        fontSize:15,
        alignItems:'center',
        justifyContent:'center',
        //color:"black"
    },

    header:{
        backgroundColor:'blue',
        fontSize:30

    },
})