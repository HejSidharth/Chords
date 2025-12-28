// Song data structure for lyrics with chords
// Format inspired by Ultimate Guitar, Chordify, and other chord/lyric websites

export const songs = [
  {
    id: "sweater-weather",
    title: "Sweater Weather",
    artist: "The Neighbourhood",
    key: "C Major",
    capo: 0,
    spotifyUrl: "https://open.spotify.com/track/2QjOHCTQ1Jl3zawyYOpxh6",
    youtubeUrl: "https://www.youtube.com/watch?v=GCdwKhTtNNw",
    sections: [
      {
        type: "intro",
        label: "Intro",
        lines: [{ chords: "C   Am   Em   G  x2", lyrics: "" }],
      },

      {
        type: "verse",
        label: "Verse 1",
        lines: [
          { chords: "C      Am", lyrics: "All I am is a man" },
          {
            chords: "Em                G",
            lyrics: "I want this world in my hands",
          },
          { chords: "C", lyrics: "I hate the beach" },
          { chords: "Am              Em", lyrics: "But I stand in California" },
          { chords: "G", lyrics: "with my toes in the sand" },
          { chords: "C", lyrics: "Use the sleeves of my sweater" },
          { chords: "Am", lyrics: "Let's have an adventure" },
          {
            chords: "Em                           G",
            lyrics: "Head in the clouds, my gravity's centered",
          },
          {
            chords: "C                       Am",
            lyrics: "Touch my neck, yeah, and I'll touch yours",
          },
          {
            chords: "Em                          G",
            lyrics: "You in those little high-waisted shorts",
          },
        ],
      },

      {
        type: "pre-chorus",
        label: "Pre-Chorus",
        lines: [
          { chords: "C", lyrics: "Oh woah,  she knows what I think about" },
          { chords: "Am", lyrics: "And what I think about" },
          { chords: "Em", lyrics: "One love, two mouths" },
          { chords: "G", lyrics: "One love, one house" },
          { chords: "C", lyrics: "No shirt, no blouse" },
          { chords: "Am", lyrics: "Just us, you find out" },
          { chords: "Em      G", lyrics: "Yeah, nothin'" },
        ],
      },

      {
        type: "chorus",
        label: "Chorus",
        lines: [
          {
            chords: "C                      Am",
            lyrics: "'Cause it's too cooooold whoa-oh",
          },
          { chords: "Em", lyrics: "For you here" },
          { chords: "G", lyrics: "And now" },
          {
            chords: "C                 Am",
            lyrics: "So let me hooooold whoa-oh",
          },
          {
            chords: "Em                     G",
            lyrics: "Both your hands in the holes (of my sweater)",
          },
        ],
      },

      {
        type: "verse",
        label: "Verse 2",
        lines: [
          { chords: "C", lyrics: "And if I may just take your breath away" },
          { chords: "Am", lyrics: "I don't mind if there's not much to say" },
          { chords: "Em", lyrics: "The silence guides our minds" },
          { chords: "G", lyrics: "to move to a place so far away" },
          { chords: "C", lyrics: "The goosebumps start to raise" },
          {
            chords: "Am                              Em",
            lyrics: "When my left hand meets your waist, yeah",
          },
          { chords: "", lyrics: "then I watch your face" },
          {
            chords: "G                C",
            lyrics: "Oh-oh, I watch your face, yeah",
          },
          { chords: "", lyrics: "These hearts adore" },
          { chords: "Am", lyrics: "All the other beats hardest for" },
          { chords: "Em", lyrics: "Inside this place is warm" },
          { chords: "G      C", lyrics: "Outside it starts to pour" },
        ],
      },

      {
        type: "pre-chorus",
        label: "Pre-Chorus",
        lines: [
          { chords: "", lyrics: "Coming down" },
          { chords: "Am", lyrics: "One love, two mouths" },
          { chords: "Em", lyrics: "One love, one house" },
          { chords: "G", lyrics: "No shirt, no blouse" },
          { chords: "C      Am", lyrics: "Just us, you find out, yeah" },
          { chords: "Em     G", lyrics: "Nothin' at all, oh no" },
        ],
      },

      {
        type: "chorus",
        label: "Chorus",
        lines: [
          {
            chords: "C                      Am",
            lyrics: "'Cause it's too cooooold whoa-oh",
          },
          { chords: "Em", lyrics: "For you here" },
          { chords: "G", lyrics: "Right now" },
          {
            chords: "C                 Am",
            lyrics: "So let me hooooold whoa-oh",
          },
          {
            chords: "Em               G",
            lyrics: "Both your hands in the holes",
          },
        ],
      },

      {
        type: "chorus",
        label: "Chorus (tag)",
        lines: [
          {
            chords: "C                      Am",
            lyrics: "'Cause it's too cooooold whoa-oh",
          },
          { chords: "Em", lyrics: "For you here" },
          { chords: "G", lyrics: "And now" },
          {
            chords: "C                 Am",
            lyrics: "So let me hooooold whoa-oh",
          },
          {
            chords: "Em                     G",
            lyrics: "Both your hands in the holes of my sweater",
          },
          { chords: "D", lyrics: "Oh no no, no no no" },
        ],
      },

      {
        type: "interlude",
        label: "Instrumental",
        lines: [
          { chords: "Am  G  D", lyrics: "no no" },
          { chords: "Am  G  D", lyrics: "Da da 1,2,3,4" },
        ],
      },

      {
        type: "bridge",
        label: "Bridge",
        lines: [
          {
            chords: "Am        G              D",
            lyrics: "Whoa-oooh, whoa-oh-oh-oh, whoa-oh, oh",
          },
          { chords: "", lyrics: "Whoa-oh...oh oh" },
          {
            chords: "Am        G              D",
            lyrics: "Whoa-oooh, whoa-oh-oh-oh, whoa-oh, oh",
          },
          { chords: "Am", lyrics: "oh-oh, na-na-na-na-na" },
          {
            chords: "G              D",
            lyrics: "Whoa-oooh, whoa-oh-oh-oh, whoa-oh, oh",
          },
          { chords: "Am", lyrics: "oh-oh, na-na-na-na-na" },
          {
            chords: "G              D",
            lyrics: "Whoa-oooh, whoa-oh-oh-oh, whoa-oh, oh",
          },
          { chords: "Am", lyrics: "Whoa-oh...oh oh" },
          { chords: "G        D", lyrics: "Whoa-oh-ooh, I'd die here" },
        ],
      },

      {
        type: "chorus",
        label: "Chorus (final)",
        lines: [
          {
            chords: "C                      Am",
            lyrics: "'Cause it's too cooooold whoa-oh",
          },
          { chords: "Em", lyrics: "For you here" },
          { chords: "G", lyrics: "right now" },
          {
            chords: "C                 Am",
            lyrics: "So let me hooooold whoa-oh",
          },
          {
            chords: "Em               G",
            lyrics: "Both your hands in the holes",
          },

          {
            chords: "C                      Am",
            lyrics: "'Cause it's too cooooold whoa-oh",
          },
          { chords: "Em", lyrics: "For you, woah-woah" },
          { chords: "G", lyrics: "And now" },
          {
            chords: "C                 Am",
            lyrics: "So let me hooooold whoa-oh",
          },
          {
            chords: "Em                     G",
            lyrics: "Both your hands in the holes of my sweater",
          },
        ],
      },
    ],
  },
  // Add more songs here...
];

/**
 * Helper function to parse inline chord format
 * Converts "Walking [C]down the [Am]road" to {chords: "C      Am", lyrics: "Walking down the road"}
 */
export function parseInlineChords(text) {
  const chordRegex = /\[([^\]]+)\]/g;
  const chords = [];
  const lyrics = text.replace(chordRegex, (match, chord) => {
    chords.push(chord);
    return match; // Keep placeholder to align
  });

  // Replace chord markers with spaces for alignment
  const cleanLyrics = lyrics.replace(/\[([^\]]+)\]/g, (match, chord) => {
    return " ".repeat(chord.length + 2); // Account for brackets
  });

  // Create chord line with proper spacing
  const chordLine = chords.join("      ");

  return {
    chords: chordLine,
    lyrics: cleanLyrics,
  };
}

/**
 * Get all unique chords used in a song
 */
export function getSongChords(song, allChords) {
  const chordNames = new Set();

  song.sections.forEach((section) => {
    section.lines.forEach((line) => {
      // Extract chord names from chord line
      const chords = (line.chords || "")
        .split(/\s+/)
        .filter((c) => c.trim() !== "");
      chords.forEach((chord) => {
        // Remove modifiers like /, sus, add, etc. for matching
        const baseChord = chord.split("/")[0].trim();
        chordNames.add(baseChord);
      });
    });
  });

  // Match with existing chord data
  const matchedChords = [];
  const allChordsFlat = Object.values(allChords).flat();

  Array.from(chordNames).forEach((chordName) => {
    const found = allChordsFlat.find(
      (c) => c.name.toUpperCase() === chordName.toUpperCase()
    );
    if (found) {
      matchedChords.push(found);
    }
  });

  return matchedChords;
}
