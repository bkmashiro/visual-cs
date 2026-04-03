# Miller-Rabin Primality Test

A probabilistic primality test that determines whether a number is **definitely composite** or **probably prime** using modular arithmetic and the properties of quadratic residues.

## Algorithm Overview

### Step 1 — Decompose n−1

Write `n − 1 = 2ˢ · d` where `d` is odd. This factorization exploits the fact that any even number can be written as a power of 2 times an odd number.

```
561 − 1 = 560 = 2⁴ × 35      (s=4, d=35)
```

### Step 2 — Choose witnesses

Pick `k` integers `a ∈ [2, n−2]`. Each one is a **witness** to the compositeness of `n`, or passes without finding a contradiction.

### Step 3 — Witness test

For each witness `a`:

1. Compute `x = aᵈ mod n`
2. If `x ≡ 1` or `x ≡ n−1`, this witness **passes** immediately
3. Otherwise, square `x` up to `s−1` times: `x ← x² mod n`
   - If `x ≡ n−1` at any point → **pass**
   - If `x ≡ 1` before hitting `n−1` → **definitely composite**
4. If we exhaust all squarings without hitting `n−1` → **definitely composite**

If *all* witnesses pass, `n` is **probably prime**.

## Mathematical Foundation

The test relies on **Fermat's Little Theorem**: if `p` is prime and `gcd(a, p) = 1`, then `aᵖ⁻¹ ≡ 1 (mod p)`.

More specifically, it uses the **Miller witness condition**: for a prime `p`, the sequence

```
a^d, a^(2d), a^(4d), ..., a^(2^s · d)  (mod p)
```

must end in `1`, and the **last non-1 term must be `n−1`**. Any violation reveals `n` as composite.

### Carmichael Numbers

Numbers like 561, 1105, 1729 are **Carmichael numbers** — they fool Fermat's test (aⁿ⁻¹ ≡ 1 for all valid `a`) but are caught by Miller-Rabin because the squaring sequence exposes a non-trivial square root of 1.

## Error Probability

Each witness has at most **1/4** probability of failing to detect a composite (Rabin's theorem). After `k` independent rounds:

```
P(error) ≤ 4⁻ᵏ
```

| k  | Error probability |
|----|------------------|
| 5  | < 0.1%           |
| 10 | < 0.000001%      |
| 20 | < 10⁻¹²          |

## Complexity

| Operation | Complexity |
|-----------|------------|
| Single witness test | O(log²n) |
| Full test (k rounds) | O(k · log²n) |
| Space | O(log n) |

## Deterministic Variants

For small `n`, deterministic witness sets are known:

| n < | Witnesses needed |
|-----|-----------------|
| 2,047 | {2} |
| 3,215,031,751 | {2, 3, 5, 7} |
| 3,317,044,064,679,887,385,961,981 | {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37} |

## Key Takeaways

- **Asymmetric certainty**: can definitively prove compositeness, but only probabilistically prove primality
- **Practical use**: used in RSA and DSA key generation; OpenSSL uses ≥50 rounds for cryptographic keys
- **Fast modexp**: the bottleneck is `aᵈ mod n`, done via square-and-multiply in O(log d) multiplications
- **Beats trial division**: trial division is O(√n) which is exponential in bit length; Miller-Rabin is polynomial
