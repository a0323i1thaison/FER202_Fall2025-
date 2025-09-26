export function Ex5() {
  const people = [
    { name: "Jack", age: 50 },
    { name: "Michael", age: 13 },
    { name: "John", age: 17 },
    { name: "Ann", age: 19 },
    { name: "Elisabeth", age: 16 },
  ];

  const teens = people
    .filter((p) => p.age >= 13 && p.age <= 19)
    .map((p) => `${p.name} (${p.age})`);

  return (
    <div>
      <h2>5. Map + filter – danh sách teen</h2>
      <pre>
        {teens.map((t, i) => `${t}\n`)}
      </pre>
    </div>
  );
}