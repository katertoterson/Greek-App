# Hellenika - Greek App

## Python

Always use `uv run python` instead of `python` directly — Python is not in PATH on this machine.

## Serving

Use `uv` to run the dev server (Python is not in PATH). Always bind to `0.0.0.0`:

```bash
uv run python -m http.server 8080 --bind 0.0.0.0
```
