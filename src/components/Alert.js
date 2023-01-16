/** @jsx jsx */
import { jsx, Container } from "theme-ui";

function Alert({ children }) {
  return (
    <Container
      sx={{
        border: "1px solid",
        borderColor: "secondary",
        fontSize: [1, 2],
      }}
    >
      {children}
    </Container>
  );
}

export default Alert;
