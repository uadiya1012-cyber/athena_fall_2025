from day4_database import setup_database

CREATE_PRODUCTS_TABLE = """
CREATE TABLE IF NOT EXISTS products39 (
    id SERIAL PRIMARY KEY,
    product_name TEXT NOT NULL UNIQUE,
    quantity INTEGER NOT NULL DEFAULT 0,
    price NUMERIC(10, 2) NOT NULL
);
"""

print("Тохируулж байна: 'products39' хүснэгт...")
setup_database(CREATE_PRODUCTS_TABLE)