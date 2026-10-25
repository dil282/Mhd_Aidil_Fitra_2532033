import React, { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";

const DAFTAR_MAHASISWA = [
  { id: "1", nama: "Rido", prodi: "Sistem Informasi" },
  { id: "2", nama: "Yondi", prodi: "Teknologi Informasi" },
  { id: "3", nama: "Pieter", prodi: "Sistem Informasi" },
  { id: "4", nama: "Lombu", prodi: "Teknik Informatika" },
  { id: "5", nama: "Andi", prodi: "Sistem Informasi" },
];

const StudentDirectory = () => {
  const [keyword, setKeyword] = useState("");

  // Logika filter real-time (case-insensitive)
  const filteredData = DAFTAR_MAHASISWA.filter((mahasiswa) =>
    mahasiswa.nama.toLowerCase().includes(keyword.toLowerCase()),
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.nama}</Text>
      <Text style={styles.itemProdi}>{item.prodi}</Text>
    </View>
  );

  const ListEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Data tidak ditemukan!</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Direktori Mahasiswa</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Cari nama mahasiswa..."
        value={keyword}
        onChangeText={(text) => setKeyword(text)}
      />

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={ListEmpty}
        contentContainerStyle={styles.listContent}
        scrollEnabled={false} // TAMBAHAN: Agar tidak error saat berada di dalam ScrollView
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 12,
  },
  searchInput: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#DDD",
    fontSize: 14,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  itemContainer: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#2196F3",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  itemProdi: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },
  emptyContainer: {
    alignItems: "center",
    paddingVertical: 32,
  },
  emptyText: {
    fontSize: 16,
    color: "#999",
    fontStyle: "italic",
  },
});

export default StudentDirectory;
