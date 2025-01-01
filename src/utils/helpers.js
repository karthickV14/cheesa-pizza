export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}

// export function formatCurrency(value) {
//   return new Intl.NumberFormat("en", {
//     style: "currency",
//     currency: "EUR",
//   }).format(value);
// }

// export function formatDate(dateStr) {
//   const date = new Date(dateStr);
//   if (isNaN(date)) {
//     console.error("Invalid date input:", dateStr);
//     return "Invalid date";
//   }
//   return new Intl.DateTimeFormat("en", {
//     day: "numeric",
//     month: "short",
//     hour: "2-digit",
//     minute: "2-digit",
//   }).format(date);
// }

// export function calcMinutesLeft(dateStr) {
//   const d2 = new Date(dateStr);
//   if (isNaN(d2)) {
//     console.error("Invalid date input for calcMinutesLeft:", dateStr);
//     return NaN;
//   }
//   const d1 = new Date().getTime();
//   return Math.round((d2.getTime() - d1) / 60000);
// }
