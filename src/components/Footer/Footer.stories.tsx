/* tslint:disable no-var-requires */
const withReadme = (require("storybook-readme/with-readme") as any).default
const FooterReadme = require("./README.md")

import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Footer from "./Footer"

storiesOf("Footer", module)
  .addDecorator(withReadme(FooterReadme))
  .add("default", () => <Footer>Footer Content</Footer>)
