  SELECT * FROM ressources;
  SELECT * FROM themes;
 SELECT * FROM  ressources_skills;
 SELECT * FROM skills;



-- SELECT name     
-- FROM themes;


-- SELECT title 
-- FROM ressources,
-- ORDER BY updated_at DESC;

-- SELECT title, url
--  FROM ressources
-- WHERE type = 'exercice';

-- SELECT title, description
-- FROM ressources
-- WHERE is_ada = True;


-- SELECT ressources.*
-- FROM ressources
-- JOIN ressources_skills ON ressources_skills.ressource_id = ressources.id
-- JOIN skills ON skills.id = ressources_skills.skill_id
-- WHERE skills.name = 'JavaScript';



-- SELECT  title 
-- FROM ressources
-- WHERE title ILIKE '%react%';


/* BONUS */

/* SELECT 
    themes.name,                    -- On sélectionne le nom du thème
    COUNT(ressources.id) AS nombre_ressources  -- On compte le nombre de ressources liées à ce thème
FROM themes
LEFT JOIN ressources                      -- On fait une jointure entre les thèmes et les ressources
    ON themes.id = ressources.theme_id -- La jointure se fait sur l'identifiant du thème
GROUP BY themes.name                   -- On regroupe les résultats par thème
ORDER BY nombre_ressources DESC; 
 */

-- SELECT title, url, ARRAY_AGG (skills.name)
-- FROM ressources
-- JOIN ressources_skills ON ressources.id = ressources_skills.ressource_id
-- JOIN skills ON ressources_skills.skill_id = skills.id
-- GROUP BY ressources.title, ressources.url;



-- SELECT  ressources.*,
-- themes.name AS theme_name
-- FROM ressources
-- JOIN themes ON ressources.theme_id = themes.id
-- ORDER BY ressources.created_at DESC
-- LIMIT 5;


-- SELECT skills.name
-- FROM skills
-- LEFT JOIN ressources_skills 
--     ON skills.id = ressources_skills.skill_id
-- WHERE ressources_skills.ressource_id IS NULL;
