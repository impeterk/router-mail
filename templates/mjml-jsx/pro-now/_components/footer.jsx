import config from "../config";

// we have expanded config with footer specific values
const footerConfig = {
  ...config,
  logo: "{{logo_link}}",
  brand: config.brandLink,
  links: [
    { name: "{{footer_website}}", value: "{{footer_website}}" },
    {
      name: "Privacy Policy",
      value: "{{privacy_policy}}",
      align: "center",
    },
    { name: "CA Privacy Notice", value: "{{CA_privacy_notice}}" },
  ],
  socials: [
    { name: "LinkedIn", value: "{{linked_in}}" },
    { name: "Facebook", value: "{{facebook}}" },
    { name: "Youtube", value: "{{youtube}}" },
  ],
  background: "rgb(59, 59, 59)",
  color: "#FFFFFF",
};

export function Footer() {
  return (
    <mj-wrapper background-color={footerConfig.background} padding="40px 20px">
      <mj-section padding-bottom="20px">
        <mj-column vertical-align="middle">
          <mj-image
            src="https://dm.henkel-dam.com/is/image/henkel/newsletter_henkel_logo_white?fmt=png-alpha"
            width="72px"
            height="40px"
            padding="0"
            align="left"
            href={footerConfig.logo}
          ></mj-image>
        </mj-column>
        <mj-column vertical-align="middle">
          <mj-text align="right" color={footerConfig.color} padding="0">
            <a
              href={footerConfig.brand}
              style={{ color: footerConfig.color }}
            >{`{{brandName}}`}</a>
          </mj-text>
        </mj-column>
      </mj-section>
      <FooterLinks socials={true} />
      <FooterLinks links={footerConfig.links} linkWidth="120px" />

      <mj-section>
        <mj-column>
          <mj-divider border-color={footerConfig.color} padding="20px 0" />
          {/* <mj-column> */}
          <mj-text color={footerConfig.color} padding="0" font-size="14px">
            {" "}
            &copy;{" "}
            {`{{ToU}} {{footer_legalentity}}, {{footer_legalentitiy_address}}`}
          </mj-text>
          {/* </mj-column> */}
        </mj-column>
      </mj-section>
    </mj-wrapper>
  );
}

function FooterLinks({
  socials = false,
  links = footerConfig.socials,
  linkWidth = "15%",
}) {
  return (
    <mj-section padding-top="20px" text-align="left">
      {socials && (
        <mj-column width="20%" vertical-align="center">
          <mj-text color={footerConfig.color} font-size="14px">
            Follow us:
          </mj-text>
        </mj-column>
      )}
      {links.map((link, idx) => (
        <mj-column width={linkWidth}>
          <mj-text
            color={footerConfig.color}
            text-decoration="underline"
            font-size="14px"
            align={link?.align || "left"}
            padding="0"
            vertical-align="center"
          >
            <a href={link.value} style={{ color: footerConfig.color }}>
              {link.name}
            </a>
          </mj-text>
        </mj-column>
      ))}
    </mj-section>
  );
}
