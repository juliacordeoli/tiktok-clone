import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

//import lulu from '../../../../assets/luna'

export function FeedItem() {
  const [colorHeart, setColorHeart] = useState("white");
  const [colorMark, setColorMark] = useState("white");
  return (
    <View style={styles.actionButton}>
      {/* { position:"absolute", bottom:0, right:0, } */}
      <View style={styles.actionButton}>
        <TouchableOpacity>
          <Pressable
            onPress={() => {
              if (colorHeart == "white") setColorHeart("red");
              else setColorHeart("white");
            }}
          >
            <Ionicons name="heart" size={45} color={colorHeart} />
            <Text style={styles.actionText}></Text>
          </Pressable>
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="chatbubble-ellipses" size={45} color="#fff" />
          <Text style={styles.actionText}> </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Pressable
            onPress={() => {
              if (colorMark == "white") setColorMark("gold");
              else setColorMark("white");
            }}
          >
            <Ionicons name="bookmark" size={45} color={colorMark} />
          </Pressable>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textStyle}>@juliacordeoli (❁´◡`❁)</Text>
        <Text style={styles.textStyle}>
          Contemplem a belíssima Luninha fofinha!🐾💘😍💞🐶
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    // alignItems: "flex-end",
    // position: "absolute",
    // bottom: 80,
    // left: 0,
    // zIndex:99,
    right: 20,
  },

  actionButton: {
    alignItems: "flex-end",
    position: "absolute",
    bottom: 70,
    right: 0,
    flexDirection: "column",
    marginRight: 10,
    gap: 15,
    zIndex: 99,
  },
});
