// Description: This file contains the constants used in the slot machine game.
// Create a reel set
export const reelSet = [
    ["hv2", "lv3", "lv3", "hv1", "hv1", "lv1", "hv1", "hv4", "lv1", "hv3", "hv2", "hv3", "lv4", "hv4", "lv1", "hv2", "lv4", "lv1", "lv3", "hv2"],
    ["hv1", "lv2", "lv3", "lv2", "lv1", "lv1", "lv4", "lv1", "lv1", "hv4", "lv3", "hv2", "lv1", "lv3", "hv1", "lv1", "lv2", "lv4", "lv3", "lv2"],
    ["lv1", "hv2", "lv3", "lv4", "hv3", "hv2", "lv2", "hv2", "hv2", "lv1", "hv3", "lv1", "hv1", "lv2", "hv3", "hv2", "hv4", "hv1", "lv2", "lv4"],
    ["hv2", "lv2", "hv3", "lv2", "lv4", "lv4", "hv3", "lv2", "lv4", "hv1", "lv1", "hv1", "lv2", "hv3", "lv2", "lv3", "hv2", "lv1", "hv3", "lv2"],
    ["lv3", "lv4", "hv2", "hv3", "hv4", "hv1", "hv3", "hv2", "hv2", "hv4", "hv4", "hv2", "lv2", "hv4", "hv1", "lv2", "hv1", "lv2", "hv4", "lv4"]
];


// Create a pay table
export const payTable = {
    hv1: { 3: 10, 4: 20, 5: 50 },
    hv2: { 3: 5, 4: 10, 5: 20 },
    hv3: { 3: 5, 4: 10, 5: 15 },
    hv4: { 3: 5, 4: 10, 5: 15 },
    lv1: { 3: 2, 4: 5, 5: 10 },
    lv2: { 3: 1, 4: 2, 5: 5 },
    lv3: { 3: 1, 4: 2, 5: 3 },
    lv4: { 3: 1, 4: 2, 5: 3 }
};

// Create pay Lines
export const payLines = [
    [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1]],
    [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]],
    [[0, 2], [1, 2], [2, 2], [3, 2], [4, 2]],
    [[0, 0], [1, 0], [2, 1], [3, 2], [4, 2]],
    [[0, 2], [1, 2], [2, 1], [3, 0], [4, 0]],
    [[0, 0], [1, 1], [2, 2], [3, 1], [4, 0]],
    [[0, 2], [1, 1], [2, 0], [3, 1], [4, 2]]
];