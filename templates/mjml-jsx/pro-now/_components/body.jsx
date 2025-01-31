import config from "../config";

export function Button({
  href = "#",
  border = false,
  children,
  backgroundColor = "#ffffff",
  color = "#000000",
}) {
  return (
    <mj-msobutton
      href={href}
      align="left"
      background-color={backgroundColor}
      color={color}
      font-weight="500"
      font-size="16px"
      border={border && `2px solid ${border}`}
      border-radius="32px"
      padding-left="0"
    >
      {children}
    </mj-msobutton>
  );
}

export function Header() {
  return (
    <mj-section
      background-color="rgb(240, 244, 247)"
      padding="20px 0px"
      width=""
    >
      <mj-group>
        <mj-column
          vertical-align="middle"
          align="left"
          width="35%"
          padding="0px"
        >
          <mj-image
            src="https://dm.henkel-dam.com/is/image/henkel/newsletter_henkel_logo_red?fmt=png-alpha"
            alt="henkel logo"
            width="90"
            height="50"
            href={config.brandLink}
            padding-left="20px"
            padding="0px"
            align="left"
          ></mj-image>
        </mj-column>
        <mj-column vertical-align="middle" align="right" width="65%">
          <mj-text align="right" padding="0px 20px">
            {"{{brandName}}"}{" "}
          </mj-text>
        </mj-column>
      </mj-group>
    </mj-section>
  );
}

export function ContactUs() {
  return (
    <mj-section padding="0 20px 40px 20px">
      <mj-column>
        <mj-text>Questions? We&apos;re here to help.</mj-text>
        <Button href={config.contact.btn.href} border="gray">
          {config.contact.btn.text}
        </Button>
      </mj-column>
    </mj-section>
  );
}

export function CustomerDetails({ title = "Customer", lines = [], ...props }) {
  return (
    <mj-section padding="20px">
      <mj-column>
        <mj-text
          font-size="24px"
          color="#000"
          align="left"
          padding="0"
          padding-bottom="16px"
        >
          <h3>{title}</h3>
        </mj-text>
        {lines.map((entry) => (
          <mj-text align="left" padding="0" padding-bottom="6px">
            {entry}
          </mj-text>
        ))}
      </mj-column>
    </mj-section>
  );
}

export function OrderDetails({ title = "Order no.", text = "1231231123" }) {
  return (
    <mj-section padding-bottom="20px">
      <mj-column padding-left="20px">
        <mj-text padding="0" font-size="12px" padding-bottom="6px">
          <p style={{ margin: 0 }}>{title}</p>
        </mj-text>
        <mj-text padding="0" font-size="24px" font-weight="600">
          <p style={{ margin: 0 }}>{text}</p>
        </mj-text>
      </mj-column>
    </mj-section>
  );
}

export function Items({ count = 2, title = "", divider = true }) {
  const countArr = [];
  for (let i = 0; i < count; i++) {
    countArr.push(i);
  }
  return (
    <mj-wrapper padding="0px">
      {title && (
        <mj-section padding="20px">
          <mj-column>
            <mj-text font-size="24px" align="left" padding="0">
              <h3>{title}</h3>
            </mj-text>
          </mj-column>
        </mj-section>
      )}
      {countArr.map((i) => (
        <mj-section padding="20px 0px" key={i}>
          <mj-group>
            <mj-column width="30%">
              <mj-image
                src="https://dm.henkel-dam.com/is/image/henkel/program-now_loctite-243_example-image_pdp_1-1-ratio?fmt=png-alpha"
                width="90px"
                padding="0"
                href="{{product.href}}"
              ></mj-image>
            </mj-column>
            <mj-column width="70%">
              <mj-text font-weight="600" padding-left="0px">
                2 x{" "}
                <a
                  href="{{product.href}}"
                  style={{ textDecoration: "underline", color: "#000000" }}
                >
                  Loctite PC 7218
                </a>
              </mj-text>
              <mj-text padding-top="0px" padding-left="0px">
                Part no (Sku/ID): <b>1329505</b>
              </mj-text>
              <mj-text padding="0px">
                <b>$ 1,700.00</b> $10.99 each
              </mj-text>
            </mj-column>
          </mj-group>
        </mj-section>
      ))}

      <mj-section padding="0px">
        <mj-column>
          <mj-text padding="0" align="center">
            Access SDS and other product documents via product page links above.
          </mj-text>
        </mj-column>
      </mj-section>
      {divider && (
        <mj-section>
          <mj-column>
            <mj-divider border-width="2px" border-color="lightgrey" />
          </mj-column>
        </mj-section>
      )}
    </mj-wrapper>
  );
}

export function Calculations({
  lines = [
    { name: "Products", value: "120.00" },
    { name: "Taxes", value: "10.00" },
    { name: "Shipping", value: "34.99" },
  ],
}) {
  return (
    <mj-wrapper padding="40px 0px">
      <mj-section>
        <mj-column>
          <mj-divider border-width="2px" border-color="lightgrey" />
        </mj-column>
      </mj-section>
      {lines.map((line) => (
        <mj-section padding="0 20px">
          <mj-column>
            <mj-text>{line.name}</mj-text>
          </mj-column>
          <mj-column>
            <mj-text align="right">{`$${line.value}`}</mj-text>
          </mj-column>
        </mj-section>
      ))}
      <mj-section>
        <mj-column>
          <mj-divider border-width="2px" border-color="lightgrey" />
        </mj-column>
      </mj-section>
      <mj-section padding="0 20px">
        <mj-column>
          <mj-text>
            <b>Total paid</b>
          </mj-text>
        </mj-column>
        <mj-column>
          <mj-text align="right">
            <b>
              $
              {lines.reduce(
                (accumulator, currentValue) =>
                  accumulator + Number(currentValue.value),
                0
              )}
            </b>
          </mj-text>
        </mj-column>
      </mj-section>
      <mj-section>
        <mj-column>
          <mj-divider border-width="2px" border-color="lightgrey" />
        </mj-column>
      </mj-section>
    </mj-wrapper>
  );
}

export function Stage({ title = "", subtitle = "", children }) {
  return (
    <mj-section background-color={config.stage.background}>
      <mj-column padding="40px 20px">
        {title && (
          <mj-text font-size={config.headings.h1.size} padding="0px">
            <h1>{title}</h1>
          </mj-text>
        )}
        {subtitle && (
          <mj-text font-size={config.headings.h2.size} padding="0px">
            <h2>{subtitle}</h2>
          </mj-text>
        )}
        {children}
      </mj-column>
    </mj-section>
  );
}
