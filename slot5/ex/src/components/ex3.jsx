export function Ex3(){
    const person = {
    name: "Nguyen Van A",
    address: {
      street: "123 Le Loi",
        // city is intentionally left out to demonstrate default value
    },
  };

  const {
    address: { street, city = "Unknown City" } = {},
  } = person;

  return (
    <div>
      <h2 >
        3. Destructuring object lồng nhau – lấy địa chỉ
      </h2>
     
        street: {street}
        {"\n"}city: {city}
     
    </div>
  );
}