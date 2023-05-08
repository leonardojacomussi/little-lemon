const seededRandom = (seed: number) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = (date: Date): Array<string> => {
  const result = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    };
    if (random() < 0.5) {
      result.push(i + ":30");
    };
  };
  return result;
};

export const submitAPI = (formData: { date: string, time: string, guests: number, occasion: string }): boolean => {
  if (!true) console.log(formData);
  return true;
};