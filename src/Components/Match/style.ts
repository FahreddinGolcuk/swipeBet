import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {normalize} from '@Plugins/Device';

interface StyleProps {
  container: ViewStyle;
  topBar: ViewStyle;
  leagueText: TextStyle;
  dateText: TextStyle;
  team: TextStyle;
  itemContainer: ViewStyle;
  moreContainer: ViewStyle;
  minMatchContainer: ViewStyle;
  rateContainer: ViewStyle;
  rateText: TextStyle;
}

export default StyleSheet.create<StyleProps>({
  rateContainer: {
    borderRadius: normalize(2),
    backgroundColor: '#32464f',
    width: normalize(40),
    alignItems: 'center',
  },
  rateText: {
    fontWeight: 'bold',
    color: 'white',
    padding: normalize(1),
  },
  container: {
    width: '100%',
    height: normalize(85),
    backgroundColor: '#aee0f5',
  },
  topBar: {
    width: '100%',
    height: normalize(25),
    backgroundColor: '#6eb6d4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leagueText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: normalize(12),
  },
  dateText: {
    color: 'white',
    fontWeight: '300',
    fontSize: normalize(12),
  },
  team: {
    fontWeight: 'bold',
    fontSize: normalize(15),
  },
  itemContainer: {
    width: normalize(64),
    height: normalize(25),
    marginLeft: normalize(4),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  moreContainer: {
    alignItems: 'center',
    backgroundColor: '#1e9ed4',
    height: normalize(36),
    width: normalize(25),
  },
  minMatchContainer: {
    backgroundColor: 'green',
    width: normalize(25),
    height: normalize(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
