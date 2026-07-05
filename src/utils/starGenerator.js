export function generateStars(count = 175) {
    return Array.from({ length: count }, (_, id) => ({

        id,

        x: Math.random() * 100,

        y: Math.random() * 100,

        size: Math.random() * 2 + 1,

        opacity: Math.random() * .6 + .2,

        speed: Math.random() * 4 + 2

    }));
}