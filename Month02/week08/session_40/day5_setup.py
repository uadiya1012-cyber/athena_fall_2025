from day5_database import setup_database

CREATE_SALES_TABLE = """
CREATE TABLE IF NOT EXISTS sales (
    sale_id SERIAL PRIMARY KEY,
    product_id_fk INTEGER REFERENCES products39(id),
    quantity_sold INTEGER NOT NULL,
    sale_date TIMESTAMP DEFAULT NOW()
);
"""
print("Тохируулж байна: 'sales' хүснэгт...")
setup_database(CREATE_SALES_TABLE)