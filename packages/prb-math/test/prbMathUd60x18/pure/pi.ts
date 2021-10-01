import type { BigNumber } from "@ethersproject/bignumber";
import { expect } from "chai";
import { PI } from "hardhat-prb-math/dist/constants";

export default function shouldBehaveLikeEGetter(): void {
  it("returns pi", async function () {
    const expected: BigNumber = PI;
    expect(expected).to.equal(await this.contracts.prbMathUd60x18.getPi());
    expect(expected).to.equal(await this.contracts.prbMathUd60x18Typed.getPi());
  });
}
