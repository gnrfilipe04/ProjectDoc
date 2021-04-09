import React, { useEffect, useState } from 'react'
import * as SecureStore from 'expo-secure-store';
import { 
    Container, 
    ContentEmail, 
    ContentPassword, 
    ContentButtons,
    ButtonRegister,
    ButtonLogin
 } from './styles'

import { Text, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Raleway_400Regular, Raleway_700Bold, Raleway_900Black } from '@expo-google-fonts/raleway'

export default function Login(){
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [keyValue, setKeyValue] = useState('')

    let [fontsLoader] = useFonts({
        Raleway_400Regular,
        Raleway_700Bold, 
        Raleway_900Black
      })
    
    async function save(key:string, value: string) {
    await SecureStore.setItemAsync(key, value);


    }
    
    async function getValueFor(key: string) {
    let result = await SecureStore.getItemAsync(key);
        if (result) {
            setKeyValue(result)
            alert("🔐 Here's your value 🔐 \n" + result);
        } else {
            alert('No values stored under that key.');
        }
    }

    async function deleteKey(key: string){
        let result = await SecureStore.getItemAsync(key);
        if (result) {

            await SecureStore.deleteItemAsync(key)
                .then(() => {
                    setKeyValue('')
                })
            alert("🔐 Deletado 🔐 \n" + result);
        } else {
            alert('Não foi possível deletar');
        }
    }
      

    function handleLogin(){
        save('email', userEmail)

        setUserEmail('')
        setUserPassword('')
    }
    
    useEffect(() => {
        getValueFor('email')

        alert(keyValue)

    }, [keyValue])

    return (
        <>
            <Container>
                <ContentEmail>
                    <Ionicons name="mail-outline" size={20} color="gray" />
                    <TextInput
                    placeholder='E-mail'
                    keyboardType='email-address'
                    value={userEmail}
                    onChangeText={setUserEmail}
                    />
                </ContentEmail>
                <ContentPassword>
                    <Ionicons name="lock-closed-outline" size={20} color="gray" />
                    <TextInput
                    placeholder='Senha'
                    secureTextEntry={true}
                    value={userPassword}
                    onChangeText={setUserPassword}
                    />
                </ContentPassword>
                <ContentButtons>
                    <ButtonLogin
                        onPress={() => handleLogin()} 
                    >
                        <Text style={{fontSize: 20, fontFamily: 'Raleway_400Regular', color: '#FFF'}}>
                            {keyValue != '' ? 'Logar' : 'salvar'}
                        </Text>
                    </ButtonLogin>
                   <ButtonRegister
                    onPress={() => {}}
                   >
                       <Text onPress={() => deleteKey('email')} style={{ color: 'white', fontFamily: 'Raleway_400Regular'}}>
                          Deletar
                       </Text>
                    </ButtonRegister>
                </ContentButtons>
            </Container>
        </>
    )
}