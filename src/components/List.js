import ListIteam from "./ListIteam"

const List = (props) =>{
    console.log("list", props)
    let {list} = props;
    return <>{
        list.map((item) => (
           < ListIteam {...item }/>
        ))
    }
    </> 
}
export default List