import {ComponentTypes}  from "../Enum/ComponentTypes";

export class RobotComponent {

	constructor(private type: number, private strength: number, private speed: number) {
	}

	getType = () =>  this.type;
	getSpeed = () => this.speed;
	getStrength = () => this.strength;
}
