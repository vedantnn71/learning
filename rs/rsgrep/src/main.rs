use lilgrep::{highlight, parse_config};
use std::env;
use std::fs;

fn main() {
    let args: Vec<String> = env::args().collect();
    let (query, file_path) = parse_config(&args);

    let contents = fs::read_to_string(file_path).expect("Whoopsis! unable to read the file :(");
    let mut lines: Vec<&str> = contents.split("\n").collect();

    let mut matched: Vec<Vec<usize>> = Vec::new();
    let mut matched_idx = 0;

    for line in &lines {
        match line.find(query) {
            None => continue,
            Some(mut idx) => {
                for chr in query.chars() {
                    let line_char = line.as_bytes()[idx] as char;

                    if line_char == chr {
                        idx += 1;

                        if line_char == query.as_bytes()[0] as char {
                            matched.push(vec![idx]);
                        }

                        if line_char == query.as_bytes()[query.len() - 1] as char {
                            matched[matched_idx].push(idx);
                            matched_idx += 1;
                        }
                    }
                }
            }
        };
    }

    lines.retain(|line| line.contains(query));
    
    let mut lines_to_log: Vec<String> = Vec::new();
    let mut prev_match: Vec<usize> = Vec::new();

    for m in &matched {
        for line in &lines {
            if &prev_match == m {
                break;
            }

            match line.get(m[0] - 1..m[1]) {
                Some(l) => {
                    lines_to_log.push(line.replace(l, &highlight(&String::from(l))));

                }
                None => {
                    continue;
                }
            }

            prev_match = m.to_vec();
        }
    }

    for line in lines_to_log {
        println!("{line}");
    }
}
