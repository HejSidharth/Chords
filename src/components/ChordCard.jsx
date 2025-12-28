import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import ChordDiagram from './ChordDiagram';

const ChordCard = ({ chord, index }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isYoutubeOpen, setIsYoutubeOpen] = useState(false);
  
  // Extract YouTube video ID from URL
  const getYoutubeId = (url) => {
    const match = url?.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
    return match ? match[1] : null;
  };
  
  const videoId = getYoutubeId(chord.youtube);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card className="group h-full hover:border-yellow-500 transition-all duration-300 cursor-pointer" onClick={() => setIsDialogOpen(true)}>
        <CardContent className="p-4 flex flex-col items-center gap-3">
          {/* Chord Name */}
          <h3 className="font-newsreader text-xl font-medium border-b-2 border-transparent group-hover:border-yellow-500 transition-colors">
            {chord.name}
          </h3>
          
          {/* Chord Diagram */}
          <div className="w-full flex justify-center">
            <ChordDiagram chord={chord} />
          </div>
          
          {/* Fret numbers display */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex gap-2 text-xs text-muted-foreground font-mono cursor-help" onClick={(e) => e.stopPropagation()}>
                {chord.frets.map((fret, i) => (
                  <span key={i} className="w-3 text-center">
                    {fret === -1 ? 'x' : fret}
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
              className="flex items-center gap-2 text-muted-foreground hover:text-yellow-500 hover:bg-transparent transition-colors mt-1"
              onClick={(e) => {
                e.stopPropagation();
                setIsYoutubeOpen(true);
              }}
            >
              <Youtube className="w-4 h-4" />
              <span className="font-newsreader italic text-sm">Watch Tutorial</span>
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Large Chord Diagram Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl border-border">
          <DialogHeader className="pt-6 pb-2">
            <DialogTitle className="font-newsreader text-3xl text-center">{chord.name}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-6 pb-6">
            <div className="w-full flex justify-center">
              <ChordDiagram chord={chord} size="large" />
            </div>
            {/* Fret numbers display */}
            <div className="flex gap-3 text-sm text-muted-foreground font-mono">
              {chord.frets.map((fret, i) => (
                <span key={i} className="w-6 text-center">
                  {fret === -1 ? 'x' : fret}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground font-inter">Fret positions: E A D G B e</p>
            {chord.youtube && videoId && (
              <Button
                variant="outline"
                className="flex items-center gap-2 text-yellow-500 border-yellow-500 hover:bg-yellow-500 hover:text-black"
                onClick={() => {
                  setIsDialogOpen(false);
                  setTimeout(() => setIsYoutubeOpen(true), 200);
                }}
              >
                <Youtube className="w-5 h-5" />
                <span className="font-newsreader italic">Watch Tutorial</span>
              </Button>
            )}
          </div>
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
