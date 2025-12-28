import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { chords, categories } from "./data/chords";
import CategorySection from "./components/CategorySection";
import ChordCard from "./components/ChordCard";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState(
    categories.reduce((acc, cat) => ({ ...acc, [cat.id]: true }), {})
  );

  useEffect(() => {
    // Simulate loading time (can be adjusted or removed for real loading)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const expandAll = () => {
    setExpandedCategories(
      categories.reduce((acc, cat) => ({ ...acc, [cat.id]: true }), {})
    );
  };

  const collapseAll = () => {
    setExpandedCategories(
      categories.reduce((acc, cat) => ({ ...acc, [cat.id]: false }), {})
    );
  };

  // Filter chords based on search
  const filteredChords = searchQuery.trim()
    ? Object.values(chords)
        .flat()
        .filter((chord) =>
          chord.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    : null;

  return (
    <TooltipProvider>
      <div className={isDark ? "dark" : ""}>
        <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="min-h-screen bg-background text-foreground"
          >
            <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 pb-24">
              {/* Header */}
              <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="py-8 border-b border-border"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="/rockstar-face.png"
                      alt="Rockstar"
                      className="w-10 h-10 object-contain select-none"
                    />
                    <h1 className="font-bold font-newsreader text-2xl border-b-2 border-transparent hover:border-yellow-500 transition-colors cursor-default">
                      My Chords
                    </h1>
                  </div>

                  <div className="flex items-center gap-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={toggleTheme}
                          className="text-muted-foreground hover:text-yellow-500 hover:bg-transparent"
                        >
                          {isDark ? (
                            <Sun className="w-5 h-5" />
                          ) : (
                            <Moon className="w-5 h-5" />
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Toggle {isDark ? "light" : "dark"} mode</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </motion.header>

              {/* Search & Controls */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="py-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
              >
                <div className="relative w-full sm:w-80">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search chords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-secondary focus:border-yellow-500 focus:ring-yellow-500/20"
                  />
                </div>

                {!searchQuery && (
                  <div className="flex gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={expandAll}
                      className="text-muted-foreground hover:text-yellow-500 hover:bg-transparent font-newsreader italic"
                    >
                      Expand All
                    </Button>
                    <span className="text-muted-foreground">/</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={collapseAll}
                      className="text-muted-foreground hover:text-yellow-500 hover:bg-transparent font-newsreader italic"
                    >
                      Collapse All
                    </Button>
                  </div>
                )}
              </motion.div>

              {/* Content */}
              <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="py-4"
              >
                {searchQuery.trim() ? (
                  // Search Results
                  <div>
                    <h2 className="font-newsreader italic font-medium text-lg mb-4">
                      Search Results
                      <span className="text-muted-foreground text-sm not-italic font-inter ml-2">
                        ({filteredChords.length} found)
                      </span>
                    </h2>
                    {filteredChords.length > 0 ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {filteredChords.map((chord, index) => (
                          <ChordCard
                            key={chord.name}
                            chord={chord}
                            index={index}
                          />
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground font-inter">
                        No chords found matching "{searchQuery}"
                      </p>
                    )}
                  </div>
                ) : (
                  // Categories
                  categories.map((category) => (
                    <CategorySection
                      key={category.id}
                      category={category}
                      chords={chords[category.id] || []}
                      isExpanded={expandedCategories[category.id]}
                      onToggle={() => toggleCategory(category.id)}
                    />
                  ))
                )}
              </motion.main>

              {/* Footer */}
              <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-16 py-8 border-t border-border text-center"
              >
                <p className="text-muted-foreground text-sm font-inter">
                  <span className="font-newsreader italic">
                    Keep practicing!
                  </span>{" "}
                  🎸 Made with love for guitarists everywhere.
                </p>
              </motion.footer>
            </div>

            {/* Quick Navigation Dock */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Card className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-sm border-border rounded-full px-6 py-3 shadow-lg">
                <div className="flex items-center gap-4">
                  {categories.map((cat) => (
                    <Tooltip key={cat.id}>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setSearchQuery("");
                            // Expand the category first
                            setExpandedCategories((prev) => ({
                              ...prev,
                              [cat.id]: true,
                            }));
                            // Smooth scroll to the category section
                            setTimeout(() => {
                              const element = document.getElementById(
                                `category-${cat.id}`
                              );
                              if (element) {
                                element.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                              }
                            }, 100);
                          }}
                          className="text-xs text-muted-foreground hover:text-yellow-500 hover:bg-transparent font-inter px-2"
                        >
                          {cat.name.slice(0, 3)}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{cat.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </div>
    </TooltipProvider>
  );
}

export default App;
