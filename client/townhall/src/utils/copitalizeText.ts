export const capitalizeText = (string: string) => {
  const firstLetter = [...string][0].toUpperCase();
  const letters = [...string];
  letters.splice(0, 1);
  return [firstLetter, ...letters].join("");
};
