
import { Router } from 'express'
import  pool  from "../db.js"

const router = Router()

// Ressources_skills

router.get("/", async (req, res) => {
  try{
    const {rows} = await pool.query(`SELECT * FROM ressources_skills`)
    res.status(200).json(rows)
  } catch (err){
    res.status(500).json({error: err.message})
  }
});

router.get("/:id", async (req, res) => {
  try{
  const {id} = req.params
  const {rows} = await pool.query(`SELECT * FROM ressources_skills WHERE ressource_id = ${id}`)
  res.status(200).json(rows)
  } catch(err){
    res.status(500).json({error: err.message})
  }
});


router.post("/", async (req, res)=> {
  try{
    const {rows} = await pool.query(`INSERT INTO ressources_skills (ressource_id, skill_id) VALUES (2, 2)`)
    res.status(200).json(rows)
  } catch (err){
    console.error(err)
    res.status(500).json({error: err.message})
  }
});

router.put("/:ressource_id", async (req, res) => {
  try{
    const {ressource_id} = req.params
    const {rows} = await pool.query(`UPDATE ressources_skills SET ressource_id = 1 WHERE ressource_id = ${ressource_id}`)
    res.status(200).json(rows)
  } catch (err){
    res.status(500).json({error: err.message})
  }
});

router.delete("/:ressource_id", async (req, res) =>{
  try{
    const {ressource_id} = req.params
    const {rows} = await pool.query(`DELETE FROM ressources_skills WHERE ressource_id = ${ressource_id}`)
    res.status(200).json(rows)
  } catch (err){
    res.status(500).json({error: err.message})
  }
});

export default router;