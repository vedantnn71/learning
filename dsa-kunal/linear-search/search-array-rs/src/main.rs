fn main() {
    let nums = [1, 6, 9, 12, 69, 95, 25, 68];
    let target = 68;
    let ans = linear_search(&nums, target);

    println!("{}", ans);
}

// search in the array - return the index if item found
// else if item not found, return -1
fn linear_search(arr: &[i32], target: i32) -> i32 {
    if arr.len() == 0 {
        return -1;
    }

    let mut index = 0;

    for element in arr {
        index += 1;

        if *element == target {
            return index;
        }
    }

    return -1;
}
