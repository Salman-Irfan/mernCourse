import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const Home = ({ navigation }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleChangeTitle = (text) => {
        setTitle(text);
    };

    const handleChangeDescription = (text) => {
        setDescription(text); // Corrected this line to update the description state
    };
    const handleSendNote = async () => {
        // console.log(title, description)
        const response = await axios.post(`http://10.50.75.22:5000/api/v1/notes`, {
            title, description
        })
        console.log(response)
    }
    return (
        <>
            <View>
                <Text>Home</Text>
            </View>
            {/* navigation button */}
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
            <TextInput
                onChangeText={handleChangeTitle}
                value={title}
                placeholder="Title"
            />
            <TextInput
                onChangeText={handleChangeDescription}
                value={description}
                placeholder="Description"
            />
            <Button
                title="Save Note"
                onPress={handleSendNote}
            />
        </>
    );
};

export default Home;

const styles = StyleSheet.create({});
