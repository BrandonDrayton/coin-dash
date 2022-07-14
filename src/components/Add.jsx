import { Button } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCrypto } from '../redux/actions'


function Add() {
    const dispatch = useDispatch()
    const [crypto, setCrypto] = useState('')
    console.log(crypto)
    const handleClick = (e) => {
        console.log(e.target)
        setCrypto(e.target.id)
        dispatch(addCrypto(crypto))
    }
    return (
        <Button onClick={handleClick}>Add</Button>
    )
}

export default Add