import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["Tiempo de Actividad", "Pequeño Descanso", "Descanso Largo"];

export default function Header({ currentTime, setCurrentTime, setTime }) {
  function handlePress(index) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  }
  return (
    <View style={{ flexDirection: "row" }}>
      {options.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => handlePress(index)} style={[styles.itemStyle, currentTime !== index && {borderColor: "transparent", backgroundColor: "transparent"}]}>
          <Text style={{fontWeight: "bold", margin: "auto"}}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  itemStyle: {
    width: "33%",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 3,
    padding: 5,
    borderRadius: 10,
    borderColor: "white",
    marginVertical: 20,
  },
});
