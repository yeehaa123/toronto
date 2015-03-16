import R from 'ramda';
import _ from 'lodash';
import faker from 'faker';

let initialPad = {
  index: 404,
  type: 'image',
  content: 'http://www.mentalutensil.com/wp-content/uploads/2013/11/sg14.jpg'
}

let createImageUrl = (index) => {
  let imageType = imageTypes[index % 2];
  let imageIndex;
  if(index >= 10){
    imageIndex = index - 10;
  } else {
    imageIndex = index;
  }
  return faker.image[imageType]() + '/' + imageIndex;
} 

let createSampleText = () => {
  return faker.lorem.paragraph();
}

let types = ['text', 'image'];
let imageTypes = ['food', 'city'];

let range = R.range(1,17);
let padsMaker = R.map((index) => {
  let content;
  let type = types[index % 2];
  if(type === 'image'){
    content = createImageUrl(index); 
  } else {
    content = createSampleText(); 
  }
  return { content, type, index };
});


let allPads = padsMaker(range); 
allPads[12] = initialPad;

export { allPads };
