import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../screens/Home';
import { Placeholder } from '../screens/Placeholder';
import { ROUTES } from './routes';
import { NavigationDrawer } from './drawer';
import { CollapsibleAppbarScreen } from '../examples/collapsible-appbar/CollapsibleAppbar';

const Drawer = createDrawerNavigator();

export const MyDrawer: React.FC = () => (
    <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{ width: '80%' }}
        drawerContent={(props): JSX.Element => <NavigationDrawer {...props} />}
    >
        <Drawer.Screen name={ROUTES.HOME.route} component={Home} />
        <Drawer.Screen name={ROUTES.COLLAPSIBLE_APPBAR.route} component={CollapsibleAppbarScreen} />
        <Drawer.Screen name={ROUTES.SEARCH_BAR.route}>
            {(): JSX.Element => <Placeholder title={ROUTES.SEARCH_BAR.name} />}
        </Drawer.Screen>
        <Drawer.Screen name={ROUTES.LOADING_STATES.route}>
            {(): JSX.Element => <Placeholder title={ROUTES.LOADING_STATES.name} />}
        </Drawer.Screen>
        <Drawer.Screen name={ROUTES.I18N.route}>
            {(): JSX.Element => <Placeholder title={ROUTES.I18N.name} />}
        </Drawer.Screen>
        <Drawer.Screen name={ROUTES.ACTION_LIST.route}>
            {(): JSX.Element => <Placeholder title={ROUTES.ACTION_LIST.name} />}
        </Drawer.Screen>
        <Drawer.Screen name={ROUTES.DATA_LIST.route}>
            {(): JSX.Element => <Placeholder title={ROUTES.DATA_LIST.name} />}
        </Drawer.Screen>
        <Drawer.Screen name={ROUTES.MULTISELECT_LIST.route}>
            {(): JSX.Element => <Placeholder title={ROUTES.MULTISELECT_LIST.name} />}
        </Drawer.Screen>
        <Drawer.Screen name={ROUTES.SORTABLE_LIST.route}>
            {(): JSX.Element => <Placeholder title={ROUTES.SORTABLE_LIST.name} />}
        </Drawer.Screen>
        <Drawer.Screen name={ROUTES.STATUS_LIST.route}>
            {(): JSX.Element => <Placeholder title={ROUTES.STATUS_LIST.name} />}
        </Drawer.Screen>
        <Drawer.Screen name={ROUTES.RESPONSIVE_TABLE.route}>
            {(): JSX.Element => <Placeholder title={ROUTES.RESPONSIVE_TABLE.name} />}
        </Drawer.Screen>
        <Drawer.Screen name={ROUTES.BOTTOMSHEET.route}>
            {(): JSX.Element => <Placeholder title={ROUTES.BOTTOMSHEET.name} />}
        </Drawer.Screen>
        <Drawer.Screen name={ROUTES.COMPLEX_BOTTOMSHEET.route}>
            {(): JSX.Element => <Placeholder title={ROUTES.COMPLEX_BOTTOMSHEET.name} />}
        </Drawer.Screen>
        <Drawer.Screen name={ROUTES.DYNAMIC_STEPPER.route}>
            {(): JSX.Element => <Placeholder title={ROUTES.DYNAMIC_STEPPER.name} />}
        </Drawer.Screen>
    </Drawer.Navigator>
);
