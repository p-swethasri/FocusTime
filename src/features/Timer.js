import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { Countdown } from '../Components/CountDown';
import { RoundedButton } from '../Components/RoundedButton';
import { spacing } from '../utils/sizes';
import { colors } from '../utils/colors';
import { ProgressBar } from 'react-native-paper';
import { Timing } from './Timing';
import { useKeepAwake } from 'expo-keep-awake';
const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];
export const Timer = ({ focusSubject,clearSubject, onTimerEnd }) => {
   useKeepAwake();
  const [isstarted, setisstarted] = useState(false);
  const [progress, setprogress] = useState(1);
  const [minutes, setminutes] = useState(0.1);
  const onEnd=(reset)=>{
    Vibration.vibrate(PATTERN);
    setisstarted(false);
    setprogress(1);
    reset()
    onTimerEnd(focusSubject)
  }
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isstarted}
          onProgress={setprogress}
          onEnd={onEnd}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.progressBar}
          style={{ height: spacing.sm }}
        />
      </View>
      <View style={styles.timingWraper}>
        <Timing onChangeTime={setminutes} />
      </View>
      <View style={styles.buttonWraper}>
        {!isstarted && (
          <RoundedButton title="start" onProgress={() => setisstarted(true)} />
        )}
        {isstarted && (
          <RoundedButton title="Pause" onProgress={() => setisstarted(true)} />
        )}
      </View>
      <View style={styles.clearWraper}>
        <RoundedButton size={50} title="" onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.creat({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  timingWraper: {
    flex: 0.1,
    flexDirection: 'row',
    paddingTop: spacing.xxl,
  },
  buttonWraper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearWraper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
});
