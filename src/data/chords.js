// Updated YouTube links (individual video per chord where found)

export const chords = {
    major: [
      {
        name: "A",
        frets: [-1, 0, 2, 2, 2, 0],
        fingers: [
          [2, 2, 1],
          [3, 2, 2],
          [4, 2, 3],
        ],
        category: "major",
        youtube: "https://www.youtube.com/watch?v=DqZlCLXRzBo",
      },
      {
        name: "B",
        frets: [-1, 2, 4, 4, 4, 2],
        fingers: [
          [1, 2, 1],
          [2, 4, 2],
          [3, 4, 3],
          [4, 4, 4],
          [5, 2, 1],
        ],
        barre: { fret: 2, startString: 1, endString: 5 },
        category: "major",
        youtube: "https://www.youtube.com/watch?v=z3FlRJi5zSo",
      },
      {
        name: "C",
        frets: [-1, 3, 2, 0, 1, 0],
        fingers: [
          [1, 3, 3],
          [2, 2, 2],
          [4, 1, 1],
        ],
        category: "major",
        youtube: "https://www.youtube.com/watch?v=42iE0z6_7lM",
      },
      {
        name: "D",
        frets: [-1, -1, 0, 2, 3, 2],
        fingers: [
          [3, 2, 1],
          [4, 3, 3],
          [5, 2, 2],
        ],
        category: "major",
        youtube: "https://www.youtube.com/watch?v=ck_DTf2FdKQ",
      },
      {
        name: "E",
        frets: [0, 2, 2, 1, 0, 0],
        fingers: [
          [1, 2, 2],
          [2, 2, 3],
          [3, 1, 1],
        ],
        category: "major",
        youtube: "https://www.youtube.com/watch?v=8H393ryDkuY",
      },
      {
        name: "F",
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
        category: "major",
        youtube: "https://www.youtube.com/watch?v=N9_jI7Rj4e8",
      },
      {
        name: "G",
        frets: [3, 2, 0, 0, 0, 3],
        fingers: [
          [0, 3, 2],
          [1, 2, 1],
          [5, 3, 3],
        ],
        category: "major",
        youtube: "https://www.youtube.com/watch?v=Ysvlra9ESKM",
      },
    ],
  
    minor: [
      {
        name: "Am",
        frets: [-1, 0, 2, 2, 1, 0],
        fingers: [
          [2, 2, 2],
          [3, 2, 3],
          [4, 1, 1],
        ],
        category: "minor",
        youtube: "https://www.youtube.com/watch?v=kV_EABwevy4",
      },
      {
        name: "Bm",
        frets: [-1, 2, 4, 4, 3, 2],
        fingers: [
          [1, 2, 1],
          [2, 4, 3],
          [3, 4, 4],
          [4, 3, 2],
          [5, 2, 1],
        ],
        barre: { fret: 2, startString: 1, endString: 5 },
        category: "minor",
        youtube: "https://www.youtube.com/watch?v=suJnbc2TERU",
      },
      {
        name: "Cm",
        frets: [-1, 3, 5, 5, 4, 3],
        fingers: [
          [1, 3, 1],
          [2, 5, 3],
          [3, 5, 4],
          [4, 4, 2],
          [5, 3, 1],
        ],
        barre: { fret: 3, startString: 1, endString: 5 },
        category: "minor",
        youtube: "https://www.youtube.com/watch?v=g98I8NgiBhc",
      },
      {
        name: "Dm",
        frets: [-1, -1, 0, 2, 3, 1],
        fingers: [
          [3, 2, 2],
          [4, 3, 3],
          [5, 1, 1],
        ],
        category: "minor",
        youtube: "https://www.youtube.com/watch?v=8mFF8NYVdtI",
      },
      {
        name: "Em",
        frets: [0, 2, 2, 0, 0, 0],
        fingers: [
          [1, 2, 2],
          [2, 2, 3],
        ],
        category: "minor",
        youtube: "https://www.youtube.com/watch?v=lqcd3jVysXY",
      },
      {
        name: "Fm",
        frets: [1, 3, 3, 1, 1, 1],
        fingers: [
          [0, 1, 1],
          [1, 3, 3],
          [2, 3, 4],
          [3, 1, 1],
          [4, 1, 1],
          [5, 1, 1],
        ],
        barre: { fret: 1, startString: 0, endString: 5 },
        category: "minor",
        youtube: "https://www.youtube.com/watch?v=9Eb-ZB1WsTs",
      },
      {
        name: "Gm",
        frets: [3, 5, 5, 3, 3, 3],
        fingers: [
          [0, 3, 1],
          [1, 5, 3],
          [2, 5, 4],
          [3, 3, 1],
          [4, 3, 1],
          [5, 3, 1],
        ],
        barre: { fret: 3, startString: 0, endString: 5 },
        category: "minor",
        youtube: "https://www.youtube.com/watch?v=HGmkMglhkWk",
      },
    ],
  
    seventh: [
      {
        name: "A7",
        frets: [-1, 0, 2, 0, 2, 0],
        fingers: [
          [2, 2, 1],
          [4, 2, 2],
        ],
        category: "7th",
        youtube: "https://www.youtube.com/watch?v=tuTvQ9cTFfE",
      },
      {
        name: "B7",
        frets: [-1, 2, 1, 2, 0, 2],
        fingers: [
          [1, 2, 2],
          [2, 1, 1],
          [3, 2, 3],
          [5, 2, 4],
        ],
        category: "7th",
        youtube: "https://www.youtube.com/watch?v=C5g5V5NNoUs",
      },
      {
        name: "C7",
        frets: [-1, 3, 2, 3, 1, 0],
        fingers: [
          [1, 3, 3],
          [2, 2, 2],
          [3, 3, 4],
          [4, 1, 1],
        ],
        category: "7th",
        youtube: "https://www.youtube.com/watch?v=Rxu6Mah1uZs",
      },
      {
        name: "D7",
        frets: [-1, -1, 0, 2, 1, 2],
        fingers: [
          [3, 2, 2],
          [4, 1, 1],
          [5, 2, 3],
        ],
        category: "7th",
        youtube: "https://www.youtube.com/watch?v=c9pCNCNh4iE",
      },
      {
        name: "E7",
        frets: [0, 2, 0, 1, 0, 0],
        fingers: [
          [1, 2, 2],
          [3, 1, 1],
        ],
        category: "7th",
        youtube: "https://www.youtube.com/watch?v=mj8J6XFDjSw",
      },
      {
        name: "F7",
        frets: [1, 3, 1, 2, 1, 1],
        fingers: [
          [0, 1, 1],
          [1, 3, 3],
          [2, 1, 1],
          [3, 2, 2],
          [4, 1, 1],
          [5, 1, 1],
        ],
        barre: { fret: 1, startString: 0, endString: 5 },
        category: "7th",
        youtube: "https://www.youtube.com/watch?v=vz5IGVI37bk",
      },
      {
        name: "G7",
        frets: [3, 2, 0, 0, 0, 1],
        fingers: [
          [0, 3, 3],
          [1, 2, 2],
          [5, 1, 1],
        ],
        category: "7th",
        youtube: "https://www.youtube.com/watch?v=L18jqG3fxoY",
      },
    ],
  
    minor7: [
      {
        name: "Am7",
        frets: [-1, 0, 2, 0, 1, 0],
        fingers: [
          [2, 2, 2],
          [4, 1, 1],
        ],
        category: "minor 7th",
        youtube: "https://www.youtube.com/watch?v=ZcVnRdNQwZ4",
      },
      {
        name: "Bm7",
        frets: [-1, 2, 0, 2, 0, 2],
        fingers: [
          [1, 2, 1],
          [3, 2, 2],
          [5, 2, 3],
        ],
        category: "minor 7th",
        youtube: "https://www.youtube.com/watch?v=-v2V6KAyizc",
      },
      {
        name: "Dm7",
        frets: [-1, -1, 0, 2, 1, 1],
        fingers: [
          [3, 2, 2],
          [4, 1, 1],
          [5, 1, 1],
        ],
        category: "minor 7th",
        youtube: "https://www.youtube.com/watch?v=57WMuNY9Fw4",
      },
      {
        name: "Em7",
        frets: [0, 2, 0, 0, 0, 0],
        fingers: [[1, 2, 2]],
        category: "minor 7th",
        youtube: "https://www.youtube.com/watch?v=6fWLmEkEIbw",
      },
      {
        name: "Gm7",
        frets: [3, 5, 3, 3, 3, 3],
        fingers: [
          [0, 3, 1],
          [1, 5, 3],
          [2, 3, 1],
          [3, 3, 1],
          [4, 3, 1],
          [5, 3, 1],
        ],
        barre: { fret: 3, startString: 0, endString: 5 },
        category: "minor 7th",
        youtube: "https://www.youtube.com/watch?v=ucXZOUmgxcg",
      },
    ],
  
    major7: [
      {
        name: "Amaj7",
        frets: [-1, 0, 2, 1, 2, 0],
        fingers: [
          [2, 2, 2],
          [3, 1, 1],
          [4, 2, 3],
        ],
        category: "major 7th",
        youtube: "https://www.youtube.com/watch?v=MLIZe-4cciE",
      },
      {
        name: "Cmaj7",
        frets: [-1, 3, 2, 0, 0, 0],
        fingers: [
          [1, 3, 3],
          [2, 2, 2],
        ],
        category: "major 7th",
        youtube: "https://www.youtube.com/watch?v=kwT3AIGDKfk",
      },
      {
        name: "Dmaj7",
        frets: [-1, -1, 0, 2, 2, 2],
        fingers: [
          [3, 2, 1],
          [4, 2, 2],
          [5, 2, 3],
        ],
        category: "major 7th",
        youtube: "https://www.youtube.com/watch?v=0wmIQbCSWRM",
      },
      {
        name: "Emaj7",
        frets: [0, 2, 1, 1, 0, 0],
        fingers: [
          [1, 2, 3],
          [2, 1, 1],
          [3, 1, 2],
        ],
        category: "major 7th",
        youtube: "https://www.youtube.com/watch?v=-CAzt9EJil8",
      },
      {
        name: "Fmaj7",
        frets: [-1, -1, 3, 2, 1, 0],
        fingers: [
          [2, 3, 3],
          [3, 2, 2],
          [4, 1, 1],
        ],
        category: "major 7th",
        // couldn't lock a single "how to play Fmaj7" video ID within tool-call limits
        youtube: "https://www.youtube.com/results?search_query=Fmaj7+chord+guitar+lesson",
      },
      {
        name: "Gmaj7",
        frets: [3, 2, 0, 0, 0, 2],
        fingers: [
          [0, 3, 3],
          [1, 2, 2],
          [5, 2, 1],
        ],
        category: "major 7th",
        youtube: "https://www.youtube.com/watch?v=ma9wZ-G_J4g",
      },
    ],
  
    sus: [
      {
        name: "Asus2",
        frets: [-1, 0, 2, 2, 0, 0],
        fingers: [
          [2, 2, 1],
          [3, 2, 2],
        ],
        category: "sus",
        youtube: "https://www.youtube.com/watch?v=EzwdIrRzNW0",
      },
      {
        name: "Asus4",
        frets: [-1, 0, 2, 2, 3, 0],
        fingers: [
          [2, 2, 1],
          [3, 2, 2],
          [4, 3, 3],
        ],
        category: "sus",
        youtube: "https://www.youtube.com/watch?v=28E58llYXaE",
      },
      {
        name: "Dsus2",
        frets: [-1, -1, 0, 2, 3, 0],
        fingers: [
          [3, 2, 1],
          [4, 3, 2],
        ],
        category: "sus",
        youtube: "https://www.youtube.com/watch?v=QJ3CAok2F_w",
      },
      {
        name: "Dsus4",
        frets: [-1, -1, 0, 2, 3, 3],
        fingers: [
          [3, 2, 1],
          [4, 3, 2],
          [5, 3, 3],
        ],
        category: "sus",
        youtube: "https://www.youtube.com/watch?v=-hpVmtvwsS4",
      },
      {
        name: "Esus4",
        frets: [0, 2, 2, 2, 0, 0],
        fingers: [
          [1, 2, 1],
          [2, 2, 2],
          [3, 2, 3],
        ],
        category: "sus",
        // couldn't lock a single Esus4 video ID within tool-call limits
        youtube: "https://www.youtube.com/results?search_query=Esus4+chord+guitar+lesson",
      },
    ],
  
    power: [
      {
        name: "A5",
        frets: [-1, 0, 2, 2, -1, -1],
        fingers: [
          [2, 2, 1],
          [3, 2, 2],
        ],
        category: "power",
        youtube: "https://www.youtube.com/watch?v=mgZlMdVF08Q",
      },
      {
        name: "B5",
        frets: [-1, 2, 4, 4, -1, -1],
        fingers: [
          [1, 2, 1],
          [2, 4, 3],
          [3, 4, 4],
        ],
        category: "power",
        youtube: "https://www.youtube.com/watch?v=gD3wCdJHgkw",
      },
      {
        name: "C5",
        frets: [-1, 3, 5, 5, -1, -1],
        fingers: [
          [1, 3, 1],
          [2, 5, 3],
          [3, 5, 4],
        ],
        category: "power",
        youtube: "https://www.youtube.com/watch?v=wteMlY1miZA",
      },
      {
        name: "D5",
        frets: [-1, -1, 0, 2, 3, -1],
        fingers: [
          [3, 2, 1],
          [4, 3, 2],
        ],
        category: "power",
        youtube: "https://www.youtube.com/watch?v=8CMpvHXZGnk",
      },
      {
        name: "E5",
        frets: [0, 2, 2, -1, -1, -1],
        fingers: [
          [1, 2, 1],
          [2, 2, 2],
        ],
        category: "power",
        youtube: "https://www.youtube.com/watch?v=jItgEFtFGXw",
      },
      {
        name: "F5",
        frets: [1, 3, 3, -1, -1, -1],
        fingers: [
          [0, 1, 1],
          [1, 3, 3],
          [2, 3, 4],
        ],
        category: "power",
        youtube: "https://www.youtube.com/watch?v=4eAQeX26gX4",
      },
      {
        name: "G5",
        frets: [3, 5, 5, -1, -1, -1],
        fingers: [
          [0, 3, 1],
          [1, 5, 3],
          [2, 5, 4],
        ],
        category: "power",
        youtube: "https://www.youtube.com/watch?v=8spuBx4Z3rA",
      },
    ],
  };
  
  export const categories = [
    { id: "major", name: "Major", description: "Bright, happy sounding chords" },
    { id: "minor", name: "Minor", description: "Darker, melancholic feel" },
    { id: "seventh", name: "7th", description: "Jazzy, bluesy character" },
    { id: "minor7", name: "Minor 7th", description: "Smooth, mellow tones" },
    { id: "major7", name: "Major 7th", description: "Dreamy, sophisticated sound" },
    { id: "sus", name: "Suspended", description: "Open, unresolved feeling" },
    { id: "power", name: "Power", description: "Rock and metal essential" },
  ];
  