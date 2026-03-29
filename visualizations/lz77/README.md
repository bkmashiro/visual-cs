# LZ77 Compression Explorer

Interactive step-by-step visualization of the LZ77 sliding-window compression algorithm.

## What it shows

- **Search buffer** — the already-encoded window (highlighted in amber)
- **Lookahead buffer** — the next characters to encode (highlighted in cyan)
- **Best match** — longest matching substring found in the search buffer (highlighted in green)
- **Token output** — each emitted `(offset, length, next-char)` triple with the decoded segment
- **Compression stats** — tokens emitted vs input length, back-reference savings, ratio bar

## How to use

1. Type any text in the input box (or pick a preset)
2. Click **Compress** to pre-compute all steps
3. Use **Next / Prev** to step through one token at a time
4. Click **Play** (or press `Space`) for automatic playback
5. Adjust search and lookahead buffer sizes to explore the trade-off

Keyboard shortcuts: `→` / `Space` = step forward, `←` = step back, `P` = play/pause.

## Algorithm

LZ77 encodes a stream by replacing repeated substrings with back-references:

```
Token: (offset, length, next-char)
  offset   — how far back the match starts in the search buffer
  length   — how many characters the match covers
  next-char — the first character that did not match
```

The encoder advances by `length + 1` characters after each token, so the next-char always consumes exactly one new character even when no match is found (`offset=0, length=0`).

## Files

- `index.html` — self-contained visualization, no external dependencies
