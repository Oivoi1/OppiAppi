import {saveDataToStorage} from './GeneralFunctions'
import {APP_TROPHIES_STORAGE_KEY, APP_WEEKS_STORAGE_KEY} from '../data/data'

// Function for study week state updating and saving to Asyncstorage
export const handleSetStudyWeeksAdd = (setStudyWeeks, studyWeeks) => {
  // Maybe add toast or alert that study weeks are complete?

  studyWeeks === 38 ? null : setStudyWeeks(studyWeeks + 1);
  studyWeeks === 38 ? null : saveDataToStorage(APP_WEEKS_STORAGE_KEY, studyWeeks + 1)
};
export const handleSetStudyWeeksSubstrack = (setStudyWeeks, studyWeeks) => {
  studyWeeks === 0 ? null : setStudyWeeks(studyWeeks - 1);
  studyWeeks === 0 ? null : saveDataToStorage(APP_WEEKS_STORAGE_KEY, studyWeeks - 1)
};

// Function for trophies state updating and saving to Asyncstorage
export const handleSetTrophiesAdd = (setTrophies, trophies) => {
  setTrophies(trophies + 1);
  saveDataToStorage(APP_TROPHIES_STORAGE_KEY, trophies + 1)
};
export const handleSetTrophiesSubstract = (setTrophies, trophies) => {
  setTrophies(trophies - 1);
  saveDataToStorage(APP_TROPHIES_STORAGE_KEY, trophies - 1)
};

