
import * as tn from "tidyscripts_node" ;
const { node, common }  = tn; 
const { fp, R } = common ; 

const data_dir = "sandbox"

export var dics = node.io.read_json( node.io.path.join(data_dir, "sg_dics.json") )
export var sus_data = node.io.read_json( node.io.path.join(data_dir, "sg_sus_data.json") )

const  activity_levels  =  [
    "preferred" ,
    "resistant" ,
    "susceptible" ,
    "variable" ,
] 

export  const bugs =  R.keys(sus_data) as string[] ;
export const abx = R.values(dics.med_dic).flat() as string[] ; 

export function search_bugs(b : string) {
    return bugs.filter( (x:string) => x.match(new RegExp(b,"i")) ) 
} 

export function search_abx(b : string) {
    return abx.filter( (x:string) => x.match(new RegExp(b,"i")) ) 
} 

export function create_ranked_sus( b : string) {
    let sus  = sus_data[b] ;
    let result : any  =  {} ;
    for (var l  of activity_levels ) {
	// @ts-ignore 
	let meds = Object.entries(sus).filter( ([a,b])=> (b==l) ).map(fp.first)    
	result[l] = meds 
    } 
    return result 
}

// @ts-ignore 
export var ranked_sus =  Object.fromEntries(  R.keys(sus_data).map( (b:string) => [b,create_ranked_sus(b) ]) )

export function get_preferred_arrays(bs : string[]) {
    return bs.map( (b:string) => ranked_sus[b]['preferred'] ) ;
} 

export function get_preferred_or_susceptible_arrays(bs : string[]) {
    return bs.map( (b:string) => ranked_sus[b]['preferred'].concat(ranked_sus[b]['susceptible'])  ) 
} 

export function get_preferred_or_susceptible_scores(bs : string[]) {
    let d = get_preferred_or_susceptible_arrays(bs) 
    return get_scores(d) 
}

export function get_abx_activity( a : string) {
    let activity : any  = {} ; activity_levels.map( (al: string) => (activity[al] = []) )
    bugs.map( function(b:string) {
	let sus = ranked_sus[b]
	for (var l of activity_levels) {
	    if ( sus[l].indexOf(a) > -1 ) {
		activity[l].push(b)
	    } 
	} 
    })
    return activity 
}

export var abx_by_activity = Object.fromEntries( abx.map( (a:string)=> [a,get_abx_activity(a)])  )
    
export var get_abx = get_preferred_or_susceptible_scores ; 

export function get_scores( d : string[][] )  {
    let scores : any = {} ;
    for ( var i of d ) {
	i.map( function(x:string){
	    if (scores[x]) { scores[x] += 1 } else  {
		scores[x] = 1
	    } 
	}) 
    }
    return R.sortBy( (a:any)=> -a[1] , Object.entries(scores) ) 
} 

export var test_1 =  [
    'V. cholera',
    'S. lugdunensis' , 
]

export var test_2 = [
    'P. aeruginosa' ,
    'Clostridium sp.' ,
    'Serratia marcescens'   , 
] 

export function compare_abx( a1: string, a2 : string) {
    let diff : any  = {}
    for (var b of bugs) {
	let a1_sus = sus_data[b][a1] ; 
	let a2_sus = sus_data[b][a2] ;
	if ( a1_sus != a2_sus) {
	    diff[b]  = {   }  as any;
	    diff[b][a1] = a1_sus ;
	    diff[b][a2] = a2_sus ; 
	} 
    }
    return diff ; 
} 

