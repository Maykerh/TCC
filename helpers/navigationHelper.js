import { StackActions, NavigationActions } from 'react-navigation';

export function navigateAndReset(props, screenName, params) {
    props.navigation.dispatch(StackActions.reset({
        index: 0,
        key: null,
        actions: [
            NavigationActions.navigate({ routeName: screenName, params: params })
        ] 
    }));
};