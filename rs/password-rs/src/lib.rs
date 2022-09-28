use rand::distributions::Alphanumeric;
use rand::{thread_rng, Rng};
use std::io;

pub fn generate_password(strength: usize) -> String {
    return thread_rng()
        .sample_iter(&Alphanumeric)
        .take(strength)
        .map(char::from)
        .collect();
}

pub fn get_input() -> usize {
    let mut input = String::new();

    io::stdin()
        .read_line(&mut input)
        .expect("Failed to get strength");

    let input = input.trim();

    if input == "" {
        return 8;
    }

    let input: usize = input.parse().expect("Please enter an valid number");

    return input;
}

pub fn banner() {
    print!(
        r"
_
_ __   __ _ ___ _____      _____  _ __ __| |  _ __ ___
| '_ \ / _` / __/ __\ \ /\ / / _ \| '__/ _` | | '__/ __|
| |_) | (_| \__ \__ \\ V  V / (_) | | | (_| |_| |  \__ \
| .__/ \__,_|___/___/ \_/\_/ \___/|_|  \__,_(_)_|  |___/
|_|

// password generator written in our beloved language, rust.
// what's your desired password strength? (default 8) 🖗
"
    );
}
