import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, Box, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import { MdArrowDownward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			background="url(https://uploads.quarkly.io/5ffbe221f4d20b002205957a/images/Background2.svg?v=2021-01-12T01:27:18.011Z) 0% 0%/cover,--color-darkL2 url(https://uploads.quarkly.io/5ffbe221f4d20b002205957a/images/Background1.svg?v=2021-01-12T01:21:16.164Z) center/cover"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
						Konnichiwa kore wa{" "}
					</Text>
					<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
						NekoFied
					</Text>
					<Box
						text-align="center"
						margin="96px 0 0 0"
						width="280px"
						height="70px"
						border-radius="20px"
						background="url(https://uploads.quarkly.io/5ffbe221f4d20b002205957a/images/Background-Button.svg?v=2021-01-12T01:26:38.074Z) no-repeat,#ffffff"
					>
						<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
						<Box
							width="64px"
							height="32px"
							border-radius="10px"
							position="absolute"
							bottom="px"
							right="1170px"
							background="url(https://uploads.quarkly.io/5ffbe221f4d20b002205957a/images/telegram.png?v=2021-01-12T01:53:28.846Z) 50% no-repeat,#141884"
							border-color="#2e19a7"
						/>
					</Box>
				</StackItem>
			</Stack>
			<Text width="400px" height="200px" color="#000000" font="400 16px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif">
				<Strong>
					Lorem Ipsum
				</Strong>
				{" "}is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
			</Text>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="url(https://uploads.quarkly.io/5ffbe221f4d20b002205957a/images/Background3.svg?v=2021-01-12T02:00:23.417Z) 0% 0%/cover,--color-light"
			display="flex"
			flex-direction="column"
		>
			<Override slot="SectionContent" flex="1 1 auto" />
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});