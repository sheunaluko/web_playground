import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {useEffect, useState, Fragment} from 'react'
import styles from '../styles/pharmacosis.module.css'

import { GetStaticProps, InferGetStaticPropsType } from 'next'


import { tidyscripts_web as  tw } from "tidyscripts_web" ;

import { 
    Input, 
    Stack,
    InputGroup,
    Box, 
    InputLeftAddon, 
    InputRightAddon,
    Divider, 
    Button , 
    Text,
    Select ,
    Flex,
    Badge,
    CircularProgress,
    CircularProgressLabel,
    Progress
} from '@chakra-ui/react'

import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from '@chakra-ui/react'

import { SmallCloseIcon } from '@chakra-ui/icons'; 


import {debounce} from 'lodash' ;

import React from 'react';

//const Plot = (await import('react-plotly.js')).default 


/*

class App extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={{width: 320, height: 240, title: 'A Fancy Plot'}}
      />
    );
  }
}
*/ 

export const getStaticProps : GetStaticProps = async (context) => {

    let sg = await import("../src/sanford") ;

    let fields = ["abx", "ranked_sus", "abx_by_activity" , "bugs"] ; 
    
    let data = Object.fromEntries( fields.map( (f:string)=> [ f, sg[f]] ) ) ; 

    data.bugs.sort() ; 
    
    return {
        props: {
            data 
        } 
    }
}

declare var window  : any ;

const Home: NextPage = function(props : InferGetStaticPropsType<typeof getStaticProps> ) {

    var data =  props.data  ; 
    
    if (typeof window === "undefined") { /* we're on the server */ } else {

        window.tw = tw ;
        window.abx_data = data ; 

        Object.assign(window, {

        })

    }



    const [ selected_bugs, set_bugs ] = useState( [] as any ) ;
    const [ thinking, set_thinking ] = useState( false ) ;    
    const [ treatment_options, set_treatment_options ] = useState( [] as any ) ;


    let update_bugs = function(new_bugs : string[]) {
        set_bugs( new_bugs  ) ;
	/*
        if (new_bugs.length) {
            let new_abx = get_multi_regimens(data.ranked_sus, data.abx_by_activity, new_bugs) ;
            console.log(new_abx) ;
            set_treatment_options(new_abx) ;
            set_thinking(false) ; 
        } else {
            set_treatment_options([]) ;
            set_thinking(false) ; 
        }
	*/
    }

    /*
    let GetPlot =  function() {

        return (
            <Plot
              data={[
                  {
                      x: [1, 2, 3],
                      y: [2, 6, 3],
                      type: 'scatter',
                      mode: 'lines+markers',
                      marker: {color: 'red'},
                  },
                  {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
              ]}
              layout={{width: 320, height: 240, title: 'A Fancy Plot'}}
            />
        )
        
    }    
    */
    

    return (
        <div className={styles.container}>
          <Head>
            <title>Pharmacosis</title>
            <meta name="Pharmacosis" content="Pharm App" />
          </Head>

          <main className={styles.main}>
            <h1 className={styles.title}>
	    	Pharmacosis 
            </h1>


            <Box className={styles.bug_select}>
              <Select placeholder='Select Antibiotics' onChange={function(e){
	          let selection = e.target.value
		  console.log(selection) 
              }}>
                {
                    data.bugs.map( (b:string) => (
                <option key={b} value={b}>{b}</option>
                    ))}
              </Select>

              <Stack>
                <Flex mt='3px' flexDirection="row" flexWrap="wrap" className={styles.bug_tag_container}>                
                  {
                      selected_bugs.map( (b:string) => (

                  <Tag size={'sm'} key={b} variant='outline' colorScheme='blue' className={styles.bug_tag} onClick={function(){
                      let new_bugs = tw.common.fp.im_arr_rm(selected_bugs,b);
                      update_bugs(new_bugs) ;
                  }} >
                    <TagLabel>{b}</TagLabel>
                    <TagRightIcon as={SmallCloseIcon} />
                  </Tag>
                      ))}
                </Flex>                      

              </Stack>
            </Box>

            <Text mt='3px'>See Spectra</Text>

            
            <Box className={styles.abx_display}>
              <Flex flexDirection="column" className={styles.bug_tag_container}>                
                 {
                     treatment_options.map( (d:any)=> (
                <Flex  flexDirection="row" key={d.abxs.join("") + d.score}>
                  <Text>
                    <Badge ml="3px" mr="3px" colorScheme={"gray"}>{d.score}</Badge>                          </Text>
                  {d.abxs.map( (a:string)=> (
                  <Text key={a}>
                    {a}
                    
                    {d.annotation[a]['preferred'].map( (bug:string)=> (
                    <Badge key={bug} ml="3px" colorScheme={"green"}>{bug}</Badge>                        
                    ))}

                    {d.annotation[a]['susceptible'].map( (bug:string)=> (
                    <Badge key={ bug} ml="3px"  colorScheme={"blue"}>{bug}</Badge>                        
                    ))}
                    
                  </Text>                      
                  ))}
                </Flex>
                     ))
                 }
              </Flex>                      


            </Box>
            
          </main>


        </div>
    )
} ; 

export default Home ;

