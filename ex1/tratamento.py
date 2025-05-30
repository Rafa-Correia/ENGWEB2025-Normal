import json
import unicodedata

def process_entry(key, value):
    entry = {
        "_id": value.get("id", key),
        "anoEdição": "unknown",
        "musicas": [],
        "organizacao": "unknown",
        "vencedor": "unknown"
    }

    for field, field_value in value.items():
        if field == "id":
            continue
        entry[field] = field_value

    return entry

def main():
    with open('dataset.json', 'r', encoding='utf-8') as infile:
        data = json.load(infile)
    
    mongo_list = [process_entry(key, value) for key, value in data.items()]

    with open('dataset_tratado.json', 'w', encoding='utf-8') as outfile:
        json.dump(mongo_list, outfile, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()