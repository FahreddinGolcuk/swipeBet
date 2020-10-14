import {Dimensions, PixelRatio, Platform} from 'react-native';

function memoize<T1, T2>(fn: (...args: T1[]) => T2): (...args: T1[]) => T2 {
  return fn;
}

const deviceSize = Dimensions.get('window');

export const deviceWidth = (): number => deviceSize.width;

export const deviceHeight = (): number => deviceSize.height;

const _isAndroid = Platform.OS === 'android';
export const isAndroid = (): boolean => _isAndroid;

// based on iphone 5s's scale

const wscale: number = deviceWidth() / 320;
const hscale: number = deviceHeight() / 640;

export const normalize = memoize(
  (size: number, based?: 'width' | 'height'): number => {
    const newSize = based === 'height' ? size * hscale : size * wscale;

    if (isAndroid()) {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }

    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  },
);
