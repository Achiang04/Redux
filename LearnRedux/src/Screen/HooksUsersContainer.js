import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {View, Text, FlatList} from 'react-native';

export default function HooksUserContainer() {
  const users = useSelector((state) => state.user.users);
  // console.log('users', users);

  // useEffect(() => {
  //   users;
  // }, []);
  // });

  return (
    <View>
      {/* <Text>{users[0].name}</Text> */}
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
}
