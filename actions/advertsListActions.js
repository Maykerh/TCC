import * as actionType from '../assets/actionConstants.js';

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

export function search(searchFilters) {
    var advertsList = fakeData;
    var filteredList = advertsList;

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

export function changeSearchFilters(id, value) {
    return {
        type: actionType.CHANGE_FILTERS,
        payload: { id, value }
    }
}