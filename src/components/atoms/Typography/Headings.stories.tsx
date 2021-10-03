import { Meta } from "@storybook/react";

import { H1, H2, H3, H4, H5, H6, Headings as Component } from "./Headings";

export default {
  component: Component,
  subcomponents: { H1, H2, H3, H4, H5 }, //👈 Adds the ListItem component as a subcomponent
  title: "Atoms/Typography/Headings",
} as Meta;

export const Headings = () => (
  <Component>
    <H1>Lorem ipsum dolor sit amet.</H1>
    <H2>Lorem ipsum dolor sit amet.</H2>
    <H3>Lorem ipsum dolor sit amet.</H3>
    <H4>Lorem ipsum dolor sit amet.</H4>
    <H5>Lorem ipsum dolor sit amet.</H5>
    <H6>Lorem ipsum dolor sit amet.</H6>
  </Component>
);
