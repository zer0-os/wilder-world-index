export default async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=2592000, stale-while-revalidate");

  if (!req.query.q) {
    return res.status(403).send("Invalid parameters");
  }

  if (req.query.q === "totalSupply") {
    return res.status(200).send("500000000.000000000000000000");
  } else if (req.query.q === "circulatingSupply") {
    return res.status(200).send("19000000.000000000000000000");
  }

  return res.status(403).send("Invalid query");
};
