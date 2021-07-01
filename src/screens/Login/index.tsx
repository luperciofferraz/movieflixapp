import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { login } from '../../services/auth';

import eyesOpened from '../../assets/eyes-opened.png';
import eyesClosed from '../../assets/eyes-closed.png';
import { ButtonIcon } from "../../components/ButtonIcon";
import { styles } from "./styles";

export function Login() {
  
  const navigation = useNavigation();

  const [hidePassword, setHidePassword] = useState(true);
  
  const [userData, setUserData] = useState({});

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  async function handleLogin() {
    
    const data = await login(userInfo);
    
    setUserData(data);
    
    navigation.navigate('Catalog');

  }

  return (
    
    <View style={styles.container}>
      
        <Text style={styles.title}>LOGIN</Text>
        
        <View style={styles.form}>
          
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.textInput}
            value={userInfo.email}
            onChangeText={(e) => {
              const newUserInfo = { ...userInfo };
              newUserInfo.email = e;
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
