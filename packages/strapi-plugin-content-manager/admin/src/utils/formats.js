import { dateFormats } from 'strapi-helper-plugin';

const formats = {
  ...dateFormats,
  // Customise the format by uncommenting the one you wan to override it corresponds to the type of your field
  // date: 'dddd, MMMM Do YYYY',
  //  datetime: 'dddd, MMMM Do YYYY HH:mm',
  // time: 'HH:mm A',
  // timestamp: 'dddd, MMMM Do YYYY HH:mm',
};

export default formats;