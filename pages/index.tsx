import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Cookies from "universal-cookie"
import Card from "../components/Card"
import Button from "../components/layout/Button"
import api from "../services/api"
import HomeStyle from "./styles/homestyle"

const Home = () => {
  const [data, setData] = useState([])
  const [message, setMessage] = useState("")
  const route = useRouter()

  const cookie = new Cookies()

  const getAll = () => {
    api.get('/list').then((res) => {
      const data = res.data
      setData(data)
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(getAll, [])

  function changeFavorite(_id: string, isFavorite: boolean) {
    api.post('/favorite', {
      _id: _id,
      isFavorite: !isFavorite
    }).then((res) => {
      if (res.status === 200) {
        getAll()
      }
    })
  }

  const Delete = (_id: string) => {
    api.delete(`/delete/${_id}`).then((res) => {
      if (res.status === 200) {
        setMessage("Veículo deletado com sucesso")
        getAll()
      }
    })
  }

  const Edit = (key: any) => {
    cookie.set('selected', data[key])
    route.push('/update')
  }

  return (
      <HomeStyle>
        <Button>ADICIONAR</Button>
        <b style={{ color: 'red' }}>{message}</b>
        {data.length > 0 &&
          <><p>Meus anúncios</p><Card
          vehicles={data}
          changeFavorite={(_id: string, isFavorite: boolean) => changeFavorite(_id, isFavorite)}
          Delete={(_id: string) => Delete(_id)}
          Edit={(key: any) => Edit(key)} /></>}
        {!data.length &&
          <h3>Não há anúncios cadastrados</h3>}
      </HomeStyle>
  )
}

export default Home
