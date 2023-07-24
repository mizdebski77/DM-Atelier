
export const leftAnimation = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            delay: 0.1,
        },
    },
};

export const rightAnimation = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            delay: 0.1,
        },
    },
}

export const opacityAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        
        transition: {
            duration: 0.6,
            delay: 0.1,
        },
    },
}

export const sectionAnimation = {
    hidden: {
      opacity: 0,
      y: "60",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.1,
        ease: "easeInOut",
        when: "beforeChildren",
      },
    },
  };

