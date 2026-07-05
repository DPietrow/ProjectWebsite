import { sceneMap } from "./sceneMap";

export const universeMap = sceneMap.map((s, i) => ({
    id: s.id,
    label: s.label,
    anchor: i / (sceneMap.length - 1)
}));