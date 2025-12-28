# 🎵 Songs with Chords - Guide

## Overview
This feature allows you to create and display songs with lyrics and guitar chords. The format is inspired by popular chord/lyric websites like Ultimate Guitar, Chordify, and others.

## Data Structure

### Song Object
```javascript
{
  id: "unique-song-id",
  title: "Song Title",
  artist: "Artist Name",
  key: "C Major",        // Optional: Musical key
  tempo: "120 BPM",      // Optional: Tempo or BPM
  capo: 0,               // Optional: Capo position (0 = no capo)
  sections: [            // Array of song sections
    // See Section Object below
  ]
}
```

### Section Object
Each song is divided into sections (verse, chorus, bridge, etc.)

```javascript
{
  type: "verse",         // "verse", "chorus", "bridge", "intro", "outro", "pre-chorus", "interlude"
  label: "Verse 1",      // Optional: Display label (defaults to type if not provided)
  lines: [               // Array of lyric lines with chords
    // See Line Object below
  ]
}
```

### Line Object
Each line has chords above the lyrics:

```javascript
{
  chords: "C          Am         F          G",    // Chord names with spacing
  lyrics: "Walking down the road today"            // The actual lyrics
}
```

**Important:** The spacing in the `chords` string should align with the lyrics. Use multiple spaces to position chords above the correct words.

## Example Song

```javascript
{
  id: "example-song",
  title: "Example Song",
  artist: "Example Artist",
  key: "C Major",
  tempo: "120 BPM",
  capo: 0,
  sections: [
    {
      type: "verse",
      label: "Verse 1",
      lines: [
        {
          chords: "C          Am         F          G",
          lyrics: "Walking down the road today",
        },
        {
          chords: "C          Am         F          G",
          lyrics: "Feeling good in every way",
        },
      ],
    },
    {
      type: "chorus",
      label: "Chorus",
      lines: [
        {
          chords: "F          C          Am         G",
          lyrics: "This is the chorus part",
        },
        {
          chords: "F          C          Am         G",
          lyrics: "Sing it loud with all your heart",
        },
      ],
    },
  ],
}
```

## Adding Songs

1. Open `/src/data/songs.js`
2. Add your song object to the `songs` array
3. Make sure the `id` is unique
4. Use chord names that match your chord library (A, Am, C, D, E, F, G, etc.)

## Chord Alignment Tips

- Use consistent spacing between chord names
- Count characters/spaces in lyrics to align chords properly
- Test the display to ensure chords align above the correct words
- Common spacing: 10-12 spaces between chords works well for most lyrics

## Section Types

- `verse` - Main verse sections
- `chorus` - Chorus/refrain sections
- `bridge` - Bridge sections
- `intro` - Introduction
- `outro` - Ending section
- `pre-chorus` - Section before chorus
- `interlude` - Instrumental or transition sections

## Display Features

- **Chord Reference**: Shows all unique chords used in the song
- **Chord Diagrams**: Click chords to see diagrams
- **Clean Layout**: Chords displayed in yellow above lyrics
- **Section Labels**: Visual indicators for different sections
- **Responsive**: Works on all screen sizes

## Usage in App

The songs feature is accessible via the navigation in the app. You can:
- Browse all songs
- Search songs by title or artist
- View full song with chords
- Click on chord names to see diagrams
- View chord reference for each song

