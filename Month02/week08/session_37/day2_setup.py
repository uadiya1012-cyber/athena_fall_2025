from day2_database import setup_database

# 'tasks' хүснэгтийг үүсгэх SQL
CREATE_TASKS_TABLE = """
CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    task_description TEXT NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE
);
"""

# Тохиргооны функцийг ажиллуулах
print("Тохируулж байна: 'tasks' хүснэгт...")
setup_database(CREATE_TASKS_TABLE)