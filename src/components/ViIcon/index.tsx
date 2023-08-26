import React, { ComponentType, FC } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Fontisto from '@expo/vector-icons/Fontisto';
import Foundation from '@expo/vector-icons/Foundation';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Zocial from '@expo/vector-icons/Zocial';
import { IconSize } from 'constants/contansts';
import { ColorValue, TextProps } from 'react-native';

export interface IconProps extends TextProps {
    /**
     * Size of the icon, can also be passed as fontSize in the style object.
     *
     * @default 12
     */
    size?: number | undefined;

    /**
     * Name of the icon to show
     *
     * See Icon Explorer app
     * {@link https://github.com/oblador/react-native-vector-icons/tree/master/Examples/IconExplorer}
     */
    name: string;

    /**
     * Color of the icon
     *
     */
    color?: ColorValue | number | undefined;
}

export interface ViIconProps extends IconProps {
    size?: IconSize;
}

const IconWrapper: Record<string, ComponentType<IconProps>> = {
    ad: AntDesign,
    en: Entypo,
    ev: EvilIcons,
    fe: Feather,
    fa: FontAwesome,
    fa5: FontAwesome5,
    ft: Fontisto,
    fo: Foundation,
    ii: Ionicons,
    mc: MaterialCommunityIcons,
    mi: MaterialIcons,
    oc: Octicons,
    sl: SimpleLineIcons,
    zo: Zocial,
};

const ViIcon: FC<ViIconProps> = (props) => {
    const { name, size = IconSize.md, ...rest } = props;
    const [prefix, ...names] = (name || '').split('-');

    const Icon = IconWrapper[prefix];

    if (!Icon) {
        return null;
    }

    return <Icon {...rest} name={names.join('-')} size={size} />;
};

ViIcon.displayName = 'Icon.VectorIcon';
export default ViIcon;
