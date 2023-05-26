import { Link } from "react-router-dom"
import { IButton } from "../../Shared/Interfaces"
import './index.scss'
const Blackbtn:React.FC<IButton> =({value,p}) => {
return(<>
 <Link to={'/signin'}>  
<button className="black_btn" style={{padding: `${p}`}}>{value}</button>
</Link> 
</>)
}
export default Blackbtn
