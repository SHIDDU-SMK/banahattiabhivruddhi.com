from pathlib import Path
import re

# The recent newspaper assets are managed separately from this data installer.
# This workflow verifies that all expected files are present and non-empty,
# then repairs the website data/ordering/cache references deterministically.
expected = {
    24: [1, 2, 3, 4],
    25: [1, 2, 3, 5, 6, 7],
    26: [1, 2, 3, 4],
}
for day, nums in expected.items():
    for n in nums:
        f = Path(f"assets/news-2026-08-{day:02d}-{n:02d}.webp")
        if not f.exists() or f.stat().st_size == 0:
            raise SystemExit(f"Missing newspaper asset: {f}")
        print(f"found {f}: {f.stat().st_size} bytes")

p = Path("daily-status.js")
s = p.read_text()

# Keep one canonical definition for each recent gallery.
for name in ("NEWS24", "NEWS25", "NEWS26"):
    s = re.sub(rf"\n\s*const {name}\s*=\s*\[[\s\S]*?\];\s*", "\n", s, count=1)

anchor = re.search(r"(\s*const NEWS23\s*=\s*[^;]+;)", s)
if not anchor:
    raise SystemExit("NEWS23 anchor not found")

constants = """

  const NEWS24 = [
    'assets/news-2026-08-24-01.webp?v=20260826-10',
    'assets/news-2026-08-24-02.webp?v=20260826-10',
    'assets/news-2026-08-24-03.webp?v=20260826-10',
    'assets/news-2026-08-24-04.webp?v=20260826-10'
  ];

  const NEWS25 = [
    'assets/news-2026-08-25-01.webp?v=20260826-10',
    'assets/news-2026-08-25-02.webp?v=20260826-10',
    'assets/news-2026-08-25-03.webp?v=20260826-10',
    'assets/news-2026-08-25-05.webp?v=20260826-10',
    'assets/news-2026-08-25-06.webp?v=20260826-10',
    'assets/news-2026-08-25-07.webp?v=20260826-10'
  ];

  const NEWS26 = [
    'assets/news-2026-08-26-01.webp?v=20260826-10',
    'assets/news-2026-08-26-02.webp?v=20260826-10',
    'assets/news-2026-08-26-03.webp?v=20260826-10',
    'assets/news-2026-08-26-04.webp?v=20260826-10'
  ];"""
pos = anchor.end()
s = s[:pos] + constants + s[pos:]

if "function sync24AugPost()" not in s:
    marker = "  function sync25AugPost() {"
    if marker not in s:
        raise SystemExit("sync25AugPost marker not found")
    fn = """  function sync24AugPost() {
    upsertPost({
      id: 'news-coverage-2026-08-24', type: 'Paper Cut', date: '2026-08-24',
      title: '24 August 2026 newspaper coverage: Praja Soudha movement and community support',
      titleKn: '24 ಆಗಸ್ಟ್ 2026 ಪತ್ರಿಕಾ ವರದಿಗಳು: ಪ್ರಜಾಸೌಧ ಹೋರಾಟ ಮತ್ತು ಸಮುದಾಯದ ಬೆಂಬಲ',
      text: 'Four newspaper cuttings dated 24 August 2026 covering the Banahatti Praja Soudha movement and community participation.',
      textKn: 'ಬನಹಟ್ಟಿ ಪ್ರಜಾಸೌಧ ಹೋರಾಟ ಮತ್ತು ಸಮುದಾಯದ ಭಾಗವಹಿಸುವಿಕೆಯನ್ನು ದಾಖಲಿಸುವ 24 ಆಗಸ್ಟ್ 2026ರ ನಾಲ್ಕು ಪತ್ರಿಕಾ ವರದಿಗಳು.',
      mediaKind: 'gallery', mediaUrls: NEWS24, mediaUrl: NEWS24[0], link: '', local: false, createdAt: 24
    });
  }

"""
    s = s.replace(marker, fn + marker, 1)

# Keep apply order explicit and chronological for recent news.
if "sync24AugPost();" not in s:
    if "    sync23AugPost();\n" not in s:
        raise SystemExit("sync23AugPost call not found")
    s = s.replace("    sync23AugPost();\n", "    sync23AugPost();\n    sync24AugPost();\n", 1)

p.write_text(s)

# Force browsers/CDN to load the corrected data script.
ip = Path("index.html")
html = ip.read_text()
html2, n = re.subn(r"daily-status\.js\?v=[^\"']+", "daily-status.js?v=20260826-10", html)
if n == 0:
    raise SystemExit("daily-status.js script reference not found")
ip.write_text(html2)

check = p.read_text()
for token in ("const NEWS24", "const NEWS25", "const NEWS26", "sync24AugPost();"):
    if token not in check:
        raise SystemExit(f"Verification failed: {token}")

print("24-26 August galleries prepared successfully")
