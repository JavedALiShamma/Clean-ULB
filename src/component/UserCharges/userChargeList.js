const categories = ['Door to Door', 'C&D Waste Collection', 'Faecal Sludge Collection'];
const names = ['Amit', 'Sunita', 'Ravi', 'Meena', 'Farhan', 'Pooja', 'Jatin', 'Sneha', 'Ramesh', 'Kiran'];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const streets = ['Main Rd', 'Station Rd', 'MG Marg', 'Civil Lines', 'Market Street', 'Gandhi Nagar', 'Ashok Vihar'];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomAmount() {
  const amounts = [25, 50, 100, 150, 500, 1500, 1700];
  return getRandomItem(amounts);
}

function getRandomDate(year) {
  const monthIndex = Math.floor(Math.random() * 12);
  const day = Math.floor(Math.random() * 28) + 1;
  const hour = Math.floor(Math.random() * 24);
  const minute = Math.floor(Math.random() * 60);
  const date = new Date(year, monthIndex, day, hour, minute);
  return {
    dateTime: date.toISOString(),
    month: months[monthIndex],
    year: date.getFullYear()
  };
}

function generateAddress() {
  const houseNo = Math.floor(Math.random() * 200) + 1;
  const street = getRandomItem(streets);
  return `House No. ${houseNo}, ${street}, Bikaner`;
}

const municipalityCharges = Array.from({ length: 100 }, (_, i) => {
  const year = 2022 + Math.floor(Math.random() * 4); // 2022–2025
  const dateInfo = getRandomDate(year);

  return {
    name: getRandomItem(names),
    paymentId: `PMT${1000 + i}`,
    amount: getRandomAmount(),
    category: getRandomItem(categories),
    date: dateInfo.dateTime,
    month: dateInfo.month,
    year: dateInfo.year,
    address: generateAddress(),
    wardNo: Math.floor(Math.random() * 30) + 1 // Ward 1–30
  };
});

export default municipalityCharges;
