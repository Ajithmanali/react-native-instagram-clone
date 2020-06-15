import React, { Component } from 'react'
import { Text, View,StyleSheet,ScrollView,Image } from 'react-native'
import { colors } from '../config/Colors'
import Feed from "../components/Feed";

export class FeedScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
               
                   <View style={styles.header}>
                      <Image style={styles.icon} source={require('../assets/images/camera.jpg')} />
                      <Image style={styles.logo} source={require('../assets/images/instagramLogo.png')} />
                      <View style={styles.headerRightWrapper}>
                       <Image style={styles.icon} source={require('../assets/images/igtv.png')} />
                       <Image style={styles.icon} source={require('../assets/images/message.jpg')} />
                      </View>
                   </View>
                     



                   <ScrollView  style={styles.feedContainer}>
                       <Feed/>
                   </ScrollView>    
                   <View  style={styles.footer}>
                       <Image style={styles.icon} source={require('../assets/images/home.png')} />
                       <Image style={styles.icon} source={require('../assets/images/search.jpg')} />
                       <Image style={styles.icon} source={require('../assets/images/plus.png')} />
                       <Image style={styles.icon} source={require('../assets/images/heart.png')} />
                       <Image style={styles.icon} source={require('../assets/images/profile.png')} />
                   </View>
              
            </View>
        )
    }
}

export default FeedScreen

export const styles=StyleSheet.create({
    container:{
        display:'flex',
        flex:1
    },
    header:{   
     display:'flex',
     flexDirection:'row',
     justifyContent:'space-between',
     padding:10,
     borderBottomColor:colors.gray1,
     borderBottomWidth:1
    },
    footer:{
     display:'flex',
     flexDirection:'row',
      bottom:50,
     justifyContent:'space-between',
     padding:10,
     borderTopColor:colors.gray1,
     borderTopWidth:1
    },
    feedContainer:{
        display:'flex',
      
    },
    icon:{
        width:40,
        height:40
    },
    logo:{
       width:150,
       height:'100%' 
    },
    headerRightWrapper:{
        display:'flex',
        flexDirection:'row'
    }
})