import { StyleSheet, View } from "react-native";
import Camera from './src/Camera/App'
// import Gallery from "./src/Gallery";

export default function App() {
  return (
    <View style={styles.container}>
      <Camera/>
      {/* <Gallery /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
