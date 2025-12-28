import React, { useState } from "react";
import { motion } from "framer-motion";
import { Youtube, Grid3x3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ChordDiagram from "./ChordDiagram";

const ChordCard = ({ chord, index }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isYoutubeOpen, setIsYoutubeOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(0);
  const [showAllPositions, setShowAllPositions] = useState(true);
  const [hasSelected, setHasSelected] = useState(false);

  // Get all positions for this chord
  const allPositions = chord.allPositions || [chord];
  const currentPosition = allPositions[selectedPosition] || {};
  const currentChord = { ...chord, ...currentPosition };

  // Extract YouTube video ID from URL
  const getYoutubeId = (url) => {
    const match = url?.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/
    );
    return match ? match[1] : null;
  };

  const videoId = getYoutubeId(chord.youtube);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card
        className="group h-full md:hover:border-yellow-500 transition-all duration-300 cursor-pointer"
        onClick={() => {
          setSelectedPosition(0);
          setShowAllPositions(true);
          setHasSelected(false);
          setIsDialogOpen(true);
        }}
      >
        <CardContent className="p-4 flex flex-col items-center gap-3">
          {/* Chord Name */}
          <h3 className="font-newsreader text-xl font-medium border-b-2 border-transparent md:group-hover:border-yellow-500 transition-colors">
            {chord.name}
          </h3>

          {/* Chord Diagram */}
          <div className="w-full flex justify-center">
            <ChordDiagram chord={chord} />
          </div>

          {/* Fret numbers display */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className="flex gap-2 text-xs text-muted-foreground font-mono cursor-help"
                onClick={(e) => e.stopPropagation()}
              >
                {chord.frets.map((fret, i) => (
                  <span key={i} className="w-3 text-center">
                    {fret === -1 ? "x" : fret}
                  </span>
                ))}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">Fret positions: E A D G B e</p>
            </TooltipContent>
          </Tooltip>

          {/* YouTube Link */}
          {chord.youtube && videoId && (
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 text-muted-foreground md:hover:text-yellow-500 md:hover:bg-transparent transition-colors mt-1"
              onClick={(e) => {
                e.stopPropagation();
                setIsYoutubeOpen(true);
              }}
            >
              <Youtube className="w-4 h-4" />
              <span className="font-newsreader italic text-sm">
                Watch Tutorial
              </span>
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Large Chord Diagram Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-5xl border-border max-h-[90vh] overflow-y-auto px-4 py-6 sm:px-6">
          <DialogHeader className="pt-0 pb-4 sm:pt-6">
            <DialogTitle className="font-newsreader text-3xl text-center">
              {chord.name}
            </DialogTitle>
            {allPositions.length > 1 && (
              <p className="text-sm text-muted-foreground text-center font-inter mt-2">
                {allPositions.length} positions available
              </p>
            )}
          </DialogHeader>

          {allPositions.length > 1 ? (
            // Multiple positions - show grid or selected view
            <div className="space-y-6 pb-6">
              {showAllPositions ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {allPositions.map((position, idx) => {
                    const positionChord = { ...chord, ...position };
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: idx * 0.05 }}
                        className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                          hasSelected && selectedPosition === idx
                            ? "border-yellow-500 bg-yellow-500/10"
                            : "border-border md:hover:border-yellow-500/50"
                        }`}
                        onClick={() => {
                          setSelectedPosition(idx);
                          setHasSelected(true);
                          setShowAllPositions(false);
                        }}
                      >
                        <div className="text-xs text-muted-foreground font-inter">
                          Position {idx + 1}
                        </div>
                        <ChordDiagram chord={positionChord} />
                        <div className="flex gap-1 text-xs text-muted-foreground font-mono">
                          {positionChord.frets.map((fret, i) => (
                            <span key={i} className="w-3 text-center">
                              {fret === -1 ? "x" : fret}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    onClick={() => setShowAllPositions(true)}
                    className="flex items-center gap-2 text-muted-foreground border-border md:hover:text-yellow-500 md:hover:border-yellow-500"
                  >
                    <Grid3x3 className="w-4 h-4" />
                    <span className="font-newsreader italic">Show All Positions</span>
                  </Button>
                </div>
              )}

              {/* Large view of selected position - only show if user has selected */}
              {hasSelected && (
                <div className={`flex flex-col items-center gap-4 ${showAllPositions ? 'pt-4 border-t border-border' : ''}`}>
                  <h3 className="font-newsreader text-xl font-medium">
                    Position {selectedPosition + 1}
                  </h3>
                  <div className="w-full flex justify-center">
                    <ChordDiagram chord={currentChord} size="large" />
                  </div>
                  <div className="flex gap-3 text-sm text-muted-foreground font-mono">
                    {currentChord.frets.map((fret, i) => (
                      <span key={i} className="w-6 text-center">
                        {fret === -1 ? "x" : fret}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground font-inter">
                    Fret positions: E A D G B e
                  </p>
                </div>
              )}
            </div>
          ) : (
            // Single position - show large view only
            <div className="flex flex-col items-center gap-6 pb-6">
              <div className="w-full flex justify-center">
                <ChordDiagram chord={currentChord} size="large" />
              </div>
              <div className="flex gap-3 text-sm text-muted-foreground font-mono">
                {currentChord.frets.map((fret, i) => (
                  <span key={i} className="w-6 text-center">
                    {fret === -1 ? "x" : fret}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground font-inter">
                Fret positions: E A D G B e
              </p>
            </div>
          )}

          {chord.youtube && videoId && (
            <div className="flex justify-center pt-4 border-t border-border">
              <Button
                variant="outline"
                className="flex items-center gap-2 text-yellow-500 border-yellow-500 md:hover:bg-yellow-500 md:hover:text-black"
                onClick={() => {
                  setIsDialogOpen(false);
                  setTimeout(() => setIsYoutubeOpen(true), 200);
                }}
              >
                <Youtube className="w-5 h-5" />
                <span className="font-newsreader italic">Watch Tutorial</span>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* YouTube Tutorial Dialog */}
      {chord.youtube && videoId && (
        <Dialog open={isYoutubeOpen} onOpenChange={setIsYoutubeOpen}>
          <DialogContent className="max-w-3xl p-0 border-border">
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={`${chord.name} chord tutorial`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </motion.div>
  );
};

export default ChordCard;
