import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import ChordCard from './ChordCard';

const CategorySection = ({ category, chords, isExpanded, onToggle }) => {
  return (
    <div id={`category-${category.id}`} className="scroll-mt-24">
      <Collapsible open={isExpanded} onOpenChange={onToggle} className="mb-10">
        <div className="space-y-4">
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="font-newsreader italic font-medium text-lg border-b-2 border-transparent hover:border-yellow-500 hover:bg-transparent transition-colors flex items-center gap-2 p-0 h-auto"
          >
            <span>{category.name}</span>
            <span className="text-muted-foreground text-sm not-italic font-inter">
              ({chords.length})
            </span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </motion.div>
          </Button>
        </CollapsibleTrigger>
        
        <p className="text-sm text-muted-foreground font-inter">
          {category.description}
        </p>
        
        <CollapsibleContent className="data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden">
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2"
              >
                {chords.map((chord, index) => (
                  <ChordCard key={chord.name} chord={chord} index={index} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </CollapsibleContent>
        </div>
      </Collapsible>
    </div>
  );
};

export default CategorySection;
