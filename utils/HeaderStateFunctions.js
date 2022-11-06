// Funktio opiskeluviikkojen päivitystä varten
export const handleSetStudyWeeks = (setStudyWeeks, studyWeeks) => {
  // Voisko tähän lisätä toasteri tai alerti, että on maksimi/ kaikki viikot tehty?
  studyWeeks === 38 ? null : setStudyWeeks(studyWeeks + 1);
};

// Funktio palkinto päivitystä varten
export const handleSetTrophies = (setTrophies, trophies) => {
  setTrophies(trophies + 1);
};
