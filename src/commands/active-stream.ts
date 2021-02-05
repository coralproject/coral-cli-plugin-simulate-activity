import { Command, flags } from "@coralproject/coral-cli-command";
import color from "@heroku-cli/color";
import { cli } from "cli-ux";
import * as fs from "fs";

export const GetStoryQuery = /* GraphQL */ `
  query GetStoryQuery($id: ID) {
    story(id: $id) {
      id
      url
    }
  }
`;

export const CreateCommentMutation = /* GraphQL */ `
  mutation CreateCommentMutation($storyID: ID!, $body: String!) {
    createComment(
      input: { storyID: $storyID, body: $body, clientMutationId: "" }
    ) {
      edge {
        node {
          id
        }
      }
    }
  }
`;

export default class CommentCreate extends Command {
  public static description = "create a comment";

  public static flags = {
    domain: flags.domain({ required: true }),
    storyID: flags.string({
      required: true,
      description: "the ID of the story to add a comment to"
    }),
    file: flags.string({
      required: true,
      description: "a file with text"
    }),
    interval: flags.integer({
      required: false,
      description: "Interval for posting comments"
    })
  };

  public async run() {
    const {
      flags: { domain, storyID, file, interval }
    } = this.parse(CommentCreate);

    const {
      data: { story }
    } = await this.coral(domain).graphql(GetStoryQuery, {
      id: storyID
    });
    if (!story) {
      this.error(`Story with ID ${color.yellow(storyID)} not found`);
    }

    const text = fs.readFileSync(file, "utf-8");

    if (!text) {
      this.error("no file at specified path");
    }

    const lines = text.split("\n").filter((line: string) => line.length >= 1);

    const ids: string[] = [];
    let iterations = 0;
    cli.action.start("Creating comments");

    const timeout = interval || 5000;

    const timer = setInterval(async () => {
      if (iterations >= lines.length) {
        clearInterval(timer);
        console.log(`created ${iterations} records with ids ${ids}`);
        cli.action.stop();
      } else {
        const { data } = await this.coral(domain).graphql(
          CreateCommentMutation,
          {
            storyID,
            body: lines[iterations]
          }
        );
        ids.push(data.createComment.edge.node.id);
        iterations++;
      }
    }, timeout);
  }
}
