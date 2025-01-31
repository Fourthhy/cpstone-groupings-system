
const Output = () => {
const name1 = "Princess"
const name2 = "Shaina"
const name3 = "Miguel"
const name4 = "Trisha"
    if (
        name1 === name2 || 
        name1 === name3 ||
        name1 === name4 ||
        name2 === name3 ||
        name2 === name4 ||
        name3 === name4 
    ) {
        
        return "match"
    } else { return "unmatched" }
}

export default function Auto2() {


  return (
    <>
         <Output /> 
    </>
  )
}