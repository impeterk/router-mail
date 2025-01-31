import config from "../config";

// default export for head with values take from config file
// we can expand the config file to include default divider color
const headerConfig = {
  ...config,
  divider: {
    ...config.divider,
    color: "lightgrey",
  },
};

export default function Head({ children, title, preview }) {
  return (
    <mj-head>
      <mj-title>{title}</mj-title>
      <mj-title>{preview}</mj-title>
      <mj-attributes>
        <mj-text
          font-weight={config.text.fontWeight}
          font-size={config.text.fontSize}
          color={config.color}
          padding={config.text.padding}
          line-height="1.25"
        ></mj-text>
        <mj-section padding={config.section.padding}></mj-section>
        <mj-wrapper padding={config.wrapper.padding}></mj-wrapper>
        <mj-divider
          padding={config.divider.padding}
          border-width={config.divider.borderWidth}
          border-color={headerConfig.color}
        />
      </mj-attributes>
      {children}
    </mj-head>
  );
}
