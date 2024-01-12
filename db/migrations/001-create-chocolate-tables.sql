CREATE TABLE recipes (
    id UUID PRIMARY KEY,
    description TEXT NOT NULL,
    name TEXT NOT NULL
);

CREATE TABLE chocolate_batches (
    id UUID PRIMARY KEY,
    recipe_id UUID REFERENCES recipes(id),
    bean_origin TEXT NOT NULL,
    ingredients JSONB,
    importer TEXT NOT NULL,
    production_date DATE NOT NULL
);

CREATE TABLE production_comments (
    id UUID PRIMARY KEY,
    batch_id UUID REFERENCES chocolate_batches(id),
    user_name TEXT NOT NULL,
    comment_timestamp TIMESTAMPTZ,
    comment_text TEXT NOT NULL,
    attachment_path TEXT -- This will store the file path or identifier for the attachment
);

CREATE TABLE recipe_ingredients (
    id UUID PRIMARY KEY,
    recipe_id UUID REFERENCES recipes(id),
    name TEXT NOT NULL,
    percentage INTEGER NOT NULL CHECK (percentage > 0 AND percentage <= 100)
);

ALTER TABLE chocolate_batches ENABLE ELECTRIC;
ALTER TABLE production_comments ENABLE ELECTRIC;
ALTER TABLE recipes ENABLE ELECTRIC;
ALTER TABLE recipe_ingredients ENABLE ELECTRIC;
