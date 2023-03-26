

export function getImage(image) {
  
  let imageSrc = require('../assets/images/DisneyPlus.png');
  switch (image) {
    case "poster1.png":
      imageSrc = require("../assets/images/poster1.png");
      break;
    case 'poster2.png':
      imageSrc = require("../assets/images/poster2.png");
      break;
    case 'poster3.png':
      imageSrc = require("../assets/images/poster3.png");
      break;
    case 'poster4.png':
      imageSrc = require("../assets/images/poster4.png");
      break;
    case 'poster5.png':
      imageSrc = require("../assets/images/poster5.png");
      break;
    case 'poster7.png':
      imageSrc = require("../assets/images/poster7.png");
      break;
    case 'poster8.png':
      imageSrc = require("../assets/images/poster8.png");
      break;
    case 'poster9.png':
      imageSrc = require("../assets/images/poster9.png");
      break;
    case 'poster10.png':
      imageSrc = require("../assets/images/poster10.png");
      break;
    case 'poster11.png':
      imageSrc = require("../assets/images/poster11.png");
      break;
    case 'poster12.png':
      imageSrc = require("../assets/images/poster12.png");
      break;

    default:
      break;
  }

  return imageSrc;

}
