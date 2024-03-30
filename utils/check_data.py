import json

def check_data(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        js_array = file.read()
    array = js_array.replace('const signs = ', '')
    array = array.replace(';', '')
    array = array.replace("'", '"')
    data = json.loads(array)

    duplicates = []
    seen_images = set()
    seen_names = set()

    for index, obj in enumerate(data):
        image = obj.get('image')
        name = obj.get('name')

        if image in seen_images or name in seen_names:
            duplicates.append((index, obj))

        seen_images.add(image)
        seen_names.add(name)

    if duplicates:
        print("Warning: Duplicate 'image' or 'name' found in the following objects:")
        for index, obj in duplicates:
            print(f"Index: {index}, Object: {obj}")

    else:
        print("No duplicates found.")

json_file = './src/signs.js'
check_data(json_file)