import * as actionType from '../assets/actionConstants.js';
import firebase from 'firebase';
import Loading from '../components/loading';

var fakeData = [
    {id: '1', category: 'Cerâmica',     city: 'Joinville',      title: '3 Caixas de azulejo',   description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, a facilis fugit, quia repudiandae ab id, ad asperiores in at nisi quo nostrum. Quod doloribus optio blanditiis, architecto modi consequatur.'},
    {id: '2', category: 'Alvenaria',    city: 'Joinville',      title: '25 Kg de cimento',      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ipsam aperiam'},
    {id: '3', category: 'Madeira',      city: 'Joinville',      title: 'Madeira para caixaria', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis omnis corrupti soluta.'},
    {id: '4', category: 'Alvenaria',    city: 'Joinville',      title: '250 tijolos',           description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde blanditiis quaerat earum fugit nulla praesentium quae quidem quo animi'},
    {id: '5', category: 'Cerâmica',     city: 'Joinville',      title: '3 Caixas de azulejo',   description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, a facilis fugit, quia repudiandae ab id, ad asperiores in at nisi quo nostrum. Quod doloribus optio blanditiis, architecto modi consequatur.'},
    {id: '6', category: 'Alvenaria',    city: 'Araquari',       title: '25 Kg de cimento',      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ipsam aperiam'},
    {id: '7', category: 'Madeira',      city: 'Joinville',      title: 'Madeira para caixaria', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis omnis corrupti soluta.'},
    {id: '8', category: 'Alvenaria',    city: 'Jaraguá do sul', title: '250 tijolos',           description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde blanditiis quaerat earum fugit nulla praesentium quae quidem quo animi'}         
];

export function getActiveAds() {

}

export function search(searchFilters) {
    var advertsList = fakeData;
    var filteredList = advertsList;

    // var uid = firebase.auth().currentUser ? firebase.auth().currentUser.uid : 'LTAFmRqYYLgw6v69yaXIaufLpZ62';


    return (dispatch) => {
        dispatch({ type: actionType.IS_LOADING, payload: true });

        // ref.child('users').orderByChild('name').equalTo('John Doe').on("value", function(snapshot) {
        //     console.log(snapshot.val());
        //     snapshot.forEach(function(data) {
        //         console.log(data.key);
        //     });
        // });

        let ref = firebase.database().ref(`adverts/active`);

        
        if (searchFilters && searchFilters.text) {
            ref.orderByChild('title')
            .startAt(`%${searchFilters.text}%`)
            .endAt(searchFilters.text+"\uf8ff")
            .on('value', (adverts) => handleResult(adverts, dispatch));
        } else {
            ref.limitToLast(100).on('value', (adverts) => handleResult(adverts, dispatch));
        }
    }

    

    if (searchFilters.text) {
        filteredList = filteredList.filter((ad) => {
            return (ad.title.toLowerCase().indexOf(searchFilters.text) > -1 || ad.description.toLowerCase().indexOf(searchFilters.text) > -1);
        })
    }

    if (searchFilters.category) {
        filteredList = filteredList.filter((ad) => {
            return searchFilters.category == ad.category;
        });
    }

    if (searchFilters.city) {
        filteredList = filteredList.filter((ad) => {
            return searchFilters.city == ad.city;
        });
    }

    return {
        type: actionType.ADVERT_SEARCH,
        payload: filteredList
    }
}

function handleResult(adverts, dispatch) {
    var adList = [];
    let advertsObj = adverts.val();

    if (advertsObj && Object.keys(advertsObj).length > 0) {
        Object.keys(advertsObj).map((adKey) => {
            advertsObj[adKey].key = adKey;

            adList.push(advertsObj[adKey]);
        });
    }

    dispatch({ 
        type: actionType.ADVERT_SEARCH,
        payload: adList
    });

    dispatch({ type: actionType.IS_LOADING, payload: false });
}

export function changeSearchFilters(id, value) {
    return {
        type: actionType.CHANGE_FILTERS,
        payload: { id, value }
    }
}