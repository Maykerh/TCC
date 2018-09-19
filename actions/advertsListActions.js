import * as actionType from '../assets/actionConstants.js';

var fakeData = [
    {id: '1', title: '3 Caixas de azulejo', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, a facilis fugit, quia repudiandae ab id, ad asperiores in at nisi quo nostrum. Quod doloribus optio blanditiis, architecto modi consequatur.'},
    {id: '2', title: '25 Kg de cimento', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ipsam aperiam'},
    {id: '3', title: 'Madeira para caixaria', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis omnis corrupti soluta.'},
    {id: '4', title: '250 tijolos', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde blanditiis quaerat earum fugit nulla praesentium quae quidem quo animi'},
    {id: '5', title: '3 Caixas de azulejo', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, a facilis fugit, quia repudiandae ab id, ad asperiores in at nisi quo nostrum. Quod doloribus optio blanditiis, architecto modi consequatur.'},
    {id: '6', title: '25 Kg de cimento', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ipsam aperiam'},
    {id: '7', title: 'Madeira para caixaria', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis omnis corrupti soluta.'},
    {id: '8', title: '250 tijolos', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde blanditiis quaerat earum fugit nulla praesentium quae quidem quo animi'}         
];

export function search(filters) {
    var advertsList = fakeData
    var filteredList = advertsList;
    console.log('cheguei');
    console.log(filters);

    if (filters.text) {
        filteredList = advertsList.filter((ad) => {
            return (ad.title.toLowerCase().indexOf(filters.text) > -1 || ad.description.toLowerCase().indexOf(filters.text) > -1);
        })
    }

    return {
        type: actionType.ADVERT_SEARCH,
        payload: filteredList
    }
}