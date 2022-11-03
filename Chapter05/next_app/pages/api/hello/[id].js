import apidata from '../../../components/data'

export default function handler(req, res) {
  const {
    // id = req.query.id
    query: {id}
  } = req

  res.json(apidata[id])
}