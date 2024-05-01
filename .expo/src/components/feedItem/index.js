import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
// import luluzinha from '../../../../assets/luluzinha'

export function FeedItem() {
  return (
    <View style = {[{flex: 1}, {backgroundColor: "green"}]}>
      <View style={styles.actionButton}>
        <TouchableOpacity>
          <Ionicons name="heart" size={35} color="#FFF" />
          <Text style={styles.actionText}></Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="chatbubble-ellipses" size={35} color="#FFF" />
          <Text style={styles.actionText}> </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="bookmark" size={35} color="#FFF" />
        </TouchableOpacity>
      </View>
      <Text style={styles.textStyle}>@juliacordeoli</Text>
      <Text style={styles.textStyle}>Contemplem a belissima Luninha fofinha!</Text>
      {/* <Image source={require('../../../../assets/luluzinha')}></Image> */}

    </View>
  );
}

const styles = StyleSheet.create({

  textStyle: {
    marginLeft: 20,
    color:"white"
  },

  actionButton: {
    alignItems: "flex-end",
    // position: "absolute",
    flexDirection: "column",
    marginTop: "110%",
    marginRight: 20,
    gap: 15,
  },
});




// https://media.discordapp.net/attachments/1173737240195776565/1235013920457097286/a16b3d19-0fb1-49db-8791-1257b6a747bd.png?ex=6632d3d8&is=66318258&hm=0cfa516cc32b1255a7d7b3b6267d80d48a9e4fe75840761a97ae9c9aa41139c5&=&format=webp&quality=lossless&width=348&height=619