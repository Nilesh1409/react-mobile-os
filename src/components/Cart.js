import Heading from "./Heading";
import List from "./List";

const Cart = (props) =>{
    let {heading,list} = props;
    // console.log(heading,list)
    return <>
    <Heading heading={heading} />
    <List list={list}/>
    </>
}
export default Cart