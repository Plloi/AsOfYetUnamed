import {Robot} from "../src/Objects/Robot";
import {RobotComponent} from "../src/Objects/RobotComponent";
import {ComponentTypes}  from "../src/Enum/ComponentTypes";

describe("Robot", () => {
	let parts = [
		new RobotComponent(ComponentTypes.Head, 5, 7),
		new RobotComponent(ComponentTypes.LeftArm, 5, 7),
		new RobotComponent(ComponentTypes.RightArm, 5, 7),
		new RobotComponent(ComponentTypes.LeftLeg, 5, 7),
		new RobotComponent(ComponentTypes.RightLeg, 5, 7)
	];
	let testRobot: Robot;

	it("should build robot from and arrary of components", () => {
		testRobot = new Robot(parts);
	});

	it("shoould have a speed of 35", () => {
		expect(testRobot.getSpeed()).toEqual(35);
	});

	it("shoould have a strength of 25", () => {
		expect(testRobot.getStrength()).toEqual(25);
	});
});
