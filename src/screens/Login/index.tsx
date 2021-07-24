import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import Toast from "react-native-tiny-toast";
import eyesOpened from '../../assets/eyes-opened.png';
import eyesClosed from '../../assets/eyes-closed.png';
import { ButtonIcon } from "../../components/ButtonIcon";
import { styles } from "./styles";
import { useAuth } from '../../hooks/auth';

export function Login() {
  
  const  { signIn } = useAuth();

  const navigation = useNavigation();

  const [hidePassword, setHidePassword] = useState(true);
  
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  async function handleLogin() {
    
    try {

      await signIn(userInfo);
      navigation.navigate('Catalog');
  
    } catch (error) {

      Toast.show('E-mail ou Senha inválidos!');

    } 

  }

  return (
    
    <View style={styles.container}>
      
        <Text style={styles.title}>LOGIN</Text>
        
        <View style={styles.form}>
          
          <TextInput
            placeholder="E-mail"
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.textInput}
            value={userInfo.username}
            onChangeText={(e) => {
              const newUserInfo = { ...userInfo };
              newUserInfo.username = e;
              setUserInfo(newUserInfo);
            }}
          />
          
          <View style={styles.passwordGroup}>
            
            <TextInput
              placeholder="Senha"
              secureTextEntry={hidePassword}
              style={styles.textInput}
              value={userInfo.password}
              onChangeText={(e) => {
                const newUserInfo = { ...userInfo };
                newUserInfo.password = e;
                setUserInfo(newUserInfo);
              }}
            />
            
            <TouchableOpacity
              style={styles.toggle}
              onPress={() => setHidePassword(!hidePassword)}
            >
              <Image
                source={hidePassword ? eyesOpened : eyesClosed}
                style={{ width: 35, height: 23 }}
              />
            </TouchableOpacity>

          </View>

        </View>

        <ButtonIcon 
            text="FAZER LOGIN"
            activeOpacity={0.8}
            handleOnPress={handleLogin}   
        />

    </View>
  );
};
