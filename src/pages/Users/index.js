import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api'

import styles from './styles';

export default function Users() {

    const [ users, setUsers ] = useState([]);

    const navigation = useNavigation();

    function navigationToUserDetail(userLogin){
        navigation.navigate('User Detail', { userLogin });
    }

    async function loadUsers(){
        const response = await api.get('/users');

        setUsers(response.data);
    }

    useEffect(() => {
        loadUsers();
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>List GitHub Users</Text>
            </View>

            <FlatList 
                data={users}
                style={styles.usersList}
                keyExtractor={user => String(user.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item : user }) => (
                    <View style={styles.users}>
                        <TouchableOpacity
                        onPress={ () => navigationToUserDetail(user.login) }>
                            <View style={styles.userCard}>
                                <Text style={styles.userLogin}>{ user.login }</Text>
                                <Image 
                                    style={styles.image}
                                    source={ { uri: `${user.avatar_url}` } }
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}