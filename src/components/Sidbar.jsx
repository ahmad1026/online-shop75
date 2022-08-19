import React , {useEffect , useState} from "react";
import { getCategores } from "../api/getCategores.api";
import { SidbarContainer,SliderContent } from "../styles";
import Dropdown from './Dropdown'
export default function Sidbar({catId}) {
  const [categores , setCategores] = useState([])

  const domData = [
    {
      title:"موبایل و تبلت",
      path:"mobile-tablet",
      items:[
        "سامسونگ",
        "اپل",
        "موتورولا"
      ]
    },
    {
      title:"لبتاپ و pc",
      path:"labtop-pc",
      items:[
        "اچ پی",
        "دل",
        "ایسوز",
        "مک"
      ]
    },
    {
      title:"ساعت هوشمند",
      path:"smart-watch",
      items:[
        "سامسونگ",
        "اپل",
        "موتورولا",
        "شیاممی"
      ]
    },
    {
      title:"مانیتور",
      path:"monitors",
      items:[
        "سامسونگ",
        "اپل",
        "دل"
      ]
    }
  ]


  useEffect(()=>{
    getCategores().then(res=>{
      setCategores(res)
    }).catch(e=>{
      console.log(e);
    })

  },[])
  
  return (
    <SidbarContainer>
      <SliderContent>
        {
          categores.map(item=> <Dropdown status={catId == item.id ? true :false} category={item}/>)
        }
      </SliderContent>
    </SidbarContainer>
  );
}
