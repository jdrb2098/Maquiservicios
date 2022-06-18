import React from 'react'
import { Button, Card } from 'react-bootstrap'


function BenefitCard({benefit}) {
  return (
    <Card className=' my-3  rounded text-center' style={{height: '80%', border:'0px', backgroundColor: 'transparent'}}>
            
            <Card.Img src={benefit.image} />
            

            
                <Card.Title as='div'>
                    <strong style={{color: 'white'}}>{benefit.title}</strong>
                </Card.Title> 
                          
        </Card>
  )
}

export default BenefitCard