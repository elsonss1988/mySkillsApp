import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  StatusBar,
  FlatList,
} from 'react-native';
import Button from '../components/Button';
import SkillCard from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
  date?: Date;
}

export const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreetting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    setMySkills(oldState => [...oldState, data]);
  }

  function handleInputSkills(text: string) {
    console.log(text);
    setNewSkill(text);
  }

  function handleRemoveSkill(id: string) {
    console.log('Helllo');
    setMySkills(oldState => oldState.filter(skill => skill.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreetting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreetting('Good afternoon');
    } else {
      setGreetting('Good Night');
    }
  }, []);

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     timerRef.current -= 1;
  //     if (timerRef.current < 0) {
  //       clearInterval(timerId);
  //     } else {
  //       setTime(timerRef.current);
  //     }
  //   }, 1000);
  //   return () => {
  //     clearInterval(timerId);
  //   };
  // }, [timerRef]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.inline}>
        <Text style={styles.tittle}>Welcome </Text>
        <Text style={styles.subTitle}>to My Skill </Text>
      </View>
      <Text style={styles.greeting}>{greeting}</Text>
      <Text style={styles.greeting}>{Date()}</Text>
      <TextInput
        style={styles.input}
        placeholder="New Skills"
        placeholderTextColor={'#555'}
        onChangeText={text => handleInputSkills(text)}
      />
      <Button title="add" onPress={handleAddNewSkill} />
      <Text style={[styles.tittle, {marginVertical: 50}]}> My Skills </Text>
      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  tittle: {
    color: '#FFF',
    fontSize: 36,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    marginTop: 30,
    borderRadius: 20,
    padding: Platform.OS === 'ios' ? 15 : 10,
  },
  greeting: {
    color: '#FFF',
  },
  subTitle: {
    color: '#FFF',
    fontSize: 18,
    // padding: 10,
    // justifyContent: 'center',
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
