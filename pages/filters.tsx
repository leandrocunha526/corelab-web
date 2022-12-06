import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import styled, { createGlobalStyle } from "styled-components"
import Cookies from "universal-cookie"
import Button from "../components/layout/Button"
import api from "../services/api"

const GlobalStyle = createGlobalStyle`
    body {
        position: relative;
        display: flex;
        align-items: center;
        padding-top: 0;
    }
    @media screen and (min-width: ${props => props.theme.brakepoints.laptopSize}){
        body{
            padding: 0 10rem;
            height: 100vh;
        }
    }
`

const FilterForm = styled.form`
    @media screen and (min-width: ${props => props.theme.brakepoints.laptopSize}){
        background-color: ${props => props.theme.background};
    }
    Button {
        align-self: flex-end;
        margin-top: 3rem;
    }
    display: flex;
    padding: 3rem 2rem 1rem;
    gap: 1rem;
    flex-direction: column;
    select{
        width: 100%;
        border-radius: 30px;
        font-size: 1rem;
        padding: 10px;
        outline: none;
        background-color: #FFFFFF;
    }
`

const PriceRange = styled.div`
    gap: 1rem;
    display: flex;
    input {
        border: 1px solid black;
        border-radius: 5px;
        height: 2rem;
        width: 100%;
        font-size: 1rem;
    }
`

const Filter = () => {
    const router = useRouter()
    const { register, handleSubmit } = useForm()

    const cookies = new Cookies()

    const [years, setYears] = useState(["Todos"])
    const [names, setName] = useState(["Todos"])
    const [colors, setColors] = useState(["Todos"])

    const filters = () => {
        api.get('/filters').then(({ data }) => {
            setYears([...years, ...data.year])
            setName([...names, ...data.name])
            setColors([...colors, ...data.color])
        })
    }

    useEffect(filters, [])

    const filterFields = (data: any) => {
        const fields = {
            color: data.color,
            name: data.name,
            year: data.year,
            price: {
                priceMax: data.priceMax,
                priceMin: data.priceMin
            }
        }
        cookies.set('filters', fields)
        router.push('/')
    }

    return (
        <>
            <Link href="/"><img src="ArrowIcon.png" width={'30px'}></img></Link>
            <FilterForm onSubmit={handleSubmit(filterFields)}>
                <label>Nome</label>
                <select {...register('name')}>
                    {names.map((names) => <option value={names} key={names}>{names}</option>)}
                </select>
                <label>Ano</label>
                <select {...register('years')}>
                    {years.map((years) => <option value={years} key={years}>{years}</option>)}
                </select>
                <label>Cor</label>
                <select {...register('colors')}>
                    {colors.map((colors) => <option value={colors} key={colors}>{colors}</option>)}
                </select>
                <GlobalStyle />
                <PriceRange>
                    <label>Preço min:
                        <input type="number" {...register('priceMin')} />
                    </label>
                    <label>Preço max:
                        <input type="number" {...register('priceMax')} />
                    </label>
                </PriceRange>
                <Button type="submit">SALVAR</Button>
            </FilterForm>
        </>
    )
}

export default Filter
