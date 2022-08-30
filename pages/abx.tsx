import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {useEffect, useState, Fragment} from 'react'
import styles from '../styles/abx.module.css'

import { GetStaticProps, InferGetStaticPropsType } from 'next'


import { tidyscripts_web as  tw } from "tidyscripts_web" ;

import { 
    Input, 
    Stack,
    InputGroup,
    Box, 
    InputLeftAddon, 
    InputRightAddon,
    Button, 
    Divider , 
    Text,
    Select ,
    Flex,
    Badge, 
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
	

        let l1 = ["Actinomyces sp." , "Clostridium sp." , "E. faecium (VRE)"]
        let l2 = ["E. faecium (VRE)" ,  "Actinomyces sp." , "Clostridium sp."]

        Object.assign(window, {
            l1, l2,  analyze_treatment_options, sort_abx_list , 
	    cartesian , 
	    get_multi_regimens , 
	    get_preferred_or_susceptible_arrays , 
	    multi_score , 
	    activity_spectrum, 
	    activity_spectrum_magnitude , 
	    combined_activity_spectrum, 
	    combined_activity_spectrum_magnitude,
	    set_union, 
	 
        })

    } 
    
    const [ selected_bugs, set_bugs ] = useState( [] as any ) ;
    const [ treatment_options, set_treatment_options ] = useState( [] as any ) ;


    let update_bugs = function(new_bugs : string[]) {
        set_bugs( new_bugs  ) ;
        let new_abx = analyze_treatment_options(data.ranked_sus, new_bugs) ;
        console.log(new_abx) 
        set_treatment_options(new_abx) ;                   
    }

    useEffect( ()=> {
        if ( false) { 
            let l1 = ["Actinomyces sp." , "Clostridium sp." , "E. faecium (VRE)"]
            let l2 = ["E. faecium (VRE)" ,  "Actinomyces sp." , "Clostridium sp."]
            update_bugs(l1)
        } 
    }, []) 

    return (
        <div className={styles.container}>
          <Head>
            <title>Antibiosis</title>
            <meta name="Antibiosis" content="Abx App" />
          </Head>

          <main className={styles.main}>
            <h1 className={styles.title}>
              Antibiosis 
            </h1>

            <Box className={styles.bug_select}>
              <Select placeholder='Select Bugs' onChange={function(e){
                  let new_bugs = tw.common.fp.im_push(selected_bugs,e.target.value) ; 
                  update_bugs(new_bugs)  ; 
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

            <Text mt='3px'>See Antibiotics</Text> 

            <Box className={styles.abx_display}>
              <Flex flexDirection="row" flexWrap="wrap" className={styles.bug_tag_container}>                
                {
                    treatment_options.map( (d) => (

                        <Text mr='2' key={d.name}>
                  {d.name}
                  {
                      d.bugs.map((b)=> (
                          <Badge key={b.bug} ml='1' colorScheme={b.level == "preferred" ? "green" : "blue" }>
                            {b.bug} 
                          </Badge>
                      ))
                  } 
                </Text>
                        
                    ))}
              </Flex>                      


            </Box>
            
          </main>


        </div>
    )
} ; 

export default Home ;

function AbxCard(a : any) {
    
} 


export function analyze_treatment_options(ranked_sus : any , bugs : string[]) {
    let abx_ops : any  = {} ;
    
    for (var bug of bugs ) {

        let preferred = ranked_sus[bug]['preferred'] ;
        let susceptible = ranked_sus[bug]['susceptible'] ; 

        let lambda = (antibiotics : any , level : string) => {
            antibiotics.map( (abx:string) => {
                let payload = { bug , level }  ; 
                if (abx_ops[abx]) {
                    abx_ops[abx].push(payload)
                } else {
                    abx_ops[abx] = [payload]
                } 
            });
        }            

        lambda(preferred,'preferred');
        lambda(susceptible,'susceptible');         
        
    }

    let rank_id = function(a : any, n : number) {
        n += 1 ; 
        let num_match = a.bugs.length ; 
        let num_preferred = a.bugs.filter((b)=> (b.level == 'preferred')).length ; 
        return `${n-num_match}${n-num_preferred}${a.name}` ; 
    }
    
    abx_ops = Object.entries(abx_ops).map( (x) => ({ name : x[0], bugs : x[1]}) ) ;
    abx_ops.map( (a) => (a.rank_id = rank_id(a,bugs.length) )) ;
    
    return sort_abx_list(abx_ops) ;     

    
}

function sort_abx_list(x:any) {
    x.sort(tw.common.fp.sort_by_prop("rank_id")) ;
    x.map( function(d:any){
        d.bugs.sort(tw.common.fp.sort_by_prop("level"))
    }) 
    return x  ; 
} 


export function get_preferred_or_susceptible_arrays(ranked_sus : any , bs : string[]) {
    return bs.map( (b:string) => ranked_sus[b]['preferred'].concat(ranked_sus[b]['susceptible'])  ) 
} 

export function get_preferred_or_susceptible_scores(rs : any , bs : string[]) {
    let d = get_preferred_or_susceptible_arrays(rs, bs) 
    return get_scores(d) 
}

export function get_scores( d : string[][] )  {
    let scores : any = {} ;
    for ( var i of d ) {
	i.map( function(x:string){
	    if (scores[x]) { scores[x] += 1 } else  {
		scores[x] = 1
	    } 
	}) 
    }
    return tw.common.R.sortBy( (a:any)=> -a[1] , Object.entries(scores) ) 
} 


export function cartesian(...a) { 
    //https://stackoverflow.com/questions/12303989/cartesian-product-of-multiple-arrays-in-javascript
    return a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat()  ))); 
} 


export function activity_spectrum_magnitude(aba : any , abx : string) { 
    return activity_spectrum(aba, abx).size ; 
} 

export function activity_spectrum(aba : any, abx : string) { 
    return new Set(aba[abx]['preferred'].concat(aba[abx]['susceptible']))
} 

export function set_union(a:Set<string>,b:Set<string>){ 
    //@ts-ignore
    return new Set([...a,...b])
} 

export function combined_activity_spectrum(aba : any , abxs : string[]) { 
    
    //@ts-ignore
    return abxs.map( (abx:string)=> activity_spectrum(aba,abx)).reduce( set_union )
} 

export function combined_activity_spectrum_magnitude(aba : any , abxs : string[]){
    return combined_activity_spectrum(aba,abxs).size 
} 

export function multi_score(aba : any , abxs : string[]) { 
    return combined_activity_spectrum_magnitude( aba, abxs)     
} 

export function get_multi_regimens(ranked_sus: any , abx_by_activity : any , b : string[]) { 
    //1. 
    let arrs = get_preferred_or_susceptible_arrays(ranked_sus,b) ; 
    //2. 
    let ops = cartesian(...arrs).map(function(abxs : string[]) {
	let s = tw.common.R.uniq(abxs) ; 
	return { 
	    abx : s , 
	    score : multi_score(abx_by_activity,s) 
	} 
    })
    //3. 
    ops.sort(tw.common.fp.sort_by_prop("score"))
    return ops  ; 
} 
