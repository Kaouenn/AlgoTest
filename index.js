const graph = [
  {
    0: [{ id: 5, letter: "A" }, { id: 1, letter: "B" }, { id: 4, letter: "E" }]
  },
  {
    1: [{ id: 0, letter: "A" }, { id: 6, letter: "B" }, { id: 2, letter: "C" }]
  },
  {
    2: [{ id: 1, letter: "B" }, { id: 7, letter: "C" }, { id: 3, letter: "D" }]
  },
  {
    3: [{ id: 2, letter: "C" }, { id: 8, letter: "D" }, { id: 4, letter: "E" }]
  },
  {
    4: [{ id: 3, letter: "D" }, { id: 9, letter: "E" }, { id: 0, letter: "A" }]
  },
  {
    5: [{ id: 0, letter: "A" }, { id: 7, letter: "C" }, { id: 8, letter: "D" }]
  },
  {
    6: [{ id: 1, letter: "B" }, { id: 8, letter: "D" }, { id: 9, letter: "E" }]
  },
  {
    7: [{ id: 2, letter: "C" }, { id: 5, letter: "A" }, { id: 9, letter: "E" }]
  },
  {
    8: [{ id: 3, letter: "D" }, { id: 6, letter: "B" }, { id: 5, letter: "A" }]
  },
  {
    9: [{ id: 4, letter: "E" }, { id: 7, letter: "C" }, { id: 6, letter: "B" }]
  }
];

const dico = { A: [0, 5], B: [1, 6], C: [2, 7], D: [3, 8], E: [4, 9] };

algoTest = string => {
  let sequenceToClearOut = string.split("");
  let sequenceToFill = [];
  ///////////////////////////////////////////////////////////////////// Starting while Loop
  while (sequenceToClearOut.length > 0) {
    let letterToTest = sequenceToClearOut.shift();
    let secondLetter = sequenceToClearOut[0];

    getInDico = letterToTest => {
      const keys = Object.keys(dico);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]; // `A`,`B`
        if (key === letterToTest) {
          graph.forEach(node => {
            const obectName = Object.keys(node);
            const tabParent = Object.values(node);

            tabParent[0].forEach(element => {
              if ((dico[key][0] || dico[key][1]) === parseInt(obectName)) {
                if (element.letter === secondLetter) {
                  if (sequenceToFill.length === 0) {
                    return sequenceToFill.push(parseInt(obectName), element.id);
                  } else {
                    return sequenceToFill.push(element.id);
                  }
                }
              }
            });
          });
        }
      }
    };
    getInDico(letterToTest);
  }

  let finalSequenceToFill = sequenceToFill.join("");
  if (finalSequenceToFill.length !== string.length) {
    return "-1";
  } else {
    return finalSequenceToFill;
  }
};

console.log(algoTest("AADDCBA"));
console.log(algoTest("ABBECCD"));
console.log(algoTest("DDC"));
console.log(algoTest("ABB"));
console.log(algoTest("BEEA"));
console.log(algoTest("DDCC"));
