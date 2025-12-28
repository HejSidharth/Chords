import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  Search,
  Music,
  Guitar,
  Youtube,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { chords, categories, normalizeChord } from "./data/chords";
import { songs } from "./data/songs";
import CategorySection from "./components/CategorySection";
import ChordCard from "./components/ChordCard";
import LoadingScreen from "./components/LoadingScreen";
import SongList from "./components/SongList";
import SongViewer from "./components/SongViewer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [view, setView] = useState("chords"); // "chords" or "songs"
  const [selectedSong, setSelectedSong] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [songSearchQuery, setSongSearchQuery] = useState("");
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
        .map(normalizeChord)
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
                    <h1 className="font-bold font-newsreader text-2xl border-b-2 border-transparent md:hover:border-yellow-500 transition-colors cursor-default">
                      Strummm
                    </h1>
                  </div>

                  <div className="flex items-center gap-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={toggleTheme}
                          className="text-muted-foreground md:hover:text-yellow-500 md:hover:bg-transparent"
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

              {/* Navigation Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="pt-6 flex gap-2 border-b border-border"
              >
                <Button
                  variant="ghost"
                  onClick={() => {
                    setView("chords");
                    setSelectedSong(null);
                    setSearchQuery("");
                  }}
                  className={`font-newsreader ${
                    view === "chords"
                      ? "border-b-2 border-yellow-500 text-yellow-500"
                      : "border-b-2 border-transparent text-muted-foreground md:hover:text-yellow-500"
                  }`}
                >
                  <Guitar className="w-4 h-4 mr-2" />
                  Chords
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setView("songs");
                    setSearchQuery("");
                  }}
                  className={`font-newsreader ${
                    view === "songs"
                      ? "border-b-2 border-yellow-500 text-yellow-500"
                      : "border-b-2 border-transparent text-muted-foreground md:hover:text-yellow-500"
                  }`}
                >
                  <Music className="w-4 h-4 mr-2" />
                  Songs
                </Button>
              </motion.div>

              {/* Songs View */}
              {view === "songs" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="py-6"
                >
                  {selectedSong ? (
                    <div className="space-y-4">
                      <Button
                        variant="ghost"
                        onClick={() => setSelectedSong(null)}
                        className="text-muted-foreground md:hover:text-yellow-500 font-newsreader"
                      >
                        ← Back to Songs
                      </Button>
                      <SongViewer song={selectedSong} allChords={chords} />
                    </div>
                  ) : (
                    <SongList
                      songs={songs}
                      onSelectSong={setSelectedSong}
                      searchQuery={songSearchQuery}
                      onSearchChange={setSongSearchQuery}
                    />
                  )}
                </motion.div>
              )}

              {/* Chords View */}
              {view === "chords" && (
                <>
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
                          className="text-muted-foreground md:hover:text-yellow-500 md:hover:bg-transparent font-newsreader italic"
                        >
                          Expand All
                        </Button>
                        <span className="text-muted-foreground">/</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={collapseAll}
                          className="text-muted-foreground md:hover:text-yellow-500 md:hover:bg-transparent font-newsreader italic"
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
                </>
              )}

              {/* Footer */}
              {view === "chords" && (
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
              )}
            </div>

            {/* Quick Navigation Dock */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Card className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-sm border-border rounded-full px-6 py-3 shadow-lg">
                <div className="flex items-center gap-4">
                  {view === "songs" && selectedSong ? (
                    <>
                      {selectedSong.spotifyUrl && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                window.open(selectedSong.spotifyUrl, "_blank");
                              }}
                              className="text-muted-foreground md:hover:text-[#1DB954] md:hover:bg-transparent"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                              </svg>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Open on Spotify</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                      {selectedSong.youtubeUrl && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                window.open(selectedSong.youtubeUrl, "_blank");
                              }}
                              className="text-muted-foreground md:hover:text-[#FF0000] md:hover:bg-transparent"
                            >
                              <Youtube className="w-5 h-5" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Watch Tutorial</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </>
                  ) : (
                    categories.map((cat) => (
                      <Tooltip key={cat.id}>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setView("chords");
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
                            className="text-xs text-muted-foreground md:hover:text-yellow-500 md:hover:bg-transparent font-inter px-2"
                          >
                            {cat.name.slice(0, 3)}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{cat.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))
                  )}
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
