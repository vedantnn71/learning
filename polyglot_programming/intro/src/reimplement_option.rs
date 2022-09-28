enum Option2<T> {
    None,
    Some(T)
}

impl<T> Option2<T> {
    fn is_some(&self) -> {
        return match self {
            Option2::None => false,
            Option2::Some(_) => true,
        };
    }
}

fn main() {
    let foo = Option2::Some("HEYY");

    if foo.is_some() {
        let value = foo.unwrap();

        println!("{value}");
    }
}
