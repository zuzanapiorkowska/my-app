import { generateTypes } from "./utils/generateType";

it.skip("should ", async () => {
  await generateTypes(
    `https://api.github.com/search/repositories?q="dst"`,
    "RepositoryType1"
  );
});

it.skip("should ", async () => {
  await generateTypes(
    `https://api.github.com/users/mwakulinski`,
    "SpecificUserType"
  );
});

it.skip("should ", async () => {
  await generateTypes(`https://api.github.com/search/users`, "UserType");
});
