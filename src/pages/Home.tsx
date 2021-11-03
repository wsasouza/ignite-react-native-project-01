import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,  
  Alert
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    const newSkillFormatted = newSkill.trim();

    if(newSkillFormatted.length > 0){
      const data = {
        id: String(new Date().getTime()),
        name: newSkillFormatted
      };

      setMySkills(oldState => [...oldState, data]);      

    } else {
      Alert.alert('Digite a nova habilidade!');
    }      
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    
    if (currentHour < 12) {
      setGreeting('Bom dia');
    }
    else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Boa tarde');
    }
    else {
      setGreeting('Boa noite');
    }
  }, []);

  return (
    <View style={styles.container}>      

      <Text style={styles.title}>{greeting}, Walter</Text>      

      <TextInput
        style={styles.input}
        placeholder="Nova habilidade"
        placeholderTextColor="#444"
        onChangeText={setNewSkill}         
      />

      <Button 
        onPress={handleAddNewSkill} 
        activeOpacity={0.7} 
        title="Adicionar"
      />     


      <Text style={[styles.title, { marginVertical: 50 }]}>
        Minhas habilidades:
      </Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={mySkills} 
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard 
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}      
      />    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1F1e25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 10,
  }
});
