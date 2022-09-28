pub fn highlight(string: &String) -> String {
    // println!("#### {string} ####");
    return String::from("\x1b[93m".to_owned() + string + "\x1b[0m");
}

pub fn parse_config(args: &[String]) -> (&str, &str) {
    let query = &args[1];
    let file_path = &args[2];

    return (query, file_path);
}
