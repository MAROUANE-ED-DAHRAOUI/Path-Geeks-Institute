import requests
import random
import psycopg2

# Connect to your PostgreSQL database
def get_connection():
    return psycopg2.connect(
        dbname="countries",
        user="postgres",
        password="root",
        host="localhost",
        port="5432"
    )

# Fetch countries from the API
def fetch_countries():
    url = "https://restcountries.com/v3.1/all?fields=name,flags"
    response = requests.get(url)
    response.raise_for_status()
    return response.json()

# Insert a country into the database
def insert_country(country):
    name = country.get("name", {}).get("common", "Unknown")
    capital = country.get("capital", ["Unknown"])[0]
    flag = country.get("flags", {}).get("png", "")
    subregion = country.get("subregion", "Unknown")
    population = country.get("population", 0)

    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("""
                INSERT INTO countries (name, capital, flag, subregion, population)
                VALUES (%s, %s, %s, %s, %s)
            """, (name, capital, flag, subregion, population))
            print(f"Inserted: {name}")

# Main logic
if __name__ == '__main__':
    all_countries = fetch_countries()
    random_countries = random.sample(all_countries, 10)

    for country in random_countries:
        insert_country(country)
