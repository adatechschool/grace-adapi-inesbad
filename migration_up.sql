-- Si je veux connecter deux valeur je peux joindre en utilisant references :
-- skills_name TEXT references skills(name)
-- Il va relier mon skills name à mon name dans mon tableau skills.

CREATE TABLE themes (
     id INTEGER PRIMARY KEY,
     name TEXT,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW (),
    updated_at  TIMESTAMPTZ DEFAULT NOW()
);

 CREATE TYPE ressource_type AS ENUM ('video', 'article', 'pdf','guide', 'exercice', 'projet');
ALTER TYPE ressource_type ADD VALUE 'guide';
ALTER TYPE ressource_type ADD VALUE 'exercice';
ALTER TYPE ressource_type ADD VALUE 'projet';

CREATE TABLE ressources (
    id INTEGER PRIMARY KEY,
    type  ressource_type,
    title TEXT,
    description TEXT,
    url TEXT,
    is_ada BOOLEAN,
    theme_id INTEGER,
    FOREIGN KEY (theme_id) REFERENCES themes(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);


CREATE TABLE skills (
    id INTEGER PRIMARY KEY,
    name TEXT
);

CREATE TABLE ressources_skills (
    ressource_id INTEGER REFERENCES ressources(id),
    skill_id INTEGER REFERENCES skills(id),
    PRIMARY KEY (ressource_id, skill_id)
);