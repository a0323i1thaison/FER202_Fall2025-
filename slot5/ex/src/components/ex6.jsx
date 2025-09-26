export function Ex6() {
  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
  ];

  // sort theo năm kết thúc tăng dần
  const companiesSortedByEnd = [...companies].sort((a, b) => a.end - b.end);
  // lấy top 3
  const top3 = companiesSortedByEnd.slice(0, 3);

  return (
    <div>
        <h2>
        6. Sort + Slice – Top 3 doanh nghiệp theo năm kết thúc sớm nhất
      </h2>
      <ul className="list-disc pl-6">
        {top3.map((c) => (
          <li key={c.name}>
            <span className="font-medium">{c.name}</span> – {c.category} (
            {c.start} → {c.end})
          </li>
        ))}
      </ul>
    </div>
  );
}