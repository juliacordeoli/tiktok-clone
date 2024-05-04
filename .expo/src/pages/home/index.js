import {
  View,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  StatusBar,
  Platform,
  FlatList,
} from "react-native";
import { FeedItem } from "../../components/feedItem"; 
import { useRef, useState } from "react";
import { Video, ResizeMode } from 'expo-av';

  import lulu from "../../../../assets/luna.mp4"

export function Home() {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (

    <View style={styles.container}>
    <FeedItem /> 
       <Video 
         ref={video}
          source={lulu} 
          style={styles.video}
          useNativeControls
          // resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
          shouldPlay
       /> 
        <View style={styles.labels} >
    

        <TouchableOpacity>
          <Text style={styles.labelText}> Seguindo </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.labelText]}> Pra você </Text>
        </TouchableOpacity>
      </View>
        

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  labels: {
  
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap:11,
    position: "absolute",
    top: 6,
    left: 0,
    right: 0,
    fontSize: 25,
 
  },
  labelText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 2,
    fontWeight:"bold"
  },
   video: {
  //   alignSelf: 'center',
     width: "99%",
     height: "99%"
  // flex:1, 
  },
 
  })