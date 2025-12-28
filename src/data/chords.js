// Chord data with multiple positions/variations for each chord
// Each chord contains a positions array with all possible ways to play it

export const chords = {
  major: [
    {
      name: "A",
      category: "major",
      youtube: "https://www.youtube.com/watch?v=DqZlCLXRzBo",
      positions: [
        // Open position (1st position)
        {
          frets: [-1, 0, 2, 2, 2, 0],
          fingers: [
            [2, 2, 1],
            [3, 2, 2],
            [4, 2, 3],
          ],
        },
        // 2nd fret position (A shape barre)
        {
          frets: [-1, 2, 4, 4, 4, 2],
          fingers: [
            [1, 2, 1],
            [2, 4, 2],
            [3, 4, 3],
            [4, 4, 4],
            [5, 2, 1],
          ],
          barre: { fret: 2, startString: 1, endString: 5 },
        },
        // 5th fret position (A shape barre)
        {
          frets: [-1, 5, 7, 7, 7, 5],
          fingers: [
            [1, 5, 1],
            [2, 7, 2],
            [3, 7, 3],
            [4, 7, 4],
            [5, 5, 1],
          ],
          barre: { fret: 5, startString: 1, endString: 5 },
        },
        // 9th fret position (A shape barre)
        {
          frets: [-1, 9, 11, 11, 11, 9],
          fingers: [
            [1, 9, 1],
            [2, 11, 2],
            [3, 11, 3],
            [4, 11, 4],
            [5, 9, 1],
          ],
          barre: { fret: 9, startString: 1, endString: 5 },
        },
        // 12th fret position (A shape barre)
        {
          frets: [-1, 12, 14, 14, 14, 12],
          fingers: [
            [1, 12, 1],
            [2, 14, 2],
            [3, 14, 3],
            [4, 14, 4],
            [5, 12, 1],
          ],
          barre: { fret: 12, startString: 1, endString: 5 },
        },
        // 5th fret E shape barre
        {
          frets: [5, 7, 7, 6, 5, 5],
          fingers: [
            [1, 5, 1],
            [2, 7, 2],
            [3, 7, 3],
            [4, 6, 1],
            [5, 5, 1],
          ],
          barre: { fret: 5, startString: 0, endString: 5 },
        },
        // 12th fret E shape barre
        {
          frets: [12, 14, 14, 13, 12, 12],
          fingers: [
            [1, 12, 1],
            [2, 14, 2],
            [3, 14, 3],
            [4, 13, 1],
            [5, 12, 1],
          ],
          barre: { fret: 12, startString: 0, endString: 5 },
        },
        // Triad shape at 5th fret
        {
          frets: [5, 7, 7, 6, -1, -1],
          fingers: [
            [1, 5, 1],
            [2, 7, 2],
            [3, 7, 3],
            [4, 6, 1],
          ],
        },
        // Triad shape at 12th fret
        {
          frets: [12, 14, 14, 13, -1, -1],
          fingers: [
            [1, 12, 1],
            [2, 14, 2],
            [3, 14, 3],
            [4, 13, 1],
          ],
        },
        // C shape at 2nd fret
        {
          frets: [-1, -1, 2, 2, 2, 0],
          fingers: [
            [3, 2, 1],
            [4, 2, 2],
            [5, 2, 3],
          ],
        },
        // D shape at 5th fret
        {
          frets: [-1, -1, 5, 6, 7, 5],
          fingers: [
            [3, 5, 1],
            [4, 6, 2],
            [5, 7, 3],
          ],
        },
        // G shape at 9th fret
        {
          frets: [9, 11, 11, 10, 9, 9],
          fingers: [
            [1, 9, 1],
            [2, 11, 2],
            [3, 11, 3],
            [4, 10, 1],
            [5, 9, 1],
          ],
          barre: { fret: 9, startString: 0, endString: 4 },
        },
      ],
    },
    {
      name: "B",
      category: "major",
      youtube: "https://www.youtube.com/watch?v=z3FlRJi5zSo",
      positions: [
        // 2nd fret A shape barre
        {
          frets: [-1, 2, 4, 4, 4, 2],
          fingers: [
            [1, 2, 1],
            [2, 4, 2],
            [3, 4, 3],
            [4, 4, 4],
            [5, 2, 1],
          ],
          barre: { fret: 2, startString: 1, endString: 5 },
        },
        // 7th fret A shape barre
        {
          frets: [-1, 7, 9, 9, 9, 7],
          fingers: [
            [1, 7, 1],
            [2, 9, 2],
            [3, 9, 3],
            [4, 9, 4],
            [5, 7, 1],
          ],
          barre: { fret: 7, startString: 1, endString: 5 },
        },
        // 2nd fret E shape barre
        {
          frets: [2, 4, 4, 3, 2, 2],
          fingers: [
            [1, 2, 1],
            [2, 4, 2],
            [3, 4, 3],
            [4, 3, 1],
            [5, 2, 1],
          ],
          barre: { fret: 2, startString: 0, endString: 5 },
        },
        // 7th fret E shape barre
        {
          frets: [7, 9, 9, 8, 7, 7],
          fingers: [
            [1, 7, 1],
            [2, 9, 2],
            [3, 9, 3],
            [4, 8, 1],
            [5, 7, 1],
          ],
          barre: { fret: 7, startString: 0, endString: 5 },
        },
        // Triad at 7th fret
        {
          frets: [7, 9, 9, 8, -1, -1],
          fingers: [
            [1, 7, 1],
            [2, 9, 2],
            [3, 9, 3],
            [4, 8, 1],
          ],
        },
      ],
    },
    {
      name: "C",
      category: "major",
      youtube: "https://www.youtube.com/watch?v=42iE0z6_7lM",
      positions: [
        // Open position
        {
          frets: [-1, 3, 2, 0, 1, 0],
          fingers: [
            [1, 3, 3],
            [2, 2, 2],
            [4, 1, 1],
          ],
        },
        // 3rd fret A shape barre
        {
          frets: [-1, 3, 5, 5, 5, 3],
          fingers: [
            [1, 3, 1],
            [2, 5, 2],
            [3, 5, 3],
            [4, 5, 4],
            [5, 3, 1],
          ],
          barre: { fret: 3, startString: 1, endString: 5 },
        },
        // 8th fret E shape barre
        {
          frets: [8, 10, 10, 9, 8, 8],
          fingers: [
            [1, 8, 1],
            [2, 10, 2],
            [3, 10, 3],
            [4, 9, 1],
            [5, 8, 1],
          ],
          barre: { fret: 8, startString: 0, endString: 5 },
        },
        // Triad at 3rd fret
        {
          frets: [-1, 3, 5, 5, 5, -1],
          fingers: [
            [1, 3, 1],
            [2, 5, 2],
            [3, 5, 3],
            [4, 5, 4],
          ],
        },
        // D shape at 8th fret
        {
          frets: [-1, -1, 8, 9, 10, 8],
          fingers: [
            [3, 8, 1],
            [4, 9, 2],
            [5, 10, 3],
          ],
        },
        // G shape at 5th fret
        {
          frets: [5, 7, 7, 6, 5, 5],
          fingers: [
            [1, 5, 1],
            [2, 7, 2],
            [3, 7, 3],
            [4, 6, 1],
            [5, 5, 1],
          ],
          barre: { fret: 5, startString: 0, endString: 4 },
        },
      ],
    },
    {
      name: "D",
      category: "major",
      youtube: "https://www.youtube.com/watch?v=ck_DTf2FdKQ",
      positions: [
        // Open position
        {
          frets: [-1, -1, 0, 2, 3, 2],
          fingers: [
            [3, 2, 1],
            [4, 3, 3],
            [5, 2, 2],
          ],
        },
        // 5th fret A shape barre
        {
          frets: [-1, 5, 7, 7, 7, 5],
          fingers: [
            [1, 5, 1],
            [2, 7, 2],
            [3, 7, 3],
            [4, 7, 4],
            [5, 5, 1],
          ],
          barre: { fret: 5, startString: 1, endString: 5 },
        },
        // 10th fret A shape barre
        {
          frets: [-1, 10, 12, 12, 12, 10],
          fingers: [
            [1, 10, 1],
            [2, 12, 2],
            [3, 12, 3],
            [4, 12, 4],
            [5, 10, 1],
          ],
          barre: { fret: 10, startString: 1, endString: 5 },
        },
        // 5th fret E shape barre
        {
          frets: [5, 7, 7, 6, 5, 5],
          fingers: [
            [1, 5, 1],
            [2, 7, 2],
            [3, 7, 3],
            [4, 6, 1],
            [5, 5, 1],
          ],
          barre: { fret: 5, startString: 0, endString: 5 },
        },
        // Triad at 5th fret
        {
          frets: [-1, -1, 5, 7, 7, 5],
          fingers: [
            [2, 5, 1],
            [3, 7, 2],
            [4, 7, 3],
          ],
        },
        // G shape at 2nd fret
        {
          frets: [2, 4, 4, 3, 2, 2],
          fingers: [
            [1, 2, 1],
            [2, 4, 2],
            [3, 4, 3],
            [4, 3, 1],
            [5, 2, 1],
          ],
          barre: { fret: 2, startString: 0, endString: 4 },
        },
      ],
    },
    {
      name: "E",
      category: "major",
      youtube: "https://www.youtube.com/watch?v=8H393ryDkuY",
      positions: [
        // Open position
        {
          frets: [0, 2, 2, 1, 0, 0],
          fingers: [
            [1, 2, 2],
            [2, 2, 3],
            [3, 1, 1],
          ],
        },
        // 7th fret E shape barre
        {
          frets: [7, 9, 9, 8, 7, 7],
          fingers: [
            [1, 7, 1],
            [2, 9, 2],
            [3, 9, 3],
            [4, 8, 1],
            [5, 7, 1],
          ],
          barre: { fret: 7, startString: 0, endString: 5 },
        },
        // 12th fret E shape barre
        {
          frets: [12, 14, 14, 13, 12, 12],
          fingers: [
            [1, 12, 1],
            [2, 14, 2],
            [3, 14, 3],
            [4, 13, 1],
            [5, 12, 1],
          ],
          barre: { fret: 12, startString: 0, endString: 5 },
        },
        // 4th fret A shape barre
        {
          frets: [-1, 4, 6, 6, 6, 4],
          fingers: [
            [1, 4, 1],
            [2, 6, 2],
            [3, 6, 3],
            [4, 6, 4],
            [5, 4, 1],
          ],
          barre: { fret: 4, startString: 1, endString: 5 },
        },
        // Triad at 7th fret
        {
          frets: [7, 9, 9, 8, -1, -1],
          fingers: [
            [1, 7, 1],
            [2, 9, 2],
            [3, 9, 3],
            [4, 8, 1],
          ],
        },
        // D shape at 12th fret
        {
          frets: [-1, -1, 12, 14, 14, 12],
          fingers: [
            [3, 12, 1],
            [4, 14, 2],
            [5, 14, 3],
          ],
        },
      ],
    },
    {
      name: "F",
      category: "major",
      youtube: "https://www.youtube.com/watch?v=N9_jI7Rj4e8",
      positions: [
        // 1st fret E shape barre
        {
          frets: [1, 3, 3, 2, 1, 1],
          fingers: [
            [0, 1, 1],
            [1, 3, 3],
            [2, 3, 4],
            [3, 2, 2],
            [4, 1, 1],
            [5, 1, 1],
          ],
          barre: { fret: 1, startString: 0, endString: 5 },
        },
        // 8th fret E shape barre
        {
          frets: [8, 10, 10, 9, 8, 8],
          fingers: [
            [1, 8, 1],
            [2, 10, 2],
            [3, 10, 3],
            [4, 9, 1],
            [5, 8, 1],
          ],
          barre: { fret: 8, startString: 0, endString: 5 },
        },
        // 1st fret A shape barre
        {
          frets: [-1, 1, 3, 3, 3, 1],
          fingers: [
            [1, 1, 1],
            [2, 3, 2],
            [3, 3, 3],
            [4, 3, 4],
            [5, 1, 1],
          ],
          barre: { fret: 1, startString: 1, endString: 5 },
        },
        // Triad at 8th fret
        {
          frets: [8, 10, 10, 9, -1, -1],
          fingers: [
            [1, 8, 1],
            [2, 10, 2],
            [3, 10, 3],
            [4, 9, 1],
          ],
        },
        // D shape at 3rd fret
        {
          frets: [-1, -1, 3, 5, 5, 3],
          fingers: [
            [2, 3, 1],
            [3, 5, 2],
            [4, 5, 3],
          ],
        },
      ],
    },
    {
      name: "G",
      category: "major",
      youtube: "https://www.youtube.com/watch?v=Ysvlra9ESKM",
      positions: [
        // Open position
        {
          frets: [3, 2, 0, 0, 0, 3],
          fingers: [
            [0, 3, 2],
            [1, 2, 1],
            [5, 3, 3],
          ],
        },
        // 3rd fret E shape barre
        {
          frets: [3, 5, 5, 4, 3, 3],
          fingers: [
            [1, 3, 1],
            [2, 5, 2],
            [3, 5, 3],
            [4, 4, 1],
            [5, 3, 1],
          ],
          barre: { fret: 3, startString: 0, endString: 5 },
        },
        // 10th fret E shape barre
        {
          frets: [10, 12, 12, 11, 10, 10],
          fingers: [
            [1, 10, 1],
            [2, 12, 2],
            [3, 12, 3],
            [4, 11, 1],
            [5, 10, 1],
          ],
          barre: { fret: 10, startString: 0, endString: 5 },
        },
        // 3rd fret A shape barre
        {
          frets: [-1, 3, 5, 5, 5, 3],
          fingers: [
            [1, 3, 1],
            [2, 5, 2],
            [3, 5, 3],
            [4, 5, 4],
            [5, 3, 1],
          ],
          barre: { fret: 3, startString: 1, endString: 5 },
        },
        // D shape at 10th fret
        {
          frets: [-1, -1, 10, 12, 12, 10],
          fingers: [
            [3, 10, 1],
            [4, 12, 2],
            [5, 12, 3],
          ],
        },
        // C shape at 5th fret
        {
          frets: [-1, 5, 7, 7, 7, 5],
          fingers: [
            [1, 5, 1],
            [2, 7, 2],
            [3, 7, 3],
            [4, 7, 4],
            [5, 5, 1],
          ],
          barre: { fret: 5, startString: 1, endString: 5 },
        },
      ],
    },
  ],

  minor: [
    {
      name: "Am",
      category: "minor",
      youtube: "https://www.youtube.com/watch?v=kV_EABwevy4",
      positions: [
        // Open position
        {
          frets: [-1, 0, 2, 2, 1, 0],
          fingers: [
            [2, 2, 2],
            [3, 2, 3],
            [4, 1, 1],
          ],
        },
        // 5th fret A shape barre
        {
          frets: [-1, 5, 7, 7, 6, 5],
          fingers: [
            [1, 5, 1],
            [2, 7, 2],
            [3, 7, 3],
            [4, 6, 1],
            [5, 5, 1],
          ],
          barre: { fret: 5, startString: 1, endString: 5 },
        },
        // 12th fret A shape barre
        {
          frets: [-1, 12, 14, 14, 13, 12],
          fingers: [
            [1, 12, 1],
            [2, 14, 2],
            [3, 14, 3],
            [4, 13, 1],
            [5, 12, 1],
          ],
          barre: { fret: 12, startString: 1, endString: 5 },
        },
        // 5th fret E shape barre
        {
          frets: [5, 7, 7, 5, 5, 5],
          fingers: [
            [1, 5, 1],
            [2, 7, 2],
            [3, 7, 3],
            [4, 5, 1],
            [5, 5, 1],
          ],
          barre: { fret: 5, startString: 0, endString: 5 },
        },
        // Triad at 5th fret
        {
          frets: [5, 7, 7, 5, -1, -1],
          fingers: [
            [1, 5, 1],
            [2, 7, 2],
            [3, 7, 3],
            [4, 5, 1],
          ],
        },
      ],
    },
    {
      name: "Bm",
      category: "minor",
      youtube: "https://www.youtube.com/watch?v=suJnbc2TERU",
      positions: [
        // 2nd fret A shape barre
        {
          frets: [-1, 2, 4, 4, 3, 2],
          fingers: [
            [1, 2, 1],
            [2, 4, 3],
            [3, 4, 4],
            [4, 3, 2],
            [5, 2, 1],
          ],
          barre: { fret: 2, startString: 1, endString: 5 },
        },
        // 7th fret A shape barre
        {
          frets: [-1, 7, 9, 9, 8, 7],
          fingers: [
            [1, 7, 1],
            [2, 9, 2],
            [3, 9, 3],
            [4, 8, 1],
            [5, 7, 1],
          ],
          barre: { fret: 7, startString: 1, endString: 5 },
        },
        // 2nd fret E shape barre
        {
          frets: [2, 4, 4, 2, 2, 2],
          fingers: [
            [1, 2, 1],
            [2, 4, 2],
            [3, 4, 3],
            [4, 2, 1],
            [5, 2, 1],
          ],
          barre: { fret: 2, startString: 0, endString: 5 },
        },
        // Triad at 7th fret
        {
          frets: [7, 9, 9, 7, -1, -1],
          fingers: [
            [1, 7, 1],
            [2, 9, 2],
            [3, 9, 3],
            [4, 7, 1],
          ],
        },
      ],
    },
    {
      name: "Cm",
      category: "minor",
      youtube: "https://www.youtube.com/watch?v=g98I8NgiBhc",
      positions: [
        // 3rd fret A shape barre
        {
          frets: [-1, 3, 5, 5, 4, 3],
          fingers: [
            [1, 3, 1],
            [2, 5, 3],
            [3, 5, 4],
            [4, 4, 2],
            [5, 3, 1],
          ],
          barre: { fret: 3, startString: 1, endString: 5 },
        },
        // 8th fret A shape barre
        {
          frets: [-1, 8, 10, 10, 9, 8],
          fingers: [
            [1, 8, 1],
            [2, 10, 2],
            [3, 10, 3],
            [4, 9, 1],
            [5, 8, 1],
          ],
          barre: { fret: 8, startString: 1, endString: 5 },
        },
        // 3rd fret E shape barre
        {
          frets: [3, 5, 5, 3, 3, 3],
          fingers: [
            [1, 3, 1],
            [2, 5, 2],
            [3, 5, 3],
            [4, 3, 1],
            [5, 3, 1],
          ],
          barre: { fret: 3, startString: 0, endString: 5 },
        },
        // Triad at 8th fret
        {
          frets: [8, 10, 10, 8, -1, -1],
          fingers: [
            [1, 8, 1],
            [2, 10, 2],
            [3, 10, 3],
            [4, 8, 1],
          ],
        },
      ],
    },
    {
      name: "Dm",
      category: "minor",
      youtube: "https://www.youtube.com/watch?v=8mFF8NYVdtI",
      positions: [
        // Open position
        {
          frets: [-1, -1, 0, 2, 3, 1],
          fingers: [
            [3, 2, 2],
            [4, 3, 3],
            [5, 1, 1],
          ],
        },
        // 5th fret A shape barre
        {
          frets: [-1, 5, 7, 7, 6, 5],
          fingers: [
            [1, 5, 1],
            [2, 7, 2],
            [3, 7, 3],
            [4, 6, 1],
            [5, 5, 1],
          ],
          barre: { fret: 5, startString: 1, endString: 5 },
        },
        // 10th fret A shape barre
        {
          frets: [-1, 10, 12, 12, 11, 10],
          fingers: [
            [1, 10, 1],
            [2, 12, 2],
            [3, 12, 3],
            [4, 11, 1],
            [5, 10, 1],
          ],
          barre: { fret: 10, startString: 1, endString: 5 },
        },
        // 5th fret E shape barre
        {
          frets: [5, 7, 7, 5, 5, 5],
          fingers: [
            [1, 5, 1],
            [2, 7, 2],
            [3, 7, 3],
            [4, 5, 1],
            [5, 5, 1],
          ],
          barre: { fret: 5, startString: 0, endString: 5 },
        },
        // D shape at 10th fret
        {
          frets: [-1, -1, 10, 12, 11, 10],
          fingers: [
            [3, 10, 1],
            [4, 12, 2],
            [5, 11, 3],
          ],
        },
      ],
    },
    {
      name: "Em",
      category: "minor",
      youtube: "https://www.youtube.com/watch?v=lqcd3jVysXY",
      positions: [
        // Open position
        {
          frets: [0, 2, 2, 0, 0, 0],
          fingers: [
            [1, 2, 2],
            [2, 2, 3],
          ],
        },
        // 7th fret E shape barre
        {
          frets: [7, 9, 9, 7, 7, 7],
          fingers: [
            [1, 7, 1],
            [2, 9, 2],
            [3, 9, 3],
            [4, 7, 1],
            [5, 7, 1],
          ],
          barre: { fret: 7, startString: 0, endString: 5 },
        },
        // 12th fret E shape barre
        {
          frets: [12, 14, 14, 12, 12, 12],
          fingers: [
            [1, 12, 1],
            [2, 14, 2],
            [3, 14, 3],
            [4, 12, 1],
            [5, 12, 1],
          ],
          barre: { fret: 12, startString: 0, endString: 5 },
        },
        // 2nd fret A shape barre
        {
          frets: [-1, 2, 4, 4, 3, 2],
          fingers: [
            [1, 2, 1],
            [2, 4, 3],
            [3, 4, 4],
            [4, 3, 2],
            [5, 2, 1],
          ],
          barre: { fret: 2, startString: 1, endString: 5 },
        },
        // Triad at 7th fret
        {
          frets: [7, 9, 9, 7, -1, -1],
          fingers: [
            [1, 7, 1],
            [2, 9, 2],
            [3, 9, 3],
            [4, 7, 1],
          ],
        },
      ],
    },
    {
      name: "Fm",
      category: "minor",
      youtube: "https://www.youtube.com/watch?v=9Eb-ZB1WsTs",
      positions: [
        // 1st fret E shape barre
        {
          frets: [1, 3, 3, 1, 1, 1],
          fingers: [
            [1, 1, 1],
            [2, 3, 2],
            [3, 3, 3],
            [4, 1, 1],
            [5, 1, 1],
          ],
          barre: { fret: 1, startString: 0, endString: 5 },
        },
        // 8th fret E shape barre
        {
          frets: [8, 10, 10, 8, 8, 8],
          fingers: [
            [1, 8, 1],
            [2, 10, 2],
            [3, 10, 3],
            [4, 8, 1],
            [5, 8, 1],
          ],
          barre: { fret: 8, startString: 0, endString: 5 },
        },
        // 1st fret A shape barre
        {
          frets: [-1, 1, 3, 3, 2, 1],
          fingers: [
            [1, 1, 1],
            [2, 3, 3],
            [3, 3, 4],
            [4, 2, 2],
            [5, 1, 1],
          ],
          barre: { fret: 1, startString: 1, endString: 5 },
        },
        // Triad at 8th fret
        {
          frets: [8, 10, 10, 8, -1, -1],
          fingers: [
            [1, 8, 1],
            [2, 10, 2],
            [3, 10, 3],
            [4, 8, 1],
          ],
        },
      ],
    },
    {
      name: "Gm",
      category: "minor",
      youtube: "https://www.youtube.com/watch?v=HGmkMglhkWk",
      positions: [
        // 3rd fret E shape barre
        {
          frets: [3, 5, 5, 3, 3, 3],
          fingers: [
            [1, 3, 1],
            [2, 5, 2],
            [3, 5, 3],
            [4, 3, 1],
            [5, 3, 1],
          ],
          barre: { fret: 3, startString: 0, endString: 5 },
        },
        // 10th fret E shape barre
        {
          frets: [10, 12, 12, 10, 10, 10],
          fingers: [
            [1, 10, 1],
            [2, 12, 2],
            [3, 12, 3],
            [4, 10, 1],
            [5, 10, 1],
          ],
          barre: { fret: 10, startString: 0, endString: 5 },
        },
        // 3rd fret A shape barre
        {
          frets: [-1, 3, 5, 5, 4, 3],
          fingers: [
            [1, 3, 1],
            [2, 5, 3],
            [3, 5, 4],
            [4, 4, 2],
            [5, 3, 1],
          ],
          barre: { fret: 3, startString: 1, endString: 5 },
        },
        // 6th fret A shape barre
        {
          frets: [-1, 6, 8, 8, 7, 6],
          fingers: [
            [1, 6, 1],
            [2, 8, 2],
            [3, 8, 3],
            [4, 7, 1],
            [5, 6, 1],
          ],
          barre: { fret: 6, startString: 1, endString: 5 },
        },
        // Triad at 10th fret
        {
          frets: [10, 12, 12, 10, -1, -1],
          fingers: [
            [1, 10, 1],
            [2, 12, 2],
            [3, 12, 3],
            [4, 10, 1],
          ],
        },
      ],
    },
  ],

  dominant7: [
    {
      name: "A7",
      category: "dominant7",
      youtube: "https://www.youtube.com/watch?v=tuTvQ9cTFfE",
      positions: [
        // Open position
        {
          frets: [-1, 0, 2, 0, 2, 0],
          fingers: [
            [2, 2, 1],
            [4, 2, 3],
          ],
        },
        // 5th fret A shape barre
        {
          frets: [-1, 5, 7, 5, 7, 5],
          fingers: [
            [1, 5, 1],
            [2, 7, 2],
            [3, 5, 1],
            [4, 7, 3],
            [5, 5, 1],
          ],
          barre: { fret: 5, startString: 1, endString: 5 },
        },
        // 12th fret A shape barre
        {
          frets: [-1, 12, 14, 12, 14, 12],
          fingers: [
            [1, 12, 1],
            [2, 14, 2],
            [3, 12, 1],
            [4, 14, 3],
            [5, 12, 1],
          ],
          barre: { fret: 12, startString: 1, endString: 5 },
        },
      ],
    },
    {
      name: "B7",
      category: "dominant7",
      youtube: "https://www.youtube.com/watch?v=C5g5V5NNoUs",
      positions: [
        // 2nd fret A shape barre
        {
          frets: [-1, 2, 4, 2, 4, 2],
          fingers: [
            [1, 2, 1],
            [2, 4, 2],
            [3, 2, 1],
            [4, 4, 3],
            [5, 2, 1],
          ],
          barre: { fret: 2, startString: 1, endString: 5 },
        },
        // 7th fret A shape barre
        {
          frets: [-1, 7, 9, 7, 9, 7],
          fingers: [
            [1, 7, 1],
            [2, 9, 2],
            [3, 7, 1],
            [4, 9, 3],
            [5, 7, 1],
          ],
          barre: { fret: 7, startString: 1, endString: 5 },
        },
      ],
    },
    {
      name: "C7",
      category: "dominant7",
      youtube: "https://www.youtube.com/watch?v=Rxu6Mah1uZs",
      positions: [
        // Open position
        {
          frets: [-1, 3, 2, 3, 1, 0],
          fingers: [
            [1, 3, 2],
            [2, 2, 1],
            [4, 3, 3],
          ],
        },
        // 3rd fret A shape barre
        {
          frets: [-1, 3, 5, 3, 5, 3],
          fingers: [
            [1, 3, 1],
            [2, 5, 2],
            [3, 3, 1],
            [4, 5, 3],
            [5, 3, 1],
          ],
          barre: { fret: 3, startString: 1, endString: 5 },
        },
        // 8th fret A shape barre
        {
          frets: [-1, 8, 10, 8, 10, 8],
          fingers: [
            [1, 8, 1],
            [2, 10, 2],
            [3, 8, 1],
            [4, 10, 3],
            [5, 8, 1],
          ],
          barre: { fret: 8, startString: 1, endString: 5 },
        },
      ],
    },
    {
      name: "D7",
      category: "dominant7",
      youtube: "https://www.youtube.com/watch?v=c9pCNCNh4iE",
      positions: [
        // Open position
        {
          frets: [-1, -1, 0, 2, 1, 2],
          fingers: [
            [3, 2, 1],
            [4, 1, 1],
            [5, 2, 2],
          ],
        },
        // 5th fret A shape barre
        {
          frets: [-1, 5, 7, 5, 7, 5],
          fingers: [
            [1, 5, 1],
            [2, 7, 2],
            [3, 5, 1],
            [4, 7, 3],
            [5, 5, 1],
          ],
          barre: { fret: 5, startString: 1, endString: 5 },
        },
        // 10th fret A shape barre
        {
          frets: [-1, 10, 12, 10, 12, 10],
          fingers: [
            [1, 10, 1],
            [2, 12, 2],
            [3, 10, 1],
            [4, 12, 3],
            [5, 10, 1],
          ],
          barre: { fret: 10, startString: 1, endString: 5 },
        },
      ],
    },
    {
      name: "E7",
      category: "dominant7",
      youtube: "https://www.youtube.com/watch?v=mj8J6XFDjSw",
      positions: [
        // Open position
        {
          frets: [0, 2, 0, 1, 0, 0],
          fingers: [
            [1, 2, 1],
            [3, 1, 1],
          ],
        },
        // 7th fret E shape barre
        {
          frets: [7, 9, 7, 8, 7, 7],
          fingers: [
            [1, 7, 1],
            [2, 9, 2],
            [3, 7, 1],
            [4, 8, 1],
            [5, 7, 1],
          ],
          barre: { fret: 7, startString: 0, endString: 5 },
        },
        // 12th fret E shape barre
        {
          frets: [12, 14, 12, 13, 12, 12],
          fingers: [
            [1, 12, 1],
            [2, 14, 2],
            [3, 12, 1],
            [4, 13, 1],
            [5, 12, 1],
          ],
          barre: { fret: 12, startString: 0, endString: 5 },
        },
      ],
    },
    {
      name: "F7",
      category: "dominant7",
      youtube: "https://www.youtube.com/watch?v=vz5IGVI37bk",
      positions: [
        // 1st fret E shape barre
        {
          frets: [1, 3, 1, 2, 1, 1],
          fingers: [
            [1, 1, 1],
            [2, 3, 2],
            [3, 1, 1],
            [4, 2, 1],
            [5, 1, 1],
          ],
          barre: { fret: 1, startString: 0, endString: 5 },
        },
        // 8th fret E shape barre
        {
          frets: [8, 10, 8, 9, 8, 8],
          fingers: [
            [1, 8, 1],
            [2, 10, 2],
            [3, 8, 1],
            [4, 9, 1],
            [5, 8, 1],
          ],
          barre: { fret: 8, startString: 0, endString: 5 },
        },
      ],
    },
    {
      name: "G7",
      category: "dominant7",
      youtube: "https://www.youtube.com/watch?v=L18jqG3fxoY",
      positions: [
        // Open position
        {
          frets: [3, 2, 0, 0, 0, 1],
          fingers: [
            [1, 2, 1],
            [5, 1, 1],
          ],
        },
        // 3rd fret E shape barre
        {
          frets: [3, 5, 3, 4, 3, 3],
          fingers: [
            [1, 3, 1],
            [2, 5, 2],
            [3, 3, 1],
            [4, 4, 1],
            [5, 3, 1],
          ],
          barre: { fret: 3, startString: 0, endString: 5 },
        },
        // 10th fret E shape barre
        {
          frets: [10, 12, 10, 11, 10, 10],
          fingers: [
            [1, 10, 1],
            [2, 12, 2],
            [3, 10, 1],
            [4, 11, 1],
            [5, 10, 1],
          ],
          barre: { fret: 10, startString: 0, endString: 5 },
        },
      ],
    },
  ],

  suspended: [
    {
      name: "Asus2",
      category: "suspended",
      youtube: "https://www.youtube.com/watch?v=ZcVnRdNQwZ4",
      positions: [
        // Open position
        {
          frets: [-1, 0, 2, 2, 0, 0],
          fingers: [
            [2, 2, 1],
            [3, 2, 2],
            [4, 0, 1],
            [5, 0, 1],
          ],
        },
        // 5th fret
        {
          frets: [-1, 5, 7, 7, 5, 5],
          fingers: [
            [1, 5, 1],
            [2, 7, 2],
            [3, 7, 3],
            [4, 5, 1],
            [5, 5, 1],
          ],
          barre: { fret: 5, startString: 1, endString: 5 },
        },
      ],
    },
    {
      name: "Asus4",
      category: "suspended",
      youtube: "https://www.youtube.com/watch?v=-v2V6KAyizc",
      positions: [
        // Open position
        {
          frets: [-1, 0, 2, 2, 3, 0],
          fingers: [
            [2, 2, 1],
            [3, 2, 2],
            [4, 3, 3],
          ],
        },
        // 5th fret
        {
          frets: [-1, 5, 7, 7, 8, 5],
          fingers: [
            [1, 5, 1],
            [2, 7, 2],
            [3, 7, 3],
            [4, 8, 3],
            [5, 5, 1],
          ],
          barre: { fret: 5, startString: 1, endString: 5 },
        },
      ],
    },
    {
      name: "Dsus2",
      category: "suspended",
      youtube: "https://www.youtube.com/watch?v=57WMuNY9Fw4",
      positions: [
        // Open position
        {
          frets: [-1, -1, 0, 2, 3, 0],
          fingers: [
            [3, 2, 1],
            [4, 3, 2],
            [5, 0, 1],
          ],
        },
        // 5th fret
        {
          frets: [-1, -1, 5, 7, 8, 5],
          fingers: [
            [2, 5, 1],
            [3, 7, 2],
            [4, 8, 3],
          ],
        },
      ],
    },
    {
      name: "Dsus4",
      category: "suspended",
      youtube: "https://www.youtube.com/watch?v=6fWLmEkEIbw",
      positions: [
        // Open position
        {
          frets: [-1, -1, 0, 2, 3, 3],
          fingers: [
            [3, 2, 1],
            [4, 3, 2],
            [5, 3, 3],
          ],
        },
        // 5th fret
        {
          frets: [-1, -1, 5, 7, 8, 8],
          fingers: [
            [2, 5, 1],
            [3, 7, 2],
            [4, 8, 3],
            [5, 8, 4],
          ],
        },
      ],
    },
    {
      name: "Esus2",
      category: "suspended",
      youtube: "https://www.youtube.com/watch?v=ucXZOUmgxcg",
      positions: [
        // Open position
        {
          frets: [0, 2, 2, 0, 0, 0],
          fingers: [
            [1, 2, 2],
            [2, 2, 3],
          ],
        },
        // 7th fret
        {
          frets: [7, 9, 9, 7, 7, 7],
          fingers: [
            [1, 7, 1],
            [2, 9, 2],
            [3, 9, 3],
            [4, 7, 1],
            [5, 7, 1],
          ],
          barre: { fret: 7, startString: 0, endString: 5 },
        },
      ],
    },
    {
      name: "Esus4",
      category: "suspended",
      youtube: "https://www.youtube.com/watch?v=MLIZe-4cciE",
      positions: [
        // Open position
        {
          frets: [0, 2, 2, 2, 0, 0],
          fingers: [
            [1, 2, 2],
            [2, 2, 3],
            [3, 2, 4],
          ],
        },
        // 7th fret
        {
          frets: [7, 9, 9, 9, 7, 7],
          fingers: [
            [1, 7, 1],
            [2, 9, 2],
            [3, 9, 3],
            [4, 9, 4],
            [5, 7, 1],
          ],
          barre: { fret: 7, startString: 0, endString: 5 },
        },
      ],
    },
  ],

  major7: [
    {
      name: "Amaj7",
      category: "major7",
      youtube: "https://www.youtube.com/watch?v=kwT3AIGDKfk",
      positions: [
        // Open position
        {
          frets: [-1, 0, 2, 1, 2, 0],
          fingers: [
            [2, 2, 2],
            [3, 1, 1],
            [4, 2, 3],
          ],
        },
        // 5th fret
        {
          frets: [-1, 5, 7, 6, 7, 5],
          fingers: [
            [1, 5, 1],
            [2, 7, 2],
            [3, 6, 1],
            [4, 7, 3],
            [5, 5, 1],
          ],
          barre: { fret: 5, startString: 1, endString: 5 },
        },
      ],
    },
    {
      name: "Cmaj7",
      category: "major7",
      youtube: "https://www.youtube.com/watch?v=0wmIQbCSWRM",
      positions: [
        // Open position
        {
          frets: [-1, 3, 2, 0, 0, 0],
          fingers: [
            [1, 3, 2],
            [2, 2, 1],
          ],
        },
        // 3rd fret
        {
          frets: [-1, 3, 5, 4, 5, 3],
          fingers: [
            [1, 3, 1],
            [2, 5, 2],
            [3, 4, 1],
            [4, 5, 3],
            [5, 3, 1],
          ],
          barre: { fret: 3, startString: 1, endString: 5 },
        },
      ],
    },
    {
      name: "Dmaj7",
      category: "major7",
      youtube: "https://www.youtube.com/watch?v=-CAzt9EJil8",
      positions: [
        // Open position
        {
          frets: [-1, -1, 0, 2, 2, 2],
          fingers: [
            [3, 2, 1],
            [4, 2, 2],
            [5, 2, 3],
          ],
        },
        // 5th fret
        {
          frets: [-1, 5, 7, 6, 7, 5],
          fingers: [
            [1, 5, 1],
            [2, 7, 2],
            [3, 6, 1],
            [4, 7, 3],
            [5, 5, 1],
          ],
          barre: { fret: 5, startString: 1, endString: 5 },
        },
      ],
    },
    {
      name: "Emaj7",
      category: "major7",
      youtube:
        "https://www.youtube.com/results?search_query=Emaj7+chord+guitar+lesson",
      positions: [
        // Open position
        {
          frets: [0, 2, 1, 1, 0, 0],
          fingers: [
            [1, 2, 1],
            [2, 1, 1],
            [3, 1, 2],
          ],
        },
        // 7th fret
        {
          frets: [7, 9, 8, 8, 7, 7],
          fingers: [
            [1, 7, 1],
            [2, 9, 2],
            [3, 8, 1],
            [4, 8, 2],
            [5, 7, 1],
          ],
          barre: { fret: 7, startString: 0, endString: 5 },
        },
      ],
    },
    {
      name: "Fmaj7",
      category: "major7",
      youtube: "https://www.youtube.com/watch?v=ma9wZ-G_J4g",
      positions: [
        // 1st fret
        {
          frets: [1, 3, 2, 2, 1, 1],
          fingers: [
            [1, 1, 1],
            [2, 3, 2],
            [3, 2, 1],
            [4, 2, 2],
            [5, 1, 1],
          ],
          barre: { fret: 1, startString: 0, endString: 5 },
        },
        // 8th fret
        {
          frets: [8, 10, 9, 9, 8, 8],
          fingers: [
            [1, 8, 1],
            [2, 10, 2],
            [3, 9, 1],
            [4, 9, 2],
            [5, 8, 1],
          ],
          barre: { fret: 8, startString: 0, endString: 5 },
        },
      ],
    },
    {
      name: "Gmaj7",
      category: "major7",
      youtube: "https://www.youtube.com/watch?v=EzwdIrRzNW0",
      positions: [
        // Open position
        {
          frets: [3, 2, 0, 0, 0, 2],
          fingers: [
            [1, 2, 1],
            [2, 2, 1],
            [5, 2, 2],
          ],
        },
        // 3rd fret
        {
          frets: [3, 5, 4, 4, 3, 3],
          fingers: [
            [1, 3, 1],
            [2, 5, 2],
            [3, 4, 1],
            [4, 4, 2],
            [5, 3, 1],
          ],
          barre: { fret: 3, startString: 0, endString: 5 },
        },
      ],
    },
  ],

  power: [
    {
      name: "A5",
      category: "power",
      youtube: "https://www.youtube.com/watch?v=mgZlMdVF08Q",
      positions: [
        // Open position
        {
          frets: [-1, 0, 2, 2, -1, -1],
          fingers: [
            [2, 2, 1],
            [3, 2, 2],
          ],
        },
        // 5th fret
        {
          frets: [-1, 5, 7, 7, -1, -1],
          fingers: [
            [1, 5, 1],
            [2, 7, 2],
            [3, 7, 3],
          ],
        },
        // 12th fret
        {
          frets: [-1, 12, 14, 14, -1, -1],
          fingers: [
            [1, 12, 1],
            [2, 14, 2],
            [3, 14, 3],
          ],
        },
      ],
    },
    {
      name: "B5",
      category: "power",
      youtube: "https://www.youtube.com/watch?v=gD3wCdJHgkw",
      positions: [
        // 2nd fret
        {
          frets: [-1, 2, 4, 4, -1, -1],
          fingers: [
            [1, 2, 1],
            [2, 4, 3],
            [3, 4, 4],
          ],
        },
        // 7th fret
        {
          frets: [-1, 7, 9, 9, -1, -1],
          fingers: [
            [1, 7, 1],
            [2, 9, 2],
            [3, 9, 3],
          ],
        },
      ],
    },
    {
      name: "C5",
      category: "power",
      youtube: "https://www.youtube.com/watch?v=wteMlY1miZA",
      positions: [
        // 3rd fret
        {
          frets: [-1, 3, 5, 5, -1, -1],
          fingers: [
            [1, 3, 1],
            [2, 5, 3],
            [3, 5, 4],
          ],
        },
        // 8th fret
        {
          frets: [-1, 8, 10, 10, -1, -1],
          fingers: [
            [1, 8, 1],
            [2, 10, 2],
            [3, 10, 3],
          ],
        },
      ],
    },
    {
      name: "D5",
      category: "power",
      youtube: "https://www.youtube.com/watch?v=8CMpvHXZGnk",
      positions: [
        // Open position
        {
          frets: [-1, -1, 0, 2, 3, -1],
          fingers: [
            [3, 2, 1],
            [4, 3, 2],
          ],
        },
        // 5th fret
        {
          frets: [-1, -1, 5, 7, 8, -1],
          fingers: [
            [2, 5, 1],
            [3, 7, 2],
            [4, 8, 3],
          ],
        },
      ],
    },
    {
      name: "E5",
      category: "power",
      youtube: "https://www.youtube.com/watch?v=jItgEFtFGXw",
      positions: [
        // Open position
        {
          frets: [0, 2, 2, -1, -1, -1],
          fingers: [
            [1, 2, 1],
            [2, 2, 2],
          ],
        },
        // 7th fret
        {
          frets: [7, 9, 9, -1, -1, -1],
          fingers: [
            [1, 7, 1],
            [2, 9, 2],
            [3, 9, 3],
          ],
        },
        // 12th fret
        {
          frets: [12, 14, 14, -1, -1, -1],
          fingers: [
            [1, 12, 1],
            [2, 14, 2],
            [3, 14, 3],
          ],
        },
      ],
    },
    {
      name: "F5",
      category: "power",
      youtube: "https://www.youtube.com/watch?v=4eAQeX26gX4",
      positions: [
        // 1st fret
        {
          frets: [1, 3, 3, -1, -1, -1],
          fingers: [
            [1, 1, 1],
            [2, 3, 3],
            [3, 3, 4],
          ],
        },
        // 8th fret
        {
          frets: [8, 10, 10, -1, -1, -1],
          fingers: [
            [1, 8, 1],
            [2, 10, 2],
            [3, 10, 3],
          ],
        },
      ],
    },
    {
      name: "G5",
      category: "power",
      youtube: "https://www.youtube.com/watch?v=8spuBx4Z3rA",
      positions: [
        // 3rd fret
        {
          frets: [3, 5, 5, -1, -1, -1],
          fingers: [
            [1, 3, 1],
            [2, 5, 3],
            [3, 5, 4],
          ],
        },
        // 10th fret
        {
          frets: [10, 12, 12, -1, -1, -1],
          fingers: [
            [1, 10, 1],
            [2, 12, 2],
            [3, 12, 3],
          ],
        },
      ],
    },
  ],
};

// Helper function to normalize chord data for backward compatibility
// This allows components to work with both old format (single position) and new format (multiple positions)
export const normalizeChord = (chord) => {
  // If chord already has positions array, use first position as default
  if (chord.positions && chord.positions.length > 0) {
    return {
      ...chord,
      ...chord.positions[0], // Spread first position properties
      allPositions: chord.positions, // Keep all positions accessible
    };
  }
  // If it's old format (has frets directly), return as-is
  return chord;
};

// Flatten chords for easier access (maintains backward compatibility)
export const getAllChordsFlat = () => {
  const allChords = [];
  Object.values(chords).forEach((category) => {
    category.forEach((chord) => {
      allChords.push(normalizeChord(chord));
    });
  });
  return allChords;
};

export const categories = [
  { id: "major", name: "Major", description: "Bright, happy sounding chords" },
  {
    id: "minor",
    name: "Minor",
    description: "Sad, melancholic sounding chords",
  },
  {
    id: "dominant7",
    name: "Dominant 7th",
    description: "Jazzy, bluesy chords",
  },
  {
    id: "suspended",
    name: "Suspended",
    description: "Tense, unresolved chords",
  },
  {
    id: "major7",
    name: "Major 7th",
    description: "Smooth, jazzy major chords",
  },
  {
    id: "power",
    name: "Power Chords",
    description: "Strong, rock-style chords",
  },
];
