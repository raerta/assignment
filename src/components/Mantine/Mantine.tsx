"use client";
import { Title, Text, Anchor } from "@mantine/core";
import classes from "./Mantine.module.css";

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{" "}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "yellow" }}
        >
          Assignment
        </Text>
      </Title>
    </>
  );
}
