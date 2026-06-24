#!/usr/bin/env python3
"""
regenerate_favicons.py — Re-render the PlayCanadianCasino favicon set
using the actual Maple Chip master logo.

The master logo (logo.png, 1024x1024) is downscaled using multi-step
LANCZOS resampling. Small sizes (16, 32) drop the motion lines so the
chip + maple leaf silhouette stays clean. Larger sizes (64, 192, 512)
keep the full logo including motion lines and gold arc.

Usage:
    /tmp/_venv/bin/python regenerate_favicons.py

Output: v3/images/favicon-{16,32,64,192,512}.png
        v3/images/apple-touch-icon.png (180x180)
        v3/images/favicon.ico (multi-size)

Requires: PIL, numpy (already in /tmp/_venv)
"""
from PIL import Image, ImageDraw, ImageEnhance
import os
import numpy as np

# Step 1: Load master logo
master = Image.open("v3/images/logo.png").convert("RGBA")
print(f"Master: {master.size}, mode={master.mode}")

# Step 2: Crop to content (remove dead space), make square
arr = np.array(master)
alpha = arr[:, :, 3]
ys, xs = np.where(alpha > 50)
bbox = (int(xs.min()), int(ys.min()), int(xs.max()), int(ys.max()))
pad = 20
crop_box = (max(0, bbox[0]-pad), max(0, bbox[1]-pad),
            min(master.size[0], bbox[2]+pad), min(master.size[1], bbox[3]+pad))
content = master.crop(crop_box)
content_w, content_h = content.size
sq_size = max(content_w, content_h)
square = Image.new("RGBA", (sq_size, sq_size), (0, 0, 0, 0))
square.paste(content, ((sq_size-content_w)//2, (sq_size-content_h)//2))
print(f"Square content: {square.size}")


def find_bbox(img):
    """Find non-transparent bbox of img."""
    a = np.array(img)[:, :, 3]
    ys, xs = np.where(a > 50)
    if len(ys) == 0:
        return None
    return (int(xs.min()), int(ys.min()), int(xs.max()), int(ys.max()))


def render_full(size):
    """Full logo with all details, smart downscale."""
    intermediate = square.resize((max(size*2, 64), max(size*2, 64)), Image.LANCZOS)
    return intermediate.resize((size, size), Image.LANCZOS)


def render_no_motion(size):
    """Logo without motion lines (left portion erased), re-centered."""
    img = render_full(size * 2)
    # Erase motion lines (left ~32% of the image)
    arr = np.array(img)
    arr[:, :int(arr.shape[1] * 0.32), 3] = 0
    img = Image.fromarray(arr, "RGBA")
    # Crop to chip bbox and re-square
    bb = find_bbox(img)
    if bb:
        chip = img.crop(bb)
        cw, ch = chip.size
        cs = max(cw, ch) + 2
        cs_img = Image.new("RGBA", (cs, cs), (0, 0, 0, 0))
        cs_img.paste(chip, ((cs-cw)//2, (cs-ch)//2))
        return cs_img.resize((size, size), Image.LANCZOS)
    return img.resize((size, size), Image.LANCZOS)


# Step 3: Generate the set
OUT = "v3/images"

# Small sizes: drop motion lines for clean chip+leaf silhouette
for s in [16, 32]:
    img = render_no_motion(s)
    img.save(f"{OUT}/favicon-{s}.png", "PNG", optimize=True)
    print(f"  favicon-{s}.png  {s}x{s} (no motion)  ({os.path.getsize(f'{OUT}/favicon-{s}.png'):,} bytes)")

# Medium-large: full logo
for s in [64, 192, 512]:
    img = render_full(s)
    img.save(f"{OUT}/favicon-{s}.png", "PNG", optimize=True)
    print(f"  favicon-{s}.png  {s}x{s} (full)  ({os.path.getsize(f'{OUT}/favicon-{s}.png'):,} bytes)")

# Apple touch icon: full logo, solid white background
apple = render_full(180)
bg = Image.new("RGBA", apple.size, (255, 255, 255, 255))
bg.alpha_composite(apple)
bg.save(f"{OUT}/apple-touch-icon.png", "PNG", optimize=True)
print(f"  apple-touch-icon.png  180x180 (full)  ({os.path.getsize(f'{OUT}/apple-touch-icon.png'):,} bytes)")

# Multi-size ICO: use the no-motion versions for tiny browser tabs
ico = [render_no_motion(s) for s in (16, 32, 48)]
ico[0].save(
    f"{OUT}/favicon.ico",
    format="ICO",
    sizes=[(16, 16), (32, 32), (48, 48)],
    append_images=ico[1:]
)
print(f"  favicon.ico  multi (no motion)  ({os.path.getsize(f'{OUT}/favicon.ico'):,} bytes)")

print(f"\nAll favicons regenerated in {OUT}/")
print("Note: remember to bump cache-bust ?v=N in all HTML files if you regenerate.")
