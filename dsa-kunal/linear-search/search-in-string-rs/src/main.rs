fn main() {
    let string = "Vedant";
    let character = 'n';
    let answer = search(&string, character);

    println!("{}", answer);
}

// search a character in a string
fn search(string: &str, character: char) -> bool {
    for element in string.chars() {
        if element == character {
            return true;
        }
    }

    return false;
}