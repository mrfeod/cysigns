import os
import requests
from bs4 import BeautifulSoup
import json

url = 'https://en.wikipedia.org/wiki/Road_signs_in_Cyprus'  # replace with your URL
#url = 'https://en.wikipedia.org/wiki/Road_signs_in_Greece' # additional source
headers = {'User-Agent': 'CoolBot/0.0 (https://example.org/coolbot/; coolbot@example.org)'}

response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')
gallery_boxes = soup.find_all(class_='gallerybox')
data = []

if not os.path.exists('images'):
    os.makedirs('images')

for box in gallery_boxes:
    session = requests.Session()

    svg_url = box.find(class_='mw-file-description')['href']
    name = box.find(class_='gallerytext').get_text(strip=True)

    # Download the SVG file
    svg_page_link = "https://en.wikipedia.org" + svg_url;
    svg_response = session.get(svg_page_link)
    svg_soup = BeautifulSoup(svg_response.text, 'html.parser')
    original_file_link = "https:" + svg_soup.find(class_='internal')['href']

    print(f'Downloading {original_file_link}...')
    svg_file_response = session.get(original_file_link, headers=headers)
    print(f'Content: {svg_file_response.text[:16]}...')
    svg_file = os.path.basename(svg_url).replace('File:', 'images/')
    with open(f'./{svg_file}', 'wb') as f:
        if svg_file_response.headers.get('content-type') == 'image/svg+xml':
            f.write(svg_file_response.text.encode('utf-8'))
        else:
            f.write(svg_file_response.content)

    data.append({'image': svg_file, 'name': name})

# Save the data to a JSON file
with open('./data.json', 'w') as f:
    json.dump(data, f, indent=2)