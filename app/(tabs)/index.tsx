import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const contacts = [
  { name: "Phillip", img: require("../../assets/images/profile1.png") },
  { name: "Alfredo", img: require("../../assets/images/profile2.png") },
  { name: "Jaylon", img: require("../../assets/images/profile3.png") },
  { name: "Tatiana", img: require("../../assets/images/profile4.png") },
  { name: "Terry", img: require("../../assets/images/profile5.png") },
];

const pinned = [
  {
    name: "Phillip Franci",
    message: "Hey, it's been a while since we...",
    time: "10:00 am",
    img: require("../../assets/images/profile1.png"),
  },
  {
    name: "Alfredo Saris",
    message: "Hello, Good Morning Bro!",
    time: "08:00 am",
    img: require("../../assets/images/profile2.png"),
  },
];

const messages = [
  {
    name: "Jaylon Franci",
    message: "Everything's good.",
    time: "08:30 am",
    img: require("../../assets/images/profile3.png"),
  },
  {
    name: "Tatiana Dorwart",
    message: "Okay Thanks!",
    time: "06:10 am",
    img: require("../../assets/images/profile4.png"),
  },
  {
    name: "Terry Bergson",
    message: "Same here!",
    time: "05:40 am",
    img: require("../../assets/images/profile5.png"),
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.smallText}>Hi, Arip!</Text>
          <Text style={styles.smallText}>You Received</Text>
          <Text style={styles.bigText}>48 Messages</Text>
          <Text style={[styles.smallText, { marginTop: 15 }]}>
            Contact List
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10 }}
          >
            {contacts.map((item, index) => (
              <View style={styles.contactContainer} key={index}>
                <Image source={item.img} style={styles.contactImg} />
                <Text style={styles.contactName}>{item.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.whiteSection}>
          <View style={styles.tabsRow}>
            <Ionicons name="search" size={20} color="black" />
            <TouchableOpacity style={styles.activeTab}>
              <Text style={styles.activeTabText}>Direct Message</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabText}>Group</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>Pinned Message (2)</Text>

          {pinned.map((msg, index) => (
            <View style={styles.messageRow} key={index}>
              <Image source={msg.img} style={styles.msgImg} />
              <View style={{ flex: 1 }}>
                <Text style={styles.msgName}>{msg.name}</Text>
                <Text style={styles.msgText}>{msg.message}</Text>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={styles.msgTime}>{msg.time}</Text>
                <Ionicons name="checkmark-done" size={18} color="#6C63FF" />
              </View>
            </View>
          ))}

          <Text style={styles.sectionTitle}>All Message (8)</Text>

          {messages.map((msg, index) => (
            <View style={styles.messageRow} key={index}>
              <Image source={msg.img} style={styles.msgImg} />
              <View style={{ flex: 1 }}>
                <Text style={styles.msgName}>{msg.name}</Text>
                <Text style={styles.msgText}>{msg.message}</Text>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={styles.msgTime}>{msg.time}</Text>
                <Ionicons name="checkmark-done" size={18} color="#6C63FF" />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EDEEF7" },
  header: {
    backgroundColor: "#6C63FF",
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  smallText: { color: "white", fontSize: 14 },
  bigText: { color: "white", fontSize: 28, fontWeight: "bold" },
  contactContainer: { alignItems: "center", marginRight: 20 },
  contactImg: { width: 55, height: 55, borderRadius: 30 },
  contactName: { color: "white", marginTop: 5, fontSize: 12 },
  whiteSection: {
    marginTop: -20,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  tabsRow: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  activeTab: {
    backgroundColor: "#F6FA97",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
    marginLeft: 10,
  },
  activeTabText: { color: "black", fontSize: 14, fontWeight: "bold" },
  tab: {
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
    marginLeft: 10,
  },
  tabText: { color: "gray", fontSize: 14 },
  sectionTitle: { fontWeight: "bold", marginVertical: 15, fontSize: 16 },
  messageRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  msgImg: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  msgName: { fontWeight: "bold", fontSize: 14 },
  msgText: { fontSize: 12, color: "gray" },
  msgTime: { fontSize: 12, color: "gray" },
  fab: {
    width: 55,
    height: 55,
    backgroundColor: "#6C63FF",
    borderRadius: 30,
    position: "absolute",
    bottom: 30,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
