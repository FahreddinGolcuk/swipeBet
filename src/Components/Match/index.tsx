import React from 'react';
import {FlatList, Text, View, Animated} from 'react-native';
import _style from './style';
import {normalize} from '@Plugins/Device';

interface MatchProps {
  league: string;
  date: string;
  team1: string;
  team2: string;
  rates: Array<{name: string; rate: string}>;
}

export const Match: React.FunctionComponent<MatchProps> = React.forwardRef(
  ({rates, date, league, team1, team2}, ref): JSX.Element => {
    const scrollX = new Animated.Value(0);

    const _renderItem = (item: {name: string; rate: string}) => {
      return (
        <View style={_style.itemContainer}>
          <Text style={{fontWeight: '100', fontSize: normalize(8)}}>
            {item.name}
          </Text>
          <View style={_style.rateContainer}>
            <Text style={_style.rateText}>{item.rate}</Text>
          </View>
        </View>
      );
    };

    return (
      <View style={_style.container}>
        <View style={_style.topBar}>
          <Text style={_style.leagueText}>{league}</Text>
          <Text style={_style.dateText}>{date}</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={_style.team}>
            {team1} - {team2}
          </Text>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <View style={_style.minMatchContainer}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>3</Text>
            </View>
            <FlatList
              ref={ref}
              keyExtractor={(item) => item.name}
              data={rates}
              horizontal
              pagingEnabled
              scrollEnabled={false}
              snapToAlignment="center"
              scrollEventThrottle={2}
              decelerationRate={'fast'}
              showsHorizontalScrollIndicator={false}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: false},
              )}
              renderItem={({item}) => _renderItem(item)}
            />
            <View style={_style.moreContainer}>
              <Text style={{color: 'white'}}>+69</Text>
              <Text style={{color: 'white'}}>{'>'}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  },
);
