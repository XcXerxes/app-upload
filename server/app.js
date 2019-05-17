const express = require('express')
const app = express()


const PORT = process.env.PORT || 9090

app.listen(PORT, (err) => {
  if (err) {
    console.error(err)
  }
  console.log(`http running on http://localhost:${PORT}`)
})
