import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schema } from "./src/sanity/schemaTypes";
import { projectId, dataset } from "./src/sanity/env";

export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  title: "Turban Digital Blog Admin",
  schema,
  plugins: [deskTool()],
});
