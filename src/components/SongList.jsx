import React from "react";
import { motion } from "framer-motion";
import { Music, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SongList = ({ songs, onSelectSong, searchQuery, onSearchChange }) => {
  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search songs..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-secondary focus:border-yellow-500 focus:ring-yellow-500/20"
        />
      </div>

      {/* Song Grid */}
      {filteredSongs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSongs.map((song, index) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card
                className="h-full border-border md:hover:border-yellow-500 transition-all duration-300 cursor-pointer"
                onClick={() => onSelectSong(song)}
              >
                <CardContent className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center bg-card">
                      <Music className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-newsreader text-xl font-bold truncate">
                        {song.title}
                      </h3>
                      {song.artist && (
                        <p className="text-sm text-muted-foreground font-inter truncate">
                          {song.artist}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground font-inter">
                    {song.key && <span>Key: {song.key}</span>}
                    {song.tempo && <span>• {song.tempo}</span>}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <Card className="border-border">
          <CardContent className="p-12 text-center">
            <p className="text-muted-foreground font-inter">
              No songs found matching "{searchQuery}"
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SongList;

