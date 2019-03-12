/* tslint:disable no-var-requires */
const withReadme = (require("storybook-readme/with-readme") as any).default
const HeaderReadme = require("./README.md")

import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Header from "./Header"

storiesOf("Header", module)
  .addDecorator(withReadme(HeaderReadme))
  .add("default", () => (
    <Header />
  ))
