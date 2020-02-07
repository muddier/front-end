import React from 'react';
import {Button, OverlayTrigger, Tooltip, Row} from 'react-bootstrap';
import './Actions.css'

const Actions = ({ teleport, xpBoost }) => {
	return (
		<>
		<Row className="action-row">
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip id='tooltip-teleport'>
						Costs 50 Honey
					</Tooltip>
				}
			>
				<Button onClick={(e) => {
					alert('Teleporting now!')
					teleport(e)
					}} variant="secondary">Teleport</Button>
			</OverlayTrigger>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip id='tooltip-teleport'>
						Permenant XP increase. Costs 250 Honey
					</Tooltip>
				}
				
			>
				<Button onClick={() => {
					alert('You are spending 250 honey to get 10 xp')
					xpBoost({'cost': 250, 'xp': 10, 'temp': 0}
					)}} variant="secondary"> 10 XP boost</Button>
			</OverlayTrigger>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip id='tooltip-teleport'>
						Extra XP for 3 minutes. Costs 200 Honey
					</Tooltip>
				}
			>
				<Button onClick={() => {
					alert('You are spending 250 honey to get a 50 XP boost for 3 minutes')
					xpBoost({'cost': 200, 'xp': 50, 'temp': 180})
				}} variant="secondary">Temp 50 XP boost</Button>
			</OverlayTrigger>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip id='tooltip-teleport'>
						Extra XP for 3 minutes. Costs 1000 Honey
					</Tooltip>
				}
			>
				<Button onClick={() => {
					alert('You are spending 1000 honey to get 500 XP boost for 3 minutes')
					xpBoost({'cost': 1000, 'xp': 500, 'temp': 180})
					}} variant="secondary">Temp 500 XP boost</Button>
			</OverlayTrigger>
		</Row>
		</>
	)
}

export default Actions