import React from 'react';
import {
  NODE_HEADING,
  NODE_CODEBLOCK,
  NODE_PARAGRAPH,
  NODE_QUOTE,
  NODE_OL,
  NODE_UL,
  NODE_LI,
  NODE_HR,
  NODE_IMAGE,
  MARK_LINK,
  MARK_CODE,
} from 'storyblok-rich-text-react-renderer';
import { ColorPalette, ColorItem } from '@storybook/addon-docs';
import { Highlight, CodeSnippets } from '@storybook/design-system';
import { components as htmlComponents } from '@storybook/components';

const resolver = (Element) => (children, props) =>
  <Element {...props}>{children}</Element>;

const nodeResolvers = {
  [NODE_HEADING]: (children, { level, ...props }) => {
    const Heading = htmlComponents[`h${level}`];
    return <Heading {...props}>{children}</Heading>;
  },
  [NODE_CODEBLOCK]: (children, { level, ...props }) => {
    const Pre = htmlComponents.pre;
    const Code = htmlComponents.code;
    return (
      <Pre {...props}>
        <Code>{children}</Code>
      </Pre>
    );
  },
  [NODE_PARAGRAPH]: resolver(htmlComponents.p),
  [NODE_QUOTE]: resolver(htmlComponents.blockquote),
  [NODE_OL]: resolver(htmlComponents.ol),
  [NODE_UL]: resolver(htmlComponents.ul),
  [NODE_LI]: resolver(htmlComponents.li),
  [NODE_HR]: resolver(htmlComponents.hr),
  [NODE_IMAGE]: resolver(htmlComponents.img),
};

const markResolvers = {
  [MARK_LINK]: resolver(htmlComponents.a),
  [MARK_CODE]: resolver(htmlComponents.code),
};

const blokResolvers = {
  code: ({ source, language }) => {
    return (
      <Highlight language={language} withHTMLChildren={false}>
        {source}
      </Highlight>
    );
  },
  codeSnippets: (props) => {
    const snippets = props.snippets.map((snippet, idx) => ({
      Snippet: () => (
        <pre className={`language-${snippet.language}`}>
          <code className={`language-${snippet.language}`}>
            {snippet.source}
          </code>
        </pre>
      ),
      id: snippet._uid,
      renderTabLabel: () => snippet.label,
    }));

    return <CodeSnippets snippets={snippets} />;
  },
  colorPalette: ({ colors }) => {
    return (
      <ColorPalette>
        {colors.map((color) => (
          <ColorItem key={color._uid} {...color} />
        ))}
      </ColorPalette>
    );
  },
};

export default { nodeResolvers, markResolvers, blokResolvers };
