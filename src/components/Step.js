import React, { Component } from 'react'
import { Grid, Step } from 'semantic-ui-react'

// onClick: ((this.props.stepsCompleted.includes(2)) ? (()=>{this.props.jumpBack(2)}) : null),

class StepExampleOrdered extends Component {
    render() {
    const steps = [               
    { onClick: ((this.props.stepsCompleted.includes(1)) ? (()=>{this.props.jumpBack(1)}) : null), active: ((this.props.activeStep===1)?true:false), link: (this.props.stepsCompleted.includes(1)?true:false), completed: ((this.props.stepsCompleted.includes(1))?true:false), title: 'Select DOM Elements', description: 'Click on DOM elements that you want as properties in your data object.' },
    {disabled: true, active: ((this.props.activeStep===2)?true:false), completed: ((this.props.stepsCompleted.includes(2))?true:false), title: 'Select Details', description: 'Click on nested elements that you want as properties in your data object.' },
    { disabled: true, active: ((this.props.activeStep===3)?true:false), completed: ((this.props.stepsCompleted.includes(3))?true:false), title: 'Identify Pagination Links', description: 'If you desire pagination, click on the "next" link.' },
    {onClick: ((this.props.stepsCompleted.includes(4)) ? (()=>{this.props.jumpBack(4)}) : null),  active: ((this.props.activeStep===4)?true:false), link: (this.props.stepsCompleted.includes(4)?true:false), completed: ((this.props.stepsCompleted.includes(4))?true:false),  title: 'Authorization', description: 'Authorize yourself and serve your endpoint' },
    {onClick: ((this.props.stepsCompleted.includes(5)) ? (()=>{this.props.jumpBack(5)}) : null),  active: ((this.props.activeStep===5)?true:false), link: (this.props.stepsCompleted.includes(5)?true:false), completed: ((this.props.stepsCompleted.includes(5))?true:false), title: 'Create Endpoint', description: 'Authorize yourself and serve your endpoint' }
    ]
      return (
      <Step.Group fluid size='small' ordered items={steps} /> 
      )
  }
}

export default StepExampleOrdered


    
    {/* <Step.Group ordered>
      <Step completed>
        <Step.Content>
          <Step.Title>Select DOM Elements</Step.Title>
          <Step.Description>Click on elements that you want as properties in your data object.</Step.Description>
        </Step.Content>
      </Step>

      <Step completed title='Select Details' description='Click on nested elements that you want as properties in your data object.' />

      <Step active title='Identitfy Pagination Links' description='If you desire pagination, click on the "next" link.' />
    </Step.Group>

    <br /> */}