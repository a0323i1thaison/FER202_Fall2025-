export function Ex2() {
    const intArray = [1, 2, 3, 4, 5 , -1, -2, -3];
    const nameArray = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
    const people = [
        { id: 1 ,name: 'Alice', age: 10 },
        { id: 2 ,name: 'Bob', age: 20 },
        { id: 3 ,name: 'Charlie', age: 30 },
        { id: 4 ,name: 'David', age: 18 },
        { id: 5 ,name: 'Eve', age: 16 },
      
    ];
    const sum = intArray.reduce((acc, curr) => acc + curr, 0);
    const isTeen = people=> people.filter(person => person.age >= 13 && person.age <= 19);
        return (
        <div>
            <ul>
                <h3> in ra các phần tử trong mảng   </h3>
            {intArray.map((num, index) => (
                <p key={index}>{num}</p>
            ))}
            </ul>
            <ul><h3> tổng các phần tử trong mảng  : <strong>{sum}</strong> </h3></ul>
            <ul><h3> Số lượng các phần tử trong mảng : {intArray.length} </h3></ul>
            <ul>
                <h3> hiển thị danh sách tên tăng dần </h3>
                {nameArray.sort().map((name, index) => (
                <p key={index}>{name}</p>
            ))}
            </ul>
            <ul>
                <h3> hiển thị danh sách tuổi từ 13 đến 19 </h3>
                {isTeen(people).map((person) => (
                <p key={person.id}>{person.name} - {person.age}</p>
            ))}
            <h3>số người có tuổi từ 13 đến 19 </h3>
            {isTeen(people).length}
            <h3> tuổi trung bình trong people </h3>
            { (people.reduce((acc, person) => acc + person.age, 0) / people.length).toFixed(2)}
            
            </ul>
        </div>
        );
}