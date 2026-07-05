export const decorativeStars = Array.from({ length: 120 }, (_, i) => ({

    id: i,

    x: Math.random() * 100,
    y: Math.random() * 100,

    size: Math.random() * 2.4 + 0.5,

    opacity: Math.random() * 0.6 + 0.2,

    delay: Math.random() * 6,

    duration: Math.random() * 5 + 4

}));