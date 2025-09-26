export function Ex4() {
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  const [first, , third = 0, ...restAges] = ages;

  return (
    <div>
      <h2>4. Destructuring array + skip + default</h2>
      <pre>
        first: {first}
        {"\n"}third: {third}
        {"\n"}restAges: [{restAges.join(", ")}]
      </pre>
    </div>
  );
}
