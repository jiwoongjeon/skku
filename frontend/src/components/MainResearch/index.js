import React from 'react'
import { Container, Title, CardviewContainer } from './styles'
import Cardtype1 from "../Cardtype1/Cardtype1"



const MainResearch = () => {
    return (
        <>


        

            <Container>
                <Title>Research</Title>
        
                <CardviewContainer>
                    <Cardtype1 
                        imgUrl =""
                        title = "Title"
                        content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar non vestibulum consectetur nunc ac vel sollicitudin maecenas. Euismod aliquet urna metus, eget nam ornare mattis massadddddsnfjanfkasdnfkandsjknfaksfnjkLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar non vestibulum consectetur nunc ac vel sollicitudin maecenas. Euismod aliquet urna metus, eget nam ornare mattis massa.">
                    </Cardtype1>

                    <Cardtype1 
                        imgUrl =""
                        title = "Title"
                        content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar non vestibulum consectetur nunc ac vel sollicitudin maecenas. Euismod aliquet urna metus, eget nam ornare mattis massa.">
                    </Cardtype1>

                    <Cardtype1 
                        imgUrl =""
                        title = "Title"
                        content = "hihi">
                    </Cardtype1>
                </CardviewContainer>
            </Container>
        </>
    )   
}

export default MainResearch
