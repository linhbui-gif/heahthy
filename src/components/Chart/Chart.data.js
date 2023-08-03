const data = [];

for (let i = 1; i <= 12; i++) {
  const year = i.toString();
  const value = Math.floor(Math.random() * 1001);
  const category = Math.random() < 0.5 ? 'Gas fuel' : 'Cement production';
  data.push({ year, value, category });
}
export const DataTest = data;
