import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useNavigation, useRoute, Link } from '@react-navigation/native';

import api from '../../services/api';

import styles from './styles';

export default function UserDetail() {

    const [ user, setUser ] = useState([]);

    const navigation = useNavigation();
    const route = useRoute();

    const userSelected = route.params.userLogin;

    function goBack(){
        navigation.navigate('Users');
    }

    async function loadUser(){
        const response = await api.get(`/users/${userSelected}`);

        setUser(response.data);
    }

    useEffect(() => {
        loadUser();
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.goBack}>
                <TouchableOpacity onPress={goBack}>
                    <Feather name="arrow-left" size={30}/>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <Text style={styles.titleHeader}>User Profile Card</Text>
            </View>
            
            
            <View style={styles.card}>
                <View style={styles.imageArea}>
                    <Image 
                        style={styles.image}
                        source={{ uri: `${ user.avatar_url }` }}
                    />
                </View>

                <View style={styles.textArea}>
                    
                    <Text style={styles.titleUserLogin}>{ user.login }</Text>
                    
                    <Text style={styles.title}>Name</Text>
                    <Text>{ user.name }</Text>

                    <Text style={styles.title}>Location</Text>
                    <Text>{ user.location }</Text>

                    <Text style={styles.title}>Blog</Text>
                    <Text>{ user.blog }</Text>

                    <Text style={styles.title}>Public Repositories</Text>
                    <Text>{ user.public_repos }</Text>

                    <Text style={styles.title}>Followers</Text>
                    <Text>{ user.followers }</Text>

                    <Text style={styles.title}>Following</Text>
                    <Text>{ user.following }</Text>
                </View>
            </View>
            </ScrollView>
            
        </View>
    );
}