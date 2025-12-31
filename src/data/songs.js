// Song data structure for lyrics with chords
// Format inspired by Ultimate Guitar, Chordify, and other chord/lyric websites

export const songs = [
  {
    id: "sweater-weather",
    title: "Sweater Weather",
    artist: "The Neighbourhood",
    language: "English",
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
  {
    id: "west-coast",
    title: "West Coast",
    artist: "Coconut Records",
    language: "English",
    key: "Bb Major",
    capo: 3,
    spotifyUrl: "https://open.spotify.com/track/2nvZv4qatgsDIbEqqbQLUT",
    youtubeUrl: "https://www.youtube.com/watch?v=mTzEp4CeWT8",
    sections: [
      {
        type: "verse",
        label: "Verse",
        lines: [
          {
            chords: "G      C      Em",
            lyrics: "For a second there I thought you disappeared",
          },
          {
            chords: "G      C      G",
            lyrics: "It rains a lot this time of year",
          },
          {
            chords: "G      C      Em",
            lyrics: "And we both go together if one falls down",
          },
          {
            chords: "G      C      Am",
            lyrics: "I talk out loud like you're still around",
          },
          { chords: "Bm", lyrics: "Hoo-hoo, no no" },
        ],
      },
      {
        type: "chorus",
        label: "Chorus",
        lines: [
          { chords: "Em", lyrics: "And I miss you" },
          {
            chords: "C      Am      Bm",
            lyrics: "I'm going back home to the West Coast",
          },
          {
            chords: "Em      C      Am      Bm",
            lyrics: "I wish you would have put yourself in my suitcase",
          },
          { chords: "Em", lyrics: "I love you" },
          {
            chords: "C      Am      Bm",
            lyrics: "Standing all alone in a black coat",
          },
          { chords: "Em", lyrics: "I miss you" },
          {
            chords: "C      Am      Bm",
            lyrics: "I'm going back home to the West Coast",
          },
        ],
      },
      {
        type: "verse",
        label: "Verse 2",
        lines: [
          {
            chords: "G      C      Em",
            lyrics: "And if you shake her hard enough she will appear",
          },
          {
            chords: "G      C      G",
            lyrics: "Tonight I think I'll be staying here",
          },
          {
            chords: "G      C      Em",
            lyrics: "And you never did like this town",
          },
          {
            chords: "G      C      Am",
            lyrics: "I talk out loud like you're still around",
          },
          { chords: "Bm", lyrics: "Hoo-hoo, no no" },
        ],
      },
      {
        type: "chorus",
        label: "Chorus 2",
        lines: [
          { chords: "Em", lyrics: "And I miss you" },
          {
            chords: "C      Am      Bm",
            lyrics: "Going back home to the West Coast",
          },
          {
            chords: "Em      C      Am      Bm",
            lyrics: "I wish you would have put yourself in my suitcase",
          },
          { chords: "Em", lyrics: "I love you" },
          {
            chords: "C      Am      Bm",
            lyrics: "Standing all alone in a black coat",
          },
          { chords: "Em", lyrics: "I miss you" },
          {
            chords: "C      Am      Bm",
            lyrics: "I'm going back home to the West Coast",
          },
        ],
      },
      {
        type: "interlude",
        label: "La-la Interlude",
        lines: [
          {
            chords: "G  C  Em  |  G  C  G   (x2)",
            lyrics: "(Come on everybody... la la la...)",
          },
        ],
      },
      {
        type: "bridge",
        label: "Bridge",
        lines: [
          {
            chords: "G  C  Em  G  C  G  G  C  Em",
            lyrics: "Pack up the bags, the beat backs the clock...",
          },
        ],
      },
      {
        type: "verse",
        label: "Verse 3",
        lines: [
          {
            chords: "G      C      Em",
            lyrics: "Do I let us sleep, should I wake her up?",
          },
          {
            chords: "G      C      G",
            lyrics: "You said both go together when one goes down",
          },
          {
            chords: "G      C      Em",
            lyrics: "Yeah right, and talk out loud",
          },
          { chords: "G      C      Am", lyrics: "Like you're still around" },
          { chords: "Bm", lyrics: "" },
        ],
      },
      {
        type: "chorus",
        label: "Final Chorus",
        lines: [
          { chords: "Em", lyrics: "And I miss you" },
          {
            chords: "C      Am      Bm",
            lyrics: "I'm going back home to the West Coast",
          },
          {
            chords: "Em      C      Am      Bm",
            lyrics: "I wish you would have put yourself in my suitcase",
          },
          { chords: "Em", lyrics: "I love you" },
          {
            chords: "C      Am      Bm",
            lyrics: "Standing all alone in a black coat",
          },
          { chords: "Em", lyrics: "I miss you" },
          {
            chords: "C      Am      Bm",
            lyrics: "I'm going back home to the West Coast",
          },
        ],
      },
    ],
  },
  {
    id: "labon-ko",
    title: "Labon Ko",
    artist: "KK (Pritam)",
    language: "Hindi",
    key: "A Minor",
    capo: 0,
    spotifyUrl: "https://open.spotify.com/track/0YpG1x2vXyY7wK6t9XvR5Y",
    youtubeUrl: "https://www.youtube.com/watch?v=-FP2Cmc7zj4",
    sections: [
      {
        type: "chorus",
        label: "Chorus",
        lines: [
          { chords: "Am      G        F", lyrics: "Labon ko labon pe sajao" },
          { chords: "Am      G        F", lyrics: "Kya ho tum mujhe ab batao" },
          { chords: "E       F", lyrics: "Todh do khudko tum" },
          {
            chords: "G             F           G           F",
            lyrics:
              "Baahon mein meri, baahon mein meri, baahon mein meri, baahon mein",
          },
          { chords: "Am   G    F    G", lyrics: "Aaaa... aaaa... aaaa..." },
        ],
      },
      {
        type: "verse",
        label: "Verse 1",
        lines: [
          {
            chords: "Am             G",
            lyrics: "Tere ehsaason mein, bheege lamhaton mein",
          },
          {
            chords: "F               G",
            lyrics: "Mujhko dooba tishnagi si hai",
          },
          {
            chords: "Am             G",
            lyrics: "Teri adao se, dilkash khataon se",
          },
          {
            chords: "F               G",
            lyrics: "In lamhon mein zindagi si hai",
          },
          { chords: "Am      G       F", lyrics: "Haya ko zara bhool jaao" },
          { chords: "Am      G       F", lyrics: "Meri hi tarah pesh aao" },
          { chords: "E       F", lyrics: "Kho bhi do khudko tum" },
          {
            chords: "G             F           G           F",
            lyrics:
              "Raaton mein meri, raaton mein meri, raaton mein meri, raaton mein",
          },
        ],
      },
      {
        type: "verse",
        label: "Verse 2",
        lines: [
          {
            chords: "Am              G",
            lyrics: "Tere jazbaaton mein, mehki si saason mein",
          },
          { chords: "F              G", lyrics: "Yeh jo mehek sandali si hai" },
          {
            chords: "Am              G",
            lyrics: "Dil ki panahon mein, bikhri si aahon mein",
          },
          { chords: "F              G", lyrics: "Sone ki khwaish jagi si hai" },
          { chords: "Am      G       F", lyrics: "Chehre se chehra chupao" },
          { chords: "Am      G       F", lyrics: "Seene ki dhadkan sunao" },
          { chords: "E       F", lyrics: "Dekh lo khudko tum" },
          {
            chords: "G             F           G           F",
            lyrics:
              "Aankhon mein meri, aankhon mein meri, aankhon mein meri, aankhon mein",
          },
        ],
      },
      {
        type: "outro",
        label: "Outro",
        lines: [
          { chords: "Am      G        F", lyrics: "Labon ko labon pe sajao" },
          { chords: "Am   G    F    G", lyrics: "Aaaa... aaaa... aaaa..." },
        ],
      },
    ],
  },
  {
    id: "tum-hi-ho",
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    language: "Hindi",
    key: "E Minor",
    capo: 1,
    youtubeUrl: "https://www.youtube.com/watch?v=Umqb9KENgmk",
    sections: [
      {
        type: "chorus",
        label: "Chorus",
        lines: [
          {
            chords: "Em             C",
            lyrics: "Hum tere bin ab reh nahi sakte",
          },
          { chords: "D              Bm", lyrics: "Tere bina kya wajood mera" },
          {
            chords: "Em             C",
            lyrics: "Hum tere bin ab reh nahi sakte",
          },
          { chords: "D              Bm", lyrics: "Tere bina kya wajood mera" },
          {
            chords: "C              Em",
            lyrics: "Tujhse juda agar ho jayenge",
          },
          {
            chords: "D              Bm",
            lyrics: "Toh khud se hi ho jayenge juda",
          },
          {
            chords: "Em             C",
            lyrics: "Kyunki tum hi ho, ab tum hi ho",
          },
          { chords: "D              Bm", lyrics: "Zindagi ab tum hi ho" },
          { chords: "C              Em", lyrics: "Chain bhi, mera dard bhi" },
          {
            chords: "D              Bm         Em",
            lyrics: "Meri aashiqui ab tum hi ho",
          },
        ],
      },
      {
        type: "verse",
        label: "Verse 1",
        lines: [
          { chords: "Em             C", lyrics: "Tera mera rishta hai kaisa" },
          { chords: "D              Bm", lyrics: "Ek pal door gawara nahi" },
          { chords: "Em             C", lyrics: "Tere liye har roz hai jeete" },
          {
            chords: "D              Bm",
            lyrics: "Tujh ko diya mera waqt sabhi",
          },
          {
            chords: "D              G",
            lyrics: "Koi lamha mera na ho tere bina",
          },
          {
            chords: "Bm             C           D",
            lyrics: "Har saans pe naam tera",
          },
        ],
      },
      {
        type: "chorus",
        label: "Chorus 2",
        lines: [
          {
            chords: "Em             C",
            lyrics: "Kyunki tum hi ho, ab tum hi ho",
          },
          { chords: "D              Bm", lyrics: "Zindagi ab tum hi ho" },
          { chords: "C              Em", lyrics: "Chain bhi, mera dard bhi" },
          {
            chords: "D              Bm         Em",
            lyrics: "Meri aashiqui ab tum hi ho",
          },
        ],
      },
      {
        type: "verse",
        label: "Verse 2",
        lines: [
          { chords: "C              Bm", lyrics: "Tere liye hi jiya main" },
          { chords: "C              Bm", lyrics: "Khud ko jo yun de diya hai" },
          {
            chords: "Am             Em",
            lyrics: "Teri wafa ne mujhko sambhala",
          },
          {
            chords: "Am             Em",
            lyrics: "Saare ghamon ko dil se nikala",
          },
          {
            chords: "D              G",
            lyrics: "Tere saath mera hai naseeb juda",
          },
          {
            chords: "Bm             C           D",
            lyrics: "Tujhe paake adhoora na raha",
          },
        ],
      },
      {
        type: "outro",
        label: "Outro",
        lines: [
          {
            chords: "Em             C",
            lyrics: "Kyunki tum hi ho, ab tum hi ho",
          },
          { chords: "D              Bm", lyrics: "Zindagi ab tum hi ho" },
          { chords: "C              Em", lyrics: "Chain bhi, mera dard bhi" },
          {
            chords: "D              Bm         Em",
            lyrics: "Meri aashiqui ab tum hi ho",
          },
        ],
      },
    ],
  },
  {
    id: "jo-tum-mere-ho",
    title: "Jo Tum Mere Ho",
    artist: "Anuv Jain",
    language: "Hindi",
    key: "A Minor (E Major)",
    capo: 4,
    youtubeUrl: "https://www.youtube.com/watch?v=ilNt2bikxDI",
    sections: [
      {
        type: "verse",
        label: "Verse 1",
        lines: [
          {
            chords: "Am             Em",
            lyrics: "Hairaan hoon ki kuch bhi na maangoon kabhi main",
          },
          { chords: "F              G", lyrics: "Jo tum mere ho" },
          {
            chords: "Am             Em",
            lyrics: "Aisa ho kyun ki lagta hai haasil sabhi hai",
          },
          { chords: "F              G", lyrics: "Jo tum mere ho" },
        ],
      },
      {
        type: "chorus",
        label: "Chorus",
        lines: [
          {
            chords: "Am             Em",
            lyrics: "Jo tum mere ho, toh main kuch nahi maangoon duniya se",
          },
          {
            chords: "F              G",
            lyrics:
              "Aur tum ho hi nahi, toh main jeena nahi chahoon duniya mein",
          },
        ],
      },
      {
        type: "verse",
        label: "Verse 2",
        lines: [
          {
            chords: "Am             Em",
            lyrics: "Aur nazron mein mere ik jahaan hai",
          },
          {
            chords: "F              G",
            lyrics: "Jahaan tu aur main ab saath hain",
          },
          { chords: "Am             Em", lyrics: "Aur wahaan koi nahi" },
          { chords: "F              G", lyrics: "Tu aur main hi... haaye" },
        ],
      },
      {
        type: "verse",
        label: "Verse 3",
        lines: [
          { chords: "Am             Em", lyrics: "Aur aaoge, aise aaoge" },
          {
            chords: "F              G",
            lyrics: "Teri-meri kya ye raahein yoon judi hain?",
          },
          {
            chords: "Am             Em",
            lyrics: "Aur raahon mein hi jo tum aaye kabhi",
          },
          {
            chords: "F              G",
            lyrics: "Hum toh pyaar se hi mar jaayenge",
          },
          { chords: "Am             Em", lyrics: "Aur aaoge, aise aaoge" },
          {
            chords: "F              G",
            lyrics: "Teri-meri kya ye raahein yoon judi hain?",
          },
          {
            chords: "Am             Em",
            lyrics: "Aur raahon mein hi jo tum aaye nahi",
          },
          {
            chords: "F              G",
            lyrics: "Hum toh phir bhi tumhein hi chaahenge",
          },
        ],
      },
      {
        type: "bridge",
        label: "Bridge",
        lines: [
          {
            chords: "Am             Em",
            lyrics: "Poochhe ye tu ki tujh mein main kya dekhta hoon",
          },
          {
            chords: "F              G",
            lyrics: "Jab chaaron taraf aaj kitne hi saare nazaare hain",
          },
          {
            chords: "Am             Em",
            lyrics: "Jaane na tu khud ko yoon, na jaane kyun",
          },
          {
            chords: "F              G",
            lyrics: "Nazron se meri yahaan dekho na khud ko zara... dekho na",
          },
        ],
      },
      {
        type: "verse",
        label: "Verse 4",
        lines: [
          { chords: "Am             Em", lyrics: "Zulfon se, kaise zulfon se" },
          {
            chords: "F              G",
            lyrics: "Teri chhupti pyaari-pyaari si muskaan hai",
          },
          {
            chords: "Am             Em",
            lyrics: "Aur nazrein jhuki, aur nazrein uthi",
          },
          {
            chords: "F              G",
            lyrics: "Toh main kya hi karoon? Barbaad main",
          },
          {
            chords: "Am             Em",
            lyrics: "Tere honthon ko, tere honthon ko",
          },
          {
            chords: "F              G",
            lyrics: "Jinse rakhti mere pyaare-pyaare naam hain",
          },
          {
            chords: "Am             Em",
            lyrics: "Aur dil ka tere, aur dil ka tere",
          },
          {
            chords: "F              G",
            lyrics: "Ab main kya hi kahoon? Kya baat hai!",
          },
        ],
      },
      {
        type: "outro",
        label: "Outro",
        lines: [
          { chords: "Am             Em", lyrics: "Aur haan, dekho yahaan" },
          {
            chords: "F              G",
            lyrics: "Kaise aayi do dilon ki ye baaraat hai",
          },
          { chords: "Am             Em", lyrics: "Par kya khula aasmaan" },
          {
            chords: "F              G",
            lyrics: "Ya phir laayi yahaan zoron se barsaat hai?",
          },
          {
            chords: "Am             Em",
            lyrics: "Chaahe hon chhaaye bhi baadal toh",
          },
          {
            chords: "F              G",
            lyrics: "Chaahein phir bhi tumhein, kya pata tumko?",
          },
          { chords: "Am             Em", lyrics: "Maangoon na kuch aur jo" },
          { chords: "F              G", lyrics: "Tum mere ho" },
        ],
      },
    ],
  },
  {
    "id": "aadat",
    "title": "Aadat",
    "artist": "Atif Aslam",
    "language": "Hindi",
    "key": "A Minor",
    "capo": 4,
    "youtubeUrl": "https://www.youtube.com/watch?v=NW44qHihuy0",
    "sections": [
      {
        "type": "intro",
        "label": "Intro",
        "lines": [
          { "chords": "Am      F      G      Am", "lyrics": "(Humming / Guitar Melody)" }
        ]
      },
      {
        "type": "chorus",
        "label": "Chorus",
        "lines": [
          { "chords": "Am             F", "lyrics": "Juda hoke bhi tu mujhmein bahi baaki hai" },
          { "chords": "G              Am", "lyrics": "Palkon mein banke aansu tu chali aati hai" },
          { "chords": "Am             F", "lyrics": "Juda hoke bhi tu mujhmein bahi baaki hai" },
          { "chords": "G              Am", "lyrics": "Palkon mein banke aansu tu chali aati hai" },
          { "chords": "Am             F", "lyrics": "Ab toh aadat si hai mujhko aise jeene mein" },
          { "chords": "G              Am", "lyrics": "He-hey hey hey, oo-ooo ooo..." },
          { "chords": "Am             F", "lyrics": "Ab toh aadat si hai mujhko aise jeene mein" }
        ]
      },
      {
        "type": "verse",
        "label": "Verse 1",
        "lines": [
          { "chords": "Am             F", "lyrics": "Sabhi raatein hain, sabhi baatein hain" },
          { "chords": "G              Am", "lyrics": "Bhula do unhe, mita do unhe" },
          { "chords": "Am             F", "lyrics": "Aa-aa-aa, mita do unhe" },
          { "chords": "Am             F", "lyrics": "Ab toh aadat si hai mujhko aise jeene mein" },
          { "chords": "G              Am", "lyrics": "He-hey hey hey, oo-ooo ooo..." },
          { "chords": "Am             F", "lyrics": "Ab toh aadat si hai mujhko aise jeene mein" }
        ]
      },
      {
        "type": "verse",
        "label": "Verse 2",
        "lines": [
          { "chords": "Am             F", "lyrics": "Suni yaadein, mithi baatein" },
          { "chords": "G              Am", "lyrics": "Rulaati hain, tadpaati hain" },
          { "chords": "Am             F", "lyrics": "Aa-aa-aa, tadpaati hain" },
          { "chords": "Am             F", "lyrics": "Ab toh aadat si hai mujhko aise jeene mein" }
        ]
      },
      {
        "type": "bridge",
        "label": "Bridge",
        "lines": [
          { "chords": "Am             F", "lyrics": "Chahat aisi hai ye teri" },
          { "chords": "G              Am", "lyrics": "Badhti jaaye, kam na ho" },
          { "chords": "Am             F", "lyrics": "Jee loon main isko abhi" },
          { "chords": "G              Am", "lyrics": "Marne se darr na ho" }
        ]
      },
      {
        "type": "outro",
        "label": "Outro",
        "lines": [
          { "chords": "Am             F", "lyrics": "Ab toh aadat si hai mujhko aise jeene mein" },
          { "chords": "G              Am", "lyrics": "He-hey hey hey, oo-ooo ooo..." },
          { "chords": "Am             F", "lyrics": "Ab toh aadat si hai mujhko" },
          { "chords": "Am", "lyrics": "Aise jeene mein..." }
        ]
      }
    ]
  }
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
