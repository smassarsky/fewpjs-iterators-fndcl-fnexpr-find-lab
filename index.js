const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  const winningSeason = record.find(seasonObj => seasonObj.result === "W")
  if (winningSeason) {
    return winningSeason.year
  }
}