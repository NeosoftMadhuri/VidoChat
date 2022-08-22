import React, { useState } from "react";
import {
  Grid,
  Skeleton,
  Container,
  TextInput,
  PasswordInput,
  Tooltip,
  Center,
  Text,
} from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons";

const child = <Skeleton height={140} radius="md" animate={false} />;

function TooltipIcon() {
  const rightSection = (
    <Tooltip
      label="Enter Email-id"
      position="top-end"
      withArrow
      transition="pop-bottom-right"
    >
      <Text color="dimmed" sx={{ cursor: "help" }}>
        <Center>
          <IconInfoCircle size={18} stroke={3} />
        </Center>
      </Text>
    </Tooltip>
  );
  return (
    <TextInput
      rightSection={rightSection}
      label="Tooltip shown on icon hover"
      placeholder="Your email"
    />
  );
}

function TooltipFocus() {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState("");
  const valid = value.trim().length >= 6;
  return (
    <Tooltip
      label={
        valid ? "All good!" : "Password must include at least 6 characters"
      }
      position="bottom-start"
      withArrow
      opened={opened}
      color={valid ? "teal" : undefined}
    >
      <PasswordInput
        label="Enter Password"
        required
        placeholder="Your password"
        onFocus={() => setOpened(true)}
        onBlur={() => setOpened(false)}
        mt="md"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
    </Tooltip>
  );
}

export default function Home() {
  return (
    <>
      <Container my="sm" fluid>
        <Grid>
          <Grid.Col xs={12}>{child}</Grid.Col>
          <Grid.Col xs={12}>{child}</Grid.Col>
          <Grid.Col xs={3}>{child}</Grid.Col>
          <Grid.Col xs={3}>{child}</Grid.Col>
          <Grid.Col xs={6}>{child}</Grid.Col>
          <Grid.Col xs={12}>
            <TooltipIcon />
            <TooltipFocus />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
