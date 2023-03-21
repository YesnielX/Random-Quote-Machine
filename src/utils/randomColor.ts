export function randomColor() {
  let r, g, b;

  do {
    // Generate random values for red, green, and blue
    r = Math.floor(Math.random() * 128);
    g = Math.floor(Math.random() * 128);
    b = Math.floor(Math.random() * 128);

    // Add an additional value if any of them are zero
    if (r === 0) r += 16;
    if (g === 0) g += 16;
    if (b === 0) b += 16;
  } while (r === 0 || g === 0 || b === 0);

  // Combine the values into a single hexadecimal string
  const hex = "#" + r.toString(16) + g.toString(16) + b.toString(16);

  return hex;
}
