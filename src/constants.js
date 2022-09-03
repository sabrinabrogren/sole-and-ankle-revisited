export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

const BREAKPOINTS = {
  phoneMax: "37.5rem",
  tabletMax: "59.375rem",
  laptopMax: "81.25rem",
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phoneMax})`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tabletMax})`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptopMax})`,
};
