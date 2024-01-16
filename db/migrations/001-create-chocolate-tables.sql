CREATE TABLE users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    avatar_url TEXT
);

CREATE TABLE recipes (
    id UUID PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id),
    description TEXT NOT NULL,
    name TEXT NOT NULL
);

CREATE TABLE chocolate_batches (
    id UUID PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id),
    recipe_id UUID REFERENCES recipes(id),
    bean_origin TEXT,
    ingredients JSONB,
    importer TEXT,
    production_date DATE
);

CREATE TABLE production_comments (
    id UUID PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id),
    batch_id UUID NOT NULL REFERENCES chocolate_batches(id),
    created_at TIMESTAMPTZ NOT NULL,
    text TEXT NOT NULL,
    attachments JSONB
);

CREATE TABLE recipe_ingredients (
    id UUID PRIMARY KEY,
    recipe_id UUID NOT NULL REFERENCES recipes(id),
    name TEXT NOT NULL,
    percentage INTEGER NOT NULL CHECK (percentage > 0 AND percentage <= 100)
);

ALTER TABLE chocolate_batches ENABLE ELECTRIC;
ALTER TABLE production_comments ENABLE ELECTRIC;
ALTER TABLE recipes ENABLE ELECTRIC;
ALTER TABLE recipe_ingredients ENABLE ELECTRIC;
ALTER TABLE users ENABLE ELECTRIC;
