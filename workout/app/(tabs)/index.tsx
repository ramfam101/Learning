import { Image, StyleSheet, Platform, View, Text, FlatList } from 'react-native';
import exercises from "../../assets/data/exercises.json"
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StatusBar } from 'expo-status-bar';
import ExerciseListItem from '@/components/ExerciseListItem';

export default function HomeScreen() {
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
      <FlatList
      data={exercises}
      renderItem={({item}) => <ExerciseListItem item={item}/>}
      keyExtractor={(item, index) => item.name +index}
      contentContainerStyle={{gap: 5}}
      />
      <StatusBar style ="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    padding:10,
    paddingTop: 70,
  },
  
});
