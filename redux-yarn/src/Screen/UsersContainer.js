import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {fetchUsers} from '../reduxFeatures';

function UserContainer({userData, fetchUsers}) {
  useEffect(() => {
    fetchUsers();
    // }, []);
  });

  return (
    <View>
      {userData.loading ? (
        <Text>Loading</Text>
      ) : userData.error ? (
        <Text>{userData.error}</Text>
      ) : (
        <Text>
          {userData &&
            userData.users &&
            userData.users.map((user) => <Text>{user.name}</Text>)}
        </Text>
      )}
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
