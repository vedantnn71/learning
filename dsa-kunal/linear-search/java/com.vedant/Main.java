public class Main {
  public static void main(String[] args) {
    int[] nums = { 24, 45, 64, 62, 919, 99 };
    int target = 91;
    int ans = linearSearch(nums, target);

    System.out.println(ans);
  }

  // search in the array - return the index if item found
  // else if item not found, return -1
  static int linearSearch(int[] arr, int target) {
    if (arr.length == 0) {
      return -1;
    }

    for (int i = 0; i < arr.length; i++) {
      // check for element at every index if it's equal to target

      int element = arr[i];

      if (element == target) {
        return i;
      }
    }

    return -1;
  }
}
