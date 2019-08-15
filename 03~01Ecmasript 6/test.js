function factorial(n, p = 1) {
  if (n <= 1) {
    return 1 * p;
  } else {
    let result = n * p;

    // optimized
    return factorial(n - 1, result);
  }
}
