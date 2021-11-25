/* import { createSelector } from "reselect";

const selectTeaLibrary = (state) => state.teaLibrary;

export const selectTeaGrades = createSelector(
  [selectTeaLibrary],
  (grades) => grades.teaGrades
);

export const selectTeaCollection = createSelector(
  [selectTeaGrades],
  (teaGrades) =>
    teaGrades
      ? Object.keys(teaGrades).map((collection) => teaGrades[collection])
      : []
);

export const selectUiData = createSelector(
  [selectTeaLibrary],
  (uiData) => uiData.teaPadUiData
);

export const selectTeaGradesName = createSelector([selectTeaGrades], (grades) =>
  Object.keys(grades).map((grade) => {
    return {
      gradeValue: grade,
      gradeName: grades[grade].grade,
    };
  })
);
 */