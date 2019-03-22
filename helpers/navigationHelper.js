import { StackActions, NavigationActions } from 'react-navigation';

export function navigateAndReset(navigation, screenName, params) {
    navigation.dispatch(StackActions.reset({
        index: 0,
        key: null,
        actions: [
            NavigationActions.navigate({ routeName: screenName, params: params })
        ] 
    }));
};