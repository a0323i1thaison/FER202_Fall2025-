export function Ex1() {
    const double = (num) => num * 2;
    const isPositive = (num) => num > 0;
    return (
        <div>
            <h3> Hàm nhân đôi </h3>
            <p> double(5) = {double(5)} </p>
            <p>isPositive ̣(3) = {isPositive(3).toString()} </p>
        </div>
    );}