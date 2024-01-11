CREATE TABLE recipes (
    recipe_id UUID PRIMARY KEY,
    recipe_name TEXT NOT NULL
);

CREATE TABLE chocolate_batch (
    batch_id UUID PRIMARY KEY,
    recipe_id UUID REFERENCES recipes(recipe_id),
    bean_origin TEXT NOT NULL,
    importer TEXT NOT NULL,
    production_date DATE NOT NULL
);

CREATE TABLE production_comments (
    comment_id UUID PRIMARY KEY,
    batch_id UUID REFERENCES chocolate_batch(batch_id),
    user_name TEXT NOT NULL,
    comment_timestamp TIMESTAMPTZ,
    comment_text TEXT NOT NULL,
    attachment_path TEXT -- This will store the file path or identifier for the attachment
);

CREATE TABLE recipe_ingredients (
    ingredient_id UUID PRIMARY KEY,
    recipe_id UUID REFERENCES recipes(recipe_id),
    ingredient_name TEXT NOT NULL,
    percentage INTEGER NOT NULL CHECK (percentage > 0 AND percentage <= 100)
);

ALTER TABLE chocolate_batch ENABLE ELECTRIC;
ALTER TABLE production_comments ENABLE ELECTRIC;
ALTER TABLE recipes ENABLE ELECTRIC;
ALTER TABLE recipe_ingredients ENABLE ELECTRIC;
