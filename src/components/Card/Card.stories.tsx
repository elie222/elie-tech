import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Card from "./Card"

storiesOf("Card", module)
  .add("default", () => (
    <Card />
  ))
