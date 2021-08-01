import React from 'react'
import { Container, Title, CardviewContainer, Subtitle } from './styles'
import Cardtype1 from "../Cardtype1/Cardtype1"


const MainNews = () => {
    return (
        <>
            <Container>

                <Title>News</Title>
                <Subtitle>Updates in Global Education Group</Subtitle>
                
        
                <CardviewContainer>
                    <Cardtype1 
                        imgURL ="https://d1vcqlflm6aitx.cloudfront.net/images/800x100p/1557364192-work_while_you_study_banner.webp"
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

export default MainNews
