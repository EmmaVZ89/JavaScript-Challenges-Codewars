function bestMatch(ALAHLYGoals, zamalekGoals) {
  let min = ALAHLYGoals[0] - zamalekGoals[0];
  let zamaTemp = zamalekGoals[0];
  let result = 0;
  let diff = 0;

  for(let i = 0; i < ALAHLYGoals.length; i++) {
    diff = ALAHLYGoals[i] - zamalekGoals[i];
    if(diff < min) {
      min = diff;
      zamaTemp = zamalekGoals[i];
      result = i;
    } else if(diff === min && zamalekGoals[i] > zamaTemp) {
      min = diff;
      zamaTemp = zamalekGoals[i];
      result = i;
    }
  }
  return result;
}
