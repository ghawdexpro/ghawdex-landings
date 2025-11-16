#!/usr/bin/env python3
import subprocess
import json
import time
import os
from pathlib import Path
import urllib.request
import urllib.parse

def get_gps_data(image_path):
    """Extract GPS coordinates from image using mdls"""
    try:
        result = subprocess.run(['mdls', image_path], capture_output=True, text=True)
        output = result.stdout

        lat = None
        lon = None

        for line in output.split('\n'):
            if 'kMDItemLatitude' in line:
                lat = float(line.split('=')[1].strip())
            elif 'kMDItemLongitude' in line:
                lon = float(line.split('=')[1].strip())

        return (lat, lon) if lat and lon else None
    except Exception as e:
        print(f"Error getting GPS for {image_path}: {e}")
        return None

def reverse_geocode(lat, lon):
    """Get city name from coordinates using Nominatim"""
    try:
        url = f"https://nominatim.openstreetmap.org/reverse?lat={lat}&lon={lon}&format=json"
        headers = {'User-Agent': 'Ghawdex-Solar-Website/1.0'}

        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            address = data.get('address', {})

            # Try different address fields
            city = (address.get('city') or
                   address.get('town') or
                   address.get('village') or
                   address.get('residential') or
                   'unknown')

            # Clean up city name for filename
            city = city.lower().replace(' ', '-').replace("'", '').replace('l-', '').replace('i', '')
            return city
    except Exception as e:
        print(f"Error reverse geocoding {lat}, {lon}: {e}")
        return 'unknown'

def main():
    projects_dir = Path('/Users/maciejpopiel/ghawdex landings/public/projects')

    # Get all JPG files
    jpg_files = sorted(projects_dir.glob('*.JPG'))

    print(f"Found {len(jpg_files)} images")

    # Track city counters
    city_counters = {}
    rename_map = {}

    for img_path in jpg_files:
        print(f"\nProcessing {img_path.name}...")

        # Get GPS data
        gps = get_gps_data(str(img_path))

        if gps:
            lat, lon = gps
            print(f"  GPS: {lat}, {lon}")

            # Get city name
            city = reverse_geocode(lat, lon)
            print(f"  City: {city}")

            # Increment counter for this city
            city_counters[city] = city_counters.get(city, 0) + 1
            counter = city_counters[city]

            # Create new filename
            new_name = f"{city}-{counter}.jpg"
            rename_map[img_path.name] = new_name

            # Rate limit (Nominatim requires 1 request per second)
            time.sleep(1.1)
        else:
            print(f"  No GPS data found")
            # Use generic name for images without GPS
            city_counters['gozo'] = city_counters.get('gozo', 0) + 1
            new_name = f"gozo-{city_counters['gozo']}.jpg"
            rename_map[img_path.name] = new_name

    print("\n\n=== RENAME PLAN ===")
    for old, new in rename_map.items():
        print(f"{old} -> {new}")

    # Save rename map to file
    with open(projects_dir / 'rename-map.json', 'w') as f:
        json.dump(rename_map, f, indent=2)

    print(f"\nRename map saved to {projects_dir}/rename-map.json")
    print("\nRun this script with --execute flag to perform the rename")

if __name__ == '__main__':
    import sys
    main()
