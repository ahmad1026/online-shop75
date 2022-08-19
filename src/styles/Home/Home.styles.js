import styled , {keyframes} from 'styled-components'

const ContentAnimation = keyframes`
0%{
    width: 70%;
}
100%{
    width: 95%;
}
`
const SliderAnimation = keyframes`
0%{
    width: 95%;
}
100%{
    width: 70%;
}
`


export const MainStyle = styled.div`
margin-top:150px;
margin-right:40px;
margin-left: 40px;
animation-name: ${ContentAnimation};
animation-duration: 1s;
animation-fill-mode: both;
float: left;
`

export const TagStyle = styled.div`
font-size: 29px;
display: flex;
gap: 10px;
align-items: center;
color:${({ theme }) => theme.text};
font-weight: bold;
svg{
    font-size: 20px;
}
`
export const ProductGroup  = styled.div`
width: 70%;
margin-top:150px;
margin-right:40px;
margin-left: 40px;
display: flex;
flex-wrap:wrap;
float: left;
animation: ${SliderAnimation};
animation-duration: 1s;
animation-fill-mode: both;

`

