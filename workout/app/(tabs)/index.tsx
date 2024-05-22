import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import exercises from "../../assets/data/exercises.json"
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const exercise = exercises[0];
  return (
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //   headerImage={
    //     <View style={styles.imageContainer}>
    //       <Image
    //         source={require('@/assets/images/workoutBG.avif')}
    //         style={styles.reactLogo}
    //       />
    //     </View>
    //   }>
    //   {/* above part sets up picture that changes size as drag happens */}
    //   {/* below is the text appearing in the showing tab and all elements */}
      // <ThemedView>
      //   <ThemedText type='default' style={styles.exerciseName}>Exercise: {exercise.name}</ThemedText>
      //   <ThemedText type='default' style={styles.exerciseStuff}>Muscle: {exercise.muscle} | {exercise.equipment}</ThemedText>
        
      // </ThemedView>
    //   <ThemedView>
    //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
    //     <ThemedText>
    //       When you're ready, run{' '}
    //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
    //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
    //     </ThemedText>
    //   </ThemedView>
    // </ParallaxScrollView>

    <View style={styles.container}>
      <View style={styles.exercise}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Text style={styles.exerciseStuff}>{exercise.muscle.toUpperCase()} | {exercise.equipment.toUpperCase()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    padding:10,
  },
  imageContainer: {
    bottom: 0,
    left: 0,
    width: '100%',
    height: 250,
  },
  reactLogo: {
    height: '85%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
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
