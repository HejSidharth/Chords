import React, { useState } from "react";
import { motion } from "framer-motion";
import { Music, Clock, Key, Hash } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ChordDiagram from "./ChordDiagram";

const SongViewer = ({ song, allChords }) => {
  const [selectedChord, setSelectedChord] = useState(null);
  const [expandedChords, setExpandedChords] = useState(false);

  // Get unique chords used in the song
  const chordNames = new Set();
  song.sections.forEach((section) => {
    section.lines.forEach((line) => {
      const chords = line.chords.split(/\s+/).filter((c) => c.trim() !== "");
      chords.forEach((chord) => {
        const baseChord = chord.split("/")[0].trim();
        if (baseChord) chordNames.add(baseChord);
      });
    });
  });

  // Match with chord data
  const allChordsFlat = Object.values(allChords).flat();
  const songChords = Array.from(chordNames)
    .map((chordName) => {
      return allChordsFlat.find(
        (c) => c.name.toUpperCase() === chordName.toUpperCase()
      );
    })
    .filter(Boolean);

  const getSectionIcon = (type) => {
    switch (type) {
      case "verse":
        return "V";
      case "chorus":
        return "C";
      case "bridge":
        return "B";
      case "intro":
        return "I";
      case "outro":
        return "O";
      case "pre-chorus":
        return "P";
      case "interlude":
        return "L";
      default:
        return type.charAt(0).toUpperCase() || "";
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Song Header */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="font-newsreader text-3xl font-bold">
            {song.title}
          </CardTitle>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-inter mt-2">
            {song.artist && (
              <div className="flex items-center gap-2">
                <Music className="w-4 h-4" />
                <span>{song.artist}</span>
              </div>
            )}
            {song.key && (
              <div className="flex items-center gap-2">
                <Key className="w-4 h-4" />
                <span>{song.key}</span>
              </div>
            )}
            {song.tempo && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{song.tempo}</span>
              </div>
            )}
            {song.capo !== undefined && (
              <div className="flex items-center gap-2">
                <Hash className="w-4 h-4" />
                <span>{song.capo > 0 ? `Capo ${song.capo}` : "No Capo"}</span>
              </div>
            )}
          </div>
        </CardHeader>
      </Card>

      {/* Chord Reference */}
      {songChords.length > 0 && (
        <Card className="border-border">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="font-newsreader text-xl font-bold">
                Chords Used
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setExpandedChords(!expandedChords)}
                className="text-muted-foreground md:hover:text-yellow-500"
              >
                {expandedChords ? "Hide" : "Show"} Diagrams
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {songChords.map((chord) => (
                <button
                  key={chord.name}
                  onClick={() =>
                    setSelectedChord(
                      selectedChord?.name === chord.name ? null : chord
                    )
                  }
                  className={`px-3 py-1.5 rounded-md border transition-colors font-newsreader text-lg font-medium ${
                    selectedChord?.name === chord.name
                      ? "border-yellow-500 bg-yellow-500/10 text-yellow-500"
                      : "border-border bg-card text-foreground md:hover:border-yellow-500"
                  }`}
                >
                  {chord.name}
                </button>
              ))}
            </div>

            {/* Chord Diagrams */}
            {expandedChords && (
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {songChords.map((chord) => (
                  <div
                    key={chord.name}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="font-newsreader text-sm font-medium text-muted-foreground">
                      {chord.name}
                    </div>
                    <ChordDiagram chord={chord} />
                  </div>
                ))}
              </div>
            )}

            {/* Selected Chord Diagram */}
            {selectedChord && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 pt-6 border-t border-border"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="font-newsreader text-2xl font-bold">
                    {selectedChord.name}
                  </div>
                  <ChordDiagram chord={selectedChord} size="large" />
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Song Sections */}
      <div className="space-y-8">
        {song.sections.map((section, sectionIndex) => (
          <Card key={sectionIndex} className="border-border">
            <CardContent className="pt-6">
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center font-newsreader font-bold text-sm">
                  {getSectionIcon(section.type)}
                </div>
                {section.label && (
                  <h3 className="font-newsreader text-lg font-medium italic">
                    {section.label}
                  </h3>
                )}
              </div>

              {/* Lyrics with Chords */}
              <div className="space-y-2 font-mono text-sm leading-relaxed">
                {section.lines.map((line, lineIndex) => (
                  <div
                    key={lineIndex}
                    className="py-1 break-words"
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    {/* Chord Line */}
                    {line.chords && (
                      <div className="text-yellow-500 font-semibold mb-1 leading-tight">
                        {line.chords}
                      </div>
                    )}
                    {/* Lyric Line */}
                    <div className="text-foreground leading-relaxed">
                      {line.lyrics}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SongViewer;
