import { Router } from 'express'
import  pool  from "../db.js"

const router = Router();




router.get("/", async (req, res) => {
try{
  const {rows} = await pool.query (`SELECT * FROM themes`)
  res.status(200).json(rows)

} catch (err){
  console.error(err)
  res.status(500).json({error: err.message})
}
});


//Get 1 seule ressources 

router.get("/:id", async (req, res) => {
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

router.post("/", async (req, res) => {
  try{
    const {rows} = await pool.query(`INSERT INTO themes (id, name, description) VALUES (5, 'Angular','Platefrome de développement')`)
    res.status(200).json(rows)
  } catch (err){
    console.error(err)
    res.status(500).json({error: err.message})
  }

});

router.put("/", async (req, res) => {
  try{
    const {rows} = await pool.query(`UPDATE themes SET name = 'Next' WHERE id = 5`)
    res.status(200).json(rows)
  } catch (err){
    console.error(err)
    res.status(500).json({error: err.message})
  }
});


router.delete("/", async (req, res)=> {
  try{
    const {rows}= await pool.query(`DELETE FROM themes WHERE id = 5`)
    res.status(200).json(rows)
  } catch (err){
    console.error(err)
    res.status(500).json({error: err.message})
  }
})

export default router;