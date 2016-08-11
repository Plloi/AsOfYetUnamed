import {ComponentTypes}  from "../Enum/ComponentTypes";
import {RobotComponent}  from "./RobotComponent";

export class Robot {
	private _myComponents: Array<RobotComponent> = [];

	constructor(components: Array<RobotComponent>) {
		components.map(component => this.assignComponent(component));
	}

	public assignComponent(component: RobotComponent) {
		if ( this._myComponents[component.getType()]) {
			// TODO: Remove assignment for equipped item
			throw new Error("Not Implemented");
		}
		this._myComponents[component.getType()] = component;
		// TODO: Flag assignement for component;
		throw new Error("Not Implemented");
	}

	public attack(componentsInvolved: number, target: Robot) {
		// Check For valid compent involvement
		if (ComponentTypes.LeftArm | ComponentTypes.RightArm & componentsInvolved) {
			throw new Error("Not Implemented");
		}

	}

	public getSpeed = () => this._myComponents.reduce((p, c) => p + c.getSpeed(), 0)
	public getStrength = () => this._myComponents.reduce((p, c) => p + c.getStrength(), 0)

	public getHitChance() {
		throw new Error("Not Implemented");
	}

	public getCriticalHitChance() {
		throw new Error("Not Implemented");
	}

	public getDodgeChange() {
		throw new Error("Not Implemented");
	}
}
