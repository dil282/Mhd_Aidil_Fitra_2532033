import React from "react";
import { ScrollView, StyleSheet, Text, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InfoCard from "./src/components/InfoCard";
import StudentDirectory from "./src/screens/StudentDirectory";

export default function App() {
  const handlePress = (title) => {
    Alert.alert("Detail Task", `Anda membuka detail untuk: ${title}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Soal 1: InfoCard Component</Text>
          <InfoCard
            title="Tugas Pemrograman Mobile"
            status="selesai"
            onPress={() => handlePress("Tugas Pemrograman Mobile")}
          />
          <InfoCard
            title="Proyek Akhir Semester"
            status="proses"
            onPress={() => handlePress("Proyek Akhir Semester")}
          />
          <InfoCard
            title="Laporan Praktikum"
            status="selesai"
            onPress={() => handlePress("Laporan Praktikum")}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Soal 2: Filter Mahasiswa</Text>
          <View>
            <StudentDirectory />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  container: {
    flex: 1,
  },
  section: {
    marginTop: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginHorizontal: 16,
    marginBottom: 8,
  },
});
