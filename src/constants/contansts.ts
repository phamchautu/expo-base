import { Dimensions } from 'react-native';

const { width, height, fontScale } = Dimensions.get('window');

export const APP_THEME = 'light';

export const APP_PADDING = 16;

export const APP_WIDTH = width - APP_PADDING * 2;

export const WINDOW_WIDTH = width;

export const WINDOW_HEIGHT = height;

export const WINDOW_FONTSCALE = fontScale;

export enum BoxSize {
    xxxl = 86,
    xxl = 70,
    xl = 56,
    lg = 40,
    md = 30,
    sm = 24,
    xs = 20,
    xxs = 16,
}

export enum IconSize {
    xxxxl = 70,
    xxxl = 50,
    xxl = 36,
    xl = 30,
    lg = 24,
    md = 16,
    sm = 12,
    xs = 8,
}

export enum TextSize {
    xxxl = 22,
    xxl = 20,
    xl = 18,
    lg = 16,
    md = 14,
    sm = 12,
    xs = 10,
    xxs = 8,
}
