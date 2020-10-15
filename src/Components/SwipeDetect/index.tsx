import React, {ReactElement} from 'react';
import {SafeAreaView, ScrollView, ViewStyle} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

interface SwipeDetectProps {
  children?: ReactElement | ReactElement[];
  style?: ViewStyle | ViewStyle[];
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

const SwipeDetect: React.FunctionComponent<SwipeDetectProps> = ({
  children,
  style = {},
  onSwipeLeft,
  onSwipeRight,
}): JSX.Element => {
  return (
    <GestureRecognizer
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      style={style}>
      <ScrollView>
        <SafeAreaView>{children}</SafeAreaView>
      </ScrollView>
    </GestureRecognizer>
  );
};

export default SwipeDetect;
