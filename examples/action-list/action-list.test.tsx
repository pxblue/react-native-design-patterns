import React from 'react';
import renderer from 'react-test-renderer';
import { ActionListScreen, ListItem } from './ActionList';
import { InfoListItem } from '@pxblue/react-native-components';
import { FlatList } from 'react-native';

jest.mock('@react-navigation/native', () => ({
    useNavigation: (): any => ({ openDrawer: jest.fn(() => true) }),
}));

const hardcodedData: ListItem[] = [
    {
        id: 1,
        name: 'item 1',
        details: 'item 1 details',
    },
    {
        id: 2,
        name: 'item 2',
        details: 'item 2 details',
    },
    {
        id: 3,
        name: 'item 3',
        details: 'item 3 details',
    },
];

describe('Action List Tests', () => {
    it('Screen Renders', () => {
        const tree = renderer.create(<ActionListScreen hardcodedData={hardcodedData} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should render 3 items if 3 items are passed in', () => {
        const instance = renderer.create(<ActionListScreen hardcodedData={hardcodedData} />).root;
        const flatList = instance.findByType(FlatList);
        const infoListItems = flatList.findAllByType(InfoListItem);
        expect(infoListItems).toHaveLength(3);
    });

    it('Should render 10 items by default', () => {
        const instance = renderer.create(<ActionListScreen />).root;
        const flatList = instance.findByType(FlatList);
        const infoListItems = flatList.findAllByType(InfoListItem);
        expect(infoListItems).toHaveLength(10);
    });
});
