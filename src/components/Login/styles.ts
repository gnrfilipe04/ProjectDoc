import styled from 'styled-components/native'

export const Container = styled.View`
    width: 300px;
    height: 300px;
    
    justify-content: center;
`
export const ContentEmail = styled.View`
   flex-direction: row;
   align-items: center;
   margin-bottom: 10px; 
   background: white;
   padding-left: 5px;
   border-radius: 4px;
`

export const ContentPassword = styled.View`
    flex-direction: row;
    align-items: center;
    background: white;
    padding-left: 5px;
    border-radius: 4px;
`

export const ContentButtons = styled.View`
    align-items: center;
    justify-content: space-evenly;
    border-radius: 4px;

`

export const ButtonLogin = styled.TouchableOpacity`
    padding: 10px 20px 10px 20px;
    border-radius: 4px;
    margin: 25px 0;

    background: #009900;

`

export const ButtonRegister = styled.TouchableOpacity`
    
`

