import {RobotComponent} from "../src/Objects/RobotComponent";
import {ComponentTypes}  from "../src/Enum/ComponentTypes";

describe("RobotComponent", () => {
	it("should build a head component to our specification", () => {
		let testedRC = new RobotComponent(ComponentTypes.Head, 5, 7);
		expect(testedRC.getType).toEqual(ComponentTypes.Head);
		expect(testedRC.getSpeed()).toEqual(5);
		expect(testedRC.getStrength()).toEqual(7);
	});
});
