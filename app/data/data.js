const stored = [
  { text: "Nice", status: true },
  { text: "Great", status: true },
  { text: "Amazing", status: false },
];

export const sentence = stored.filter((data) => data.status === true);
