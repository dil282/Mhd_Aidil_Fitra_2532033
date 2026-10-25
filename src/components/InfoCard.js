import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const InfoCard = ({ title, status, onPress }) => {
  const isSelesai = status === "selesai";

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View
        style={[
          styles.badge,
          { backgroundColor: isSelesai ? "#4CAF50" : "#FF9800" },
        ]}
      >
        <Text style={styles.badgeText}>{isSelesai ? "SELESAI" : "PROSES"}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 12,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default InfoCard;
