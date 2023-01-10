import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const data = [
  {
    // Chargement de l'image depuis le système de fichiers
    image: require('../images/carousel_images/pexels-dids-6142134@2x.png'), 
    // Score de la diapositive
    caption: '1', 
    // Comment de la diapositive
    description: "I'm in a purple room and pretending to smile", 
  },
  {
    // Chargement de l'image depuis le système de fichiers
    image: require('../images/carousel_images/pexels-alex-green-6625951@2x.png'), 
    // Score de la diapositive
    caption: '6', 
    // Comment de la diapositive
    description: 'I was having a really bad day then something happened', 
  },
  {
    // Chargement de l'image depuis le système de fichiers
    image: require('../images/carousel_images/pexels-murat-esibatir-4355379@2x.png'), 
    // Score de la diapositive
    caption: '2', 
    // Comment de la diapositive
    description: "I'm totally lost", 
  },
]
;
function HomePageCarousel() {
  // J'utilise l'état local pour stocker l'indice actuel de la carousel
  const [index, setIndex] = useState(0);
  // La fonction handleSelect est appelée chaque fois qu'un élément de la carousel est sélectionné
  const handleSelect = (selectedIndex, e) => {
    // Je met à jour l'état local avec l'indice de l'élément sélectionné
    setIndex(selectedIndex);
  };

  return (
    // J'utilise la propriété activeIndex de Carousel pour définir l'élément actif
    // et j'utilise aussi la propriété onSelect pour définir la fonction à appeler lorsqu'un élément est sélectionné
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {/* Je map le tableau de données et on retourne un élément Carousel.Item pour chaque élément du tableau */}
      {data.map((slide, i) => {
        return (
          <Carousel.Item>
            {/* J'affiche l'image de l'élément courant */}
            <img
              className="d-block w-100 carouselImage"
              src={slide.image}
              alt="this is a slider showing peoples faces and their survey comments"
            />
            {/* Je'affiche le titre et la description de l'élément courant dans une légende de la carousel */}
            <Carousel.Caption className='captionText'>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default HomePageCarousel;