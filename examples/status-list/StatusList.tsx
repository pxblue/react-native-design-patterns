import React, { useCallback } from 'react';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { View, FlatList, StyleSheet, ViewStyle } from 'react-native';
import { Header, wrapIcon, InfoListItem, EmptyState, ListItemTag } from '@pxblue/react-native-components';
import { useTheme } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { InfoListItemProps } from '@pxblue/react-native-components/core/info-list-item/info-list-item';
import * as Colors from '@pxblue/colors';

const MenuIcon = wrapIcon({ IconClass: MaterialIcons, name: 'menu' });
const NotificationIcon = wrapIcon({ IconClass: MaterialIcons, name: 'notifications' });
const HomeIcon = wrapIcon({ IconClass: MaterialIcons, name: 'home' });
const WarningIcon = wrapIcon({ IconClass: MaterialIcons, name: 'warning' });

export type ActionListProps = {
    hardcodedData?: InfoListItemProps[];
    navigation: DrawerNavigationProp<Record<string, undefined>>;
};

const useStyles = (theme: ReactNativePaper.Theme): StyleSheet.NamedStyles<{ container: ViewStyle }> =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.surface,
        },
    });

const createInfoListItemConfig = (index: number, randomStatus: string, tag?: boolean): InfoListItemProps => {
    switch (randomStatus) {
        case 'alarm':
            return {
                title: `Item ${index}`,
                subtitle: `Status: ${randomStatus}`,
                IconClass: NotificationIcon,
                iconColor: tag ? Colors.white[50] : Colors.red[500],
                statusColor: tag ? Colors.red[500] : 'transparent',
                rightComponent: tag ? <ListItemTag label={'NEW'} backgroundColor={Colors.red[500]} /> : undefined,
            };
        case 'warning':
            return {
                title: `Item ${index}`,
                subtitle: `Status: ${randomStatus}`,
                IconClass: WarningIcon,
                iconColor: Colors.orange[500],
            };
        case 'normal':
        default:
            return {
                title: `Item ${index}`,
                subtitle: `Status: ${randomStatus}`,
                IconClass: HomeIcon,
            };
    }
};

const createRandomItem = (): InfoListItemProps => {
    const int = parseInt(`${Math.random() * 100}`, 10);
    switch (Math.floor(Math.random() * 5)) {
        case 0:
            return createInfoListItemConfig(int, 'alarm');
        case 1:
            return createInfoListItemConfig(int, 'alarm', true);
        case 2:
            return createInfoListItemConfig(int, 'warning');
        default:
            return createInfoListItemConfig(int, 'normal');
    }
};

const list: InfoListItemProps[] = [];

for (let i = 0; i < 20; i++) {
    list.push(createRandomItem());
}

export const StatusListScreen: React.FC<ActionListProps> = (props) => {
    const { hardcodedData: data = list, navigation } = props;
    const theme: ReactNativePaper.Theme = useTheme();
    const styles = useStyles(theme);

    const toggleMenu = useCallback((): void => {
        navigation.openDrawer();
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Header
                testID="header"
                title={'Status List'}
                navigation={{
                    icon: MenuIcon,
                    onPress: (): void => {
                        toggleMenu();
                    },
                }}
            />
            {data.length ? (
                <FlatList
                    data={data}
                    testID={'list'}
                    keyExtractor={(_item, index): string => `${index}`}
                    renderItem={({ item }): JSX.Element => (
                        <InfoListItem
                            hidePadding
                            iconColor={theme.colors.text}
                            statusColor={'transparent'}
                            avatar
                            divider={'partial'}
                            {...item}
                        />
                    )}
                />
            ) : (
                <EmptyState title={'No Items found'} />
            )}
        </View>
    );
};
