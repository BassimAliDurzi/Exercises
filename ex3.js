for (let year = 2014; year <= 2050; year++) {
  const date = new Date(year + "-01-01").toDateString();
  const day = date.substring(0, 3);
  if (day === "Sun") {
    console.log(year);
  }
}
