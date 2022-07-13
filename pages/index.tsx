import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Cookies from "universal-cookie"
import Card from "../components/Card"
import Button from "../components/layout/Button"
import api from "../services/api"
import HomeStyle from "./styles/homestyle"
import { useForm } from "react-hook-form"

const FormSearch = styled.form`
  margin-bottom: 34px;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`

const Input = styled.input`
    font-size: 1rem;
    outline: none;
    border: none;
    background-color: #65DCC74D;
    width: 100%;
    height: '3rem';
    border-radius: 30px;
    padding: 15px 3rem;
    background-image: url('/SearchIcon.png');
    background-repeat: no-repeat;
    background-position: 10px;
    img {
        background-color: transparent;
    }
`

const Home = () => {
  const [data, setData] = useState([])
  const [message, setMessage] = useState("")
  const route = useRouter()

  const { handleSubmit, register } = useForm()

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

  const handleSearch = (data: any) => {
    api.get('/filtered', {
      params: {
        keyword: data.search,
        filters: cookie.get('filters')
      }
    }).then(({ data }) => {
      setData(data)
    })
  }

  return (
    <HomeStyle>
      <FormSearch onSubmit={handleSubmit(handleSearch)}>
        <Input placeholder="Buscar" {...register('search')} />
        <button onClick={() => route.push('/filters')}><img src={"/filterIcon.png"} /></button>
      </FormSearch>
      <Button onClick={() => route.push('/register')} icon={"/AddIcon.png"}>ADICIONAR</Button>
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
