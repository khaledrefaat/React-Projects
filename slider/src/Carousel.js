import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import images from './images';
import { nanoid } from 'nanoid';

import classes from './Carousel.module.css';

const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className={classes.carousel}
      whileTap={{ cursor: 'grabbing' }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className={classes.innerCarousel}
      >
        {images.map(image => (
          <motion.div key={nanoid()} className={classes.item}>
            <img src={image} alt="background" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
