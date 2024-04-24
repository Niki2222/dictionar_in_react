
let a = 2;
let b = 5;
let response = parseFloat(prompt(`what is the answer of ${a} + ${b}?`));
let bg = 'green';
let text = 'correct answer';

if (response !== a + b) {
    text = 'incorrect answer';
    bg = 'red';
}

let fill = <div style={{backgroundColor: bg, color: 'white'}}>{text}</div>

export function SearchWord() {
    return (
        fill
    );
}