import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {useEffect, useState, Fragment} from 'react'
import styles from '../styles/Home.module.css'

import { 
  Input, 
  Stack,
  InputGroup, 
  InputLeftAddon, 
  InputRightAddon,   
  Divider , 
  Text, 
} from '@chakra-ui/react'




import {debounce} from 'lodash' ; 


const Home: NextPage = function() {

  const [state, setState] = useState( [] as any)  ; 

  useEffect( ()=> {

    console.log("Setting effect")
    var mainInput = document.querySelector("#mainInput") as any    ; 
    var handle_enter = debounce( function (e: any) {
      if (e.key === 'Enter') {
          // Do something
          //alert(mainInput.value)
          setState( state => state.concat(mainInput.value) ) 
      }
    } , 6) 

    mainInput.addEventListener('keyup', handle_enter)    ;

    return () => {
      //cleanup is necessary! 
      console.log("Removing effect") ; 
      mainInput.removeEventListener('keyup', handle_enter )
    }

  }, [])




    
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          WEB REPL
        </h1>
      

        <Stack spacing={4}>

          {state.map( function(h:any) {
        return (
          <Fragment key={h}> 
          <Divider />
          <Text>{h}</Text>
          </Fragment>
        )
          })}

          
      <InputGroup>
        <InputLeftAddon>{">"}</InputLeftAddon>
        <Input id="mainInput" type='tel' placeholder='enter command...' focusBorderColor='null'  />
      </InputGroup>

      

    </Stack>

    </main>


    </div>
  )
}

export default Home ; 

