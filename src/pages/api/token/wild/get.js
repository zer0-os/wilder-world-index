export default async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", `s-maxage=${60 * 60 * 12}, stale-while-revalidate`);

  if (!req.query.q) {
    return res.status(403).send("Invalid parameters");
  }

  if (req.query.q === "totalSupply") {
    return res.status(200).send("500000000.000000000000000000");
  } else if (req.query.q === "circulatingSupply") {
    return await fetch("https://sheetdb.io/api/v1/mahae67q9x371")
      .then((e) => e.json())
      .then((e) => {
        return res.status(200).send(Number(e[9]["Vested"].split(",").join("")).toFixed(18).toString());
      });
  }

  return res.status(403).send("Invalid query");
};
