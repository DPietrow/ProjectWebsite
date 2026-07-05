import observatory from "../../assets/backgrounds/observatory.webp";
import abyss from "../../assets/backgrounds/abyss.webp";
import nebula from "../../assets/backgrounds/nebula.webp";
import horizon from "../../assets/backgrounds/horizon.webp";
import spaceVoid from "../../assets/backgrounds/void.webp";

export const sceneMap = [
    {
        id: "observatory",
        scene: "intro",
        label: "Observatory",
        bg: observatory
    },
    {
        id: "apollo",
        scene: "rag_assistant",
        label: "Apollo (RAG Assistant)",
        bg: abyss
    },
    {
        id: "aphrodite",
        scene: "energy_forecasting",
        label: "Aphrodite",
        bg: abyss
    },
    {
        id: "ares",
        scene: "real_estate_model",
        label: "Ares",
        bg: abyss
    },
    {
        id: "athena",
        scene: "upcoming",
        label: "Athena",
        bg: nebula
    },
    {
        id: "artemis",
        scene: "experimental",
        label: "Artemis",
        bg: nebula
    },
    {
        id: "void",
        scene: "constellation",
        label: "Constellation",
        bg: spaceVoid
    }
];