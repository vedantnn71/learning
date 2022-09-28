use password_generator::{generate_password, get_input, banner};

fn main() {
    banner(); // the most beautiful banner in the universe

    let strength = get_input();
    let password = generate_password(strength);

    println!("*Password*: {password}");
}
