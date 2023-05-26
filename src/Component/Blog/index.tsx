import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { fetchData, selectData, selectError, selectLoading } from "../../action/Apiaction";

const Blog:React.FC = () =>{ 
const dispatch = useDispatch();
const loading= useSelector(selectLoading)
const data =useSelector(selectData)
const error= useSelector(selectError)

useEffect(()=>{
dispatch(fetchData());
},[dispatch]);

  return(
<div className='blog_container'>
 {loading && <div>Loading...</div>}
  {error && <div>Error...</div>}      
  {data &&   
  (<ul>
{ data.map((item)=>(
<li key={item.id}>{item.name}</li>
))}
 </ul>)}
</div>
)
}
export default Blog
