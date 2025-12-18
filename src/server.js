import express from "express";
//import pool from "../db.js";
import ressourcesRouter from "./routes/ressources.js";
import themesRouter from "./routes/themes.js";
import skillsRouter from "./routes/skills.js";
import ressources_skillsRouter from "./routes/ressources_skills.js"
import cors from "cors";
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // permet de lire le JSON si nécessaire
app.use("/ressources", ressourcesRouter)
app.use("/themes", themesRouter)
app.use("/skills", skillsRouter)
app.use("/ressources_skills", ressources_skillsRouter)

//RESSOURCES
// Créer une route GET pour les ressources
app.get("/ressources", async (req, res) => {
  
  try {
const {rows}  = await pool.query("SELECT * FROM ressources"); // ta table
     res.status(200).json(rows); // renvoie les données

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message }); // gestion d'erreur
  }
});


//Je récuperer une ressource via ID ("guide")
//Créer une route GET pour une ressource
app.get("/ressources/:id", async (req, res) => {
  try {
     const id = req.params.id; // récupère l'id de l'URL
    const {rows} = await pool.query(`SELECT * FROM ressources WHERE id = ${id}`);
    res.json(rows); // renvoie la première ligne trouvée
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


//Créer une route POST (creer) pour les ressources

app.post("/ressources", async (req, res) =>{
  try{
    const {rows} = await pool.query (`INSERT INTO ressources (id, title, description) VALUES(6, 'La base de donnée','Entrainement à la création de bdd') `)
  res.status(200).json(rows)

    } catch (err){
console.error(err)
res.status(500).json({error: err.message})
    }
 });

  
//Créer une route PUT (modifier) pour les ressources
app.put("/ressources", async (req, res) =>{

  try{
    const {rows} = await pool.query(`UPDATE ressources SET title = 'Rien' WHERE id = 6`)
    res.status(200).json(rows)
  } catch (err){
    console.error(err)
    res.status(500).json({error: err.message})
  }
});

//Créer une route DELETE pour les ressources
app.delete("/ressources/:id", async (req, res) => {
  try{

    const {id} = req.params
  const {rows} = await pool.query(`DELETE FROM ressources WHERE id = 6`)
  res.status(200).json(rows)

} catch (err){
  console.error(err)
  res.status(500).json({error: err.message})
}
});


//THEMES

app.get("/themes", async (req, res) => {
try{
  const {rows} = await pool.query (`SELECT * FROM themes`)
  res.status(200).json(rows)

} catch (err){
  console.error(err)
  res.status(500).json({error: err.message})
}
});


//Get 1 seule ressources 

app.get("/themes/:id", async (req, res) => {
  try{
    const id = req.params.id;
    const {rows} = await pool.query(`SELECT * FROM themes WHERE id = ${id}`)
    res.status(200).json(rows)
  } catch (err){
    console.error(err)
    res.status(500).json({error: err.message})
  }
});

// Post pour toutes les ressources

app.post("/themes", async (req, res) => {
  try{
    const {rows} = await pool.query(`INSERT INTO themes (id, name, description) VALUES (5, 'Angular','Platefrome de développement')`)
    res.status(200).json(rows)
  } catch (err){
    console.error(err)
    res.status(500).json({error: err.message})
  }

});

app.put("/themes", async (req, res) => {
  try{
    const {rows} = await pool.query(`UPDATE themes SET name = 'Next' WHERE id = 5`)
    res.status(200).json(rows)
  } catch (err){
    console.error(err)
    res.status(500).json({error: err.message})
  }
});


app.delete("/themes", async (req, res)=> {
  try{
    const {rows}= await pool.query(`DELETE FROM themes WHERE id = 5`)
    res.status(200).json(rows)
  } catch (err){
    console.error(err)
    res.status(500).json({error: err.message})
  }
})

// skills 

app.get("/skills", async (req, res) =>{
  try{
    const {rows} = await pool.query(`SELECT * FROM skills`)
    res.status(200).json(rows)
  } catch (err){
    res.status(500).json({error: err.message})
  }
});

app.get("/skills/:id", async (req, res)=> {
  try{
    const {id} = req.params
    const {rows} = await pool.query(`SELECT * FROM skills WHERE id = ${id}`)
    res.status(200).json(rows)
  } catch (err){
    res.status(500).json({error: err.message})
  }
});

app.post("/skills", async (req, res) => {
  try{
    const {rows} = await pool.query(`INSERT INTO skills (id, name) VALUES (6, 'Inès')`)
    res.status(200).json(rows)
  } catch (err){
    res.status(500).json({error: err.message})
  }
});

app.put("/skills", async (req, res)=> {
  try{
    const {rows} = await pool.query(`UPDATE skills SET name = 'Ouss' WHERE id = 6`)
    res.status(200).json(rows)
  } catch (err){
    res.status(500).json({error: err.message})
  }
});

app.delete("/skills", async (req, res) =>{
  try{
    const {rows} = await pool.query(`DELETE FROM skills WHERE id = 6`)
    res.status(200).json(rows)
  } catch (err) {
res.status(500).json({error: err.message})
  }
});

// Ressources_skills

app.get("/ressources_skills", async (req, res) => {
  try{
    const {rows} = await pool.query(`SELECT * FROM ressources_skills`)
    res.status(200).json(rows)
  } catch (err){
    res.status(500).json({error: err.message})
  }
});

app.get("/ressources_skills/:id", async (req, res) => {
  try{

  const {rows} = await pool.query(`SELECT * FROM ressources_skills WHERE ressource_id = 2`)
  res.status(200).json(rows)
  } catch(err){
    res.status(500).json({error: err.message})
  }
});


app.post("/ressources_skills", async (req, res)=> {
  try{
    const {rows} = await pool.query(`INSERT INTO ressources_skills (ressource_id, skill_id) VALUES (2, 2)`)
    res.status(200).json(rows)
  } catch (err){
    console.error(err)
    res.status(500).json({error: err.message})
  }
});

app.put("/ressources_skills/:ressource_id", async (req, res) => {
  try{
    const {ressource_id} = req.params
    const {rows} = await pool.query(`UPDATE ressources_skills SET ressource_id = 1 WHERE ressource_id = ${ressource_id}`)
    res.status(200).json(rows)
  } catch (err){
    res.status(500).json({error: err.message})
  }
});

app.delete("/ressources_skills/:ressource_id", async (req, res) =>{
  try{
    const {ressource_id} = req.params
    const {rows} = await pool.query(`DELETE FROM ressources_skills WHERE ressource_id = ${ressource_id}`)
    res.status(200).json(rows)
  } catch (err){
    res.status(500).json({error: err.message})
  }
});

app.listen(3000, () => {
  console.log("Serveur lancé : http://localhost:3000");
});








// req va récupere une donnée
// const rows -> elle est récupéréeet va récuperer les colonnes 
// Fonction asynchrone pour éviter les promises 
