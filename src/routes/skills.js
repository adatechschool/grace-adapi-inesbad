
import { Router } from 'express'
import  pool  from "../db.js"

const router = Router()

// skills 

router.get("/", async (req, res) =>{
  try{
    const {rows} = await pool.query(`SELECT * FROM skills`)
    res.status(200).json(rows)
  } catch (err){
    res.status(500).json({error: err.message})
  }
});

router.get("/:id", async (req, res)=> {
  try{
    const {id} = req.params
    const {rows} = await pool.query(`SELECT * FROM skills WHERE id = ${id}`)
    res.status(200).json(rows)
  } catch (err){
    res.status(500).json({error: err.message})
  }
});

router.post("/", async (req, res) => {
  try{
    const {rows} = await pool.query(`INSERT INTO skills (id, name) VALUES (6, 'Inès')`)
    res.status(200).json(rows)
  } catch (err){
    res.status(500).json({error: err.message})
  }
});

router.put("/", async (req, res)=> {
  try{
    const {rows} = await pool.query(`UPDATE skills SET name = 'Ouss' WHERE id = 6`)
    res.status(200).json(rows)
  } catch (err){
    res.status(500).json({error: err.message})
  }
});

router.delete("/", async (req, res) =>{
  try{
    const {rows} = await pool.query(`DELETE FROM skills WHERE id = 6`)
    res.status(200).json(rows)
  } catch (err) {
res.status(500).json({error: err.message})
  }
});

export default router;