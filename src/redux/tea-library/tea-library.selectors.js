import { createSelector } from "reselect";

const selectTeaLibrary = (state) => state.teaLibrary;

export const selectTea = createSelector(
  [selectTeaLibrary],
  (grades) => grades.teaGrades
);

export const selectTeaCollection = createSelector([selectTea], (collections) =>
  collections
    ? Object.keys(collections).map((collection) => collections[collection])
    : []
);

export const selectUiData = createSelector(
  [selectTeaLibrary],
  (uiData) => uiData.teaPadUiData
);

export const selectTeaGradesName = createSelector([selectTea], (grades) =>
  Object.keys(grades).map((grade) => {
    return {
      gradeValue: grade,
      gradeName: grades[grade].grade,
    };
  })
);
