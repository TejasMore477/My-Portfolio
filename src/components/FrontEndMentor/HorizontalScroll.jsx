import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import img1 from "/src/assets/images/frontendMentor/Age-calculator-app.png";
import img2 from "/src/assets/images/frontendMentor/Base-Apparel-coming-soon-page.png";
import img3 from "/src/assets/images/frontendMentor/faq-accordion-main.jpg";
import img4 from "/src/assets/images/frontendMentor/interactive-rating-component-main.png";
import img5 from "/src/assets/images/frontendMentor/intro-component-with-signup-form-master.jpg";
import img6 from "/src/assets/images/frontendMentor/social-links-profile-main.png";
import img7 from "/src/assets/images/frontendMentor/Tip-Calculator-app.png";
import ImageContainer from './ImageContainer';

function HorizontalScroll() {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Slower scroll effect by reducing the range
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  // Animation props for reuse
  const animationProps = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: 'easeInOut' },
    viewport: { once: true, threshold: 0.2 },
  };

  const images = [
    { src: img1, description: "June 2024", alt: "Age calculator app" },
    { src: img2, description: "June 2024", alt: "Base apparel coming soon page" },
    { src: img3, description: "June 2024", alt: "FAQ accordion main" },
    { src: img4, description: "June 2024", alt: "Interactive rating component" },
    { src: img5, description: "June 2024", alt: "Intro component with signup form" },
    { src: img6, description: "June 2024", alt: "Social links profile" },
    { src: img7, description: "June 2024", alt: "Tip calculator app" },
  ];

  return (
    <div className="relative pt-[100vh] h-[550vh] w-full" data-scroll-section ref={targetRef}>
      {/* Sticky Section */}
      <div className=" h-screen bg-gray-800 overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex h-screen sticky top-0 bg-red-900 gap-[3vw] w-max px-[4rem] items-center"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`${index%2===0? "pt-40":"pt-0"} image-item hover:scale-105 transition-transform duration-300 shadow-lg rounded-lg h-full`}
              {...animationProps}
            >
              <ImageContainer
                imageSource={image.src}
                description={image.description}
                imageAlt={image.alt}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default HorizontalScroll;
