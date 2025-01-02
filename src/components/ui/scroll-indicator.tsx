import React, { useEffect, useState } from 'react';

// Define the type for the arrow's visual pattern matrix
// 0 represents empty space, 1 represents a square that should be rendered
type ArrowPattern = readonly (0 | 1)[][];

// Define the type for the animation sequence
// Array of indices representing which row should be active at each step
type AnimationPattern = readonly number[];

// Visual representation of the downward-pointing arrow
// Each array represents a row, and each number represents a cell
const ARROW_PATTERN: ArrowPattern = [
  [0, 0, 0, 0, 0], // Top of arrow (stem)
  [0, 0, 1, 0, 0], // Stem
  [0, 0, 1, 0, 0], // Stem
  [0, 0, 1, 0, 0], // Start of arrow head
  [0, 1, 1, 1, 0], // Middle of arrow head
  [0, 0, 1, 0, 0], // Tip of arrow
] as const;

// Sequence of row indices for the animation
// Controls which row lights up in sequence
const ANIMATION_PATTERN: AnimationPattern = [0, 1, 2, 3, 4, 5, 6, 7, 8] as const;

// Animation configuration constants
const ANIMATION_INTERVAL = 400; // Duration between animation steps in milliseconds
const GRID_ROWS = 6; // Total number of rows in the grid
const GRID_COLS = 5; // Total number of columns in the grid

// Props interface for the individual square component
interface SquareProps {
  isActive: boolean; // Whether the square should be highlighted
}

// Component for rendering individual squares in the arrow
const Square: React.FC<SquareProps> = ({ isActive }) => (
  <div
    className={`w-2 h-2 border border-gray-400 rounded-sm transition-all duration-300 ${isActive ? 'bg-blue-500 border-blue-500' : 'bg-transparent'
      }`}
  />
);

// Main component for the scrolling indicator
const ScrollIndicator: React.FC = () => {
  // State to track which squares should be highlighted
  const [activeSquares, setActiveSquares] = useState<number[]>([0]);

  // Set up the animation effect
  useEffect(() => {
    let currentIndex = 0;

    // Create an interval that cycles through the animation pattern
    const interval = setInterval(() => {
      // Update the current index, wrapping around to 0 when reaching the end
      currentIndex = (currentIndex + 1) % ANIMATION_PATTERN.length;
      // Update state with the new active row
      setActiveSquares([ANIMATION_PATTERN[currentIndex]]);
    }, ANIMATION_INTERVAL);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Helper function to determine if a square should be rendered at a given position
  const shouldRenderSquare = (row: number, col: number): boolean => {
    return ARROW_PATTERN[row][col] === 1;
  };

  return (
    // Container for the entire arrow indicator
    <div className="fixed bottom-16 right-16 flex flex-col gap-2">
      {/* Create rows for the grid */}
      {[...Array(GRID_ROWS)].map((_, row) => (
        <div key={row} className="flex gap-2 justify-center">
          {/* Create columns for each row */}
          {[...Array(GRID_COLS)].map((_, col) => (
            <React.Fragment key={`${row}-${col}`}>
              {shouldRenderSquare(row, col) ? (
                // Render an animated square if the pattern calls for it
                <Square isActive={activeSquares.includes(row)} />
              ) : (
                // Render an empty space to maintain grid structure
                <div className="w-2 h-2" />
              )}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ScrollIndicator;