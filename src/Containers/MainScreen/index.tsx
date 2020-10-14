import React, {useEffect, useMemo, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Match} from '@Components/Match';
import GestureRecognizer from 'react-native-swipe-gestures';
import {deviceWidth, normalize} from '@Plugins/Device';
import {MockData} from '@Utils/MockData';

const MainScreen: React.FunctionComponent = (): JSX.Element => {
  const [pageNumber, setPageNumber] = useState(1);
  const inputRefs = useMemo(
    () =>
      Array(MockData.length)
        .fill(0)
        .map(() => React.createRef()),
    [],
  );

  const _onSwipeLeft = () => {
    if (pageNumber < MockData[0].rates.length / 4) {
      setPageNumber((prevState) => prevState + 1);
    }
    setTimeout(() => {
      inputRefs.forEach((value) => {
        value.current.scrollToOffset({
          offset: pageNumber * (deviceWidth() - normalize(40)),
          animated: true,
        });
      });
    }, 50);
  };

  const _onSwipeRight = () => {
    if (pageNumber > 0) {
      setPageNumber((prevState) => prevState - 2);
    }
    setTimeout(() => {
      inputRefs.forEach((value) => {
        value.current.scrollToOffset({
          offset: -pageNumber * (deviceWidth() + normalize(40)),
          animated: true,
        });
      });
    }, 500);
  };

  return (
    <GestureRecognizer
      style={{flex: 1}}
      onSwipeLeft={_onSwipeLeft}
      onSwipeRight={_onSwipeRight}>
      <ScrollView>
        <SafeAreaView>
          {MockData.map((value, index) => {
            return (
              <Match
                ref={inputRefs[index]}
                league={value.league}
                date={value.date}
                team1={value.team1}
                team2={value.team2}
                rates={value.rates}
                key={index}
              />
            );
          })}
        </SafeAreaView>
      </ScrollView>
    </GestureRecognizer>
  );
};

export default MainScreen;
