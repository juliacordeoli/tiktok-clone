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
// import { Ionicons } from "expo/vector-icons";

export function Home() {
  
  return (
    <View style={styles.container}>
      <View style={styles.labels}>

        <TouchableOpacity>
          <Text style={styles.labelText}> Seguindo </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.labelText]}> Pra você </Text>
        </TouchableOpacity>
      </View>
        <FeedItem />

      {/* <FlatList
        data={feedItem}
        renderItem={({ item }) => <feedItem data={item} />}
  /> */}
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
    gap: 8,
    position: "absolute",
    top: 6,
    left: 0,
    right: 0,
    fontWeight:"bold",
    fontSize: 23,
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 55,
    zIndex: 99,
    backgroundColor: "red"
  },
  labelText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 2,
  },
  //indicator: {
  //   backgroundColor: "#FFF",
  //   width: 32,
  //   height: 2,
  //},
  })
