import React, { useState, useEffect } from "react";
import { View, Text, FlatList, RefreshControl } from "react-native";
import UserAvatar from "react-native-user-avatar";
import { FAB } from "react-native-paper";
import styles from './styles'; 

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async (count = 10) => {
    setLoading(true);
    try {
      const response = await fetch(`https://randomuser.me/api/?results=${count}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching users:", error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(10).then((data) => {
      if (data && data.results) {
        setUsers(data.results);
      }
    });
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View>
      <View style={styles.userItem}>
        <UserAvatar
          size={50}
          name={`${item.name.first} ${item.name.last}`}
          src={`${item.picture.medium}`}
        />
        <View style={styles.userInfo}>
          <Text style={styles.text}>{item.name.first}</Text>
          <Text style={styles.text}>{item.name.last}</Text>
        </View>
      </View>
      <View style={styles.borderLine} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.login.uuid}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() =>
              fetchUsers(10).then((data) => {
                if (data && data.results) {
                  setUsers(data.results);
                }
              })
            }
          />
        }
      />

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => {
          fetchUsers(1)
            .then((newUser) => {
              if (newUser && newUser.results && newUser.results.length > 0) {
                setUsers((prevUsers) => [...newUser.results, ...prevUsers]);
              } else {
                console.error("New user data is not available");
              }
            })
            .catch((error) => {
              console.error("Error fetching new user:", error);
            });
        }}
      />
    </View>
  );
};

export default UserList;
