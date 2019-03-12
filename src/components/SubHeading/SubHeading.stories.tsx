/* tslint:disable no-var-requires */
const withReadme = (require("storybook-readme/with-readme") as any).default
const SubHeadingReadme = require("./README.md")

import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import SubHeading from "./SubHeading"

storiesOf("SubHeading", module)
  .addDecorator(withReadme(SubHeadingReadme))
  .add("default", () => <SubHeading>SubHeading</SubHeading>)
