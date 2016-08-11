import {RobotComponent} from "../src/Objects/RobotComponent";
import {ComponentTypes}  from "../src/Enum/ComponentTypes";

describe("RobotComponent", () => {
	let testedRC = new RobotComponent(ComponentTypes.Head, 5, 7);
	it("should build a head component to our specification", () => {
		expect(testedRC.getType).toEqual(ComponentTypes.Head);
		expect(testedRC.getSpeed()).toEqual(5);
		expect(testedRC.getStrength()).toEqual(7);
	});
});
