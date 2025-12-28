import React from 'react';

const ChordDiagram = ({ chord, size = 'normal' }) => {
  // Scale factor for large size
  const scale = size === 'large' ? 2.5 : 1;
  
  const width = 100 * scale;
  const height = 120 * scale;
  const stringSpacing = 14 * scale;
  const fretSpacing = 22 * scale;
  const startX = 20 * scale;
  const startY = 25 * scale;
  const numFrets = 4;
  const numStrings = 6;
  
  // Calculate the minimum fret (for position indicator)
  const playedFrets = chord.frets.filter(f => f > 0);
  const minFret = playedFrets.length > 0 ? Math.min(...playedFrets) : 1;
  const maxFret = playedFrets.length > 0 ? Math.max(...playedFrets) : 1;
  
  // Determine if we need to show position indicator (when starting above fret 1)
  const showPosition = minFret > 1 && (maxFret - minFret) < numFrets;
  const baseFret = showPosition ? minFret : 1;
  
  // Check if this is a nut position (open chord at first position)
  const isNutPosition = baseFret === 1;

  // Build a map of (stringIndex, fret) -> finger number
  const fingerMap = new Map();
  if (chord.fingers && Array.isArray(chord.fingers)) {
    chord.fingers.forEach(([stringIndex, fret, fingerNumber]) => {
      // stringIndex in fingers array is 0-based (0 = low E, 5 = high e)
      // This matches the frets array indexing
      fingerMap.set(`${stringIndex}-${fret}`, fingerNumber);
    });
  }
  
  // Debug: log the finger map to verify it's working
  // console.log('Finger map for', chord.name, fingerMap);

  return (
    <svg 
      viewBox={`0 0 ${width} ${height}`} 
      className={size === 'large' ? "w-full h-auto max-w-[250px]" : "w-full h-auto max-w-[100px]"}
      style={{ color: 'hsl(var(--foreground))' }}
    >
      {/* Fret position indicator */}
      {showPosition && (
        <text
          x={startX - 14 * scale}
          y={startY + fretSpacing / 2 + 4 * scale}
          className="fill-muted-foreground"
          fontSize={9 * scale}
          textAnchor="middle"
        >
          {baseFret}
        </text>
      )}
      
      {/* Nut (thick line at top) or regular fret line */}
      {isNutPosition ? (
        <line
          x1={startX}
          y1={startY}
          x2={startX + (numStrings - 1) * stringSpacing}
          y2={startY}
          className="nut-line"
        />
      ) : (
        <line
          x1={startX}
          y1={startY}
          x2={startX + (numStrings - 1) * stringSpacing}
          y2={startY}
          className="fret-line"
        />
      )}
      
      {/* Fret lines */}
      {[...Array(numFrets)].map((_, i) => (
        <line
          key={`fret-${i}`}
          x1={startX}
          y1={startY + (i + 1) * fretSpacing}
          x2={startX + (numStrings - 1) * stringSpacing}
          y2={startY + (i + 1) * fretSpacing}
          className="fret-line"
        />
      ))}
      
      {/* String lines */}
      {[...Array(numStrings)].map((_, i) => (
        <line
          key={`string-${i}`}
          x1={startX + i * stringSpacing}
          y1={startY}
          x2={startX + i * stringSpacing}
          y2={startY + numFrets * fretSpacing}
          className="string-line"
        />
      ))}
      
      {/* Barre if present */}
      {chord.barre && (
        <line
          x1={startX + chord.barre.startString * stringSpacing}
          y1={startY + (chord.barre.fret - baseFret + 0.5) * fretSpacing}
          x2={startX + chord.barre.endString * stringSpacing}
          y2={startY + (chord.barre.fret - baseFret + 0.5) * fretSpacing}
          className="barre-line"
        />
      )}
      
      {/* Finger positions with numbers */}
      {chord.frets.map((fret, stringIndex) => {
        if (fret > 0) {
          const adjustedFret = fret - baseFret + 1;
          const cx = startX + stringIndex * stringSpacing;
          const cy = startY + (adjustedFret - 0.5) * fretSpacing;
          const radius = 6 * scale; // Slightly larger to accommodate numbers
          
          // Get finger number from map
          const fingerNumber = fingerMap.get(`${stringIndex}-${fret}`);
          
          // Don't draw dots for barre positions that are covered by the barre line
          // But still show finger number if it's different from barre finger
          if (chord.barre && fret === chord.barre.fret && 
              stringIndex >= chord.barre.startString && 
              stringIndex <= chord.barre.endString) {
            // For barre, show finger number if it's specified and different from index (1)
            if (fingerNumber && fingerNumber !== 1) {
              return (
                <g key={`finger-${stringIndex}`}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r={radius}
                    className="finger-dot"
                    fill="white"
                    stroke="currentColor"
                    strokeWidth={1.5 * scale}
                  />
                  <text
                    x={cx}
                    y={cy}
                    fill="#1a1a1a"
                    fontSize={9 * scale}
                    fontWeight="bold"
                    textAnchor="middle"
                    dominantBaseline="central"
                  >
                    {fingerNumber}
                  </text>
                </g>
              );
            }
            return null;
          }
          
          return (
            <g key={`finger-${stringIndex}`}>
              <circle
                cx={cx}
                cy={cy}
                r={radius}
                className="finger-dot"
                fill="white"
                stroke="currentColor"
                strokeWidth={1.5 * scale}
              />
              {fingerNumber && (
                <text
                  x={cx}
                  y={cy}
                  fill="#1a1a1a"
                  fontSize={9 * scale}
                  fontWeight="bold"
                  textAnchor="middle"
                  dominantBaseline="central"
                >
                  {fingerNumber}
                </text>
              )}
            </g>
          );
        }
        return null;
      })}
      
      {/* Open strings and muted strings indicators */}
      {chord.frets.map((fret, stringIndex) => {
        const x = startX + stringIndex * stringSpacing;
        const y = startY - 10 * scale;
        
        if (fret === 0) {
          // Open string (circle)
          return (
            <circle
              key={`open-${stringIndex}`}
              cx={x}
              cy={y}
              r={4 * scale}
              className="open-string"
            />
          );
        } else if (fret === -1) {
          // Muted string (X)
          return (
            <g key={`muted-${stringIndex}`}>
              <line
                x1={x - 3 * scale}
                y1={y - 3 * scale}
                x2={x + 3 * scale}
                y2={y + 3 * scale}
                className="muted-string"
              />
              <line
                x1={x + 3 * scale}
                y1={y - 3 * scale}
                x2={x - 3 * scale}
                y2={y + 3 * scale}
                className="muted-string"
              />
            </g>
          );
        }
        return null;
      })}
    </svg>
  );
};

export default ChordDiagram;

