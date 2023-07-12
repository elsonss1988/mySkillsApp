import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export default function SkillCard({skill, ...rest}: SkillCardProps) {
  return (
    <TouchableOpacity key={skill} style={[styles.buttonSkills]} {...rest}>
      <Text style={styles.skills}> {skill} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkills: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  skills: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
