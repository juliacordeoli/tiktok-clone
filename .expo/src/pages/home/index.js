import {
  View,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  StatusBar,
  Platform,
  FlatList,
  Pressable,
} from "react-native";
import { FeedItem } from "../../components/feedItem";
import { useRef, useState } from "react";
import { Video, ResizeMode } from "expo-av";

import lulu from "../../../../assets/luna.mp4";

export function Home() {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (
    <View style={styles.container}>
      <FeedItem />
      <Pressable
        onPress={() =>
          status.isPlaying
            ? video.current.pauseAsync()
            : video.current.playAsync()
        }
      >
        <Video
          ref={video}
          source={lulu}
          style={styles.video}
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          useNativeControls={false}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          shouldPlay
        />
      </Pressable>
      <View style={styles.labels}>
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
    gap: 15,
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
   
  },
  labelText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "500",
    marginBottom: 2,
    fontWeight: "bold",
  },
  video: {
    alignSelf: "flex-end",
    width: "100%",
    height: "100%",
    // flex:1,
  },
});
