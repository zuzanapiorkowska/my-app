import { generateTypes } from "./utils/generateType";

it("should ", async () => {
  await generateTypes(`https://api.github.com/repositories`, "RepositoryType");
});
