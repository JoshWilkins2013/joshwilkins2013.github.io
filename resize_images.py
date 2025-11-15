"""
Creates small and medium-sized images from full sized images.
Stores them in 'small', 'medium', and 'original' directories
"""

import os

from pathlib import Path
from PIL import Image, ImageOps

image_extensions = ['.jpg', '.png']

current_dir =  Path.cwd()
aws_dir = Path(r"C:\Users\Terminator\Downloads\New folder\img\Travel\Wyoming_2007")
all_items = list(aws_dir.rglob("*"))

for item in all_items:
    if item.is_file() and item.suffix.lower() in image_extensions:
        img = Image.open(item)
        img = ImageOps.exif_transpose(img)
        width, height = img.size

        new_aspect_ratio = min([1/1, 3/2, 4/3, 9/16], key=lambda x: abs(x - width/height))

        small_width = 500
        small_height = int(round(small_width / new_aspect_ratio, 0))

        new_img = img.resize((small_width, small_height), Image.LANCZOS) # LANCZOS is a good resampling filter

        small_folder = item.parent / "small"
        if not small_folder.exists():
            os.makedirs(small_folder)

        item_fixed_extension = item.with_suffix(item.suffix.lower())
        new_img.save(small_folder / item_fixed_extension.name)


        medium_width = 800
        medium_height = int(round(medium_width / new_aspect_ratio, 0))

        new_img = img.resize((medium_width, medium_height), Image.LANCZOS) # LANCZOS is a good resampling filter

        medium_folder = item.parent / "medium"
        if not medium_folder.exists():
            os.makedirs(medium_folder)

        item_fixed_extension = item.with_suffix(item.suffix.lower())
        new_img.save(medium_folder / item_fixed_extension.name)


        full_folder = item.parent / "original"
        if not full_folder.exists():
            os.makedirs(full_folder)
        os.rename(item, full_folder / item.name)
