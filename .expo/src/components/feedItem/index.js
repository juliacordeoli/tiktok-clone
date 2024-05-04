import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

//import lulu from '../../../../assets/luna'

export function FeedItem() {
  return (
    <View style={styles.actionButton}>
     {/* { position:"absolute", bottom:0, right:0, } */}
      <View style={styles.actionButton}>
        <TouchableOpacity>
          <Ionicons name="heart" size={45} color="red" />
          <Text style={styles.actionText}></Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="chatbubble-ellipses" size={45} color="#fff" />
          <Text style={styles.actionText}> </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="bookmark" size={45} color="gold" />
        </TouchableOpacity>
      </View>
      <View  >
        <Text style={styles.textStyle}>@juliacordeoli</Text>
        <Text style={styles.textStyle}>
          Contemplem a belissima Luninha fofinha!
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
    right:90,
  },

  actionButton: {
    alignItems: "flex-end",
    position: "absolute",
    bottom: 70,
    right: 0,
    flexDirection: "column",
    marginRight: 10,
    gap: 15,
    zIndex:99,
  },
});
