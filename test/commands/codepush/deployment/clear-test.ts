import * as Nock from "nock";
import * as Sinon from "sinon";
import CodePushClearDeploymentCommand from "../../../../src/commands/codepush/deployment/clear";
import { CommandArgs, ErrorCodes } from "../../../../src/util/commandline";
import { expect } from "chai";
import { out, prompt } from "../../../../src/util/interaction";

describe("CodePush deployment clear tests", () => {
  let sandbox: Sinon.SinonSandbox;
  const app = "bogus/NameApp";
  const deployment = "bogusDeployment";
  const args: CommandArgs = {
    args: ["--app", app, deployment],
    command: ["codepush", "deployment", "clear"],
    commandPath: "fake/path",
  };

  beforeEach(() => {
    sandbox = Sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("executes the deployment clear operation and stops when user declines it", async function () {
    // Arrange
    const clearCommand = new CodePushClearDeploymentCommand(args);
    const outTextSpy = sandbox.spy(out, "text");
    sandbox.stub(prompt, "confirm").resolves(false);

    // Act
    const result = await clearCommand.execute();

    // Assert
    expect(outTextSpy.calledWithExactly("Clearing release history was cancelled")).to.be.true;
    expect((result as any).succeeded).to.be.true;
  });

  it("should clear the deployment history", async function () {
    // Arrange
    const clearCommand = new CodePushClearDeploymentCommand(args);
    const outTextSpy = sandbox.spy(out, "text");
    sandbox.stub(prompt, "confirm").resolves(true);
    Nock("https://api.appcenter.ms/").delete(`/v0.1/apps/${app}/deployments/${deployment}/releases`).query(true).reply(204, {});

    // Act
    const result = await clearCommand.execute();

    // Assert
    expect(outTextSpy.calledWith(Sinon.match(/^Successfully cleared the deployment .+ app.$/))).to.be.true;
    expect((result as any).succeeded).to.be.true;
  });

  it("should output error when it fails with 404", async function () {
    // Arrange
    const clearCommand = new CodePushClearDeploymentCommand(args);
    sandbox.stub(prompt, "confirm").resolves(true);
    Nock("https://api.appcenter.ms/").delete(`/v0.1/apps/${app}/deployments/${deployment}/releases`).query(true).reply(404, {});

    // Act
    const result = await clearCommand.execute();

    // Assert
    expect((result as any).errorCode).to.be.equal(ErrorCodes.NotFound);
    expect((result as any).errorMessage).contains("does not exist");
  });

  it("should output error when it fails with another error", async function () {
    // Arrange
    const clearCommand = new CodePushClearDeploymentCommand(args);
    const errorMessage = "Some error message";
    sandbox.stub(prompt, "confirm").resolves(true);
    Nock("https://api.appcenter.ms/")
      .delete(`/v0.1/apps/${app}/deployments/${deployment}/releases`)
      .query(true)
      .reply(405, errorMessage);

    // Act
    const result = await clearCommand.execute();

    // Assert
    expect((result as any).errorCode).to.be.equal(ErrorCodes.Exception);
    expect((result as any).errorMessage).to.be.equal(errorMessage);
  });
});
