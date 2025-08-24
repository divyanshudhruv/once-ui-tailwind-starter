"use client";

import {
  Heading,
  Text,
  Button,
  Column,
  Badge,
  Logo,
  Line,
  LetterFx,
  ThemeSwitcher,
  Flex,
  SmartLink,
} from "@once-ui-system/core";

export default function Home() {
  return (
    <Column fillWidth center padding="l" style={{ minHeight: "100vh" }}>
      <BackgroundUI />
      <Column maxWidth="s" horizontal="center" gap="l" align="center">
        <Badge
          textVariant="code-default-s"
          border="neutral-alpha-medium"
          onBackground="neutral-medium"
          vertical="center"
          gap="16"
        >
          <Logo
            dark
            icon="/trademarks/wordmark-dark.svg"
            href="https://once-ui.com"
            size="xs"
          />
          <Logo
            light
            icon="/trademarks/wordmark-light.svg"
            href="https://once-ui.com"
            size="xs"
          />
          +
          <Flex maxWidth={0} style={{ scale: 0.65 }} marginRight="104">
            {" "}
            <Logo
              light
              icon="/trademarks/icon-tailwind.svg"
              href="https://once-ui.com"
              size="xs"
            ></Logo>
          </Flex>
          <Line vert background="neutral-alpha-strong" marginLeft="4" />
          <Text marginX="4">
            <LetterFx trigger="instant">An ecosystem, not a UI kit</LetterFx>
          </Text>
        </Badge>
        <Heading variant="display-strong-xl" marginTop="12">
          Build with purpose and precision
        </Heading>
        <Text
          variant="heading-default-l"
          onBackground="neutral-medium"
          wrap="balance"
          marginBottom="16"
          data-brand="orange"
          data-theme="light"
        >
          Build seamless UIs, now with{" "}
          <SmartLink href="https://tailwindcss.com/">
            <u>Tailwind</u>
          </SmartLink>{" "}
          &{" "}
          <SmartLink href="https://ui.shadcn.com/">
            <u>shadcn/ui</u>
          </SmartLink>.
        </Text>
        <Button
          id="docs"
          href="https://docs.once-ui.com/once-ui/quick-start"
          data-border="rounded"
          weight="default"
          prefixIcon="rocket"
          size="l"
          arrowIcon
        >
          Explore docs
        </Button>
      </Column>
    </Column>
  );
}

import { Background, Mask, Particle, Row } from "@once-ui-system/core";

const BackgroundUI: React.FC<React.ComponentProps<typeof Row>> = ({
  ...flex
}) => {
  return (
    <Row position="absolute" fill overflow="hidden" {...flex}>
      <Background
        fill
        data-solid="color"
        gradient={{
          display: true,
          x: 50,
          y: 100,
          width: 100,
          height: 50,
          colorStart: "brand-solid-medium",
          colorEnd: "static-transparent",
        }}
      />
      <Background
        fill
        position="absolute"
        bottom="0"
        left="0"
        style={{ filter: "blur(1rem)", transform: "scale(1.30)" }}
        gradient={{
          display: true,
          x: 50,
          y: 100,
          width: 100,
          height: 25,
          colorStart: "accent-on-background-weak",
          colorEnd: "static-transparent",
        }}
      />
      <Mask position="absolute" top="0" left="0" x={50} y={50} radius={100}>
        <Particle
          opacity={70}
          fill
          interactive
          speed={1}
          size="2"
          density={200}
          interactionRadius={40}
          pointerEvents="none"
          color="brand-solid-weak"
        />
      </Mask>
    </Row>
  );
};
