const output = document.getElementById("output");

const loadingRow = document.createElement("tr");
loadingRow.id = "loading";
loadingRow.innerHTML = `<td colspan="2">Loading...</td>`;
output.appendChild(loadingRow);

  const promise1 = new Promise((resolve) => {
  const time = Math.random() * 2 + 1; 
  setTimeout(() => resolve({ name: "Promise 1", time }), time * 1000);
});

const promise2 = new Promise((resolve) => {
  const time = Math.random() * 2 + 1; 
  setTimeout(() => resolve({ name: "Promise 2", time }), time * 1000);
});

const promise3 = new Promise((resolve) => {
  const time = Math.random() * 2 + 1; 
  setTimeout(() => resolve({ name: "Promise 3", time }), time * 1000);
});

const startTime = performance.now();

Promise.all([promise1, promise2, promise3]).then((results) => {
  const totalTime = (performance.now() - startTime) / 1000;

  const loadingRow = document.getElementById("loading");
  if (loadingRow) loadingRow.remove();

  results.forEach((result) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${result.name}</td><td>${result.time.toFixed(3)}</td>`;
    output.appendChild(row);
  });

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `<td>Total</td><td>${totalTime.toFixed(3)}</td>`;
  output.appendChild(totalRow);
});
