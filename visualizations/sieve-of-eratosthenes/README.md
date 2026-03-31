# Sieve of Eratosthenes

## Algorithm

The Sieve of Eratosthenes is an ancient algorithm for finding all prime numbers up to a given limit N.

1. Create a list of consecutive integers from 2 to N
2. Start with the first prime number, p = 2
3. Mark all multiples of p (starting from p²) as composite
4. Find the next unmarked number greater than p — this is the next prime
5. Repeat from step 3 until p² > N
6. All remaining unmarked numbers are prime

The key optimization is starting the sweep from p² because all smaller multiples have already been marked by smaller primes.

## Complexity

- **Time:** O(n log log n) — nearly linear, one of the most efficient prime generation algorithms
- **Space:** O(n) — one boolean per number

## Key Insight

We only need to check primes up to √N. Any composite number ≤ N must have at least one prime factor ≤ √N. This dramatically reduces the work needed.

The prime counting function π(n) ≈ n/ln(n) gives an approximation of how many primes exist below n. The visualization shows both the actual count and this approximation.

## How to Use

- **Play/Pause**: Start or stop the automatic animation
- **Step**: Advance one step at a time (mark one composite or move to next prime)
- **Reset**: Clear and restart from scratch
- **Speed**: Adjust animation delay (1-100, lower = faster)
- **N**: Set the upper limit (10-300), then click Apply

### Color Coding

- **Gray**: Unmarked (status unknown)
- **Cyan (glowing)**: Current prime being processed
- **Gold**: Confirmed prime
- **Dark red**: Composite (crossed out)

### Interactions

- **Hover** over any cell to see its status and prime factorization (if composite)
- **Click** any cell for a quick highlight effect
