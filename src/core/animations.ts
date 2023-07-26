
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

export const openImage = {
    opacity: 1,
    scale: 1
};

export const closeImage = {
    opacity: 0,
    scale: 0
};

export const openWrapper = {
    opacity: 1,
};

export const closeWrapper = {
    opacity: 0,
};

export const PhoneWrapperAnimation = {
    visible: {
        height: 280,
        opacity: 1,
        transition: {
            x: { velocity: 100 },
            duration: 0.3
        }
    },

    hidden: {
        height: 0,
        opacity: 0,
        transition: {
            x: { velocity: 100 },
            duration: 0.3,
            delay: 0.1
        }
    }
};

export const PhoneLinksWrapperAnimation = {
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.07
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};


export const LinksAnimation = {
    visible: {
        opacity: 1,
    },

    hidden: {
        opacity: 0,
    }
};



