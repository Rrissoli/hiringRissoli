import Footer from '../../components/patterns/Footer'
import  Header from '../../components/patterns/Header'
import { theme } from '../../theme/theme';
import { Image, Box, Text, Icon, Input, Button } from '../../theme/components';
import GridCard from '../../components/commun/GridTemplate';
import FilterBox from '../../components/commun/BoxFiltter';
import ModalDetail from '../../components/commun/ModalDetails';
import { useState } from 'react';



export default function HomeScreen() {
  const [show, setShow] = useState(true)
  const [nameAction, setAction] =  useState(null)
  const [stocks, setStocks] = useState([])
  
  return (
    <Box>
      <Header setStocks={setStocks}/>
      <ModalDetail show={show} setShow={setShow} nameAction={nameAction}/>
      <GridCard setAction={setAction} setShow={setShow} stocks={stocks} setStocks={setStocks}/>
      <FilterBox/>
      <Footer />
    </Box>
  )
}