import { Button } from "@flyui/core";
import { useIsomorphicLayoutEffect } from "@flyui/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("Acme docs page");
  }, []);
  return (
    <div>
      <h1>Acme Documentation</h1>
      <Button>Click me</Button>
    </div>
  );
}
