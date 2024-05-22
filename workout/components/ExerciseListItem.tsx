import {View, Text, StyleSheet} from 'react-native';

export default function ExerciseListItem({item}){
    return(
      <View style={styles.exercise}>
        <Text style={styles.exerciseName}> {item.name}</Text>
        <Text style={styles.exerciseStuff}>{item.muscle} | {item.equipment}</Text>
      </View>
    )
}


const styles = StyleSheet.create({
  exercise:{
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },
  exerciseName: {
    fontSize: 20, 
    fontWeight: '500'
  },
  exerciseStuff: {
    color: 'dimgray',
  }
});

