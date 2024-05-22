import {View, Text, StyleSheet} from 'react-native';

export default function ExerciseListItem({item}){
    return(
      <View style={styles.exercise}>
        <Text style={styles.exerciseName}> {item.name}</Text>
        <Text style={styles.exerciseStuff}><Text style={styles.muscle}>{item.muscle}</Text> | <Text style={styles.equipment}>{item.equipment}</Text></Text>
      </View>
    )
}


const styles = StyleSheet.create({
  exercise:{
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    gap: 5,
    marginHorizontal: 2,

    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  exerciseName: {
    fontSize: 20, 
    fontWeight: '500'
    
  },
  exerciseStuff: {
    color: 'dimgray',
  },
  muscle: {
    textTransform: 'capitalize',
  },
  equipment: {
    textTransform: 'capitalize',
  },
});

