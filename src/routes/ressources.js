import { Router } from 'express'
import  pool  from "../db.js"

const router = Router();

//RESSOURCES
// Créer une route GET pour les ressources
router.get("/", async (req, res) => {
  
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
router.get("/ressources/:id", async (req, res) => {
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

router.post("/ressources", async (req, res) =>{
  try{
    const {rows} = await pool.query (`INSERT INTO ressources (id, title, description) VALUES(6, 'La base de donnée','Entrainement à la création de bdd') `)
  res.status(200).json(rows)

    } catch (err){
console.error(err)
res.status(500).json({error: err.message})
    }
 });

  
//Créer une route PUT (modifier) pour les ressources
router.put("/ressources", async (req, res) =>{

  try{
    const {rows} = await pool.query(`UPDATE ressources SET title = 'Rien' WHERE id = 6`)
    res.status(200).json(rows)
  } catch (err){
    console.error(err)
    res.status(500).json({error: err.message})
  }
});

//Créer une route DELETE pour les ressources
router.delete("/ressources/:id", async (req, res) => {
  try{
    const {id} = req.params
    const {rows} = await pool.query(`DELETE FROM ressources WHERE id = 6`)
    res.status(200).json(rows)

} catch (err){
  console.error(err)
  res.status(500).json({error: err.message})
}
});

export default router;