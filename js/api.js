import { commonMarker } from './map.js';
import { showMessage } from './util.js';
const ADDITIONAL_HOTELS_COUNT= 10;

const getData=(onSuccess,onError)=>{
  fetch('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((hotels) => {
      onSuccess(hotels.slice(0, ADDITIONAL_HOTELS_COUNT));
    }).catch(()=>{
      onError();
    });
};
const sendData = (onSuccess,onFail,body)=>{
  fetch(
    'https://26.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        showMessage('success');
      }
    })
    .catch(() => {
      onFail();
      showMessage('error');
    });
};

export {getData,sendData};
