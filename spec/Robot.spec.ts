import {Robot} from "../src/Objects/Robot";
import {ComponentTypes}  from "../src/Enum/ComponentTypes";

describe("Robot", () => {
	it("should build robot from and arrary of components", () => {
		let parts = [
			new RobotComponent(ComponentTypes.Head, 5, 7),
			new RobotComponent(ComponentTypes.LeftArm, 5, 7),
			new RobotComponent(ComponentTypes.RightArm, 5, 7),
			new RobotComponent(ComponentTypes.LeftLeg, 5, 7),
			new RobotComponent(ComponentTypes.RightLeg, 5, 7)
		];
		let testRobot = new Robot(parts);
		expect(testedRC.getType).toEqual(ComponentTypes.Head);
		expect(testedRC.getSpeed()).toEqual(5);
		expect(testedRC.getStrength()).toEqual(7);
	});

	it("shoould have a speed of 35", () => {
		expect(testRobot.getSpeed()).toEqual(35);
	});

	it("shoould have a strength of 25", () => {
		expect(testRobot.getStrength()).toEqual(25);
	});
});
