// Function for study week state updating
export const handleSetStudyWeeksAdd = (setStudyWeeks, studyWeeks) => {
  // Maybe add toast or alert that study weeks are complete?

  studyWeeks === 38 ? null : setStudyWeeks(studyWeeks + 1);
};
export const handleSetStudyWeeksSubstrack = (setStudyWeeks, studyWeeks) => {
  studyWeeks === 8 ? null : setStudyWeeks(studyWeeks - 1);
};

// Function for trophies state updating
export const handleSetTrophiesAdd = (setTrophies, trophies) => {
  setTrophies(trophies + 1);
};
export const handleSetTrophiesSubstract = (setTrophies, trophies) => {
  setTrophies(trophies - 1);
};
