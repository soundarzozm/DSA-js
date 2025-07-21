function rankTeams(votes: string[]): string {
  if (votes.length === 0) {
    return "";
  }

  let n = votes[0].length; // Number of ranks/positions
  const teamCounts = new Map<string, number[]>(); // Map to store vote counts for each team

  // Initialize teamCounts for all teams present in the first vote
  for (const teamChar of votes[0]) {
    teamCounts.set(teamChar, new Array(n).fill(0));
  }

  // Populate teamCounts with vote data
  for (const vote of votes) {
    for (let j = 0; j < n; ++j) {
      const teamChar = vote[j];
      if (teamCounts.has(teamChar)) {
        // Ensure the team exists in our map
        teamCounts.get(teamChar)![j]++;
      }
    }
  }

  // Convert map to an array of [teamChar, voteCounts[]] for sorting
  let teams: [string, number[]][] = Array.from(teamCounts.entries());

  // Custom sort function
  teams.sort((a, b) => {
    const teamA = a[0]; // Team character for A
    const countsA = a[1]; // Vote counts for A
    const teamB = b[0]; // Team character for B
    const countsB = b[1]; // Vote counts for B

    // Compare vote counts at each position
    for (let i = 0; i < n; ++i) {
      if (countsA[i] !== countsB[i]) {
        // If counts are different, the one with more votes at this position comes first
        return countsB[i] - countsA[i];
      }
    }

    // If all vote counts are the same, sort alphabetically
    return teamA.charCodeAt(0) - teamB.charCodeAt(0);
  });

  // Construct the result string
  let result = "";
  for (const [teamChar, _] of teams) {
    result += teamChar;
  }

  return result;
}

let votes = ["WXYZ", "XYZW"];
console.log(rankTeams(votes));
