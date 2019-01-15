import * as actionType from '../assets/actionConstants.js';

var tempAdvertData = {
    category: 'Alvenaria',
    title: '250 Tijolos',
    address: 'América - Joinville/SC',
    date: '01/08/2018',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit explicabo obcaecati beatae dolores rem doloremque sunt eligendi commodi dolorem quisquam iste id, ullam dolorum vero aliquam possimus harum corrupti.Quas, pariatur veniam officia animi quo nesciunt rem reiciendis recusandae eligendi minus dolorum',
    phone: '(47) 9 9988 7766',
    image: 'tijolos.jpg'
}

export function loadAdvertData(oid) {
    return {
        type: actionType.LOAD_AD_DATA,
        payload: tempAdvertData
    }
}
