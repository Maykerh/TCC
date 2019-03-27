import firebase from 'firebase';
import * as actionType from '../assets/actionConstants.js';

export function getActiveAds() {
    var uid = firebase.auth().currentUser ? firebase.auth().currentUser.uid : 'LTAFmRqYYLgw6v69yaXIaufLpZ62';
    var adList = [];

    return (dispatch) => {
        dispatch({ type: actionType.IS_LOADING, payload: true });

        firebase.database()
            .ref(`user-adverts/${uid}/active`)
            .once('value')
            .then((adverts) => {
                let advertsObj = adverts.val();

                if (advertsObj && Object.keys(advertsObj).length > 0) {
                    Object.keys(advertsObj).map((adKey) => {
                        advertsObj[adKey].key = adKey;

                        adList.push(advertsObj[adKey]);
                    });
                }

                dispatch({ 
                    type: actionType.LOAD_ACTIVE_ADVERTS_LIST,
                    payload: adList
                });

                dispatch({ type: actionType.IS_LOADING, payload: false });
            })
            .catch((error) => {
                alert('ocorreu um erro bla bla bla');
                console.log(error)
                dispatch({ type: actionType.IS_LOADING, payload: false });
            });
    }
}

export function getInactiveAds() {
    var uid = firebase.auth().currentUser ? firebase.auth().currentUser.uid : 'LTAFmRqYYLgw6v69yaXIaufLpZ62';
    var adList = [];

    return (dispatch) => {
        firebase.database()
            .ref(`user-adverts/${uid}/inactive`)
            .once('value')
            .then((adverts) => {
                let advertsObj = adverts.val();

                if (advertsObj && Object.keys(advertsObj).length > 0) {
                    Object.keys(advertsObj).map((adKey) => {
                        advertsObj[adKey].key = adKey;
                        
                        adList.push(advertsObj[adKey]);
                    });
                }

                dispatch({ 
                    type: actionType.LOAD_INACTIVE_ADVERTS_LIST,
                    payload: adList
                });

                dispatch({ type: actionType.IS_LOADING, payload: false });
            }).catch((error) => {
                alert('ocorreu um erro bla bla bla');
                dispatch({ type: actionType.IS_LOADING, payload: false });
            });
    }
}