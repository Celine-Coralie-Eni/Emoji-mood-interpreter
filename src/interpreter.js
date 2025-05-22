/**
 * Calculates the mood score based on emojis
 * @param {string[]} emojis - Array of emojis representing moods
 * @returns {number} Total mood score
 * @throws {Error} If unknown emoji is encountered or input is invalid
 */
export function interpretMood(emojis) {
  const emojiScores = {
    "😀": 2,
    "😐": 0,
    "😞": -2,
    "😡": -3,
    "🤩": 3,
    "🫤": -1,
  };

  if (!Array.isArray(emojis)) {
    throw new TypeError("Input must be an array");
  }

  let totalScore = 0;
  for (const emoji of emojis) {
    if (typeof emoji !== "string") {
      throw new TypeError("Each emoji must be a string");
    }
    if (!(emoji in emojiScores)) {
      throw new Error(`Unknown emoji: ${emoji}`);
    }
    totalScore += emojiScores[emoji];
  }

  return totalScore;
    
}

// module.exports = { interpretMood };
